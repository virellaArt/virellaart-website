import type { Language } from "../i18n/config";

export type MarketPage = {
  language: Language;
  slug: string;
  countryCode: string;
  hreflang: string;
  alternateGroup: string;
  marketName: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  serviceHeading: string;
  serviceText: string;
  planningHeading: string;
  planningText: string;
  details: string[];
  collectionHeading: string;
  collectionText: string;
  cta: string;
  ctaNote: string;
};

export const marketPages: MarketPage[] = [
  {
    language: "en",
    slug: "united-kingdom",
    countryCode: "GB",
    hreflang: "en-GB",
    alternateGroup: "english-markets",
    marketName: "United Kingdom",
    title: "Luxury Furniture Manufacturer for the UK | VIRELLAART",
    description:
      "Discover made-to-order luxury furniture for UK residences, with direct manufacturer support, customization and delivery planning from Istanbul.",
    eyebrow: "VIRELLAART · United Kingdom",
    heading: "Luxury Furniture Crafted for Exceptional UK Interiors",
    intro:
      "VIRELLAART works directly with homeowners, designers and furnishing projects across the United Kingdom. Explore statement sofa sets, dining rooms, bedrooms and TV units made in Istanbul with clear product, quotation and international delivery support.",
    serviceHeading: "Direct Manufacturer Support for the UK",
    serviceText:
      "Discuss dimensions, fabrics, finishes and collection configurations directly with the VIRELLAART team. Written quotations confirm the selected products, USD pricing, production scope, packaging and delivery plan before an order is approved.",
    planningHeading: "Delivery Planning Across the United Kingdom",
    planningText:
      "Delivery requirements are reviewed by destination, postcode, building access and order volume for England, Scotland, Wales and Northern Ireland. Estimated production, transport, customs and any destination charges are clarified in the written quotation.",
    details: [
      "Made-to-order luxury furniture from Istanbul",
      "Protective packaging for international transport",
      "Direct WhatsApp consultation and quotation",
      "Destination-specific delivery coordination",
    ],
    collectionHeading: "Furniture Collections for UK Homes and Projects",
    collectionText:
      "Compare complete luxury living room, dining room and bedroom collections or select individual coordinated pieces for a villa, residence or interior project.",
    cta: "Request a UK quotation",
    ctaNote:
      "Share your preferred collection, UK delivery postcode and project requirements for a precise review.",
  },
  {
    language: "en",
    slug: "united-states",
    countryCode: "US",
    hreflang: "en-US",
    alternateGroup: "english-markets",
    marketName: "United States",
    title: "Luxury Furniture Manufacturer for the USA | VIRELLAART",
    description:
      "Explore made-to-order luxury furniture for US homes and projects, with direct design consultation and international delivery planning.",
    eyebrow: "VIRELLAART · United States",
    heading: "Statement Luxury Furniture for American Interiors",
    intro:
      "VIRELLAART supports private residences, villas and design projects across the United States with made-to-order luxury furniture collections crafted in Istanbul.",
    serviceHeading: "Made-to-Order Product Consultation",
    serviceText:
      "Review collection configurations, dimensions, fabrics and finishes directly with our team. Every written quotation identifies the selected products, pricing, production scope, protective packaging and agreed delivery arrangement.",
    planningHeading: "International Delivery Planning to the USA",
    planningText:
      "Transport planning is prepared according to state, city, property access and order volume. Production and transit estimates, customs responsibilities and destination costs are confirmed before order approval.",
    details: [
      "Luxury living, dining and bedroom collections",
      "Selected customization requests reviewed",
      "Protective export packaging",
      "Direct WhatsApp quotation support",
    ],
    collectionHeading: "Collections for Residences and Interior Projects",
    collectionText:
      "Explore coordinated furniture sets designed for formal living spaces, dining rooms, primary bedrooms and distinctive entertainment areas.",
    cta: "Request a US quotation",
    ctaNote:
      "Send the collection name, city, state and project details so our team can review the order accurately.",
  },
  {
    language: "en",
    slug: "canada",
    countryCode: "CA",
    hreflang: "en-CA",
    alternateGroup: "english-markets",
    marketName: "Canada",
    title: "Luxury Furniture Manufacturer for Canada | VIRELLAART",
    description:
      "Discover luxury furniture made in Istanbul for Canadian homes, with customization, protective packaging and delivery planning.",
    eyebrow: "VIRELLAART · Canada",
    heading: "Luxury Furniture Made for Distinctive Canadian Homes",
    intro:
      "VIRELLAART connects Canadian homeowners and interior professionals directly with an Istanbul luxury furniture manufacturer for coordinated living room, dining room, bedroom and TV-unit collections.",
    serviceHeading: "Clear, Manufacturer-Direct Support",
    serviceText:
      "Our team reviews selected models, dimensions, finishes and project requirements before issuing a written quotation with product scope, pricing, estimated production and packaging details.",
    planningHeading: "Delivery Planning to Canadian Destinations",
    planningText:
      "Logistics are evaluated by province, city, access conditions and order volume. Transportation, customs responsibilities and destination charges are confirmed for the selected delivery arrangement before the order proceeds.",
    details: [
      "Made-to-order furniture production",
      "International protective packaging",
      "Collection and customization guidance",
      "Destination-specific quotation",
    ],
    collectionHeading: "Coordinated Luxury Furniture Collections",
    collectionText:
      "Choose complete collections or individual pieces with a consistent visual language for elegant Canadian residences and furnishing projects.",
    cta: "Request a Canada quotation",
    ctaNote:
      "Share your destination, preferred collection and room requirements for a detailed response.",
  },
  {
    language: "de",
    slug: "germany",
    countryCode: "DE",
    hreflang: "de-DE",
    alternateGroup: "germany",
    marketName: "Deutschland",
    title: "Luxusmöbel für Deutschland | Hersteller VIRELLAART",
    description:
      "Entdecken Sie maßgefertigte Luxusmöbel für Deutschland mit direktem Herstellerkontakt und internationaler Lieferplanung aus Istanbul.",
    eyebrow: "VIRELLAART · Deutschland",
    heading: "Luxusmöbel für anspruchsvolle Interieurs in Deutschland",
    intro:
      "VIRELLAART begleitet private Kunden und Interior-Projekte in Deutschland direkt vom Hersteller in Istanbul – mit abgestimmten Wohn-, Ess- und Schlafzimmerkollektionen.",
    serviceHeading: "Direkte Beratung durch den Hersteller",
    serviceText:
      "Besprechen Sie Maße, Stoffe, Oberflächen und Konfigurationen direkt mit unserem Team. Das schriftliche Angebot bestätigt Produkte, USD-Preise, Produktionsumfang, Verpackung und Lieferplanung.",
    planningHeading: "Lieferplanung nach Deutschland",
    planningText:
      "Transport und Zustellung werden nach Ort, Gebäudezugang und Auftragsvolumen geplant. Voraussichtliche Produktion, Transport, Zollverantwortung und mögliche Zielkosten werden vor der Freigabe erläutert.",
    details: [
      "Fertigung nach bestätigtem Auftrag",
      "Schutzverpackung für internationalen Transport",
      "Direkte Beratung über WhatsApp",
      "Zielspezifische Lieferabstimmung",
    ],
    collectionHeading: "Kollektionen für Residenzen und Projekte",
    collectionText:
      "Entdecken Sie vollständige Luxuskollektionen oder abgestimmte Einzelstücke für repräsentative Wohn- und Projektbereiche.",
    cta: "Angebot für Deutschland anfragen",
    ctaNote:
      "Senden Sie Kollektion, Lieferort und Projektanforderungen für eine genaue Prüfung.",
  },
  {
    language: "fr",
    slug: "france",
    countryCode: "FR",
    hreflang: "fr-FR",
    alternateGroup: "france",
    marketName: "France",
    title: "Mobilier de luxe pour la France | VIRELLAART",
    description:
      "Découvrez le mobilier de luxe fabriqué à Istanbul pour la France, avec personnalisation et organisation de la livraison internationale.",
    eyebrow: "VIRELLAART · France",
    heading: "Mobilier de luxe pour les intérieurs d’exception en France",
    intro:
      "VIRELLAART accompagne directement particuliers, décorateurs et projets en France avec des collections coordonnées de salons, salles à manger, chambres et meubles TV fabriquées à Istanbul.",
    serviceHeading: "Accompagnement direct du fabricant",
    serviceText:
      "Échangez sur les dimensions, tissus, finitions et configurations avec notre équipe. Le devis écrit confirme les produits, les prix en USD, la production, l’emballage et l’organisation de la livraison.",
    planningHeading: "Planification de la livraison en France",
    planningText:
      "Le transport est étudié selon la ville, l’accès au bâtiment et le volume de commande. Les délais estimés, responsabilités douanières et éventuels frais à destination sont précisés avant validation.",
    details: [
      "Fabrication après confirmation de commande",
      "Emballage protecteur international",
      "Conseil direct via WhatsApp",
      "Coordination selon la destination",
    ],
    collectionHeading: "Collections pour résidences et projets",
    collectionText:
      "Choisissez des ensembles complets ou des pièces coordonnées pour composer un intérieur français élégant et distinctif.",
    cta: "Demander un devis pour la France",
    ctaNote:
      "Indiquez la collection, la ville de livraison et les besoins du projet pour une étude précise.",
  },
  {
    language: "it",
    slug: "italy",
    countryCode: "IT",
    hreflang: "it-IT",
    alternateGroup: "italy",
    marketName: "Italia",
    title: "Mobili di lusso per l’Italia | VIRELLAART",
    description:
      "Scopri mobili di lusso prodotti a Istanbul per l’Italia, con supporto diretto, personalizzazione e pianificazione della consegna.",
    eyebrow: "VIRELLAART · Italia",
    heading: "Mobili di lusso per interni italiani d’eccezione",
    intro:
      "VIRELLAART supporta clienti privati, interior designer e progetti in Italia con collezioni coordinate per soggiorno, sala da pranzo, camera da letto e zona TV.",
    serviceHeading: "Supporto diretto dal produttore",
    serviceText:
      "Valuta misure, tessuti, finiture e configurazioni direttamente con il team. Il preventivo scritto conferma prodotti, prezzi in USD, produzione, imballaggio e piano di consegna.",
    planningHeading: "Pianificazione della consegna in Italia",
    planningText:
      "Trasporto e consegna sono valutati in base a città, accesso all’immobile e volume dell’ordine. Tempi stimati, responsabilità doganali e costi locali vengono chiariti prima della conferma.",
    details: [
      "Produzione su ordine confermato",
      "Imballaggio protettivo internazionale",
      "Consulenza diretta via WhatsApp",
      "Coordinamento specifico per destinazione",
    ],
    collectionHeading: "Collezioni per residenze e progetti",
    collectionText:
      "Scegli collezioni complete o elementi coordinati per creare interni italiani eleganti e memorabili.",
    cta: "Richiedi un preventivo per l’Italia",
    ctaNote:
      "Invia collezione, città di consegna e requisiti del progetto per una valutazione accurata.",
  },
  {
    language: "de",
    slug: "switzerland",
    countryCode: "CH",
    hreflang: "de-CH",
    alternateGroup: "switzerland",
    marketName: "Schweiz",
    title: "Luxusmöbel für die Schweiz | VIRELLAART",
    description:
      "Entdecken Sie maßgefertigte Luxusmöbel für die Schweiz mit direkter Herstellerberatung und Lieferplanung aus Istanbul.",
    eyebrow: "VIRELLAART · Schweiz",
    heading: "Luxusmöbel für exklusive Interieurs in der Schweiz",
    intro:
      "VIRELLAART unterstützt Schweizer Privatkunden und Interior-Projekte direkt aus Istanbul mit hochwertigen, koordinierten Möbelkollektionen.",
    serviceHeading: "Mehrsprachige Herstellerberatung",
    serviceText:
      "Maße, Stoffe, Oberflächen und Konfigurationen werden direkt mit unserem Team geprüft. Das schriftliche Angebot nennt Produkte, USD-Preise, Produktion, Verpackung und Lieferumfang.",
    planningHeading: "Lieferplanung in die Schweiz",
    planningText:
      "Die Planung berücksichtigt Kanton, Ort, Gebäudezugang und Auftragsvolumen. Transport, Zoll, Einfuhrabgaben und lokale Leistungen werden gemäß dem schriftlichen Angebot geklärt.",
    details: [
      "Fertigung nach Auftragsbestätigung",
      "Internationale Schutzverpackung",
      "Direkte mehrsprachige Abstimmung",
      "Individuelle Lieferplanung",
    ],
    collectionHeading: "Kollektionen für Schweizer Residenzen",
    collectionText:
      "Entdecken Sie vollständige Wohn-, Ess- und Schlafzimmerkollektionen für anspruchsvolle Wohn- und Projektbereiche.",
    cta: "Angebot für die Schweiz anfragen",
    ctaNote:
      "Teilen Sie Kollektion, Kanton, Ort und Projektanforderungen für eine genaue Rückmeldung.",
  },
  {
    language: "fr",
    slug: "switzerland",
    countryCode: "CH",
    hreflang: "fr-CH",
    alternateGroup: "switzerland",
    marketName: "Suisse",
    title: "Mobilier de luxe pour la Suisse | VIRELLAART",
    description:
      "Découvrez le mobilier de luxe sur commande pour la Suisse avec conseil direct du fabricant et planification de livraison.",
    eyebrow: "VIRELLAART · Suisse",
    heading: "Mobilier de luxe pour des intérieurs suisses d’exception",
    intro:
      "VIRELLAART accompagne les clients privés et projets d’aménagement en Suisse avec des collections coordonnées fabriquées à Istanbul.",
    serviceHeading: "Conseil multilingue du fabricant",
    serviceText:
      "Dimensions, tissus, finitions et configurations sont étudiés directement avec notre équipe. Le devis précise produits, prix en USD, production, emballage et périmètre de livraison.",
    planningHeading: "Planification de la livraison en Suisse",
    planningText:
      "L’organisation tient compte du canton, de la ville, de l’accès et du volume. Transport, douanes, taxes d’importation et services locaux sont clarifiés dans le devis écrit.",
    details: [
      "Fabrication après confirmation",
      "Emballage international protecteur",
      "Coordination multilingue directe",
      "Planification par destination",
    ],
    collectionHeading: "Collections pour résidences suisses",
    collectionText:
      "Découvrez des ensembles complets pour salon, salle à manger et chambre, adaptés aux intérieurs résidentiels et aux projets.",
    cta: "Demander un devis pour la Suisse",
    ctaNote:
      "Indiquez collection, canton, ville et besoins du projet pour une réponse précise.",
  },
  {
    language: "it",
    slug: "switzerland",
    countryCode: "CH",
    hreflang: "it-CH",
    alternateGroup: "switzerland",
    marketName: "Svizzera",
    title: "Mobili di lusso per la Svizzera | VIRELLAART",
    description:
      "Scopri mobili di lusso su ordinazione per la Svizzera con consulenza diretta e pianificazione della consegna.",
    eyebrow: "VIRELLAART · Svizzera",
    heading: "Mobili di lusso per interni svizzeri esclusivi",
    intro:
      "VIRELLAART assiste clienti privati e progetti d’interni in Svizzera con collezioni coordinate prodotte a Istanbul.",
    serviceHeading: "Consulenza multilingue dal produttore",
    serviceText:
      "Misure, tessuti, finiture e configurazioni sono valutati direttamente con il team. Il preventivo indica prodotti, prezzi in USD, produzione, imballaggio e consegna.",
    planningHeading: "Pianificazione della consegna in Svizzera",
    planningText:
      "La pianificazione considera cantone, città, accesso e volume. Trasporto, dogana, imposte d’importazione e servizi locali sono chiariti nel preventivo scritto.",
    details: [
      "Produzione dopo conferma",
      "Imballaggio protettivo internazionale",
      "Coordinamento multilingue",
      "Piano di consegna specifico",
    ],
    collectionHeading: "Collezioni per residenze svizzere",
    collectionText:
      "Scopri collezioni complete per soggiorno, sala da pranzo e camera da letto per residenze e progetti.",
    cta: "Richiedi un preventivo per la Svizzera",
    ctaNote:
      "Indica collezione, cantone, città ed esigenze del progetto per una risposta accurata.",
  },
  {
    language: "ro",
    slug: "romania",
    countryCode: "RO",
    hreflang: "ro-RO",
    alternateGroup: "romania",
    marketName: "România",
    title: "Mobilier de lux pentru România | VIRELLAART",
    description:
      "Descoperiți mobilier de lux produs la Istanbul pentru România, cu personalizare și planificarea livrării internaționale.",
    eyebrow: "VIRELLAART · România",
    heading: "Mobilier de lux pentru interioare remarcabile din România",
    intro:
      "VIRELLAART sprijină clienții privați și proiectele din România cu acces direct la colecții coordonate de living, dining, dormitor și mobilier TV.",
    serviceHeading: "Asistență directă de la producător",
    serviceText:
      "Discutați dimensiuni, țesături, finisaje și configurații direct cu echipa noastră. Oferta scrisă confirmă produsele, prețurile în USD, producția, ambalarea și livrarea.",
    planningHeading: "Planificarea livrării în România",
    planningText:
      "Transportul este evaluat după oraș, acces și volumul comenzii. Termenele estimate, responsabilitățile vamale și costurile la destinație sunt clarificate înainte de confirmare.",
    details: [
      "Producție conform comenzii confirmate",
      "Ambalare protectoare internațională",
      "Consultanță directă prin WhatsApp",
      "Coordonare pentru destinație",
    ],
    collectionHeading: "Colecții pentru reședințe și proiecte",
    collectionText:
      "Alegeți seturi complete sau piese coordonate pentru interioare românești elegante și distinctive.",
    cta: "Solicită o ofertă pentru România",
    ctaNote:
      "Trimiteți colecția, orașul și cerințele proiectului pentru o evaluare exactă.",
  },
  {
    language: "ru",
    slug: "russia",
    countryCode: "RU",
    hreflang: "ru-RU",
    alternateGroup: "russia",
    marketName: "Россия",
    title: "Элитная мебель для России | VIRELLAART",
    description:
      "Элитная мебель из Стамбула для российских интерьеров: прямое общение с производителем и индивидуальная логистика.",
    eyebrow: "VIRELLAART · Россия",
    heading: "Элитная мебель для выразительных интерьеров в России",
    intro:
      "VIRELLAART предлагает частным клиентам и интерьерным проектам в России прямой доступ к производителю согласованных коллекций для гостиных, столовых и спален.",
    serviceHeading: "Прямая поддержка производителя",
    serviceText:
      "Обсудите размеры, ткани, отделку и конфигурации с нашей командой. Письменное предложение фиксирует товары, цены в USD, производство, упаковку и согласованный объём доставки.",
    planningHeading: "Индивидуальная проверка логистики",
    planningText:
      "Доступные варианты перевозки проверяются для каждого заказа, города и действующих правил до подтверждения. Сроки, таможенная ответственность и возможные расходы указываются только после такой проверки.",
    details: [
      "Производство по подтверждённому заказу",
      "Защитная международная упаковка",
      "Консультация напрямую в WhatsApp",
      "Проверка логистики перед заказом",
    ],
    collectionHeading: "Коллекции для резиденций и проектов",
    collectionText:
      "Выбирайте полные комплекты или согласованные предметы для представительных жилых и проектных интерьеров.",
    cta: "Запросить предложение для России",
    ctaNote:
      "Сообщите коллекцию, город и требования проекта. Команда сначала подтвердит доступную логистику.",
  },
  {
    language: "bg",
    slug: "bulgaria",
    countryCode: "BG",
    hreflang: "bg-BG",
    alternateGroup: "bulgaria",
    marketName: "България",
    title: "Луксозни мебели за България | VIRELLAART",
    description:
      "Открийте луксозни мебели от Истанбул за България с директна консултация, персонализация и планиране на доставката.",
    eyebrow: "VIRELLAART · България",
    heading: "Луксозни мебели за забележителни интериори в България",
    intro:
      "VIRELLAART подкрепя частни клиенти и интериорни проекти в България с директен достъп до координирани колекции за дневна, трапезария и спалня.",
    serviceHeading: "Директна подкрепа от производителя",
    serviceText:
      "Обсъдете размери, тъкани, покрития и конфигурации директно с екипа. Писмената оферта потвърждава продуктите, цените в USD, производството, опаковката и доставката.",
    planningHeading: "Планиране на доставката до България",
    planningText:
      "Транспортът се оценява според града, достъпа и обема на поръчката. Сроковете, митническите отговорности и разходите при местоназначение се уточняват преди потвърждение.",
    details: [
      "Производство по потвърдена поръчка",
      "Защитна международна опаковка",
      "Директна консултация чрез WhatsApp",
      "Координация според дестинацията",
    ],
    collectionHeading: "Колекции за резиденции и проекти",
    collectionText:
      "Изберете пълни комплекти или съгласувани мебели за елегантни български домове и интериорни проекти.",
    cta: "Поискайте оферта за България",
    ctaNote:
      "Изпратете колекция, град и изисквания на проекта за точна оценка.",
  },
];

export const englishMarketPages = marketPages.filter(
  (market) => market.language === "en",
);

export const localizedMarketPages = marketPages.filter(
  (market) => market.language !== "en",
);

export function marketPagePath(market: MarketPage): string {
  const route = `/markets/${market.slug}/`;

  return market.language === "en"
    ? route
    : `/${market.language}${route}`;
}

export function getMarketAlternates(market: MarketPage) {
  return marketPages
    .filter(
      (candidate) =>
        candidate.alternateGroup === market.alternateGroup,
    )
    .map((candidate) => ({
      language: candidate.hreflang,
      href: new URL(
        marketPagePath(candidate),
        "https://www.virellaart.com",
      ).href,
    }));
}

export function getMarketXDefault(market: MarketPage): string {
  const englishVersion = marketPages.find(
    (candidate) =>
      candidate.alternateGroup === market.alternateGroup &&
      candidate.language === "en",
  );

  return new URL(
    englishVersion
      ? marketPagePath(englishVersion)
      : marketPagePath(
          marketPages.find(
            (candidate) =>
              candidate.alternateGroup ===
              market.alternateGroup,
          ) ?? market,
        ),
    "https://www.virellaart.com",
  ).href;
}

export const marketFooterPages = [
  marketPages.find((market) => market.countryCode === "GB"),
  marketPages.find((market) => market.countryCode === "US"),
  marketPages.find((market) => market.countryCode === "CA"),
  marketPages.find((market) => market.countryCode === "FR"),
  marketPages.find((market) => market.countryCode === "DE"),
  marketPages.find((market) => market.countryCode === "IT"),
  marketPages.find(
    (market) =>
      market.countryCode === "CH" &&
      market.language === "de",
  ),
  marketPages.find((market) => market.countryCode === "RO"),
  marketPages.find((market) => market.countryCode === "RU"),
  marketPages.find((market) => market.countryCode === "BG"),
].filter(
  (market): market is MarketPage => Boolean(market),
);

export function getMarketFooterPages(
  language: Language,
): MarketPage[] {
  return marketFooterPages.map((market) => {
    if (
      market.countryCode === "CH" &&
      ["de", "fr", "it"].includes(language)
    ) {
      return (
        marketPages.find(
          (candidate) =>
            candidate.countryCode === "CH" &&
            candidate.language === language,
        ) ?? market
      );
    }

    return market;
  });
}
