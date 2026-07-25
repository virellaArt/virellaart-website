import http from "node:http";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const productsFile = join(projectRoot, "src", "data", "products.ts");
const port = Number(process.env.VIRELLA_ADMIN_PORT || 4322);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function getProducts() {
  const source = await readFile(productsFile, "utf8");
  const products = [];
  const entryPattern = /^\s{2}([A-Za-z0-9]+):\s*\{([\s\S]*?)^\s{2}\},?$/gm;

  for (const match of source.matchAll(entryPattern)) {
    const [, id, body] = match;
    const name = body.match(/name:\s*"([^"]+)"/)?.[1];
    const category = body.match(/category:\s*"([^"]+)"/)?.[1];
    const image = body.match(/images:\s*\[\s*"([^"]+)"/)?.[1];
    if (name && category && image) products.push({ id, name, category, image });
  }

  return products;
}

function dashboard(products) {
  const rows = products.map((product) => `
    <article class="product">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
      <div><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.category)}</span></div>
      <button disabled title="Bu adım bir sonraki geliştirmede etkinleşecek">Düzenle</button>
    </article>`).join("");

  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Virella Art Yönetim</title>
  <style>body{margin:0;background:#171411;color:#f5efe5;font:16px system-ui,sans-serif}main{max-width:1040px;margin:auto;padding:48px 24px}header{display:flex;justify-content:space-between;gap:20px;align-items:center;border-bottom:1px solid #59472b;padding-bottom:24px}h1{margin:0;font:400 42px Georgia,serif}p{color:#c8beb0}button{border:0;background:#b89555;color:#171411;padding:12px 16px;font-weight:700;cursor:pointer}.notice{margin:28px 0;padding:16px;border:1px solid #59472b;color:#c8beb0}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}.product{display:grid;grid-template-columns:76px 1fr auto;gap:14px;align-items:center;border:1px solid #403327;padding:12px;background:#211c18}.product img{width:76px;height:58px;object-fit:cover}.product span{display:block;margin-top:5px;color:#c9a55b;font-size:12px;text-transform:uppercase}dialog{max-width:560px;width:calc(100% - 48px);background:#211c18;color:#f5efe5;border:1px solid #b89555;padding:24px}form{display:grid;gap:14px}label{display:grid;gap:6px;color:#c8beb0}input,select{padding:12px;background:#171411;color:#f5efe5;border:1px solid #59472b}@media(max-width:560px){header{align-items:flex-start;flex-direction:column}h1{font-size:34px}}</style></head><body><main><header><div><p>YEREL YÖNETİM</p><h1>Virella Art</h1></div><button id="newProduct" type="button">+ Yeni ürün</button></header><div class="notice">Bu ekran yalnızca bilgisayarınızda çalışır. Ürün ekleme akışı hazırlanıyor; mevcut ürünler güvenli olarak görüntülenir.</div><section class="grid">${rows || "<p>Ürünler okunamadı.</p>"}</section></main><dialog id="productDialog"><form method="dialog"><h2>Yeni ürün taslağı</h2><label>Ürün adı<input required placeholder="Örn. Verona Bedroom" /></label><label>Kategori<select><option>Living Rooms</option><option>Dining Rooms</option><option>Bedrooms</option><option>TV Units</option></select></label><label>Fiyat türü<select><option>Komple set</option><option>Parça fiyatları</option></select></label><menu><button value="cancel">Kapat</button></menu></form></dialog><script>const button=document.querySelector('#newProduct');const dialog=document.querySelector('#productDialog');button.addEventListener('click',()=>dialog.showModal());</script></body></html>`;
}

http.createServer(async (request, response) => {
  if (request.url !== "/") { response.writeHead(404); response.end("Not found"); return; }
  try {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(dashboard(await getProducts()));
  } catch (error) {
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end(`Yönetim aracı başlatılamadı: ${error.message}`);
  }
}).listen(port, () => console.log(`Virella Art Yönetim: http://localhost:${port}`));
