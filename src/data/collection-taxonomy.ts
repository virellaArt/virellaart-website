export const collectionStyles = [
  "luxury-classic",
  "modern",
] as const;

export type CollectionStyle =
  (typeof collectionStyles)[number];

export const collectionCategories = [
  "living-rooms",
  "dining-rooms",
  "bedrooms",
  "tv-units",
] as const;

export type CollectionCategory =
  (typeof collectionCategories)[number];

export const collectionStyleSlugs: Record<
  CollectionStyle,
  string
> = {
  "luxury-classic": "luxury-classic",
  modern: "modern",
};

export const collectionCategorySlugs: Record<
  CollectionCategory,
  string
> = {
  "living-rooms": "sofa-sets",
  "dining-rooms": "dining-rooms",
  bedrooms: "bedrooms",
  "tv-units": "tv-units",
};

export const collectionStyleNames: Record<
  CollectionStyle,
  string
> = {
  "luxury-classic": "Luxury & Classic",
  modern: "Modern",
};

export const collectionCategoryNames: Record<
  CollectionCategory,
  string
> = {
  "living-rooms": "Sofa Sets",
  "dining-rooms": "Dining Rooms",
  bedrooms: "Bedrooms",
  "tv-units": "TV Units",
};

export type CollectionProduct = {
  style: CollectionStyle;
  category: CollectionCategory;
};

export function isCollectionStyle(
  value: string,
): value is CollectionStyle {
  return (
    collectionStyles as readonly string[]
  ).includes(value);
}

export function isCollectionCategory(
  value: string,
): value is CollectionCategory {
  return (
    collectionCategories as readonly string[]
  ).includes(value);
}

export function getCollectionRoute(
  style: CollectionStyle,
  category: CollectionCategory,
): string {
  return [
    "",
    "collections",
    collectionStyleSlugs[style],
    collectionCategorySlugs[category],
  ].join("/");
}

export function filterProductsByCollection<
  T extends CollectionProduct,
>(
  products: readonly T[],
  style: CollectionStyle,
  category: CollectionCategory,
): T[] {
  return products.filter(
    (product) =>
      product.style === style &&
      product.category === category,
  );
}

export function getCollectionProductCount<
  T extends CollectionProduct,
>(
  products: readonly T[],
  style: CollectionStyle,
  category: CollectionCategory,
): number {
  return filterProductsByCollection(
    products,
    style,
    category,
  ).length;
}

export const collectionNavigation =
  collectionStyles.map((style) => ({
    style,
    name: collectionStyleNames[style],

    categories:
      collectionCategories.map(
        (category) => ({
          category,
          name:
            collectionCategoryNames[
              category
            ],
          href: getCollectionRoute(
            style,
            category,
          ),
        }),
      ),
  }));
