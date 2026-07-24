const pages = [

  "/",

  "/living-rooms",
  "/living-rooms/alex",
  "/living-rooms/aspendos",
  "/living-rooms/bahar",
  "/living-rooms/delux",
  "/living-rooms/lugano",
  "/living-rooms/queen",
  "/living-rooms/sena",
  "/living-rooms/shawl",
  "/living-rooms/valencia",
  "/living-rooms/vizyon",


  "/dining-rooms",
  "/dining-rooms/aspendos",
  "/dining-rooms/delux",
  "/dining-rooms/moon",
  "/dining-rooms/queen",
  "/dining-rooms/valencia",


  "/bedrooms",
  "/bedrooms/aspendos",
  "/bedrooms/delux",
  "/bedrooms/valencia",


  "/tv-units",
  "/tv-units/aspendos",
  "/tv-units/delux",
  "/tv-units/moontv",
  "/tv-units/valencia",


  "/about",
  "/contact"

];


export const GET = () => {


  const urls = pages
    .map(
      (page) => `

<url>

<loc>https://www.virellaart.com${page}</loc>

</url>

`
    )
    .join("");



  return new Response(

`
<?xml version="1.0" encoding="UTF-8"?>

<urlset 
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls}

</urlset>
`,

{
headers:{
"Content-Type":"application/xml"
}
}

);

};