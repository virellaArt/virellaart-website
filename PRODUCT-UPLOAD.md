# VIRELLAART Terminalden Ürün Yükleme

Bu araç Modern ve Luxury & Classic ürünlerini güvenli ve tekrarlanabilir biçimde siteye ekler.

## Tek komutluk akış

1. Kaynak fotoğrafları `public/incoming/urun-adi/` klasörüne bırakın. JPG, JPEG, PNG, AVIF, GIF, HEIC, HEIF, TIFF ve WebP desteklenir.
2. Örnek manifesti oluşturun:

   ```powershell
   npm run product:init
   ```

3. `product-import.json` içindeki ürün adı, koleksiyon, kategori, sipariş modeli, açıklama, görsel klasörü, alt metinler ve fiyatları düzenleyin. VIRELLAART için `orderModel` değeri `made-to-order` olarak kalmalıdır.
4. Ön kontrol yapın:

   ```powershell
   npm run product:add -- --manifest product-import.json --dry-run
   ```

5. Ürünü ekleyip bütün siteyi doğrulayın:

   ```powershell
   npm run product:add -- --manifest product-import.json
   ```

6. Tek seferde commit ve canlı yayın yapmak için:

   ```powershell
   npm run product:add -- --manifest product-import.json --publish
   ```

## Araç neleri otomatik yapar?

- Ürün anahtarını ve SEO URL slug bilgisini üretir veya doğrular.
- Modern ürünleri `/collections/modern/...`, Luxury & Classic ürünlerini mevcut kategori rotalarına bağlar.
- Görselleri doğal dosya sırasıyla okur.
- Her görseli doğrulanmış WebP dosyasına dönüştürür ve SEO uyumlu adlandırır.
- Kaynak görselleri yalnızca ürün build ve bağlantı kontrolleri başarıyla tamamlandıktan sonra siler.
- `src/data/products.ts` ürün kaydını ve Astro ürün sayfasını oluşturur.
- Ürün fiyatlarını, ölçüleri, galeri alt metinlerini ve WhatsApp teklif seçeneklerini bağlar.
- Fiziksel depo stoku veya ön sipariş beyanı oluşturmaz. Sayfada sipariş üzerine üretim modelini açıkça gösterir; Google'ın desteklediği `InStock` değerini yalnızca ürünün şu anda siparişe açık ve karşılanabilir olduğunu bildirmek için kullanır.
- Astro build, sitemap, canonical rota, render edilmiş ürün içeriği ve bütün iç bağlantıları doğrular.
- Bir hata olursa ürün kaydını, rotayı ve yeni hedef görselleri geri alır; kaynak fotoğrafları korur.
- `--publish` kullanıldığında yalnızca ürün dosyalarını commit eder, `main` dalını GitHub'a gönderir ve Cloudflare Pages otomatik yayınının canlı ürün URL'sini en fazla 10 dakika doğrular.
- Kaynak JPG/PNG dosyaları ancak build, iç bağlantı kontrolü ve canlı Cloudflare doğrulaması başarılı olduktan sonra silinir.

## Yeni Codex sohbetine verilecek kısa talimat

```text
VIRELLAART reposunda PRODUCT-UPLOAD.md akışını kullan.
Ürün bilgilerim ve public/incoming içindeki görsellerimle product-import.json hazırla.
Önce --dry-run, sonra --publish çalıştır.
Build, iç bağlantılar, sitemap, SEO ve canlı URL doğrulanana kadar devam et.
```

Manifest alanları için `product-import.schema.json`, tam örnek için `examples/product-import.example.json` kullanılabilir.
