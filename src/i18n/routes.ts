export const productRoutes = {
  "living-rooms/alex": "alex",
  "living-rooms/aspendos": "aspendos",
  "living-rooms/bahar": "bahar",
  "living-rooms/delux": "delux",
  "living-rooms/lugano": "lugano",
  "living-rooms/queen": "queen",
  "living-rooms/sena": "sena",
  "living-rooms/shawl": "shawl",
  "living-rooms/valencia": "valencia",
  "living-rooms/vanessa": "vanessa",
  "living-rooms/vizyon": "vizyon",
  "dining-rooms/aspendos": "aspendosDining",
  "dining-rooms/delux": "deluxDining",
  "dining-rooms/moon": "moonDining",
  "dining-rooms/queen": "queenDining",
  "dining-rooms/valencia": "valenciaDining",
  "bedrooms/aspendos": "aspendosBedroom",
  "bedrooms/delux": "deluxBedroom",
  "bedrooms/valencia": "valenciaBedroom",
  "tv-units/aspendos": "aspendosTV",
  "tv-units/delux": "deluxTV",
  "tv-units/moontv": "moontv",
  "tv-units/valencia": "valenciaTV",
} as const;

export const staticRoutes = [
  "",
  "living-rooms",
  "dining-rooms",
  "bedrooms",
  "tv-units",
  "about",
  "contact",
] as const;

export const allRoutes = [
  "",
  ...staticRoutes.filter((route) => route !== ""),
  ...Object.keys(productRoutes),
];
