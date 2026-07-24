export const GET = () => {

  return new Response(
`User-agent: *
Allow: /

Sitemap: https://www.virellaart.com/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );

};