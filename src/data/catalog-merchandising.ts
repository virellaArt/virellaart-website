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
    key: "burgazSofaSet",
    href: "/collections/modern/sofa-sets/burgaz-sofa-set",
  },
  {
    key: "hunkarSofaSet",
    href: "/collections/modern/sofa-sets/hunkar-sofa-set",
  },
  {
    key: "ibizaSofaSet",
    href: "/collections/modern/sofa-sets/ibiza-sofa-set",
  },
  {
    key: "zenaSofaSet",
    href: "/collections/modern/sofa-sets/zena-sofa-set",
  },
  {
    key: "kanoModernBedroomSet",
    href: "/collections/modern/bedrooms/kano-modern-bedroom-set",
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
