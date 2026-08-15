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

/* VIRELLAART SIGNATURE COLLECTION — Phase 2 (approved by Murat, 2026-08-15)
 * Order is significant: entries 1-3 are the Hero tier, 4-6 are the Support
 * tier. This data shape has no dedicated tier field, so the hero/support
 * distinction is expressed purely through array order (see
 * seo-architecture-audit.md / signature-collection-candidates.md for the
 * approved rationale). Do not reorder without Murat's sign-off. */
export const featuredCollections = [
  {
    key: "shawl",
    href: "/living-rooms/shawl",
  },
  {
    key: "saltanatDining",
    href: "/dining-rooms/saltanat",
  },
  {
    key: "sultanBedroom",
    href: "/bedrooms/sultan",
  },
  {
    key: "valencia",
    href: "/living-rooms/valencia",
  },
  {
    key: "zumrutDining",
    href: "/dining-rooms/zumrut",
  },
  {
    key: "milanoBedroom",
    href: "/bedrooms/milano",
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
