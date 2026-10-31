const translations: Record<string, string> = {
  'Primary': 'Navigation principale',
  'Let\'s talk': 'Discutons',
  'Close menu': 'Fermer le menu', 'Open menu': 'Ouvrir le menu',
  'Home': 'Accueil', 'About': 'À propos', 'Skills': 'Compétences', 'Experience': 'Expérience', 'Projects': 'Projets', 'Education': 'Formation', 'Contact': 'Contact',
  'Software Engineer': 'Ingénieur logiciel', 'Backend Developer': 'Développeur Backend', 'Full Stack Developer': 'Développeur Full Stack',
  'Software Engineer · Backend · Full Stack': 'Ingénieur logiciel · Backend · Full Stack',
  'Software Engineer building scalable digital experiences.': 'Ingénieur logiciel, je conçois des expériences numériques évolutives.',
  'Available for opportunities': 'Ouvert aux opportunités',
  'Professional journey': 'Parcours professionnel', 'Engineering roles': 'Expériences professionnelles', 'Engineering degrees': 'Diplômes en ingénierie', 'Working languages': 'Langues de travail',
  'Explore My Work': 'Découvrir mes projets', 'Download My CV': 'Télécharger mon CV', 'Connect': 'Me contacter', 'Scroll to About': 'Défiler vers À propos',
  'Core technologies:': 'Technologies principales :',
  'Engineering the parts of software that have to': 'Concevoir les composants logiciels qui doivent', 'keep working': 'continuer à fonctionner', 'when nobody is watching.': 'même lorsque personne ne les surveille.',
  'See how that played out': 'Voir comment cela s’est concrétisé', 'Selected facts': 'Quelques informations', 'Discipline': 'Spécialité', 'Current focus': 'Domaine actuel', 'Approach': 'Approche', 'Languages': 'Langues',
  'Software Engineering & Information Systems': 'Génie logiciel et systèmes d’information', 'Backend · Distributed systems': 'Backend · Systèmes distribués', 'Clean code, maintainable architecture': 'Code propre, architecture maintenable', 'Arabic · French · English': 'Arabe · Français · Anglais',
  'Capabilities': 'Compétences', 'The stack I reach for, and': 'Les technologies que je privilégie, et', 'why it fits the problem.': 'pourquoi elles répondent au besoin.',
  'A backend-heavy toolkit sharpened by real production work — every technology below was used on a shipped project, not collected from a tutorial.': 'Un ensemble de compétences orienté backend, renforcé par des expériences en production : chaque technologie présentée a été utilisée dans un véritable projet.',
  'Backend & APIs': 'Backend et API', 'Frontend': 'Frontend', 'Databases': 'Bases de données', 'DevOps & Delivery': 'DevOps et déploiement', 'Test & Automation': 'Tests et automatisation',
  'Service design, REST contracts and clean layering.': 'Conception de services, contrats REST et architecture en couches.', 'Typed, component-driven interfaces that stay maintainable.': 'Interfaces typées et modulaires, faciles à maintenir.', 'Schema design and reliable data integration.': 'Conception de schémas et intégration fiable des données.', 'Containers, pipelines and reproducible releases.': 'Conteneurs, pipelines et déploiements reproductibles.',
  'Six roles, one throughline:': 'Six expériences, un même fil conducteur :', 'build it so it can be trusted.': 'concevoir des solutions fiables.',
  'From automated testing to emergency dispatch — each engagement added a layer: automation, then distribution, then orchestration.': 'Des tests automatisés à la gestion des urgences, chaque expérience a apporté une nouvelle compétence : automatisation, distribution puis orchestration.',
  'Selected work': 'Projets sélectionnés', 'Systems built for pressure —': 'Des systèmes conçus pour les situations exigeantes —', 'dispatch, recovery, healthcare.': 'intervention, recouvrement, santé.',
  'Two professional platforms and two personal builds. Each one is a story about coordination: between people, between services, and between the code and the reality it has to survive.': 'Deux plateformes professionnelles et deux projets personnels. Chacun illustre la coordination entre les personnes, les services et les contraintes du monde réel.',
  'Technical challenges': 'Défis techniques', 'My contribution': 'Ma contribution', 'Source for these projects is available on request.': 'Les sources de ces projets sont disponibles sur demande.',
  'A microservices-based computer-aided dispatch platform supporting emergency-service incident management and dispatching. It handles the full loop of an emergency: taking in an incident, allocating the right resources to it, and tracking emergency units in real time as they move.': 'Une plateforme de gestion assistée des interventions, basée sur une architecture microservices, qui prend en charge la gestion et la répartition des incidents des services d’urgence. Elle couvre l’ensemble du processus : réception d’un incident, affectation des ressources adaptées et suivi des unités d’urgence en temps réel.',
  'Coordinating incident state across independent services without one service blocking another during a live emergency.': 'Coordonner l’état des incidents entre des services indépendants, sans qu’un service bloque les autres pendant une intervention d’urgence.',
  'Keeping real-time unit tracking consistent while units are re-assigned mid-incident.': 'Maintenir la cohérence du suivi des unités en temps réel lorsque celles-ci sont réaffectées pendant un incident.',
  'Designing resource allocation rules that stay predictable under operational pressure.': 'Concevoir des règles d’allocation des ressources qui restent prévisibles même sous pression opérationnelle.',
  'Developed the backend REST APIs and business features behind incident management, resource allocation and real-time tracking of emergency units.': 'Développement des API REST backend et des fonctionnalités métier liées à la gestion des incidents, à l’allocation des ressources et au suivi en temps réel des unités d’urgence.',
  'Built the Angular and TypeScript frontends against those APIs.': 'Développement des interfaces frontend avec Angular et TypeScript, connectées à ces API.',
  'A modular microservices architecture that automates the debt recovery process end to end. Business processes are modelled and orchestrated across service boundaries, with operational dashboards giving decision support to the teams running them.': 'Une architecture microservices modulaire qui automatise l’ensemble du processus de recouvrement. Les processus métier sont modélisés et orchestrés entre plusieurs services, tandis que des tableaux de bord opérationnels fournissent aux équipes des indicateurs pour faciliter la prise de décision.',
  'Structuring a debt recovery workflow so it stays readable as the number of steps and actors grew.': 'Structurer un processus de recouvrement afin qu’il reste lisible malgré l’augmentation du nombre d’étapes et d’intervenants.',
  'Orchestrating long-running business processes across multiple services without coupling them together.': 'Orchestrer des processus métier de longue durée entre plusieurs services sans créer de dépendances fortes entre eux.',
  'Securing service-to-service and user access consistently across the estate.': 'Assurer une gestion cohérente et sécurisée des accès des utilisateurs et des communications entre les services.',
  'Designed and implemented the modular microservices architecture that automates the debt recovery process.': 'Conception et mise en œuvre d’une architecture microservices modulaire permettant d’automatiser le processus de recouvrement.',
  'Applied Clean Architecture and CQRS/MediatR patterns to structure the backend services.': 'Application des principes Clean Architecture et des patterns CQRS/MediatR pour structurer les services backend.',
  'Integrated Camunda to automate and orchestrate business processes across the application.': 'Intégration de Camunda pour automatiser et orchestrer les processus métier de l’application.',
  'Developed interactive dashboards for monitoring operational processes and decision support.': 'Développement de tableaux de bord interactifs pour le suivi des processus opérationnels et l’aide à la décision.',
  'Computer-Aided Dispatch platform': 'Plateforme de gestion assistée des interventions',
  'Automated collection management system': 'Système automatisé de gestion du recouvrement',

  'Back to top': 'Retour en haut', 'All rights reserved.': 'Tous droits réservés.',
  'Your name': 'Votre nom', 'Email address': 'Adresse e-mail', 'Jane Doe': 'Jean Dupont', 'What are you building, and where do I fit in?': 'Quel est votre projet et comment puis-je contribuer ?', 'Send message': 'Envoyer le message',
  'Tunis, Tunisia': 'Tunis, Tunisie', 'Tunis, Tunisia.': 'Tunis, Tunisie.',
  'Tactilia Project': 'Projet Tactilia', 'Final Year Internship': 'Stage de fin d’études', 'Freelance': 'Freelance',
  'Built with React · TypeScript · Tailwind · Framer Motion': 'Réalisé avec React · TypeScript · Tailwind · Framer Motion',
  'Switch to light theme': 'Passer au thème clair', 'Switch to dark theme': 'Passer au thème sombre', 'Light theme': 'Thème clair', 'Dark theme': 'Thème sombre', 'Passer en français': 'Passer en français', 'Switch to English': 'Passer en anglais',
  'Contributed to a microservices-based Computer-Aided Dispatch platform supporting emergency-service incident management and dispatching.': 'Contribution à une plateforme de gestion assistée des interventions basée sur des microservices, dédiée à la gestion et à la répartition des incidents des services d’urgence.',
  'Developed backend REST APIs and business features for incident management, resource allocation, and real-time tracking of emergency units.': 'Développement d’API REST backend et de fonctionnalités métier pour la gestion des incidents, l’allocation des ressources et le suivi en temps réel des unités d’urgence.',
  'Implemented asynchronous, event-driven communication between services using RabbitMQ to support operational workflows.': 'Mise en place d’une communication asynchrone et événementielle entre les services avec RabbitMQ afin de prendre en charge les processus opérationnels.',
  'Designed and implemented a modular microservices architecture to automate the debt recovery process.': 'Conception et mise en œuvre d’une architecture microservices modulaire pour automatiser le processus de recouvrement.',
  'Applied Clean Architecture and CQRS/MediatR patterns to structure backend services.': 'Application des principes Clean Architecture et des patterns CQRS/MediatR pour structurer les services backend.',
  'Integrated Camunda to automate and orchestrate business processes across the application.': 'Intégration de Camunda pour automatiser et orchestrer les processus métier de l’application.',
  'Developed interactive dashboards for monitoring operational processes and decision support.': 'Développement de tableaux de bord interactifs pour le suivi des processus opérationnels et l’aide à la décision.',
  'Developed backend services using Spring Boot for distributed application workflows and database management.': 'Développement de services backend avec Spring Boot pour les flux applicatifs distribués et la gestion des bases de données.',
  'Implemented data synchronization and consistency mechanisms across decentralized database components.': 'Mise en place de mécanismes de synchronisation et de cohérence des données entre des composants de bases de données décentralisés.',
  'Designed and developed an online registration web application for scholarship management.': 'Conception et développement d’une application web d’inscription en ligne pour la gestion des bourses.',
  'Implemented a multi-actor system with two user roles.': 'Mise en place d’un système multi-acteurs avec deux rôles utilisateurs.',
  'Developed secure REST APIs for backend–frontend communication.': 'Développement d’API REST sécurisées pour la communication entre le backend et le frontend.',
  'Developed dynamic frontend components and integrated them with backend services and REST APIs.': 'Développement de composants frontend dynamiques et intégration avec les services backend et les API REST.',
  'Optimized performance and improved user experience.': 'Optimisation des performances et amélioration de l’expérience utilisateur.',
  'Connected mobile frontends to Spring Boot services backed by PostgreSQL.': 'Connexion des interfaces mobiles aux services Spring Boot reposant sur PostgreSQL.',
  'Developed an automated functional testing solution for a mobile e-commerce application.': 'Développement d’une solution de tests fonctionnels automatisés pour une application mobile de commerce électronique.',
  'Automated end-to-end workflows covering navigation, search, cart, checkout, and payment processes.': 'Automatisation de parcours de bout en bout couvrant la navigation, la recherche, le panier, la validation de commande et le paiement.',
  'Integrated automated tests into CI/CD pipelines using Jenkins and GitLab and analyzed test results to improve software reliability.': 'Intégration des tests automatisés dans des pipelines CI/CD avec Jenkins et GitLab, puis analyse des résultats pour améliorer la fiabilité du logiciel.',
  'Have a project or opportunity in mind?': 'Vous avez un projet ou une opportunité en tête ?',
  "I'm always interested in connecting with people, exploring new challenges, and contributing to meaningful software projects.": 'Je suis toujours intéressé par les échanges, les nouveaux défis et la contribution à des projets logiciels utiles et ambitieux.',
  'Professional working proficiency': 'Maîtrise professionnelle', 'Applied in production': 'Appliquées en production',
  'Backend and full stack work, focused on distributed systems and event-driven services.': 'Développement backend et full stack, avec un intérêt particulier pour les systèmes distribués et les services événementiels.',
  
  'Incident management': 'Gestion des incidents', 'Resource allocation': 'Allocation des ressources', 'Real-time tracking': 'Suivi en temps réel',
  'Engineering Degree — Software Engineering & Information Systems (GLSI)': 'Diplôme d’ingénieur — Génie logiciel et systèmes d’information (GLSI)',
  "Bachelor's Degree — Software Engineering & Information Systems (GLSI)": 'Licence — Génie logiciel et systèmes d’information (GLSI)',
  'Used daily across code reviews, documentation and client-facing delivery.': 'Utilisées quotidiennement lors des revues de code, de la documentation et des échanges avec les clients.',
  'Practices drawn from the IFBW, Addinn and QualityBox engagements.': 'Pratiques mises en œuvre lors des expériences chez IFBW, Addinn et QualityBox.',
  'Engineering practices': 'Pratiques d’ingénierie', 'Recruitment platform': 'Plateforme de recrutement',
  'Medical services and delivery platform': 'Plateforme de services médicaux et de livraison',
  'Personal project': 'Projet personnel',
  'A dynamic online platform connecting freelancers and employers, streamlining the recruitment process from job search through to collaboration.': 'Une plateforme en ligne dynamique mettant en relation freelances et employeurs et simplifiant le recrutement, de la recherche d’emploi jusqu’à la collaboration.',
  'Matching job postings to freelancer profiles without burying the recruiter in noise.': 'Faire correspondre les offres d’emploi aux profils des freelances sans submerger les recruteurs d’informations.',
  'Keeping communication between two very different user types in one coherent workflow.': 'Centraliser la communication entre deux types d’utilisateurs différents dans un flux de travail cohérent.',
  'Simplified recruitment through a centralized and intuitive platform.': 'Simplification du recrutement grâce à une plateforme centralisée et intuitive.',
  'Enhanced freelancer–employer interaction via integrated communication tools.': 'Amélioration des échanges entre freelances et employeurs grâce à des outils de communication intégrés.',
  'Built efficient job–profile matching using an intelligent search engine.': 'Création d’un système efficace de correspondance entre offres et profils grâce à un moteur de recherche intelligent.',
  'A digital platform connecting patients, doctors and delivery agents to improve access to healthcare and medication delivery — appointments, teleconsultations and medication ordering in one place.': 'Une plateforme numérique reliant patients, médecins et livreurs afin de faciliter l’accès aux soins et à la livraison de médicaments : rendez-vous, téléconsultations et commandes au même endroit.',
  'Serving patients, healthcare professionals and delivery agents from a single, consistent domain model.': 'Prise en charge des patients, des professionnels de santé et des livreurs à partir d’un modèle métier unifié.',
  'Making medication delivery trackable end to end so patients know where their order is.': 'Suivi complet de la livraison des médicaments afin que les patients puissent connaître l’état de leur commande.',
  'Allowed patients to book appointments, access teleconsultations and order medications online.': 'Possibilité pour les patients de prendre rendez-vous, d’accéder à des téléconsultations et de commander des médicaments en ligne.',
  'Provided healthcare professionals with tools to manage services and patient interactions.': 'Mise à disposition des professionnels de santé d’outils pour gérer leurs services et les échanges avec les patients.',
  'Integrated a fast and secure delivery tracking system.': 'Intégration d’un système rapide et sécurisé de suivi des livraisons.',
  'I build the kind of software that has to hold up when the real world pushes back on it — emergency dispatch floors, debt recovery workflows, healthcare logistics.': 'Je conçois des logiciels capables de répondre aux exigences du monde réel : gestion des urgences, processus de recouvrement et logistique de santé.',
  'My degree is in Software Engineering and Information Systems, and I have spent the years since putting it to work on production systems rather than in theory. I started in test automation, learning to read a system from the outside before I was allowed to change it from the inside. That habit — understanding the whole flow before touching one part of it — is still how I work.': 'Diplômé en génie logiciel et systèmes d’information, j’ai choisi de mettre mes compétences au service de systèmes en production. J’ai commencé par l’automatisation des tests, ce qui m’a appris à comprendre un système dans son ensemble avant d’en modifier les composants. Cette approche guide toujours mon travail.',
  'At IFBW I worked inside Tactilia, a computer-aided dispatch platform where emergency services coordinate incidents in real time. I wrote the backend services behind incident management, resource allocation and unit tracking, and connected them with RabbitMQ so the services could talk to each other without blocking one another. Before that, at Addinn, I helped design a modular microservices architecture for debt recovery — Clean Architecture, CQRS with MediatR, and Camunda orchestrating the process across service boundaries.': 'Chez IFBW, j’ai travaillé sur Tactilia, une plateforme de gestion assistée des interventions permettant aux services d’urgence de coordonner les incidents en temps réel. J’ai développé des services backend pour la gestion des incidents, l’allocation des ressources et le suivi des unités, avec RabbitMQ pour la communication asynchrone. Auparavant, chez Addinn, j’ai contribué à concevoir une architecture microservices modulaire dédiée au recouvrement, basée sur Clean Architecture, CQRS avec MediatR et Camunda.',
  'The pattern across all of it is the same: asynchronous, event-driven work, clean and maintainable code, databases designed to be trusted, and delivery pipelines that make shipping boring. I care about the unglamorous parts — tests, naming, contracts between services — because that is where software quietly becomes dependable.': 'Le fil conducteur de ces expériences : communication asynchrone et événementielle, code propre et maintenable, bases de données fiables et pipelines de livraison robustes. J’accorde une grande importance aux tests, à la qualité du code et aux contrats entre services, car ce sont ces détails qui rendent un logiciel fiable.',
}

const originalText = new WeakMap<Text, string>()
const originalAttributes = new WeakMap<Element, Map<string, string>>()

function translateTextNode(node: Text, language: string) {
  const original = originalText.get(node) ?? node.nodeValue ?? ''
  if (!originalText.has(node)) originalText.set(node, original)
  const trimmed = original.trim()
  const translated = language === 'fr' ? translations[trimmed] : undefined
  if (translated) {
    const leading = original.match(/^\s*/)?.[0] ?? ''
    const trailing = original.match(/\s*$/)?.[0] ?? ''
    const next = `${leading}${translated}${trailing}`
    if (node.nodeValue !== next) node.nodeValue = next
  } else {
    if (node.nodeValue !== original) node.nodeValue = original
  }
}

function translateElementAttributes(element: Element, language: string) {
  const attrs = ['aria-label', 'placeholder', 'title', 'alt']
  let originals = originalAttributes.get(element)
  if (!originals) {
    originals = new Map()
    originalAttributes.set(element, originals)
  }
  for (const attr of attrs) {
    const current = element.getAttribute(attr)
    if (current === null && !originals.has(attr)) continue
    if (!originals.has(attr) && current !== null) originals.set(attr, current)
    const original = originals.get(attr)
    if (original !== undefined) {
      const next = language === 'fr' ? translations[original] ?? original : original
      if (element.getAttribute(attr) !== next) element.setAttribute(attr, next)
    }
  }
}

export function applyLanguage(language: 'en' | 'fr') {
  document.documentElement.lang = language
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode())) translateTextNode(node as Text, language)
  document.body.querySelectorAll('*').forEach((element) => translateElementAttributes(element, language))
}

export function initializeLanguage() {
  let language: 'en' | 'fr' = localStorage.getItem('portfolio-language') === 'fr' ? 'fr' : 'en'
  applyLanguage(language)
  const observer = new MutationObserver(() => applyLanguage(language))
  observer.observe(document.body, { childList: true, subtree: true, characterData: true })
  const onLanguageChange = ((event: CustomEvent<'en' | 'fr'>) => {
    language = event.detail
    applyLanguage(language)
  }) as EventListener
  window.addEventListener('portfolio-language-change', onLanguageChange)
  return () => {
    observer.disconnect()
    window.removeEventListener('portfolio-language-change', onLanguageChange)
  }
}
