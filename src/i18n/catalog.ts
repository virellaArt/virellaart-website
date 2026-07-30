import type { Language } from "./config";

export type CatalogCopy = {
  featuredEyebrow: string;
  featuredTitle: string;
  featuredIntro: string;
  filterLabel: string;
  all: string;
  classic: string;
  contemporary: string;
  sortLabel: string;
  sortFeatured: string;
  sortPriceLowHigh: string;
  sortPriceHighLow: string;
  sortName: string;
  from: string;
  photos: string;
  included: string;
  results: string;
  noResults: string;
  viewCollection: string;
  bestSeller: string;
  signature: string;
  newArrival: string;
  livingComposition: string;
  living431Composition: string;
  diningComposition: string;
  bedroomComposition: string;
  tvComposition: string;
};

export const catalogCopy: Record<Language, CatalogCopy> = {
  en: {
    featuredEyebrow: "Selected by VIRELLAART",
    featuredTitle: "Featured Collections",
    featuredIntro:
      "Compare signature collections, starting prices and included configurations before opening the full product gallery.",
    filterLabel: "Filter by character",
    all: "All",
    classic: "Classic",
    contemporary: "Contemporary",
    sortLabel: "Sort collections",
    sortFeatured: "Featured",
    sortPriceLowHigh: "Price: Low to High",
    sortPriceHighLow: "Price: High to Low",
    sortName: "Name: A–Z",
    from: "From",
    photos: "Photos",
    included: "Set includes",
    results: "collections",
    noResults: "No collections match this filter.",
    viewCollection: "View Collection",
    bestSeller: "Best Seller",
    signature: "Signature",
    newArrival: "New",
    livingComposition: "Two 3-seat sofas + two armchairs",
    living431Composition:
      "One 4-seat sofa + one 3-seat sofa + one armchair",
    diningComposition:
      "Dining table + 6 chairs + coordinated storage",
    bedroomComposition:
      "Bed + 2 nightstands + wardrobe + dresser",
    tvComposition: "Coordinated TV unit",
  },
  tr: {
    featuredEyebrow: "VIRELLAART Seçkisi",
    featuredTitle: "Öne Çıkan Koleksiyonlar",
    featuredIntro:
      "Tüm ürün galerisini açmadan önce seçkin koleksiyonları, başlangıç fiyatlarını ve dahil olan parçaları karşılaştırın.",
    filterLabel: "Karaktere göre filtrele",
    all: "Tümü",
    classic: "Klasik",
    contemporary: "Çağdaş",
    sortLabel: "Koleksiyonları sırala",
    sortFeatured: "Öne çıkanlar",
    sortPriceLowHigh: "Fiyat: Artan",
    sortPriceHighLow: "Fiyat: Azalan",
    sortName: "Ad: A–Z",
    from: "Başlangıç",
    photos: "Fotoğraf",
    included: "Takıma dahil",
    results: "koleksiyon",
    noResults: "Bu filtreye uygun koleksiyon bulunamadı.",
    viewCollection: "Koleksiyonu İncele",
    bestSeller: "Çok Satan",
    signature: "İmza Seri",
    newArrival: "Yeni",
    livingComposition: "İki adet 3'lü kanepe + iki berjer",
    living431Composition:
      "Bir adet 4'lü kanepe + bir adet 3'lü kanepe + bir berjer",
    diningComposition:
      "Yemek masası + 6 sandalye + tamamlayıcı depolama",
    bedroomComposition:
      "Yatak + 2 komodin + gardırop + şifonyer",
    tvComposition: "Takım TV ünitesi",
  },
  de: {
    featuredEyebrow: "Auswahl von VIRELLAART",
    featuredTitle: "Ausgewählte Kollektionen",
    featuredIntro:
      "Vergleichen Sie charakteristische Kollektionen, Einstiegspreise und enthaltene Konfigurationen vor der vollständigen Produktgalerie.",
    filterLabel: "Nach Charakter filtern",
    all: "Alle",
    classic: "Klassisch",
    contemporary: "Zeitgenössisch",
    sortLabel: "Kollektionen sortieren",
    sortFeatured: "Empfohlen",
    sortPriceLowHigh: "Preis: aufsteigend",
    sortPriceHighLow: "Preis: absteigend",
    sortName: "Name: A–Z",
    from: "Ab",
    photos: "Fotos",
    included: "Set enthält",
    results: "Kollektionen",
    noResults: "Keine Kollektion entspricht diesem Filter.",
    viewCollection: "Kollektion ansehen",
    bestSeller: "Bestseller",
    signature: "Signature",
    newArrival: "Neu",
    livingComposition: "Zwei 3-Sitzer-Sofas + zwei Sessel",
    living431Composition:
      "Ein 4-Sitzer-Sofa + ein 3-Sitzer-Sofa + ein Sessel",
    diningComposition:
      "Esstisch + 6 Stühle + abgestimmte Stauraummöbel",
    bedroomComposition:
      "Bett + 2 Nachttische + Kleiderschrank + Kommode",
    tvComposition: "Abgestimmtes TV-Möbel",
  },
  fr: {
    featuredEyebrow: "Sélection VIRELLAART",
    featuredTitle: "Collections en vedette",
    featuredIntro:
      "Comparez les collections emblématiques, les prix de départ et les éléments inclus avant d’ouvrir la galerie complète.",
    filterLabel: "Filtrer par caractère",
    all: "Toutes",
    classic: "Classique",
    contemporary: "Contemporain",
    sortLabel: "Trier les collections",
    sortFeatured: "En vedette",
    sortPriceLowHigh: "Prix : croissant",
    sortPriceHighLow: "Prix : décroissant",
    sortName: "Nom : A–Z",
    from: "À partir de",
    photos: "Photos",
    included: "Ensemble comprenant",
    results: "collections",
    noResults: "Aucune collection ne correspond à ce filtre.",
    viewCollection: "Voir la collection",
    bestSeller: "Meilleure vente",
    signature: "Signature",
    newArrival: "Nouveau",
    livingComposition: "Deux canapés 3 places + deux fauteuils",
    living431Composition:
      "Un canapé 4 places + un canapé 3 places + un fauteuil",
    diningComposition:
      "Table à manger + 6 chaises + rangements coordonnés",
    bedroomComposition:
      "Lit + 2 tables de chevet + armoire + commode",
    tvComposition: "Meuble TV coordonné",
  },
  it: {
    featuredEyebrow: "Selezione VIRELLAART",
    featuredTitle: "Collezioni in evidenza",
    featuredIntro:
      "Confronta collezioni distintive, prezzi di partenza e configurazioni incluse prima di aprire la galleria completa.",
    filterLabel: "Filtra per carattere",
    all: "Tutte",
    classic: "Classico",
    contemporary: "Contemporaneo",
    sortLabel: "Ordina le collezioni",
    sortFeatured: "In evidenza",
    sortPriceLowHigh: "Prezzo: crescente",
    sortPriceHighLow: "Prezzo: decrescente",
    sortName: "Nome: A–Z",
    from: "Da",
    photos: "Foto",
    included: "Il set include",
    results: "collezioni",
    noResults: "Nessuna collezione corrisponde a questo filtro.",
    viewCollection: "Vedi la collezione",
    bestSeller: "Più venduto",
    signature: "Signature",
    newArrival: "Novità",
    livingComposition: "Due divani 3 posti + due poltrone",
    living431Composition:
      "Un divano 4 posti + un divano 3 posti + una poltrona",
    diningComposition:
      "Tavolo da pranzo + 6 sedie + contenitori coordinati",
    bedroomComposition:
      "Letto + 2 comodini + armadio + cassettiera",
    tvComposition: "Mobile TV coordinato",
  },
  ru: {
    featuredEyebrow: "Выбор VIRELLAART",
    featuredTitle: "Избранные коллекции",
    featuredIntro:
      "Сравните ключевые коллекции, начальные цены и комплектацию перед просмотром полной галереи.",
    filterLabel: "Фильтр по характеру",
    all: "Все",
    classic: "Классика",
    contemporary: "Современные",
    sortLabel: "Сортировка коллекций",
    sortFeatured: "Рекомендуемые",
    sortPriceLowHigh: "Цена: по возрастанию",
    sortPriceHighLow: "Цена: по убыванию",
    sortName: "Название: А–Я",
    from: "От",
    photos: "Фото",
    included: "В комплекте",
    results: "коллекций",
    noResults: "Нет коллекций, соответствующих фильтру.",
    viewCollection: "Смотреть коллекцию",
    bestSeller: "Бестселлер",
    signature: "Фирменная",
    newArrival: "Новинка",
    livingComposition: "Два 3-местных дивана + два кресла",
    living431Composition:
      "Один 4-местный диван + один 3-местный диван + одно кресло",
    diningComposition:
      "Обеденный стол + 6 стульев + согласованные системы хранения",
    bedroomComposition:
      "Кровать + 2 тумбы + шкаф + комод",
    tvComposition: "Согласованный ТВ-модуль",
  },
  ar: {
    featuredEyebrow: "مختارات VIRELLAART",
    featuredTitle: "مجموعات مختارة",
    featuredIntro:
      "قارن بين المجموعات المميزة والأسعار الابتدائية والتكوينات المشمولة قبل فتح معرض المنتج الكامل.",
    filterLabel: "تصفية حسب الطابع",
    all: "الكل",
    classic: "كلاسيكي",
    contemporary: "معاصر",
    sortLabel: "ترتيب المجموعات",
    sortFeatured: "مختارة",
    sortPriceLowHigh: "السعر: من الأقل",
    sortPriceHighLow: "السعر: من الأعلى",
    sortName: "الاسم",
    from: "ابتداءً من",
    photos: "صور",
    included: "يشمل الطقم",
    results: "مجموعات",
    noResults: "لا توجد مجموعات مطابقة لهذا الفلتر.",
    viewCollection: "عرض المجموعة",
    bestSeller: "الأكثر مبيعًا",
    signature: "مميزة",
    newArrival: "جديد",
    livingComposition: "أريكتان بثلاثة مقاعد + كرسيان",
    living431Composition:
      "أريكة بأربعة مقاعد + أريكة بثلاثة مقاعد + كرسي",
    diningComposition:
      "طاولة طعام + 6 كراسٍ + وحدات تخزين متناسقة",
    bedroomComposition:
      "سرير + طاولتا جانب + خزانة + خزانة أدراج",
    tvComposition: "وحدة تلفزيون متناسقة",
  },
  bg: {
    featuredEyebrow: "Избрано от VIRELLAART",
    featuredTitle: "Избрани колекции",
    featuredIntro:
      "Сравнете характерни колекции, начални цени и включени конфигурации преди пълната продуктова галерия.",
    filterLabel: "Филтър по характер",
    all: "Всички",
    classic: "Класически",
    contemporary: "Съвременни",
    sortLabel: "Сортиране на колекциите",
    sortFeatured: "Препоръчани",
    sortPriceLowHigh: "Цена: възходящо",
    sortPriceHighLow: "Цена: низходящо",
    sortName: "Име: А–Я",
    from: "От",
    photos: "Снимки",
    included: "Комплектът включва",
    results: "колекции",
    noResults: "Няма колекции, отговарящи на този филтър.",
    viewCollection: "Вижте колекцията",
    bestSeller: "Бестселър",
    signature: "Signature",
    newArrival: "Ново",
    livingComposition: "Два триместни дивана + два фотьойла",
    living431Composition:
      "Един четириместен диван + един триместен диван + един фотьойл",
    diningComposition:
      "Трапезна маса + 6 стола + съгласувани мебели за съхранение",
    bedroomComposition:
      "Легло + 2 нощни шкафчета + гардероб + скрин",
    tvComposition: "Съгласуван ТВ модул",
  },
  ro: {
    featuredEyebrow: "Selecția VIRELLAART",
    featuredTitle: "Colecții recomandate",
    featuredIntro:
      "Comparați colecțiile reprezentative, prețurile de pornire și configurațiile incluse înainte de galeria completă.",
    filterLabel: "Filtrare după caracter",
    all: "Toate",
    classic: "Clasic",
    contemporary: "Contemporan",
    sortLabel: "Sortarea colecțiilor",
    sortFeatured: "Recomandate",
    sortPriceLowHigh: "Preț: crescător",
    sortPriceHighLow: "Preț: descrescător",
    sortName: "Nume: A–Z",
    from: "De la",
    photos: "Fotografii",
    included: "Setul include",
    results: "colecții",
    noResults: "Nicio colecție nu corespunde acestui filtru.",
    viewCollection: "Vezi colecția",
    bestSeller: "Cel mai vândut",
    signature: "Signature",
    newArrival: "Nou",
    livingComposition: "Două canapele de 3 locuri + două fotolii",
    living431Composition:
      "O canapea de 4 locuri + o canapea de 3 locuri + un fotoliu",
    diningComposition:
      "Masă + 6 scaune + mobilier de depozitare coordonat",
    bedroomComposition:
      "Pat + 2 noptiere + dulap + comodă",
    tvComposition: "Comodă TV coordonată",
  },
  el: {
    featuredEyebrow: "Επιλογή VIRELLAART",
    featuredTitle: "Επιλεγμένες συλλογές",
    featuredIntro:
      "Συγκρίνετε χαρακτηριστικές συλλογές, τιμές εκκίνησης και περιεχόμενα πριν από την πλήρη συλλογή φωτογραφιών.",
    filterLabel: "Φίλτρο ανά χαρακτήρα",
    all: "Όλες",
    classic: "Κλασικό",
    contemporary: "Σύγχρονο",
    sortLabel: "Ταξινόμηση συλλογών",
    sortFeatured: "Προτεινόμενες",
    sortPriceLowHigh: "Τιμή: αύξουσα",
    sortPriceHighLow: "Τιμή: φθίνουσα",
    sortName: "Όνομα",
    from: "Από",
    photos: "Φωτογραφίες",
    included: "Το σετ περιλαμβάνει",
    results: "συλλογές",
    noResults: "Καμία συλλογή δεν ταιριάζει στο φίλτρο.",
    viewCollection: "Δείτε τη συλλογή",
    bestSeller: "Best Seller",
    signature: "Signature",
    newArrival: "Νέο",
    livingComposition: "Δύο τριθέσιοι καναπέδες + δύο πολυθρόνες",
    living431Composition:
      "Ένας τετραθέσιος καναπές + ένας τριθέσιος καναπές + μία πολυθρόνα",
    diningComposition:
      "Τραπέζι + 6 καρέκλες + συντονισμένα έπιπλα αποθήκευσης",
    bedroomComposition:
      "Κρεβάτι + 2 κομοδίνα + ντουλάπα + συρταριέρα",
    tvComposition: "Συντονισμένο έπιπλο TV",
  },
  es: {
    featuredEyebrow: "Selección VIRELLAART",
    featuredTitle: "Colecciones destacadas",
    featuredIntro:
      "Compare colecciones emblemáticas, precios iniciales y configuraciones incluidas antes de abrir la galería completa.",
    filterLabel: "Filtrar por carácter",
    all: "Todas",
    classic: "Clásico",
    contemporary: "Contemporáneo",
    sortLabel: "Ordenar colecciones",
    sortFeatured: "Destacadas",
    sortPriceLowHigh: "Precio: ascendente",
    sortPriceHighLow: "Precio: descendente",
    sortName: "Nombre: A–Z",
    from: "Desde",
    photos: "Fotos",
    included: "El conjunto incluye",
    results: "colecciones",
    noResults: "Ninguna colección coincide con este filtro.",
    viewCollection: "Ver colección",
    bestSeller: "Más vendido",
    signature: "Signature",
    newArrival: "Nuevo",
    livingComposition: "Dos sofás de 3 plazas + dos sillones",
    living431Composition:
      "Un sofá de 4 plazas + un sofá de 3 plazas + un sillón",
    diningComposition:
      "Mesa + 6 sillas + muebles de almacenaje coordinados",
    bedroomComposition:
      "Cama + 2 mesitas + armario + cómoda",
    tvComposition: "Mueble TV coordinado",
  },
  sr: {
    featuredEyebrow: "VIRELLAART izbor",
    featuredTitle: "Izdvojene kolekcije",
    featuredIntro:
      "Uporedite prepoznatljive kolekcije, početne cene i uključene konfiguracije pre pune galerije proizvoda.",
    filterLabel: "Filtriraj po karakteru",
    all: "Sve",
    classic: "Klasično",
    contemporary: "Savremeno",
    sortLabel: "Sortiraj kolekcije",
    sortFeatured: "Izdvojeno",
    sortPriceLowHigh: "Cena: rastuće",
    sortPriceHighLow: "Cena: opadajuće",
    sortName: "Naziv: A–Z",
    from: "Od",
    photos: "Fotografije",
    included: "Set sadrži",
    results: "kolekcija",
    noResults: "Nema kolekcija za ovaj filter.",
    viewCollection: "Pogledaj kolekciju",
    bestSeller: "Najprodavanije",
    signature: "Signature",
    newArrival: "Novo",
    livingComposition: "Dve trosed sofe + dve fotelje",
    living431Composition:
      "Jedna četvorosed sofa + jedna trosed sofa + jedna fotelja",
    diningComposition:
      "Trpezarijski sto + 6 stolica + usklađeni elementi",
    bedroomComposition:
      "Krevet + 2 noćna ormarića + ormar + komoda",
    tvComposition: "Usklađena TV komoda",
  },
  kk: {
    featuredEyebrow: "VIRELLAART таңдауы",
    featuredTitle: "Таңдаулы топтамалар",
    featuredIntro:
      "Толық галереяны ашпас бұрын таңдаулы топтамаларды, бастапқы бағаларды және жиынтық құрамын салыстырыңыз.",
    filterLabel: "Сипатына қарай сүзу",
    all: "Барлығы",
    classic: "Классикалық",
    contemporary: "Заманауи",
    sortLabel: "Топтамаларды сұрыптау",
    sortFeatured: "Таңдаулы",
    sortPriceLowHigh: "Баға: өсу ретімен",
    sortPriceHighLow: "Баға: кему ретімен",
    sortName: "Атауы",
    from: "Бастап",
    photos: "Фотосурет",
    included: "Жиынтық құрамы",
    results: "топтама",
    noResults: "Бұл сүзгіге сай топтама жоқ.",
    viewCollection: "Топтаманы көру",
    bestSeller: "Көп сатылатын",
    signature: "Таңбалы",
    newArrival: "Жаңа",
    livingComposition: "Екі 3 орындық диван + екі кресло",
    living431Composition:
      "Бір 4 орындық диван + бір 3 орындық диван + бір кресло",
    diningComposition:
      "Ас үстелі + 6 орындық + үйлесімді сақтау жиһазы",
    bedroomComposition:
      "Кереует + 2 тумба + гардероб + комод",
    tvComposition: "Үйлесімді TV жиһазы",
  },
  uz: {
    featuredEyebrow: "VIRELLAART tanlovi",
    featuredTitle: "Tanlangan kolleksiyalar",
    featuredIntro:
      "To‘liq galereyani ochishdan oldin tanlangan kolleksiyalar, boshlang‘ich narxlar va to‘plam tarkibini solishtiring.",
    filterLabel: "Uslub bo‘yicha saralash",
    all: "Barchasi",
    classic: "Klassik",
    contemporary: "Zamonaviy",
    sortLabel: "Kolleksiyalarni tartiblash",
    sortFeatured: "Tanlangan",
    sortPriceLowHigh: "Narx: o‘sish tartibida",
    sortPriceHighLow: "Narx: kamayish tartibida",
    sortName: "Nomi",
    from: "Boshlanishi",
    photos: "Rasm",
    included: "To‘plam tarkibi",
    results: "kolleksiya",
    noResults: "Bu filtrga mos kolleksiya yo‘q.",
    viewCollection: "Kolleksiyani ko‘rish",
    bestSeller: "Eng ko‘p sotilgan",
    signature: "Maxsus",
    newArrival: "Yangi",
    livingComposition: "Ikki 3 o‘rinli divan + ikki kreslo",
    living431Composition:
      "Bir 4 o‘rinli divan + bir 3 o‘rinli divan + bir kreslo",
    diningComposition:
      "Ovqatlanish stoli + 6 stul + mos saqlash mebeli",
    bedroomComposition:
      "Karavot + 2 tumba + shkaf + komod",
    tvComposition: "Mos TV mebeli",
  },
  pt: {
    featuredEyebrow: "Seleção VIRELLAART",
    featuredTitle: "Coleções em destaque",
    featuredIntro:
      "Compare coleções de assinatura, preços iniciais e configurações incluídas antes de abrir a galeria completa.",
    filterLabel: "Filtrar por caráter",
    all: "Todas",
    classic: "Clássico",
    contemporary: "Contemporâneo",
    sortLabel: "Ordenar coleções",
    sortFeatured: "Destaques",
    sortPriceLowHigh: "Preço: crescente",
    sortPriceHighLow: "Preço: decrescente",
    sortName: "Nome: A–Z",
    from: "Desde",
    photos: "Fotos",
    included: "O conjunto inclui",
    results: "coleções",
    noResults: "Nenhuma coleção corresponde a este filtro.",
    viewCollection: "Ver coleção",
    bestSeller: "Mais vendido",
    signature: "Signature",
    newArrival: "Novo",
    livingComposition: "Dois sofás de 3 lugares + duas poltronas",
    living431Composition:
      "Um sofá de 4 lugares + um sofá de 3 lugares + uma poltrona",
    diningComposition:
      "Mesa + 6 cadeiras + móveis de arrumação coordenados",
    bedroomComposition:
      "Cama + 2 mesas de cabeceira + roupeiro + cómoda",
    tvComposition: "Móvel TV coordenado",
  },
  pl: {
    featuredEyebrow: "Wybór VIRELLAART",
    featuredTitle: "Polecane kolekcje",
    featuredIntro:
      "Porównaj charakterystyczne kolekcje, ceny początkowe i zawartość zestawów przed otwarciem pełnej galerii.",
    filterLabel: "Filtruj według charakteru",
    all: "Wszystkie",
    classic: "Klasyczne",
    contemporary: "Współczesne",
    sortLabel: "Sortuj kolekcje",
    sortFeatured: "Polecane",
    sortPriceLowHigh: "Cena: rosnąco",
    sortPriceHighLow: "Cena: malejąco",
    sortName: "Nazwa: A–Z",
    from: "Od",
    photos: "Zdjęcia",
    included: "Zestaw zawiera",
    results: "kolekcji",
    noResults: "Brak kolekcji pasujących do filtra.",
    viewCollection: "Zobacz kolekcję",
    bestSeller: "Bestseller",
    signature: "Signature",
    newArrival: "Nowość",
    livingComposition: "Dwie sofy 3-osobowe + dwa fotele",
    living431Composition:
      "Jedna sofa 4-osobowa + jedna sofa 3-osobowa + jeden fotel",
    diningComposition:
      "Stół + 6 krzeseł + dopasowane meble do przechowywania",
    bedroomComposition:
      "Łóżko + 2 szafki nocne + szafa + komoda",
    tvComposition: "Dopasowana szafka RTV",
  },
};
