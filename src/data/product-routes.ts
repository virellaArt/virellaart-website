/* VIRELLAART LUXURY-CLASSIC PRODUCT ROUTES
 * Luxury-classic products (src/data/products.ts) don't carry a `slug`
 * field the way modern-style products do, and their catalog object key
 * doesn't always match the page's URL segment (e.g. the `valenciaBedroom`
 * key renders at /bedrooms/valencia). This map was generated directly from
 * the actual src/pages/{living-rooms,dining-rooms,bedrooms,tv-units}/*.astro
 * files (each maps 1:1 to a `products.<key>` reference), so it reflects the
 * real, working route for every luxury-classic product. Used to build
 * "related products" links without guessing or duplicating routing logic.
 */
export const luxuryClassicProductPaths: Record<string, string> = {
  alex: "living-rooms/alex",
  aspendos: "living-rooms/aspendos",
  bahar: "living-rooms/bahar",
  delux: "living-rooms/delux",
  lina: "living-rooms/lina",
  lugano: "living-rooms/lugano",
  milanoBlue: "living-rooms/milano-blue",
  milano: "living-rooms/milano",
  queen: "living-rooms/queen",
  saltanatGreenLiving: "living-rooms/saltanat-green",
  saltanatLiving: "living-rooms/saltanat",
  sena: "living-rooms/sena",
  shawl: "living-rooms/shawl",
  sultanSofa: "living-rooms/sultan-sofa",
  sultanLiving: "living-rooms/sultan",
  valdera: "living-rooms/valdera",
  valencia: "living-rooms/valencia",
  vanessa: "living-rooms/vanessa",
  vizyon: "living-rooms/vizyon",
  zerafetLiving: "living-rooms/zerafet",
  zumrut: "living-rooms/zumrut",

  aspendosDining: "dining-rooms/aspendos",
  deluxDining: "dining-rooms/delux",
  linaDining: "dining-rooms/lina",
  milanoBlueDining: "dining-rooms/milano-blue",
  milanoDining: "dining-rooms/milano",
  moonDining: "dining-rooms/moon",
  queenDining: "dining-rooms/queen",
  rivaDiningRoomSet: "dining-rooms/riva-dining-room",
  saltanatDiningGreen: "dining-rooms/saltanat-green",
  saltanatDining: "dining-rooms/saltanat",
  shawlDining: "dining-rooms/shawl",
  sultanGreenDining: "dining-rooms/sultan-green",
  valderaDining: "dining-rooms/valdera",
  valenciaDining: "dining-rooms/valencia",
  vanessaDining: "dining-rooms/vanessa",
  zerafetDining: "dining-rooms/zerafet",
  zumrutDining: "dining-rooms/zumrut",

  aspendosBedroom: "bedrooms/aspendos",
  deluxBedroom: "bedrooms/delux",
  marsilyaBedroom: "bedrooms/marsilya",
  milanoBlueBedroom: "bedrooms/milano-blue",
  milanoBedroom: "bedrooms/milano",
  rioBedroom: "bedrooms/rio",
  saltanatBedroom: "bedrooms/saltanat",
  sultanGreenBedroom: "bedrooms/sultan-green",
  sultanBedroom: "bedrooms/sultan",
  valenciaBedroom: "bedrooms/valencia",
  veronaBedroom: "bedrooms/verona",

  aspendosTV: "tv-units/aspendos",
  deluxTV: "tv-units/delux",
  milanoBlueTv: "tv-units/milano-blue",
  milanoTv: "tv-units/milano",
  moontv: "tv-units/moontv",
  valenciaTV: "tv-units/valencia",
  zumrutTv: "tv-units/zumrut",
};
