import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";
import { ConvexRootProvider } from "@/providers/convex-provider";
import { CookieConsentProvider } from "@/providers/cookie-consent-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://auxdelicesdumaroc.com"),
  alternates: {
    canonical: "/",
  },
  title: "Aux Délices du Maroc - Restaurant Marocain à Draveil",
  description:
    "Découvrez les saveurs authentiques de la cuisine marocaine dans notre restaurant à Draveil. Plats traditionnels préparés avec des ingrédients frais et des épices d'exception.",
  keywords: [
    "restaurant marocain Draveil",
    "cuisine marocaine traditionnelle",
    "gastronomie marocaine",
    "tajine authentique",
    "couscous royal",
    "spécialités marocaines",
    "restaurant halal Essonne",
    "meilleur restaurant marocain Île-de-France",
    "traiteur marocain",
    "réservation restaurant marocain",
    "menu marocain à emporter",
    "dîner oriental Draveil",
  ],
  authors: [{ name: "Aux Délices du Maroc" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Aux Délices du Maroc - Restaurant Marocain à Draveil",
    description:
      "Découvrez les saveurs authentiques de la cuisine marocaine dans notre restaurant à Draveil.",
    url: "https://auxdelicesdumaroc.com",
    siteName: "Aux Délices du Maroc",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aux Délices du Maroc",
    url: "https://auxdelicesdumaroc.com",
    telephone: "+33 1 69 48 79 48",
    address: {
      "@type": "PostalAddress",
      streetAddress: "268 Bd Henri Barbusse",
      addressLocality: "Draveil",
      postalCode: "91210",
      addressCountry: "FR",
    },
    image: [
      "https://auxdelicesdumaroc.com/gallery/4.webp",
      "https://auxdelicesdumaroc.com/gallery/tajines.webp",
      "https://auxdelicesdumaroc.com/gallery/couscous.webp",
    ],
    servesCuisine: ["Moroccan", "Halal"],
    sameAs: [
      "https://instagram.com/auxdelicesdumaroc_draveil",
      "https://www.tripadvisor.fr/Restaurant_Review-g608773-d8076838-Reviews-Aux_Delices_du_Maroc-Draveil_Essonne_Ile_de_France.html",
      "https://www.facebook.com/people/Aux-D%C3%A9lices-du-Maroc/100063508283658/",
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "12:00",
        closes: "14:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "19:00",
        closes: "22:30",
      },
    ],
  };
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="bg-zellij">
        <ConvexRootProvider>
          <CookieConsentProvider>
            <Layout>{children}</Layout>
          </CookieConsentProvider>
        </ConvexRootProvider>
      </body>
    </html>
  );
}
