export type ManufacturingContent = {
  seo: {
    title: string;
    description: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    processButton: string;
    projectButton: string;
    location: string;
    manufacturer: string;
    imageAlt: string;
    whatsappMessage: string;
  };

  intro: {
    eyebrow: string;
    title: string;
    highlight: string;
    lead: string;
    paragraphs: string[];

    facts: {
      label: string;
      value: string;
    }[];

    imageAlt: string;
    imageLabel: string;
    imageCaption: string;
  };

  process: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;

    cards: {
      number: string;
      label: string;
      title: string;
      description: string;
      alt: string;
    }[];
  };

  flow: {
    eyebrow: string;
    title: string;
    highlight: string;

    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };

  quality: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    items: string[];
    imageAlt: string;
  };

  shipping: {
    eyebrow: string;
    title: string;
    highlight: string;
    paragraphs: string[];
    policyButton: string;
    imageAlt: string;
  };

  benefits: {
    eyebrow: string;
    title: string;
    highlight: string;

    cards: {
      title: string;
      description: string;
    }[];
  };

  cta: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    whatsappButton: string;
    collectionsButton: string;
    whatsappMessage: string;
  };

  disclosure: string;
};

const manufacturingContent: Record<
  string,
  ManufacturingContent
> = {
  en: {
    seo: {
      title:
        "Luxury Furniture Manufacturing in Istanbul | VIRELLAART",
      description:
        "Discover VIRELLAART luxury furniture manufacturing in Istanbul, including design development, decorative craftsmanship, upholstery, quality control, protective packaging and worldwide delivery.",
    },

    hero: {
      eyebrow: "VIRELLAART Manufacturing",
      title: "Luxury Furniture Manufacturing",
      highlight: "From Istanbul to the World",
      description:
        "VIRELLAART brings furniture design, production expertise, detailed craftsmanship and international service together for luxury residences, villas and distinguished interior projects worldwide.",
      processButton: "Explore Our Process",
      projectButton: "Discuss Your Project",
      location: "Istanbul, Türkiye",
      manufacturer: "Luxury Furniture Manufacturer",
      imageAlt:
        "VIRELLAART luxury furniture manufacturing facility in Istanbul",
      whatsappMessage:
        "Hello VIRELLAART, I would like to receive information about your luxury furniture manufacturing services.",
    },

    intro: {
      eyebrow: "Direct Manufacturer",
      title: "More Than a Furniture Seller",
      highlight: "A Manufacturer-Led Experience",
      lead:
        "VIRELLAART is an Istanbul-based luxury furniture manufacturer developing complete collections for refined residences, villas and private interiors.",
      paragraphs: [
        "Our work extends beyond presenting individual products. We develop coordinated living room, dining room, bedroom and TV unit collections with a consistent visual identity.",
        "From the first product enquiry to production preparation, quality review, protective packaging and international delivery planning, our team supports customers throughout the process.",
      ],
      facts: [
        {
          label: "Based in",
          value: "Istanbul, Türkiye",
        },
        {
          label: "Specialization",
          value: "Luxury Furniture Collections",
        },
        {
          label: "Customer Profile",
          value: "Private and International Clients",
        },
        {
          label: "Service",
          value: "Worldwide Delivery Assistance",
        },
      ],
      imageAlt:
        "VIRELLAART luxury furniture design and production planning",
      imageLabel: "Design Development",
      imageCaption:
        "Collections planned for complete luxury interiors",
    },

    process: {
      eyebrow: "Our Manufacturing Approach",
      title: "Precision Behind",
      highlight: "Every Collection",
      description:
        "Each stage contributes to the appearance, comfort, consistency and final presentation of the completed furniture collection.",
      cards: [
        {
          number: "01",
          label: "Design Development",
          title:
            "Furniture Designed Around Complete Interiors",
          description:
            "Every VIRELLAART collection begins with proportion, function, visual harmony and coordinated product planning. Our design approach focuses on complete living rooms, dining rooms, bedrooms and TV unit collections for distinguished interiors.",
          alt:
            "VIRELLAART luxury furniture design development in Istanbul",
        },
        {
          number: "02",
          label: "Decorative Craftsmanship",
          title:
            "Detailed Carving and Statement-Making Forms",
          description:
            "Decorative forms and carved details are developed with close attention to balance, depth and overall visual character. Every component is considered as part of the complete furniture collection.",
          alt:
            "Decorative carving during luxury furniture production",
        },
        {
          number: "03",
          label: "Upholstery and Finishing",
          title: "Comfort Refined Through Every Detail",
          description:
            "Upholstery preparation combines structural comfort, carefully selected fabrics, detailed stitching and decorative finishing appropriate to the character of each collection.",
          alt:
            "Luxury furniture upholstery and finishing process",
        },
        {
          number: "04",
          label: "Quality Control",
          title:
            "Every Collection Reviewed Before Packaging",
          description:
            "Completed furniture is visually reviewed before protective packaging. Decorative surfaces, upholstery, coordinated pieces and overall presentation are checked before transportation.",
          alt:
            "VIRELLAART luxury furniture quality inspection",
        },
      ],
    },

    flow: {
      eyebrow: "From Design to Delivery",
      title: "A Structured Process",
      highlight: "Created for Confidence",
      steps: [
        {
          number: "01",
          title: "Design Review",
          description:
            "Collection details, dimensions, selected options and project requirements are reviewed before production preparation.",
        },
        {
          number: "02",
          title: "Production Preparation",
          description:
            "Structural, decorative and upholstery components are prepared according to the confirmed furniture collection.",
        },
        {
          number: "03",
          title: "Craftsmanship and Finishing",
          description:
            "Assembly, decorative detailing, upholstery and finishing processes are completed with attention to visual consistency.",
        },
        {
          number: "04",
          title: "Inspection and Packaging",
          description:
            "The completed collection is reviewed and prepared with protective packaging suitable for transportation.",
        },
      ],
    },

    quality: {
      eyebrow: "Quality Before Dispatch",
      title: "Every Detail Reviewed",
      highlight: "Before Packaging",
      description:
        "Completed furniture is reviewed before it is prepared for shipment. The objective is to identify visible issues and verify the coordinated presentation of the collection before protective packaging.",
      items: [
        "Visual review of decorative surfaces",
        "Inspection of upholstery and finishing details",
        "Review of coordinated collection pieces",
        "Preparation for protective packaging",
      ],
      imageAlt:
        "VIRELLAART furniture inspection before protective packaging",
    },

    shipping: {
      eyebrow: "International Delivery",
      title: "Protective Packaging and",
      highlight: "Worldwide Shipping Support",
      paragraphs: [
        "Furniture collections are prepared for transportation using protective packaging selected according to product form, finished surfaces and decorative details.",
        "Shipping arrangements, delivery periods and costs are reviewed according to the selected collection and destination.",
      ],
      policyButton: "Review Our Shipping Policy",
      imageAlt:
        "VIRELLAART protective furniture packaging and shipping preparation",
    },

    benefits: {
      eyebrow: "Why VIRELLAART",
      title: "A Manufacturer-Led",
      highlight: "Customer Experience",
      cards: [
        {
          title: "Manufacturer-Direct Communication",
          description:
            "Communicate directly with an Istanbul-based luxury furniture manufacturer throughout collection selection and order preparation.",
        },
        {
          title: "Complete Coordinated Collections",
          description:
            "Living room, dining room, bedroom and TV unit collections developed with a consistent design identity.",
        },
        {
          title: "Customization Support",
          description:
            "Selected customization possibilities can be reviewed according to the collection and project requirements.",
        },
        {
          title: "Worldwide Delivery Assistance",
          description:
            "Professional assistance for protective packaging, transportation planning and international delivery.",
        },
      ],
    },

    cta: {
      eyebrow:
        "Private Residences and Interior Projects",
      title: "Looking for a Manufacturer",
      highlight: "for Your Luxury Interior?",
      description:
        "Contact VIRELLAART to discuss collection selection, customization, production preparation and international delivery.",
      whatsappButton: "Contact on WhatsApp",
      collectionsButton: "Explore Collections",
      whatsappMessage:
        "Hello VIRELLAART, I would like to discuss a luxury furniture project.",
    },

    disclosure:
      "VIRELLAART designs and manufactures luxury furniture in Türkiye, managing quality control, customization and international delivery for every order.",
  },

  tr: {
    seo: {
      title:
        "İstanbul Lüks Mobilya Üretimi | VIRELLAART",
      description:
        "VIRELLAART İstanbul lüks mobilya üretim sürecini; tasarım geliştirme, dekoratif işçilik, döşeme, kalite kontrol, koruyucu paketleme ve uluslararası teslimat aşamalarıyla keşfedin.",
    },

    hero: {
      eyebrow: "VIRELLAART Üretim",
      title: "Lüks Mobilya Üretimi",
      highlight: "İstanbul'dan Dünyaya",
      description:
        "VIRELLAART; mobilya tasarımı, üretim tecrübesi, detaylı işçilik ve uluslararası hizmeti dünyanın farklı bölgelerindeki seçkin konut, villa ve iç mekân projeleri için bir araya getirir.",
      processButton: "Üretim Sürecimizi İnceleyin",
      projectButton: "Projenizi Görüşün",
      location: "İstanbul, Türkiye",
      manufacturer: "Lüks Mobilya Üreticisi",
      imageAlt:
        "İstanbul VIRELLAART lüks mobilya üretim tesisi",
      whatsappMessage:
        "Merhaba VIRELLAART, lüks mobilya üretim hizmetleriniz hakkında bilgi almak istiyorum.",
    },

    intro: {
      eyebrow: "Doğrudan Üretici",
      title: "Bir Mobilya Satıcısından Daha Fazlası",
      highlight: "Üretici Odaklı Bir Deneyim",
      lead:
        "VIRELLAART, seçkin konutlar, villalar ve özel iç mekânlar için komple koleksiyonlar geliştiren İstanbul merkezli bir lüks mobilya üreticisidir.",
      paragraphs: [
        "Çalışmalarımız yalnızca tekil ürünlerin sunulmasından ibaret değildir. Tutarlı bir tasarım kimliğine sahip salon, yemek odası, yatak odası ve TV ünitesi koleksiyonları geliştiriyoruz.",
        "İlk ürün talebinden üretim hazırlığına, kalite incelemesinden koruyucu paketleme ve uluslararası teslimat planlamasına kadar müşterilerimize süreç boyunca destek sağlıyoruz.",
      ],
      facts: [
        {
          label: "Merkez",
          value: "İstanbul, Türkiye",
        },
        {
          label: "Uzmanlık",
          value: "Lüks Mobilya Koleksiyonları",
        },
        {
          label: "Müşteri Profili",
          value: "Özel ve Uluslararası Müşteriler",
        },
        {
          label: "Hizmet",
          value: "Dünya Geneli Teslimat Desteği",
        },
      ],
      imageAlt:
        "VIRELLAART lüks mobilya tasarım ve üretim planlaması",
      imageLabel: "Tasarım Geliştirme",
      imageCaption:
        "Komple lüks iç mekânlar için planlanan koleksiyonlar",
    },

    process: {
      eyebrow: "Üretim Yaklaşımımız",
      title: "Her Koleksiyonun Arkasındaki",
      highlight: "Hassasiyet",
      description:
        "Her aşama, tamamlanan mobilya koleksiyonunun görünümüne, konforuna, bütünlüğüne ve son sunumuna katkıda bulunur.",
      cards: [
        {
          number: "01",
          label: "Tasarım Geliştirme",
          title:
            "Komple İç Mekânlara Göre Tasarlanan Mobilyalar",
          description:
            "Her VIRELLAART koleksiyonu oran, işlev, görsel uyum ve koordineli ürün planlamasıyla başlar. Tasarım yaklaşımımız seçkin iç mekânlar için komple salon, yemek odası, yatak odası ve TV ünitesi koleksiyonlarına odaklanır.",
          alt:
            "İstanbul VIRELLAART lüks mobilya tasarım geliştirme süreci",
        },
        {
          number: "02",
          label: "Dekoratif İşçilik",
          title:
            "Detaylı Oymalar ve Güçlü Tasarım Formları",
          description:
            "Dekoratif formlar ve oyma detayları denge, derinlik ve genel tasarım karakterine dikkat edilerek geliştirilir. Her bileşen, komple mobilya koleksiyonunun bir parçası olarak değerlendirilir.",
          alt:
            "Lüks mobilya üretimi sırasında dekoratif oyma işlemi",
        },
        {
          number: "03",
          label: "Döşeme ve Son İşlemler",
          title: "Her Detayda Geliştirilen Konfor",
          description:
            "Döşeme hazırlığı; yapısal konforu, dikkatle seçilen kumaşları, detaylı dikişleri ve her koleksiyonun karakterine uygun dekoratif son işlemleri bir araya getirir.",
          alt:
            "Lüks mobilya döşeme ve son işlem süreci",
        },
        {
          number: "04",
          label: "Kalite Kontrol",
          title:
            "Her Koleksiyon Paketlemeden Önce İncelenir",
          description:
            "Tamamlanan mobilyalar koruyucu paketleme öncesinde görsel olarak incelenir. Dekoratif yüzeyler, döşemeler, koleksiyondaki uyumlu parçalar ve genel sunum taşıma öncesinde kontrol edilir.",
          alt:
            "VIRELLAART lüks mobilya kalite kontrolü",
        },
      ],
    },

    flow: {
      eyebrow: "Tasarımdan Teslimata",
      title: "Güven İçin Oluşturulan",
      highlight: "Planlı Bir Süreç",
      steps: [
        {
          number: "01",
          title: "Tasarım İncelemesi",
          description:
            "Koleksiyon detayları, ölçüler, seçilen seçenekler ve proje gereksinimleri üretim hazırlığından önce değerlendirilir.",
        },
        {
          number: "02",
          title: "Üretim Hazırlığı",
          description:
            "Yapısal, dekoratif ve döşeme bileşenleri onaylanan mobilya koleksiyonuna göre hazırlanır.",
        },
        {
          number: "03",
          title: "İşçilik ve Son İşlemler",
          description:
            "Montaj, dekoratif detaylandırma, döşeme ve son işlemler görsel bütünlüğe dikkat edilerek tamamlanır.",
        },
        {
          number: "04",
          title: "Kontrol ve Paketleme",
          description:
            "Tamamlanan koleksiyon incelenerek taşımaya uygun koruyucu paketlemeyle hazırlanır.",
        },
      ],
    },

    quality: {
      eyebrow: "Sevkiyat Öncesi Kalite",
      title: "Her Detay",
      highlight: "Paketlemeden Önce İncelenir",
      description:
        "Tamamlanan mobilyalar sevkiyata hazırlanmadan önce incelenir. Amaç, görünür sorunları belirlemek ve koruyucu paketleme öncesinde koleksiyonun koordineli sunumunu doğrulamaktır.",
      items: [
        "Dekoratif yüzeylerin görsel kontrolü",
        "Döşeme ve son işlem detaylarının incelenmesi",
        "Koleksiyondaki uyumlu parçaların kontrolü",
        "Koruyucu paketleme için hazırlık",
      ],
      imageAlt:
        "Koruyucu paketleme öncesi VIRELLAART mobilya kontrolü",
    },

    shipping: {
      eyebrow: "Uluslararası Teslimat",
      title: "Koruyucu Paketleme ve",
      highlight: "Dünya Geneli Sevkiyat Desteği",
      paragraphs: [
        "Mobilya koleksiyonları; ürün formu, tamamlanan yüzeyler ve dekoratif detaylara uygun seçilen koruyucu paketleme yöntemleriyle taşımaya hazırlanır.",
        "Nakliye düzenlemeleri, teslimat süreleri ve maliyetler seçilen koleksiyona ve teslimat konumuna göre değerlendirilir.",
      ],
      policyButton: "Teslimat Politikamızı İnceleyin",
      imageAlt:
        "VIRELLAART koruyucu mobilya paketleme ve sevkiyat hazırlığı",
    },

    benefits: {
      eyebrow: "Neden VIRELLAART?",
      title: "Üretici Odaklı",
      highlight: "Müşteri Deneyimi",
      cards: [
        {
          title: "Doğrudan Üretici İletişimi",
          description:
            "Koleksiyon seçimi ve sipariş hazırlığı boyunca İstanbul merkezli lüks mobilya üreticisiyle doğrudan iletişim kurun.",
        },
        {
          title: "Koordineli Komple Koleksiyonlar",
          description:
            "Tutarlı bir tasarım kimliğiyle geliştirilen salon, yemek odası, yatak odası ve TV ünitesi koleksiyonları.",
        },
        {
          title: "Kişiselleştirme Desteği",
          description:
            "Seçili kişiselleştirme seçenekleri koleksiyon ve proje gereksinimlerine göre değerlendirilebilir.",
        },
        {
          title: "Dünya Geneli Teslimat Desteği",
          description:
            "Koruyucu paketleme, nakliye planlaması ve uluslararası teslimat için profesyonel destek.",
        },
      ],
    },

    cta: {
      eyebrow: "Özel Konutlar ve İç Mekân Projeleri",
      title: "Lüks İç Mekânınız İçin",
      highlight: "Bir Üretici mi Arıyorsunuz?",
      description:
        "Koleksiyon seçimi, kişiselleştirme, üretim hazırlığı ve uluslararası teslimat konularını görüşmek için VIRELLAART ile iletişime geçin.",
      whatsappButton: "WhatsApp'tan İletişime Geçin",
      collectionsButton: "Koleksiyonları İnceleyin",
      whatsappMessage:
        "Merhaba VIRELLAART, lüks bir mobilya projesi hakkında görüşmek istiyorum.",
    },

    disclosure:
      "VIRELLAART, lüks mobilyalarını Türkiye'de tasarlar ve üretir; her siparişte kalite kontrol, kişiselleştirme ve uluslararası teslimat süreçlerini yönetir.",
  },

  fr: {
    seo: {
      title:
        "Fabrication de Mobilier de Luxe à Istanbul | VIRELLAART",
      description:
        "Découvrez la fabrication de mobilier de luxe VIRELLAART à Istanbul : développement du design, artisanat décoratif, rembourrage, contrôle qualité, emballage protecteur et livraison internationale.",
    },

    hero: {
      eyebrow: "Fabrication VIRELLAART",
      title: "Fabrication de Mobilier de Luxe",
      highlight: "D'Istanbul vers le Monde",
      description:
        "VIRELLAART réunit design, expertise de production, savoir-faire détaillé et service international pour les résidences, villas et projets d'intérieur prestigieux.",
      processButton: "Découvrir Notre Processus",
      projectButton: "Discuter de Votre Projet",
      location: "Istanbul, Türkiye",
      manufacturer: "Fabricant de Mobilier de Luxe",
      imageAlt:
        "Site de fabrication de mobilier de luxe VIRELLAART à Istanbul",
      whatsappMessage:
        "Bonjour VIRELLAART, je souhaite recevoir des informations sur vos services de fabrication de mobilier de luxe.",
    },

    intro: {
      eyebrow: "Fabricant Direct",
      title: "Plus Qu'un Vendeur de Mobilier",
      highlight: "Une Expérience Guidée par le Fabricant",
      lead:
        "VIRELLAART est un fabricant de mobilier de luxe basé à Istanbul, développant des collections complètes pour les résidences raffinées, villas et intérieurs privés.",
      paragraphs: [
        "Notre activité va au-delà de la présentation de produits individuels. Nous développons des collections coordonnées pour salons, salles à manger, chambres et meubles TV.",
        "De la première demande à la préparation de la production, au contrôle qualité, à l'emballage protecteur et à la planification de la livraison internationale, notre équipe accompagne chaque client.",
      ],
      facts: [
        {
          label: "Basé à",
          value: "Istanbul, Türkiye",
        },
        {
          label: "Spécialisation",
          value: "Collections de Mobilier de Luxe",
        },
        {
          label: "Clientèle",
          value: "Clients Privés et Internationaux",
        },
        {
          label: "Service",
          value: "Assistance de Livraison Mondiale",
        },
      ],
      imageAlt:
        "Conception et planification de production VIRELLAART",
      imageLabel: "Développement du Design",
      imageCaption:
        "Collections conçues pour des intérieurs de luxe complets",
    },

    process: {
      eyebrow: "Notre Approche de Fabrication",
      title: "La Précision Derrière",
      highlight: "Chaque Collection",
      description:
        "Chaque étape contribue à l'apparence, au confort, à la cohérence et à la présentation finale de la collection.",
      cards: [
        {
          number: "01",
          label: "Développement du Design",
          title:
            "Un Mobilier Pensé pour des Intérieurs Complets",
          description:
            "Chaque collection VIRELLAART commence par l'étude des proportions, de la fonction, de l'harmonie visuelle et de la coordination des produits.",
          alt:
            "Développement du design de mobilier de luxe VIRELLAART à Istanbul",
        },
        {
          number: "02",
          label: "Artisanat Décoratif",
          title:
            "Sculptures Détaillées et Formes Affirmées",
          description:
            "Les formes décoratives et les détails sculptés sont développés avec une attention particulière à l'équilibre, à la profondeur et au caractère visuel.",
          alt:
            "Sculpture décorative pendant la fabrication de mobilier de luxe",
        },
        {
          number: "03",
          label: "Rembourrage et Finition",
          title: "Le Confort Raffiné dans Chaque Détail",
          description:
            "La préparation du rembourrage combine confort structurel, tissus soigneusement sélectionnés, coutures détaillées et finitions décoratives.",
          alt:
            "Processus de rembourrage et de finition de mobilier de luxe",
        },
        {
          number: "04",
          label: "Contrôle Qualité",
          title:
            "Chaque Collection Vérifiée Avant l'Emballage",
          description:
            "Le mobilier terminé est contrôlé visuellement avant l'emballage protecteur et le transport.",
          alt:
            "Contrôle qualité du mobilier de luxe VIRELLAART",
        },
      ],
    },

    flow: {
      eyebrow: "Du Design à la Livraison",
      title: "Un Processus Structuré",
      highlight: "Créé pour Inspirer Confiance",
      steps: [
        {
          number: "01",
          title: "Révision du Design",
          description:
            "Les détails, dimensions, options et exigences du projet sont examinés avant la préparation de la production.",
        },
        {
          number: "02",
          title: "Préparation de la Production",
          description:
            "Les composants structurels, décoratifs et de rembourrage sont préparés selon la collection confirmée.",
        },
        {
          number: "03",
          title: "Artisanat et Finitions",
          description:
            "L'assemblage, les détails décoratifs, le rembourrage et les finitions sont réalisés avec attention.",
        },
        {
          number: "04",
          title: "Inspection et Emballage",
          description:
            "La collection terminée est contrôlée et préparée avec un emballage protecteur adapté au transport.",
        },
      ],
    },

    quality: {
      eyebrow: "Qualité Avant Expédition",
      title: "Chaque Détail Contrôlé",
      highlight: "Avant l'Emballage",
      description:
        "Le mobilier terminé est vérifié avant sa préparation pour l'expédition afin d'identifier les problèmes visibles et de contrôler la présentation de la collection.",
      items: [
        "Contrôle visuel des surfaces décoratives",
        "Inspection du rembourrage et des finitions",
        "Vérification des éléments coordonnés",
        "Préparation de l'emballage protecteur",
      ],
      imageAlt:
        "Inspection du mobilier VIRELLAART avant emballage",
    },

    shipping: {
      eyebrow: "Livraison Internationale",
      title: "Emballage Protecteur et",
      highlight: "Assistance d'Expédition Mondiale",
      paragraphs: [
        "Les collections sont préparées pour le transport avec un emballage protecteur adapté à la forme du produit, aux surfaces et aux détails décoratifs.",
        "Les modalités, délais et coûts de livraison sont examinés selon la collection et la destination.",
      ],
      policyButton:
        "Consulter Notre Politique de Livraison",
      imageAlt:
        "Préparation de l'emballage et de l'expédition VIRELLAART",
    },

    benefits: {
      eyebrow: "Pourquoi VIRELLAART",
      title: "Une Expérience Client",
      highlight: "Guidée par le Fabricant",
      cards: [
        {
          title: "Communication Directe avec le Fabricant",
          description:
            "Communiquez directement avec un fabricant de mobilier de luxe basé à Istanbul.",
        },
        {
          title: "Collections Complètes et Coordonnées",
          description:
            "Collections pour salons, salles à manger, chambres et meubles TV avec une identité cohérente.",
        },
        {
          title: "Assistance de Personnalisation",
          description:
            "Certaines possibilités de personnalisation peuvent être étudiées selon la collection et le projet.",
        },
        {
          title: "Assistance de Livraison Mondiale",
          description:
            "Assistance professionnelle pour l'emballage, le transport et la livraison internationale.",
        },
      ],
    },

    cta: {
      eyebrow: "Résidences Privées et Projets d'Intérieur",
      title: "Vous Recherchez un Fabricant",
      highlight: "pour Votre Intérieur de Luxe ?",
      description:
        "Contactez VIRELLAART pour discuter de la collection, de la personnalisation, de la production et de la livraison internationale.",
      whatsappButton: "Contacter sur WhatsApp",
      collectionsButton: "Découvrir les Collections",
      whatsappMessage:
        "Bonjour VIRELLAART, je souhaite discuter d'un projet de mobilier de luxe.",
    },

    disclosure:
      "Les images de fabrication présentées sur cette page sont représentatives des étapes de production et pourront être complétées par des photographies et vidéos originales.",
  },

  it: {
    seo: {
      title:
        "Produzione di Mobili di Lusso a Istanbul | VIRELLAART",
      description:
        "Scopri la produzione di mobili di lusso VIRELLAART a Istanbul: sviluppo del design, lavorazione decorativa, tappezzeria, controllo qualità, imballaggio protettivo e consegna internazionale.",
    },

    hero: {
      eyebrow: "Produzione VIRELLAART",
      title: "Produzione di Mobili di Lusso",
      highlight: "Da Istanbul al Mondo",
      description:
        "VIRELLAART unisce design, esperienza produttiva, lavorazione dettagliata e servizio internazionale per residenze, ville e progetti d'interni prestigiosi.",
      processButton: "Scopri il Nostro Processo",
      projectButton: "Parla del Tuo Progetto",
      location: "Istanbul, Türkiye",
      manufacturer: "Produttore di Mobili di Lusso",
      imageAlt:
        "Stabilimento di produzione di mobili di lusso VIRELLAART a Istanbul",
      whatsappMessage:
        "Salve VIRELLAART, desidero ricevere informazioni sui vostri servizi di produzione di mobili di lusso.",
    },

    intro: {
      eyebrow: "Produttore Diretto",
      title: "Più di un Rivenditore di Mobili",
      highlight: "Un'Esperienza Guidata dal Produttore",
      lead:
        "VIRELLAART è un produttore di mobili di lusso con sede a Istanbul che sviluppa collezioni complete per residenze, ville e interni privati.",
      paragraphs: [
        "Il nostro lavoro va oltre la presentazione di singoli prodotti. Sviluppiamo collezioni coordinate per soggiorni, sale da pranzo, camere da letto e mobili TV.",
        "Dalla prima richiesta alla preparazione della produzione, al controllo qualità, all'imballaggio e alla consegna internazionale, il nostro team segue il cliente durante tutto il processo.",
      ],
      facts: [
        {
          label: "Sede",
          value: "Istanbul, Türkiye",
        },
        {
          label: "Specializzazione",
          value: "Collezioni di Mobili di Lusso",
        },
        {
          label: "Clientela",
          value: "Clienti Privati e Internazionali",
        },
        {
          label: "Servizio",
          value: "Assistenza per Consegne Internazionali",
        },
      ],
      imageAlt:
        "Progettazione e pianificazione produttiva VIRELLAART",
      imageLabel: "Sviluppo del Design",
      imageCaption:
        "Collezioni progettate per interni di lusso completi",
    },

    process: {
      eyebrow: "Il Nostro Approccio Produttivo",
      title: "La Precisione Dietro",
      highlight: "Ogni Collezione",
      description:
        "Ogni fase contribuisce all'aspetto, al comfort, alla coerenza e alla presentazione finale della collezione.",
      cards: [
        {
          number: "01",
          label: "Sviluppo del Design",
          title:
            "Mobili Progettati per Interni Completi",
          description:
            "Ogni collezione VIRELLAART nasce dallo studio delle proporzioni, della funzione, dell'armonia visiva e della pianificazione coordinata.",
          alt:
            "Sviluppo del design di mobili di lusso VIRELLAART",
        },
        {
          number: "02",
          label: "Lavorazione Decorativa",
          title:
            "Intagli Dettagliati e Forme di Carattere",
          description:
            "Le forme decorative e gli intagli sono sviluppati con attenzione all'equilibrio, alla profondità e al carattere visivo.",
          alt:
            "Intaglio decorativo nella produzione di mobili di lusso",
        },
        {
          number: "03",
          label: "Tappezzeria e Finitura",
          title: "Comfort Curato in Ogni Dettaglio",
          description:
            "La preparazione della tappezzeria combina comfort strutturale, tessuti selezionati, cuciture dettagliate e finiture decorative.",
          alt:
            "Processo di tappezzeria e finitura di mobili di lusso",
        },
        {
          number: "04",
          label: "Controllo Qualità",
          title:
            "Ogni Collezione Controllata Prima dell'Imballaggio",
          description:
            "I mobili completati vengono controllati visivamente prima dell'imballaggio protettivo e del trasporto.",
          alt:
            "Controllo qualità mobili di lusso VIRELLAART",
        },
      ],
    },

    flow: {
      eyebrow: "Dal Design alla Consegna",
      title: "Un Processo Strutturato",
      highlight: "Creato per la Sicurezza",
      steps: [
        {
          number: "01",
          title: "Revisione del Design",
          description:
            "Dettagli, dimensioni, opzioni e requisiti del progetto vengono verificati prima della produzione.",
        },
        {
          number: "02",
          title: "Preparazione della Produzione",
          description:
            "I componenti strutturali, decorativi e di tappezzeria vengono preparati secondo la collezione confermata.",
        },
        {
          number: "03",
          title: "Lavorazione e Finitura",
          description:
            "Assemblaggio, dettagli decorativi, tappezzeria e finiture vengono completati con attenzione.",
        },
        {
          number: "04",
          title: "Ispezione e Imballaggio",
          description:
            "La collezione completata viene controllata e preparata con un imballaggio protettivo.",
        },
      ],
    },

    quality: {
      eyebrow: "Qualità Prima della Spedizione",
      title: "Ogni Dettaglio Controllato",
      highlight: "Prima dell'Imballaggio",
      description:
        "I mobili completati vengono controllati prima della spedizione per individuare problemi visibili e verificare la presentazione coordinata della collezione.",
      items: [
        "Controllo visivo delle superfici decorative",
        "Ispezione della tappezzeria e delle finiture",
        "Controllo degli elementi coordinati",
        "Preparazione dell'imballaggio protettivo",
      ],
      imageAlt:
        "Controllo mobili VIRELLAART prima dell'imballaggio",
    },

    shipping: {
      eyebrow: "Consegna Internazionale",
      title: "Imballaggio Protettivo e",
      highlight: "Supporto per Spedizioni Mondiali",
      paragraphs: [
        "Le collezioni vengono preparate per il trasporto con imballaggi protettivi adatti alla forma, alle superfici e ai dettagli decorativi.",
        "Modalità, tempi e costi di consegna vengono valutati in base alla collezione e alla destinazione.",
      ],
      policyButton:
        "Consulta la Politica di Spedizione",
      imageAlt:
        "Preparazione imballaggio e spedizione VIRELLAART",
    },

    benefits: {
      eyebrow: "Perché VIRELLAART",
      title: "Un'Esperienza Cliente",
      highlight: "Guidata dal Produttore",
      cards: [
        {
          title: "Comunicazione Diretta con il Produttore",
          description:
            "Comunica direttamente con un produttore di mobili di lusso con sede a Istanbul.",
        },
        {
          title: "Collezioni Complete e Coordinate",
          description:
            "Collezioni per soggiorno, sala da pranzo, camera da letto e mobili TV con identità coerente.",
        },
        {
          title: "Supporto alla Personalizzazione",
          description:
            "Alcune possibilità di personalizzazione possono essere valutate secondo la collezione e il progetto.",
        },
        {
          title: "Assistenza per Consegne Internazionali",
          description:
            "Assistenza professionale per imballaggio, trasporto e consegna internazionale.",
        },
      ],
    },

    cta: {
      eyebrow: "Residenze Private e Progetti d'Interni",
      title: "Cerchi un Produttore",
      highlight: "per il Tuo Interno di Lusso?",
      description:
        "Contatta VIRELLAART per discutere collezione, personalizzazione, preparazione della produzione e consegna internazionale.",
      whatsappButton: "Contatta su WhatsApp",
      collectionsButton: "Scopri le Collezioni",
      whatsappMessage:
        "Salve VIRELLAART, desidero discutere un progetto di arredamento di lusso.",
    },

    disclosure:
      "Le immagini di produzione presenti in questa pagina rappresentano le fasi del processo e potranno essere integrate con fotografie e video originali.",
  },

  ru: {
    seo: {
      title:
        "Производство Элитной Мебели в Стамбуле | VIRELLAART",
      description:
        "Узнайте о производстве элитной мебели VIRELLAART в Стамбуле: разработка дизайна, декоративная обработка, обивка, контроль качества, защитная упаковка и международная доставка.",
    },

    hero: {
      eyebrow: "Производство VIRELLAART",
      title: "Производство Элитной Мебели",
      highlight: "Из Стамбула по Всему Миру",
      description:
        "VIRELLAART объединяет дизайн, производственный опыт, детальную ручную работу и международное обслуживание для частных резиденций, вилл и интерьерных проектов.",
      processButton: "Посмотреть Процесс",
      projectButton: "Обсудить Проект",
      location: "Стамбул, Türkiye",
      manufacturer: "Производитель Элитной Мебели",
      imageAlt:
        "Производство элитной мебели VIRELLAART в Стамбуле",
      whatsappMessage:
        "Здравствуйте, VIRELLAART. Я хотел бы получить информацию о производстве элитной мебели.",
    },

    intro: {
      eyebrow: "Прямой Производитель",
      title: "Больше, Чем Продавец Мебели",
      highlight: "Опыт Прямой Работы с Производителем",
      lead:
        "VIRELLAART — производитель элитной мебели в Стамбуле, создающий полные коллекции для частных резиденций, вилл и интерьеров.",
      paragraphs: [
        "Наша работа не ограничивается отдельными изделиями. Мы разрабатываем согласованные коллекции для гостиных, столовых, спален и ТВ-зон.",
        "Наша команда сопровождает клиента от первого запроса и подготовки производства до проверки качества, защитной упаковки и международной доставки.",
      ],
      facts: [
        {
          label: "Расположение",
          value: "Стамбул, Türkiye",
        },
        {
          label: "Специализация",
          value: "Коллекции Элитной Мебели",
        },
        {
          label: "Клиенты",
          value: "Частные и Международные Клиенты",
        },
        {
          label: "Услуга",
          value: "Поддержка Международной Доставки",
        },
      ],
      imageAlt:
        "Проектирование и подготовка производства VIRELLAART",
      imageLabel: "Разработка Дизайна",
      imageCaption:
        "Коллекции для комплексных роскошных интерьеров",
    },

    process: {
      eyebrow: "Наш Подход к Производству",
      title: "Точность в Основе",
      highlight: "Каждой Коллекции",
      description:
        "Каждый этап влияет на внешний вид, комфорт, согласованность и итоговую презентацию коллекции.",
      cards: [
        {
          number: "01",
          label: "Разработка Дизайна",
          title:
            "Мебель для Комплексных Интерьеров",
          description:
            "Каждая коллекция VIRELLAART начинается с пропорций, функциональности, визуальной гармонии и согласованного планирования.",
          alt:
            "Разработка дизайна элитной мебели VIRELLAART",
        },
        {
          number: "02",
          label: "Декоративное Мастерство",
          title:
            "Детальная Резьба и Выразительные Формы",
          description:
            "Декоративные формы и резные элементы создаются с вниманием к балансу, глубине и общему визуальному характеру.",
          alt:
            "Декоративная резьба при производстве элитной мебели",
        },
        {
          number: "03",
          label: "Обивка и Отделка",
          title: "Комфорт в Каждой Детали",
          description:
            "Обивка объединяет конструктивный комфорт, тщательно подобранные ткани, точные швы и декоративную отделку.",
          alt:
            "Обивка и отделка элитной мебели",
        },
        {
          number: "04",
          label: "Контроль Качества",
          title:
            "Проверка Каждой Коллекции Перед Упаковкой",
          description:
            "Готовая мебель проходит визуальный контроль перед защитной упаковкой и транспортировкой.",
          alt:
            "Контроль качества мебели VIRELLAART",
        },
      ],
    },

    flow: {
      eyebrow: "От Дизайна до Доставки",
      title: "Структурированный Процесс",
      highlight: "Созданный для Уверенности",
      steps: [
        {
          number: "01",
          title: "Проверка Дизайна",
          description:
            "Детали, размеры, выбранные опции и требования проекта проверяются до начала производства.",
        },
        {
          number: "02",
          title: "Подготовка Производства",
          description:
            "Конструктивные, декоративные и обивочные элементы подготавливаются в соответствии с коллекцией.",
        },
        {
          number: "03",
          title: "Мастерство и Отделка",
          description:
            "Сборка, декоративные элементы, обивка и отделка выполняются с вниманием к визуальной целостности.",
        },
        {
          number: "04",
          title: "Проверка и Упаковка",
          description:
            "Готовая коллекция проверяется и подготавливается к транспортировке в защитной упаковке.",
        },
      ],
    },

    quality: {
      eyebrow: "Качество Перед Отправкой",
      title: "Каждая Деталь Проверяется",
      highlight: "Перед Упаковкой",
      description:
        "Готовая мебель проверяется перед отправкой, чтобы выявить видимые проблемы и подтвердить согласованную презентацию коллекции.",
      items: [
        "Визуальный контроль декоративных поверхностей",
        "Проверка обивки и отделки",
        "Проверка согласованных элементов коллекции",
        "Подготовка к защитной упаковке",
      ],
      imageAlt:
        "Проверка мебели VIRELLAART перед упаковкой",
    },

    shipping: {
      eyebrow: "Международная Доставка",
      title: "Защитная Упаковка и",
      highlight: "Поддержка Доставки по Всему Миру",
      paragraphs: [
        "Коллекции подготавливаются к транспортировке с защитной упаковкой, выбранной с учетом формы, поверхностей и декоративных деталей.",
        "Условия, сроки и стоимость доставки рассматриваются в зависимости от коллекции и пункта назначения.",
      ],
      policyButton: "Ознакомиться с Условиями Доставки",
      imageAlt:
        "Подготовка упаковки и международной доставки VIRELLAART",
    },

    benefits: {
      eyebrow: "Почему VIRELLAART",
      title: "Клиентский Опыт",
      highlight: "Под Руководством Производителя",
      cards: [
        {
          title: "Прямое Общение с Производителем",
          description:
            "Общайтесь напрямую с производителем элитной мебели в Стамбуле.",
        },
        {
          title: "Полные Согласованные Коллекции",
          description:
            "Коллекции для гостиных, столовых, спален и ТВ-зон с единой дизайнерской концепцией.",
        },
        {
          title: "Поддержка Персонализации",
          description:
            "Возможности персонализации рассматриваются в зависимости от коллекции и проекта.",
        },
        {
          title: "Поддержка Международной Доставки",
          description:
            "Профессиональная помощь с упаковкой, транспортировкой и международной доставкой.",
        },
      ],
    },

    cta: {
      eyebrow: "Частные Резиденции и Интерьерные Проекты",
      title: "Ищете Производителя",
      highlight: "для Роскошного Интерьера?",
      description:
        "Свяжитесь с VIRELLAART, чтобы обсудить коллекцию, персонализацию, производство и международную доставку.",
      whatsappButton: "Связаться через WhatsApp",
      collectionsButton: "Посмотреть Коллекции",
      whatsappMessage:
        "Здравствуйте, VIRELLAART. Я хотел бы обсудить проект элитной мебели.",
    },

    disclosure:
      "Изображения производства на этой странице являются представительными и в дальнейшем могут быть дополнены оригинальными фотографиями и видео.",
  },

  ar: {
    seo: {
      title:
        "تصنيع الأثاث الفاخر في إسطنبول | VIRELLAART",
      description:
        "اكتشف عملية تصنيع الأثاث الفاخر لدى VIRELLAART في إسطنبول، من تطوير التصميم والحرفية والزخرفة والتنجيد إلى فحص الجودة والتغليف والشحن الدولي.",
    },

    hero: {
      eyebrow: "تصنيع VIRELLAART",
      title: "تصنيع الأثاث الفاخر",
      highlight: "من إسطنبول إلى العالم",
      description:
        "تجمع VIRELLAART بين تصميم الأثاث والخبرة الإنتاجية والحرفية الدقيقة والخدمة الدولية للمساكن والفلل والمشاريع الداخلية المتميزة.",
      processButton: "اكتشف مراحل الإنتاج",
      projectButton: "ناقش مشروعك",
      location: "إسطنبول، Türkiye",
      manufacturer: "مصنّع أثاث فاخر",
      imageAlt:
        "منشأة تصنيع الأثاث الفاخر VIRELLAART في إسطنبول",
      whatsappMessage:
        "مرحباً VIRELLAART، أود الحصول على معلومات حول خدمات تصنيع الأثاث الفاخر.",
    },

    intro: {
      eyebrow: "مصنّع مباشر",
      title: "أكثر من مجرد بائع أثاث",
      highlight: "تجربة يقودها المصنّع",
      lead:
        "VIRELLAART مصنّع أثاث فاخر مقره إسطنبول، يطوّر مجموعات متكاملة للمساكن والفلل والتصاميم الداخلية الخاصة.",
      paragraphs: [
        "لا يقتصر عملنا على عرض المنتجات الفردية، بل نطوّر مجموعات متناسقة لغرف المعيشة والطعام والنوم ووحدات التلفاز.",
        "يدعم فريقنا العملاء من الاستفسار الأول وحتى تجهيز الإنتاج وفحص الجودة والتغليف الواقي والتخطيط للتوصيل الدولي.",
      ],
      facts: [
        {
          label: "المقر",
          value: "إسطنبول، Türkiye",
        },
        {
          label: "التخصص",
          value: "مجموعات الأثاث الفاخر",
        },
        {
          label: "العملاء",
          value: "عملاء خاصون ودوليون",
        },
        {
          label: "الخدمة",
          value: "دعم التوصيل إلى مختلف دول العالم",
        },
      ],
      imageAlt:
        "تصميم وتخطيط إنتاج الأثاث الفاخر VIRELLAART",
      imageLabel: "تطوير التصميم",
      imageCaption:
        "مجموعات مخططة لتصاميم داخلية فاخرة متكاملة",
    },

    process: {
      eyebrow: "منهج التصنيع لدينا",
      title: "الدقة خلف",
      highlight: "كل مجموعة",
      description:
        "تسهم كل مرحلة في المظهر والراحة والتناسق والعرض النهائي لمجموعة الأثاث.",
      cards: [
        {
          number: "01",
          label: "تطوير التصميم",
          title:
            "أثاث مصمم للمساحات الداخلية المتكاملة",
          description:
            "تبدأ كل مجموعة VIRELLAART بدراسة التناسب والوظيفة والتناغم البصري والتخطيط المتناسق للمنتجات.",
          alt:
            "تطوير تصميم الأثاث الفاخر VIRELLAART",
        },
        {
          number: "02",
          label: "الحرفية الزخرفية",
          title:
            "نقوش تفصيلية وأشكال ذات حضور مميز",
          description:
            "تُطوّر العناصر الزخرفية والنقوش بعناية لتحقيق التوازن والعمق والطابع البصري المتكامل.",
          alt:
            "أعمال النحت الزخرفي أثناء تصنيع الأثاث الفاخر",
        },
        {
          number: "03",
          label: "التنجيد والتشطيب",
          title: "راحة مصقولة في كل تفصيل",
          description:
            "يجمع التنجيد بين الراحة الهيكلية والأقمشة المختارة والخياطة الدقيقة والتشطيبات الزخرفية.",
          alt:
            "عملية تنجيد وتشطيب الأثاث الفاخر",
        },
        {
          number: "04",
          label: "فحص الجودة",
          title:
            "مراجعة كل مجموعة قبل التغليف",
          description:
            "يتم فحص الأثاث المكتمل بصرياً قبل التغليف الواقي والنقل.",
          alt:
            "فحص جودة الأثاث الفاخر VIRELLAART",
        },
      ],
    },

    flow: {
      eyebrow: "من التصميم إلى التسليم",
      title: "عملية منظمة",
      highlight: "مصممة لتعزيز الثقة",
      steps: [
        {
          number: "01",
          title: "مراجعة التصميم",
          description:
            "تتم مراجعة التفاصيل والمقاسات والخيارات ومتطلبات المشروع قبل تجهيز الإنتاج.",
        },
        {
          number: "02",
          title: "تجهيز الإنتاج",
          description:
            "يتم إعداد المكونات الهيكلية والزخرفية ومكونات التنجيد وفق المجموعة المؤكدة.",
        },
        {
          number: "03",
          title: "الحرفية والتشطيب",
          description:
            "يتم استكمال التجميع والتفاصيل الزخرفية والتنجيد والتشطيبات بعناية.",
        },
        {
          number: "04",
          title: "الفحص والتغليف",
          description:
            "تتم مراجعة المجموعة وتجهيزها بتغليف واقٍ مناسب للنقل.",
        },
      ],
    },

    quality: {
      eyebrow: "الجودة قبل الشحن",
      title: "فحص كل تفصيل",
      highlight: "قبل التغليف",
      description:
        "يتم فحص الأثاث المكتمل قبل الشحن لتحديد المشكلات المرئية والتحقق من تناسق المجموعة.",
      items: [
        "المراجعة البصرية للأسطح الزخرفية",
        "فحص التنجيد وتفاصيل التشطيب",
        "مراجعة القطع المتناسقة في المجموعة",
        "التجهيز للتغليف الواقي",
      ],
      imageAlt:
        "فحص أثاث VIRELLAART قبل التغليف",
    },

    shipping: {
      eyebrow: "التوصيل الدولي",
      title: "التغليف الواقي و",
      highlight: "دعم الشحن إلى مختلف دول العالم",
      paragraphs: [
        "يتم تجهيز المجموعات للنقل باستخدام تغليف واقٍ مناسب لشكل المنتج والأسطح والتفاصيل الزخرفية.",
        "تتم مراجعة ترتيبات الشحن والمدة والتكاليف وفق المجموعة المختارة ووجهة التسليم.",
      ],
      policyButton: "مراجعة سياسة الشحن",
      imageAlt:
        "تجهيز تغليف وشحن أثاث VIRELLAART",
    },

    benefits: {
      eyebrow: "لماذا VIRELLAART",
      title: "تجربة عميل",
      highlight: "يقودها المصنّع",
      cards: [
        {
          title: "تواصل مباشر مع المصنّع",
          description:
            "تواصل مباشرة مع مصنّع أثاث فاخر مقره إسطنبول.",
        },
        {
          title: "مجموعات متكاملة ومتناسقة",
          description:
            "مجموعات لغرف المعيشة والطعام والنوم ووحدات التلفاز بهوية تصميم متناسقة.",
        },
        {
          title: "دعم التخصيص",
          description:
            "يمكن مراجعة خيارات التخصيص المختارة وفق المجموعة ومتطلبات المشروع.",
        },
        {
          title: "دعم التوصيل الدولي",
          description:
            "مساعدة احترافية في التغليف والنقل والتوصيل الدولي.",
        },
      ],
    },

    cta: {
      eyebrow: "المساكن الخاصة والمشاريع الداخلية",
      title: "هل تبحث عن مصنّع",
      highlight: "لمشروعك الداخلي الفاخر؟",
      description:
        "تواصل مع VIRELLAART لمناقشة اختيار المجموعة والتخصيص وتجهيز الإنتاج والتوصيل الدولي.",
      whatsappButton: "تواصل عبر واتساب",
      collectionsButton: "اكتشف المجموعات",
      whatsappMessage:
        "مرحباً VIRELLAART، أود مناقشة مشروع أثاث فاخر.",
    },

    disclosure:
      "صور التصنيع في هذه الصفحة تمثيلية لمراحل الإنتاج ويمكن استكمالها لاحقاً بصور ومقاطع فيديو أصلية إضافية.",
  },

  de: {
    seo: {
      title:
        "Luxusmöbelherstellung in Istanbul | VIRELLAART",
      description:
        "Entdecken Sie die Luxusmöbelherstellung von VIRELLAART in Istanbul – von Designentwicklung und dekorativer Handwerkskunst über Polsterung und Qualitätskontrolle bis zu Schutzverpackung und internationaler Lieferung.",
    },

    hero: {
      eyebrow: "VIRELLAART Fertigung",
      title: "Luxusmöbelherstellung",
      highlight: "Von Istanbul in die Welt",
      description:
        "VIRELLAART verbindet Möbeldesign, Fertigungskompetenz, präzise Handwerkskunst und internationalen Service für exklusive Residenzen, Villen und anspruchsvolle Interior-Projekte weltweit.",
      processButton: "Unseren Prozess entdecken",
      projectButton: "Projekt besprechen",
      location: "Istanbul, Türkiye",
      manufacturer: "Hersteller von Luxusmöbeln",
      imageAlt:
        "VIRELLAART Luxusmöbelfertigung in Istanbul",
      whatsappMessage:
        "Hallo VIRELLAART, ich möchte Informationen über Ihre Luxusmöbelherstellung erhalten.",
    },

    intro: {
      eyebrow: "Direkter Hersteller",
      title: "Mehr als ein Möbelanbieter",
      highlight: "Eine herstellergeführte Erfahrung",
      lead:
        "VIRELLAART ist ein in Istanbul ansässiger Hersteller von Luxusmöbeln und entwickelt vollständige Kollektionen für anspruchsvolle Residenzen, Villen und private Interieurs.",
      paragraphs: [
        "Unsere Arbeit geht über die Präsentation einzelner Produkte hinaus. Wir entwickeln aufeinander abgestimmte Kollektionen für Wohnzimmer, Esszimmer, Schlafzimmer und TV-Möbel mit einer konsistenten Designsprache.",
        "Von der ersten Produktanfrage über die Produktionsvorbereitung und Qualitätsprüfung bis zur Schutzverpackung und Planung der internationalen Lieferung begleitet unser Team den gesamten Prozess.",
      ],
      facts: [
        {
          label: "Standort",
          value: "Istanbul, Türkiye",
        },
        {
          label: "Spezialisierung",
          value: "Luxusmöbelkollektionen",
        },
        {
          label: "Kundenprofil",
          value: "Private und internationale Kunden",
        },
        {
          label: "Service",
          value: "Unterstützung bei weltweiter Lieferung",
        },
      ],
      imageAlt:
        "VIRELLAART Design- und Produktionsplanung für Luxusmöbel",
      imageLabel: "Designentwicklung",
      imageCaption:
        "Kollektionen für vollständig abgestimmte Luxusinterieurs",
    },

    process: {
      eyebrow: "Unser Fertigungsansatz",
      title: "Präzision hinter",
      highlight: "jeder Kollektion",
      description:
        "Jede Phase trägt zur Optik, zum Komfort, zur Konsistenz und zur finalen Präsentation der fertigen Möbelkollektion bei.",
      cards: [
        {
          number: "01",
          label: "Designentwicklung",
          title:
            "Möbel für vollständig abgestimmte Interieurs",
          description:
            "Jede VIRELLAART Kollektion beginnt mit Proportion, Funktion, visueller Harmonie und koordinierter Produktplanung. Unser Designansatz konzentriert sich auf vollständige Wohnzimmer-, Esszimmer-, Schlafzimmer- und TV-Möbelkollektionen für anspruchsvolle Interieurs.",
          alt:
            "VIRELLAART Entwicklung von Luxusmöbeldesign in Istanbul",
        },
        {
          number: "02",
          label: "Dekorative Handwerkskunst",
          title:
            "Detailreiche Verzierungen und ausdrucksstarke Formen",
          description:
            "Dekorative Formen und ausgearbeitete Details entstehen mit besonderem Augenmerk auf Balance, Tiefe und den gesamten visuellen Charakter. Jedes Element wird als Teil der vollständigen Möbelkollektion betrachtet.",
          alt:
            "Dekorative Detailarbeit bei der Herstellung von Luxusmöbeln",
        },
        {
          number: "03",
          label: "Polsterung und Veredelung",
          title:
            "Komfort bis ins Detail verfeinert",
          description:
            "Die Polsterung verbindet konstruktiven Komfort, sorgfältig ausgewählte Stoffe, präzise Nähte und dekorative Veredelungen passend zum Charakter der jeweiligen Kollektion.",
          alt:
            "Polsterung und Veredelung von Luxusmöbeln",
        },
        {
          number: "04",
          label: "Qualitätskontrolle",
          title:
            "Jede Kollektion wird vor der Verpackung geprüft",
          description:
            "Fertiggestellte Möbel werden vor der Schutzverpackung visuell geprüft. Dekorative Oberflächen, Polsterung, aufeinander abgestimmte Elemente und die Gesamtpräsentation werden vor dem Transport kontrolliert.",
          alt:
            "VIRELLAART Qualitätskontrolle für Luxusmöbel",
        },
      ],
    },

    flow: {
      eyebrow: "Vom Design bis zur Lieferung",
      title: "Ein strukturierter Prozess",
      highlight: "für mehr Sicherheit",
      steps: [
        {
          number: "01",
          title: "Designprüfung",
          description:
            "Details der Kollektion, Abmessungen, ausgewählte Optionen und Projektanforderungen werden vor der Produktionsvorbereitung geprüft.",
        },
        {
          number: "02",
          title: "Produktionsvorbereitung",
          description:
            "Konstruktive, dekorative und gepolsterte Komponenten werden entsprechend der bestätigten Möbelkollektion vorbereitet.",
        },
        {
          number: "03",
          title: "Handwerkskunst und Veredelung",
          description:
            "Montage, dekorative Details, Polsterung und Veredelung werden mit besonderem Augenmerk auf eine konsistente Gesamtwirkung ausgeführt.",
        },
        {
          number: "04",
          title: "Prüfung und Verpackung",
          description:
            "Die fertige Kollektion wird geprüft und mit einer für den Transport geeigneten Schutzverpackung vorbereitet.",
        },
      ],
    },

    quality: {
      eyebrow: "Qualität vor dem Versand",
      title: "Jedes Detail geprüft",
      highlight: "vor der Verpackung",
      description:
        "Fertiggestellte Möbel werden vor dem Versand geprüft. Ziel ist es, sichtbare Probleme zu erkennen und die abgestimmte Präsentation der Kollektion vor der Schutzverpackung zu kontrollieren.",
      items: [
        "Visuelle Prüfung dekorativer Oberflächen",
        "Kontrolle von Polsterung und Veredelungsdetails",
        "Prüfung der aufeinander abgestimmten Kollektionselemente",
        "Vorbereitung für die Schutzverpackung",
      ],
      imageAlt:
        "VIRELLAART Möbelprüfung vor der Schutzverpackung",
    },

    shipping: {
      eyebrow: "Internationale Lieferung",
      title: "Schutzverpackung und",
      highlight: "Unterstützung beim weltweiten Versand",
      paragraphs: [
        "Möbelkollektionen werden mit einer Schutzverpackung für den Transport vorbereitet, die auf Produktform, fertige Oberflächen und dekorative Details abgestimmt ist.",
        "Versandbedingungen, Lieferzeiten und Kosten werden entsprechend der ausgewählten Kollektion und dem jeweiligen Zielort geprüft.",
      ],
      policyButton: "Versandrichtlinie ansehen",
      imageAlt:
        "VIRELLAART Schutzverpackung und Versandvorbereitung für Möbel",
    },

    benefits: {
      eyebrow: "Warum VIRELLAART",
      title: "Eine vom Hersteller geprägte",
      highlight: "Kundenerfahrung",
      cards: [
        {
          title: "Direkte Kommunikation mit dem Hersteller",
          description:
            "Kommunizieren Sie während der Auswahl der Kollektion und der Bestellvorbereitung direkt mit einem in Istanbul ansässigen Hersteller von Luxusmöbeln.",
        },
        {
          title: "Vollständig abgestimmte Kollektionen",
          description:
            "Wohnzimmer-, Esszimmer-, Schlafzimmer- und TV-Möbelkollektionen mit einer konsistenten Designidentität.",
        },
        {
          title: "Unterstützung bei Individualisierungen",
          description:
            "Ausgewählte Anpassungsmöglichkeiten können entsprechend der Kollektion und den Anforderungen des Projekts geprüft werden.",
        },
        {
          title: "Unterstützung bei weltweiter Lieferung",
          description:
            "Professionelle Unterstützung bei Schutzverpackung, Transportplanung und internationaler Lieferung.",
        },
      ],
    },

    cta: {
      eyebrow:
        "Private Residenzen und Interior-Projekte",
      title: "Suchen Sie einen Hersteller",
      highlight: "für Ihr Luxusinterieur?",
      description:
        "Kontaktieren Sie VIRELLAART, um Kollektion, Individualisierung, Produktionsvorbereitung und internationale Lieferung zu besprechen.",
      whatsappButton: "Über WhatsApp kontaktieren",
      collectionsButton: "Kollektionen entdecken",
      whatsappMessage:
        "Hallo VIRELLAART, ich möchte ein Luxusmöbelprojekt besprechen.",
    },

    disclosure:
      "VIRELLAART entwirft und fertigt Luxusmöbel in Türkiye und koordiniert Qualitätskontrolle, Individualisierung und internationale Lieferung für jede Bestellung.",
  },

  ro: {
    seo: {
      title:
        "Producție de Mobilier de Lux în Istanbul | VIRELLAART",
      description:
        "Descoperiți producția de mobilier de lux VIRELLAART în Istanbul: dezvoltare de design, măiestrie decorativă, tapițerie, controlul calității, ambalare protectoare și livrare internațională.",
    },

    hero: {
      eyebrow: "Producție VIRELLAART",
      title: "Producție de Mobilier de Lux",
      highlight: "Din Istanbul către Lume",
      description:
        "VIRELLAART reunește designul, experiența în producție, măiestria detaliată și serviciile internaționale pentru reședințe, vile și proiecte de interior remarcabile.",
      processButton: "Descoperiți Procesul",
      projectButton: "Discutați Proiectul",
      location: "Istanbul, Türkiye",
      manufacturer: "Producător de Mobilier de Lux",
      imageAlt:
        "Unitate de producție mobilier de lux VIRELLAART în Istanbul",
      whatsappMessage:
        "Bună ziua VIRELLAART, doresc informații despre serviciile de producție a mobilierului de lux.",
    },

    intro: {
      eyebrow: "Producător Direct",
      title: "Mai Mult Decât un Vânzător de Mobilier",
      highlight: "O Experiență Condusă de Producător",
      lead:
        "VIRELLAART este un producător de mobilier de lux din Istanbul care dezvoltă colecții complete pentru reședințe, vile și interioare private.",
      paragraphs: [
        "Activitatea noastră depășește prezentarea produselor individuale. Dezvoltăm colecții coordonate pentru sufragerie, sala de mese, dormitor și unități TV.",
        "Echipa noastră asistă clienții de la prima solicitare până la pregătirea producției, verificarea calității, ambalarea și livrarea internațională.",
      ],
      facts: [
        {
          label: "Sediu",
          value: "Istanbul, Türkiye",
        },
        {
          label: "Specializare",
          value: "Colecții de Mobilier de Lux",
        },
        {
          label: "Clienți",
          value: "Clienți Privați și Internaționali",
        },
        {
          label: "Serviciu",
          value: "Asistență pentru Livrare Mondială",
        },
      ],
      imageAlt:
        "Design și planificarea producției VIRELLAART",
      imageLabel: "Dezvoltarea Designului",
      imageCaption:
        "Colecții planificate pentru interioare de lux complete",
    },

    process: {
      eyebrow: "Abordarea Noastră de Producție",
      title: "Precizia din Spatele",
      highlight: "Fiecărei Colecții",
      description:
        "Fiecare etapă contribuie la aspectul, confortul, coerența și prezentarea finală a colecției.",
      cards: [
        {
          number: "01",
          label: "Dezvoltarea Designului",
          title:
            "Mobilier Proiectat pentru Interioare Complete",
          description:
            "Fiecare colecție VIRELLAART începe cu proporția, funcția, armonia vizuală și planificarea coordonată.",
          alt:
            "Dezvoltarea designului mobilierului de lux VIRELLAART",
        },
        {
          number: "02",
          label: "Măiestrie Decorativă",
          title:
            "Sculpturi Detaliate și Forme Expresive",
          description:
            "Formele decorative și detaliile sculptate sunt dezvoltate cu atenție la echilibru, profunzime și caracter.",
          alt:
            "Sculptură decorativă în producția mobilierului de lux",
        },
        {
          number: "03",
          label: "Tapițerie și Finisare",
          title: "Confort Rafinat în Fiecare Detaliu",
          description:
            "Tapițeria combină confortul structural, materialele selectate, cusăturile detaliate și finisajele decorative.",
          alt:
            "Proces de tapițerie și finisare a mobilierului de lux",
        },
        {
          number: "04",
          label: "Controlul Calității",
          title:
            "Fiecare Colecție Verificată Înainte de Ambalare",
          description:
            "Mobilierul finalizat este verificat vizual înainte de ambalarea protectoare și transport.",
          alt:
            "Controlul calității mobilierului VIRELLAART",
        },
      ],
    },

    flow: {
      eyebrow: "De la Design la Livrare",
      title: "Un Proces Structurat",
      highlight: "Creat pentru Încredere",
      steps: [
        {
          number: "01",
          title: "Revizuirea Designului",
          description:
            "Detaliile, dimensiunile, opțiunile și cerințele proiectului sunt revizuite înainte de producție.",
        },
        {
          number: "02",
          title: "Pregătirea Producției",
          description:
            "Componentele structurale, decorative și de tapițerie sunt pregătite conform colecției confirmate.",
        },
        {
          number: "03",
          title: "Măiestrie și Finisare",
          description:
            "Asamblarea, detaliile decorative, tapițeria și finisajele sunt realizate cu atenție.",
        },
        {
          number: "04",
          title: "Inspecție și Ambalare",
          description:
            "Colecția finalizată este verificată și pregătită cu ambalaj protector pentru transport.",
        },
      ],
    },

    quality: {
      eyebrow: "Calitate Înainte de Expediere",
      title: "Fiecare Detaliu Verificat",
      highlight: "Înainte de Ambalare",
      description:
        "Mobilierul finalizat este verificat înainte de expediere pentru identificarea problemelor vizibile și confirmarea prezentării colecției.",
      items: [
        "Verificarea vizuală a suprafețelor decorative",
        "Inspecția tapițeriei și finisajelor",
        "Verificarea pieselor coordonate",
        "Pregătirea ambalajului protector",
      ],
      imageAlt:
        "Verificarea mobilierului VIRELLAART înainte de ambalare",
    },

    shipping: {
      eyebrow: "Livrare Internațională",
      title: "Ambalare Protectoare și",
      highlight: "Asistență pentru Livrare Mondială",
      paragraphs: [
        "Colecțiile sunt pregătite pentru transport cu ambalaje protectoare potrivite formei, suprafețelor și detaliilor decorative.",
        "Condițiile, perioadele și costurile de livrare sunt evaluate în funcție de colecție și destinație.",
      ],
      policyButton: "Consultați Politica de Livrare",
      imageAlt:
        "Pregătirea ambalării și livrării VIRELLAART",
    },

    benefits: {
      eyebrow: "De Ce VIRELLAART",
      title: "O Experiență a Clientului",
      highlight: "Condusă de Producător",
      cards: [
        {
          title: "Comunicare Directă cu Producătorul",
          description:
            "Comunicați direct cu un producător de mobilier de lux din Istanbul.",
        },
        {
          title: "Colecții Complete și Coordonate",
          description:
            "Colecții pentru sufragerie, sala de mese, dormitor și unități TV, cu o identitate de design coerentă.",
        },
        {
          title: "Asistență pentru Personalizare",
          description:
            "Opțiunile selectate de personalizare pot fi evaluate conform colecției și proiectului.",
        },
        {
          title: "Asistență pentru Livrare Internațională",
          description:
            "Asistență profesională pentru ambalare, transport și livrare internațională.",
        },
      ],
    },

    cta: {
      eyebrow: "Reședințe Private și Proiecte de Interior",
      title: "Căutați un Producător",
      highlight: "pentru Interiorul Dumneavoastră de Lux?",
      description:
        "Contactați VIRELLAART pentru a discuta selecția colecției, personalizarea, producția și livrarea internațională.",
      whatsappButton: "Contactați pe WhatsApp",
      collectionsButton: "Descoperiți Colecțiile",
      whatsappMessage:
        "Bună ziua VIRELLAART, doresc să discut un proiect de mobilier de lux.",
    },

    disclosure:
      "Imaginile de producție de pe această pagină sunt reprezentative pentru etapele procesului și pot fi completate ulterior cu fotografii și videoclipuri originale.",
  },
};

const manufacturingSeoContent: Record<
  string,
  ManufacturingContent["seo"]
> = {
  "en": {
    "title": "Luxury Furniture Manufacturing in Istanbul | VIRELLAART",
    "description": "Explore VIRELLAART luxury furniture manufacturing in Istanbul, from design and upholstery to quality control, protective packaging and worldwide delivery."
  },
  "tr": {
    "title": "İstanbul Lüks Mobilya Üretimi | VIRELLAART",
    "description": "VIRELLAART İstanbul lüks mobilya üretimini keşfedin: tasarım geliştirme, dekoratif işçilik, döşeme, kalite kontrol, koruyucu paketleme ve uluslararası teslimat."
  },
  "fr": {
    "title": "Fabrication de Mobilier de Luxe à Istanbul | VIRELLAART",
    "description": "Découvrez la fabrication de mobilier de luxe VIRELLAART à Istanbul : conception, finitions, rembourrage, qualité, emballage et livraison internationale."
  },
  "it": {
    "title": "Produzione di Mobili di Lusso a Istanbul | VIRELLAART",
    "description": "Scopri la produzione di mobili di lusso VIRELLAART a Istanbul: design, finiture, tappezzeria, controllo qualità, imballaggio e consegna internazionale."
  },
  "ru": {
    "title": "Производство Элитной Мебели в Стамбуле | VIRELLAART",
    "description": "Узнайте о производстве элитной мебели VIRELLAART в Стамбуле: дизайн, декоративная отделка, обивка, контроль качества, упаковка и международная доставка."
  },
  "ar": {
    "title": "تصنيع الأثاث الفاخر في إسطنبول | VIRELLAART",
    "description": "اكتشف تصنيع الأثاث الفاخر لدى VIRELLAART في إسطنبول، من تطوير التصميم والتفاصيل الزخرفية والتنجيد إلى فحص الجودة والتغليف والتوصيل الدولي."
  },
  "ro": {
    "title": "Producție de Mobilier de Lux în Istanbul | VIRELLAART",
    "description": "Descoperiți producția de mobilier de lux VIRELLAART în Istanbul: design, detalii decorative, tapițerie, controlul calității, ambalare și livrare internațională."
  },
  "de": {
    "title": "Luxusmöbelherstellung in Istanbul | VIRELLAART",
    "description": "Entdecken Sie die Luxusmöbelherstellung von VIRELLAART in Istanbul: Design, Verarbeitung, Polsterung, Qualitätskontrolle, Verpackung und weltweite Lieferung."
  },
  "bg": {
    "title": "Производство на Луксозни Мебели в Истанбул | VIRELLAART",
    "description": "Открийте производството на луксозни мебели VIRELLAART в Истанбул: дизайн, декорация, тапицерия, контрол на качеството, опаковане и международна доставка."
  },
  "el": {
    "title": "Κατασκευή Πολυτελών Επίπλων στην Κωνσταντινούπολη | VIRELLAART",
    "description": "Ανακαλύψτε την κατασκευή πολυτελών επίπλων VIRELLAART στην Κωνσταντινούπολη: σχεδιασμός, ταπετσαρία, έλεγχος ποιότητας, συσκευασία και διεθνής παράδοση."
  },
  "es": {
    "title": "Fabricación de Muebles de Lujo en Estambul | VIRELLAART",
    "description": "Descubra la fabricación de muebles de lujo VIRELLAART en Estambul: diseño, acabados, tapicería, control de calidad, embalaje y entrega internacional."
  },
  "kk": {
    "title": "Стамбұлдағы Сәнді Жиһаз Өндірісі | VIRELLAART",
    "description": "Стамбұлдағы VIRELLAART сәнді жиһаз өндірісін таныңыз: дизайн әзірлеу, сәндік өңдеу, қаптау, сапаны бақылау, қорғаныш орау және халықаралық жеткізу."
  },
  "pl": {
    "title": "Produkcja Luksusowych Mebli w Stambule | VIRELLAART",
    "description": "Poznaj produkcję luksusowych mebli VIRELLAART w Stambule: projektowanie, wykończenia, tapicerowanie, kontrola jakości, pakowanie i dostawa międzynarodowa."
  },
  "pt": {
    "title": "Fabricação de Móveis de Luxo em Istambul | VIRELLAART",
    "description": "Descubra a fabricação de móveis de luxo VIRELLAART em Istambul: design, acabamentos, estofamento, controle de qualidade, embalagem e entrega internacional."
  },
  "sr": {
    "title": "Производња Луксузног Намештаја у Истанбулу | VIRELLAART",
    "description": "Откријте производњу луксузног намештаја VIRELLAART у Истанбулу: дизајн, декоративна обрада, тапацирање, контрола квалитета, паковање и међународна испорука."
  },
  "uz": {
    "title": "Istanbulda Hashamatli Mebel Ishlab Chiqarish | VIRELLAART",
    "description": "Istanbuldagi VIRELLAART hashamatli mebel ishlab chiqarishini kashf eting: dizayn, bezak, qoplama, sifat nazorati, qadoqlash va xalqaro yetkazib berish."
  }
};

export function getManufacturingContent(
  language: string,
): ManufacturingContent {
  const baseContent =
    manufacturingContent[language] ??
    manufacturingContent.en;

  return {
    ...baseContent,
    seo:
      manufacturingSeoContent[language] ??
      manufacturingSeoContent.en,
  };
}
