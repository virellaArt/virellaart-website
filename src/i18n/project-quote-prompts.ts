import type { Language } from "./config";

const projectQuotePrompts: Record<Language, string> = {
  en: "Please include:\n• Collection / model or project type:\n• Required pieces and quantities:\n• Delivery country:\n• Delivery city:\n• Customization / project requirements:",
  tr: "Lütfen belirtin:\n• Koleksiyon / model veya proje türü:\n• İstenen parçalar ve adetler:\n• Teslimat ülkesi:\n• Teslimat şehri:\n• Kişiselleştirme / proje talepleri:",
  de: "Bitte angeben:\n• Kollektion / Modell oder Projektart:\n• Gewünschte Teile und Mengen:\n• Lieferland:\n• Lieferstadt:\n• Anpassungs- / Projektanforderungen:",
  fr: "Merci d’indiquer :\n• Collection / modèle ou type de projet :\n• Pièces et quantités souhaitées :\n• Pays de livraison :\n• Ville de livraison :\n• Personnalisation / exigences du projet :",
  it: "Indica per favore:\n• Collezione / modello o tipo di progetto:\n• Pezzi e quantità richiesti:\n• Paese di consegna:\n• Città di consegna:\n• Personalizzazione / requisiti del progetto:",
  ru: "Пожалуйста, укажите:\n• Коллекцию / модель или тип проекта:\n• Нужные предметы и количество:\n• Страну доставки:\n• Город доставки:\n• Пожелания по персонализации / проекту:",
  ar: "يرجى توضيح:\n• المجموعة / الموديل أو نوع المشروع:\n• القطع والكميات المطلوبة:\n• بلد التسليم:\n• مدينة التسليم:\n• متطلبات التخصيص / المشروع:",
  bg: "Моля, посочете:\n• Колекция / модел или тип проект:\n• Желани артикули и количества:\n• Държава за доставка:\n• Град за доставка:\n• Изисквания за персонализация / проекта:",
  ro: "Vă rugăm să indicați:\n• Colecția / modelul sau tipul proiectului:\n• Piesele și cantitățile dorite:\n• Țara de livrare:\n• Orașul de livrare:\n• Cerințe de personalizare / proiect:",
  el: "Παρακαλώ αναφέρετε:\n• Συλλογή / μοντέλο ή τύπο έργου:\n• Επιθυμητά τεμάχια και ποσότητες:\n• Χώρα παράδοσης:\n• Πόλη παράδοσης:\n• Απαιτήσεις προσαρμογής / έργου:",
  es: "Indique por favor:\n• Colección / modelo o tipo de proyecto:\n• Piezas y cantidades necesarias:\n• País de entrega:\n• Ciudad de entrega:\n• Personalización / requisitos del proyecto:",
  sr: "Molimo navedite:\n• Kolekciju / model ili tip projekta:\n• Potrebne komade i količine:\n• Državu isporuke:\n• Grad isporuke:\n• Zahteve za prilagođavanje / projekat:",
  kk: "Көрсетіңіз:\n• Коллекция / модель немесе жоба түрі:\n• Қажетті бұйымдар мен саны:\n• Жеткізу елі:\n• Жеткізу қаласы:\n• Жекелендіру / жоба талаптары:",
  uz: "Iltimos, ko‘rsating:\n• Kolleksiya / model yoki loyiha turi:\n• Kerakli qismlar va miqdorlar:\n• Yetkazib berish mamlakati:\n• Yetkazib berish shahri:\n• Moslashtirish / loyiha talablari:",
  pt: "Indique por favor:\n• Coleção / modelo ou tipo de projeto:\n• Peças e quantidades pretendidas:\n• País de entrega:\n• Cidade de entrega:\n• Personalização / requisitos do projeto:",
  pl: "Proszę podać:\n• Kolekcję / model lub typ projektu:\n• Potrzebne elementy i ilości:\n• Kraj dostawy:\n• Miasto dostawy:\n• Wymagania dotyczące personalizacji / projektu:",
};

export function getProjectQuotePrompt(language: Language): string {
  return projectQuotePrompts[language] ?? projectQuotePrompts.en;
}
