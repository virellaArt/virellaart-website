import type { Language } from "./config";

/* VIRELLAART PER-PRODUCT LOCALIZED DESCRIPTIONS
 * Unique, product-specific descriptions for non-English markets, keyed by
 * `${product.style ?? "luxury-classic"}|${product.name}` (see
 * getProductDescriptionOverrideKey in ./config.ts) so the two products that
 * share a display name across the luxury-classic and modern lines (Bahar
 * Sofa Set, Milano Bedroom Set) don't collide. A language/product pair with
 * no entry here falls back to the generic category template in config.ts.
 *
 * Rules: every entry must be a faithful, natural-language adaptation of the
 * product's real English description — no invented materials, dimensions or
 * techniques, and no reused boilerplate across products.
 */
export const productDescriptionOverrides: Partial<
  Record<Language, Record<string, string>>
> = {
  fr: {
    "luxury-classic|Valencia Sofa Set":
      "Valencia associe un tapissage ivoire à des accoudoirs sculptés, une structure métallique galbée et une base ciselée visible sous tous les angles. Sa composition équilibrée en 3+3+1+1 s’épanouit particulièrement dans les grands salons formels, où elle installe une atmosphère lumineuse et symétrique sans jamais alourdir l’espace. Écrivez à l’équipe VIRELLAART sur WhatsApp pour connaître le prix de l’ensemble Valencia, les finitions disponibles et les délais de livraison vers votre ville.",

    "luxury-classic|Vanessa Sofa Set":
      "La collection Vanessa signée VIRELLAART se distingue par des silhouettes formelles, une assise structurée et des tables géométriques audacieuses qui composent un intérieur soigné à fort contraste. Elle trouve toute sa place dans les villas raffinées et les salons de caractère, où elle affirme une identité visuelle forte. Contactez l’équipe VIRELLAART sur WhatsApp pour le tarif du salon Vanessa, les options d’ensemble canapé et l’organisation de la livraison de votre projet.",

    "luxury-classic|Aspendos Sofa Set":
      "La collection Aspendos de VIRELLAART séduit par une assise aux courbes douces, des proportions équilibrées et une élégance contemporaine apaisée. Pensé pour les villas raffinées et les grandes résidences, cet ensemble canapé de luxe installe une atmosphère à la fois accueillante et prestigieuse. Contactez VIRELLAART sur WhatsApp pour connaître la disponibilité du salon Aspendos, les possibilités de personnalisation et les modalités de livraison internationale.",

    "luxury-classic|Alex Sofa Set":
      "Alex joue sur un tapissage bordeaux à motifs face à une assise capitonnée noir profond, créant volontairement un point focal à fort contraste dans la pièce. Ses accoudoirs galbés et ses proportions classiques compactes conviennent aux salons formels et aux salles de réception de taille moyenne à grande, où cette palette installe une ambiance chaleureuse et théâtrale. Demandez le prix de l’ensemble Alex, les options de tissu et les détails de livraison à VIRELLAART sur WhatsApp.",

    "luxury-classic|Bahar Sofa Set":
      "Bahar marie un tapissage ivoire, un liseré noir net et des coussins cylindriques, tandis que des pieds foncés et des fauteuils aux structures galbées apportent une définition claire à l’ensemble. Il convient aux salons contemporains recherchant une base neutre et claire rehaussée d’un contraste architectural plus marqué, pour une atmosphère calme mais structurée. Contactez VIRELLAART sur WhatsApp pour le prix de l’ensemble Bahar, les choix de tapissage et les détails de livraison.",

    "luxury-classic|Deluxe Sofa Set":
      "Le contraste entre l’assise ivoire et anthracite confère à la collection Deluxe une composition bicolore équilibrée, tandis que ses profils galbés adoucissent les grands salons contemporains. Les coussins superposés et les bases dorées polies apportent de la chaleur sans rompre la netteté de l’ensemble. Demandez à VIRELLAART sur WhatsApp le prix de l’ensemble Deluxe, les options de coloris et les détails de livraison pour votre projet.",

    "luxury-classic|Lugano Sofa Set":
      "Découvrez la collection Lugano de VIRELLAART, reconnaissable à ses silhouettes gracieuses, son cadre décoratif et sa présence formelle et raffinée. Conçu pour les grandes résidences et les espaces salon sophistiqués, ce mobilier de salon de luxe apporte une élégance intemporelle et une véritable distinction visuelle. Demandez un devis privé pour le salon Lugano sur WhatsApp, incluant les options de personnalisation et l’accompagnement de VIRELLAART pour la livraison internationale.",

    "luxury-classic|Queen Sofa Set":
      "Découvrez la collection Queen de VIRELLAART, où une assise aux courbes douces, des tables sculpturales et une disposition architecturée composent une déclaration contemporaine apaisée. Conçu pour les villas raffinées et les résidences modernes, cet ensemble canapé de luxe apporte harmonie visuelle et prestige discret. Envoyez vos besoins pour votre salon de luxe sur WhatsApp afin de recevoir les tarifs du salon Queen, des options personnalisées et l’accompagnement de VIRELLAART pour la livraison.",

    "luxury-classic|Sena Sofa Set":
      "Découvrez la collection Sena de VIRELLAART, définie par une symétrie formelle, des profils galbés gracieux et une présence classique distinguée. Conçu pour les grandes villas et les espaces de réception élégants, ce mobilier de salon de luxe installe une atmosphère raffinée, presque cérémonielle, à l’autorité visuelle affirmée. Contactez VIRELLAART sur WhatsApp pour connaître la disponibilité du salon Sena, les possibilités de personnalisation et les informations de livraison mondiale.",

    "luxury-classic|Shawl Sofa Set":
      "Découvrez la collection Shawl de VIRELLAART, marquée par des détails géométriques affirmés, une assise sculpturale et une présence contemporaine spectaculaire. Idéal pour les villas de caractère et les intérieurs raffinés, ce mobilier de salon de luxe affiche une forte personnalité et une réelle sophistication visuelle. Contactez VIRELLAART sur WhatsApp pour connaître la disponibilité du salon Shawl, les possibilités de personnalisation et les informations de livraison mondiale.",

    "luxury-classic|Vizyon Sofa Set":
      "Découvrez la collection Vizyon de VIRELLAART, distinguée par des détails ornementés, des profils sculptés et un caractère formel d’inspiration palatiale. Conçu pour les grandes villas et les espaces de réception élégants, cet ensemble canapé de luxe crée un point focal imposant, empreint d’un raffinement théâtral. Contactez VIRELLAART sur WhatsApp pour connaître la disponibilité du salon Vizyon, les possibilités de personnalisation et les informations de livraison mondiale.",

    "luxury-classic|Valencia Bedroom Set":
      "Découvrez la collection chambre Valencia de VIRELLAART, distinguée par une tête de lit sculpturale, une symétrie élégante et des détails décoratifs raffinés. Conçu pour les villas sophistiquées et les suites parentales apaisées, ce mobilier de chambre de luxe installe une atmosphère gracieuse et prestigieuse, à l’harmonie visuelle affirmée. Demandez un devis privé pour la chambre Valencia via WhatsApp, incluant les options d’ensemble et les modalités d’expédition internationale.",

    "luxury-classic|Aspendos Bedroom Set":
      "Découvrez la collection chambre Aspendos de VIRELLAART, où un cadre architectural affirmé, une symétrie superposée et une tête de lit imposante composent un refuge contemporain raffiné. Conçu pour les villas haut de gamme et les suites parentales élégantes, ce mobilier de chambre de luxe offre un bel équilibre visuel et un sentiment de prestige serein. Écrivez à VIRELLAART sur WhatsApp pour connaître les tarifs de la chambre Aspendos, les possibilités de personnalisation et les informations de livraison mondiale.",

    "luxury-classic|Deluxe Bedroom Set":
      "La collection chambre Deluxe de VIRELLAART déploie des courbes amples, une symétrie superposée et une composition architecturale soignée, à la fois grandiose et accueillante. Pensée pour les suites parentales élégantes en quête de mobilier de chambre de luxe, elle apporte harmonie visuelle et prestige durable. Contactez VIRELLAART sur WhatsApp pour le tarif de la chambre Deluxe, les choix de personnalisation et l’accompagnement pour la livraison mondiale.",

    "luxury-classic|Aspendos Dining Room Set":
      "La collection salle à manger Aspendos de VIRELLAART associe une table à piètement architectural, des sièges galbés et sculpturaux et une composition calme et équilibrée. Pensée pour les villas élégantes et les espaces repas contemporains, ce mobilier de salle à manger de luxe apporte une présence raffinée, sans excès. Échangez avec VIRELLAART sur WhatsApp au sujet de votre salle à manger et recevez le tarif Aspendos, des conseils de configuration et une organisation de livraison.",

    "luxury-classic|Deluxe Dining Room Set":
      "La collection salle à manger Deluxe de VIRELLAART marie une élégante table ovale à des meubles de rangement sculpturaux et une symétrie formelle, pour un intérieur soigné et prestigieux. Conçue pour les grandes villas et les espaces de réception raffinés, ce mobilier de salle à manger de luxe donne à chaque repas un vrai sentiment d’occasion. Demandez un devis détaillé pour la salle à manger Deluxe via WhatsApp, avec les options d’ensemble personnalisées et les informations d’expédition internationale.",

    "luxury-classic|Moon Dining Room Set":
      "La collection salle à manger Moon de VIRELLAART exprime une élégance contemporaine à travers des silhouettes fluides, un mobilier de rangement sculptural et une composition équilibrée. Conçue pour les villas raffinées et les espaces de réception modernes, ce mobilier de salle à manger de luxe crée un point focal singulier, animé d’un mouvement visuel gracieux. Contactez VIRELLAART sur WhatsApp pour le tarif de l’ensemble Moon, les options de personnalisation et l’assistance pour la livraison mondiale.",

    "luxury-classic|Queen Dining Room Set":
      "Découvrez la collection salle à manger Queen de VIRELLAART, façonnée par des silhouettes fluides, des formes de mobilier sculpturales et une assise aux courbes douces. Conçue pour les villas contemporaines et les espaces de réception élégants, ce mobilier de salle à manger de luxe crée un point focal sophistiqué au caractère visuel affirmé. Demandez un devis détaillé pour la salle à manger Queen via WhatsApp, avec les options d’ensemble personnalisées et les informations d’expédition internationale.",

    "luxury-classic|Valencia Dining Room Set":
      "La collection salle à manger Valencia de VIRELLAART associe une table sculpturale, une symétrie raffinée et des éléments de rangement élégants pour un intérieur soigné et prestigieux. Conçue pour les villas sophistiquées et les espaces de réception formels, ce mobilier de salle à manger de luxe apporte une harmonie visuelle intemporelle. Envoyez vos besoins de projet sur WhatsApp pour connaître le tarif de la collection Valencia, les options sur mesure et l’accompagnement pour la livraison internationale.",

    "luxury-classic|Aspendos TV Unit":
      "Le meuble TV de luxe Aspendos signé VIRELLAART se distingue par un profil bas épuré, des angles adoucis et des détails de support sculpturaux qui composent un point focal architectural raffiné. Conçu pour les villas élégantes et les espaces de vie contemporains, ce meuble TV design apporte équilibre, prestige et calme visuel. Parlez à notre équipe sur WhatsApp pour une offre privée sur le meuble TV Aspendos, sa personnalisation et les modalités d’expédition.",

    "luxury-classic|Deluxe TV Unit":
      "Le meuble TV de luxe Deluxe signé VIRELLAART combine un profil galbé ample, des détails verticaux et un équilibre soigné entre espaces d’exposition et de rangement. Pensé pour les villas élégantes et les intérieurs sophistiqués, ce meuble TV design apporte une structure raffinée et un point focal soigné. Partagez votre projet de salon sur WhatsApp pour recevoir le tarif du meuble TV Deluxe, des options personnalisées et l’organisation de la livraison avec VIRELLAART.",

    "luxury-classic|Moon TV Unit":
      "Le meuble TV de luxe Moon signé VIRELLAART associe une composition murale architecturale, des étagères d’exposition intégrées et un meuble bas épuré pour un intérieur contemporain soigné. Conçu pour les villas raffinées et les espaces de vie modernes, ce meuble TV design apporte une structure visuelle forte et une présentation élégante. Écrivez à VIRELLAART sur WhatsApp pour connaître la disponibilité du meuble TV Moon, les possibilités de personnalisation et l’accompagnement pour la livraison mondiale.",

    "luxury-classic|Valencia TV Unit":
      "Le meuble TV de luxe Valencia signé VIRELLAART affiche une structure cintrée sculpturale, des courbes gracieuses et des accents décoratifs raffinés qui en font une pièce singulière. Conçu pour les villas élégantes et les intérieurs formels, ce meuble TV design apporte prestige visuel et équilibre architectural. Demandez un devis détaillé pour le meuble TV Valencia sur WhatsApp, avec les options disponibles et l’assistance pour l’expédition internationale.",

    "luxury-classic|Vanessa Dining Room Set":
      "La collection salle à manger Vanessa de VIRELLAART se distingue par une assise à dossier haut, des lignes géométriques nettes et un caractère formel et structuré. Conçue pour les villas élégantes et les espaces de réception sophistiqués, ce mobilier de salle à manger de luxe installe un vrai sentiment d’occasion et un ordre visuel raffiné. Contactez VIRELLAART sur WhatsApp pour le tarif de l’ensemble Vanessa, les options de personnalisation et l’assistance pour la livraison mondiale.",

    "luxury-classic|Valdera Sofa Set":
      "La collection Valdera de VIRELLAART marie des silhouettes classiques sculptées, une symétrie formelle et une composition de salon imposante. Pensé pour les grandes villas et les espaces de réception distingués, ce mobilier de salon de luxe apporte un prestige intemporel à la présence architecturale affirmée. Contactez l’équipe VIRELLAART sur WhatsApp pour le tarif du salon Valdera, les options d’ensemble canapé et l’organisation de la livraison de votre projet.",

    "luxury-classic|Shawl Dining Room Set":
      "La collection salle à manger Shawl de VIRELLAART réunit une table sculpturale, des chaises aux lignes amples et une composition formelle spectaculaire. Conçue pour les villas de caractère et les espaces de réception élégants, ce mobilier de salle à manger de luxe affirme un prestige audacieux et une vraie profondeur visuelle. Contactez VIRELLAART sur WhatsApp pour le tarif de l’ensemble Shawl, les options de personnalisation et l’assistance pour la livraison mondiale.",

    "luxury-classic|Valdera Dining Room Set":
      "La collection salle à manger Valdera de VIRELLAART se caractérise par des silhouettes ornées, une symétrie formelle et une présence classique majestueuse. Conçue pour les grandes résidences et les intérieurs de réception sophistiqués, ce mobilier de salle à manger de luxe installe une atmosphère distinguée au fort caractère visuel. Contactez VIRELLAART sur WhatsApp pour le tarif de l’ensemble Valdera, les options de personnalisation et l’assistance pour la livraison mondiale.",

    "luxury-classic|Verona Bedroom Set":
      "La collection chambre Verona de VIRELLAART associe une haute tête de lit imposante, des proportions équilibrées et des détails verticaux raffinés pour composer un refuge contemporain soigné. Conçu pour les villas élégantes et les suites parentales sophistiquées, ce mobilier de chambre de luxe apporte harmonie visuelle et un sentiment de prestige affirmé. Parlez à notre équipe sur WhatsApp pour connaître la disponibilité de la chambre Verona, les options de personnalisation et l’accompagnement pour l’expédition vers votre résidence.",

    "luxury-classic|Zümrüt Sofa Set":
      "La collection Zümrüt de VIRELLAART se reconnaît à son cadre orné, son assise capitonnée et sa composition classique richement superposée. Conçu pour les grandes villas et les espaces de réception formels, ce mobilier de salon de luxe installe une atmosphère imposante, entre prestige et élégance décorative. Contactez l’équipe VIRELLAART sur WhatsApp pour le tarif du salon Zümrüt, les options d’ensemble canapé et l’organisation de la livraison de votre projet.",

    "luxury-classic|Zümrüt Dining Room Set":
      "La collection salle à manger Zümrüt de VIRELLAART combine des silhouettes ornées, une assise à dossier haut et une symétrie formelle pour un intérieur classique richement composé. Conçue pour les grandes résidences et les espaces de réception élégants, ce mobilier de salle à manger de luxe dégage une présence cérémonielle et une intensité visuelle raffinée. Envoyez vos besoins de projet sur WhatsApp pour connaître le tarif de la collection Zümrüt, les options sur mesure et l’accompagnement pour la livraison internationale.",

    "luxury-classic|Milano Sofa Set":
      "La collection Milano de VIRELLAART déploie une composition classique opulente, avec une assise capitonnée, un cadre décoratif élaboré et une atmosphère de salon richement superposée. Pensée pour les grandes villas et les intérieurs de réception formels, ce mobilier de salon de luxe affiche un prestige incontestable et une élégance cérémonielle. Demandez un devis privé pour le salon Milano sur WhatsApp, incluant les options de personnalisation et l’accompagnement de VIRELLAART pour la livraison internationale.",

    "luxury-classic|Zümrüt TV Unit":
      "Le meuble TV de luxe Zümrüt signé VIRELLAART associe une composition cintrée ornée, un jeu de panneaux décoratifs et une présence classique affirmée. Conçu pour les grandes villas et les intérieurs formels, ce meuble TV design crée un point focal prestigieux, au caractère visuel riche. Demandez un devis détaillé pour le meuble TV Zümrüt sur WhatsApp, avec les options disponibles et l’assistance pour l’expédition internationale.",

    "luxury-classic|Milano Dining Room Set":
      "La collection salle à manger Milano de VIRELLAART compose un décor classique opulent avec une table sculpturale, des chaises à dossier haut et un mobilier d’exposition richement encadré. Pensée pour les grandes villas et les réceptions formelles, ce mobilier de salle à manger de luxe transforme chaque repas en un moment d’élégance. Demandez un devis détaillé pour la salle à manger Milano via WhatsApp, avec les options d’ensemble personnalisées et les informations d’expédition internationale.",

    "luxury-classic|Milano Bedroom Set":
      "La collection chambre Milano de VIRELLAART apporte une grande élégance classique aux intérieurs raffinés, avec un lit orné, une armoire imposante et une présence richement décorative. Pensée pour une clientèle en quête de mobilier de chambre de luxe au caractère intemporel, Milano installe une atmosphère prestigieuse. Contactez VIRELLAART sur WhatsApp pour le tarif de la chambre Milano, les choix de personnalisation et l’accompagnement pour la livraison mondiale.",

    "luxury-classic|Milano Blue Sofa Set":
      "La collection Milano Blue de VIRELLAART met en scène une assise classique sculptée, un cadre décoratif minutieux et une composition de salon spectaculaire. Conçu pour les grandes villas et les espaces de réception formels, ce mobilier de salon de luxe installe une atmosphère de prestige, de profondeur et de caractère intemporel. Écrivez à VIRELLAART sur WhatsApp pour connaître le tarif du salon Milano Blue, les options de personnalisation et l’organisation de la livraison mondiale.",

    "luxury-classic|Milano Blue Dining Room Set":
      "La collection salle à manger Milano Blue de VIRELLAART installe un décor classique imposant grâce à une table richement encadrée, des chaises à dossier haut et un mobilier d’exposition parfaitement coordonné. Idéale pour les grandes villas et les réceptions formelles, ce mobilier de salle à manger de luxe apporte une présence cérémonielle et un prestige visuel durable. Écrivez à VIRELLAART sur WhatsApp pour connaître le tarif de la salle à manger Milano Blue, les possibilités de personnalisation et les modalités de livraison mondiale.",

    "luxury-classic|Milano Blue Bedroom Set":
      "La collection chambre Milano Blue de VIRELLAART compose un grand refuge classique avec un lit capitonné imposant, une armoire richement encadrée et des pièces décoratives coordonnées. Conçue pour les villas élégantes et les suites parentales formelles, ce mobilier de chambre de luxe installe une atmosphère prestigieuse et harmonieuse. Échangez au sujet de la collection Milano Blue avec VIRELLAART via WhatsApp et recevez des conseils personnalisés sur le tarif, les options et la livraison internationale.",

    "luxury-classic|Milano Blue TV Unit":
      "Le meuble TV de luxe Milano Blue signé VIRELLAART associe une silhouette classique allongée, un cadre richement ornemental et une composition basse imposante. Conçu pour les grandes villas et les intérieurs formels, ce meuble TV design crée un point focal prestigieux au caractère décoratif affirmé. Contactez VIRELLAART via WhatsApp pour connaître le tarif du meuble TV Milano Blue, les détails de personnalisation et les informations de livraison mondiale.",

    "luxury-classic|Milano TV Unit":
      "Le meuble TV de luxe Milano signé VIRELLAART se distingue par un cadre architectural orné, une symétrie équilibrée et un meuble bas richement décoratif. Conçu pour les grandes villas et les intérieurs formels, ce meuble TV design crée un point focal élégant au caractère classique intemporel. Partagez votre projet de salon sur WhatsApp pour recevoir le tarif du meuble TV Milano, des options personnalisées et l’organisation de la livraison avec VIRELLAART.",

    "luxury-classic|Lina Sofa Set":
      "La collection Lina de VIRELLAART équilibre une assise structurée, des accoudoirs sculptés et une table basse architecturale imposante, pour un intérieur composé et élégant. Adapté aux villas raffinées et aux espaces de réception sophistiqués, cet ensemble canapé de luxe offre un confort soigné et un ordre visuel affirmé. Écrivez à VIRELLAART sur WhatsApp pour connaître le tarif du salon Lina, les options de personnalisation et l’organisation de la livraison mondiale.",

    "luxury-classic|Lina Dining Room Set":
      "La collection salle à manger Lina de VIRELLAART associe une table architecturale affirmée, des chaises à dossier haut structurées et des détails verticaux disciplinés, pour un décor formel soigné. Conçue pour les villas sophistiquées et les espaces de réception élégants, ce mobilier de salle à manger de luxe apporte équilibre visuel, prestige et structure raffinée. Écrivez à VIRELLAART sur WhatsApp pour connaître le tarif de la salle à manger Lina, les possibilités de personnalisation et les modalités de livraison mondiale.",

    "luxury-classic|Zerafet Dining Room Set":
      "La collection salle à manger Zerafet de VIRELLAART évoque une élégance classique et gracieuse à travers des chaises aux silhouettes galbées, une symétrie formelle et un mobilier d’exposition richement composé. Pensée pour les villas distinguées et les espaces de réception raffinés, ce mobilier de salle à manger de luxe apporte chaleur, cérémonie et caractère intemporel. Contactez VIRELLAART sur WhatsApp pour le tarif de l’ensemble Zerafet, les options de personnalisation et l’assistance pour la livraison mondiale.",

    "luxury-classic|Zerafet Sofa Set":
      "La collection Zerafet de VIRELLAART marie des silhouettes classiques gracieuses, une assise équilibrée et une composition de salon accueillante. Conçu pour les villas élégantes et les espaces de réception formels, cet ensemble canapé de luxe apporte chaleur, symétrie et raffinement intemporel à l’intérieur. Demandez un devis privé pour le salon Zerafet sur WhatsApp, incluant les options de personnalisation et l’accompagnement de VIRELLAART pour la livraison internationale.",

    "luxury-classic|Saltanat Bedroom Set":
      "La collection chambre Saltanat de VIRELLAART s’impose par une tête de lit ornée et imposante, un capitonnage profond et une composition classique richement superposée. Pensée pour les villas palatiales et les suites parentales distinguées, ce mobilier de chambre de luxe dégage une grandeur cérémonielle et un prestige incontestable. Échangez au sujet de la collection Saltanat avec VIRELLAART via WhatsApp et recevez des conseils personnalisés sur le tarif, les options et la livraison internationale.",

    "luxury-classic|Saltanat Dining Room Set":
      "La collection salle à manger Saltanat de VIRELLAART affirme un caractère palatial à travers des formes sculpturales, une symétrie imposante et des détails richement ornés. Conçue pour les grandes villas et les espaces de réception formels, ce mobilier de salle à manger de luxe dégage une élégance cérémonielle et un prestige incontestable. Parlez à VIRELLAART sur WhatsApp pour une offre privée sur la salle à manger Saltanat, sa personnalisation et l’assistance pour l’expédition.",

    "luxury-classic|Saltanat Green Dining Room Set":
      "La collection salle à manger Saltanat Green de VIRELLAART déploie une composition classique spectaculaire, avec une assise sculpturale, un cadre orné et une atmosphère richement cérémonielle. Conçue pour les villas palatiales et les espaces de réception distingués, ce mobilier de salle à manger de luxe crée un impact visuel fort et un prestige durable. Envoyez vos besoins de projet sur WhatsApp pour connaître le tarif de la collection Saltanat Green, les options sur mesure et l’accompagnement pour la livraison internationale.",

    "luxury-classic|Saltanat Sofa Set":
      "La collection Saltanat de VIRELLAART apporte un caractère palatial aux grands intérieurs à travers une assise sculpturale, des lignes ornementales amples et une composition de salon richement équilibrée. Conçu pour les villas formelles et les espaces de réception distingués, cet ensemble canapé de luxe crée une élégance cérémonielle et un prestige visuel imposant. Contactez VIRELLAART sur WhatsApp pour connaître la disponibilité du salon Saltanat, les possibilités de personnalisation et les informations de livraison mondiale.",

    "luxury-classic|Saltanat Green Sofa Set":
      "La collection Saltanat Green de VIRELLAART combine une assise classique sculpturale, un cadre ornemental élaboré et un contraste spectaculaire pour un intérieur résolument royal. Conçu pour les villas palatiales et les espaces de réception formels, ce mobilier de salon de luxe impose sa présence et son élégance cérémonielle. Envoyez vos besoins pour votre salon de luxe sur WhatsApp afin de recevoir les tarifs du salon Saltanat Green, des options personnalisées et l’accompagnement de VIRELLAART pour la livraison.",

    "luxury-classic|Sultan Bedroom Set":
      "La collection chambre Sultan de VIRELLAART se distingue par une tête de lit couronnée et imposante, une symétrie formelle et un mobilier classique coordonné, pour une suite parentale impressionnante. Conçue pour les villas de luxe et les résidences distinguées, cette collection chambre Sultan installe un confort royal à l’identité visuelle affirmée. Parlez à notre équipe sur WhatsApp pour connaître la disponibilité de la chambre Sultan, les options de personnalisation et l’accompagnement pour l’expédition vers votre résidence.",

    "luxury-classic|Sultan Green Bedroom Set":
      "La collection chambre Sultan Green de VIRELLAART met en scène une composition classique royale, avec une tête de lit couronnée, un cadre orné et des pièces coordonnées et imposantes. Conçue pour les villas palatiales et les suites parentales formelles, ce mobilier de chambre de luxe installe une symétrie raffinée et un prestige visuel affirmé. Partagez vos besoins pour votre chambre parentale sur WhatsApp afin de recevoir le tarif de la chambre Sultan Green, des options personnalisées et l’organisation de la livraison avec VIRELLAART.",

    "luxury-classic|Sultan Sofa Set":
      "La collection Sultan de VIRELLAART compose un salon royal, avec des silhouettes couronnées, un cadre ornemental élaboré et une assise formelle équilibrée. Pensé pour les villas palatiales et les espaces de réception distingués, ce mobilier de salon de luxe dégage une grandeur cérémonielle à l’harmonie visuelle raffinée. Écrivez à VIRELLAART sur WhatsApp pour connaître le tarif du salon Sultan, les options de personnalisation et l’organisation de la livraison mondiale.",

    "luxury-classic|Sultan Green Sofa Set":
      "Sultan Sofa Green associe un tapissage vert intense à une structure classique sculptée et des coussins d’accent coordonnés, faisant clairement de l’assise le centre de la pièce. Sa disposition formelle en 3+3+1+1 convient aux grands salons et salles de réception, où cette teinte profonde installe une atmosphère riche et posée. Demandez à VIRELLAART sur WhatsApp le prix de l’ensemble Sultan Sofa, les finitions disponibles et les détails de livraison.",

    "luxury-classic|Sultan Green Dining Room Set":
      "Sultan Green organise la salle à manger autour d’une table ovale aux incrustations vert foncé, d’un piètement sculpté et de six chaises à dossier haut. Les panneaux crème, les surfaces à effet marbre vert et les sculptures dorées se retrouvent sur le buffet et la vitrine, installant une atmosphère cérémonielle dans les grandes salles à manger formelles. Contactez VIRELLAART sur WhatsApp pour le prix de l’ensemble complet, les finitions disponibles et les détails de livraison.",

    "luxury-classic|Marsilya Bedroom Set":
      "La chambre Marsilya conjugue un style contemporain raffiné avec un lit tout en douceur, une armoire sculpturale, un espace coiffeuse coordonné, des tons neutres chaleureux et d’élégants accents dorés champagne. Partagez vos besoins pour votre chambre parentale sur WhatsApp afin de recevoir le tarif de la chambre Marsilya, des options personnalisées et l’organisation de la livraison avec VIRELLAART.",

    "luxury-classic|Rio Bedroom Set":
      "La chambre Rio de VIRELLAART présente une chambre contemporaine raffinée aux tons neutres chaleureux, associant un lit capitonné imposant à une armoire, des chevets et un espace coiffeuse coordonnés. Ses lignes architecturales apaisées installent une atmosphère élégante digne d’une suite parentale. Contactez VIRELLAART sur WhatsApp pour le tarif de la chambre Rio, les conseils de personnalisation et l’organisation de la livraison mondiale.",

    "modern|Aura Corner Sofa Set":
      "Le canapé d’angle Aura apporte un confort modulable généreux aux intérieurs contemporains, avec une composition d’angle de 375 × 350 cm, un tapissage aux courbes douces et une palette neutre apaisée. Complétez l’ensemble avec le fauteuil de caractère et la table basse assortis. Contactez VIRELLAART sur WhatsApp pour les options de tapissage, les détails de fabrication et l’organisation de la livraison mondiale.",

    "modern|Florida Sofa Set":
      "Florida Sofa Set affiche une présence moderne épurée, avec des courbes douces, des proportions équilibrées et une allure raffinée. Pensée pour les intérieurs contemporains élégants, cette collection offre une assise accueillante tout en conservant une silhouette sophistiquée, plébiscitée par les amateurs de mobilier de salon moderne à fort impact visuel. Écrivez à VIRELLAART sur WhatsApp pour connaître le tarif de Florida Sofa Set et les modalités de livraison.",

    "modern|Ibiza Sofa Set":
      "Ibiza Sofa Set marie des courbes architecturales douces à un profil contemporain apaisé. Sa composition équilibrée en 3+3+1+1 installe un salon raffiné, généreux sans jamais paraître lourd. Pensé pour les intérieurs modernes, Ibiza dégage une forte présence visuelle et un confort accueillant, complété par la table basse assortie. Contactez VIRELLAART sur WhatsApp pour le tarif et les possibilités de personnalisation.",

    "modern|Prada Sofa Set":
      "PRADA Sofa Set apporte un confort sculptural aux intérieurs contemporains, avec deux canapés trois places coordonnés et deux fauteuils assortis. Cette composition équilibrée en 3+3+1+1 associe des silhouettes aux courbes douces, un tapissage neutre et des accents sombres raffinés pour créer un coin salon élégant. Fabriqué par VIRELLAART à Istanbul, PRADA constitue un choix sophistiqué en direct fabricant pour les clients recherchant un mobilier de salon moderne de luxe livré dans le monde entier.",

    "modern|Vito Sofa Set":
      "VITO Sofa Set installe une atmosphère de salon moderne raffinée grâce à sa composition équilibrée en 3+3+1+1 et sa silhouette contemporaine épurée. Conçue pour les intérieurs résidentiels élégants, cette collection de canapés de luxe associe harmonie visuelle et disposition généreuse, idéale pour les salons modernes. Complétée par un duo de tables basses assorties, VITO s’adresse aux clients en quête de mobilier de salon contemporain haut de gamme. Contactez VIRELLAART sur WhatsApp pour le tarif et la livraison.",

    "modern|Ay Işığı Sofa Set":
      "AY IŞIĞI Sofa Set apporte un caractère net et structuré aux intérieurs contemporains grâce à ses coussins de dossier bien dessinés, ses pieds fins surélevés et ses fauteuils d’accent contrastants. Sa configuration équilibrée en 3+3+1+1 compose un salon moderne complet au profil visuellement léger. Un choix singulier pour les clients recherchant un ensemble canapé gris moderne en quatre pièces et du mobilier design contemporain signé VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et les options.",

    "modern|Bahar Sofa Set":
      "BAHAR Sofa Set, dans son édition moderne, affirme un caractère architectural net grâce à ses larges accoudoirs carrés, ses coussins structurés et sa silhouette basse et apaisée. Sa disposition en 3+3+1+1 associe des canapés de teinte claire à des fauteuils d’accent contrastants pour composer un salon contemporain équilibré. Un choix singulier pour les clients recherchant un ensemble canapé blanc moderne, une assise minimaliste de luxe et du mobilier design signé VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Beyrut Sofa Set":
      "BEYRUT Sofa Set affirme une présence architecturale assurée dans les intérieurs contemporains, avec sa composition aux tons sombres, ses larges accoudoirs géométriques et son dossier segmenté avec précision. L’ensemble complet en 3+3+1+1 compose un salon de luxe équilibré, rehaussé de coussins d’accent contrastants qui affûtent son identité moderne. Un choix expressif pour les clients recherchant un ensemble canapé gris foncé et du mobilier de salon contemporain en quatre pièces signé VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et la personnalisation.",

    "modern|Boston Sofa Set":
      "BOSTON Sofa Set signe une déclaration architecturale tout en douceur, avec des bases arrondies, des accoudoirs enveloppants et une assise matelassée. Sa composition en 3+3+1+1 associe des tons anthracite et crème pour un salon contemporain équilibré. Un choix singulier pour les clients recherchant un ensemble canapé galbé moderne et du mobilier de salon design signé VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Burgaz Sofa Set":
      "BURGAZ Sofa Set affiche un caractère contemporain assuré grâce à ses coussins de dossier superposés, ses larges accoudoirs tapissés et sa composition bicolore raffinée. L’ensemble complet en 3+3+1+1 équilibre une assise gris anthracite et taupe chaud pour un salon moderne sophistiqué. Un choix singulier pour les clients recherchant un ensemble canapé bicolore moderne et du mobilier de salon design signé VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et les options.",

    "modern|Dubai Sofa Set":
      "DUBAİ Sofa Set installe un salon contemporain accueillant grâce à une assise profonde, de larges accoudoirs tapissés et des coussins de dossier généreusement superposés. Sa composition complète en 3+3+1+1 associe une palette gris clair raffinée à des accents bleus distinctifs, pour un intérieur moderne spacieux et équilibré. Un choix élégant pour les clients recherchant un ensemble canapé gris de luxe et du mobilier de salon contemporain en quatre pièces signé VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Eftelya Sofa Set":
      "EFTELYA Sofa Set apporte un caractère sculptural singulier aux intérieurs contemporains, avec son profil latéral ailé, ses détails de dossier cannelés et ses coussins généreusement superposés. L’ensemble complet en 3+3+1+1 compose un salon gris sophistiqué, à la profondeur visuelle affirmée et aux proportions élégantes. Un choix raffiné pour les clients recherchant un ensemble canapé gris moderne et du mobilier de salon design en quatre pièces signé VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et la personnalisation.",

    "modern|Gizem Sofa Set":
      "GIZEM Sofa Set associe une silhouette contemporaine épurée à des appuie-têtes réglables et des repose-pieds inclinables, pensés pour un usage moderne et flexible. Son ensemble complet en 3+3+1+1 propose une assise grise raffinée, des coussins structurés et des structures surélevées sombres, tandis que la commande intégrée apporte une touche technologique. Un choix singulier pour les clients recherchant un ensemble canapé relax moderne et du mobilier de salon gris de luxe signé VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et les options.",

    "modern|Hünkar Sofa Set":
      "HÜNKAR Sofa Set installe un salon contemporain lumineux, avec une assise blanche épurée, des appuie-têtes réglables et une structure extérieure au fini bois chaud caractéristique. Son ensemble complet en 3+3+1+1 associe des canapés épurés à des fauteuils sculpturaux aux détails cannelés, équilibrant structure architecturale et légèreté visuelle. Un choix raffiné pour les clients recherchant un ensemble canapé blanc moderne et du mobilier de salon à structure bois signé VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et la personnalisation.",

    "modern|Orion Sofa Set":
      "ORION Sofa Set installe une atmosphère contemporaine sophistiquée grâce à sa composition équilibrée en 3+3+1+1, ses proportions élégantes et son confort raffiné. Pensée pour les intérieurs modernes, cette collection associe une silhouette architecturale épurée à un caractère chaleureux et accueillant. Un choix élégant pour les clients recherchant un ensemble canapé moderne de luxe et du mobilier de salon haut de gamme signé VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Milano Bedroom Set":
      "MILANO Bedroom Set, dans son édition moderne, installe une atmosphère contemporaine raffinée, avec des lignes architecturales épurées, des proportions équilibrées et des solutions de rangement élégantes. Pensée pour les intérieurs modernes de luxe, cette collection chambre associe simplicité et harmonie visuelle haut de gamme. Un choix élégant pour les clients recherchant du mobilier de chambre moderne et des collections chambre de luxe signées VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et les options.",

    "modern|Kano Bedroom Set":
      "KANO Bedroom Set installe une atmosphère de chambre contemporaine sophistiquée, avec des proportions équilibrées, des solutions de rangement élégantes et un caractère architectural raffiné. Pensée pour les intérieurs modernes de luxe, cette collection associe confort fonctionnel et harmonie visuelle intemporelle. Un choix haut de gamme pour les clients recherchant du mobilier de chambre moderne et des ensembles chambre de luxe signés VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Soho Dining Room Set":
      "SOHO Dining Room Set installe une atmosphère de salle à manger sophistiquée, avec des lignes contemporaines épurées, des proportions raffinées et une présence intérieure luxueuse. Pensée pour les maisons modernes, cette collection associe un confort de table élégant à des détails architecturaux intemporels. Un choix haut de gamme pour les clients recherchant du mobilier de salle à manger moderne signé VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Zena Sofa Set":
      "ZENA Sofa Set installe une atmosphère de salon moderne sophistiquée, avec sa composition équilibrée en 3+3+1+1, son tapissage texturé raffiné et ses accents de structure noire caractéristiques. Conçu et fabriqué par VIRELLAART, ZENA associe élégance contemporaine et confort haut de gamme pour les clients en quête d’un ensemble canapé moderne de luxe et de mobilier de salon exclusif. Contactez-nous sur WhatsApp pour le tarif et la personnalisation.",

    "modern|Zena Dining Room Set":
      "ZENA Dining Room Set apporte une touche de luxe contemporain aux intérieurs modernes, avec sa table élégante, ses six chaises tapissées, sa console assortie et son miroir décoratif. Conçu avec des proportions raffinées et un caractère architectural sophistiqué, ZENA incarne le mobilier de salle à manger moderne fabriqué par VIRELLAART pour les intérieurs résidentiels haut de gamme. Écrivez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Orion Dining Room Set":
      "ORION Dining Room Set installe un décor contemporain sophistiqué avec sa table aux courbes douces, ses six chaises tapissées et sa console assortie à miroir décoratif. Les détails équilibrés en crème, noir et tons métalliques chauds confèrent à la collection un caractère architectural singulier. Un choix raffiné de VIRELLAART pour les clients recherchant un ensemble salle à manger moderne de luxe avec six chaises et console élégante. Contactez-nous sur WhatsApp pour le tarif et les options.",

    "modern|Trend Sofa Set":
      "TREND Sofa Set installe une atmosphère de salon contemporaine raffinée, avec des silhouettes aux courbes douces, des coussins généreux et une disposition équilibrée en 3+3+1+1. Deux canapés trois places coordonnés et deux fauteuils assortis composent un coin salon élégant, tandis que le tapissage neutre chaleureux et les accents sombres discrets renforcent son caractère moderne. Fabriqué par VIRELLAART à Istanbul, TREND est un choix en direct fabricant pour les clients en quête de mobilier de salon moderne sophistiqué, livré dans le monde entier.",

    "modern|Milazzo Sofa Set":
      "MILAZZO Sofa Set apporte un caractère calme et sophistiqué aux intérieurs contemporains, avec ses silhouettes aux courbes douces, ses coussins superposés et ses détails latéraux contrastants raffinés. L’ensemble équilibré en 3+3+1+1 associe deux canapés trois places coordonnés à deux fauteuils sculpturaux pour composer un coin salon élégant, la table basse assortie venant compléter l’ensemble. Fabriqué par VIRELLAART à Istanbul, MILAZZO constitue un choix singulier en direct fabricant pour les clients en quête de mobilier de salon moderne de luxe, livré dans le monde entier.",

    "modern|Elegant Sofa Set":
      "ELEGANT Sofa Set apporte un caractère contemporain sophistiqué aux intérieurs modernes, avec ses formes d’assise aux courbes douces, ses coussins superposés et sa disposition équilibrée en 3+3+1+1. Deux canapés trois places coordonnés et deux fauteuils sculpturaux composent un coin salon accueillant, tandis que le tapissage neutre et les détails contrastants raffinés renforcent sa présence visuelle élégante. Fabriqué par VIRELLAART à Istanbul, ELEGANT est un choix en direct fabricant pour les clients en quête de mobilier de salon moderne de luxe, livré dans le monde entier.",

    "modern|Avella Bedroom Set":
      "AVELLA Bedroom Set installe une atmosphère de chambre calme et sophistiquée, avec des lignes architecturales épurées, des formes aux courbes douces et des accents contrastants chaleureux. L’ensemble complet comprend une armoire, un lit coffre, une commode, deux chevets, un pouf, une chiffonnière et un miroir sur pied. Fabriqué par VIRELLAART à Istanbul, AVELLA propose une solution raffinée en direct fabricant pour les clients en quête de mobilier de chambre moderne de luxe, livré dans le monde entier.",

    "modern|Retro Bedroom Set":
      "RETRO Bedroom Set installe une atmosphère de chambre moderne raffinée, avec des lignes architecturales épurées, des proportions équilibrées et des solutions de rangement élégantes. L’ensemble complet comprend une armoire, un lit coffre, une commode, deux chevets et un pouf tapissé. Fabriqué par VIRELLAART à Istanbul, RETRO propose une solution de chambre haut de gamme en direct fabricant, livrée dans le monde entier.",

    "modern|Lazio Bedroom Set":
      "LAZIO Bedroom Set installe une atmosphère de chambre calme et sophistiquée à travers des formes aux courbes douces, des accents en bois chaleureux et des lignes contemporaines épurées. L’ensemble complet comprend une vaste armoire, un lit coffre, une commode, deux chevets coordonnés et un pouf tapissé. Fabriqué par VIRELLAART à Istanbul, LAZIO propose une solution raffinée en direct fabricant pour les clients en quête de mobilier de chambre moderne haut de gamme, livré dans le monde entier.",

    "luxury-classic|Riva Dining Room Set":
      "Riva Dining Room Set déploie une composition luxe-classique imposante, pensée pour les intérieurs de salle à manger sophistiqués. Sa table singulière, ses six chaises tapissées, sa console assortie à miroir et sa vitrine coordonnée forment une collection complète et visuellement unifiée. Des détails décoratifs raffinés et des proportions élégantes confèrent à Riva une forte présence architecturale, tout en conservant le caractère intemporel du modèle d’origine, disponible en ensemble complet ou à la pièce. Contactez VIRELLAART pour les détails de fabrication et de livraison internationale.",

    "modern|Soho Sofa Set":
      "Soho Sofa Set apporte une présence contemporaine raffinée aux salons modernes, grâce à une composition d’assise équilibrée en 3+3+1+1 et un mobilier d’appoint coordonné. Pensée pour les intérieurs résidentiels élégants, la collection peut être commandée avec sa table basse, sa table d’angle et son meuble TV assortis. Contactez VIRELLAART via WhatsApp pour les détails de fabrication, de personnalisation et de livraison internationale.",
  },
};
