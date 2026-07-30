import type { Language } from "./config";

export type CollectionMenuCopy = {
  sofaSets: string;
  luxuryClassic: string;
  modern: string;
  hubTitle: string;
  hubDescription: string;
  hubEyebrow: string;
  hubIntro: string;
  modelSingular: string;
  modelLabel: string;
  modelsSoon: string;
  exploreCategory: string;
  categoryEyebrow: string;
  categoryTitle: string;
  categoryDescription: string;
  emptyTitle: string;
  emptyText: string;
  backToModern: string;
  contact: string;
};

export const collectionMenuCopy: Record<
  Language,
  CollectionMenuCopy
> = {
  en: {
    sofaSets: "Sofa Sets",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Modern Furniture Collections",
    hubDescription:
      "Explore VIRELLAART modern sofa sets, dining rooms, bedrooms and TV units, crafted in Türkiye for refined contemporary interiors.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Discover sculptural forms, refined comfort and contemporary craftsmanship. Every published model includes verified photography, product details and pricing.",
    modelSingular: "model",
    modelLabel: "models",
    modelsSoon: "Models coming soon",
    exploreCategory: "Explore category",
    categoryEyebrow: "VIRELLAART Modern Collection",
    categoryTitle: "Modern {category}",
    categoryDescription:
      "Explore VIRELLAART Modern {category}, presented with verified photography, product details and pricing.",
    emptyTitle: "Modern models are being prepared",
    emptyText:
      "No products are published in this category yet. Every model will be added with verified photographs, configuration details and pricing.",
    backToModern: "Back to Modern Collections",
    contact: "Contact VIRELLAART",
  },
  tr: {
    sofaSets: "Koltuk Takımları",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Modern Mobilya Koleksiyonları",
    hubDescription:
      "Türkiye’de seçkin çağdaş mekanlar için üretilen VIRELLAART modern koltuk takımlarını, yemek odalarını, yatak odalarını ve TV ünitelerini keşfedin.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Heykelsi formları, rafine konforu ve çağdaş işçiliği keşfedin. Yayınlanan her model doğrulanmış fotoğraflar, ürün detayları ve fiyat bilgileriyle sunulur.",
    modelSingular: "model",
    modelLabel: "model",
    modelsSoon: "Modeller yakında",
    exploreCategory: "Kategoriyi incele",
    categoryEyebrow: "VIRELLAART Modern Koleksiyon",
    categoryTitle: "Modern {category}",
    categoryDescription:
      "Doğrulanmış fotoğraflar, ürün detayları ve fiyat bilgileriyle sunulan VIRELLAART Modern {category} koleksiyonunu keşfedin.",
    emptyTitle: "Modern modeller hazırlanıyor",
    emptyText:
      "Bu kategoride henüz yayınlanmış ürün bulunmuyor. Her model doğrulanmış fotoğraflar, takım içeriği ve fiyat bilgisiyle eklenecektir.",
    backToModern: "Modern Koleksiyonlara Dön",
    contact: "VIRELLAART ile İletişim",
  },
  de: {
    sofaSets: "Sofagarnituren",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Moderne Möbelkollektionen",
    hubDescription:
      "Entdecken Sie moderne Sofagarnituren, Esszimmer, Schlafzimmer und TV-Möbel von VIRELLAART, gefertigt in Türkiye für anspruchsvolle Interieurs.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Entdecken Sie skulpturale Formen, raffinierten Komfort und zeitgemäße Handwerkskunst. Jedes veröffentlichte Modell enthält geprüfte Fotos, Produktdetails und Preise.",
    modelSingular: "Modell",
    modelLabel: "Modelle",
    modelsSoon: "Modelle folgen in Kürze",
    exploreCategory: "Kategorie ansehen",
    categoryEyebrow: "VIRELLAART Modern-Kollektion",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Entdecken Sie VIRELLAART Modern · {category} mit geprüften Fotos, Produktdetails und Preisen.",
    emptyTitle: "Moderne Modelle werden vorbereitet",
    emptyText:
      "In dieser Kategorie sind noch keine Produkte veröffentlicht. Jedes Modell wird mit geprüften Fotos, Konfiguration und Preis ergänzt.",
    backToModern: "Zurück zu Modern",
    contact: "VIRELLAART kontaktieren",
  },
  fr: {
    sofaSets: "Ensembles de canapés",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Collections de mobilier moderne",
    hubDescription:
      "Découvrez les canapés, salles à manger, chambres et meubles TV modernes VIRELLAART, fabriqués en Türkiye pour des intérieurs raffinés.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Découvrez des formes sculpturales, un confort raffiné et un savoir-faire contemporain. Chaque modèle publié présente des photos, détails et prix vérifiés.",
    modelSingular: "modèle",
    modelLabel: "modèles",
    modelsSoon: "Modèles prochainement",
    exploreCategory: "Voir la catégorie",
    categoryEyebrow: "Collection VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Découvrez VIRELLAART Modern · {category}, présenté avec photos, détails produits et prix vérifiés.",
    emptyTitle: "Les modèles modernes sont en préparation",
    emptyText:
      "Aucun produit n’est encore publié dans cette catégorie. Chaque modèle sera ajouté avec photos, composition et prix vérifiés.",
    backToModern: "Retour aux collections Modern",
    contact: "Contacter VIRELLAART",
  },
  it: {
    sofaSets: "Set di divani",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Collezioni di mobili moderni",
    hubDescription:
      "Scopri divani, sale da pranzo, camere da letto e mobili TV moderni VIRELLAART, realizzati in Türkiye per interni raffinati.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Scopri forme scultoree, comfort raffinato e artigianalità contemporanea. Ogni modello pubblicato include fotografie, dettagli e prezzi verificati.",
    modelSingular: "modello",
    modelLabel: "modelli",
    modelsSoon: "Modelli in arrivo",
    exploreCategory: "Vedi la categoria",
    categoryEyebrow: "Collezione VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Scopri VIRELLAART Modern · {category}, presentata con fotografie, dettagli e prezzi verificati.",
    emptyTitle: "I modelli moderni sono in preparazione",
    emptyText:
      "Non sono ancora presenti prodotti pubblicati. Ogni modello sarà aggiunto con fotografie, configurazione e prezzo verificati.",
    backToModern: "Torna alle collezioni Modern",
    contact: "Contatta VIRELLAART",
  },
  ru: {
    sofaSets: "Комплекты диванов",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Современные коллекции мебели",
    hubDescription:
      "Откройте для себя современные диваны, столовые, спальни и ТВ-модули VIRELLAART, изготовленные в Türkiye для изысканных интерьеров.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Откройте для себя выразительные формы, изысканный комфорт и современное мастерство. Каждая модель представлена с проверенными фото, характеристиками и ценами.",
    modelSingular: "модель",
    modelLabel: "моделей",
    modelsSoon: "Модели скоро появятся",
    exploreCategory: "Открыть категорию",
    categoryEyebrow: "Коллекция VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Откройте VIRELLAART Modern · {category} с проверенными фотографиями, характеристиками и ценами.",
    emptyTitle: "Современные модели готовятся",
    emptyText:
      "В этой категории пока нет опубликованных товаров. Каждая модель будет добавлена с проверенными фото, комплектацией и ценой.",
    backToModern: "Назад к коллекциям Modern",
    contact: "Связаться с VIRELLAART",
  },
  ar: {
    sofaSets: "أطقم الأرائك",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "مجموعات الأثاث العصري",
    hubDescription:
      "استكشف أطقم الأرائك وغرف الطعام وغرف النوم ووحدات التلفزيون العصرية من VIRELLAART، المصنوعة في Türkiye للديكورات الراقية.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "اكتشف الأشكال النحتية والراحة الراقية والحرفية المعاصرة. يُعرض كل موديل منشور بصور وتفاصيل وأسعار معتمدة.",
    modelSingular: "موديل",
    modelLabel: "موديلًا",
    modelsSoon: "الموديلات قريبًا",
    exploreCategory: "استكشف الفئة",
    categoryEyebrow: "مجموعة VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "استكشف VIRELLAART Modern · {category} مع صور وتفاصيل وأسعار معتمدة.",
    emptyTitle: "يجري تجهيز الموديلات العصرية",
    emptyText:
      "لا توجد منتجات منشورة في هذه الفئة بعد. سيُضاف كل موديل مع صور وتكوين وسعر تم التحقق منها.",
    backToModern: "العودة إلى مجموعات Modern",
    contact: "تواصل مع VIRELLAART",
  },
  bg: {
    sofaSets: "Холни гарнитури",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Модерни мебелни колекции",
    hubDescription:
      "Разгледайте модерни холни гарнитури, трапезарии, спални и ТВ модули VIRELLAART, произведени в Türkiye за изискани интериори.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Открийте скулптурни форми, изискан комфорт и съвременна изработка. Всеки публикуван модел включва проверени снимки, детайли и цени.",
    modelSingular: "модел",
    modelLabel: "модела",
    modelsSoon: "Модели очаквайте скоро",
    exploreCategory: "Разгледайте категорията",
    categoryEyebrow: "Колекция VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Разгледайте VIRELLAART Modern · {category} с проверени снимки, детайли и цени.",
    emptyTitle: "Подготвяме модерните модели",
    emptyText:
      "Все още няма публикувани продукти. Всеки модел ще бъде добавен с проверени снимки, конфигурация и цена.",
    backToModern: "Назад към Modern",
    contact: "Свържете се с VIRELLAART",
  },
  ro: {
    sofaSets: "Seturi de canapele",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Colecții de mobilier modern",
    hubDescription:
      "Descoperiți canapele, săli de mese, dormitoare și comode TV moderne VIRELLAART, realizate în Türkiye pentru interioare rafinate.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Descoperiți forme sculpturale, confort rafinat și măiestrie contemporană. Fiecare model publicat include fotografii, detalii și prețuri verificate.",
    modelSingular: "model",
    modelLabel: "modele",
    modelsSoon: "Modele în curând",
    exploreCategory: "Vezi categoria",
    categoryEyebrow: "Colecția VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Descoperiți VIRELLAART Modern · {category}, prezentată cu fotografii, detalii și prețuri verificate.",
    emptyTitle: "Modelele moderne sunt în pregătire",
    emptyText:
      "Nu există încă produse publicate. Fiecare model va fi adăugat cu fotografii, configurație și preț verificate.",
    backToModern: "Înapoi la colecțiile Modern",
    contact: "Contactați VIRELLAART",
  },
  el: {
    sofaSets: "Σετ καναπέδων",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Σύγχρονες συλλογές επίπλων",
    hubDescription:
      "Ανακαλύψτε σύγχρονα σετ καναπέδων, τραπεζαρίες, υπνοδωμάτια και έπιπλα TV VIRELLAART, κατασκευασμένα στην Türkiye για εκλεπτυσμένους χώρους.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Ανακαλύψτε γλυπτικές φόρμες, εκλεπτυσμένη άνεση και σύγχρονη δεξιοτεχνία. Κάθε δημοσιευμένο μοντέλο περιλαμβάνει επιβεβαιωμένες φωτογραφίες, λεπτομέρειες και τιμές.",
    modelSingular: "μοντέλο",
    modelLabel: "μοντέλα",
    modelsSoon: "Μοντέλα σύντομα",
    exploreCategory: "Δείτε την κατηγορία",
    categoryEyebrow: "Συλλογή VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Ανακαλύψτε VIRELLAART Modern · {category} με επιβεβαιωμένες φωτογραφίες, λεπτομέρειες και τιμές.",
    emptyTitle: "Τα σύγχρονα μοντέλα ετοιμάζονται",
    emptyText:
      "Δεν υπάρχουν ακόμη δημοσιευμένα προϊόντα. Κάθε μοντέλο θα προστεθεί με επιβεβαιωμένες φωτογραφίες, σύνθεση και τιμή.",
    backToModern: "Πίσω στις συλλογές Modern",
    contact: "Επικοινωνία με VIRELLAART",
  },
  es: {
    sofaSets: "Conjuntos de sofás",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Colecciones de muebles modernos",
    hubDescription:
      "Explore sofás, comedores, dormitorios y muebles TV modernos VIRELLAART, fabricados en Türkiye para interiores refinados.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Descubra formas escultóricas, confort refinado y artesanía contemporánea. Cada modelo publicado incluye fotografías, detalles y precios verificados.",
    modelSingular: "modelo",
    modelLabel: "modelos",
    modelsSoon: "Modelos próximamente",
    exploreCategory: "Ver categoría",
    categoryEyebrow: "Colección VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Explore VIRELLAART Modern · {category}, presentada con fotografías, detalles y precios verificados.",
    emptyTitle: "Los modelos modernos están en preparación",
    emptyText:
      "Todavía no hay productos publicados. Cada modelo se añadirá con fotografías, configuración y precio verificados.",
    backToModern: "Volver a colecciones Modern",
    contact: "Contactar con VIRELLAART",
  },
  sr: {
    sofaSets: "Garniture za sedenje",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Moderne kolekcije nameštaja",
    hubDescription:
      "Istražite moderne VIRELLAART garniture, trpezarije, spavaće sobe i TV komode, izrađene u Türkiye za prefinjene enterijere.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Otkrijte skulpturalne forme, prefinjenu udobnost i savremenu izradu. Svaki objavljeni model sadrži proverene fotografije, detalje i cene.",
    modelSingular: "model",
    modelLabel: "modela",
    modelsSoon: "Modeli uskoro",
    exploreCategory: "Pogledajte kategoriju",
    categoryEyebrow: "VIRELLAART Modern kolekcija",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Istražite VIRELLAART Modern · {category} sa proverenim fotografijama, detaljima i cenama.",
    emptyTitle: "Moderni modeli su u pripremi",
    emptyText:
      "U ovoj kategoriji još nema objavljenih proizvoda. Svaki model biće dodat sa proverenim fotografijama, konfiguracijom i cenom.",
    backToModern: "Nazad na Modern kolekcije",
    contact: "Kontaktirajte VIRELLAART",
  },
  kk: {
    sofaSets: "Диван жиынтықтары",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Заманауи жиһаз топтамалары",
    hubDescription:
      "Талғампаз интерьерлерге арналған Türkiye-де жасалған VIRELLAART заманауи дивандарын, асханаларын, жатын бөлмелерін және TV жиһазын қараңыз.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Мүсіндік пішіндерді, талғампаз жайлылықты және заманауи шеберлікті ашыңыз. Әр жарияланған модель тексерілген фотолармен, сипаттамалармен және бағалармен ұсынылады.",
    modelSingular: "модель",
    modelLabel: "модель",
    modelsSoon: "Модельдер жақында",
    exploreCategory: "Санатты қарау",
    categoryEyebrow: "VIRELLAART Modern топтамасы",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Тексерілген фотолармен, сипаттамалармен және бағалармен ұсынылған VIRELLAART Modern · {category} топтамасын қараңыз.",
    emptyTitle: "Заманауи модельдер дайындалуда",
    emptyText:
      "Бұл санатта әзірге жарияланған өнім жоқ. Әр модель тексерілген фото, жиынтық және бағамен қосылады.",
    backToModern: "Modern топтамаларына қайту",
    contact: "VIRELLAART-пен байланысу",
  },
  uz: {
    sofaSets: "Divan to‘plamlari",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Zamonaviy mebel kolleksiyalari",
    hubDescription:
      "Nafis interyerlar uchun Türkiye-da ishlab chiqarilgan VIRELLAART zamonaviy divanlari, ovqatlanish xonalari, yotoqxonalar va TV mebellarini kashf eting.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Haykaltaroshlik shakllari, nafis qulaylik va zamonaviy mahoratni kashf eting. Har bir e’lon qilingan model tekshirilgan rasmlar, tafsilotlar va narxlar bilan taqdim etiladi.",
    modelSingular: "model",
    modelLabel: "model",
    modelsSoon: "Modellar tez orada",
    exploreCategory: "Kategoriyani ko‘rish",
    categoryEyebrow: "VIRELLAART Modern kolleksiyasi",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Tekshirilgan rasmlar, mahsulot tafsilotlari va narxlar bilan taqdim etilgan VIRELLAART Modern · {category} kolleksiyasini ko‘ring.",
    emptyTitle: "Zamonaviy modellar tayyorlanmoqda",
    emptyText:
      "Bu kategoriyada hozircha mahsulot e’lon qilinmagan. Har bir model tekshirilgan rasm, tarkib va narx bilan qo‘shiladi.",
    backToModern: "Modern kolleksiyalariga qaytish",
    contact: "VIRELLAART bilan bog‘lanish",
  },
  pt: {
    sofaSets: "Conjuntos de sofás",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Coleções de mobiliário moderno",
    hubDescription:
      "Explore sofás, salas de jantar, quartos e móveis TV modernos VIRELLAART, fabricados na Türkiye para interiores refinados.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Descubra formas esculturais, conforto refinado e artesanato contemporâneo. Cada modelo publicado inclui fotografias, detalhes e preços verificados.",
    modelSingular: "modelo",
    modelLabel: "modelos",
    modelsSoon: "Modelos em breve",
    exploreCategory: "Ver categoria",
    categoryEyebrow: "Coleção VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Explore VIRELLAART Modern · {category}, apresentada com fotografias, detalhes e preços verificados.",
    emptyTitle: "Os modelos modernos estão em preparação",
    emptyText:
      "Ainda não existem produtos publicados. Cada modelo será adicionado com fotografias, configuração e preço verificados.",
    backToModern: "Voltar às coleções Modern",
    contact: "Contactar a VIRELLAART",
  },
  pl: {
    sofaSets: "Zestawy wypoczynkowe",
    luxuryClassic: "Luxury & Classic",
    modern: "Modern",
    hubTitle: "Nowoczesne kolekcje mebli",
    hubDescription:
      "Poznaj nowoczesne zestawy wypoczynkowe, jadalnie, sypialnie i szafki RTV VIRELLAART, produkowane w Türkiye do wyrafinowanych wnętrz.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Odkryj rzeźbiarskie formy, wyrafinowany komfort i współczesne rzemiosło. Każdy opublikowany model zawiera zweryfikowane zdjęcia, szczegóły i ceny.",
    modelSingular: "model",
    modelLabel: "modeli",
    modelsSoon: "Modele wkrótce",
    exploreCategory: "Zobacz kategorię",
    categoryEyebrow: "Kolekcja VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Poznaj VIRELLAART Modern · {category}, prezentowaną ze zweryfikowanymi zdjęciami, szczegółami i cenami.",
    emptyTitle: "Nowoczesne modele są przygotowywane",
    emptyText:
      "W tej kategorii nie ma jeszcze opublikowanych produktów. Każdy model zostanie dodany ze zweryfikowanymi zdjęciami, konfiguracją i ceną.",
    backToModern: "Wróć do kolekcji Modern",
    contact: "Skontaktuj się z VIRELLAART",
  },
};
