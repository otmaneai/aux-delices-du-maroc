"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import PageHero from "../components/PageHero";
import { convexReact, api } from "@/lib/convex";
import Link from "next/link";

// Interface for a single menu item
type MenuItem = {
  _id?: any;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

type Section = {
  _id?: any;
  title: string;
  items: MenuItem[];
  imageUrl?: string;
};

// Interface for the props of a menu section component
interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  image: string;
  imagePosition: "left" | "right";
}

// The complete menu data, structured for easy mapping
const menuData: Omit<MenuSectionProps, "imagePosition">[] = [
  {
    title: "Entrées Froides",
    image: "/gallery/entrees-froides.webp",
    items: [
      {
        name: "Salade Marocaine",
        price: 6.9,
        description: "Salade de tomates, poivrons, oignons et olives",
      },
      {
        name: "Zaalouk",
        price: 7.5,
        description: "Caviar d'aubergines à la marocaine",
      },
      {
        name: "Slata Mechouia",
        price: 6.9,
        description: "Poivrons, tomates grillés et ail",
      },
      { name: "Avocat Crevettes", price: 7.0, description: "" },
    ],
  },
  {
    title: "Entrées Chaudes",
    image: "/gallery/entrees-chaudes.webp",
    items: [
      {
        name: "Harira",
        price: 8.0,
        description: "Soupe traditionnelle marocaine",
      },
      { name: "Brick à l’œuf", price: 5.0, description: "" },
      { name: "Brick de chèvre au miel", price: 6.9, description: "" },
      {
        name: "Brick kefta maison et à l’œuf",
        price: 6.9,
        description: "",
      },
      { name: "Brick au thon et à l’œuf", price: 6.9, description: "" },
      {
        name: "Brick aux crevettes et à l’œuf",
        price: 6.9,
        description: "",
      },
      { name: "Brick au poulet et à l’œuf", price: 6.9, description: "" },
      {
        name: "Pastilla au poulet",
        price: 9.5,
        description: "Feuilleté aux amandes et poulet",
      },
      {
        name: "Pastilla aux fruits de mer",
        price: 14.5,
        description:
          "Feuilletée et sa farce crevettes, moules, calamars et vermicelles",
      },
      {
        name: "Chakchouka",
        price: 8.0,
        description:
          "Feuilletée et sa farce crevettes, moules, calamars et vermicelles",
      },
    ],
  },
  {
    title: "Salades",
    image: "/gallery/salades.webp",
    items: [
      {
        name: "Salade Composée",
        price: 16.5,
        description: "Avocat, salade verte, thon, maïs, tomates et olives",
      },
      {
        name: "Salade Fraicheur",
        price: 16.5,
        description:
          "Concombre, salade, tomate, endives, œufs, carottes rapées",
      },
      {
        name: "Salade Oceane",
        price: 18.0,
        description: "Crevettes, thon, avocat, salade, tomates et olives",
      },
      {
        name: "Salade Mediterranee",
        price: 18.0,
        description:
          "Aubergines grillées, tomate, mozarella, concombre, salade, parmezan et olives",
      },
    ],
  },
  {
    title: "Couscous",
    image: "/gallery/couscous.webp",
    items: [
      { name: "Couscous aux légumes", price: 15.5, description: "" },
      { name: "Couscous aux merguez", price: 16.9, description: "" },
      {
        name: "Couscous kefta de boeuf maison",
        price: 17.9,
        description: "",
      },
      { name: "Couscous au poulet", price: 18.9, description: "" },
      {
        name: "Couscous aux brochettes de poulet",
        price: 18.9,
        description: "",
      },
      { name: "Couscous à l'agneau", price: 19.9, description: "" },
      {
        name: "Couscous aux brochettes d'agneau",
        price: 19.9,
        description: "",
      },
      {
        name: "Couscous Royal",
        price: 22.0,
        description: "Semoule, 7 légumes, merguez, poulet, agneau",
      },
      {
        name: "Couscous Fassi Poulet",
        price: 21.5,
        description: "Confit d'oignons, raisins secs, amandes grillées et miel",
      },
      {
        name: "Couscous Fassi Agneau",
        price: 21.9,
        description: "Confit d'oignons, raisins secs, amandes grillées et miel",
      },
      {
        name: "Couscous Maison",
        price: 21.9,
        description:
          "Kefta (boulette de viande hachée maison), brochette de poulet, merguez et agneau",
      },
      {
        name: "Couscous Mechoui",
        price: 21.0,
        description: "Épaule d'agneau rôtie et sa semoule",
      },
      {
        name: "Couscous Grillades",
        price: 21.9,
        description: "Côtes d'agneau, brochette de poulet et merguez",
      },
    ],
  },
  {
    title: "Tajines",
    image: "/gallery/tajines.webp",
    items: [
      {
        name: "Tajine d'agneau aux pruneaux",
        price: 18.9,
        description: "Agneau mijoté avec des pruneaux et des amandes",
      },
      {
        name: "Tajine de poulet au citron confit",
        price: 16.5,
        description: "Poulet mijoté aux olives et citron confit",
      },
      {
        name: "Tajine Rabat Poulet (Agneau +1€)",
        price: 19.9,
        description: "Citron confit, olives, oignons et pommes de terre",
      },
      {
        name: "Tajine Delices Poulet (Agneau +1€)",
        price: 18.9,
        description: "Aubergines, poivrons, oignons et tomates",
      },
      {
        name: "Tajine Kefta",
        price: 17.9,
        description: "Boulettes de viande hachée maison, sauce tomate et oeuf",
      },
      {
        name: "Tajine de Poisson",
        price: 19.5,
        description:
          "Poisson blanc, poivrons, tomates, pommes de terre et olives",
      },
    ],
  },
  {
    title: "Grillades",
    image: "/gallery/grillades.webp",
    items: [
      { name: "Brochettes de poulet", price: 18.9, description: "" },
      {
        name: "Brochettes d'agneau",
        price: 17.0,
        description: "Brochettes d'agneau marinées et grillées",
      },
      { name: "Brochettes kefta", price: 18.9, description: "" },
      {
        name: "Brochettes mixtes",
        price: 20.9,
        description: "Poulet, agneau, kefta",
      },
      { name: "Côtes d'agneau", price: 20.9, description: "" },
      { name: "Merguez", price: 16.9, description: "" },
      {
        name: "Grillade Mixte",
        price: 20.5,
        description: "Assortiment de viandes grillées",
      },
    ],
  },
  {
    title: "Desserts",
    image: "/gallery/desserts.webp",
    items: [
      { name: "Salade de fruits frais", price: 7.5, description: "" },
      {
        name: "Salade d'oranges à la cannelle",
        price: 6.5,
        description: "Oranges fraîches parfumées à la cannelle",
      },
      { name: "Tiramisu Spéculoos", price: 8.5, description: "" },
      { name: "Fondant au chocolat", price: 8.5, description: "" },
      {
        name: "Assortiment de pâtisseries marocaines",
        price: 8.5,
        description: "Assortiment de douceurs marocaines",
      },
    ],
  },
  {
    title: "Boissons",
    image: "/gallery/2.webp", // Placeholder image for drinks
    items: [
      {
        name: "Orangina, Schweppes, Lipton Iced Tea 25cl",
        price: 4.0,
        description: "",
      },
      { name: "Coca Cola, Perrier 33cl", price: 4.0, description: "" },
      {
        name: "Jus (Orange, Pomme, Ananas, Banane, Abricot, Tomate) 25cl",
        price: 4.0,
        description: "",
      },
    ],
  },
];

// The component for rendering a single menu section with an image
const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  items,
  image,
  imagePosition,
}) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div
            className={`relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl ${
              imagePosition === "left" ? "order-1" : "md:order-1"
            }`}
          >
            <Image
              src={image}
              alt={`Image pour la section ${title}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          {/* Text Column */}
          <div
            className={`${imagePosition === "left" ? "order-2" : "md:order-2"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h2 className="section-title text-center md:text-left">
                  {title}
                </h2>
              </div>
            </div>
            <div className="space-y-6">
              <ul className="space-y-5">
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <div className="flex justify-between items-baseline">
                          <div className="flex items-center gap-2">
                            <h3 className="item-title">{item.name}</h3>
                          </div>
                          <p className="price-text">{item.price} €</p>
                        </div>
                        {item.description && (
                          <p className="text-description mt-1 pr-4">
                            {item.description}
                          </p>
                        )}
                        {item.imageUrl && (
                          <div className="mt-2">
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="h-20 w-32 object-cover rounded"
                            />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// The main page component for the menu
const MenuPage = () => {
  // Convex data
  const listItemsFn = api?.menu?.listMenuItems;
  const listSectionsFn = api?.menuSections?.listSections;
  const items =
    convexReact.useQuery && listItemsFn
      ? (convexReact.useQuery(listItemsFn, {}) as any[] | undefined)
      : undefined;
  const sections =
    convexReact.useQuery && listSectionsFn
      ? (convexReact.useQuery(listSectionsFn, {}) as any[] | undefined)
      : undefined;

  // Build grouped sections from Convex or fallback static
  const grouped = useMemo(() => {
    if (!items || items.length === 0) {
      // Fallback to static
      return menuData.map((s, idx) => ({
        title: s.title,
        items: s.items,
        image: s.image,
        order: idx,
      }));
    }
    const byCat: Record<string, any[]> = {};
    for (const it of items) {
      const cat = it.category || "Divers";
      if (!byCat[cat]) byCat[cat] = [];
      byCat[cat].push({
        _id: it._id,
        name: it.name || "",
        price: it.price || "",
        description: it.description || "",
        order: it.order,
      });
    }
    const defaultOrder = menuData.map((s) => s.title);
    const result: Array<{
      title: string;
      items: any[];
      image: string;
      order: number;
    }> = [];
    const secMap: Record<string, string> = {};
    const secOrderMap: Record<string, number> = {};
    for (const s of sections ?? []) {
      if (s.title && s.imageUrl) secMap[s.title] = s.imageUrl;
      if (s.title && typeof s.order === "number")
        secOrderMap[s.title] = s.order as number;
    }
    const defaultImg: Record<string, string> = Object.fromEntries(
      menuData.map((s) => [s.title, s.image])
    );
    const seen = new Set<string>();
    defaultOrder.forEach((t, idx) => {
      if (byCat[t]) {
        const sortedItems = [...byCat[t]].sort(
          (a, b) => (a.order ?? 9999) - (b.order ?? 9999)
        );
        const secOrder =
          typeof secOrderMap[t] === "number" ? secOrderMap[t] : idx;
        result.push({
          title: t,
          items: sortedItems,
          image: secMap[t] || defaultImg[t],
          order: secOrder,
        });
        seen.add(t);
      }
    });
    Object.keys(byCat).forEach((t) => {
      if (!seen.has(t)) {
        const sortedItems = [...byCat[t]].sort(
          (a, b) => (a.order ?? 9999) - (b.order ?? 9999)
        );
        result.push({
          title: t,
          items: sortedItems,
          image: secMap[t] || defaultImg[t] || "/gallery/2.webp",
          order: 999 + result.length,
        });
      }
    });
    return result.sort((a, b) => a.order - b.order);
  }, [items, sections]);

  return (
    <div className="min-h-screen font-sans text-charcoal">
      <PageHero
        title="Notre Carte"
        subtitle="Un voyage culinaire à travers les saveurs authentiques et les épices envoûtantes du Maroc."
      />

      <main>
        {grouped.map((section, index) => {
          return (
            <div
              key={section.title}
              className={
                index % 2 === 0
                  ? "bg-background"
                  : "bg-gradient-to-br from-background via-background/95 to-background/90"
              }
            >
              <MenuSection
                title={section.title}
                items={section.items}
                image={section.image}
                imagePosition={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          );
        })}
        {/* Call to Action Section */}
        <section className="bg-background/90 py-16 md:py-24">
          <div className="container mx-auto text-center px-6">
            <h2 className="section-title">Prêt à Déguster ?</h2>
            <p className="text-large max-w-3xl mx-auto mb-10">
              Notre cuisine authentique vous attend. Réservez votre table dès
              maintenant pour un voyage culinaire inoubliable au cœur du Maroc.
            </p>
            <Link href="/reservation" className="btn-cta">
              Réserver une Table
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;
