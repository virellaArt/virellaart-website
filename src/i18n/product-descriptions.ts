import type { Language } from "./config";

/* VIRELLAART PER-PRODUCT LOCALIZED DESCRIPTIONS
 * Unique, product-specific descriptions for non-English markets, keyed by
 * `${product.style ?? "luxury-classic"}|${product.name}` (see
 * getProductDescriptionOverrideKey in ./config.ts) so the two products that
 * share a display name across the luxury-classic and modern lines (Bahar
 * Sofa Set, Milano Bedroom Set) don't collide. A language/product pair with
 * no entry here falls back to the generic category template in config.ts.
 *
 * Rules: every entry must be a faithful, natural-language adaptation of the
 * product's real English description — no invented materials, dimensions or
 * techniques, and no reused boilerplate across products.
 */
export const productDescriptionOverrides: Partial<
  Record<Language, Record<string, string>>
> = {
  fr: {},
};
