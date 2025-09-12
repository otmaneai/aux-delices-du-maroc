import type { Metadata } from "next";
import "./globals.css";
import Layout from "./components/Layout";
import { ConvexRootProvider } from "@/providers/convex-provider";

export const metadata: Metadata = {
  title: "Aux Délices du Maroc - Restaurant Marocain à Draveil",
  description:
    "Découvrez les saveurs authentiques de la cuisine marocaine dans notre restaurant à Draveil. Plats traditionnels préparés avec des ingrédients frais et des épices d'exception.",
  keywords:
    "restaurant marocain, cuisine marocaine, Draveil, Aux Délices du Maroc, tajine, couscous, spécialités marocaines",
  authors: [{ name: "Aux Délices du Maroc" }],
  icons: {
    icon: "/gallery/logo.webp",
    shortcut: "/gallery/logo.webp",
    apple: "/gallery/logo.webp",
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
    servesCuisine: ["Moroccan"],
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
          <Layout>{children}</Layout>
        </ConvexRootProvider>
      </body>
    </html>
  );
}
