import type { Language } from "./config";

export type CollectionMenuCopy = {
  sofaSets: string;
  luxuryClassic: string;
  modern: string;
  hubTitle: string;
  hubDescription: string;
  hubEyebrow: string;
  hubIntro: string;
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
      "Explore the VIRELLAART modern furniture structure for sofa sets, dining rooms, bedrooms and TV units.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "The Modern collection structure is ready. New models will be published here after their product details, photography and prices are confirmed.",
    modelsSoon: "Models coming soon",
    exploreCategory: "Explore category",
    categoryEyebrow: "VIRELLAART Modern Collection",
    categoryTitle: "Modern {category}",
    categoryDescription:
      "The VIRELLAART Modern {category} category is ready for upcoming models.",
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
      "Koltuk takımları, yemek odaları, yatak odaları ve TV üniteleri için hazırlanan VIRELLAART Modern koleksiyon yapısını inceleyin.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Modern koleksiyon altyapısı hazırdır. Yeni modeller; ürün detayları, fotoğrafları ve fiyatları doğrulandıktan sonra burada yayınlanacaktır.",
    modelsSoon: "Modeller yakında",
    exploreCategory: "Kategoriyi incele",
    categoryEyebrow: "VIRELLAART Modern Koleksiyon",
    categoryTitle: "Modern {category}",
    categoryDescription:
      "VIRELLAART Modern {category} kategorisi yeni modeller için hazırdır.",
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
      "Entdecken Sie die moderne VIRELLAART Struktur für Sofagarnituren, Esszimmer, Schlafzimmer und TV-Möbel.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Die Struktur der Modern-Kollektion ist vorbereitet. Neue Modelle werden nach Bestätigung von Produktdetails, Fotos und Preisen veröffentlicht.",
    modelsSoon: "Modelle folgen in Kürze",
    exploreCategory: "Kategorie ansehen",
    categoryEyebrow: "VIRELLAART Modern-Kollektion",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Die VIRELLAART Kategorie Modern · {category} ist für kommende Modelle vorbereitet.",
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
      "Découvrez la structure VIRELLAART Modern pour les ensembles de canapés, salles à manger, chambres et meubles TV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "La structure de la collection Modern est prête. Les nouveaux modèles seront publiés après validation des détails, photos et prix.",
    modelsSoon: "Modèles prochainement",
    exploreCategory: "Voir la catégorie",
    categoryEyebrow: "Collection VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "La catégorie VIRELLAART Modern · {category} est prête à accueillir les prochains modèles.",
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
      "Scopri la struttura VIRELLAART Modern per set di divani, sale da pranzo, camere da letto e mobili TV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "La struttura della collezione Modern è pronta. I nuovi modelli saranno pubblicati dopo la verifica di dettagli, fotografie e prezzi.",
    modelsSoon: "Modelli in arrivo",
    exploreCategory: "Vedi la categoria",
    categoryEyebrow: "Collezione VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "La categoria VIRELLAART Modern · {category} è pronta per i prossimi modelli.",
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
      "Ознакомьтесь со структурой VIRELLAART Modern для комплектов диванов, столовых, спален и ТВ-модулей.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Структура коллекции Modern готова. Новые модели будут опубликованы после подтверждения характеристик, фотографий и цен.",
    modelsSoon: "Модели скоро появятся",
    exploreCategory: "Открыть категорию",
    categoryEyebrow: "Коллекция VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Категория VIRELLAART Modern · {category} готова для новых моделей.",
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
      "استكشف بنية VIRELLAART Modern لأطقم الأرائك وغرف الطعام وغرف النوم ووحدات التلفزيون.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "بنية مجموعة Modern جاهزة. ستُنشر الموديلات الجديدة بعد اعتماد التفاصيل والصور والأسعار.",
    modelsSoon: "الموديلات قريبًا",
    exploreCategory: "استكشف الفئة",
    categoryEyebrow: "مجموعة VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "فئة VIRELLAART Modern · {category} جاهزة للموديلات القادمة.",
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
      "Разгледайте структурата VIRELLAART Modern за холни гарнитури, трапезарии, спални и ТВ модули.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Структурата на колекция Modern е готова. Новите модели ще бъдат публикувани след потвърждение на детайлите, снимките и цените.",
    modelsSoon: "Модели очаквайте скоро",
    exploreCategory: "Разгледайте категорията",
    categoryEyebrow: "Колекция VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Категорията VIRELLAART Modern · {category} е готова за предстоящите модели.",
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
      "Descoperiți structura VIRELLAART Modern pentru seturi de canapele, săli de mese, dormitoare și comode TV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Structura colecției Modern este pregătită. Modelele noi vor fi publicate după confirmarea detaliilor, fotografiilor și prețurilor.",
    modelsSoon: "Modele în curând",
    exploreCategory: "Vezi categoria",
    categoryEyebrow: "Colecția VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Categoria VIRELLAART Modern · {category} este pregătită pentru modelele viitoare.",
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
      "Εξερευνήστε τη δομή VIRELLAART Modern για σετ καναπέδων, τραπεζαρίες, υπνοδωμάτια και έπιπλα TV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Η δομή της συλλογής Modern είναι έτοιμη. Τα νέα μοντέλα θα δημοσιευτούν μετά την επιβεβαίωση στοιχείων, φωτογραφιών και τιμών.",
    modelsSoon: "Μοντέλα σύντομα",
    exploreCategory: "Δείτε την κατηγορία",
    categoryEyebrow: "Συλλογή VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Η κατηγορία VIRELLAART Modern · {category} είναι έτοιμη για τα επόμενα μοντέλα.",
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
      "Explore la estructura VIRELLAART Modern para conjuntos de sofás, comedores, dormitorios y muebles TV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "La estructura de la colección Modern está preparada. Los nuevos modelos se publicarán tras confirmar detalles, fotografías y precios.",
    modelsSoon: "Modelos próximamente",
    exploreCategory: "Ver categoría",
    categoryEyebrow: "Colección VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "La categoría VIRELLAART Modern · {category} está preparada para los próximos modelos.",
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
      "Istražite VIRELLAART Modern strukturu za garniture, trpezarije, spavaće sobe i TV komode.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Struktura kolekcije Modern je spremna. Novi modeli biće objavljeni nakon potvrde detalja, fotografija i cena.",
    modelsSoon: "Modeli uskoro",
    exploreCategory: "Pogledajte kategoriju",
    categoryEyebrow: "VIRELLAART Modern kolekcija",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "VIRELLAART Modern · {category} kategorija spremna je za predstojeće modele.",
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
      "Диван жиынтықтары, асханалар, жатын бөлмелер және TV жиһазы үшін VIRELLAART Modern құрылымын қараңыз.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Modern топтамасының құрылымы дайын. Жаңа модельдер сипаттамалары, фотолары және бағалары расталғаннан кейін жарияланады.",
    modelsSoon: "Модельдер жақында",
    exploreCategory: "Санатты қарау",
    categoryEyebrow: "VIRELLAART Modern топтамасы",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "VIRELLAART Modern · {category} санаты жаңа модельдерге дайын.",
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
      "Divan to‘plamlari, ovqatlanish xonalari, yotoqxonalar va TV mebellari uchun VIRELLAART Modern tuzilmasini ko‘ring.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Modern kolleksiyasi tuzilmasi tayyor. Yangi modellar tafsilotlari, rasmlari va narxlari tasdiqlangach e’lon qilinadi.",
    modelsSoon: "Modellar tez orada",
    exploreCategory: "Kategoriyani ko‘rish",
    categoryEyebrow: "VIRELLAART Modern kolleksiyasi",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "VIRELLAART Modern · {category} kategoriyasi yangi modellar uchun tayyor.",
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
      "Explore a estrutura VIRELLAART Modern para conjuntos de sofás, salas de jantar, quartos e móveis TV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "A estrutura da coleção Modern está pronta. Os novos modelos serão publicados após confirmação dos detalhes, fotografias e preços.",
    modelsSoon: "Modelos em breve",
    exploreCategory: "Ver categoria",
    categoryEyebrow: "Coleção VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "A categoria VIRELLAART Modern · {category} está pronta para os próximos modelos.",
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
      "Poznaj strukturę VIRELLAART Modern dla zestawów wypoczynkowych, jadalni, sypialni i szafek RTV.",
    hubEyebrow: "VIRELLAART · Modern",
    hubIntro:
      "Struktura kolekcji Modern jest gotowa. Nowe modele zostaną opublikowane po potwierdzeniu szczegółów, zdjęć i cen.",
    modelsSoon: "Modele wkrótce",
    exploreCategory: "Zobacz kategorię",
    categoryEyebrow: "Kolekcja VIRELLAART Modern",
    categoryTitle: "Modern · {category}",
    categoryDescription:
      "Kategoria VIRELLAART Modern · {category} jest gotowa na nadchodzące modele.",
    emptyTitle: "Nowoczesne modele są przygotowywane",
    emptyText:
      "W tej kategorii nie ma jeszcze opublikowanych produktów. Każdy model zostanie dodany ze zweryfikowanymi zdjęciami, konfiguracją i ceną.",
    backToModern: "Wróć do kolekcji Modern",
    contact: "Skontaktuj się z VIRELLAART",
  },
};
