from pathlib import Path


def replace_required(path: str, replacements: list[tuple[str, str]]) -> None:
    file = Path(path)
    text = file.read_text(encoding="utf-8-sig")
    original = text

    for old, new in replacements:
        if old not in text:
            raise SystemExit(f"Required text not found in {path}: {old}")
        text = text.replace(old, new)

    file.write_text(text, encoding="utf-8")
    print(f"UPDATED {path}: {len(replacements)} replacements")


def replace_optional(path: str, replacements: list[tuple[str, str]]) -> None:
    file = Path(path)
    text = file.read_text(encoding="utf-8-sig")
    changed = 0

    for old, new in replacements:
        if old in text:
            text = text.replace(old, new)
            changed += 1

    file.write_text(text, encoding="utf-8")
    print(f"UPDATED {path}: {changed} optional replacements")


replace_required(
    "src/pages/about.astro",
    [
        (
            "About VIRELLAART | Luxury Furniture Manufacturer",
            "About VIRELLAART | Luxury Furniture Brand",
        ),
        (
            "Discover VIRELLAART, an Istanbul-based luxury furniture manufacturer combining design expertise, detailed craftsmanship, quality control and worldwide delivery support.",
            "Discover VIRELLAART, an Istanbul-based luxury furniture brand coordinating design, made-to-order production with independent manufacturing partners, quality review and worldwide delivery support.",
        ),
        (
            "A Manufacturer Rooted in Experience, Focused on Excellence",
            "A Furniture Brand Rooted in Experience, Focused on Excellence",
        ),
        (
            "Our manufacturer-led approach connects design development, production planning, craftsmanship, quality control and international customer service within one coordinated process.",
            "Our coordinated approach connects collection planning, independent manufacturing partners, quality review and international customer service within one managed process.",
        ),
        (
            "A Manufacturer-Led Customer Experience",
            "A Coordinated Customer Experience",
        ),
        (
            "Manufacturer-Direct Communication",
            "Direct VIRELLAART Communication",
        ),
        (
            "VIRELLAART designs and manufactures luxury furniture in Türkiye for residential and commercial interiors worldwide.",
            "VIRELLAART is a luxury furniture brand coordinating made-to-order collections produced in Türkiye by independent manufacturing partners for residential and commercial interiors worldwide.",
        ),
        (
            "Illustrative VIRELLAART luxury furniture manufacturing facility",
            "Illustrative luxury furniture production environment in Türkiye",
        ),
        (
            "VIRELLAART Hakkında | Lüks Mobilya Üreticisi",
            "VIRELLAART Hakkında | Lüks Mobilya Markası",
        ),
        (
            "İstanbul merkezli lüks mobilya üreticisi VIRELLAART'ı; tasarım uzmanlığı, detaylı işçilik, kalite kontrol ve dünya çapında teslimat desteğiyle keşfedin.",
            "İstanbul merkezli lüks mobilya markası VIRELLAART'ı; koleksiyon planlama, bağımsız üretim ortaklarıyla üretim koordinasyonu, kalite incelemesi ve dünya çapında teslimat desteğiyle keşfedin.",
        ),
        (
            "Deneyime Dayanan, Mükemmelliğe Odaklanan Bir Üretici",
            "Deneyime Dayanan, Mükemmelliğe Odaklanan Bir Mobilya Markası",
        ),
        (
            "Üretici odaklı yaklaşımımız; tasarım geliştirme, üretim planlama, işçilik, kalite kontrol ve uluslararası müşteri hizmetlerini koordineli bir süreçte birleştirir.",
            "Koordineli yaklaşımımız; koleksiyon planlama, bağımsız üretim ortakları, kalite incelemesi ve uluslararası müşteri hizmetlerini tek süreçte birleştirir.",
        ),
        (
            "Üretici Odaklı Müşteri Deneyimi",
            "Koordineli Müşteri Deneyimi",
        ),
        (
            "Üreticiyle Doğrudan İletişim",
            "VIRELLAART ile Doğrudan İletişim",
        ),
        (
            "VIRELLAART, konut ve ticari projeler için lüks mobilyalarını Türkiye'de tasarlar ve üretir.",
            "VIRELLAART, konut ve ticari projeler için bağımsız üretim ortakları tarafından Türkiye'de üretilen lüks mobilya koleksiyonlarını koordine eder.",
        ),
    ],
)

# The same SEO title/description appears again in the localized SEO map.
replace_optional(
    "src/pages/about.astro",
    [
        (
            "Discover VIRELLAART, an Istanbul-based luxury furniture manufacturer combining design expertise, refined craftsmanship, quality control and worldwide delivery.",
            "Discover VIRELLAART, an Istanbul-based luxury furniture brand coordinating refined collections, production with independent manufacturing partners, quality review and worldwide delivery.",
        ),
    ],
)

replace_required(
    "src/i18n/manufacturing.ts",
    [
        (
            "Luxury Furniture Manufacturing in Istanbul | VIRELLAART",
            "Luxury Furniture Production & Coordination | VIRELLAART",
        ),
        (
            "Discover VIRELLAART luxury furniture manufacturing in Istanbul, including design development, decorative craftsmanship, upholstery, quality control, protective packaging and worldwide delivery.",
            "Discover how VIRELLAART coordinates luxury furniture production in Türkiye with independent manufacturing partners, including collection planning, craftsmanship, quality review, protective packaging and worldwide delivery.",
        ),
        ("VIRELLAART Manufacturing", "VIRELLAART Production"),
        ("Luxury Furniture Manufacturing", "Luxury Furniture Production & Coordination"),
        (
            "VIRELLAART brings furniture design, production expertise, detailed craftsmanship and international service together for luxury residences, villas and distinguished interior projects worldwide.",
            "VIRELLAART coordinates furniture design, made-to-order production with independent manufacturing partners and international service for luxury residences, villas and distinguished interior projects worldwide.",
        ),
        ("Luxury Furniture Manufacturer", "Luxury Furniture Brand"),
        (
            "VIRELLAART luxury furniture manufacturing facility in Istanbul",
            "Illustrative luxury furniture production environment in Türkiye",
        ),
        ("Direct Manufacturer", "Direct VIRELLAART Support"),
        ("A Manufacturer-Led Experience", "A Coordinated Project Experience"),
        (
            "VIRELLAART is an Istanbul-based luxury furniture manufacturer developing complete collections for refined residences, villas and private interiors.",
            "VIRELLAART is an Istanbul-based luxury furniture brand coordinating complete collections produced in Türkiye by independent manufacturing partners for refined residences, villas and private interiors.",
        ),
        ("Manufacturer-Direct Communication", "Direct VIRELLAART Communication"),
        (
            "Communicate directly with an Istanbul-based luxury furniture manufacturer throughout collection selection and order preparation.",
            "Communicate directly with the VIRELLAART team throughout collection selection, production coordination and order preparation.",
        ),
        (
            "VIRELLAART designs and manufactures luxury furniture in Türkiye, managing quality control, customization and international delivery for every order.",
            "VIRELLAART coordinates made-to-order luxury furniture produced in Türkiye by independent manufacturing partners, together with customization review, quality review and international delivery support.",
        ),
        (
            "İstanbul Lüks Mobilya Üretimi | VIRELLAART",
            "Lüks Mobilya Üretim Koordinasyonu | VIRELLAART",
        ),
        (
            "VIRELLAART İstanbul lüks mobilya üretim sürecini; tasarım geliştirme, dekoratif işçilik, döşeme, kalite kontrol, koruyucu paketleme ve uluslararası teslimat aşamalarıyla keşfedin.",
            "VIRELLAART’ın bağımsız üretim ortaklarıyla Türkiye’de koordine ettiği lüks mobilya sürecini; koleksiyon planlama, işçilik, kalite incelemesi, koruyucu paketleme ve uluslararası teslimat aşamalarıyla keşfedin.",
        ),
        ("VIRELLAART Üretim", "VIRELLAART Üretim Koordinasyonu"),
        ("Lüks Mobilya Üretimi", "Lüks Mobilya Üretim Koordinasyonu"),
        (
            "VIRELLAART; mobilya tasarımı, üretim tecrübesi, detaylı işçilik ve uluslararası hizmeti dünyanın farklı bölgelerindeki seçkin konut, villa ve iç mekân projeleri için bir araya getirir.",
            "VIRELLAART; koleksiyon planlamasını, bağımsız üretim ortaklarıyla üretim koordinasyonunu ve uluslararası hizmeti dünyanın farklı bölgelerindeki seçkin konut, villa ve iç mekân projeleri için bir araya getirir.",
        ),
        ("Lüks Mobilya Üreticisi", "Lüks Mobilya Markası"),
        (
            "İstanbul VIRELLAART lüks mobilya üretim tesisi",
            "Türkiye’de lüks mobilya üretim sürecini temsil eden görsel",
        ),
        ("Doğrudan Üretici", "Doğrudan VIRELLAART Desteği"),
        ("Üretici Odaklı Bir Deneyim", "Koordineli Bir Proje Deneyimi"),
        (
            "VIRELLAART, seçkin konutlar, villalar ve özel iç mekânlar için komple koleksiyonlar geliştiren İstanbul merkezli bir lüks mobilya üreticisidir.",
            "VIRELLAART, seçkin konutlar, villalar ve özel iç mekânlar için bağımsız üretim ortaklarıyla Türkiye’de üretilen komple koleksiyonları koordine eden İstanbul merkezli bir lüks mobilya markasıdır.",
        ),
        ("Üreticiyle Doğrudan İletişim", "VIRELLAART ile Doğrudan İletişim"),
    ],
)

replace_optional(
    "src/pages/index.astro",
    [
        ("direct manufacturer communication", "direct VIRELLAART communication"),
        ("Direct Manufacturer", "Direct VIRELLAART Support"),
        ("doğrudan üretici iletişimini", "doğrudan VIRELLAART iletişimini"),
        ("Doğrudan Üretici", "Doğrudan VIRELLAART Desteği"),
    ],
)

market = Path("src/data/market-pages.ts")
text = market.read_text(encoding="utf-8-sig")

for old, new in [
    ("Luxury Furniture Manufacturer for the UK | VIRELLAART", "Luxury Furniture for the UK | VIRELLAART"),
    ("direct manufacturer support", "direct VIRELLAART support"),
    ("Direct Manufacturer Support for the UK", "Direct VIRELLAART Support for the UK"),
    ("Luxury Furniture Manufacturer for the USA | VIRELLAART", "Luxury Furniture for the USA | VIRELLAART"),
    ("Luxury Furniture Manufacturer for Canada | VIRELLAART", "Luxury Furniture for Canada | VIRELLAART"),
    (
        "connects Canadian homeowners and interior professionals directly with an Istanbul luxury furniture manufacturer",
        "supports Canadian homeowners and interior professionals through the VIRELLAART team, coordinating production with independent manufacturing partners in Türkiye",
    ),
    ("Clear, Manufacturer-Direct Support", "Clear VIRELLAART Support"),
    ("Made-to-order luxury furniture from Istanbul", "Made-to-order luxury furniture produced in Türkiye"),
    ("collections crafted in Istanbul", "collections produced in Türkiye by independent manufacturing partners"),
    ("made in Istanbul", "produced in Türkiye by independent manufacturing partners"),
    ("Hersteller VIRELLAART", "VIRELLAART"),
    ("direktem Herstellerkontakt", "direkter VIRELLAART-Beratung"),
    ("direkt vom Hersteller in Istanbul", "über VIRELLAART mit unabhängigen Fertigungspartnern in Türkiye"),
    ("Direkte Beratung durch den Hersteller", "Direkte Beratung durch VIRELLAART"),
    ("Accompagnement direct du fabricant", "Accompagnement direct par VIRELLAART"),
    ("conseil direct du fabricant", "conseil direct par VIRELLAART"),
    ("Conseil multilingue du fabricant", "Accompagnement multilingue VIRELLAART"),
    ("Supporto diretto dal produttore", "Supporto diretto VIRELLAART"),
]:
    text = text.replace(old, new)

if 'hreflang: "en-CH"' not in text:
    marker = '  {\n    language: "de",\n    slug: "switzerland",\n    countryCode: "CH",\n'
    if marker not in text:
        raise SystemExit("German Switzerland insertion marker not found")

    en_switzerland = '''  {\n    language: "en",\n    slug: "switzerland",\n    countryCode: "CH",\n    hreflang: "en-CH",\n    alternateGroup: "switzerland",\n    marketName: "Switzerland",\n    title: "Luxury Furniture for Switzerland | VIRELLAART",\n    description:\n      "Explore made-to-order luxury furniture for Swiss homes and projects, with VIRELLAART consultation, customization review and delivery planning from Türkiye.",\n    eyebrow: "VIRELLAART · Switzerland",\n    heading: "Luxury Furniture for Distinctive Swiss Interiors",\n    intro:\n      "VIRELLAART supports private clients and interior projects in Switzerland with coordinated furniture collections produced in Türkiye by independent manufacturing partners.",\n    serviceHeading: "Multilingual VIRELLAART Support",\n    serviceText:\n      "Discuss dimensions, fabrics, finishes and configurations with the VIRELLAART team. Written quotations confirm selected products, USD pricing, production coordination, packaging and delivery scope before approval.",\n    planningHeading: "Delivery Planning Across Switzerland",\n    planningText:\n      "Planning considers canton, city, building access and order volume. Transport, customs, import duties and destination services are clarified in the written quotation.",\n    details: [\n      "Made-to-order production with independent manufacturing partners in Türkiye",\n      "Protective packaging for international transport",\n      "Direct multilingual VIRELLAART consultation",\n      "Destination-specific delivery planning",\n    ],\n    collectionHeading: "Collections for Swiss Residences and Projects",\n    collectionText:\n      "Explore coordinated living room, dining room and bedroom collections for refined residences and interior projects across Switzerland.",\n    cta: "Request a Switzerland quotation",\n    ctaNote:\n      "Share your preferred collection, canton, city and project requirements for a detailed review.",\n  },\n'''
    text = text.replace(marker, en_switzerland + marker, 1)

old_footer = '''market.countryCode === "CH" &&\n      market.language === "de",'''
new_footer = '''market.countryCode === "CH" &&\n      market.language === "en",'''

if old_footer not in text and new_footer not in text:
    raise SystemExit("Switzerland footer selector not found")
text = text.replace(old_footer, new_footer, 1)
market.write_text(text, encoding="utf-8")
print("UPDATED src/data/market-pages.ts")

# High-risk ownership claims must be gone from EN/TR trust-page copy.
for path, forbidden in {
    "src/pages/about.astro": [
        "Istanbul-based luxury furniture manufacturer",
        "Manufacturer-Direct Communication",
        "Lüks Mobilya Üreticisi",
        "Üreticiyle Doğrudan İletişim",
    ],
    "src/i18n/manufacturing.ts": [
        "VIRELLAART luxury furniture manufacturing facility in Istanbul",
        "VIRELLAART is an Istanbul-based luxury furniture manufacturer",
        "İstanbul VIRELLAART lüks mobilya üretim tesisi",
        "İstanbul merkezli bir lüks mobilya üreticisidir",
    ],
}.items():
    data = Path(path).read_text(encoding="utf-8")
    remains = [phrase for phrase in forbidden if phrase in data]
    if remains:
        raise SystemExit(f"Unsafe claims remain in {path}: {remains}")

print("PUBLIC TRUTH + EN-CH PATCH READY")
