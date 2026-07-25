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
  const basePath = stripLanguagePrefix(pathname);

  if (language === defaultLanguage) {
    return basePath;
  }

  return basePath === "/" ? `/${language}/` : `/${language}${basePath}`;
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
        "Descoperiți livinguri, dininguri, dormitoare și comode TV de lux VIRELLAART cu opțiuni personalizate și livrare internațională.",
      eyebrow: "Fabricat în Türkiye",
      lead: "Mobilier de lux atemporal, creat pentru interioare excepționale.",
      button: "Descoperă colecțiile",
      discover: "Descoperă",
      heading: "Colecțiile noastre",
      intro: "Explorați patru categorii de mobilier reprezentative, create pentru interioare rafinate.",
      livingRooms: "Livinguri",
      diningRooms: "Dininguri",
      bedrooms: "Dormitoare",
      tvUnits: "Comode TV",
      discoverCollection: "Descoperă colecția",
    },
    category: {
      eyebrow: "Colecții VIRELLAART",
      selectModel: "Selectați un model pentru a vedea toate fotografiile și detaliile produsului.",
      viewCollection: "Vezi colecția",
      livingRooms: {
        title: "Livinguri",
        description:
          "Descoperiți colecțiile de living de lux VIRELLAART cu design rafinat, măiestrie premium și livrare internațională.",
      },
      diningRooms: {
        title: "Dininguri",
        description:
          "Descoperiți colecțiile de dining de lux VIRELLAART, create pentru întâlniri elegante și interioare excepționale.",
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
        "De la livinguri și dininguri la dormitoare și comode TV, fiecare piesă este creată pentru a aduce o atmosferă distinctă de lux în locuințele rafinate.",
      imageAlt: "Mobilier de living de lux VIRELLAART",
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
      imageAlt: "Mobilier de dining de lux VIRELLAART",
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
} as const;

export function getTranslations(language: Language) {
  return translations[language] ?? translations.en;
}

const productNameReplacements: Record<
  Exclude<Language, "en">,
  Array<[string, string]>
> = {
  tr: [
    ["Living Room", "Oturma Odası"],
    ["Dining Room", "Yemek Odası"],
    ["Dining", "Yemek Odası"],
    ["Bedroom", "Yatak Odası"],
    ["TV Unit", "TV Ünitesi"],
  ],
  de: [
    ["Living Room", "Wohnzimmer"],
    ["Dining Room", "Esszimmer"],
    ["Dining", "Esszimmer"],
    ["Bedroom", "Schlafzimmer"],
    ["TV Unit", "TV-Möbel"],
  ],
  fr: [
    ["Living Room", "Salon"],
    ["Dining Room", "Salle à manger"],
    ["Dining", "Salle à manger"],
    ["Bedroom", "Chambre"],
    ["TV Unit", "Meuble TV"],
  ],
  it: [
    ["Living Room", "Soggiorno"],
    ["Dining Room", "Sala da pranzo"],
    ["Dining", "Sala da pranzo"],
    ["Bedroom", "Camera da letto"],
    ["TV Unit", "Mobile TV"],
  ],
  ru: [
    ["Living Room", "Гостиная"],
    ["Dining Room", "Столовая"],
    ["Dining", "Столовая"],
    ["Bedroom", "Спальня"],
    ["TV Unit", "ТВ-модуль"],
  ],
  ar: [
    ["Living Room", "غرفة معيشة"],
    ["Dining Room", "غرفة طعام"],
    ["Dining", "غرفة طعام"],
    ["Bedroom", "غرفة نوم"],
    ["TV Unit", "وحدة تلفزيون"],
  ],
  bg: [
    ["Living Room", "Дневна"],
    ["Dining Room", "Трапезария"],
    ["Dining", "Трапезария"],
    ["Bedroom", "Спалня"],
    ["TV Unit", "ТВ модул"],
  ],
  ro: [
    ["Living Room", "Living"],
    ["Dining Room", "Dining"],
    ["Dining", "Dining"],
    ["Bedroom", "Dormitor"],
    ["TV Unit", "Comodă TV"],
  ],
  el: [
    ["Living Room", "Σαλόνι"],
    ["Dining Room", "Τραπεζαρία"],
    ["Dining", "Τραπεζαρία"],
    ["Bedroom", "Υπνοδωμάτιο"],
    ["TV Unit", "Έπιπλο τηλεόρασης"],
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
    "Luxury 3+3+1+1 Living Room Set": "Lüks 3+3+1+1 Oturma Odası Takımı",
    "Luxury 4+3+1 Living Room Set": "Lüks 4+3+1 Oturma Odası Takımı",
    "Center Table": "Orta Sehpa",
    "TV Unit": "TV Ünitesi",
    "Luxury Bedroom Set": "Lüks Yatak Odası Takımı",
    "Luxury Dining Room Set": "Lüks Yemek Odası Takımı",
    "Luxury TV Unit": "Lüks TV Ünitesi",
  },
  de: {
    "Luxury 3+3+1+1 Living Room Set": "Luxus-Wohnzimmerset 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Luxus-Wohnzimmerset 4+3+1",
    "Center Table": "Couchtisch",
    "TV Unit": "TV-Möbel",
    "Luxury Bedroom Set": "Luxus-Schlafzimmerset",
    "Luxury Dining Room Set": "Luxus-Esszimmerset",
    "Luxury TV Unit": "Luxus-TV-Möbel",
  },
  fr: {
    "Luxury 3+3+1+1 Living Room Set": "Ensemble salon de luxe 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Ensemble salon de luxe 4+3+1",
    "Center Table": "Table basse",
    "TV Unit": "Meuble TV",
    "Luxury Bedroom Set": "Ensemble chambre de luxe",
    "Luxury Dining Room Set": "Ensemble salle à manger de luxe",
    "Luxury TV Unit": "Meuble TV de luxe",
  },
  it: {
    "Luxury 3+3+1+1 Living Room Set": "Set soggiorno di lusso 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Set soggiorno di lusso 4+3+1",
    "Center Table": "Tavolino",
    "TV Unit": "Mobile TV",
    "Luxury Bedroom Set": "Set camera da letto di lusso",
    "Luxury Dining Room Set": "Set sala da pranzo di lusso",
    "Luxury TV Unit": "Mobile TV di lusso",
  },
  ru: {
    "Luxury 3+3+1+1 Living Room Set": "Комплект для гостиной 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Комплект для гостиной 4+3+1",
    "Center Table": "Журнальный стол",
    "TV Unit": "ТВ-модуль",
    "Luxury Bedroom Set": "Комплект для спальни",
    "Luxury Dining Room Set": "Комплект для столовой",
    "Luxury TV Unit": "Элитный ТВ-модуль",
  },
  ar: {
    "Luxury 3+3+1+1 Living Room Set": "طقم غرفة معيشة فاخر 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "طقم غرفة معيشة فاخر 4+3+1",
    "Center Table": "طاولة وسط",
    "TV Unit": "وحدة تلفزيون",
    "Luxury Bedroom Set": "طقم غرفة نوم فاخر",
    "Luxury Dining Room Set": "طقم غرفة طعام فاخر",
    "Luxury TV Unit": "وحدة تلفزيون فاخرة",
  },
  bg: {
    "Luxury 3+3+1+1 Living Room Set": "Луксозен комплект за дневна 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Луксозен комплект за дневна 4+3+1",
    "Center Table": "Холна маса",
    "TV Unit": "ТВ модул",
    "Luxury Bedroom Set": "Луксозен комплект за спалня",
    "Luxury Dining Room Set": "Луксозен комплект за трапезария",
    "Luxury TV Unit": "Луксозен ТВ модул",
  },
  ro: {
    "Luxury 3+3+1+1 Living Room Set": "Set living de lux 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Set living de lux 4+3+1",
    "Center Table": "Măsuță de cafea",
    "TV Unit": "Comodă TV",
    "Luxury Bedroom Set": "Set dormitor de lux",
    "Luxury Dining Room Set": "Set dining de lux",
    "Luxury TV Unit": "Comodă TV de lux",
  },
  el: {
    "Luxury 3+3+1+1 Living Room Set": "Πολυτελές σετ σαλονιού 3+3+1+1",
    "Luxury 4+3+1 Living Room Set": "Πολυτελές σετ σαλονιού 4+3+1",
    "Center Table": "Τραπεζάκι σαλονιού",
    "TV Unit": "Έπιπλο τηλεόρασης",
    "Luxury Bedroom Set": "Πολυτελές σετ υπνοδωματίου",
    "Luxury Dining Room Set": "Πολυτελές σετ τραπεζαρίας",
    "Luxury TV Unit": "Πολυτελές έπιπλο τηλεόρασης",
  },
};

export function translatePriceLabel(
  label: string,
  language: Language,
): string {
  return priceLabelTranslations[language][label] ?? label;
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
      "Descoperiți colecția de living de lux {product} de la VIRELLAART, care combină designul rafinat, măiestria premium și confortul excepțional.",
    "dining-rooms":
      "Descoperiți colecția de dining de lux {product} de la VIRELLAART, creată cu design rafinat și măiestrie premium.",
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
