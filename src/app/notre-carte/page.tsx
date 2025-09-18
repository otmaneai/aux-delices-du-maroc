"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import PageHero from "@/app/components/PageHero";
import { api, convexReact } from "@/lib/convex";

type MenuItem = {
  name: string;
  price: number | string;
  description?: string;
  imageUrl?: string;
  order?: number;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  image: string;
  imagePosition: "left" | "right";
};

const imagePath = (filename: string) => encodeURI(`/gallery/${filename}`);

// The complete menu data, structured for easy mapping
const menuData: Omit<MenuSectionProps, "imagePosition">[] = [
  {
    title: "Entrées Froides",
    image: imagePath("entrees-froides.webp"),
    items: [
      {
        name: "SALADE MAROCAINE",
        price: 6.9,
        description:
          "Tomates, poivrons et oignons finement coupés, relevés d'huile d'olive et d'herbes fraîches.",
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
      {
        name: "AVOCAT CREVETTES",
        price: 8.0,
        description:
          "Avocat mûr et crevettes marinées au citron, servis avec une sauce légère à la coriandre.",
      },
    ],
  },
  {
    title: "Entrées Chaudes",
    image: imagePath("entrees-chaudes.webp"),
    items: [
      {
        name: "HARIRA MAROCAINE",
        price: 8.0,
        description:
          "Soupe traditionnelle aux tomates, légumes et pois chiches parfumés au safran.",
      },
      {
        name: "BRICK À L’ŒUF",
        price: 5.5,
        description:
          "Feuille croustillante farcie d'un œuf coulant, parfumée au persil et cumin.",
      },
      {
        name: "BRICK DE CHÈVRE AU MIEL",
        price: 6.9,
        description:
          "Fromage de chèvre crémeux et miel de fleurs enveloppés dans une feuille dorée.",
      },
      {
        name: "BRICK KEFTA ET A L'ŒUF",
        price: 6.9,
        description:
          "Kefta parfumée au ras el-hanout, cœur d'œuf moelleux et coriandre fraîche.",
      },
      {
        name: "BRICK AU THON ET À L’ŒUF",
        price: 6.9,
        description: "Thon mariné, câpres et œuf, croustillants à souhait.",
      },
      {
        name: "BRICK AU POULET ET A L'ŒUF",
        price: 6.9,
        description:
          "Effiloché de poulet safrané, œuf coulant et pointe de citron confit.",
      },
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
    image: imagePath("nos salades.webp"),
    items: [
      {
        name: "SALADE COMPOSÉE",
        price: 16.5,
        description:
          "Avocat, salade verte, thon et maïs servis avec une vinaigrette d'agrumes.",
      },
      {
        name: "SALADE MEDITERRANÉE",
        price: 18.0,
        description:
          "Aubergines grillées, tomates, mozzarella et roquette subtilement relevées au basilic.",
      },
    ],
  },
  {
    title: "Couscous",
    image: imagePath("couscous.webp"),
    items: [
      {
        name: "COUSCOUS AUX LÉGUMES",
        price: 15.5,
        description:
          "Semoule légère et légumes du marché servis avec un bouillon généreux.",
      },
      {
        name: "COUSCOUS AUX MERGUEZ",
        price: 19.0,
        description:
          "Semoule parfumée au curcuma, légumes confits et merguez grillées.",
      },
      {
        name: "COUSCOOUS KEFTA DE BŒUF",
        price: 19.0,
        description:
          "Semoule beurrée, kefta de bœuf épicée, légumes fondants et pois chiches.",
      },
      {
        name: "COUSCOOUS AU POULET",
        price: 20.0,
        description: "Poulet fermier mijoté, légumes doux et semoule beurrée.",
      },
      {
        name: "COUSCOOUS AUX BROCHETTES DE POULET",
        price: 20.0,
        description:
          "Semoule parfumée, brochettes de poulet grillées, légumes et raisins dorés.",
      },
      {
        name: "COUSCOOUS À L’AGNEAU",
        price: 20.5,
        description:
          "Semoule parfumée au gingembre et épaule d'agneau fondante.",
      },
      {
        name: "COUSCOOUS AUX BROCHETTES D'AGNEAU",
        price: 21.0,
        description:
          "Semoule aérienne, légumes confits et brochettes d'agneau grillées.",
      },
      {
        name: "COUSCOOUS ROYAL",
        price: 22.0,
        description:
          "Semoule parfumée, légumes de saison, agneau, poulet, merguez et brochette d'agneau.",
      },
      {
        name: "COUSCOOUS FASSI POULET",
        price: 22.0,
        description:
          "Semoule parfumée au safran, poulet, confit d’oignons, raisins et amandes grillées.",
      },
      {
        name: "COUSCOOUS FASSI AGNEAU",
        price: 23.0,
        description:
          "Semoule parfumée au safran, agneau, confit d’oignons, raisins et amandes grillées.",
      },
      {
        name: "COUSCOOUS MAISON",
        price: 22.5,
        description:
          "Semoule aux épices, kefta maison, brochette de poulet, merguez et agneau rôtis.",
      },
      {
        name: "COUSCOOUS MECHOUI",
        price: 24.5,
        description:
          "Semoule beurrée, légumes et épaule d'agneau grillée au four.",
      },
      {
        name: "COUSCOOUS GRILLADES MIXTES",
        price: 22.5,
        description:
          "Semoule parfumée, côtes d'agneau, brochettes de poulet ou d'agneau et merguez.",
      },
    ],
  },
  {
    title: "Tajines",
    image: imagePath("tajines.webp"),
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
    image: imagePath("tajines de poisson.webp"),
    items: [
      {
        name: "TAJINE TANGER CABILLAUD",
        price: 26.0,
        description:
          "Dos de cabillaud poêlé et légumes fondants parfumés au citron confit.",
      },
      {
        name: "TAJINE DE LOTTE",
        price: 24.5,
        description:
          "Queue de lotte délicatement épicée, olives violettes et tomates confites.",
      },
    ],
  },
  {
    title: "Grillades",
    image: imagePath("grillades.webp"),
    items: [
      {
        name: "MECHOUI D’AGNEAU ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 24.0,
        description:
          "Agneau rôti à basse température, servi avec l'accompagnement de votre choix.",
      },
      {
        name: "BROCHETTES D’AGNEAU ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 21.0,
        description:
          "Brochettes d'agneau grillées, marinées aux herbes fraîches.",
      },
      {
        name: "BROCHETTES DE POULET ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 19.0,
        description:
          "Brochettes de poulet aux épices douces, servies avec semoule ou salade.",
      },
      {
        name: "CÔTE D’AGNEAU ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 20.0,
        description:
          "Côte d'agneau grillée à la braise, accompagnement au choix.",
      },
      {
        name: "MERGUEZ (4 pièces) ET 1 ACCOMPAGNEMENT AU CHOIX",
        price: 19.0,
        description: "Merguez artisanales grillées, accompagnement au choix.",
      },
    ],
  },
  {
    title: "Desserts Maison",
    image: imagePath("desserts maison.webp"),
    items: [
      {
        name: "PÂTISSERIE MAROCAINE (1 PIÈCE)",
        price: 3.0,
        description:
          "Pâtisserie orientale du jour, miel, amandes et fleur d'oranger.",
      },
      {
        name: "SALADE D’ORANGES PARFUMÉES",
        price: 6.0,
        description: "Oranges Parfumées À La Fleur D’oranger Et À La Cannelle",
      },
      {
        name: "ANANAS FRAIS",
        price: 6.0,
        description: "Ananas découpé minute, relevé d'une touche de menthe.",
      },
      {
        name: "SALADE D'ANANAS PIROGUES",
        price: 6.5,
        description:
          "Ananas, agrumes et fruits rouges en salade rafraîchissante.",
      },
      {
        name: "DATTES MEDJOOL (4 PIÈCES)",
        price: 6.0,
        description:
          "Dattes Medjool charnues, servies avec une pointe d'eau de fleur d'oranger.",
      },
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
    image: imagePath("desserts glacés.webp"),
    items: [
      {
        name: "NOUGAT GLACÉ",
        price: 8.7,
        description:
          "Nougat glacé maison aux amandes grillées et coulis de fruits rouges.",
      },
      {
        name: "DAME BLANCHE",
        price: 7.0,
        description:
          "1 boule vanille, 1 boule fraise, 1 boule chocolat, banane",
      },
      {
        name: "CAFÉ LIEGEOIS",
        price: 7.0,
        description: "Glace café, chantilly maison et coulis de moka.",
      },
      {
        name: "CHOCOLAT LIÉGEOIS",
        price: 7.0,
        description: "Glace chocolat intense, crème fouettée et sauce cacao.",
      },
      {
        name: "PROFITEROLES",
        price: 8.5,
        description:
          "Choux croustillants garnis de glace vanille et nappés de chocolat chaud.",
      },
      {
        name: "MYSTERE",
        price: 8.5,
        description:
          "Glace vanille enrobée de meringue croquante et éclats de noisettes.",
      },
      {
        name: "COUPE COLONEL",
        price: 8.5,
        description: "2 boules cassis et boukha",
      },
      {
        name: "CITRON GIVRÉ",
        price: 8.5,
        description: "Sorbet citron glacé servi dans son fruit.",
      },
      {
        name: "POIRE BELLE-HÉLÈNE",
        price: 7.0,
        description: "Poire pochée, glace vanille et coulis chocolat chaud.",
      },
      {
        name: "2 boules Menthe pépite chocolat, GET27",
        price: 7.7,
        description:
          "Duo de glace menthe-chocolat relevé d'une touche de GET27.",
      },
      {
        name: "GLACE RHUM-RAISIN avec Rhum",
        price: 7.7,
        description: "Glace rhum-raisins servie avec un trait de rhum brun.",
      },
    ],
  },
  {
    title: "Les Vins Marocains",
    image: imagePath("les vins marocains.webp"),
    items: [
      {
        name: "GUERROUANE Rouge Ou Rosé 37,5 Cl A.O.G",
        price: 14.0,
        description: "Vin marocain souple aux notes de fruits rouges.",
      },
      {
        name: "GUERROUANE Rouge Ou Rosé 75 Cl A.O.G",
        price: 21.0,
        description: "Bouteille 75 cl aux arômes gourmands de fruits mûrs.",
      },
      {
        name: "BOULAOUANE sérigraphie Rouge Ou Rosé 37,5 Cl",
        price: 14.0,
        description: "Vin emblématique, équilibre entre fraîcheur et rondeur.",
      },
      {
        name: "BOULAOUANE sérigraphie Rouge Ou Rosé 75 Cl",
        price: 21.0,
        description: "Bouteille sérigraphiée au style harmonieux.",
      },
      {
        name: "RIAD JAMIL 75 Cl A.O.G",
        price: 27.0,
        description: "Vin marocain élégant, finale épicée.",
      },
      {
        name: 'MD Excellence Rouge ou rosé nommé "Médaillon" 75 Cl A.O.G',
        price: 29.0,
        description: "Cuvée Médaillon, ample et veloutée.",
      },
      {
        name: 'MD Excellence Rouge ou rosé nommé "Médaillon" 37,5 Cl A.O.G',
        price: 16.0,
        description: "Format 37,5 cl pour une dégustation découverte.",
      },
    ],
  },
  {
    title: "Les Vins Francais",
    image: imagePath("les vins francais.webp"),
    items: [
      {
        name: "VERRE DE VIN Rouge ou Rosé",
        price: 5.5,
        description:
          "Verre de vin maison, parfait pour accompagner votre repas.",
      },
      {
        name: "VIN EN PICHET 25 Cl",
        price: 7.5,
        description: "Pichet de vin de table gouleyant, idéal à partager.",
      },
      {
        name: "VIN EN PICHET 50 Cl",
        price: 12.0,
        description: "Un demi-litre de notre sélection de vin en pichet.",
      },
      {
        name: "CÔTES DU RHÔNE Rouge 37,5 Cl",
        price: 13.0,
        description:
          "Vin rouge fruité et épicé, typique de la vallée du Rhône.",
      },
      {
        name: "CÔTES DU RHÔNE Rouge 75 Cl",
        price: 20.0,
        description: "Bouteille généreuse aux arômes de fruits noirs.",
      },
      {
        name: "CÔTES DE PROVENCE Rosé 37,5 Cl",
        price: 12.5,
        description: "Vin rosé léger et rafraîchissant, notes d'agrumes.",
      },
      {
        name: "CÔTES DE PROVENCE LA SANTONNIERE Rosé 75 Cl A.O.P",
        price: 19.0,
        description: "Un rosé de Provence élégant, parfait pour l'été.",
      },
    ],
  },
  {
    title: "Les Apéritifs et Digestifs",
    image: imagePath("les apéritifs et digestifs.webp"),
    items: [
      {
        name: "KIR ROYAL (Cassis, mûre, framboise, fraise, pêche) 10 Cl",
        price: 8.5,
        description:
          "Champagne et sirop de votre choix pour un apéritif pétillant.",
      },
      {
        name: "KIR (Cassis, mûre, framboise, fraise, pêche) 10 Cl",
        price: 6.0,
        description: "Vin blanc frais relevé d'un sirop fruité au choix.",
      },
      {
        name: "RICARD 2,5CL",
        price: 6.5,
        description: "Pastis anisé servi à l'eau fraîche.",
      },
      {
        name: "PORTO Blanc et Rouge 5 Cl",
        price: 6.5,
        description:
          "Porto blanc ou rouge, notes de fruits secs et de caramel.",
      },
      {
        name: "MARTINI Blanc et Rouge 5 Cl",
        price: 6.5,
        description: "Vermouth italien servi sur glace.",
      },
      {
        name: "COUPE DE CHAMPAGNE 8 Cl",
        price: 8.5,
        description: "Champagne brut servi très frais.",
      },
      {
        name: "HEINEKEN, 1664 33 Cl",
        price: 4.9,
        description: "Bière blonde rafraîchissante au format 33 cl.",
      },
      {
        name: "BIERE CASABLANCA 33 Cl",
        price: 6.5,
        description: "Bière marocaine aux notes maltées.",
      },
      {
        name: "J&B 4 Cl",
        price: 6.8,
        description: "Whisky blended, servi sec ou sur glace.",
      },
      {
        name: "JOHNNIE WALKER 4 Cl",
        price: 7.5,
        description: "Whisky écossais, finale légèrement fumée.",
      },
      {
        name: "CHIVAS / JACK DANIELS 4 Cl",
        price: 8.5,
        description: "Whisky premium au choix, servi pur ou allongé.",
      },
      {
        name: "WHISKY + COCA COLA",
        price: 9.5,
        description: "Whisky de la maison allongé au cola.",
      },
      {
        name: "BOKHA, GET 27",
        price: 8.0,
        description:
          "Boukha de figue ou liqueur de menthe servies très fraîches.",
      },
    ],
  },
  {
    title: "Cocktails Soft",
    image: imagePath("cocktails soft.webp"),
    items: [
      {
        name: "DIABOLO Menthe, Grenadine Ou Fraise",
        price: 5.0,
        description: "Limonade fraîche parfumée au sirop de votre choix.",
      },
      {
        name: "COCKTAIL FRUIT 10 Cl",
        price: 6.5,
        description: "Mélange maison de jus exotiques pressés.",
      },
      {
        name: "VIRGIN MOJITO 10 Cl",
        price: 7.0,
        description: "Menthe fraîche, citron vert et eau pétillante.",
      },
    ],
  },
  {
    title: "Cocktails avec Alcool",
    image: imagePath("cocktails avec alcool.webp"),
    items: [
      {
        name: "COCKTAIL MAISON 10 Cl (vodka,malibu, boukha, jus de fruits)",
        price: 9.0,
        description:
          "Mélange signature de vodka, malibu et boukha aux fruits exotiques.",
      },
      {
        name: "MOJITO",
        price: 8.5,
        description: "Rhum, citron vert, menthe fraîche et sucre de canne.",
      },
      {
        name: "PIÑA COLADA",
        price: 8.5,
        description: "Rhum blanc, ananas et crème de coco.",
      },
      {
        name: "AMERICANO MAISON 10 Cl",
        price: 6.9,
        description: "Apéritif amer, vermouth rouge et trait d'eau pétillante.",
      },
      {
        name: "APEROL SPRITZ",
        price: 8.5,
        description: "Aperol, prosecco et pointe d'orange.",
      },
      {
        name: "VODKA ORANGE 10 Cl",
        price: 7.5,
        description: "Vodka glacée allongée au jus d'orange frais.",
      },
      {
        name: "BOUKHA ORANGE 10 Cl",
        price: 7.5,
        description: "Eau-de-vie de figue relevée d'orange pressée.",
      },
      {
        name: "GIN TONIC 10 Cl",
        price: 8.5,
        description: "Gin premium et tonic artisanal, zestes d'agrumes.",
      },
    ],
  },
  {
    title: "Les Champagnes",
    image: imagePath("les champagnes.webp"),
    items: [
      {
        name: "CHARLES MONTAIN BRUT 75 Cl",
        price: 49.0,
        description: "Champagne brut, bulles fines et notes florales.",
      },
      {
        name: "CORDON ROUGE 75 Cl",
        price: 58.0,
        description: "Champagne Mumm Cordon Rouge, finale élégante.",
      },
    ],
  },
  {
    title: "Les Boissons Fraîches",
    image: imagePath("les boissons fraîches.webp"),
    items: [
      {
        name: "ORANGINA, SCHWEPPES, LIPTON ICED TEA 25 Cl",
        price: 4.0,
        description: "Sodas et thés glacés servis bien frais.",
      },
      {
        name: "COCA, PERRIER 33 Cl",
        price: 4.0,
        description: "Boissons pétillantes iconiques au format 33 cl.",
      },
      {
        name: "JUS (ORANGE, POMME, ANANAS, BANANE, ABRICOT, TOMATE) 25 Cl",
        price: 4.0,
        description: "Jus de fruits au choix, pressés ou pur jus.",
      },
      {
        name: "EAU EVIAN, BADOIT,SAN PELLEGRINO 50 Cl",
        price: 4.0,
        description: "Eaux plates ou gazeuses en bouteille 50 cl.",
      },
      {
        name: "EAU EVIAN, BADOIT,SAN PELLEGRINO 100 Cl",
        price: 6.0,
        description: "Grand format 1 L pour partager.",
      },
    ],
  },
  {
    title: "Les Boissons Chaudes",
    image: imagePath("les boissons chaudes.webp"),
    items: [
      {
        name: "CAFÉ espresso, allongé, décafeiné",
        price: 3.0,
        description: "Sélection de cafés torréfiés à la française.",
      },
      {
        name: "THÉ À LA MENTHE Individuel",
        price: 3.5,
        description: "Thé vert à la menthe fraîche infusé à la marocaine.",
      },
    ],
  },
];

// The component for rendering a single menu section with an image
const MenuSection = ({
  title,
  items,
  image,
  imagePosition,
}: MenuSectionProps) => {
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
          image: secMap[t] || defaultImg[t] || imagePath("cocktails soft.webp"),
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
              <span>Réserver une Table</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;
