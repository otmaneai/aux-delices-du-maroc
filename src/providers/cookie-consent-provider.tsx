"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { api, convexReact } from "@/lib/convex";

const STORAGE_KEY = "addm.cookieConsent.v1";
const POLICY_VERSION = "2025-09-17";

type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type ConsentDecision = {
  categories: ConsentCategories;
  timestamp: string;
  version: string;
  method: "accept_all" | "reject_all" | "custom";
};

type CookieConsentContextValue = {
  status: "loading" | "undecided" | "decided";
  decision: ConsentDecision | null;
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  saveCustom: (categories: Pick<ConsentCategories, "analytics" | "marketing">) => void;
  resetConsent: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(
  undefined
);

function parseStoredConsent(value: string | null): ConsentDecision | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as ConsentDecision;
    if (parsed?.version !== POLICY_VERSION) return null;
    if (!parsed?.categories) return null;
    return {
      ...parsed,
      categories: {
        necessary: true,
        analytics: Boolean(parsed.categories.analytics),
        marketing: Boolean(parsed.categories.marketing),
      },
    };
  } catch (error) {
    console.warn("Invalid cookie consent value", error);
    return null;
  }
}

const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [decision, setDecision] = useState<ConsentDecision | null>(null);
  const [status, setStatus] = useState<"loading" | "undecided" | "decided">(
    "loading"
  );
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const recordConsentMutation =
    convexReact.useMutation && api?.cookieConsents?.record
      ? convexReact.useMutation(api.cookieConsents.record)
      : null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = parseStoredConsent(localStorage.getItem(STORAGE_KEY));
    if (stored) {
      setDecision(stored);
      setStatus("decided");
    } else {
      setStatus("undecided");
    }
  }, []);

  useEffect(() => {
    const handler = () => setPreferencesOpen(true);
    window.addEventListener("open-cookie-preferences", handler);
    return () => window.removeEventListener("open-cookie-preferences", handler);
  }, []);

  const persistDecision = useCallback((
    categories: Pick<ConsentCategories, "analytics" | "marketing">,
    method: ConsentDecision["method"]
  ) => {
    const nextDecision: ConsentDecision = {
      categories: {
        necessary: true,
        analytics: categories.analytics,
        marketing: categories.marketing,
      },
      timestamp: new Date().toISOString(),
      version: POLICY_VERSION,
      method,
    };
    setDecision(nextDecision);
    setStatus("decided");
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextDecision));
    }
    if (recordConsentMutation) {
      recordConsentMutation({
        analytics: categories.analytics,
        marketing: categories.marketing,
        method,
        consentVersion: POLICY_VERSION,
        userAgent:
          typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      }).catch((error: unknown) => {
        if (process.env.NODE_ENV !== "production") {
          console.warn("Consent log failed", error);
        }
      });
    }
  }, [recordConsentMutation]);

  const acceptAll = useCallback(() => {
    persistDecision({ analytics: true, marketing: true }, "accept_all");
    setPreferencesOpen(false);
  }, [persistDecision]);

  const rejectAll = useCallback(() => {
    persistDecision({ analytics: false, marketing: false }, "reject_all");
    setPreferencesOpen(false);
  }, [persistDecision]);

  const saveCustom = useCallback(
    (categories: Pick<ConsentCategories, "analytics" | "marketing">) => {
      persistDecision(categories, "custom");
      setPreferencesOpen(false);
    },
    [persistDecision]
  );

  const openPreferences = useCallback(() => {
    setPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setPreferencesOpen(false);
    if (status === "loading" && !decision) {
      setStatus("undecided");
    }
  }, [status, decision]);

  const resetConsent = useCallback(() => {
    setDecision(null);
    setStatus("undecided");
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const value = useMemo(
    () => ({
      status,
      decision,
      preferencesOpen,
      acceptAll,
      rejectAll,
      openPreferences,
      closePreferences,
      saveCustom,
      resetConsent,
    }),
    [
      status,
      decision,
      preferencesOpen,
      acceptAll,
      rejectAll,
      openPreferences,
      closePreferences,
      saveCustom,
      resetConsent,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};

export { CookieConsentProvider, useCookieConsent, POLICY_VERSION };
