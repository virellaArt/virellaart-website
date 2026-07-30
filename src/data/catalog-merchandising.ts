import { products } from "./products";

export type ProductKey = keyof typeof products;
export type CatalogCharacter = "classic" | "contemporary";
export type CatalogBadge =
  | "bestSeller"
  | "signature"
  | "newArrival";

const contemporaryProducts = new Set<ProductKey>([
  "valencia",
  "vanessa",
  "aspendos",
  "bahar",
  "delux",
  "lugano",
  "queen",
  "shawl",
  "vizyon",
  "sena",
  "valdera",
  "valenciaDining",
  "deluxDining",
  "aspendosDining",
  "queenDining",
  "moonDining",
  "vanessaDining",
  "shawlDining",
  "valderaDining",
  "aspendosBedroom",
  "deluxBedroom",
  "valenciaBedroom",
  "marsilyaBedroom",
  "rioBedroom",
  "moontv",
  "aspendosTV",
  "deluxTV",
  "valenciaTV",
]);

const productBadges: Partial<
  Record<ProductKey, CatalogBadge>
> = {
  valencia: "bestSeller",
  delux: "signature",
  sultanSofa: "signature",
  sultanGreenDining: "signature",
  milanoBedroom: "bestSeller",
  marsilyaBedroom: "newArrival",
  rioBedroom: "newArrival",
  aspendosDining: "bestSeller",
};

export const featuredCollections = [
  {
    key: "valencia",
    href: "/living-rooms/valencia",
  },
  {
    key: "delux",
    href: "/living-rooms/delux",
  },
  {
    key: "sultanSofa",
    href: "/living-rooms/sultan-sofa",
  },
  {
    key: "sultanGreenDining",
    href: "/dining-rooms/sultan-green",
  },
  {
    key: "milanoBedroom",
    href: "/bedrooms/milano",
  },
  {
    key: "aspendosDining",
    href: "/dining-rooms/aspendos",
  },
  {
    key: "milanoTv",
    href: "/tv-units/milano",
  },
  {
    key: "marsilyaBedroom",
    href: "/bedrooms/marsilya",
  },
] as const satisfies readonly {
  key: ProductKey;
  href: string;
}[];

export function getCatalogMerchandising(
  key: ProductKey,
) {
  const product = products[key];
  const featuredPrice =
    product.prices.find((price) => price.featured) ??
    product.prices[0];
  const priceValue = Number(
    featuredPrice?.price.replace(/[^\d.]/g, ""),
  );

  return {
    product,
    featuredPrice,
    priceValue: Number.isFinite(priceValue)
      ? priceValue
      : 0,
    character: contemporaryProducts.has(key)
      ? ("contemporary" as const)
      : ("classic" as const),
    badge: productBadges[key],
    imageCount: product.images.length,
  };
}
