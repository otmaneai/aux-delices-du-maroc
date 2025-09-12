"use client";

import React from "react";

let ConvexProviderImpl: React.ComponentType<{ children: React.ReactNode }>; // fallback

try {
  // Dynamically require to avoid build-time failure before installing convex
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { ConvexProvider, ConvexReactClient } = require("convex/react");
  const url = process.env.NEXT_PUBLIC_CONVEX_URL as string | undefined;
  const client = url ? new ConvexReactClient(url) : null;
  ConvexProviderImpl = ({ children }) =>
    client ? <ConvexProvider client={client}>{children}</ConvexProvider> : <>{children}</>;
} catch {
  ConvexProviderImpl = ({ children }) => <>{children}</>;
}

export function ConvexRootProvider({ children }: { children: React.ReactNode }) {
  return <ConvexProviderImpl>{children}</ConvexProviderImpl>;
}

