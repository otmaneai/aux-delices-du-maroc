// The complete menu data, structured for easy mapping
const menuData: Omit<MenuSectionProps, "imagePosition">[] = [
  {
    title: "Les Apéritifs et Digestifs",
    image: "/gallery/boissons.webp",
    items: [
      {
        name: "KIR ROYAL (Cassis, mûre, framboise, fraise, pêche) 10 Cl",
        price: 8.5,
      },
      {
        name: "KIR (Cassis, mûre, framboise, fraise, pêche) 10 Cl",
        price: 6.0,
      },
      { name: "RICARD 2,5CL", price: 6.5 },
      { name: "PORTO Blanc et Rouge 5 Cl", price: 6.5 },
      { name: "MARTINI Blanc et Rouge 5 Cl", price: 6.5 },
      { name: "COUPE DE CHAMPAGNE 8 Cl", price: 8.5 },
      { name: "HEINEKEN, 1664 33 Cl", price: 4.9 },
      { name: "BIERE CASABLANCA 33 Cl", price: 6.5 },
      { name: "J&B 4 Cl", price: 6.8 },
      { name: "JOHNNIE WALKER 4 Cl", price: 7.5 },
      { name: "CHIVAS / JACK DANIELS 4 Cl", price: 8.5 },
      { name: "WHISKY + COCA COLA", price: 9.5 },
      { name: "BOKHA, GET 27", price: 8.0 },
    ],
  },
  {
    title: "Cocktails Soft",
    image: "/gallery/2.webp",
    items: [
      { name: "DIABOLO Menthe, Grenadine Ou Fraise", price: 5.0 },
      { name: "COCKTAIL FRUIT 10 Cl", price: 6.5 },
      { name: "VIRGIN MOJITO 10 Cl", price: 7.0 },
    ],
  },
  {
    title: "Cocktails avec Alcool",
    image: "/gallery/1.webp",
    items: [
      {
        name: "COCKTAIL MAISON 10 Cl (vodka,malibu, boukha, jus de fruits)",
        price: 9.0,
      },
      { name: "MOJITO", price: 8.5 },
      { name: "PIÑA COLADA", price: 8.5 },
      { name: "AMERICANO MAISON 10 Cl", price: 6.9 },
      { name: "APEROL SPRITZ", price: 8.5 },
      { name: "VODKA ORANGE 10 Cl", price: 7.5 },
      { name: "BOUKHA ORANGE 10 Cl", price: 7.5 },
      { name: "GIN TONIC 10 Cl", price: 8.5 },
    ],
  },
  {
    title: "Les Champagnes",
    image: "/gallery/3.webp",
    items: [
      { name: "CHARLES MONTAIN BRUT 75 Cl", price: 49.0 },
      { name: "CORDON ROUGE 75 Cl", price: 58.0 },
    ],
  },
  {
    title: "Les Boissons Fraîches",
    image: "/gallery/boissons.webp",
    items: [
      { name: "ORANGINA, SCHWEPPES, LIPTON ICED TEA 25 Cl", price: 4.0 },
      { name: "COCA, PERRIER 33 Cl", price: 4.0 },
      {
        name: "JUS (ORANGE, POMME, ANANAS, BANANE, ABRICOT, TOMATE) 25 Cl",
        price: 4.0,
      },
      { name: "EAU EVIAN, BADOIT,SAN PELLEGRINO 50 Cl", price: 4.0 },
      { name: "EAU EVIAN, BADOIT,SAN PELLEGRINO 100 Cl", price: 6.0 },
    ],
  },
  {
    title: "Les Boissons Chaudes",
    image: "/gallery/4.webp",
    items: [
      { name: "CAFÉ espresso, allongé, décafeiné", price: 3.0 },
      { name: "THÉ À LA MENTHE Individuel", price: 3.5 },
    ],
  },
  {
    title: "Entrées Froides",
    image: "/gallery/entrees-froides.webp",
    items: [
      {
        name: "SALADE MAROCAINE",
        price: 6.9,
        description: "Salade De Tomates, Poivrons, Oignons Et Olives",
      },
      {
        name: "ZAALOUK",
        price: 7.5,
        description: "Caviar D’aubergines Et Tomates Marinées",
      },
      {
        name: "SLATA MECHOUIA",
        price: 7.5,
        description: "Poivrons Et Tomates Grillés et Ail",
      },
      { name: "AVOCAT CREVETTES", price: 8.0 },
    ],
  },
  {
    title: "Entrées Chaudes",
    image: "/gallery/entrees-chaudes.webp",
    items: [
      { name: "HARIRA MAROCAINE", price: 8.0 },
      { name: "BRICK À L’ŒUF", price: 5.5 },
      { name: "BRICK DE CHÈVRE AU MIEL", price: 6.9 },
      { name: "BRICK KEFTA ET A L'ŒUF", price: 6.9 },
      { name: "BRICK AU THON ET À L’ŒUF", price: 6.9 },
      { name: "BRICK AU POULET ET A L'ŒUF", price: 6.9 },
      {
        name: "PASTILLA AU POULET",
        price: 14.5,
        description: "Feuilleté D’émincé De Poulet, Amandes Grillées",
      },
      {
        name: "CHAKCHOUKA",
        price: 8.5,
        description: "Poivrons marinés, oignons, tomates, merguez, œufs",
      },
    ],
  },
  {
    title: "Nos Salades (Plat)",
    image: "/gallery/salades.webp",
    items: [
      {
        name: "SALADE COMPOSÉE",
        price: 16.5,
        description: "Avocat, salade verte, thon, maïs, tomates et olives",
      },
      {
        name: "SALADE MEDITERRANÉE",
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
      { name: "COUSCOUS AUX LÉGUMES", price: 15.5 },
      { name: "COUSCOUS AUX MERGUEZ", price: 19.0 },
      { name: "COUSCOUS KEFTA DE BŒUF", price: 19.0 },
      { name: "COUSCOUS AU POULET", price: 20.0 },
      { name: "COUSCOUS AUX BROCHETTES DE POULET", price: 20.0 },
      { name: "COUSCOUS À L’AGNEAU", price: 20.5 },
      { name: "COUSCOUS AUX BROCHETTES D'AGNEAU", price: 21.0 },
      {
        name: "COUSCOUS ROYAL",
        price: 22.0,
        description: "Agneau, poulet, Merguez,Brochette agneau",
      },
      {
        name: "COUSCOUS FASSI POULET",
        price: 22.0,
        description: "Confit D’oignons, Raisins Secs, Amandes Grillées, Miel",
      },
      {
        name: "COUSCOUS FASSI AGNEAU",
        price: 23.0,
        description: "Confit D’oignons, Raisins Secs, Amandes Grillées, Miel",
      },
      {
        name: "COUSCOUS MAISON",
        price: 22.5,
        description:
          "Kefta (boulette de viande hachée maison), Brochette De Poulet, Merguez, Agneau",
      },
      {
        name: "COUSCOUS MECHOUI",
        price: 24.5,
        description: "Epaule D'agneau Grillée Au Four",
      },
      {
        name: "COUSCOUS GRILLADES MIXTES",
        price: 22.5,
        description:
          "Côtes D'agneau, Brochettes de Poulet (ou brochette Agneau) Et Merguez",
      },
    ],
  },
  {
    title: "Tajines",
    image: "/gallery/tajines.webp",
    items: [
      {
        name: "TAJINE AGADIR POULET",
        price: 22.0,
        description: "Pruneaux, amandes grillées, miel et confit d'oignons",
      },
      {
        name: "TAJINE ATLAS POULET",
        price: 22.0,
        description: "Pommes de terre, Oignons, haricot vert, Carottes",
      },
      {
        name: "TAJINE RABAT POULET",
        price: 21.5,
        description: "Citron Confit, Olives, Oignons",
      },
      {
        name: "TAJINE OUJDA POULET",
        price: 20.0,
        description: "Aubergines, Poivrons, Oignons Et Tomates",
      },
      {
        name: "TAJINE CASA ARTICHAUT POULET",
        price: 20.0,
        description: "Artichauds, Petits Pois, Oignons",
      },
      {
        name: "TAJINE AUX 4 FRUITS AGNEAU",
        price: 23.0,
        description:
          "Ananas caramelisés, pruneaux, figues, abricots, miel et confit d'oignons",
      },
      {
        name: "TAJINE AGADIR AGNEAU",
        price: 23.0,
        description: "Pruneaux, amandes grillées, miel et confit d'oignons",
      },
      {
        name: "TAJINE ATLAS AGNEAU",
        price: 23.0,
        description: "Pommes de terre, Oignons, haricot vert, Carottes",
      },
      {
        name: "TAJINE RABAT AGNEAU",
        price: 22.5,
        description: "Citron Confit, Olives, Oignons",
      },
      {
        name: "TAJINE OUJDA AGNEAU",
        price: 21.0,
        description: "Aubergines, Poivrons, Oignons Et Tomates",
      },
      {
        name: "TAJINE CASA ARTICHAUT AGNEAU",
        price: 21.0,
        description: "Artichauds, Petits Pois, agneau Et Oignons",
      },
      {
        name: "TAJINE FES MROUZIA SUCRÉ/SALE AGNEAU",
        price: 22.0,
        description: "Confit D’oignons, Raisins Secs, Amandes Grillées, Miel",
      },
      {
        name: "TAJINE KEFTA DE BŒUF",
        price: 20.5,
        description:
          "Boulettes de viande hachée de boeuf marinées à la marocaine, Œufs",
      },
      {
        name: "TAGINE AUX LÉGUMES",
        price: 18.5,
        description:
          "Petits Pois, Pomme de terre, Carottes, Oignons, Tomates, Haricots Verts",
      },
    ],
  },
  {
    title: "Tajines de Poisson",
    image: "/gallery/poisson.webp",
    items: [
      {
        name: "TAJINE TANGER CABILLAUD",
        price: 26.0,
        description: "Dos de cabillaud et marinade à la marocaine",
      },
      {
        name: "TAJINE DE LOTTE",
        price: 24.5,
        description: "Et sa marinade à la marocaine",
      },
    ],
  },
  {
    title: "Grillades",
    image: "/gallery/grillades.webp",
    items: [
      {
        name: "MECHOUI D’AGNEAU ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 24.0,
      },
      {
        name: "BROCHETTES D’AGNEAU ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 21.0,
      },
      {
        name: "BROCHETTES DE POULET ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 19.0,
      },
      { name: "CÔTE D’AGNEAU ET 1 ACCOMPAGNEMENT AU CHOIX", price: 20.0 },
      {
        name: "MERGUEZ (4 pièces) ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 19.0,
      },
    ],
  },
  {
    title: "Desserts Maison",
    image: "/gallery/desserts.webp",
    items: [
      { name: "PÂTISSERIE MAROCAINE (1 PIÈCE)", price: 3.0 },
      {
        name: "SALADE D’ORANGES PARFUMÉES",
        price: 6.0,
        description: "Oranges Parfumées À La Fleur D’oranger Et À La Cannelle",
      },
      { name: "ANANAS FRAIS", price: 6.0 },
      { name: "SALADE D'ANANAS PIROGUES", price: 6.5 },
      { name: "DATTES MEDJOOL (4 PIÈCES)", price: 6.0 },
      {
        name: "BAGHRIR (Crèpe milles trous)",
        price: 7.0,
        description: "Au Miel ou au caramel beurre salé",
      },
      {
        name: "ASSORTIMENT DE PÂTISSERIES MAROCAINES",
        price: 8.5,
        description: "Assortiment De 3 Pièces",
      },
    ],
  },
  {
    title: "Desserts Glacés",
    image: "/gallery/desserts.webp",
    items: [
      { name: "NOUGAT GLACÉ", price: 8.7 },
      {
        name: "DAME BLANCHE",
        price: 7.0,
        description: "1 boule vanille, 1 boule fraise, 1 boule chocolat, banane",
      },
      { name: "CAFÉ LIEGEOIS", price: 7.0 },
      { name: "CHOCOLAT LIÉGEOIS", price: 7.0 },
      { name: "PROFITEROLES", price: 8.5 },
      { name: "MYSTERE", price: 8.5 },
      {
        name: "COUPE COLONEL",
        price: 8.5,
        description: "2 boules cassis et boukha",
      },
      { name: "CITRON GIVRÉ", price: 8.5 },
      { name: "POIRE BELLE-HÉLÈNE", price: 7.0 },
      {
        name: "2 boules Menthe pépite chocolat, GET27",
        price: 7.7,
      },
      {
        name: "GLACE RHUM-RAISIN avec Rhum",
        price: 7.7,
      },
    ],
  },
  {
    title: "Les Vins Marocains",
    image: "/gallery/vins.webp",
    items: [
      { name: "GUERROUANE Rouge Ou Rosé 37,5 Cl A.O.G", price: 14.0 },
      { name: "GUERROUANE Rouge Ou Rosé 75 Cl A.O.G", price: 21.0 },
      { name: "BOULAOUANE sérigraphie Rouge Ou Rosé 37,5 Cl", price: 14.0 },
      { name: "BOULAOUANE sérigraphie Rouge Ou Rosé 75 Cl", price: 21.0 },
      { name: "RIAD JAMIL 75 Cl A.O.G", price: 27.0 },
      {
        name: 'MD Excellence Rouge ou rosé nommé "Médaillon" 75 Cl A.O.G',
        price: 29.0,
      },
      {
        name: 'MD Excellence Rouge ou rosé nommé "Médaillon" 37,5 Cl A.O.G',
        price: 16.0,
      },
    ],
  },
  {
    title: "Les Vins Francais",
    image: "/gallery/vins.webp",
    items: [
      { name: "VERRE DE VIN Rouge ou Rosé", price: 5.5 },
      { name: "VIN EN PICHET 25 Cl", price: 7.5 },
      { name: "VIN EN PICHET 50 Cl", price: 12.0 },
      { name: "CÔTES DU RHÔNE Rouge 37,5 Cl", price: 13.0 },
      { name: "CÔTES DU RHÔNE Rouge 75 Cl", price: 20.0 },
      { name: "CÔTES DE PROVENCE Rosé 37,5 Cl", price: 12.5 },
      { name: "CÔTES DE PROVENCE LA SANTONNIERE Rosé 75 Cl A.O.P", price: 19.0 },
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
