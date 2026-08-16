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

    "modern|Nobu Sofa Set":
      "NOBU Sofa Set installe une composition de salon contemporain raffinée, organisée autour d’une assise généreuse en 4+3+1+1. Ses proportions harmonieuses créent un intérieur moderne soigné, tandis que la table basse assortie en deux éléments, la table d’angle et le meuble TV complètent la collection avec un caractère architectural unifié. Pensée pour les intérieurs résidentiels sophistiqués, NOBU est une collection canapé moderne fabriquée sur commande, livrée dans le monde entier par VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Nobu Dining Room Set":
      "NOBU Dining Room Set apporte un caractère contemporain raffiné aux salles à manger sophistiquées. La collection associe une généreuse table de 240 cm à six chaises de salle à manger tapissées assorties et une console coordonnée, pour une composition moderne équilibrée adaptée aux intérieurs résidentiels élégants. Ses lignes épurées, ses finitions chaleureuses et sa présence architecturale distinctive font de NOBU un choix de référence pour les clients recherchant du mobilier de salle à manger moderne, des ensembles de salle à manger de luxe et du mobilier contemporain fabriqué sur commande, livré dans le monde entier par VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et la livraison.",

    "modern|Porto Sofa Set":
      "PORTO Sofa Set est une collection de salon moderne raffinée, organisée autour d’une assise équilibrée en 3+3+1+1 pour les intérieurs résidentiels sophistiqués. Sa composition coordonnée de canapés et fauteuils peut être complétée par une table basse assortie, une table d’angle et un meuble TV, pour une atmosphère contemporaine unifiée. PORTO est pensée pour les clients recherchant un ensemble canapé moderne, du mobilier de salon de luxe et du mobilier contemporain fabriqué sur commande, livré dans le monde entier par VIRELLAART. Contactez-nous sur WhatsApp pour le tarif et les options.",

    "modern|Porto Dining Room Set":
      "PORTO Dining Room Set apporte un caractère contemporain raffiné aux salles à manger sophistiquées, avec une généreuse table de 250 cm, six chaises de salle à manger tapissées assorties et une élégante console à miroir. Ses proportions équilibrées, ses finitions modernes chaleureuses et sa présence architecturale épurée composent un cadre soigné pour les intérieurs résidentiels de luxe. PORTO est pensée pour les clients recherchant du mobilier de salle à manger moderne, des ensembles de salle à manger de luxe et du mobilier contemporain fabriqué sur commande, livré dans le monde entier par VIRELLAART. Écrivez-nous sur WhatsApp pour le tarif et la livraison.",

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

  de: {
    "luxury-classic|Valencia Sofa Set":
      "Valencia kombiniert elfenbeinfarbenen Bezugsstoff mit skulptural geformten Armlehnen, einem geschwungenen Metallgestell und einem aufwendig gearbeiteten Sockel, der aus jedem Blickwinkel sichtbar bleibt. Die ausgewogene 3+3+1+1-Anordnung entfaltet sich besonders in großen, repräsentativen Wohnzimmern, wo sie eine helle, symmetrische Atmosphäre schafft, ohne wuchtig zu wirken. Schreiben Sie dem VIRELLAART-Team auf WhatsApp für den Preis des Valencia-Sets, die verfügbaren Ausführungen und die Lieferdetails in Ihre Stadt.",

    "luxury-classic|Vanessa Sofa Set":
      "Die Vanessa Luxus-Wohnzimmerkollektion von VIRELLAART besticht durch formale Silhouetten, präzise gearbeitete Sitzmöbel und markante geometrische Tische, die zusammen ein gepflegtes Interieur mit starkem Kontrast bilden. Sie passt hervorragend in anspruchsvolle Villen und repräsentative Salons, wo sie eine ausgeprägte visuelle Identität setzt. Sprechen Sie das VIRELLAART-Team auf WhatsApp auf die Preise der Vanessa-Wohnzimmerkollektion, die Sofa-Set-Optionen und die Lieferplanung für Ihr Projekt an.",

    "luxury-classic|Aspendos Sofa Set":
      "Die Aspendos Luxus-Wohnzimmerkollektion von VIRELLAART zeigt sanft gerundete Sitzmöbel, ausgewogene Proportionen und eine ruhige, zeitgemäße Eleganz. Konzipiert für gehobene Villen und großzügige Residenzen, schafft dieses Luxus-Sofa-Set eine einladende und zugleich prestigeträchtige Atmosphäre. Kontaktieren Sie VIRELLAART über WhatsApp für die Verfügbarkeit des Aspendos-Wohnzimmers, Anpassungsmöglichkeiten und Informationen zur weltweiten Lieferung.",

    "luxury-classic|Alex Sofa Set":
      "Alex setzt gemustertes Bordeaux-Polster gegen tiefschwarzes, gestepptes Sitzmöbel und schafft damit bewusst einen kontrastreichen Blickfang im Raum. Die gerollten Armlehnen und die kompakten, klassischen Proportionen passen zu formellen Salons und mittelgroßen bis großen Empfangsräumen, wo diese Farbpalette eine warme, theatralische Stimmung erzeugt. Fragen Sie VIRELLAART auf WhatsApp nach dem Preis des Alex-Sets, den Stoffoptionen und den Lieferdetails.",

    "luxury-classic|Bahar Sofa Set":
      "Bahar vereint elfenbeinfarbenen Bezug mit klar gezogener schwarzer Paspel und zylindrischen Nackenrollen-Kissen, während dunkle Beine und geschwungene Sessel-Gestelle dem Ensemble klare Konturen verleihen. Es passt zu zeitgemäßen Wohnzimmern, die eine helle, neutrale Basis mit schärferem architektonischem Kontrast suchen, und schafft eine ruhige, dennoch pointierte Atmosphäre. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Bahar-Sets, die Bezugsoptionen und die Lieferdetails.",

    "luxury-classic|Deluxe Sofa Set":
      "Der Kontrast zwischen elfenbeinfarbener und anthrazitfarbener Polsterung verleiht der Deluxe-Kollektion eine ausgewogene, zweifarbige Komposition, während die geschwungenen Profile große, zeitgemäße Wohnzimmer optisch weicher wirken lassen. Übereinandergelegte Kissen und polierte goldfarbene Sockel bringen Wärme, ohne die klare Linie des Ensembles zu stören. Fragen Sie VIRELLAART auf WhatsApp nach dem Preis des Deluxe-Sets, den Farboptionen und den Lieferdetails für Ihr Projekt.",

    "luxury-classic|Lugano Sofa Set":
      "Entdecken Sie die Lugano Luxus-Wohnzimmerkollektion von VIRELLAART, erkennbar an anmutigen Silhouetten, dekorativ gearbeiteten Rahmen und einer reichen, formellen Präsenz. Konzipiert für große Residenzen und anspruchsvolle Lounge-Bereiche, verleiht dieses Luxusmöbel dem Wohnzimmer zeitlose Eleganz und visuelle Unterscheidungskraft. Fordern Sie über WhatsApp ein privates Angebot für das Lugano-Wohnzimmer an, inklusive Anpassungsmöglichkeiten und Unterstützung von VIRELLAART bei der internationalen Lieferung.",

    "luxury-classic|Queen Sofa Set":
      "Entdecken Sie die Queen Luxus-Wohnzimmerkollektion von VIRELLAART, bei der sanft gerundete Sitzmöbel, skulpturale Tische und eine architektonisch durchdachte Anordnung ein ruhiges, zeitgemäßes Statement setzen. Konzipiert für gehobene Villen und moderne Residenzen, bringt dieses Luxus-Sofa-Set visuelle Harmonie und dezenten Prestige mit. Senden Sie Ihre Anforderungen für Ihr Luxus-Wohnzimmer über WhatsApp, um Preise für das Queen-Wohnzimmer, individuelle Optionen und Unterstützung bei der Lieferung von VIRELLAART zu erhalten.",

    "luxury-classic|Sena Sofa Set":
      "Entdecken Sie die Sena Luxus-Wohnzimmerkollektion von VIRELLAART, geprägt von formeller Symmetrie, anmutig geschwungenen Profilen und einer distinguierten, klassischen Präsenz. Konzipiert für große Villen und elegante Empfangsräume, schafft dieses Luxusmöbel eine raffinierte, fast zeremonielle Atmosphäre mit starker visueller Autorität. Kontaktieren Sie VIRELLAART über WhatsApp für die Verfügbarkeit des Sena-Wohnzimmers, Anpassungsmöglichkeiten und Informationen zur weltweiten Lieferung.",

    "luxury-classic|Shawl Sofa Set":
      "Entdecken Sie die Shawl Luxus-Wohnzimmerkollektion von VIRELLAART, geprägt von markanten geometrischen Details, skulptural geformten Sitzmöbeln und einer dramatischen, zeitgemäßen Präsenz. Ideal für Villen mit Charakter und raffinierte Interieurs, verleiht dieses Luxusmöbel dem Raum eine starke Persönlichkeit und visuelle Raffinesse. Kontaktieren Sie VIRELLAART über WhatsApp für die Verfügbarkeit des Shawl-Wohnzimmers, Anpassungsmöglichkeiten und Informationen zur weltweiten Lieferung.",

    "luxury-classic|Vizyon Sofa Set":
      "Entdecken Sie die Vizyon Luxus-Wohnzimmerkollektion von VIRELLAART, die sich durch ornamentale Details, skulptural gearbeitete Profile und einen formellen, palastartigen Charakter auszeichnet. Konzipiert für große Villen und elegante Empfangsräume, schafft dieses Luxus-Sofa-Set einen imposanten Blickpunkt mit theatralischer Raffinesse. Kontaktieren Sie VIRELLAART über WhatsApp für die Verfügbarkeit des Vizyon-Wohnzimmers, Anpassungsmöglichkeiten und Informationen zur weltweiten Lieferung.",

    "luxury-classic|Valencia Bedroom Set":
      "Entdecken Sie die Valencia Luxus-Schlafzimmerkollektion von VIRELLAART, geprägt von einem skulptural geformten Kopfteil, eleganter Symmetrie und raffinierten dekorativen Details. Konzipiert für anspruchsvolle Villen und ruhige Elternschlafzimmer, schafft dieses Luxus-Schlafzimmermöbel eine anmutige, prestigeträchtige Atmosphäre mit starker visueller Harmonie. Fordern Sie über WhatsApp ein privates Angebot für das Valencia-Schlafzimmer an, inklusive Set-Optionen und Informationen zum internationalen Versand.",

    "luxury-classic|Aspendos Bedroom Set":
      "Entdecken Sie die Aspendos Luxus-Schlafzimmerkollektion von VIRELLAART, bei der eine markante architektonische Rahmung, gestufte Symmetrie und ein auffälliges Kopfteil einen raffinierten, zeitgemäßen Rückzugsort schaffen. Konzipiert für gehobene Villen und elegante Elternschlafzimmer, bringt dieses Luxus-Schlafzimmermöbel eine starke visuelle Balance und ruhigen Prestige mit sich. Schreiben Sie VIRELLAART auf WhatsApp, um die Preise für das Aspendos-Schlafzimmer, Anpassungsmöglichkeiten und Informationen zur weltweiten Lieferung zu erfahren.",

    "luxury-classic|Deluxe Bedroom Set":
      "Die Deluxe Luxus-Schlafzimmerkollektion von VIRELLAART entfaltet weit geschwungene Linien, gestufte Symmetrie und eine durchdachte architektonische Komposition, die zugleich großzügig und einladend wirkt. Konzipiert für elegante Elternschlafzimmer auf der Suche nach Luxus-Schlafzimmermöbeln, bringt sie visuelle Harmonie und dauerhaften Prestige mit. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Deluxe-Schlafzimmers, Anpassungsmöglichkeiten und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Aspendos Dining Room Set":
      "Die Aspendos Luxus-Esszimmerkollektion von VIRELLAART vereint einen Tisch mit architektonischem Säulenfuß, skulptural geschwungene Sitzmöbel und eine ruhige, ausgewogene Komposition. Konzipiert für elegante Villen und zeitgemäße Essbereiche, bringt dieses Luxus-Esszimmermöbel eine raffinierte Präsenz ohne Übertreibung mit sich. Besprechen Sie Ihr Esszimmer-Projekt mit VIRELLAART auf WhatsApp und erhalten Sie den Preis für Aspendos, Konfigurationshinweise und die Organisation der Lieferung.",

    "luxury-classic|Deluxe Dining Room Set":
      "Die Deluxe Luxus-Esszimmerkollektion von VIRELLAART verbindet einen eleganten ovalen Esstisch mit skulptural gearbeiteten Aufbewahrungsmöbeln und formeller Symmetrie zu einem gepflegten, prestigeträchtigen Interieur. Konzipiert für große Villen und gehobene Empfangsräume, verleiht dieses Luxus-Esszimmermöbel jedem Essen einen besonderen Anlass. Fordern Sie ein detailliertes Angebot für das Deluxe-Esszimmer über WhatsApp an, inklusive individueller Set-Optionen und Informationen zum internationalen Versand.",

    "luxury-classic|Moon Dining Room Set":
      "Die Moon Luxus-Esszimmerkollektion von VIRELLAART drückt zeitgemäße Eleganz durch fließende Silhouetten, skulptural gearbeitete Aufbewahrungsmöbel und eine ausgewogene Tischkomposition aus. Konzipiert für gehobene Villen und moderne Empfangsräume, schafft dieses Luxus-Esszimmermöbel einen unverwechselbaren Blickpunkt mit anmutiger visueller Bewegung. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Moon-Sets, Anpassungsoptionen und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Queen Dining Room Set":
      "Entdecken Sie die Queen Luxus-Esszimmerkollektion von VIRELLAART, geformt durch fließende Silhouetten, skulpturale Möbelformen und sanft gerundete Sitzmöbel. Konzipiert für zeitgemäße Villen und elegante Empfangsräume, schafft dieses Luxus-Esszimmermöbel einen raffinierten Blickpunkt mit selbstbewusstem visuellem Charakter. Fordern Sie ein detailliertes Angebot für das Queen-Esszimmer über WhatsApp an, inklusive individueller Set-Optionen und Informationen zum internationalen Versand.",

    "luxury-classic|Valencia Dining Room Set":
      "Die Valencia Luxus-Esszimmerkollektion von VIRELLAART verbindet einen skulptural gearbeiteten Esstisch, raffinierte Symmetrie und elegante Aufbewahrungselemente zu einem gepflegten, prestigeträchtigen Interieur. Konzipiert für anspruchsvolle Villen und formelle Empfangsräume, bringt dieses Luxus-Esszimmermöbel eine zeitlose visuelle Harmonie mit sich. Senden Sie Ihre Projektanforderungen über WhatsApp, um den Preis der Valencia-Kollektion, maßgeschneiderte Optionen und Unterstützung bei der internationalen Lieferung zu erhalten.",

    "luxury-classic|Aspendos TV Unit":
      "Das Aspendos Luxus-TV-Möbel von VIRELLAART besticht durch ein schlankes, niedriges Profil, weich abgerundete Kanten und skulptural gearbeitete Stützdetails, die einen raffinierten architektonischen Blickpunkt bilden. Konzipiert für elegante Villen und zeitgemäße Wohnbereiche, bringt dieses Design-TV-Möbel Balance, Prestige und visuelle Ruhe mit sich. Sprechen Sie unser Team auf WhatsApp auf ein privates Angebot für das Aspendos-TV-Möbel, die Anpassung und die Versandhinweise an.",

    "luxury-classic|Deluxe TV Unit":
      "Das Deluxe Luxus-TV-Möbel von VIRELLAART vereint ein weit geschwungenes Profil, vertikale Detailarbeit und eine ausgewogene Mischung aus Präsentations- und Stauraumelementen. Konzipiert für elegante Villen und anspruchsvolle Wohnräume, bringt dieses Design-TV-Möbel eine raffinierte Struktur und einen gepflegten Blickpunkt mit sich. Teilen Sie Ihr Wohnzimmerprojekt auf WhatsApp mit, um den Preis des Deluxe-TV-Möbels, individuelle Optionen und die Lieferorganisation von VIRELLAART zu erhalten.",

    "luxury-classic|Moon TV Unit":
      "Das Moon Luxus-TV-Möbel von VIRELLAART verbindet eine architektonische Wandkomposition, integrierte Ausstellungsregale und ein schlankes, niedriges Sideboard zu einem gepflegten, zeitgemäßen Interieur. Konzipiert für gehobene Villen und moderne Wohnbereiche, schafft dieses Design-TV-Möbel eine starke visuelle Struktur und eine elegante Präsentation. Schreiben Sie VIRELLAART auf WhatsApp für die Verfügbarkeit des Moon-TV-Möbels, Anpassungsmöglichkeiten und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Valencia TV Unit":
      "Das Valencia Luxus-TV-Möbel von VIRELLAART zeigt einen skulptural gearbeiteten Bogenrahmen, anmutige Rundungen und raffinierte dekorative Akzente, die zu einem unverwechselbaren Statement werden. Konzipiert für elegante Villen und formelle Wohnräume, bringt dieses Design-TV-Möbel visuellen Prestige und architektonische Balance mit sich. Fordern Sie ein detailliertes Angebot für das Valencia-TV-Möbel über WhatsApp an, inklusive der verfügbaren Optionen und Unterstützung beim internationalen Versand.",

    "luxury-classic|Vanessa Dining Room Set":
      "Die Vanessa Luxus-Esszimmerkollektion von VIRELLAART zeichnet sich durch hochlehnige Stühle, klare geometrische Linien und einen formellen, präzise gearbeiteten Charakter aus. Konzipiert für elegante Villen und anspruchsvolle Empfangsräume, schafft dieses Luxus-Esszimmermöbel ein selbstbewusstes Gefühl des besonderen Anlasses und eine raffinierte visuelle Ordnung. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Vanessa-Sets, Anpassungsoptionen und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Valdera Sofa Set":
      "Die Valdera Luxus-Wohnzimmerkollektion von VIRELLAART vereint skulptural gearbeitete klassische Silhouetten, formelle Symmetrie und eine imposante Wohnzimmerkomposition. Konzipiert für große Villen und distinguierte Empfangsräume, bringt dieses Luxusmöbel zeitlosen Prestige mit einer starken architektonischen Präsenz mit sich. Sprechen Sie das VIRELLAART-Team auf WhatsApp auf die Preise der Valdera-Wohnzimmerkollektion, die Sofa-Set-Optionen und die Lieferplanung für Ihr Projekt an.",

    "luxury-classic|Shawl Dining Room Set":
      "Die Shawl Luxus-Esszimmerkollektion von VIRELLAART vereint einen skulptural gearbeiteten Tisch, weit geschwungene Stuhlprofile und eine dramatische, formelle Komposition. Konzipiert für Villen mit Charakter und elegante Empfangsräume, verleiht dieses Luxus-Esszimmermöbel dem Raum einen kühnen Prestige und echte visuelle Tiefe. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Shawl-Sets, Anpassungsoptionen und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Valdera Dining Room Set":
      "Die Valdera Luxus-Esszimmerkollektion von VIRELLAART zeichnet sich durch ornamentale Silhouetten, formelle Symmetrie und eine stattliche, klassische Präsenz aus. Konzipiert für große Residenzen und anspruchsvolle Essbereiche, schafft dieses Luxus-Esszimmermöbel eine distinguierte Atmosphäre mit starkem visuellem Charakter. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Valdera-Sets, Anpassungsoptionen und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Verona Bedroom Set":
      "Die Verona Luxus-Schlafzimmerkollektion von VIRELLAART verbindet ein hohes, markantes Kopfteil, ausgewogene Proportionen und raffinierte vertikale Details zu einem gepflegten, zeitgemäßen Rückzugsort. Konzipiert für elegante Villen und anspruchsvolle Elternschlafzimmer, bringt dieses Luxus-Schlafzimmermöbel visuelle Harmonie und ein starkes Prestigegefühl mit sich. Sprechen Sie unser Team auf WhatsApp auf die Verfügbarkeit des Verona-Schlafzimmers, Anpassungsmöglichkeiten und die Lieferung in Ihre Residenz an.",

    "luxury-classic|Zümrüt Sofa Set":
      "Die Zümrüt Luxus-Wohnzimmerkollektion von VIRELLAART zeichnet sich durch ornamentale Rahmen, gestepptes Sitzmöbel und eine reich geschichtete klassische Komposition aus. Konzipiert für große Villen und formelle Empfangsräume, schafft dieses Luxusmöbel eine imposante Atmosphäre aus Prestige und dekorativer Eleganz. Sprechen Sie das VIRELLAART-Team auf WhatsApp auf die Preise der Zümrüt-Wohnzimmerkollektion, die Sofa-Set-Optionen und die Lieferplanung für Ihr Projekt an.",

    "luxury-classic|Zümrüt Dining Room Set":
      "Die Zümrüt Luxus-Esszimmerkollektion von VIRELLAART vereint ornamentale Silhouetten, hochlehnige Stühle und formelle Symmetrie zu einem reich komponierten, klassischen Interieur. Konzipiert für große Residenzen und elegante Empfangsräume, bringt dieses Luxus-Esszimmermöbel eine zeremonielle Präsenz und raffinierte visuelle Dramatik mit sich. Senden Sie Ihre Projektanforderungen über WhatsApp, um den Preis der Zümrüt-Kollektion, maßgeschneiderte Optionen und Unterstützung bei der internationalen Lieferung zu erhalten.",

    "luxury-classic|Milano Sofa Set":
      "Die Milano Luxus-Wohnzimmerkollektion von VIRELLAART präsentiert eine opulente klassische Komposition mit gestepptem Sitzmöbel, aufwendig gearbeiteten dekorativen Rahmen und einer reich geschichteten Salonatmosphäre. Konzipiert für große Villen und formelle Empfangsinterieurs, bringt dieses Luxusmöbel unverkennbaren Prestige und zeremonielle Eleganz mit sich. Fordern Sie über WhatsApp ein privates Angebot für das Milano-Wohnzimmer an, inklusive Anpassungsmöglichkeiten und Unterstützung von VIRELLAART bei der internationalen Lieferung.",

    "luxury-classic|Zümrüt TV Unit":
      "Das Zümrüt Luxus-TV-Möbel von VIRELLAART vereint eine ornamentale Bogenkomposition, dekorative Paneele und eine gebieterische, klassische Präsenz. Konzipiert für große Villen und formelle Wohnräume, schafft dieses Design-TV-Möbel einen prestigeträchtigen Blickpunkt mit reichem visuellem Charakter. Fordern Sie ein detailliertes Angebot für das Zümrüt-TV-Möbel über WhatsApp an, inklusive der verfügbaren Optionen und Unterstützung beim internationalen Versand.",

    "luxury-classic|Milano Dining Room Set":
      "Die Milano Luxus-Esszimmerkollektion von VIRELLAART entfaltet ein opulentes klassisches Ambiente mit einem skulptural gearbeiteten Esstisch, hochlehnigen Stühlen und reich gerahmten Vitrinenmöbeln. Konzipiert für große Villen und formelle Anlässe, macht dieses Luxus-Esszimmermöbel jede Mahlzeit zu einem eleganten Ereignis. Fordern Sie ein detailliertes Angebot für das Milano-Esszimmer über WhatsApp an, inklusive individueller Set-Optionen und Informationen zum internationalen Versand.",

    "luxury-classic|Milano Bedroom Set":
      "Die Milano Luxus-Schlafzimmerkollektion von VIRELLAART bringt große klassische Eleganz in anspruchsvolle Interieurs, mit einem ornamentalen Bett, einem imposanten Kleiderschrank und einer reich dekorativen Präsenz. Konzipiert für eine Kundschaft, die Luxus-Schlafzimmermöbel mit zeitlosem Charakter sucht, schafft Milano eine prestigeträchtige Atmosphäre. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Milano-Schlafzimmers, Anpassungsmöglichkeiten und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Milano Blue Sofa Set":
      "Die Milano Blue Luxus-Wohnzimmerkollektion von VIRELLAART zeigt skulptural gearbeitetes klassisches Sitzmöbel, kunstvoll dekorative Rahmen und eine dramatische Salonkomposition. Konzipiert für große Villen und formelle Empfangsräume, schafft dieses Luxusmöbel eine Atmosphäre aus Prestige, Tiefe und zeitlosem Charakter. Schreiben Sie VIRELLAART auf WhatsApp für die Preise der Milano Blue-Wohnzimmerkollektion, Anpassungsoptionen und die Planung der weltweiten Lieferung.",

    "luxury-classic|Milano Blue Dining Room Set":
      "Die Milano Blue Luxus-Esszimmerkollektion von VIRELLAART schafft ein gebieterisches klassisches Ambiente durch einen aufwendig gerahmten Tisch, hochlehnige Stühle und reich aufeinander abgestimmte Vitrinenmöbel. Ideal für große Villen und formelle Anlässe, bringt dieses Luxus-Esszimmermöbel zeremonielle Präsenz und dauerhaften visuellen Prestige mit sich. Schreiben Sie VIRELLAART über WhatsApp, um die Preise für das Milano Blue-Esszimmer, Anpassungsmöglichkeiten und Details zur weltweiten Lieferung zu erfahren.",

    "luxury-classic|Milano Blue Bedroom Set":
      "Die Milano Blue Luxus-Schlafzimmerkollektion von VIRELLAART präsentiert einen großen klassischen Rückzugsort mit einem gestepptem Statement-Bett, einem reich gerahmten Kleiderschrank und aufeinander abgestimmten dekorativen Möbelstücken. Konzipiert für elegante Villen und formelle Elternschlafzimmer, schafft dieses Luxus-Schlafzimmermöbel eine prestigeträchtige, harmonische Atmosphäre. Besprechen Sie die Milano Blue-Kollektion mit VIRELLAART über WhatsApp und erhalten Sie eine individuelle Beratung zu Preis, Optionen und internationaler Lieferung.",

    "luxury-classic|Milano Blue TV Unit":
      "Das Milano Blue Luxus-TV-Möbel von VIRELLAART vereint eine gestreckte klassische Silhouette, reich ornamentale Rahmen und eine gebieterische, niedrige Komposition. Konzipiert für große Villen und formelle Wohnräume, schafft dieses Design-TV-Möbel einen prestigeträchtigen Blickpunkt mit starkem dekorativem Charakter. Kontaktieren Sie VIRELLAART über WhatsApp für den Preis des Milano Blue-TV-Möbels, Anpassungsdetails und Informationen zur weltweiten Lieferung.",

    "luxury-classic|Milano TV Unit":
      "Das Milano Luxus-TV-Möbel von VIRELLAART zeichnet sich durch einen ornamentalen architektonischen Rahmen, ausgewogene Symmetrie und ein reich dekoratives, niedriges Sideboard aus. Konzipiert für große Villen und formelle Wohnräume, schafft dieses Design-TV-Möbel einen eleganten Blickpunkt mit zeitlos klassischem Charakter. Teilen Sie Ihr Wohnzimmerprojekt auf WhatsApp mit, um den Preis des Milano-TV-Möbels, individuelle Optionen und die Lieferorganisation von VIRELLAART zu erhalten.",

    "luxury-classic|Lina Sofa Set":
      "Die Lina Luxus-Wohnzimmerkollektion von VIRELLAART bringt präzise gearbeitete Sitzmöbel, skulptural geformte Armlehnen und einen markanten, architektonischen Couchtisch in ein ausgewogenes, elegantes Interieur. Geeignet für gehobene Villen und anspruchsvolle Empfangsräume, bietet dieses Luxus-Sofa-Set gepflegten Komfort und eine starke visuelle Ordnung. Schreiben Sie VIRELLAART auf WhatsApp für die Preise der Lina-Wohnzimmerkollektion, Anpassungsoptionen und die Planung der weltweiten Lieferung.",

    "luxury-classic|Lina Dining Room Set":
      "Die Lina Luxus-Esszimmerkollektion von VIRELLAART verbindet einen kraftvollen architektonischen Tisch, präzise gearbeitete hochlehnige Stühle und diszipliniert gesetzte vertikale Details zu einem gepflegten, formellen Ambiente. Konzipiert für anspruchsvolle Villen und elegante Empfangsräume, bringt dieses Luxus-Esszimmermöbel visuelle Balance, Prestige und eine raffinierte Struktur mit sich. Schreiben Sie VIRELLAART über WhatsApp, um die Preise für das Lina-Esszimmer, Anpassungsmöglichkeiten und Details zur weltweiten Lieferung zu erfahren.",

    "luxury-classic|Zerafet Dining Room Set":
      "Die Zerafet Luxus-Esszimmerkollektion von VIRELLAART entfaltet anmutige klassische Eleganz durch geschwungene Stuhlsilhouetten, formelle Symmetrie und reich komponierte Vitrinenmöbel. Konzipiert für distinguierte Villen und raffinierte Empfangsräume, bringt dieses Luxus-Esszimmermöbel Wärme, Zeremonie und zeitlosen Charakter mit sich. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Zerafet-Sets, Anpassungsoptionen und Unterstützung bei der weltweiten Lieferung.",

    "luxury-classic|Zerafet Sofa Set":
      "Die Zerafet Luxus-Wohnzimmerkollektion von VIRELLAART vereint anmutige klassische Silhouetten, ausgewogenes Sitzmöbel und eine einladende Salonkomposition. Konzipiert für elegante Villen und formelle Empfangsräume, bringt dieses Luxus-Sofa-Set Wärme, Symmetrie und zeitlose Raffinesse in das Interieur. Fordern Sie über WhatsApp ein privates Angebot für das Zerafet-Wohnzimmer an, inklusive Anpassungsmöglichkeiten und Unterstützung von VIRELLAART bei der internationalen Lieferung.",

    "luxury-classic|Saltanat Bedroom Set":
      "Die Saltanat Luxus-Schlafzimmerkollektion von VIRELLAART besticht durch ein ornamentales Statement-Kopfteil, tiefe Steppung und eine reich geschichtete klassische Komposition. Konzipiert für palastartige Villen und distinguierte Elternschlafzimmer, bringt dieses Luxus-Schlafzimmermöbel zeremonielle Größe und unverkennbaren Prestige mit sich. Besprechen Sie die Saltanat-Kollektion mit VIRELLAART über WhatsApp und erhalten Sie eine individuelle Beratung zu Preis, Optionen und internationaler Lieferung.",

    "luxury-classic|Saltanat Dining Room Set":
      "Die Saltanat Luxus-Esszimmerkollektion von VIRELLAART setzt durch skulpturale Formen, gebieterische Symmetrie und reich ornamentale Details ein palastartiges Statement. Konzipiert für große Villen und formelle Anlässe, bringt dieses Luxus-Esszimmermöbel zeremonielle Eleganz und unverkennbaren Prestige mit sich. Sprechen Sie VIRELLAART auf WhatsApp auf ein privates Angebot für das Saltanat-Esszimmer, die Set-Anpassung und die Versandunterstützung an.",

    "luxury-classic|Saltanat Green Dining Room Set":
      "Die Saltanat Green Luxus-Esszimmerkollektion von VIRELLAART entfaltet eine dramatische klassische Komposition mit skulpturalem Sitzmöbel, ornamentaler Rahmung und einer reich zeremoniellen Atmosphäre. Konzipiert für palastartige Villen und distinguierte Empfangsräume, erzeugt dieses Luxus-Esszimmermöbel eine gebieterische visuelle Wirkung und dauerhaften Prestige. Senden Sie Ihre Projektanforderungen über WhatsApp, um den Preis der Saltanat Green-Kollektion, maßgeschneiderte Optionen und Unterstützung bei der internationalen Lieferung zu erhalten.",

    "luxury-classic|Saltanat Sofa Set":
      "Die Saltanat Luxus-Wohnzimmerkollektion von VIRELLAART verleiht großen Interieurs einen palastartigen Charakter durch skulpturales Sitzmöbel, weit geschwungene ornamentale Linien und eine reich ausgewogene Salonkomposition. Konzipiert für formelle Villen und distinguierte Empfangsräume, schafft dieses Luxus-Sofa-Set zeremonielle Eleganz und gebieterischen visuellen Prestige. Kontaktieren Sie VIRELLAART über WhatsApp für die Verfügbarkeit des Saltanat-Wohnzimmers, Anpassungsmöglichkeiten und Informationen zur weltweiten Lieferung.",

    "luxury-classic|Saltanat Green Sofa Set":
      "Die Saltanat Green Luxus-Wohnzimmerkollektion von VIRELLAART kombiniert skulptural gearbeitetes klassisches Sitzmöbel, aufwendige ornamentale Rahmen und einen dramatischen Kontrast zu einem unverkennbar königlichen Interieur. Konzipiert für palastartige Villen und formelle Empfangsräume, prägt dieses Luxusmöbel eine gebieterische Präsenz und zeremonielle Eleganz. Senden Sie Ihre Anforderungen für Ihr Luxus-Wohnzimmer über WhatsApp, um Preise für das Saltanat Green-Wohnzimmer, individuelle Optionen und Unterstützung bei der Lieferung von VIRELLAART zu erhalten.",

    "luxury-classic|Sultan Bedroom Set":
      "Die Sultan Schlafzimmerkollektion von VIRELLAART zeichnet sich durch ein gekröntes Statement-Kopfteil, formelle Symmetrie und aufeinander abgestimmte klassische Möbel aus, die ein beeindruckendes Elternschlafzimmer ergeben. Konzipiert für Luxusvillen und distinguierte Residenzen, schafft diese Sultan-Schlafzimmerkollektion königlichen Komfort mit einer gebieterischen visuellen Identität. Sprechen Sie unser Team auf WhatsApp auf die Verfügbarkeit des Sultan-Schlafzimmers, Anpassungsmöglichkeiten und die Lieferung in Ihre Residenz an.",

    "luxury-classic|Sultan Green Bedroom Set":
      "Die Sultan Green Luxus-Schlafzimmerkollektion von VIRELLAART inszeniert eine königliche klassische Komposition mit gekröntem Kopfteil, ornamentaler Rahmung und aufeinander abgestimmten Statement-Möbeln. Konzipiert für palastartige Villen und formelle Elternschlafzimmer, schafft dieses Luxus-Schlafzimmermöbel eine raffinierte Symmetrie und gebieterischen visuellen Prestige. Teilen Sie Ihre Anforderungen für das Elternschlafzimmer über WhatsApp, um die Preise für das Sultan Green-Schlafzimmer, individuelle Optionen und die Lieferplanung von VIRELLAART zu erhalten.",

    "luxury-classic|Sultan Sofa Set":
      "Die Sultan Luxus-Wohnzimmerkollektion von VIRELLAART präsentiert eine königliche Salonkomposition mit gekrönten Silhouetten, aufwendiger ornamentaler Rahmung und ausgewogenem, formellem Sitzmöbel. Konzipiert für palastartige Villen und distinguierte Empfangsräume, bringt dieses Luxusmöbel zeremonielle Größe mit raffinierter visueller Harmonie mit sich. Schreiben Sie VIRELLAART auf WhatsApp für die Preise der Sultan-Wohnzimmerkollektion, Anpassungsoptionen und die Planung der weltweiten Lieferung.",

    "luxury-classic|Sultan Green Sofa Set":
      "Sultan Sofa Green verbindet satt-grünen Bezugsstoff mit einem geschnitzten klassischen Rahmen und aufeinander abgestimmten Akzentkissen und macht das Sitzmöbel dadurch klar zum Zentrum des Raumes. Die formelle 3+3+1+1-Anordnung passt zu großzügigen Salons und Empfangsräumen, in denen der satte Farbton eine reiche, gesetzte Atmosphäre erzeugt. Fragen Sie VIRELLAART auf WhatsApp nach dem Preis des Sultan-Sofa-Sets, den verfügbaren Ausführungen und den Lieferdetails.",

    "luxury-classic|Sultan Green Dining Room Set":
      "Sultan Green stellt einen ovalen Tisch mit dunkelgrünen Intarsien, einem geschnitzten Säulenfuß und sechs hochlehnigen Stühlen in den Mittelpunkt des Esszimmers. Cremefarbene Paneele, grüne marmorierte Oberflächen und goldfarbene Schnitzereien setzen sich über Sideboard und Vitrine fort und schaffen eine zeremonielle Atmosphäre für große, formelle Esszimmer. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des kompletten Sets, die verfügbaren Ausführungen und die Lieferdetails.",

    "luxury-classic|Marsilya Bedroom Set":
      "Das Marsilya-Schlafzimmer verbindet raffiniert zeitgemäßes Design mit einem weich gepolsterten Bett, einem skulptural geformten Kleiderschrank und einem abgestimmten Frisierbereich, ergänzt durch warme Neutraltöne und elegante Champagner-Gold-Akzente. Teilen Sie Ihre Anforderungen für das Elternschlafzimmer über WhatsApp, um die Preise für das Marsilya-Schlafzimmer, individuelle Optionen und die Lieferplanung von VIRELLAART zu erhalten.",

    "luxury-classic|Rio Bedroom Set":
      "Das Rio-Schlafzimmer von VIRELLAART zeigt ein raffiniertes, zeitgemäßes Schlafzimmer in warmen Neutraltönen, in dem ein weich gepolstertes Statement-Bett mit passendem Kleiderschrank, Nachttischen und Frisierbereich harmoniert. Die ruhigen architektonischen Linien schaffen eine elegante Atmosphäre für das Elternschlafzimmer. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis des Rio-Schlafzimmers, Beratung zur Anpassung und die Planung der weltweiten Lieferung.",

    "modern|Aura Corner Sofa Set":
      "Das Aura Corner Sofa Set bringt großzügigen, modularen Komfort in zeitgemäße Interieurs, mit einer Eckkomposition von 375 × 350 cm, sanft skulptierter Polsterung und einer ruhigen, neutralen Farbpalette. Vervollständigen Sie das Ensemble mit dem passenden Statement-Sessel und dem Couchtisch. Kontaktieren Sie VIRELLAART auf WhatsApp für die Bezugsoptionen, Fertigungsdetails und die Planung der weltweiten Lieferung.",

    "modern|Florida Sofa Set":
      "Florida Sofa Set zeigt eine klare, moderne Präsenz mit weichen Rundungen, ausgewogenen Proportionen und einem raffinierten Luxusgefühl. Konzipiert für elegante, zeitgemäße Interieurs, bietet diese Kollektion einladenden Sitzkomfort bei gleichzeitig anspruchsvoller Silhouette – eine starke Wahl für alle, die modernes Wohnzimmermobiliar mit hoher visueller Wirkung suchen. Schreiben Sie VIRELLAART auf WhatsApp für den Preis des Florida Sofa Sets und die Lieferdetails.",

    "modern|Ibiza Sofa Set":
      "Ibiza Sofa Set verbindet sanfte architektonische Kurven mit einem ruhigen, zeitgemäßen Profil. Die ausgewogene 3+3+1+1-Komposition schafft ein gepflegtes Wohnzimmer, das großzügig wirkt, ohne schwer zu erscheinen. Konzipiert für moderne Interieurs, bringt Ibiza starke visuelle Präsenz, einladenden Komfort und einen klaren Luxus-Charakter mit sich, ergänzt durch den passenden Couchtisch. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis und die Anpassungsmöglichkeiten.",

    "modern|Prada Sofa Set":
      "PRADA Sofa Set bringt skulpturalen Komfort in zeitgemäße Wohnräume, mit zwei aufeinander abgestimmten Dreisitzer-Sofas und zwei passenden Sesseln. Die ausgewogene 3+3+1+1-Komposition vereint sanft gerundete Silhouetten, neutrale Polsterung und raffinierte dunkle Akzente zu einem eleganten Sitzbereich für moderne Interieurs. Gefertigt von VIRELLAART in Istanbul, ist PRADA eine anspruchsvolle Wahl direkt vom Hersteller für Kundinnen und Kunden, die moderne Luxus-Wohnzimmermöbel mit weltweiter Lieferung suchen.",

    "modern|Vito Sofa Set":
      "VITO Sofa Set schafft eine raffinierte, moderne Wohnzimmeratmosphäre durch seine ausgewogene 3+3+1+1-Sitzkomposition und seine klare, zeitgemäße Silhouette. Konzipiert für elegante Wohnräume, verbindet diese Luxus-Sofakollektion visuelle Harmonie mit einer großzügigen Anordnung, ideal für moderne Wohnzimmer. Ergänzt durch ein zweiteiliges Couchtisch-Set, richtet sich VITO an Kundinnen und Kunden auf der Suche nach anspruchsvollen, zeitgemäßen Wohnzimmermöbeln. Kontaktieren Sie VIRELLAART auf WhatsApp für den Preis und die Lieferung.",

    "modern|Ay Işığı Sofa Set":
      "AY IŞIĞI Sofa Set bringt einen klaren, präzise gearbeiteten Charakter in zeitgemäße Interieurs, mit strukturierten Rückenkissen, schlanken, erhöhten Beinen und kontrastierenden Akzentsesseln. Die ausgewogene 3+3+1+1-Konfiguration ergibt ein vollständiges, modernes Wohnzimmer-Arrangement mit einem visuell leichten Profil. Eine unverwechselbare Wahl für alle, die ein modernes graues Sofa-Set, ein vierteiliges Luxus-Wohnzimmerset und zeitgemäßes Designmobiliar von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Optionen.",

    "modern|Bahar Sofa Set":
      "BAHAR Sofa Set zeigt in seiner modernen Edition einen klaren, architektonischen Charakter durch breite, eckige Armlehnen, strukturierte Kissen und eine ruhige, niedrige Silhouette. Die 3+3+1+1-Anordnung kombiniert hell getönte Sofas mit kontrastierenden Akzentsesseln zu einem ausgewogenen, zeitgemäßen Wohnzimmer. Eine unverwechselbare Wahl für alle, die ein modernes weißes Sofa-Set, minimalistische Luxus-Sitzmöbel und Designmobiliar von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Beyrut Sofa Set":
      "BEYRUT Sofa Set setzt mit seiner dunkel getönten Komposition, breiten geometrischen Armlehnen und präzise segmentierter Rückenkonstruktion eine selbstbewusste, architektonische Präsenz. Das vollständige 3+3+1+1-Arrangement ergibt ein ausgewogenes Luxus-Wohnzimmer, dessen kontrastierende Akzentkissen die moderne Identität zusätzlich schärfen. Eine ausdrucksstarke Wahl für alle, die ein dunkelgraues Sofa-Set, zeitgemäße Wohnzimmermöbel und eine vierteilige moderne Sitzkollektion von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Anpassung.",

    "modern|Boston Sofa Set":
      "BOSTON Sofa Set setzt ein weiches, architektonisches Statement mit gerundeten Sockeln, umschließenden Armlehnen und gestepptem Sitzdetail. Die 3+3+1+1-Komposition kombiniert Anthrazit- und Cremetöne zu einem ausgewogenen, zeitgemäßen Wohnzimmer. Eine unverwechselbare Wahl für alle, die ein modernes, geschwungenes Sofa-Set, Luxus-Wohnzimmermöbel und Designer-Sitzmöbel von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Burgaz Sofa Set":
      "BURGAZ Sofa Set bringt mit geschichteten Rückenkissen, breiten gepolsterten Armlehnen und einer raffinierten, zweifarbigen Komposition einen selbstbewussten, zeitgemäßen Charakter mit sich. Das vollständige 3+3+1+1-Arrangement balanciert anthrazitgraues und warmes, taupefarbenes Sitzmöbel zu einem anspruchsvollen, modernen Wohnzimmer. Eine unverwechselbare Wahl für alle, die ein modernes, zweifarbiges Sofa-Set, Luxus-Wohnzimmermöbel und Designer-Sitzmöbel von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Optionen.",

    "modern|Dubai Sofa Set":
      "DUBAİ Sofa Set schafft ein einladendes, zeitgemäßes Wohnzimmer mit tiefen Sitzflächen, breiten gepolsterten Armlehnen und großzügig geschichteten Rückenkissen. Die vollständige 3+3+1+1-Komposition verbindet eine raffinierte, hellgraue Palette mit markanten blauen Akzenten zu einem großzügigen, ausgewogenen, modernen Interieur. Eine elegante Wahl für alle, die ein Luxus-Sofa-Set in Grau, vierteilige zeitgemäße Wohnzimmermöbel und hochwertige moderne Sitzmöbel von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Eftelya Sofa Set":
      "EFTELYA Sofa Set bringt mit seinem geflügelten Seitenprofil, den kanneliert abgesetzten Rückendetails und großzügig geschichteten Kissen einen unverwechselbaren, skulpturalen Charakter mit sich. Das vollständige 3+3+1+1-Arrangement ergibt eine anspruchsvolle graue Wohnzimmerkomposition mit starker visueller Tiefe und eleganten Proportionen. Eine raffinierte Wahl für alle, die ein modernes graues Sofa-Set, vierteilige Luxus-Wohnzimmermöbel und zeitgemäße Designer-Sitzmöbel von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Anpassung.",

    "modern|Nobu Sofa Set":
      "NOBU Sofa Set schafft eine anspruchsvolle, zeitgemäße Wohnzimmerkomposition mit einer großzügigen 4+3+1+1-Sitzanordnung. Die ausgewogenen Proportionen ergeben ein gepflegtes, modernes Interieur, während der passende zweiteilige Couchtisch, der Beistelltisch und das TV-Möbel die Kollektion mit einem einheitlichen architektonischen Charakter vervollständigen. Konzipiert für anspruchsvolle Wohnräume, ist NOBU eine moderne Sofa-Kollektion, die auf Bestellung gefertigt und weltweit von VIRELLAART geliefert wird. Kontaktieren Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Nobu Dining Room Set":
      "NOBU Dining Room Set bringt einen raffinierten, zeitgemäßen Charakter in anspruchsvolle Esszimmerinterieurs. Die Kollektion verbindet einen großzügigen 240-cm-Esstisch mit sechs passenden, gepolsterten Esszimmerstühlen und einer abgestimmten Konsole zu einer ausgewogenen, modernen Komposition für elegante Wohnräume. Klare Proportionen, warme Oberflächen und eine unverwechselbare architektonische Präsenz machen NOBU zu einer starken Wahl für Kundinnen und Kunden, die modernes Esszimmermobiliar, Luxus-Esszimmersets und auf Bestellung gefertigtes, zeitgemäßes Mobiliar mit weltweiter Lieferung von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Porto Sofa Set":
      "PORTO Sofa Set ist eine raffinierte, moderne Wohnzimmerkollektion mit einer ausgewogenen 3+3+1+1-Sitzanordnung für anspruchsvolle Wohnräume. Die aufeinander abgestimmte Komposition aus Sofas und Sesseln lässt sich mit einem passenden Couchtisch, Beistelltisch und TV-Möbel vervollständigen, für eine einheitliche, zeitgemäße Atmosphäre. PORTO richtet sich an Kundinnen und Kunden, die ein modernes Sofa-Set, Luxus-Wohnzimmermöbel und auf Bestellung gefertigtes, zeitgemäßes Mobiliar mit weltweiter Lieferung von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Optionen.",

    "modern|Porto Dining Room Set":
      "PORTO Dining Room Set bringt einen raffinierten, zeitgemäßen Charakter in anspruchsvolle Esszimmerinterieurs, mit einem großzügigen 250-cm-Esstisch, sechs passenden, gepolsterten Esszimmerstühlen und einer eleganten Konsole mit Spiegel. Ausgewogene Proportionen, warme moderne Oberflächen und eine klare architektonische Präsenz schaffen ein gepflegtes Ambiente für luxuriöse Wohnräume. PORTO richtet sich an Kundinnen und Kunden, die modernes Esszimmermobiliar, Luxus-Esszimmersets und auf Bestellung gefertigtes, zeitgemäßes Mobiliar mit weltweiter Lieferung von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Gizem Sofa Set":
      "GIZEM Sofa Set verbindet eine schlanke, zeitgemäße Silhouette mit verstellbaren Kopfstützen und ausklappbaren Fußteilen für ein flexibles, modernes Wohnen. Das vollständige 3+3+1+1-Arrangement zeigt raffiniertes graues Sitzmöbel, strukturierte Kissen und erhöhte dunkle Gestelle, während das integrierte Bedienelement eine technologieaffine Note setzt. Eine unverwechselbare Wahl für alle, die ein modernes Relax-Sofa-Set, graue Luxus-Wohnzimmermöbel und hochwertige Relaxsitzmöbel von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Optionen.",

    "modern|Hünkar Sofa Set":
      "HÜNKAR Sofa Set schafft ein helles, zeitgemäßes Wohnzimmer mit klarem, weißem Sitzmöbel, verstellbaren Kopfstützen und einem markanten, warmen Außenrahmen aus Holz. Das vollständige 3+3+1+1-Arrangement verbindet schlanke Sofas mit skulptural kannelierten Sesseln und balanciert so architektonische Struktur mit einem luftigen, visuellen Charakter. Eine raffinierte Wahl für alle, die ein modernes, weißes Sofa-Set, Wohnzimmermöbel mit Holzrahmen und Luxus-Sitzmöbel von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Anpassung.",

    "modern|Orion Sofa Set":
      "ORION Sofa Set schafft eine anspruchsvolle, zeitgemäße Atmosphäre mit seiner ausgewogenen 3+3+1+1-Sitzanordnung, eleganten Proportionen und raffiniertem Komfort. Konzipiert für moderne Wohnräume, verbindet diese Kollektion eine klare, architektonische Silhouette mit einem warmen, einladenden Charakter. Eine stilvolle Wahl für alle, die moderne Luxus-Sofa-Sets und hochwertige Wohnzimmermöbel von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Milano Bedroom Set":
      "MILANO Bedroom Set schafft in seiner modernen Edition eine raffinierte, zeitgemäße Atmosphäre mit klaren architektonischen Linien, ausgewogenen Proportionen und eleganten Stauraumlösungen. Konzipiert für moderne Luxusinterieurs, verbindet diese Schlafzimmerkollektion Einfachheit mit anspruchsvoller visueller Harmonie. Eine stilvolle Wahl für alle, die modernes Schlafzimmermobiliar und Luxus-Schlafzimmerkollektionen von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Optionen.",

    "modern|Kano Bedroom Set":
      "KANO Bedroom Set schafft eine anspruchsvolle, zeitgemäße Schlafzimmeratmosphäre mit ausgewogenen Proportionen, eleganten Stauraumlösungen und einem raffinierten, architektonischen Charakter. Konzipiert für moderne Luxusinterieurs, verbindet diese Kollektion funktionalen Komfort mit zeitloser visueller Harmonie. Eine hochwertige Wahl für alle, die modernes Schlafzimmermobiliar und zeitgemäße Luxus-Schlafzimmersets von VIRELLAART suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Soho Dining Room Set":
      "SOHO Dining Room Set schafft eine anspruchsvolle Esszimmeratmosphäre mit klaren, zeitgemäßen Linien, raffinierten Proportionen und einer luxuriösen Interieur-Präsenz. Konzipiert für moderne Häuser, verbindet diese Kollektion eleganten Sitzkomfort beim Essen mit zeitlosen architektonischen Details. Eine hochwertige Wahl für alle, die modernes Esszimmermobiliar und zeitgemäße Esszimmerkollektionen von VIRELLAART suchen. Schreiben Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Zena Sofa Set":
      "ZENA Sofa Set schafft eine anspruchsvolle, moderne Wohnzimmeratmosphäre mit seiner ausgewogenen 3+3+1+1-Sitzkomposition, raffiniert strukturierter Polsterung und markanten schwarzen Gestellakzenten. Entworfen und gefertigt von VIRELLAART, verbindet ZENA zeitgemäße Eleganz mit hochwertigem Komfort für Kundinnen und Kunden, die moderne Luxus-Sofa-Sets und exklusive Wohnzimmermöbel suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Anpassung.",

    "modern|Zena Dining Room Set":
      "ZENA Dining Room Set bringt zeitgemäßen Luxus in moderne Interieurs, mit einem eleganten Esstisch, sechs gepolsterten Stühlen, einer passenden Konsole und einem dekorativen Spiegel. Mit raffinierten Proportionen und einem anspruchsvollen, architektonischen Charakter steht ZENA für modernes Esszimmermobiliar, gefertigt von VIRELLAART für gehobene Wohnräume. Schreiben Sie uns auf WhatsApp für den Preis und die Lieferung.",

    "modern|Orion Dining Room Set":
      "ORION Dining Room Set schafft ein anspruchsvolles, zeitgemäßes Ambiente mit einem sanft gerundeten Esstisch, sechs gepolsterten Stühlen und einer passenden Konsole mit dekorativem Spiegel. Ausgewogene Details in Creme, Schwarz und warmen Metalltönen verleihen der Kollektion einen unverwechselbaren, architektonischen Charakter. Eine raffinierte Wahl von VIRELLAART für alle, die ein modernes Luxus-Esszimmerset mit sechs Stühlen und eleganter Konsole suchen. Kontaktieren Sie uns auf WhatsApp für den Preis und die Optionen.",

    "modern|Trend Sofa Set":
      "TREND Sofa Set schafft eine raffinierte, zeitgemäße Wohnzimmeratmosphäre mit sanft gerundeten Silhouetten, großzügigen Kissen und einer ausgewogenen 3+3+1+1-Sitzanordnung. Zwei aufeinander abgestimmte Dreisitzer-Sofas und zwei passende Sessel bilden einen eleganten Sitzbereich, während die warme, neutrale Polsterung und dezente dunkle Akzente den modernen Charakter unterstreichen. Gefertigt von VIRELLAART in Istanbul, ist TREND eine Wahl direkt vom Hersteller für Kundinnen und Kunden, die anspruchsvolle, moderne Wohnzimmermöbel mit weltweiter Lieferung suchen.",

    "modern|Milazzo Sofa Set":
      "MILAZZO Sofa Set bringt einen ruhigen, anspruchsvollen Charakter in zeitgemäße Wohnräume, mit sanft gerundeten Silhouetten, geschichteten Kissen und raffinierten, kontrastierenden Seitendetails. Das ausgewogene 3+3+1+1-Arrangement vereint zwei aufeinander abgestimmte Dreisitzer-Sofas mit zwei skulptural geformten Sesseln zu einem eleganten Sitzbereich, ergänzt durch den passenden Couchtisch. Gefertigt von VIRELLAART in Istanbul, ist MILAZZO eine unverwechselbare Wahl direkt vom Hersteller für moderne Luxus-Wohnzimmermöbel mit weltweiter Lieferung.",

    "modern|Elegant Sofa Set":
      "ELEGANT Sofa Set bringt einen anspruchsvollen, zeitgemäßen Charakter in moderne Wohnräume, durch sanft gerundete Sitzformen, geschichtete Kissen und eine ausgewogene 3+3+1+1-Anordnung. Zwei aufeinander abgestimmte Dreisitzer-Sofas und zwei skulptural geformte Sessel schaffen einen einladenden Sitzbereich, während die neutrale Polsterung und raffinierte Kontrastdetails die elegante visuelle Präsenz unterstreichen. Gefertigt von VIRELLAART in Istanbul, ist ELEGANT eine Wahl direkt vom Hersteller für moderne Luxus-Wohnzimmermöbel mit weltweiter Lieferung.",

    "modern|Avella Bedroom Set":
      "AVELLA Bedroom Set schafft eine ruhige, anspruchsvolle Schlafzimmeratmosphäre mit klaren architektonischen Linien, sanft gerundeten Formen und warmen Kontrastakzenten. Das vollständige Set umfasst Kleiderschrank, Bettkasten-Bett, Kommode, zwei Nachttische, Pouf, Kommodenschrank und Standspiegel. Gefertigt von VIRELLAART in Istanbul, bietet AVELLA eine raffinierte Lösung direkt vom Hersteller für moderne Luxus-Schlafzimmermöbel mit weltweiter Lieferung.",

    "modern|Retro Bedroom Set":
      "RETRO Bedroom Set schafft eine raffinierte, moderne Schlafzimmeratmosphäre mit klaren architektonischen Linien, ausgewogenen Proportionen und eleganten Stauraumlösungen. Das vollständige Set umfasst Kleiderschrank, Bettkasten-Bett, Kommode, zwei Nachttische und einen gepolsterten Pouf. Gefertigt von VIRELLAART in Istanbul, bietet RETRO eine hochwertige Schlafzimmerlösung direkt vom Hersteller mit weltweiter Lieferung.",

    "modern|Lazio Bedroom Set":
      "LAZIO Bedroom Set schafft eine ruhige, anspruchsvolle Schlafzimmeratmosphäre durch sanft gerundete Formen, warme Holzakzente und klare, zeitgemäße Linien. Das vollständige Set umfasst einen geräumigen Kleiderschrank, ein Bettkasten-Bett, eine Kommode, zwei aufeinander abgestimmte Nachttische und einen gepolsterten Pouf. Gefertigt von VIRELLAART in Istanbul, bietet LAZIO eine raffinierte Lösung direkt vom Hersteller für hochwertige moderne Schlafzimmermöbel mit weltweiter Lieferung.",

    "luxury-classic|Riva Dining Room Set":
      "Das Riva Esszimmerset präsentiert eine gebieterische Luxus-Classic-Komposition für anspruchsvolle Esszimmerinterieurs. Der markante Tisch, sechs gepolsterte Esszimmerstühle, die passende Konsole mit Spiegel und die dazugehörige Vitrine bilden eine vollständige, visuell einheitliche Kollektion. Raffinierte dekorative Details und elegante Proportionen verleihen Riva eine starke architektonische Präsenz und bewahren zugleich den zeitlosen Charakter des Originaldesigns – erhältlich als komplettes Set oder als Einzelstücke. Kontaktieren Sie VIRELLAART für Fertigungsdetails und Informationen zur internationalen Lieferung.",

    "modern|Soho Sofa Set":
      "Das Soho Sofa Set bringt eine raffinierte, zeitgemäße Präsenz in moderne Wohnzimmer, mit einer ausgewogenen 3+3+1+1-Sitzkomposition und passend abgestimmten Beistellmöbeln. Konzipiert für elegante Wohninterieurs, kann die Kollektion mit dem passenden Couchtisch, Beistelltisch und TV-Möbel bestellt werden. Kontaktieren Sie VIRELLAART über WhatsApp für Fertigungsdetails, Anpassungsmöglichkeiten und Informationen zur internationalen Lieferung.",
  },
};
