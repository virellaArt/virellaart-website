export const languages = {
  en: { label: "English", short: "EN", locale: "en_US", dir: "ltr" },
  tr: { label: "Türkçe", short: "TR", locale: "tr_TR", dir: "ltr" },
  de: { label: "Deutsch", short: "DE", locale: "de_DE", dir: "ltr" },
  fr: { label: "Français", short: "FR", locale: "fr_FR", dir: "ltr" },
  it: { label: "Italiano", short: "IT", locale: "it_IT", dir: "ltr" },
  ru: { label: "Русский", short: "RU", locale: "ru_RU", dir: "ltr" },
  ar: { label: "العربية", short: "AR", locale: "ar_SA", dir: "rtl" },
  bg: { label: "Български", short: "BG", locale: "bg_BG", dir: "ltr" },
  ro: { label: "Română", short: "RO", locale: "ro_RO", dir: "ltr" },
  el: { label: "Ελληνικά", short: "EL", locale: "el_GR", dir: "ltr" },
  es: { label: "Español", short: "ES", locale: "es_ES", dir: "ltr" },
  sr: { label: "Srpski", short: "SR", locale: "sr_RS", dir: "ltr" },
  kk: { label: "Қазақша", short: "KK", locale: "kk_KZ", dir: "ltr" },
  uz: { label: "O‘zbekcha", short: "UZ", locale: "uz_UZ", dir: "ltr" },
  pt: { label: "Português", short: "PT", locale: "pt_PT", dir: "ltr" },
  pl: { label: "Polski", short: "PL", locale: "pl_PL", dir: "ltr" },
} as const;

export type Language = keyof typeof languages;

export const languageCodes = Object.keys(languages) as Language[];
export const localizedLanguageCodes = languageCodes.filter(
  (language) => language !== "en",
);

export const defaultLanguage: Language = "en";

export function isLanguage(value: string | undefined): value is Language {
  return Boolean(value && value in languages);
}

export function getLanguageFromPath(pathname: string): Language {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLanguage(firstSegment) ? firstSegment : defaultLanguage;
}

export function stripLanguagePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (isLanguage(segments[0])) {
    segments.shift();
  }

  const path = `/${segments.join("/")}`;
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

export function localizedPath(pathname: string, language: Language): string {

  /* VIRELLAART LOCALIZED POLICY PATHS */

const basePath = stripLanguagePrefix(pathname);

  const normalizeTrailingSlash = (path: string) => {
    if (path === "/") return "/";
    return path.endsWith("/") ? path : `${path}/`;
  };

  if (language === defaultLanguage) {
    return normalizeTrailingSlash(basePath);
  }

  return basePath === "/"
    ? `/${language}/`
    : `/${language}${normalizeTrailingSlash(basePath)}`;
}

const translations = {
  en: {
    defaultDescription:
      "VIRELLAART creates luxury furniture collections crafted in Türkiye with premium materials, bespoke options and worldwide delivery.",
    nav: {
      home: "Home",
      collections: "Collections",
      about: "About",
      contact: "Contact",
      language: "Select language",
    },
    home: {
      title: "Luxury Furniture for Exceptional Interiors",
      description:
        "Discover VIRELLAART luxury living rooms, dining rooms, bedrooms and TV units with bespoke options and worldwide delivery.",
      eyebrow: "Crafted in Türkiye",
      lead: "Timeless luxury furniture created for exceptional interiors.",
      button: "Explore Collections",
      discover: "Discover",
      heading: "Our Collections",
      intro:
        "Explore four signature furniture categories designed for refined residential interiors.",
      livingRooms: "Living Rooms",
      diningRooms: "Dining Rooms",
      bedrooms: "Bedrooms",
      tvUnits: "TV Units",
      discoverCollection: "Discover Collection",
    },
    category: {
      eyebrow: "VIRELLAART Collections",
      selectModel: "Select a model to view all photographs and product details.",
      viewCollection: "View Collection",
      livingRooms: {
        title: "Living Rooms",
        description:
          "Explore VIRELLAART luxury living room collections with refined design, premium craftsmanship and worldwide delivery.",
      },
      diningRooms: {
        title: "Dining Rooms",
        description:
          "Explore VIRELLAART luxury dining room collections created for elegant gatherings and exceptional interiors.",
      },
      bedrooms: {
        title: "Bedrooms",
        description:
          "Explore VIRELLAART luxury bedroom collections combining comfort, craftsmanship and timeless elegance.",
      },
      tvUnits: {
        title: "TV Units",
        description:
          "Explore VIRELLAART luxury TV unit collections featuring elegant contemporary design and refined details.",
      },
    },
    about: {
      title: "About VIRELLAART",
      description:
        "Discover VIRELLAART, a luxury furniture brand creating refined collections in Türkiye for distinguished interiors worldwide.",
      eyebrow: "About VIRELLAART",
      hero: "Luxury Furniture Beyond Imagination",
      lead:
        "VIRELLAART creates refined furniture collections for exceptional interiors, combining elegant design, premium materials and distinctive craftsmanship.",
      story: "Our Story",
      heading: "Designed in Türkiye. Created for the World.",
      paragraphOne:
        "VIRELLAART is a luxury furniture brand dedicated to creating timeless living spaces. Every collection is developed with a strong focus on proportion, craftsmanship, comfort and visual elegance.",
      paragraphTwo:
        "From living rooms and dining rooms to bedrooms and TV units, each piece is created to bring a distinctive luxury atmosphere into refined homes.",
      imageAlt: "VIRELLAART luxury living room furniture",
    },
    contact: {
      title: "Contact VIRELLAART",
      description:
        "Contact VIRELLAART for luxury furniture collections, custom production and worldwide delivery.",
      eyebrow: "Contact VIRELLAART",
      hero: "Let’s Create an Exceptional Interior",
      lead:
        "Contact our team for product information, worldwide delivery details and private luxury furniture consultation.",
      getInTouch: "Get in Touch",
      heading: "Worldwide Luxury Furniture Service",
      paragraph:
        "Our team assists international clients with collections, measurements, customization, production, payment and worldwide delivery.",
      business: "Business",
      businessValue: "VIRELLAART Luxury Furniture",
      whatsapp: "WhatsApp",
      whatsappValue: "Contact VIRELLAART",
      service: "Service",
      serviceValue: "Worldwide Delivery",
      language: "Language",
      languageValue: "International Customer Support",
      button: "Contact on WhatsApp",
      imageAlt: "VIRELLAART luxury dining room furniture",
    },
    product: {
      collectionLabel: "VIRELLAART Luxury Collection",
      prices: "Collection Prices",
      worldwideDelivery: "Worldwide Delivery",
      worldwideDeliveryText:
        "Professional international delivery support is available worldwide.",
      craftsmanship: "Premium Craftsmanship",
      craftsmanshipText: "Made with carefully selected luxury materials.",
      whatsapp: "Contact Us on WhatsApp",
      note:
        "Contact our team for dimensions, fabric options, production and delivery information.",
      previousImage: "Previous image",
      nextImage: "Next image",
      whatsappMessage:
        "Hello VIRELLAART, I would like to receive more information about the {product} Collection.",
    },
  },
  tr: {
    defaultDescription:
      "VIRELLAART, Türkiye'de premium malzemelerle üretilen, kişiselleştirilebilir ve dünya çapında teslim edilen lüks mobilya koleksiyonları sunar.",
    nav: {
      home: "Ana Sayfa",
      collections: "Koleksiyonlar",
      about: "Hakkımızda",
      contact: "İletişim",
      language: "Dil seçin",
    },
    home: {
      title: "Seçkin Mekânlar İçin Lüks Mobilya",
      description:
        "Kişiselleştirme seçenekleri ve dünya çapında teslimatla VIRELLAART lüks oturma odası, yemek odası, yatak odası ve TV ünitesi koleksiyonlarını keşfedin.",
      eyebrow: "Türkiye'de Üretildi",
      lead: "Seçkin iç mekânlar için tasarlanan zamansız lüks mobilyalar.",
      button: "Koleksiyonları Keşfet",
      discover: "Keşfedin",
      heading: "Koleksiyonlarımız",
      intro:
        "Zarif yaşam alanları için tasarlanan dört özel mobilya kategorisini keşfedin.",
      livingRooms: "Oturma Odaları",
      diningRooms: "Yemek Odaları",
      bedrooms: "Yatak Odaları",
      tvUnits: "TV Üniteleri",
      discoverCollection: "Koleksiyonu Keşfet",
    },
    category: {
      eyebrow: "VIRELLAART Koleksiyonları",
      selectModel: "Tüm fotoğrafları ve ürün ayrıntılarını görmek için bir model seçin.",
      viewCollection: "Koleksiyonu İncele",
      livingRooms: {
        title: "Oturma Odaları",
        description:
          "Zarif tasarım, premium işçilik ve dünya çapında teslimat sunan VIRELLAART lüks oturma odası koleksiyonlarını keşfedin.",
      },
      diningRooms: {
        title: "Yemek Odaları",
        description:
          "Şık davetler ve seçkin iç mekânlar için tasarlanan VIRELLAART lüks yemek odası koleksiyonlarını keşfedin.",
      },
      bedrooms: {
        title: "Yatak Odaları",
        description:
          "Konfor, ustalık ve zamansız şıklığı birleştiren VIRELLAART lüks yatak odası koleksiyonlarını keşfedin.",
      },
      tvUnits: {
        title: "TV Üniteleri",
        description:
          "Zarif çağdaş tasarım ve rafine detaylara sahip VIRELLAART lüks TV ünitesi koleksiyonlarını keşfedin.",
      },
    },
    about: {
      title: "VIRELLAART Hakkında",
      description:
        "Dünya çapındaki seçkin iç mekânlar için Türkiye'de rafine koleksiyonlar üreten lüks mobilya markası VIRELLAART'ı keşfedin.",
      eyebrow: "VIRELLAART Hakkında",
      hero: "Hayal Gücünün Ötesinde Lüks Mobilya",
      lead:
        "VIRELLAART; zarif tasarım, premium malzemeler ve özgün işçiliği bir araya getirerek seçkin iç mekânlar için rafine koleksiyonlar üretir.",
      story: "Hikâyemiz",
      heading: "Türkiye'de Tasarlandı. Dünya İçin Üretildi.",
      paragraphOne:
        "VIRELLAART, zamansız yaşam alanları yaratmaya adanmış bir lüks mobilya markasıdır. Her koleksiyon oran, işçilik, konfor ve görsel zarafet odağında geliştirilir.",
      paragraphTwo:
        "Oturma ve yemek odalarından yatak odaları ile TV ünitelerine kadar her parça, seçkin evlere özgün bir lüks atmosfer kazandırmak için üretilir.",
      imageAlt: "VIRELLAART lüks oturma odası mobilyası",
    },
    contact: {
      title: "VIRELLAART İletişim",
      description:
        "Lüks mobilya koleksiyonları, özel üretim ve dünya çapında teslimat için VIRELLAART ile iletişime geçin.",
      eyebrow: "VIRELLAART İletişim",
      hero: "Birlikte Olağanüstü Bir İç Mekân Yaratalım",
      lead:
        "Ürün bilgileri, dünya çapında teslimat ayrıntıları ve özel lüks mobilya danışmanlığı için ekibimizle iletişime geçin.",
      getInTouch: "Bize Ulaşın",
      heading: "Dünya Çapında Lüks Mobilya Hizmeti",
      paragraph:
        "Ekibimiz; koleksiyon, ölçü, kişiselleştirme, üretim, ödeme ve dünya çapında teslimat süreçlerinde uluslararası müşterilere destek verir.",
      business: "Marka",
      businessValue: "VIRELLAART Lüks Mobilya",
      whatsapp: "WhatsApp",
      whatsappValue: "VIRELLAART ile İletişim",
      service: "Hizmet",
      serviceValue: "Dünya Çapında Teslimat",
      language: "Dil",
      languageValue: "Uluslararası Müşteri Desteği",
      button: "WhatsApp'tan İletişime Geç",
      imageAlt: "VIRELLAART lüks yemek odası mobilyası",
    },
    product: {
      collectionLabel: "VIRELLAART Lüks Koleksiyonu",
      prices: "Koleksiyon Fiyatları",
      worldwideDelivery: "Dünya Çapında Teslimat",
      worldwideDeliveryText: "Dünya genelinde profesyonel uluslararası teslimat desteği sunulur.",
      craftsmanship: "Premium İşçilik",
      craftsmanshipText: "Özenle seçilmiş lüks malzemelerle üretilir.",
      whatsapp: "WhatsApp'tan Bilgi Alın",
      note: "Ölçü, kumaş seçenekleri, üretim ve teslimat bilgileri için ekibimizle iletişime geçin.",
      previousImage: "Önceki görsel",
      nextImage: "Sonraki görsel",
      whatsappMessage: "Merhaba VIRELLAART, {product} Koleksiyonu hakkında bilgi almak istiyorum.",
    },
  },
  de: {
    defaultDescription:
      "VIRELLAART fertigt luxuriöse Möbelkollektionen in Türkiye – mit hochwertigen Materialien, individuellen Optionen und weltweiter Lieferung.",
    nav: {
      home: "Startseite",
      collections: "Kollektionen",
      about: "Über uns",
      contact: "Kontakt",
      language: "Sprache wählen",
    },
    home: {
      title: "Luxusmöbel für außergewöhnliche Interieurs",
      description:
        "Entdecken Sie luxuriöse Wohnzimmer, Esszimmer, Schlafzimmer und TV-Möbel von VIRELLAART mit individuellen Optionen und weltweiter Lieferung.",
      eyebrow: "Gefertigt in Türkiye",
      lead: "Zeitlose Luxusmöbel für außergewöhnliche Interieurs.",
      button: "Kollektionen entdecken",
      discover: "Entdecken",
      heading: "Unsere Kollektionen",
      intro: "Entdecken Sie vier exklusive Möbelkategorien für anspruchsvolle Wohnräume.",
      livingRooms: "Wohnzimmer",
      diningRooms: "Esszimmer",
      bedrooms: "Schlafzimmer",
      tvUnits: "TV-Möbel",
      discoverCollection: "Kollektion entdecken",
    },
    category: {
      eyebrow: "VIRELLAART Kollektionen",
      selectModel: "Wählen Sie ein Modell, um alle Fotos und Produktdetails zu sehen.",
      viewCollection: "Kollektion ansehen",
      livingRooms: {
        title: "Wohnzimmer",
        description:
          "Entdecken Sie luxuriöse Wohnzimmerkollektionen von VIRELLAART mit elegantem Design, hochwertiger Handwerkskunst und weltweiter Lieferung.",
      },
      diningRooms: {
        title: "Esszimmer",
        description:
          "Entdecken Sie luxuriöse Esszimmerkollektionen von VIRELLAART für stilvolle Zusammenkünfte und außergewöhnliche Interieurs.",
      },
      bedrooms: {
        title: "Schlafzimmer",
        description:
          "Entdecken Sie luxuriöse Schlafzimmerkollektionen von VIRELLAART, die Komfort, Handwerkskunst und zeitlose Eleganz vereinen.",
      },
      tvUnits: {
        title: "TV-Möbel",
        description:
          "Entdecken Sie luxuriöse TV-Möbel von VIRELLAART mit elegantem, modernem Design und raffinierten Details.",
      },
    },
    about: {
      title: "Über VIRELLAART",
      description:
        "Entdecken Sie VIRELLAART, eine Luxusmöbelmarke, die in Türkiye raffinierte Kollektionen für anspruchsvolle Interieurs weltweit fertigt.",
      eyebrow: "Über VIRELLAART",
      hero: "Luxusmöbel jenseits der Vorstellungskraft",
      lead:
        "VIRELLAART kreiert raffinierte Möbelkollektionen für außergewöhnliche Interieurs und vereint elegantes Design, hochwertige Materialien und unverwechselbare Handwerkskunst.",
      story: "Unsere Geschichte",
      heading: "In Türkiye entworfen. Für die Welt geschaffen.",
      paragraphOne:
        "VIRELLAART ist eine Luxusmöbelmarke, die zeitlose Wohnräume schafft. Jede Kollektion wird mit besonderem Fokus auf Proportion, Handwerkskunst, Komfort und visuelle Eleganz entwickelt.",
      paragraphTwo:
        "Von Wohn- und Esszimmern bis zu Schlafzimmern und TV-Möbeln wird jedes Stück geschaffen, um anspruchsvollen Häusern eine unverwechselbare luxuriöse Atmosphäre zu verleihen.",
      imageAlt: "Luxuriöse Wohnzimmermöbel von VIRELLAART",
    },
    contact: {
      title: "VIRELLAART Kontakt",
      description:
        "Kontaktieren Sie VIRELLAART für Luxusmöbelkollektionen, individuelle Fertigung und weltweite Lieferung.",
      eyebrow: "VIRELLAART Kontakt",
      hero: "Lassen Sie uns ein außergewöhnliches Interieur schaffen",
      lead:
        "Kontaktieren Sie unser Team für Produktinformationen, Details zur weltweiten Lieferung und eine private Luxusmöbelberatung.",
      getInTouch: "Kontakt aufnehmen",
      heading: "Weltweiter Luxusmöbel-Service",
      paragraph:
        "Unser Team unterstützt internationale Kunden bei Kollektionen, Maßen, Individualisierung, Produktion, Zahlung und weltweiter Lieferung.",
      business: "Marke",
      businessValue: "VIRELLAART Luxusmöbel",
      whatsapp: "WhatsApp",
      whatsappValue: "VIRELLAART kontaktieren",
      service: "Service",
      serviceValue: "Weltweite Lieferung",
      language: "Sprache",
      languageValue: "Internationaler Kundenservice",
      button: "Über WhatsApp kontaktieren",
      imageAlt: "Luxuriöse Esszimmermöbel von VIRELLAART",
    },
    product: {
      collectionLabel: "VIRELLAART Luxuskollektion",
      prices: "Kollektion Preise",
      worldwideDelivery: "Weltweite Lieferung",
      worldwideDeliveryText: "Professionelle internationale Lieferung ist weltweit verfügbar.",
      craftsmanship: "Erstklassige Handwerkskunst",
      craftsmanshipText: "Gefertigt aus sorgfältig ausgewählten Luxusmaterialien.",
      whatsapp: "Über WhatsApp anfragen",
      note: "Kontaktieren Sie unser Team für Maße, Stoffoptionen, Produktion und Lieferinformationen.",
      previousImage: "Vorheriges Bild",
      nextImage: "Nächstes Bild",
      whatsappMessage: "Hallo VIRELLAART, ich möchte mehr über die Kollektion {product} erfahren.",
    },
  },
  fr: {
    defaultDescription:
      "VIRELLAART crée en Türkiye des collections de mobilier de luxe avec matériaux haut de gamme, options sur mesure et livraison mondiale.",
    nav: {
      home: "Accueil",
      collections: "Collections",
      about: "À propos",
      contact: "Contact",
      language: "Choisir la langue",
    },
    home: {
      title: "Mobilier de luxe pour des intérieurs d’exception",
      description:
        "Découvrez les salons, salles à manger, chambres et meubles TV de luxe VIRELLAART avec options sur mesure et livraison mondiale.",
      eyebrow: "Fabriqué en Türkiye",
      lead: "Un mobilier de luxe intemporel créé pour des intérieurs d’exception.",
      button: "Découvrir les collections",
      discover: "Découvrir",
      heading: "Nos collections",
      intro: "Explorez quatre catégories de mobilier signature conçues pour des intérieurs raffinés.",
      livingRooms: "Salons",
      diningRooms: "Salles à manger",
      bedrooms: "Chambres",
      tvUnits: "Meubles TV",
      discoverCollection: "Découvrir la collection",
    },
    category: {
      eyebrow: "Collections VIRELLAART",
      selectModel: "Sélectionnez un modèle pour voir toutes les photos et les détails du produit.",
      viewCollection: "Voir la collection",
      livingRooms: {
        title: "Salons",
        description:
          "Découvrez les collections de salons de luxe VIRELLAART, alliant design raffiné, savoir-faire haut de gamme et livraison mondiale.",
      },
      diningRooms: {
        title: "Salles à manger",
        description:
          "Découvrez les collections de salles à manger de luxe VIRELLAART, conçues pour des réceptions élégantes et des intérieurs d’exception.",
      },
      bedrooms: {
        title: "Chambres",
        description:
          "Découvrez les collections de chambres de luxe VIRELLAART, associant confort, savoir-faire et élégance intemporelle.",
      },
      tvUnits: {
        title: "Meubles TV",
        description:
          "Découvrez les collections de meubles TV de luxe VIRELLAART au design contemporain élégant et aux détails raffinés.",
      },
    },
    about: {
      title: "À propos de VIRELLAART",
      description:
        "Découvrez VIRELLAART, marque de mobilier de luxe créant en Türkiye des collections raffinées pour des intérieurs distingués dans le monde entier.",
      eyebrow: "À propos de VIRELLAART",
      hero: "Le mobilier de luxe au-delà de l’imagination",
      lead:
        "VIRELLAART crée des collections raffinées pour des intérieurs d’exception, associant design élégant, matériaux haut de gamme et savoir-faire distinctif.",
      story: "Notre histoire",
      heading: "Conçu en Türkiye. Créé pour le monde.",
      paragraphOne:
        "VIRELLAART est une marque de mobilier de luxe dédiée à la création d’espaces de vie intemporels. Chaque collection est développée avec une attention particulière portée aux proportions, au savoir-faire, au confort et à l’élégance visuelle.",
      paragraphTwo:
        "Des salons et salles à manger aux chambres et meubles TV, chaque pièce est créée pour apporter une atmosphère luxueuse distinctive aux intérieurs raffinés.",
      imageAlt: "Mobilier de salon de luxe VIRELLAART",
    },
    contact: {
      title: "Contacter VIRELLAART",
      description:
        "Contactez VIRELLAART pour nos collections de mobilier de luxe, la fabrication sur mesure et la livraison mondiale.",
      eyebrow: "Contacter VIRELLAART",
      hero: "Créons ensemble un intérieur d’exception",
      lead:
        "Contactez notre équipe pour les informations produits, la livraison mondiale et une consultation privée en mobilier de luxe.",
      getInTouch: "Nous contacter",
      heading: "Service mondial de mobilier de luxe",
      paragraph:
        "Notre équipe accompagne les clients internationaux pour les collections, mesures, personnalisations, production, paiement et livraison mondiale.",
      business: "Marque",
      businessValue: "Mobilier de luxe VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Contacter VIRELLAART",
      service: "Service",
      serviceValue: "Livraison mondiale",
      language: "Langue",
      languageValue: "Assistance internationale",
      button: "Contacter sur WhatsApp",
      imageAlt: "Mobilier de salle à manger de luxe VIRELLAART",
    },
    product: {
      collectionLabel: "Collection de luxe VIRELLAART",
      prices: "Prix de la collection",
      worldwideDelivery: "Livraison mondiale",
      worldwideDeliveryText: "Un service professionnel de livraison internationale est disponible dans le monde entier.",
      craftsmanship: "Savoir-faire haut de gamme",
      craftsmanshipText: "Fabriqué avec des matériaux de luxe soigneusement sélectionnés.",
      whatsapp: "Nous contacter sur WhatsApp",
      note: "Contactez notre équipe pour les dimensions, tissus, production et informations de livraison.",
      previousImage: "Image précédente",
      nextImage: "Image suivante",
      whatsappMessage: "Bonjour VIRELLAART, je souhaite recevoir plus d’informations sur la collection {product}.",
    },
  },
  it: {
    defaultDescription:
      "VIRELLAART crea in Türkiye collezioni di mobili di lusso con materiali premium, opzioni su misura e consegna in tutto il mondo.",
    nav: {
      home: "Home",
      collections: "Collezioni",
      about: "Chi siamo",
      contact: "Contatti",
      language: "Scegli la lingua",
    },
    home: {
      title: "Mobili di lusso per interni eccezionali",
      description:
        "Scopri soggiorni, sale da pranzo, camere e mobili TV di lusso VIRELLAART con opzioni su misura e consegna mondiale.",
      eyebrow: "Realizzato in Türkiye",
      lead: "Mobili di lusso senza tempo creati per interni eccezionali.",
      button: "Scopri le collezioni",
      discover: "Scopri",
      heading: "Le nostre collezioni",
      intro: "Esplora quattro categorie d’arredo esclusive progettate per interni raffinati.",
      livingRooms: "Soggiorni",
      diningRooms: "Sale da pranzo",
      bedrooms: "Camere da letto",
      tvUnits: "Mobili TV",
      discoverCollection: "Scopri la collezione",
    },
    category: {
      eyebrow: "Collezioni VIRELLAART",
      selectModel: "Seleziona un modello per vedere tutte le foto e i dettagli del prodotto.",
      viewCollection: "Vedi la collezione",
      livingRooms: {
        title: "Soggiorni",
        description:
          "Scopri le collezioni soggiorno di lusso VIRELLAART con design raffinato, lavorazione premium e consegna mondiale.",
      },
      diningRooms: {
        title: "Sale da pranzo",
        description:
          "Scopri le collezioni di sale da pranzo di lusso VIRELLAART, create per incontri eleganti e interni eccezionali.",
      },
      bedrooms: {
        title: "Camere da letto",
        description:
          "Scopri le collezioni di camere da letto di lusso VIRELLAART che uniscono comfort, artigianalità ed eleganza senza tempo.",
      },
      tvUnits: {
        title: "Mobili TV",
        description:
          "Scopri le collezioni di mobili TV di lusso VIRELLAART dal design contemporaneo elegante e dai dettagli raffinati.",
      },
    },
    about: {
      title: "Chi è VIRELLAART",
      description:
        "Scopri VIRELLAART, marchio di mobili di lusso che crea in Türkiye collezioni raffinate per interni prestigiosi in tutto il mondo.",
      eyebrow: "Chi è VIRELLAART",
      hero: "Mobili di lusso oltre l’immaginazione",
      lead:
        "VIRELLAART crea collezioni raffinate per interni eccezionali, unendo design elegante, materiali premium e artigianalità distintiva.",
      story: "La nostra storia",
      heading: "Progettato in Türkiye. Creato per il mondo.",
      paragraphOne:
        "VIRELLAART è un marchio di mobili di lusso dedicato alla creazione di spazi abitativi senza tempo. Ogni collezione è sviluppata con grande attenzione a proporzioni, artigianalità, comfort ed eleganza visiva.",
      paragraphTwo:
        "Dai soggiorni e sale da pranzo alle camere da letto e mobili TV, ogni pezzo è creato per portare un’atmosfera di lusso distintiva negli interni più raffinati.",
      imageAlt: "Mobili di lusso per soggiorno VIRELLAART",
    },
    contact: {
      title: "Contatta VIRELLAART",
      description:
        "Contatta VIRELLAART per collezioni di mobili di lusso, produzione su misura e consegna mondiale.",
      eyebrow: "Contatta VIRELLAART",
      hero: "Creiamo insieme un interno eccezionale",
      lead:
        "Contatta il nostro team per informazioni sui prodotti, dettagli sulla consegna mondiale e consulenza privata di arredamento di lusso.",
      getInTouch: "Contattaci",
      heading: "Servizio mondiale di mobili di lusso",
      paragraph:
        "Il nostro team assiste i clienti internazionali con collezioni, misure, personalizzazione, produzione, pagamento e consegna mondiale.",
      business: "Marchio",
      businessValue: "Mobili di lusso VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Contatta VIRELLAART",
      service: "Servizio",
      serviceValue: "Consegna mondiale",
      language: "Lingua",
      languageValue: "Assistenza clienti internazionale",
      button: "Contatta su WhatsApp",
      imageAlt: "Mobili di lusso per sala da pranzo VIRELLAART",
    },
    product: {
      collectionLabel: "Collezione di lusso VIRELLAART",
      prices: "Prezzi della collezione",
      worldwideDelivery: "Consegna mondiale",
      worldwideDeliveryText: "È disponibile un servizio professionale di consegna internazionale in tutto il mondo.",
      craftsmanship: "Artigianalità premium",
      craftsmanshipText: "Realizzato con materiali di lusso accuratamente selezionati.",
      whatsapp: "Contattaci su WhatsApp",
      note: "Contatta il nostro team per dimensioni, tessuti, produzione e informazioni sulla consegna.",
      previousImage: "Immagine precedente",
      nextImage: "Immagine successiva",
      whatsappMessage: "Buongiorno VIRELLAART, vorrei ricevere maggiori informazioni sulla collezione {product}.",
    },
  },
  ru: {
    defaultDescription:
      "VIRELLAART создаёт в Türkiye коллекции элитной мебели из премиальных материалов с индивидуальными опциями и доставкой по всему миру.",
    nav: {
      home: "Главная",
      collections: "Коллекции",
      about: "О нас",
      contact: "Контакты",
      language: "Выбрать язык",
    },
    home: {
      title: "Элитная мебель для исключительных интерьеров",
      description:
        "Откройте для себя роскошные гостиные, столовые, спальни и ТВ-зоны VIRELLAART с индивидуальными опциями и доставкой по всему миру.",
      eyebrow: "Создано в Türkiye",
      lead: "Вневременная элитная мебель для исключительных интерьеров.",
      button: "Смотреть коллекции",
      discover: "Откройте",
      heading: "Наши коллекции",
      intro: "Четыре фирменные категории мебели для изысканных жилых интерьеров.",
      livingRooms: "Гостиные",
      diningRooms: "Столовые",
      bedrooms: "Спальни",
      tvUnits: "ТВ-зоны",
      discoverCollection: "Смотреть коллекцию",
    },
    category: {
      eyebrow: "Коллекции VIRELLAART",
      selectModel: "Выберите модель, чтобы посмотреть все фотографии и характеристики.",
      viewCollection: "Смотреть коллекцию",
      livingRooms: {
        title: "Гостиные",
        description:
          "Коллекции роскошных гостиных VIRELLAART объединяют изысканный дизайн, премиальное мастерство и доставку по всему миру.",
      },
      diningRooms: {
        title: "Столовые",
        description:
          "Коллекции роскошных столовых VIRELLAART созданы для элегантных встреч и исключительных интерьеров.",
      },
      bedrooms: {
        title: "Спальни",
        description:
          "Коллекции роскошных спален VIRELLAART сочетают комфорт, мастерство и вневременную элегантность.",
      },
      tvUnits: {
        title: "ТВ-зоны",
        description:
          "Коллекции роскошной ТВ-мебели VIRELLAART отличаются элегантным современным дизайном и утончёнными деталями.",
      },
    },
    about: {
      title: "О VIRELLAART",
      description:
        "Познакомьтесь с VIRELLAART — брендом элитной мебели, создающим в Türkiye изысканные коллекции для интерьеров по всему миру.",
      eyebrow: "О VIRELLAART",
      hero: "Элитная мебель за гранью воображения",
      lead:
        "VIRELLAART создаёт изысканные коллекции для исключительных интерьеров, объединяя элегантный дизайн, премиальные материалы и мастерство.",
      story: "Наша история",
      heading: "Разработано в Türkiye. Создано для мира.",
      paragraphOne:
        "VIRELLAART — бренд элитной мебели, посвящённый созданию вневременных жилых пространств. Каждая коллекция разрабатывается с особым вниманием к пропорциям, мастерству, комфорту и визуальной элегантности.",
      paragraphTwo:
        "От гостиных и столовых до спален и ТВ-зон — каждый предмет создаётся, чтобы наполнить изысканный дом неповторимой атмосферой роскоши.",
      imageAlt: "Элитная мебель VIRELLAART для гостиной",
    },
    contact: {
      title: "Связаться с VIRELLAART",
      description:
        "Свяжитесь с VIRELLAART по вопросам коллекций элитной мебели, индивидуального производства и мировой доставки.",
      eyebrow: "Контакты VIRELLAART",
      hero: "Создадим исключительный интерьер вместе",
      lead:
        "Свяжитесь с нашей командой для получения информации о продукции, мировой доставке и персональной консультации.",
      getInTouch: "Связаться с нами",
      heading: "Международный сервис элитной мебели",
      paragraph:
        "Наша команда помогает международным клиентам с выбором коллекций, размерами, персонализацией, производством, оплатой и доставкой.",
      business: "Бренд",
      businessValue: "Элитная мебель VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Связаться с VIRELLAART",
      service: "Сервис",
      serviceValue: "Доставка по всему миру",
      language: "Язык",
      languageValue: "Международная поддержка",
      button: "Написать в WhatsApp",
      imageAlt: "Элитная мебель VIRELLAART для столовой",
    },
    product: {
      collectionLabel: "Элитная коллекция VIRELLAART",
      prices: "Цены коллекции",
      worldwideDelivery: "Доставка по всему миру",
      worldwideDeliveryText: "Доступна профессиональная международная доставка по всему миру.",
      craftsmanship: "Премиальное мастерство",
      craftsmanshipText: "Изготовлено из тщательно отобранных премиальных материалов.",
      whatsapp: "Написать в WhatsApp",
      note: "Свяжитесь с нами для уточнения размеров, тканей, производства и доставки.",
      previousImage: "Предыдущее изображение",
      nextImage: "Следующее изображение",
      whatsappMessage: "Здравствуйте, VIRELLAART! Я хотел(а) бы узнать больше о коллекции {product}.",
    },
  },
  ar: {
    defaultDescription:
      "تقدم VIRELLAART مجموعات أثاث فاخر مصنوعة في Türkiye بمواد راقية وخيارات مخصصة وتوصيل إلى جميع أنحاء العالم.",
    nav: {
      home: "الرئيسية",
      collections: "المجموعات",
      about: "من نحن",
      contact: "اتصل بنا",
      language: "اختر اللغة",
    },
    home: {
      title: "أثاث فاخر لمساحات داخلية استثنائية",
      description:
        "اكتشف غرف المعيشة والطعام والنوم ووحدات التلفزيون الفاخرة من VIRELLAART مع خيارات مخصصة وتوصيل عالمي.",
      eyebrow: "صُنع في Türkiye",
      lead: "أثاث فاخر خالد صُمم لمساحات داخلية استثنائية.",
      button: "اكتشف المجموعات",
      discover: "اكتشف",
      heading: "مجموعاتنا",
      intro: "استكشف أربع فئات مميزة من الأثاث المصمم للمنازل الراقية.",
      livingRooms: "غرف المعيشة",
      diningRooms: "غرف الطعام",
      bedrooms: "غرف النوم",
      tvUnits: "وحدات التلفزيون",
      discoverCollection: "اكتشف المجموعة",
    },
    category: {
      eyebrow: "مجموعات VIRELLAART",
      selectModel: "اختر طرازاً لعرض جميع الصور وتفاصيل المنتج.",
      viewCollection: "عرض المجموعة",
      livingRooms: {
        title: "غرف المعيشة",
        description:
          "اكتشف مجموعات غرف المعيشة الفاخرة من VIRELLAART بتصميم راقٍ وحرفية متميزة وتوصيل عالمي.",
      },
      diningRooms: {
        title: "غرف الطعام",
        description:
          "اكتشف مجموعات غرف الطعام الفاخرة من VIRELLAART المصممة للضيافة الأنيقة والمساحات الاستثنائية.",
      },
      bedrooms: {
        title: "غرف النوم",
        description:
          "اكتشف مجموعات غرف النوم الفاخرة من VIRELLAART التي تجمع بين الراحة والحرفية والأناقة الخالدة.",
      },
      tvUnits: {
        title: "وحدات التلفزيون",
        description:
          "اكتشف مجموعات وحدات التلفزيون الفاخرة من VIRELLAART بتصميم عصري أنيق وتفاصيل راقية.",
      },
    },
    about: {
      title: "عن VIRELLAART",
      description:
        "تعرّف على VIRELLAART، علامة الأثاث الفاخر التي تصنع في Türkiye مجموعات راقية للمساحات المميزة حول العالم.",
      eyebrow: "عن VIRELLAART",
      hero: "أثاث فاخر يتجاوز الخيال",
      lead:
        "تبتكر VIRELLAART مجموعات أثاث راقية للمساحات الاستثنائية، تجمع بين التصميم الأنيق والمواد الفاخرة والحرفية المميزة.",
      story: "قصتنا",
      heading: "صُمم في Türkiye. وصُنع للعالم.",
      paragraphOne:
        "VIRELLAART علامة أثاث فاخر مكرسة لابتكار مساحات معيشة خالدة. تُطوّر كل مجموعة مع اهتمام دقيق بالتناسب والحرفية والراحة والأناقة البصرية.",
      paragraphTwo:
        "من غرف المعيشة والطعام إلى غرف النوم ووحدات التلفزيون، صُممت كل قطعة لتضفي أجواء فاخرة ومميزة على المنازل الراقية.",
      imageAlt: "أثاث غرفة معيشة فاخر من VIRELLAART",
    },
    contact: {
      title: "اتصل بـ VIRELLAART",
      description:
        "تواصل مع VIRELLAART لمجموعات الأثاث الفاخر والتصنيع المخصص والتوصيل إلى جميع أنحاء العالم.",
      eyebrow: "اتصل بـ VIRELLAART",
      hero: "لنبتكر معاً مساحة داخلية استثنائية",
      lead:
        "تواصل مع فريقنا للحصول على معلومات المنتجات وتفاصيل التوصيل العالمي واستشارة خاصة للأثاث الفاخر.",
      getInTouch: "تواصل معنا",
      heading: "خدمة أثاث فاخر عالمية",
      paragraph:
        "يساعد فريقنا العملاء الدوليين في اختيار المجموعات والمقاسات والتخصيص والإنتاج والدفع والتوصيل العالمي.",
      business: "العلامة",
      businessValue: "أثاث VIRELLAART الفاخر",
      whatsapp: "واتساب",
      whatsappValue: "تواصل مع VIRELLAART",
      service: "الخدمة",
      serviceValue: "توصيل إلى جميع أنحاء العالم",
      language: "اللغة",
      languageValue: "دعم دولي للعملاء",
      button: "تواصل عبر واتساب",
      imageAlt: "أثاث غرفة طعام فاخر من VIRELLAART",
    },
    product: {
      collectionLabel: "مجموعة VIRELLAART الفاخرة",
      prices: "أسعار المجموعة",
      worldwideDelivery: "توصيل عالمي",
      worldwideDeliveryText: "تتوفر خدمة توصيل دولية احترافية إلى جميع أنحاء العالم.",
      craftsmanship: "حرفية فاخرة",
      craftsmanshipText: "مصنوع من مواد فاخرة مختارة بعناية.",
      whatsapp: "تواصل معنا عبر واتساب",
      note: "تواصل مع فريقنا لمعرفة المقاسات وخيارات الأقمشة والإنتاج والتوصيل.",
      previousImage: "الصورة السابقة",
      nextImage: "الصورة التالية",
      whatsappMessage: "مرحباً VIRELLAART، أود الحصول على مزيد من المعلومات حول مجموعة {product}.",
    },
  },
  bg: {
    defaultDescription:
      "VIRELLAART създава в Türkiye колекции луксозни мебели с премиум материали, персонализирани опции и доставка по целия свят.",
    nav: {
      home: "Начало",
      collections: "Колекции",
      about: "За нас",
      contact: "Контакт",
      language: "Изберете език",
    },
    home: {
      title: "Луксозни мебели за изключителни интериори",
      description:
        "Открийте луксозните дневни, трапезарии, спални и ТВ модули на VIRELLAART с персонализирани опции и световна доставка.",
      eyebrow: "Произведено в Türkiye",
      lead: "Непреходни луксозни мебели, създадени за изключителни интериори.",
      button: "Разгледайте колекциите",
      discover: "Открийте",
      heading: "Нашите колекции",
      intro: "Разгледайте четири характерни категории мебели за изискани жилищни интериори.",
      livingRooms: "Дневни",
      diningRooms: "Трапезарии",
      bedrooms: "Спални",
      tvUnits: "ТВ модули",
      discoverCollection: "Разгледайте колекцията",
    },
    category: {
      eyebrow: "Колекции VIRELLAART",
      selectModel: "Изберете модел, за да видите всички снимки и подробности за продукта.",
      viewCollection: "Вижте колекцията",
      livingRooms: {
        title: "Дневни",
        description:
          "Открийте луксозните колекции за дневна на VIRELLAART с изискан дизайн, премиум изработка и световна доставка.",
      },
      diningRooms: {
        title: "Трапезарии",
        description:
          "Открийте луксозните колекции за трапезария на VIRELLAART, създадени за елегантни срещи и изключителни интериори.",
      },
      bedrooms: {
        title: "Спални",
        description:
          "Открийте луксозните колекции за спалня на VIRELLAART, съчетаващи комфорт, майсторство и непреходна елегантност.",
      },
      tvUnits: {
        title: "ТВ модули",
        description:
          "Открийте луксозните ТВ модули на VIRELLAART с елегантен съвременен дизайн и изискани детайли.",
      },
    },
    about: {
      title: "За VIRELLAART",
      description:
        "Открийте VIRELLAART — марка за луксозни мебели, която създава в Türkiye изискани колекции за отличителни интериори по света.",
      eyebrow: "За VIRELLAART",
      hero: "Луксозни мебели отвъд въображението",
      lead:
        "VIRELLAART създава изискани колекции за изключителни интериори, съчетавайки елегантен дизайн, премиум материали и отличително майсторство.",
      story: "Нашата история",
      heading: "Проектирано в Türkiye. Създадено за света.",
      paragraphOne:
        "VIRELLAART е марка за луксозни мебели, посветена на създаването на непреходни жилищни пространства. Всяка колекция се разработва с фокус върху пропорциите, майсторството, комфорта и визуалната елегантност.",
      paragraphTwo:
        "От дневни и трапезарии до спални и ТВ модули, всяка мебел е създадена да внесе отличителна луксозна атмосфера в изискания дом.",
      imageAlt: "Луксозни мебели за дневна VIRELLAART",
    },
    contact: {
      title: "Свържете се с VIRELLAART",
      description:
        "Свържете се с VIRELLAART за колекции луксозни мебели, персонализирано производство и световна доставка.",
      eyebrow: "Контакт с VIRELLAART",
      hero: "Нека създадем изключителен интериор",
      lead:
        "Свържете се с нашия екип за продуктова информация, световна доставка и персонална консултация за луксозни мебели.",
      getInTouch: "Свържете се с нас",
      heading: "Световна услуга за луксозни мебели",
      paragraph:
        "Нашият екип помага на международни клиенти с колекции, размери, персонализация, производство, плащане и доставка.",
      business: "Марка",
      businessValue: "Луксозни мебели VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Свържете се с VIRELLAART",
      service: "Услуга",
      serviceValue: "Световна доставка",
      language: "Език",
      languageValue: "Международна поддръжка",
      button: "Контакт чрез WhatsApp",
      imageAlt: "Луксозни мебели за трапезария VIRELLAART",
    },
    product: {
      collectionLabel: "Луксозна колекция VIRELLAART",
      prices: "Цени на колекцията",
      worldwideDelivery: "Световна доставка",
      worldwideDeliveryText: "Предлага се професионална международна доставка по целия свят.",
      craftsmanship: "Премиум изработка",
      craftsmanshipText: "Изработено от внимателно подбрани луксозни материали.",
      whatsapp: "Свържете се чрез WhatsApp",
      note: "Свържете се с екипа ни за размери, дамаски, производство и доставка.",
      previousImage: "Предишно изображение",
      nextImage: "Следващо изображение",
      whatsappMessage: "Здравейте, VIRELLAART! Желая повече информация за колекцията {product}.",
    },
  },
  ro: {
    defaultDescription:
      "VIRELLAART creează în Türkiye colecții de mobilier de lux cu materiale premium, opțiuni personalizate și livrare internațională.",
    nav: {
      home: "Acasă",
      collections: "Colecții",
      about: "Despre noi",
      contact: "Contact",
      language: "Alege limba",
    },
    home: {
      title: "Mobilier de lux pentru interioare excepționale",
      description:
        "Descoperiți sufragerii, săli de mese, dormitoare și comode TV de lux VIRELLAART, cu opțiuni personalizate și livrare internațională.",
      eyebrow: "Fabricat în Türkiye",
      lead: "Mobilier de lux atemporal, creat pentru interioare excepționale.",
      button: "Descoperă colecțiile",
      discover: "Descoperă",
      heading: "Colecțiile noastre",
      intro: "Explorați patru categorii de mobilier reprezentative, create pentru interioare rafinate.",
      livingRooms: "Sufragerii",
      diningRooms: "Săli de mese",
      bedrooms: "Dormitoare",
      tvUnits: "Comode TV",
      discoverCollection: "Descoperă colecția",
    },
    category: {
      eyebrow: "Colecții VIRELLAART",
      selectModel: "Selectați un model pentru a vedea toate fotografiile și detaliile produsului.",
      viewCollection: "Vezi colecția",
      livingRooms: {
        title: "Sufragerii",
        description:
          "Descoperiți colecțiile de mobilier pentru sufragerie VIRELLAART, cu design rafinat, măiestrie premium și livrare internațională.",
      },
      diningRooms: {
        title: "Săli de mese",
        description:
          "Descoperiți colecțiile de mobilier pentru sala de mese VIRELLAART, create pentru reuniuni elegante și interioare deosebite.",
      },
      bedrooms: {
        title: "Dormitoare",
        description:
          "Descoperiți colecțiile de dormitoare de lux VIRELLAART, care combină confortul, măiestria și eleganța atemporală.",
      },
      tvUnits: {
        title: "Comode TV",
        description:
          "Descoperiți colecțiile de comode TV de lux VIRELLAART cu design contemporan elegant și detalii rafinate.",
      },
    },
    about: {
      title: "Despre VIRELLAART",
      description:
        "Descoperiți VIRELLAART, un brand de mobilier de lux care creează în Türkiye colecții rafinate pentru interioare deosebite din întreaga lume.",
      eyebrow: "Despre VIRELLAART",
      hero: "Mobilier de lux dincolo de imaginație",
      lead:
        "VIRELLAART creează colecții rafinate pentru interioare excepționale, combinând designul elegant, materialele premium și măiestria distinctivă.",
      story: "Povestea noastră",
      heading: "Proiectat în Türkiye. Creat pentru întreaga lume.",
      paragraphOne:
        "VIRELLAART este un brand de mobilier de lux dedicat creării unor spații de locuit atemporale. Fiecare colecție este dezvoltată cu accent pe proporții, măiestrie, confort și eleganță vizuală.",
      paragraphTwo:
        "De la sufragerii și săli de mese la dormitoare și comode TV, fiecare piesă este creată pentru a aduce o atmosferă distinctă de lux în locuințele rafinate.",
      imageAlt: "Mobilier de lux pentru sufragerie VIRELLAART",
    },
    contact: {
      title: "Contactați VIRELLAART",
      description:
        "Contactați VIRELLAART pentru colecții de mobilier de lux, producție personalizată și livrare internațională.",
      eyebrow: "Contact VIRELLAART",
      hero: "Să creăm împreună un interior excepțional",
      lead:
        "Contactați echipa noastră pentru informații despre produse, livrare internațională și consultanță privată pentru mobilier de lux.",
      getInTouch: "Contactați-ne",
      heading: "Serviciu internațional de mobilier de lux",
      paragraph:
        "Echipa noastră asistă clienții internaționali cu selecția colecțiilor, dimensiuni, personalizare, producție, plată și livrare.",
      business: "Brand",
      businessValue: "Mobilier de lux VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Contactați VIRELLAART",
      service: "Serviciu",
      serviceValue: "Livrare internațională",
      language: "Limbă",
      languageValue: "Asistență internațională",
      button: "Contact prin WhatsApp",
      imageAlt: "Mobilier de lux pentru sala de mese VIRELLAART",
    },
    product: {
      collectionLabel: "Colecția de lux VIRELLAART",
      prices: "Prețurile colecției",
      worldwideDelivery: "Livrare internațională",
      worldwideDeliveryText: "Este disponibil un serviciu profesional de livrare în întreaga lume.",
      craftsmanship: "Măiestrie premium",
      craftsmanshipText: "Realizat din materiale de lux atent selecționate.",
      whatsapp: "Contactați-ne pe WhatsApp",
      note: "Contactați echipa noastră pentru dimensiuni, textile, producție și livrare.",
      previousImage: "Imaginea anterioară",
      nextImage: "Imaginea următoare",
      whatsappMessage: "Bună, VIRELLAART! Doresc mai multe informații despre colecția {product}.",
    },
  },
  el: {
    defaultDescription:
      "Η VIRELLAART δημιουργεί στην Türkiye συλλογές πολυτελών επίπλων με κορυφαία υλικά, εξατομικευμένες επιλογές και παγκόσμια παράδοση.",
    nav: {
      home: "Αρχική",
      collections: "Συλλογές",
      about: "Σχετικά",
      contact: "Επικοινωνία",
      language: "Επιλογή γλώσσας",
    },
    home: {
      title: "Πολυτελή έπιπλα για εξαιρετικούς εσωτερικούς χώρους",
      description:
        "Ανακαλύψτε πολυτελή σαλόνια, τραπεζαρίες, υπνοδωμάτια και έπιπλα τηλεόρασης VIRELLAART με εξατομίκευση και παγκόσμια παράδοση.",
      eyebrow: "Κατασκευάζεται στην Türkiye",
      lead: "Διαχρονικά πολυτελή έπιπλα για εξαιρετικούς εσωτερικούς χώρους.",
      button: "Ανακαλύψτε τις συλλογές",
      discover: "Ανακαλύψτε",
      heading: "Οι συλλογές μας",
      intro: "Εξερευνήστε τέσσερις χαρακτηριστικές κατηγορίες επίπλων για εκλεπτυσμένους χώρους.",
      livingRooms: "Σαλόνια",
      diningRooms: "Τραπεζαρίες",
      bedrooms: "Υπνοδωμάτια",
      tvUnits: "Έπιπλα τηλεόρασης",
      discoverCollection: "Ανακαλύψτε τη συλλογή",
    },
    category: {
      eyebrow: "Συλλογές VIRELLAART",
      selectModel: "Επιλέξτε μοντέλο για να δείτε όλες τις φωτογραφίες και τις λεπτομέρειες.",
      viewCollection: "Δείτε τη συλλογή",
      livingRooms: {
        title: "Σαλόνια",
        description:
          "Ανακαλύψτε τις πολυτελείς συλλογές σαλονιού VIRELLAART με εκλεπτυσμένο σχεδιασμό, κορυφαία κατασκευή και παγκόσμια παράδοση.",
      },
      diningRooms: {
        title: "Τραπεζαρίες",
        description:
          "Ανακαλύψτε τις πολυτελείς συλλογές τραπεζαρίας VIRELLAART, σχεδιασμένες για κομψές συναντήσεις και εξαιρετικούς χώρους.",
      },
      bedrooms: {
        title: "Υπνοδωμάτια",
        description:
          "Ανακαλύψτε τις πολυτελείς συλλογές υπνοδωματίου VIRELLAART που συνδυάζουν άνεση, δεξιοτεχνία και διαχρονική κομψότητα.",
      },
      tvUnits: {
        title: "Έπιπλα τηλεόρασης",
        description:
          "Ανακαλύψτε τις πολυτελείς συλλογές επίπλων τηλεόρασης VIRELLAART με κομψό σύγχρονο σχεδιασμό και εκλεπτυσμένες λεπτομέρειες.",
      },
    },
    about: {
      title: "Σχετικά με τη VIRELLAART",
      description:
        "Γνωρίστε τη VIRELLAART, ένα brand πολυτελών επίπλων που δημιουργεί στην Türkiye εκλεπτυσμένες συλλογές για ξεχωριστούς χώρους παγκοσμίως.",
      eyebrow: "Σχετικά με τη VIRELLAART",
      hero: "Πολυτελή έπιπλα πέρα από τη φαντασία",
      lead:
        "Η VIRELLAART δημιουργεί εκλεπτυσμένες συλλογές για εξαιρετικούς χώρους, συνδυάζοντας κομψό σχεδιασμό, κορυφαία υλικά και ξεχωριστή δεξιοτεχνία.",
      story: "Η ιστορία μας",
      heading: "Σχεδιασμένο στην Türkiye. Δημιουργημένο για τον κόσμο.",
      paragraphOne:
        "Η VIRELLAART είναι ένα brand πολυτελών επίπλων αφοσιωμένο στη δημιουργία διαχρονικών χώρων. Κάθε συλλογή αναπτύσσεται με έμφαση στις αναλογίες, τη δεξιοτεχνία, την άνεση και την οπτική κομψότητα.",
      paragraphTwo:
        "Από σαλόνια και τραπεζαρίες έως υπνοδωμάτια και έπιπλα τηλεόρασης, κάθε κομμάτι δημιουργείται για να προσφέρει μια ξεχωριστή ατμόσφαιρα πολυτέλειας.",
      imageAlt: "Πολυτελή έπιπλα σαλονιού VIRELLAART",
    },
    contact: {
      title: "Επικοινωνήστε με τη VIRELLAART",
      description:
        "Επικοινωνήστε με τη VIRELLAART για συλλογές πολυτελών επίπλων, εξατομικευμένη παραγωγή και παγκόσμια παράδοση.",
      eyebrow: "Επικοινωνία VIRELLAART",
      hero: "Ας δημιουργήσουμε μαζί έναν εξαιρετικό χώρο",
      lead:
        "Επικοινωνήστε με την ομάδα μας για πληροφορίες προϊόντων, παγκόσμια παράδοση και ιδιωτική συμβουλευτική πολυτελών επίπλων.",
      getInTouch: "Επικοινωνήστε μαζί μας",
      heading: "Παγκόσμια υπηρεσία πολυτελών επίπλων",
      paragraph:
        "Η ομάδα μας υποστηρίζει διεθνείς πελάτες σε συλλογές, διαστάσεις, εξατομίκευση, παραγωγή, πληρωμή και παράδοση.",
      business: "Brand",
      businessValue: "Πολυτελή έπιπλα VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Επικοινωνία με VIRELLAART",
      service: "Υπηρεσία",
      serviceValue: "Παγκόσμια παράδοση",
      language: "Γλώσσα",
      languageValue: "Διεθνής υποστήριξη",
      button: "Επικοινωνία μέσω WhatsApp",
      imageAlt: "Πολυτελή έπιπλα τραπεζαρίας VIRELLAART",
    },
    product: {
      collectionLabel: "Πολυτελής συλλογή VIRELLAART",
      prices: "Τιμές συλλογής",
      worldwideDelivery: "Παγκόσμια παράδοση",
      worldwideDeliveryText: "Διατίθεται επαγγελματική διεθνής παράδοση σε όλο τον κόσμο.",
      craftsmanship: "Κορυφαία κατασκευή",
      craftsmanshipText: "Κατασκευάζεται με προσεκτικά επιλεγμένα πολυτελή υλικά.",
      whatsapp: "Επικοινωνήστε μέσω WhatsApp",
      note: "Επικοινωνήστε με την ομάδα μας για διαστάσεις, υφάσματα, παραγωγή και παράδοση.",
      previousImage: "Προηγούμενη εικόνα",
      nextImage: "Επόμενη εικόνα",
      whatsappMessage: "Γεια σας VIRELLAART, θα ήθελα περισσότερες πληροφορίες για τη συλλογή {product}.",
    },
  },
  es: {
    defaultDescription:
      "VIRELLAART crea colecciones de muebles de lujo fabricadas en Türkiye con materiales premium, opciones a medida y entrega mundial.",
    nav: {
      home: "Inicio",
      collections: "Colecciones",
      about: "Nosotros",
      contact: "Contacto",
      language: "Seleccionar idioma",
    },
    home: {
      title: "Muebles de lujo para interiores excepcionales",
      description:
        "Descubra salones, comedores, dormitorios y muebles de TV de lujo VIRELLAART, con opciones a medida y entrega mundial.",
      eyebrow: "Fabricado en Türkiye",
      lead: "Muebles de lujo atemporales creados para interiores excepcionales.",
      button: "Explorar colecciones",
      discover: "Descubra",
      heading: "Nuestras colecciones",
      intro:
        "Explore cuatro categorías exclusivas de mobiliario diseñadas para interiores residenciales refinados.",
      livingRooms: "Salones",
      diningRooms: "Comedores",
      bedrooms: "Dormitorios",
      tvUnits: "Muebles de TV",
      discoverCollection: "Descubrir colección",
    },
    category: {
      eyebrow: "Colecciones VIRELLAART",
      selectModel:
        "Seleccione un modelo para ver todas las fotografías y los detalles del producto.",
      viewCollection: "Ver colección",
      livingRooms: {
        title: "Salones",
        description:
          "Explore las colecciones de salones de lujo VIRELLAART, con diseño refinado, artesanía premium y entrega mundial.",
      },
      diningRooms: {
        title: "Comedores",
        description:
          "Explore las colecciones de comedores de lujo VIRELLAART, creadas para reuniones elegantes e interiores excepcionales.",
      },
      bedrooms: {
        title: "Dormitorios",
        description:
          "Explore las colecciones de dormitorios de lujo VIRELLAART, que combinan confort, artesanía y elegancia atemporal.",
      },
      tvUnits: {
        title: "Muebles de TV",
        description:
          "Explore las colecciones de muebles de TV de lujo VIRELLAART, con elegante diseño contemporáneo y detalles refinados.",
      },
    },
    about: {
      title: "Sobre VIRELLAART",
      description:
        "Descubra VIRELLAART, una marca de muebles de lujo que crea colecciones refinadas en Türkiye para interiores distinguidos de todo el mundo.",
      eyebrow: "Sobre VIRELLAART",
      hero: "Muebles de lujo más allá de la imaginación",
      lead:
        "VIRELLAART crea colecciones refinadas para interiores excepcionales, combinando diseño elegante, materiales premium y artesanía distintiva.",
      story: "Nuestra historia",
      heading: "Diseñado en Türkiye. Creado para el mundo.",
      paragraphOne:
        "VIRELLAART es una marca de muebles de lujo dedicada a crear espacios atemporales. Cada colección se desarrolla con especial atención a la proporción, la artesanía, el confort y la elegancia visual.",
      paragraphTwo:
        "Desde salones y comedores hasta dormitorios y muebles de TV, cada pieza se crea para aportar una atmósfera de lujo singular a hogares refinados.",
      imageAlt: "Muebles de salón de lujo VIRELLAART",
    },
    contact: {
      title: "Contacto VIRELLAART",
      description:
        "Contacte con VIRELLAART para conocer nuestras colecciones de muebles de lujo, producción a medida y entrega mundial.",
      eyebrow: "Contacto VIRELLAART",
      hero: "Creemos juntos un interior excepcional",
      lead:
        "Contacte con nuestro equipo para obtener información sobre productos, entrega mundial y asesoramiento privado en mobiliario de lujo.",
      getInTouch: "Póngase en contacto",
      heading: "Servicio mundial de muebles de lujo",
      paragraph:
        "Nuestro equipo asiste a clientes internacionales con colecciones, medidas, personalización, producción, pagos y entrega mundial.",
      business: "Empresa",
      businessValue: "Muebles de lujo VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Contactar con VIRELLAART",
      service: "Servicio",
      serviceValue: "Entrega mundial",
      language: "Idioma",
      languageValue: "Atención internacional al cliente",
      button: "Contactar por WhatsApp",
      imageAlt: "Muebles de comedor de lujo VIRELLAART",
    },
    product: {
      collectionLabel: "Colección de lujo VIRELLAART",
      prices: "Precios de la colección",
      worldwideDelivery: "Entrega mundial",
      worldwideDeliveryText:
        "Ofrecemos asistencia profesional para entregas internacionales en todo el mundo.",
      craftsmanship: "Artesanía premium",
      craftsmanshipText:
        "Fabricado con materiales de lujo cuidadosamente seleccionados.",
      whatsapp: "Contactar por WhatsApp",
      note:
        "Contacte con nuestro equipo para conocer medidas, tejidos, producción y opciones de entrega.",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      whatsappMessage:
        "Hola VIRELLAART, me gustaría recibir más información sobre la colección {product}.",
    },
  },
  sr: {
    defaultDescription:
      "VIRELLAART kreira kolekcije luksuznog nameštaja izrađene u Türkiye od vrhunskih materijala, sa opcijama po meri i dostavom širom sveta.",
    nav: {
      home: "Početna",
      collections: "Kolekcije",
      about: "O nama",
      contact: "Kontakt",
      language: "Izaberite jezik",
    },
    home: {
      title: "Luksuzni nameštaj za izuzetne enterijere",
      description:
        "Otkrijte VIRELLAART luksuzne dnevne sobe, trpezarije, spavaće sobe i TV komode, sa opcijama po meri i dostavom širom sveta.",
      eyebrow: "Proizvedeno u Türkiye",
      lead: "Bezvremenski luksuzni nameštaj stvoren za izuzetne enterijere.",
      button: "Istražite kolekcije",
      discover: "Otkrijte",
      heading: "Naše kolekcije",
      intro:
        "Istražite četiri prepoznatljive kategorije nameštaja dizajnirane za prefinjene stambene enterijere.",
      livingRooms: "Dnevne sobe",
      diningRooms: "Trpezarije",
      bedrooms: "Spavaće sobe",
      tvUnits: "TV komode",
      discoverCollection: "Otkrijte kolekciju",
    },
    category: {
      eyebrow: "VIRELLAART kolekcije",
      selectModel:
        "Izaberite model da biste videli sve fotografije i detalje proizvoda.",
      viewCollection: "Pogledajte kolekciju",
      livingRooms: {
        title: "Dnevne sobe",
        description:
          "Istražite VIRELLAART kolekcije luksuznih dnevnih soba sa prefinjenim dizajnom, vrhunskom izradom i dostavom širom sveta.",
      },
      diningRooms: {
        title: "Trpezarije",
        description:
          "Istražite VIRELLAART kolekcije luksuznih trpezarija stvorene za elegantna okupljanja i izuzetne enterijere.",
      },
      bedrooms: {
        title: "Spavaće sobe",
        description:
          "Istražite VIRELLAART kolekcije luksuznih spavaćih soba koje spajaju udobnost, vrhunsku izradu i bezvremensku eleganciju.",
      },
      tvUnits: {
        title: "TV komode",
        description:
          "Istražite VIRELLAART kolekcije luksuznih TV komoda sa elegantnim savremenim dizajnom i prefinjenim detaljima.",
      },
    },
    about: {
      title: "O kompaniji VIRELLAART",
      description:
        "Upoznajte VIRELLAART, brend luksuznog nameštaja koji u Türkiye stvara prefinjene kolekcije za izuzetne enterijere širom sveta.",
      eyebrow: "O kompaniji VIRELLAART",
      hero: "Luksuzni nameštaj iznad očekivanja",
      lead:
        "VIRELLAART stvara prefinjene kolekcije za izuzetne enterijere, spajajući elegantan dizajn, vrhunske materijale i prepoznatljivu izradu.",
      story: "Naša priča",
      heading: "Dizajnirano u Türkiye. Stvoreno za svet.",
      paragraphOne:
        "VIRELLAART je brend luksuznog nameštaja posvećen stvaranju bezvremenskih životnih prostora. Svaka kolekcija razvija se sa posebnim fokusom na proporcije, izradu, udobnost i vizuelnu eleganciju.",
      paragraphTwo:
        "Od dnevnih soba i trpezarija do spavaćih soba i TV komoda, svaki komad je stvoren da unese jedinstvenu luksuznu atmosferu u prefinjene domove.",
      imageAlt: "VIRELLAART luksuzni nameštaj za dnevnu sobu",
    },
    contact: {
      title: "Kontaktirajte VIRELLAART",
      description:
        "Kontaktirajte VIRELLAART za kolekcije luksuznog nameštaja, izradu po meri i dostavu širom sveta.",
      eyebrow: "Kontakt VIRELLAART",
      hero: "Stvorimo zajedno izuzetan enterijer",
      lead:
        "Kontaktirajte naš tim za informacije o proizvodima, dostavi širom sveta i privatnom savetovanju za luksuzni nameštaj.",
      getInTouch: "Kontaktirajte nas",
      heading: "Luksuzni nameštaj sa uslugom širom sveta",
      paragraph:
        "Naš tim pomaže međunarodnim klijentima pri izboru kolekcija, mera, personalizacije, proizvodnje, plaćanja i dostave širom sveta.",
      business: "Kompanija",
      businessValue: "VIRELLAART luksuzni nameštaj",
      whatsapp: "WhatsApp",
      whatsappValue: "Kontaktirajte VIRELLAART",
      service: "Usluga",
      serviceValue: "Dostava širom sveta",
      language: "Jezik",
      languageValue: "Međunarodna korisnička podrška",
      button: "Kontaktirajte nas putem WhatsApp-a",
      imageAlt: "VIRELLAART luksuzni nameštaj za trpezariju",
    },
    product: {
      collectionLabel: "VIRELLAART luksuzna kolekcija",
      prices: "Cene kolekcije",
      worldwideDelivery: "Dostava širom sveta",
      worldwideDeliveryText:
        "Profesionalna podrška za međunarodnu dostavu dostupna je širom sveta.",
      craftsmanship: "Vrhunska izrada",
      craftsmanshipText:
        "Izrađeno od pažljivo odabranih luksuznih materijala.",
      whatsapp: "Kontaktirajte nas putem WhatsApp-a",
      note:
        "Kontaktirajte naš tim za informacije o merama, tkaninama, proizvodnji i dostavi.",
      previousImage: "Prethodna slika",
      nextImage: "Sledeća slika",
      whatsappMessage:
        "Zdravo VIRELLAART, želeo/la bih više informacija o kolekciji {product}.",
    },
  },
  kk: {
    defaultDescription:
      "VIRELLAART Türkiye-де премиум материалдардан жасалатын, жеке тапсырыс мүмкіндіктері мен дүниежүзілік жеткізілімі бар сәнді жиһаз топтамаларын ұсынады.",
    nav: {
      home: "Басты бет",
      collections: "Топтамалар",
      about: "Біз туралы",
      contact: "Байланыс",
      language: "Тілді таңдаңыз",
    },
    home: {
      title: "Ерекше интерьерлерге арналған сәнді жиһаз",
      description:
        "Жеке тапсырыс мүмкіндіктері және дүниежүзілік жеткізілімі бар VIRELLAART сәнді қонақ бөлме, асхана, жатын бөлме және теледидар жиһазы топтамаларын көріңіз.",
      eyebrow: "Türkiye-де жасалған",
      lead: "Ерекше интерьерлер үшін жасалған мәңгілік сәнді жиһаз.",
      button: "Топтамаларды көру",
      discover: "Танысыңыз",
      heading: "Біздің топтамалар",
      intro:
        "Талғампаз тұрғын интерьерлерге арналған төрт ерекше жиһаз санатын зерттеңіз.",
      livingRooms: "Қонақ бөлмелер",
      diningRooms: "Асханалар",
      bedrooms: "Жатын бөлмелер",
      tvUnits: "Теледидар жиһазы",
      discoverCollection: "Топтаманы көру",
    },
    category: {
      eyebrow: "VIRELLAART топтамалары",
      selectModel:
        "Барлық фотосуреттер мен өнім мәліметтерін көру үшін модельді таңдаңыз.",
      viewCollection: "Топтаманы көру",
      livingRooms: {
        title: "Қонақ бөлмелер",
        description:
          "Талғампаз дизайн, премиум шеберлік және дүниежүзілік жеткізілімі бар VIRELLAART сәнді қонақ бөлме топтамаларын көріңіз.",
      },
      diningRooms: {
        title: "Асханалар",
        description:
          "Сәнді басқосулар мен ерекше интерьерлерге арналған VIRELLAART сәнді асхана топтамаларын көріңіз.",
      },
      bedrooms: {
        title: "Жатын бөлмелер",
        description:
          "Жайлылықты, шеберлікті және мәңгілік әсемдікті үйлестіретін VIRELLAART сәнді жатын бөлме топтамаларын көріңіз.",
      },
      tvUnits: {
        title: "Теледидар жиһазы",
        description:
          "Заманауи талғампаз дизайны мен нәзік бөлшектері бар VIRELLAART сәнді теледидар жиһазы топтамаларын көріңіз.",
      },
    },
    about: {
      title: "VIRELLAART туралы",
      description:
        "Әлемнің таңдаулы интерьерлеріне Türkiye-де сәнді топтамалар жасайтын VIRELLAART премиум жиһаз брендімен танысыңыз.",
      eyebrow: "VIRELLAART туралы",
      hero: "Қиялдан да асқан сәнді жиһаз",
      lead:
        "VIRELLAART талғампаз дизайнды, премиум материалдарды және ерекше шеберлікті үйлестіріп, айрықша интерьерлерге арналған топтамалар жасайды.",
      story: "Біздің тарихымыз",
      heading: "Türkiye-де жобаланған. Әлем үшін жасалған.",
      paragraphOne:
        "VIRELLAART — мәңгілік өмір кеңістіктерін жасауға арналған сәнді жиһаз бренді. Әр топтама пропорцияға, шеберлікке, жайлылыққа және көркем әсемдікке ерекше назар аударыла отырып әзірленеді.",
      paragraphTwo:
        "Қонақ бөлмелер мен асханалардан бастап жатын бөлмелер мен теледидар жиһазына дейін әр бұйым таңдаулы үйлерге бірегей сән-салтанат атмосферасын сыйлау үшін жасалады.",
      imageAlt: "VIRELLAART сәнді қонақ бөлме жиһазы",
    },
    contact: {
      title: "VIRELLAART-пен байланыс",
      description:
        "Сәнді жиһаз топтамалары, жеке өндіріс және дүниежүзілік жеткізілім туралы VIRELLAART-пен хабарласыңыз.",
      eyebrow: "VIRELLAART-пен байланыс",
      hero: "Бірге ерекше интерьер жасайық",
      lead:
        "Өнімдер, дүниежүзілік жеткізілім және сәнді жиһаз бойынша жеке кеңес алу үшін біздің командаға хабарласыңыз.",
      getInTouch: "Бізбен байланысыңыз",
      heading: "Дүниежүзілік сәнді жиһаз қызметі",
      paragraph:
        "Біздің команда халықаралық клиенттерге топтамалар, өлшемдер, жекелендіру, өндіріс, төлем және дүниежүзілік жеткізілім бойынша көмектеседі.",
      business: "Компания",
      businessValue: "VIRELLAART сәнді жиһазы",
      whatsapp: "WhatsApp",
      whatsappValue: "VIRELLAART-пен байланысу",
      service: "Қызмет",
      serviceValue: "Дүниежүзілік жеткізілім",
      language: "Тіл",
      languageValue: "Халықаралық клиенттерді қолдау",
      button: "WhatsApp арқылы хабарласу",
      imageAlt: "VIRELLAART сәнді асхана жиһазы",
    },
    product: {
      collectionLabel: "VIRELLAART сәнді топтамасы",
      prices: "Топтама бағалары",
      worldwideDelivery: "Дүниежүзілік жеткізілім",
      worldwideDeliveryText:
        "Бүкіл әлем бойынша кәсіби халықаралық жеткізу қолдауы ұсынылады.",
      craftsmanship: "Премиум шеберлік",
      craftsmanshipText:
        "Мұқият таңдалған сәнді материалдардан жасалған.",
      whatsapp: "WhatsApp арқылы хабарласу",
      note:
        "Өлшемдер, мата нұсқалары, өндіріс және жеткізілім туралы ақпарат алу үшін біздің командаға хабарласыңыз.",
      previousImage: "Алдыңғы сурет",
      nextImage: "Келесі сурет",
      whatsappMessage:
        "Сәлеметсіз бе, VIRELLAART! {product} топтамасы туралы толық ақпарат алғым келеді.",
    },
  },
  uz: {
    defaultDescription:
      "VIRELLAART Türkiye-da premium materiallardan tayyorlangan, individual variantlar va butun dunyo bo‘ylab yetkazib berishga ega hashamatli mebel kolleksiyalarini yaratadi.",
    nav: {
      home: "Bosh sahifa",
      collections: "Kolleksiyalar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      language: "Tilni tanlang",
    },
    home: {
      title: "Betakror interyerlar uchun hashamatli mebel",
      description:
        "Individual variantlar va butun dunyo bo‘ylab yetkazib berish bilan VIRELLAART hashamatli mehmonxona, ovqatlanish xonasi, yotoqxona va TV mebeli kolleksiyalarini kashf eting.",
      eyebrow: "Türkiye-da ishlab chiqarilgan",
      lead: "Betakror interyerlar uchun yaratilgan zamonaviy hashamatli mebel.",
      button: "Kolleksiyalarni ko‘rish",
      discover: "Kashf eting",
      heading: "Bizning kolleksiyalarimiz",
      intro:
        "Nafis turar joy interyerlari uchun yaratilgan to‘rtta o‘ziga xos mebel turini ko‘ring.",
      livingRooms: "Mehmonxonalar",
      diningRooms: "Ovqatlanish xonalari",
      bedrooms: "Yotoqxonalar",
      tvUnits: "TV mebeli",
      discoverCollection: "Kolleksiyani ko‘rish",
    },
    category: {
      eyebrow: "VIRELLAART kolleksiyalari",
      selectModel:
        "Barcha fotosuratlar va mahsulot tafsilotlarini ko‘rish uchun modelni tanlang.",
      viewCollection: "Kolleksiyani ko‘rish",
      livingRooms: {
        title: "Mehmonxonalar",
        description:
          "Nafis dizayn, yuqori sifatli hunarmandchilik va butun dunyo bo‘ylab yetkazib berishga ega VIRELLAART hashamatli mehmonxona kolleksiyalarini ko‘ring.",
      },
      diningRooms: {
        title: "Ovqatlanish xonalari",
        description:
          "Nafis uchrashuvlar va betakror interyerlar uchun yaratilgan VIRELLAART hashamatli ovqatlanish xonasi kolleksiyalarini ko‘ring.",
      },
      bedrooms: {
        title: "Yotoqxonalar",
        description:
          "Qulaylik, hunarmandchilik va boqiy nafislikni birlashtirgan VIRELLAART hashamatli yotoqxona kolleksiyalarini ko‘ring.",
      },
      tvUnits: {
        title: "TV mebeli",
        description:
          "Zamonaviy nafis dizayn va nozik detallarga ega VIRELLAART hashamatli TV mebeli kolleksiyalarini ko‘ring.",
      },
    },
    about: {
      title: "VIRELLAART haqida",
      description:
        "Dunyoning nufuzli interyerlari uchun Türkiye-da nafis kolleksiyalar yaratadigan hashamatli mebel brendi VIRELLAART bilan tanishing.",
      eyebrow: "VIRELLAART haqida",
      hero: "Tasavvurdan ham yuksak hashamatli mebel",
      lead:
        "VIRELLAART nafis dizayn, premium materiallar va o‘ziga xos hunarmandchilikni birlashtirib, betakror interyerlar uchun kolleksiyalar yaratadi.",
      story: "Bizning tariximiz",
      heading: "Türkiye-da yaratilgan dizayn. Butun dunyo uchun ishlab chiqarilgan.",
      paragraphOne:
        "VIRELLAART — zamonaviy va boqiy yashash makonlarini yaratishga bag‘ishlangan hashamatli mebel brendi. Har bir kolleksiya mutanosiblik, hunarmandchilik, qulaylik va vizual nafislikka katta e’tibor bilan ishlab chiqiladi.",
      paragraphTwo:
        "Mehmonxona va ovqatlanish xonalaridan yotoqxona hamda TV mebeligacha har bir buyum nafis uylarga o‘ziga xos hashamat muhitini olib kirish uchun yaratiladi.",
      imageAlt: "VIRELLAART hashamatli mehmonxona mebeli",
    },
    contact: {
      title: "VIRELLAART bilan bog‘lanish",
      description:
        "Hashamatli mebel kolleksiyalari, individual ishlab chiqarish va butun dunyo bo‘ylab yetkazib berish bo‘yicha VIRELLAART bilan bog‘laning.",
      eyebrow: "VIRELLAART bilan bog‘lanish",
      hero: "Keling, birgalikda betakror interyer yarataylik",
      lead:
        "Mahsulotlar, butun dunyo bo‘ylab yetkazib berish va hashamatli mebel bo‘yicha individual maslahat uchun jamoamiz bilan bog‘laning.",
      getInTouch: "Biz bilan bog‘laning",
      heading: "Butun dunyo bo‘ylab hashamatli mebel xizmati",
      paragraph:
        "Jamoamiz xalqaro mijozlarga kolleksiya, o‘lcham, moslashtirish, ishlab chiqarish, to‘lov va butun dunyo bo‘ylab yetkazib berish jarayonlarida yordam beradi.",
      business: "Kompaniya",
      businessValue: "VIRELLAART hashamatli mebeli",
      whatsapp: "WhatsApp",
      whatsappValue: "VIRELLAART bilan bog‘lanish",
      service: "Xizmat",
      serviceValue: "Butun dunyo bo‘ylab yetkazib berish",
      language: "Til",
      languageValue: "Xalqaro mijozlarni qo‘llab-quvvatlash",
      button: "WhatsApp orqali bog‘lanish",
      imageAlt: "VIRELLAART hashamatli ovqatlanish xonasi mebeli",
    },
    product: {
      collectionLabel: "VIRELLAART hashamatli kolleksiyasi",
      prices: "Kolleksiya narxlari",
      worldwideDelivery: "Butun dunyo bo‘ylab yetkazib berish",
      worldwideDeliveryText:
        "Butun dunyo bo‘ylab professional xalqaro yetkazib berish yordami mavjud.",
      craftsmanship: "Yuqori sifatli hunarmandchilik",
      craftsmanshipText:
        "Sinchiklab tanlangan hashamatli materiallardan tayyorlangan.",
      whatsapp: "WhatsApp orqali bog‘lanish",
      note:
        "O‘lchamlar, mato variantlari, ishlab chiqarish va yetkazib berish haqida ma’lumot olish uchun jamoamiz bilan bog‘laning.",
      previousImage: "Oldingi rasm",
      nextImage: "Keyingi rasm",
      whatsappMessage:
        "Salom VIRELLAART, {product} kolleksiyasi haqida batafsil ma’lumot olmoqchiman.",
    },
  },
  pt: {
    defaultDescription:
      "A VIRELLAART cria coleções de mobiliário de luxo fabricadas em Türkiye com materiais premium, opções por medida e entrega mundial.",
    nav: {
      home: "Início",
      collections: "Coleções",
      about: "Sobre nós",
      contact: "Contacto",
      language: "Selecionar idioma",
    },
    home: {
      title: "Mobiliário de luxo para interiores excecionais",
      description:
        "Descubra salas de estar, salas de jantar, quartos e móveis de TV de luxo VIRELLAART, com opções por medida e entrega mundial.",
      eyebrow: "Fabricado em Türkiye",
      lead: "Mobiliário de luxo intemporal criado para interiores excecionais.",
      button: "Explorar coleções",
      discover: "Descubra",
      heading: "As nossas coleções",
      intro:
        "Explore quatro categorias exclusivas de mobiliário concebidas para interiores residenciais sofisticados.",
      livingRooms: "Salas de estar",
      diningRooms: "Salas de jantar",
      bedrooms: "Quartos",
      tvUnits: "Móveis de TV",
      discoverCollection: "Descobrir coleção",
    },
    category: {
      eyebrow: "Coleções VIRELLAART",
      selectModel:
        "Selecione um modelo para ver todas as fotografias e detalhes do produto.",
      viewCollection: "Ver coleção",
      livingRooms: {
        title: "Salas de estar",
        description:
          "Explore as coleções de salas de estar de luxo VIRELLAART com design sofisticado, produção premium e entrega mundial.",
      },
      diningRooms: {
        title: "Salas de jantar",
        description:
          "Explore as coleções de salas de jantar de luxo VIRELLAART, criadas para encontros elegantes e interiores excecionais.",
      },
      bedrooms: {
        title: "Quartos",
        description:
          "Explore as coleções de quartos de luxo VIRELLAART, que combinam conforto, produção artesanal e elegância intemporal.",
      },
      tvUnits: {
        title: "Móveis de TV",
        description:
          "Explore as coleções de móveis de TV de luxo VIRELLAART, com design contemporâneo elegante e detalhes sofisticados.",
      },
    },
    about: {
      title: "Sobre a VIRELLAART",
      description:
        "Descubra a VIRELLAART, uma marca de mobiliário de luxo que cria coleções sofisticadas em Türkiye para interiores distintos em todo o mundo.",
      eyebrow: "Sobre a VIRELLAART",
      hero: "Mobiliário de luxo além da imaginação",
      lead:
        "A VIRELLAART cria coleções sofisticadas para interiores excecionais, combinando design elegante, materiais premium e produção artesanal distinta.",
      story: "A nossa história",
      heading: "Concebido em Türkiye. Criado para o mundo.",
      paragraphOne:
        "A VIRELLAART é uma marca de mobiliário de luxo dedicada à criação de espaços intemporais. Cada coleção é desenvolvida com grande atenção à proporção, produção, conforto e elegância visual.",
      paragraphTwo:
        "Das salas de estar e jantar aos quartos e móveis de TV, cada peça é criada para proporcionar uma atmosfera de luxo única a casas sofisticadas.",
      imageAlt: "Mobiliário de luxo para sala de estar VIRELLAART",
    },
    contact: {
      title: "Contactar a VIRELLAART",
      description:
        "Contacte a VIRELLAART para conhecer as coleções de mobiliário de luxo, produção por medida e entrega mundial.",
      eyebrow: "Contacto VIRELLAART",
      hero: "Vamos criar juntos um interior excecional",
      lead:
        "Contacte a nossa equipa para informações sobre produtos, entrega mundial e consultoria privada de mobiliário de luxo.",
      getInTouch: "Entre em contacto",
      heading: "Serviço mundial de mobiliário de luxo",
      paragraph:
        "A nossa equipa apoia clientes internacionais na escolha de coleções, medidas, personalização, produção, pagamento e entrega mundial.",
      business: "Empresa",
      businessValue: "Mobiliário de luxo VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Contactar a VIRELLAART",
      service: "Serviço",
      serviceValue: "Entrega mundial",
      language: "Idioma",
      languageValue: "Apoio internacional ao cliente",
      button: "Contactar pelo WhatsApp",
      imageAlt: "Mobiliário de luxo para sala de jantar VIRELLAART",
    },
    product: {
      collectionLabel: "Coleção de luxo VIRELLAART",
      prices: "Preços da coleção",
      worldwideDelivery: "Entrega mundial",
      worldwideDeliveryText:
        "Está disponível apoio profissional para entregas internacionais em todo o mundo.",
      craftsmanship: "Produção premium",
      craftsmanshipText:
        "Fabricado com materiais de luxo cuidadosamente selecionados.",
      whatsapp: "Contactar pelo WhatsApp",
      note:
        "Contacte a nossa equipa para informações sobre medidas, tecidos, produção e entrega.",
      previousImage: "Imagem anterior",
      nextImage: "Imagem seguinte",
      whatsappMessage:
        "Olá VIRELLAART, gostaria de receber mais informações sobre a coleção {product}.",
    },
  },
  pl: {
    defaultDescription:
      "VIRELLAART tworzy kolekcje luksusowych mebli produkowane w Türkiye z materiałów premium, z opcjami personalizacji i dostawą na cały świat.",
    nav: {
      home: "Strona główna",
      collections: "Kolekcje",
      about: "O nas",
      contact: "Kontakt",
      language: "Wybierz język",
    },
    home: {
      title: "Luksusowe meble do wyjątkowych wnętrz",
      description:
        "Odkryj luksusowe salony, jadalnie, sypialnie i szafki RTV VIRELLAART z opcjami personalizacji i dostawą na cały świat.",
      eyebrow: "Wyprodukowano w Türkiye",
      lead: "Ponadczasowe luksusowe meble stworzone do wyjątkowych wnętrz.",
      button: "Odkryj kolekcje",
      discover: "Odkryj",
      heading: "Nasze kolekcje",
      intro:
        "Poznaj cztery wyjątkowe kategorie mebli zaprojektowane do eleganckich wnętrz mieszkalnych.",
      livingRooms: "Salony",
      diningRooms: "Jadalnie",
      bedrooms: "Sypialnie",
      tvUnits: "Szafki RTV",
      discoverCollection: "Odkryj kolekcję",
    },
    category: {
      eyebrow: "Kolekcje VIRELLAART",
      selectModel:
        "Wybierz model, aby zobaczyć wszystkie zdjęcia i szczegóły produktu.",
      viewCollection: "Zobacz kolekcję",
      livingRooms: {
        title: "Salony",
        description:
          "Poznaj luksusowe kolekcje salonów VIRELLAART z wyrafinowanym wzornictwem, najwyższą jakością wykonania i dostawą na cały świat.",
      },
      diningRooms: {
        title: "Jadalnie",
        description:
          "Poznaj luksusowe kolekcje jadalni VIRELLAART stworzone z myślą o eleganckich spotkaniach i wyjątkowych wnętrzach.",
      },
      bedrooms: {
        title: "Sypialnie",
        description:
          "Poznaj luksusowe kolekcje sypialni VIRELLAART łączące komfort, kunszt wykonania i ponadczasową elegancję.",
      },
      tvUnits: {
        title: "Szafki RTV",
        description:
          "Poznaj luksusowe kolekcje szafek RTV VIRELLAART o eleganckim współczesnym wzornictwie i dopracowanych detalach.",
      },
    },
    about: {
      title: "O VIRELLAART",
      description:
        "Poznaj VIRELLAART, markę luksusowych mebli tworzącą w Türkiye wyrafinowane kolekcje do wyjątkowych wnętrz na całym świecie.",
      eyebrow: "O VIRELLAART",
      hero: "Luksusowe meble poza granicami wyobraźni",
      lead:
        "VIRELLAART tworzy wyrafinowane kolekcje do wyjątkowych wnętrz, łącząc eleganckie wzornictwo, materiały premium i niepowtarzalne rzemiosło.",
      story: "Nasza historia",
      heading: "Zaprojektowano w Türkiye. Stworzono dla świata.",
      paragraphOne:
        "VIRELLAART to marka luksusowych mebli, której celem jest tworzenie ponadczasowych przestrzeni. Każda kolekcja powstaje ze szczególną dbałością o proporcje, jakość wykonania, komfort i wizualną elegancję.",
      paragraphTwo:
        "Od salonów i jadalni po sypialnie i szafki RTV — każdy mebel został stworzony, aby nadać eleganckim domom wyjątkową atmosferę luksusu.",
      imageAlt: "Luksusowe meble do salonu VIRELLAART",
    },
    contact: {
      title: "Kontakt z VIRELLAART",
      description:
        "Skontaktuj się z VIRELLAART w sprawie kolekcji luksusowych mebli, produkcji na zamówienie i dostawy na cały świat.",
      eyebrow: "Kontakt z VIRELLAART",
      hero: "Stwórzmy razem wyjątkowe wnętrze",
      lead:
        "Skontaktuj się z naszym zespołem, aby uzyskać informacje o produktach, dostawie na cały świat i prywatnym doradztwie w zakresie luksusowych mebli.",
      getInTouch: "Skontaktuj się z nami",
      heading: "Światowy serwis luksusowych mebli",
      paragraph:
        "Nasz zespół wspiera międzynarodowych klientów w zakresie kolekcji, wymiarów, personalizacji, produkcji, płatności i dostawy na cały świat.",
      business: "Firma",
      businessValue: "Luksusowe meble VIRELLAART",
      whatsapp: "WhatsApp",
      whatsappValue: "Skontaktuj się z VIRELLAART",
      service: "Usługa",
      serviceValue: "Dostawa na cały świat",
      language: "Język",
      languageValue: "Międzynarodowa obsługa klienta",
      button: "Skontaktuj się przez WhatsApp",
      imageAlt: "Luksusowe meble do jadalni VIRELLAART",
    },
    product: {
      collectionLabel: "Luksusowa kolekcja VIRELLAART",
      prices: "Ceny kolekcji",
      worldwideDelivery: "Dostawa na cały świat",
      worldwideDeliveryText:
        "Profesjonalne wsparcie w zakresie dostawy międzynarodowej jest dostępne na całym świecie.",
      craftsmanship: "Najwyższa jakość wykonania",
      craftsmanshipText:
        "Wykonano ze starannie wyselekcjonowanych luksusowych materiałów.",
      whatsapp: "Skontaktuj się przez WhatsApp",
      note:
        "Skontaktuj się z naszym zespołem, aby uzyskać informacje o wymiarach, tkaninach, produkcji i dostawie.",
      previousImage: "Poprzednie zdjęcie",
      nextImage: "Następne zdjęcie",
      whatsappMessage:
        "Dzień dobry VIRELLAART, proszę o więcej informacji na temat kolekcji {product}.",
    },
  },
} as const;

export function getTranslations(language: Language) {
  return translations[language] ?? translations.en;
}

const productNameReplacements: Record<
  Exclude<Language, "en">,
  Array<[string, string]>
> = {
  tr: [
    ["Corner Sofa Set", "Köşe Koltuk Takımı"],
    ["Living Room", "Oturma Odası"],
    ["Dining Room", "Yemek Odası"],
    ["Dining", "Yemek Odası"],
    ["Bedroom", "Yatak Odası"],
    ["TV Unit", "TV Ünitesi"],
  ],
  de: [
    ["Corner Sofa Set", "Ecksofa-Set"],
    ["Living Room", "Wohnzimmer"],
    ["Dining Room", "Esszimmer"],
    ["Dining", "Esszimmer"],
    ["Bedroom", "Schlafzimmer"],
    ["TV Unit", "TV-Möbel"],
  ],
  fr: [
    ["Corner Sofa Set", "Ensemble canapé d’angle"],
    ["Living Room", "Salon"],
    ["Dining Room", "Salle à manger"],
    ["Dining", "Salle à manger"],
    ["Bedroom", "Chambre"],
    ["TV Unit", "Meuble TV"],
  ],
  it: [
    ["Corner Sofa Set", "Set divano angolare"],
    ["Living Room", "Soggiorno"],
    ["Dining Room", "Sala da pranzo"],
    ["Dining", "Sala da pranzo"],
    ["Bedroom", "Camera da letto"],
    ["TV Unit", "Mobile TV"],
  ],
  ru: [
    ["Corner Sofa Set", "Комплект углового дивана"],
    ["Living Room", "Гостиная"],
    ["Dining Room", "Столовая"],
    ["Dining", "Столовая"],
    ["Bedroom", "Спальня"],
    ["TV Unit", "ТВ-модуль"],
  ],
  ar: [
    ["Corner Sofa Set", "طقم أريكة زاوية"],
    ["Living Room", "غرفة معيشة"],
    ["Dining Room", "غرفة طعام"],
    ["Dining", "غرفة طعام"],
    ["Bedroom", "غرفة نوم"],
    ["TV Unit", "وحدة تلفزيون"],
  ],
  bg: [
    ["Corner Sofa Set", "Комплект ъглов диван"],
    ["Living Room", "Дневна"],
    ["Dining Room", "Трапезария"],
    ["Dining", "Трапезария"],
    ["Bedroom", "Спалня"],
    ["TV Unit", "ТВ модул"],
  ],
  ro: [
    ["Corner Sofa Set", "Set canapea de colț"],
    ["Living Room", "Sufragerie"],
    ["Dining Room Set", "Set pentru sala de mese"],
    ["Dining Room", "Sală de mese"],
    ["Dining", "Sală de mese"],
    ["Bedroom", "Dormitor"],
    ["TV Unit", "Comodă TV"],
  ],
  el: [
    ["Corner Sofa Set", "Σετ γωνιακού καναπέ"],
    ["Living Room", "Σαλόνι"],
    ["Dining Room", "Τραπεζαρία"],
    ["Dining", "Τραπεζαρία"],
    ["Bedroom", "Υπνοδωμάτιο"],
    ["TV Unit", "Έπιπλο τηλεόρασης"],
  ],
  es: [
    ["Corner Sofa Set", "Conjunto de sofá esquinero"],
    ["Sofa Set", "Conjunto de sofás"],
    ["Living Room Set", "Conjunto de salón"],
    ["Living Room", "Salón"],
    ["Dining Room Set", "Conjunto de comedor"],
    ["Dining Room", "Comedor"],
    ["Dining", "Comedor"],
    ["Bedroom Set", "Conjunto de dormitorio"],
    ["Bedroom", "Dormitorio"],
    ["TV Unit", "Mueble TV"],
  ],
  sr: [
    ["Corner Sofa Set", "Set ugaone garniture"],
    ["Living Room", "Dnevna soba"],
    ["Dining Room", "Trpezarija"],
    ["Dining", "Trpezarija"],
    ["Bedroom", "Spavaća soba"],
    ["TV Unit", "TV komoda"],
  ],
  kk: [
    ["Corner Sofa Set", "Бұрыштық диван жиынтығы"],
    ["Living Room", "Қонақ бөлме"],
    ["Dining Room", "Асхана"],
    ["Dining", "Асхана"],
    ["Bedroom", "Жатын бөлме"],
    ["TV Unit", "Теледидар жиһазы"],
  ],
  uz: [
    ["Corner Sofa Set", "Burchakli divan to‘plami"],
    ["Living Room", "Mehmonxona"],
    ["Dining Room", "Ovqatlanish xonasi"],
    ["Dining", "Ovqatlanish xonasi"],
    ["Bedroom", "Yotoqxona"],
    ["TV Unit", "TV mebeli"],
  ],
  pt: [
    ["Corner Sofa Set", "Conjunto de sofá de canto"],
    ["Sofa Set", "Conjunto de sofás"],
    ["Living Room Set", "Conjunto de sala de estar"],
    ["Living Room", "Sala de estar"],
    ["Dining Room Set", "Conjunto de sala de jantar"],
    ["Dining Room", "Sala de jantar"],
    ["Dining", "Sala de jantar"],
    ["Bedroom Set", "Conjunto de quarto"],
    ["Bedroom", "Quarto"],
    ["TV Unit", "Móvel de TV"],
  ],
  pl: [
    ["Corner Sofa Set", "Zestaw narożny"],
    ["Living Room", "Salon"],
    ["Dining Room", "Jadalnia"],
    ["Dining", "Jadalnia"],
    ["Bedroom", "Sypialnia"],
    ["TV Unit", "Szafka RTV"],
  ],
};

export function translateProductName(
  productName: string,
  language: Language,
): string {
  if (language === "en") {
    return productName;
  }

  return productNameReplacements[language].reduce(
    (name, [source, translation]) => name.replace(source, translation),
    productName,
  );
}

const priceLabelTranslations: Record<Language, Record<string, string>> = {
  en: {},
  tr: {
    "Corner Sofa (375 × 350 cm)": "Köşe Koltuk (375 × 350 cm)",
    "Armchair": "Berjer",
    "Luxury 3+3+1+1 Living Room Set": "Lüks 3+3+1+1 Oturma Odası Takımı",
    "Luxury 4+3+1 Living Room Set": "Lüks 4+3+1 Oturma Odası Takımı",
    "Center Table": "Orta Sehpa",
    "TV Unit": "TV Ünitesi",
    "Luxury Bedroom Set": "Lüks Yatak Odası Takımı",
    "Luxury Dining Room Set": "Lüks Yemek Odası Takımı",
    "Luxury TV Unit": "Lüks TV Ünitesi",
  },
  de: {
    "Corner Sofa (375 × 350 cm)": "Ecksofa (375 × 350 cm)",
    "Armchair": "Sessel",
    "Luxury 3+3+1+1 Living Room Set": "Luxus-Wohnzimmerset 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Luxus-Wohnzimmerset 4+3+1",
    "Center Table": "Couchtisch",
    "TV Unit": "TV-Möbel",
    "Luxury Bedroom Set": "Luxus-Schlafzimmerset",
    "Luxury Dining Room Set": "Luxus-Esszimmerset",
    "Luxury TV Unit": "Luxus-TV-Möbel",
  },
  fr: {
    "Corner Sofa (375 × 350 cm)": "Canapé d’angle (375 × 350 cm)",
    "Armchair": "Fauteuil",
    "Luxury 3+3+1+1 Living Room Set": "Ensemble salon de luxe 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Ensemble salon de luxe 4+3+1",
    "Center Table": "Table basse",
    "TV Unit": "Meuble TV",
    "Luxury Bedroom Set": "Ensemble chambre de luxe",
    "Luxury Dining Room Set": "Ensemble salle à manger de luxe",
    "Luxury TV Unit": "Meuble TV de luxe",
  },
  it: {
    "Corner Sofa (375 × 350 cm)": "Divano angolare (375 × 350 cm)",
    "Armchair": "Poltrona",
    "Luxury 3+3+1+1 Living Room Set": "Set soggiorno di lusso 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Set soggiorno di lusso 4+3+1",
    "Center Table": "Tavolino",
    "TV Unit": "Mobile TV",
    "Luxury Bedroom Set": "Set camera da letto di lusso",
    "Luxury Dining Room Set": "Set sala da pranzo di lusso",
    "Luxury TV Unit": "Mobile TV di lusso",
  },
  ru: {
    "Corner Sofa (375 × 350 cm)": "Угловой диван (375 × 350 см)",
    "Armchair": "Кресло",
    "Luxury 3+3+1+1 Living Room Set": "Комплект для гостиной 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Комплект для гостиной 4+3+1",
    "Center Table": "Журнальный стол",
    "TV Unit": "ТВ-модуль",
    "Luxury Bedroom Set": "Комплект для спальни",
    "Luxury Dining Room Set": "Комплект для столовой",
    "Luxury TV Unit": "Элитный ТВ-модуль",
  },
  ar: {
    "Corner Sofa (375 × 350 cm)": "أريكة زاوية (375 × 350 سم)",
    "Armchair": "كرسي بذراعين",
    "Luxury 3+3+1+1 Living Room Set": "طقم غرفة معيشة فاخر 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "طقم غرفة معيشة فاخر 4+3+1",
    "Center Table": "طاولة وسط",
    "TV Unit": "وحدة تلفزيون",
    "Luxury Bedroom Set": "طقم غرفة نوم فاخر",
    "Luxury Dining Room Set": "طقم غرفة طعام فاخر",
    "Luxury TV Unit": "وحدة تلفزيون فاخرة",
  },
  bg: {
    "Corner Sofa (375 × 350 cm)": "Ъглов диван (375 × 350 см)",
    "Armchair": "Фотьойл",
    "Luxury 3+3+1+1 Living Room Set": "Луксозен комплект за дневна 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Луксозен комплект за дневна 4+3+1",
    "Center Table": "Холна маса",
    "TV Unit": "ТВ модул",
    "Luxury Bedroom Set": "Луксозен комплект за спалня",
    "Luxury Dining Room Set": "Луксозен комплект за трапезария",
    "Luxury TV Unit": "Луксозен ТВ модул",
  },
  ro: {
    "Corner Sofa (375 × 350 cm)": "Canapea de colț (375 × 350 cm)",
    "Armchair": "Fotoliu",
    "Luxury 3+3+1+1 Living Room Set": "Set de lux pentru sufragerie 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Set de lux pentru sufragerie 4+3+1",
    "Center Table": "Măsuță de cafea",
    "TV Unit": "Comodă TV",
    "Luxury Bedroom Set": "Set dormitor de lux",
    "Luxury Dining Room Set": "Set de lux pentru sala de mese",
    "Luxury TV Unit": "Comodă TV de lux",
  },
  el: {
    "Corner Sofa (375 × 350 cm)": "Γωνιακός καναπές (375 × 350 cm)",
    "Armchair": "Πολυθρόνα",
    "Luxury 3+3+1+1 Living Room Set": "Πολυτελές σετ σαλονιού 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Πολυτελές σετ σαλονιού 4+3+1",
    "Center Table": "Τραπεζάκι σαλονιού",
    "TV Unit": "Έπιπλο τηλεόρασης",
    "Luxury Bedroom Set": "Πολυτελές σετ υπνοδωματίου",
    "Luxury Dining Room Set": "Πολυτελές σετ τραπεζαρίας",
    "Luxury TV Unit": "Πολυτελές έπιπλο τηλεόρασης",
  },
  es: {
    "Corner Sofa (375 × 350 cm)": "Sofá esquinero (375 × 350 cm)",
    "Armchair": "Sillón",
    "Luxury 3+3+1+1 Living Room Set": "Conjunto de salón de lujo 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Conjunto de salón de lujo 4+3+1",
    "Center Table": "Mesa de centro",
    "TV Unit": "Mueble TV",
    "Luxury Bedroom Set": "Conjunto de dormitorio de lujo",
    "Luxury Dining Room Set": "Conjunto de comedor de lujo",
    "Luxury TV Unit": "Mueble TV de lujo",
  },
  sr: {
    "Corner Sofa (375 × 350 cm)": "Ugaona garnitura (375 × 350 cm)",
    "Armchair": "Fotelja",
    "Luxury 3+3+1+1 Living Room Set": "Luksuzni set za dnevnu sobu 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Luksuzni set za dnevnu sobu 4+3+1",
    "Center Table": "Klub sto",
    "TV Unit": "TV komoda",
    "Luxury Bedroom Set": "Luksuzni set za spavaću sobu",
    "Luxury Dining Room Set": "Luksuzni set za trpezariju",
    "Luxury TV Unit": "Luksuzna TV komoda",
  },
  kk: {
    "Corner Sofa (375 × 350 cm)": "Бұрыштық диван (375 × 350 см)",
    "Armchair": "Кресло",
    "Luxury 3+3+1+1 Living Room Set": "3+3+1+1 сәнді қонақ бөлме жиынтығы",
    "Luxury 4+3+1 Living Room Set": "4+3+1 сәнді қонақ бөлме жиынтығы",
    "Center Table": "Орта үстел",
    "TV Unit": "Теледидар жиһазы",
    "Luxury Bedroom Set": "Сәнді жатын бөлме жиынтығы",
    "Luxury Dining Room Set": "Сәнді асхана жиынтығы",
    "Luxury TV Unit": "Сәнді теледидар жиһазы",
  },
  uz: {
    "Corner Sofa (375 × 350 cm)": "Burchakli divan (375 × 350 cm)",
    "Armchair": "Kreslo",
    "Luxury 3+3+1+1 Living Room Set": "3+3+1+1 hashamatli mehmonxona to‘plami",
    "Luxury 4+3+1 Living Room Set": "4+3+1 hashamatli mehmonxona to‘plami",
    "Center Table": "Markaziy stol",
    "TV Unit": "TV mebeli",
    "Luxury Bedroom Set": "Hashamatli yotoqxona to‘plami",
    "Luxury Dining Room Set": "Hashamatli ovqatlanish xonasi to‘plami",
    "Luxury TV Unit": "Hashamatli TV mebeli",
  },
  pt: {
    "Corner Sofa (375 × 350 cm)": "Sofá de canto (375 × 350 cm)",
    "Armchair": "Poltrona",
    "Luxury 3+3+1+1 Living Room Set": "Conjunto de sala de estar de luxo 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Conjunto de sala de estar de luxo 4+3+1",
    "Center Table": "Mesa de centro",
    "TV Unit": "Móvel de TV",
    "Luxury Bedroom Set": "Conjunto de quarto de luxo",
    "Luxury Dining Room Set": "Conjunto de sala de jantar de luxo",
    "Luxury TV Unit": "Móvel de TV de luxo",
  },
  pl: {
    "Corner Sofa (375 × 350 cm)": "Narożnik (375 × 350 cm)",
    "Armchair": "Fotel",
    "Luxury 3+3+1+1 Living Room Set": "Luksusowy zestaw do salonu 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Luksusowy zestaw do salonu 4+3+1",
    "Center Table": "Stolik kawowy",
    "TV Unit": "Szafka RTV",
    "Luxury Bedroom Set": "Luksusowy zestaw do sypialni",
    "Luxury Dining Room Set": "Luksusowy zestaw do jadalni",
    "Luxury TV Unit": "Luksusowa szafka RTV",
  },
};

export function translatePriceLabel(
  label: string,
  language: Language,
): string {
  return priceLabelTranslations[language][label] ?? label;
}

const categorySeoTitleDescriptors: Record<
  Language,
  string
> = {
  en: "Luxury Furniture",
  tr: "Lüks Mobilya",
  de: "Luxusmöbel",
  fr: "Mobilier de Luxe",
  it: "Mobili di Lusso",
  ru: "Элитная Мебель",
  ar: "أثاث فاخر",
  bg: "Луксозни Мебели",
  ro: "Mobilier de Lux",
  el: "Πολυτελή Έπιπλα",
  es: "Muebles de Lujo",
  sr: "Luksuzni Nameštaj",
  kk: "Сәнді Жиһаз",
  uz: "Hashamatli Mebel",
  pt: "Móveis de Luxo",
  pl: "Luksusowe Meble",
};

export function getCategorySeoTitle(
  categoryTitle: string,
  language: Language,
): string {
  if (language === "en") {
    const englishCategorySeoTitles: Record<string, string> = {
      "Living Rooms": "Luxury Living Room Furniture",
      "Dining Rooms": "Luxury Dining Room Furniture",
      Bedrooms: "Luxury Bedroom Furniture",
      "TV Units": "Luxury TV Units & Media Furniture",
    };

    const englishTitle =
      englishCategorySeoTitles[categoryTitle];

    if (englishTitle) {
      return `${englishTitle} | VIRELLAART`;
    }
  }

  const descriptor =
    categorySeoTitleDescriptors[language] ??
    categorySeoTitleDescriptors.en;

  return `${categoryTitle} | ${descriptor} | VIRELLAART`;
}
const seoDescriptionSuffixes: Record<
  Language,
  readonly [string, string]
> = {
  en: [
    "View pricing and delivery options.",
    "Contact VIRELLAART for pricing, customization and worldwide delivery.",
  ],
  tr: [
    "Fiyat ve teslimat seçeneklerini inceleyin.",
    "Fiyat, kişiselleştirme ve dünya çapında teslimat için VIRELLAART ile iletişime geçin.",
  ],
  de: [
    "Preise und Lieferoptionen ansehen.",
    "Kontaktieren Sie VIRELLAART für Preise, individuelle Optionen und weltweite Lieferung.",
  ],
  fr: [
    "Consultez les prix et options de livraison.",
    "Contactez VIRELLAART pour les prix, la personnalisation et la livraison internationale.",
  ],
  it: [
    "Scopri prezzi e opzioni di consegna.",
    "Contatta VIRELLAART per prezzi, personalizzazione e consegna internazionale.",
  ],
  ru: [
    "Узнайте цены и варианты доставки.",
    "Свяжитесь с VIRELLAART для уточнения цен, персонализации и международной доставки.",
  ],
  ar: [
    "اطلب الأسعار وخيارات التوصيل.",
    "تواصل مع VIRELLAART لمعرفة الأسعار وخيارات التخصيص والتوصيل الدولي.",
  ],
  bg: [
    "Вижте цени и опции за доставка.",
    "Свържете се с VIRELLAART за цени, персонализация и международна доставка.",
  ],
  ro: [
    "Consultați prețurile și opțiunile de livrare.",
    "Contactați VIRELLAART pentru prețuri, personalizare și livrare internațională.",
  ],
  el: [
    "Δείτε τιμές και επιλογές παράδοσης.",
    "Επικοινωνήστε με τη VIRELLAART για τιμές, προσαρμογή και διεθνή παράδοση.",
  ],
  es: [
    "Consulte precios y opciones de entrega.",
    "Contacte con VIRELLAART para precios, personalización y entrega internacional.",
  ],
  sr: [
    "Pogledajte cene i opcije isporuke.",
    "Kontaktirajte VIRELLAART za cene, prilagođavanje i međunarodnu isporuku.",
  ],
  kk: [
    "Бағалар мен жеткізу нұсқаларын қараңыз.",
    "Бағалар, жекелендіру және халықаралық жеткізу үшін VIRELLAART компаниясына хабарласыңыз.",
  ],
  uz: [
    "Narxlar va yetkazib berish variantlarini ko‘ring.",
    "Narxlar, moslashtirish va xalqaro yetkazib berish uchun VIRELLAART bilan bog‘laning.",
  ],
  pt: [
    "Consulte preços e opções de entrega.",
    "Fale com a VIRELLAART para preços, personalização e entrega internacional.",
  ],
  pl: [
    "Sprawdź ceny i opcje dostawy.",
    "Skontaktuj się z VIRELLAART w sprawie cen, personalizacji i dostawy międzynarodowej.",
  ],
};

function truncateMetaDescription(
  description: string,
): string {
  if (description.length <= 160) {
    return description;
  }

  const sentenceWindow = description.slice(0, 160);
  const sentenceEnds = [
    ...sentenceWindow.matchAll(/[.!?](?=\s|$)/g),
  ];
  const lastSentenceEnd =
    sentenceEnds.length > 0
      ? sentenceEnds[sentenceEnds.length - 1].index
      : undefined;

  if (
    lastSentenceEnd !== undefined &&
    lastSentenceEnd >= 119
  ) {
    return sentenceWindow
      .slice(0, lastSentenceEnd + 1)
      .trim();
  }

  const shortened = description
    .slice(0, 159)
    .replace(/\s+\S*$/, "")
    .replace(/[,;:\s.]+$/, "");

  const clauseEnd = Math.max(
    shortened.lastIndexOf(","),
    shortened.lastIndexOf(";"),
    shortened.lastIndexOf(":"),
  );

  const clean =
    clauseEnd >= 119
      ? shortened.slice(0, clauseEnd)
      : shortened.replace(/\s+(?:and|or)$/i, "");

  return `${clean || description.slice(0, 159).trimEnd()}.`;
}

export function getSeoDescription(
  description: string,
  language: Language,
): string {
  const normalized = description
    .replace(/\s+/g, " ")
    .trim();

  if (normalized.length > 160) {
    return truncateMetaDescription(normalized);
  }

  if (normalized.length >= 120) {
    return normalized;
  }

  const suffixes =
    seoDescriptionSuffixes[language] ??
    seoDescriptionSuffixes.en;

  for (const suffix of suffixes) {
    const candidate =
      `${normalized} ${suffix}`;

    if (
      candidate.length >= 120 &&
      candidate.length <= 160
    ) {
      return candidate;
    }
  }

  const fallback =
    `${normalized} ${suffixes[suffixes.length - 1]}`;

  return truncateMetaDescription(fallback);
}

const categoryDescriptionTemplates: Record<
  Language,
  Record<string, string>
> = {
  en: {
    "living-rooms":
      "Discover the {product} luxury living room collection by VIRELLAART, combining refined design, premium craftsmanship and exceptional comfort.",
    "dining-rooms":
      "Discover the {product} luxury dining room collection by VIRELLAART, created with refined design and premium craftsmanship.",
    bedrooms:
      "Discover the {product} luxury bedroom collection by VIRELLAART, combining comfort, premium craftsmanship and timeless elegance.",
    "tv-units":
      "Discover the {product} luxury TV unit collection by VIRELLAART, featuring elegant contemporary design and refined details.",
  },
  tr: {
    "living-rooms":
      "Zarif tasarım, premium işçilik ve üstün konforu birleştiren VIRELLAART {product} lüks oturma odası koleksiyonunu keşfedin.",
    "dining-rooms":
      "Zarif tasarım ve premium işçilikle üretilen VIRELLAART {product} lüks yemek odası koleksiyonunu keşfedin.",
    bedrooms:
      "Konfor, premium işçilik ve zamansız şıklığı birleştiren VIRELLAART {product} lüks yatak odası koleksiyonunu keşfedin.",
    "tv-units":
      "Çağdaş tasarım ve rafine detaylara sahip VIRELLAART {product} lüks TV ünitesi koleksiyonunu keşfedin.",
  },
  de: {
    "living-rooms":
      "Entdecken Sie die luxuriöse Wohnzimmerkollektion {product} von VIRELLAART mit raffiniertem Design, erstklassiger Handwerkskunst und außergewöhnlichem Komfort.",
    "dining-rooms":
      "Entdecken Sie die luxuriöse Esszimmerkollektion {product} von VIRELLAART mit raffiniertem Design und erstklassiger Handwerkskunst.",
    bedrooms:
      "Entdecken Sie die luxuriöse Schlafzimmerkollektion {product} von VIRELLAART, die Komfort, Handwerkskunst und zeitlose Eleganz vereint.",
    "tv-units":
      "Entdecken Sie die luxuriöse TV-Möbelkollektion {product} von VIRELLAART mit elegantem, modernem Design und raffinierten Details.",
  },
  fr: {
    "living-rooms":
      "Découvrez la collection de salon de luxe {product} par VIRELLAART, associant design raffiné, savoir-faire haut de gamme et confort exceptionnel.",
    "dining-rooms":
      "Découvrez la collection de salle à manger de luxe {product} par VIRELLAART, créée avec un design raffiné et un savoir-faire haut de gamme.",
    bedrooms:
      "Découvrez la collection de chambre de luxe {product} par VIRELLAART, associant confort, savoir-faire et élégance intemporelle.",
    "tv-units":
      "Découvrez la collection de meubles TV de luxe {product} par VIRELLAART au design contemporain élégant et aux détails raffinés.",
  },
  it: {
    "living-rooms":
      "Scopri la collezione soggiorno di lusso {product} di VIRELLAART, che unisce design raffinato, artigianalità premium e comfort eccezionale.",
    "dining-rooms":
      "Scopri la collezione sala da pranzo di lusso {product} di VIRELLAART, creata con design raffinato e artigianalità premium.",
    bedrooms:
      "Scopri la collezione camera da letto di lusso {product} di VIRELLAART, che unisce comfort, artigianalità ed eleganza senza tempo.",
    "tv-units":
      "Scopri la collezione mobili TV di lusso {product} di VIRELLAART, con design contemporaneo elegante e dettagli raffinati.",
  },
  ru: {
    "living-rooms":
      "Откройте для себя роскошную коллекцию для гостиной {product} от VIRELLAART, сочетающую изысканный дизайн, премиальное мастерство и исключительный комфорт.",
    "dining-rooms":
      "Откройте для себя роскошную коллекцию для столовой {product} от VIRELLAART с изысканным дизайном и премиальным мастерством.",
    bedrooms:
      "Откройте для себя роскошную коллекцию для спальни {product} от VIRELLAART, сочетающую комфорт, мастерство и вневременную элегантность.",
    "tv-units":
      "Откройте для себя роскошную коллекцию ТВ-мебели {product} от VIRELLAART с элегантным современным дизайном и утончёнными деталями.",
  },
  ar: {
    "living-rooms":
      "اكتشف مجموعة غرفة المعيشة الفاخرة {product} من VIRELLAART، التي تجمع بين التصميم الراقي والحرفية المتميزة والراحة الاستثنائية.",
    "dining-rooms":
      "اكتشف مجموعة غرفة الطعام الفاخرة {product} من VIRELLAART، المصنوعة بتصميم راقٍ وحرفية متميزة.",
    bedrooms:
      "اكتشف مجموعة غرفة النوم الفاخرة {product} من VIRELLAART، التي تجمع بين الراحة والحرفية والأناقة الخالدة.",
    "tv-units":
      "اكتشف مجموعة وحدات التلفزيون الفاخرة {product} من VIRELLAART بتصميم عصري أنيق وتفاصيل راقية.",
  },
  bg: {
    "living-rooms":
      "Открийте луксозната колекция за дневна {product} на VIRELLAART, съчетаваща изискан дизайн, премиум изработка и изключителен комфорт.",
    "dining-rooms":
      "Открийте луксозната колекция за трапезария {product} на VIRELLAART, създадена с изискан дизайн и премиум изработка.",
    bedrooms:
      "Открийте луксозната колекция за спалня {product} на VIRELLAART, съчетаваща комфорт, майсторство и непреходна елегантност.",
    "tv-units":
      "Открийте луксозната колекция ТВ модули {product} на VIRELLAART с елегантен съвременен дизайн и изискани детайли.",
  },
  ro: {
    "living-rooms":
      "Descoperiți colecția de lux pentru sufragerie {product} de la VIRELLAART, care combină designul rafinat, măiestria premium și confortul excepțional.",
    "dining-rooms":
      "Descoperiți colecția de lux pentru sala de mese {product} de la VIRELLAART, creată cu design rafinat și măiestrie premium.",
    bedrooms:
      "Descoperiți colecția de dormitor de lux {product} de la VIRELLAART, care combină confortul, măiestria și eleganța atemporală.",
    "tv-units":
      "Descoperiți colecția de comode TV de lux {product} de la VIRELLAART, cu design contemporan elegant și detalii rafinate.",
  },
  el: {
    "living-rooms":
      "Ανακαλύψτε την πολυτελή συλλογή σαλονιού {product} της VIRELLAART, που συνδυάζει εκλεπτυσμένο σχεδιασμό, κορυφαία κατασκευή και εξαιρετική άνεση.",
    "dining-rooms":
      "Ανακαλύψτε την πολυτελή συλλογή τραπεζαρίας {product} της VIRELLAART, δημιουργημένη με εκλεπτυσμένο σχεδιασμό και κορυφαία κατασκευή.",
    bedrooms:
      "Ανακαλύψτε την πολυτελή συλλογή υπνοδωματίου {product} της VIRELLAART, που συνδυάζει άνεση, δεξιοτεχνία και διαχρονική κομψότητα.",
    "tv-units":
      "Ανακαλύψτε την πολυτελή συλλογή επίπλων τηλεόρασης {product} της VIRELLAART με κομψό σύγχρονο σχεδιασμό και εκλεπτυσμένες λεπτομέρειες.",
  },
  es: {
    "living-rooms":
      "Descubra la colección de salón de lujo {product} de VIRELLAART, que combina diseño refinado, artesanía premium y un confort excepcional.",
    "dining-rooms":
      "Descubra la colección de comedor de lujo {product} de VIRELLAART, creada con diseño refinado y artesanía premium.",
    bedrooms:
      "Descubra la colección de dormitorio de lujo {product} de VIRELLAART, que combina confort, artesanía y elegancia atemporal.",
    "tv-units":
      "Descubra la colección de muebles de TV de lujo {product} de VIRELLAART, con elegante diseño contemporáneo y detalles refinados.",
  },
  sr: {
    "living-rooms":
      "Otkrijte luksuznu kolekciju za dnevnu sobu {product} kompanije VIRELLAART, koja spaja prefinjen dizajn, vrhunsku izradu i izuzetnu udobnost.",
    "dining-rooms":
      "Otkrijte luksuznu kolekciju za trpezariju {product} kompanije VIRELLAART, stvorenu uz prefinjen dizajn i vrhunsku izradu.",
    bedrooms:
      "Otkrijte luksuznu kolekciju za spavaću sobu {product} kompanije VIRELLAART, koja spaja udobnost, izradu i bezvremensku eleganciju.",
    "tv-units":
      "Otkrijte luksuznu kolekciju TV komoda {product} kompanije VIRELLAART, sa elegantnim savremenim dizajnom i prefinjenim detaljima.",
  },
  kk: {
    "living-rooms":
      "Талғампаз дизайнды, премиум шеберлікті және ерекше жайлылықты үйлестіретін VIRELLAART {product} сәнді қонақ бөлме топтамасын көріңіз.",
    "dining-rooms":
      "Талғампаз дизайн және премиум шеберлікпен жасалған VIRELLAART {product} сәнді асхана топтамасын көріңіз.",
    bedrooms:
      "Жайлылықты, шеберлікті және мәңгілік әсемдікті үйлестіретін VIRELLAART {product} сәнді жатын бөлме топтамасын көріңіз.",
    "tv-units":
      "Заманауи талғампаз дизайны мен нәзік бөлшектері бар VIRELLAART {product} сәнді теледидар жиһазы топтамасын көріңіз.",
  },
  uz: {
    "living-rooms":
      "Nafis dizayn, yuqori sifatli hunarmandchilik va ajoyib qulaylikni birlashtirgan VIRELLAART {product} hashamatli mehmonxona kolleksiyasini kashf eting.",
    "dining-rooms":
      "Nafis dizayn va yuqori sifatli hunarmandchilik bilan yaratilgan VIRELLAART {product} hashamatli ovqatlanish xonasi kolleksiyasini kashf eting.",
    bedrooms:
      "Qulaylik, hunarmandchilik va boqiy nafislikni birlashtirgan VIRELLAART {product} hashamatli yotoqxona kolleksiyasini kashf eting.",
    "tv-units":
      "Zamonaviy nafis dizayn va nozik detallarga ega VIRELLAART {product} hashamatli TV mebeli kolleksiyasini kashf eting.",
  },
  pt: {
    "living-rooms":
      "Descubra a coleção de sala de estar de luxo {product} da VIRELLAART, que combina design sofisticado, produção premium e conforto excecional.",
    "dining-rooms":
      "Descubra a coleção de sala de jantar de luxo {product} da VIRELLAART, criada com design sofisticado e produção premium.",
    bedrooms:
      "Descubra a coleção de quarto de luxo {product} da VIRELLAART, que combina conforto, produção artesanal e elegância intemporal.",
    "tv-units":
      "Descubra a coleção de móveis de TV de luxo {product} da VIRELLAART, com design contemporâneo elegante e detalhes sofisticados.",
  },
  pl: {
    "living-rooms":
      "Odkryj luksusową kolekcję do salonu {product} marki VIRELLAART, łączącą wyrafinowane wzornictwo, najwyższą jakość wykonania i wyjątkowy komfort.",
    "dining-rooms":
      "Odkryj luksusową kolekcję do jadalni {product} marki VIRELLAART, stworzoną z wyrafinowanym wzornictwem i najwyższą jakością wykonania.",
    bedrooms:
      "Odkryj luksusową kolekcję do sypialni {product} marki VIRELLAART, łączącą komfort, kunszt wykonania i ponadczasową elegancję.",
    "tv-units":
      "Odkryj luksusową kolekcję szafek RTV {product} marki VIRELLAART o eleganckim współczesnym wzornictwie i dopracowanych detalach.",
  },
};

export function getProductDescription(
  product: { name: string; category: string; description?: string },
  language: Language,
): string {
  if (language === "en" && product.description) {
    return product.description;
  }

  const translatedName = translateProductName(product.name, language);
  const template =
    categoryDescriptionTemplates[language][product.category] ??
    categoryDescriptionTemplates.en[product.category] ??
    translations[language].defaultDescription;

  return template.replace("{product}", translatedName);
}
