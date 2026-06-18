import type { Project, Stat } from "./types";

export type Locale = "en" | "fr" | "it";
export type SecondaryPageKey = "privacy" | "terms" | "cookies";

export const locales: Locale[] = ["en", "fr", "it"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  it: "IT",
};

const sharedProjects = [
  {
    id: "1",
    title: "ListingVid",
    category: "PropTech",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop&q=80",
    url: "https://listingvid.xyz",
  },
  {
    id: "2",
    title: "EST8",
    category: "PropTech",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80",
    url: "https://est8.app",
  },
  {
    id: "3",
    title: "OhMyLead",
    category: "Lead Generation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80",
    url: "https://ohmylead.xyz",
  },
  {
    id: "4",
    title: "La Côte Vintage",
    category: "Automotive",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&q=80",
    url: "https://lacotevintage.com",
  },
  {
    id: "5",
    title: "Perfect Skin",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop&q=80",
    url: "https://perfect-skin.fr",
  },
  {
    id: "6",
    title: "AI Answer",
    category: "AI / Content",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&q=80",
    url: "https://aianswer.to",
  },
] satisfies Omit<Project, "description">[];

export const content = {
  en: {
    meta: {
      title: "Lomon Ventures - Software products for market-smart founders",
      description:
        "Software products for founders who know the market, not the code. Lomon Ventures turns real workflows and product ideas into focused first versions.",
    },
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      fit: "Profil",
      contact: "Contact",
      cta: "Schedule a call",
      light: "Light",
      dark: "Dark",
      language: "Language",
    },
    hero: {
      eyebrow: "Founder-led software studio",
      title: "Software products for founders who know the market, not the code.",
      accent: "not the code.",
      intro:
        "You know the customers, the operations, the edge cases, and the workflow that keeps breaking. Lomon Ventures turns that business knowledge into a focused first product.",
      support:
        "The goal: clarify the use case, build the useful version, launch it, and learn from real users without losing months in agency theatre.",
      cta: "Schedule a call",
      whatsappCta: "WhatsApp",
      callSubject: "Schedule a call with Lomon Ventures",
      whatsappMessage:
        "Hi Loic, I have a business workflow or product idea I would like to turn into software. Can we discuss it?",
      badges: ["Business workflow", "First useful version", "Founder-led"],
      logoIntro: "+ more real products shipped",
      logos: ["ListingVid", "EST8", "OhMyLead", "La Côte Vintage", "Perfect Skin", "AI Answer"],
      proof: [
        { value: "6", label: "products launched" },
        { value: "15+", label: "years in tech" },
        { value: "Direct", label: "founder-led work" },
      ],
    },
    stats: [
      { label: "Years in tech", value: 15, suffix: "+" },
      { label: "Products launched", value: 6, suffix: "" },
      { label: "Agency experience", value: 6, suffix: "yr" },
      { label: "Countries", value: 3, suffix: "" },
    ] satisfies Stat[],
    projects: {
      eyebrow: "Recent launches",
      title: "Proof that the work ships.",
      body:
        "A few products from the Lomon portfolio across real estate, lead generation, automotive, ecommerce, and AI. Small products, real markets, shipped by the same hands.",
      items: sharedProjects.map((project) => ({
        ...project,
        description:
          {
            "1": "AI-powered video generation for real estate listings.",
            "2": "Modern CRM built for real estate agents.",
            "3": "Find leads for your business, no subscription, just oneshot.",
            "4": "Classic car valuations for collectors and enthusiasts.",
            "5": "French cosmetics, skincare advice, and products.",
            "6": "WordPress plugin for AI citation optimization.",
          }[project.id] ?? "",
      })) satisfies Project[],
    },
    about: {
      eyebrow: "Fit",
      title: "For founders with business context.",
      forTitle: "This is for you if",
      forItems: [
        "You know the customer, workflow, or industry problem better than a generic agency ever will.",
        "You have a clear product idea or a manual process that should become software.",
        "You want someone who can challenge the scope, build the first version, and keep momentum.",
      ],
      notTitle: "This is not for you if",
      notItems: [
        "You only have a vague app idea and no evidence of who needs it.",
        "You want cheap outsourced development with every feature in version one.",
        "You need a large agency, a full-time developer, or a six-month roadmap.",
      ],
      note:
        "Lomon Ventures is led by Loic Moncany, a founder-developer with 15+ years in web development and 6 years running a digital agency in Malta.",
    },
    founder: {
      eyebrow: "Founder",
      title: "Built by someone who can think product and ship code.",
      body:
        "Lomon Ventures is led by Loic Moncany, a founder-developer who has spent 15+ years building for the web and 6 years running a digital agency in Malta.",
      note:
        "You work directly with the person shaping the product, making the tradeoffs, and writing the code. No account manager layer, no handoff theatre.",
      name: "Loic Moncany",
      role: "Founder-developer, Lomon Ventures",
      cardLabel: "Direct founder work",
      imageAlt: "Loic Moncany, founder of Lomon Ventures",
      highlights: [
        { value: "15+", label: "years building for the web" },
        { value: "6", label: "years running an agency" },
        { value: "1:1", label: "strategy, product, and code" },
      ],
    },
    approach: {
      eyebrow: "Process",
      title: "From workflow to first version.",
      body:
        "Most founders do not need a 40-page scope doc. They need someone to understand the business, cut the wrong features, and build the first version that proves whether the product should exist.",
      deliverable: "Deliverable",
      steps: [
        {
          period: "Week 1",
          title: "Brief & Scope",
          description:
            "We map the business workflow, the target user, and the exact outcome the product must deliver.",
          marker: "Workflow mapped",
        },
        {
          period: "Week 2",
          title: "Prototype & Validation",
          description:
            "We turn the idea into screens, user flows, and a build plan so every feature has a reason to exist.",
          marker: "Scope validated",
        },
        {
          period: "Weeks 3-4",
          title: "Build & Integrate",
          description:
            "I build the first usable version, connect the core tools, and keep the scope focused on launch.",
          marker: "Build in progress",
        },
        {
          period: "Launch",
          title: "Delivery & Next Priorities",
          description:
            "You get a live product, a handover, and a clear next-step roadmap based on real usage.",
          marker: "Ready to publish",
        },
      ],
    },
    contact: {
      eyebrow: "Start here",
      title: "Turn your workflow into a first product.",
      body:
        "You keep running the business. I extract the product logic, challenge the scope, and turn it into something buildable.",
      cards: [
        {
          eyebrow: "Step one",
          title: "First Version Blueprint",
          body:
            "A paid working session to translate your idea, workflow, or business process into the smallest software product worth building.",
          items: [
            "Workflow map and target user",
            "First-version feature boundary",
            "Build complexity, risks, and next-step quote",
          ],
          cta: "Get a build plan",
          subject: "First Version Blueprint",
          featured: false,
        },
        {
          eyebrow: "Focused build",
          title: "First Product Build",
          body:
            "A founder-led build for one user, one workflow, and one useful outcome. Enough product to launch, learn, and decide what deserves more.",
          items: [
            "UX, product, and development",
            "Deployment and handover",
            "Next-step roadmap from real feedback",
          ],
          cta: "Tell me what you want to build",
          subject: "First Product Build",
          featured: true,
        },
      ],
    },
    secondary: {
      privacy: {
        label: "Privacy",
        title: "Privacy Policy",
        intro:
          "A simple policy for a simple website. If you contact Lomon Ventures, your message is used to reply and evaluate whether there is a fit.",
        sections: [
          {
            title: "Information collected",
            body:
              "The site does not ask you to create an account. If you email Lomon Ventures, your name, email address, and message are kept so the conversation can continue.",
          },
          {
            title: "How it is used",
            body:
              "Your information is used only to reply, discuss potential work, prepare proposals, and keep normal business records.",
          },
          {
            title: "Your choices",
            body:
              "You can ask for your contact information to be corrected or deleted by emailing lomonventures@gmail.com.",
          },
        ],
      },
      terms: {
        label: "Terms",
        title: "Terms of Use",
        intro:
          "This website explains the Lomon Ventures offer. Any paid work is governed by a separate written agreement or proposal.",
        sections: [
          {
            title: "Website content",
            body:
              "The content on this site is informational and can change as the studio, offers, and portfolio evolve.",
          },
          {
            title: "Project work",
            body:
              "Timelines, scope, deliverables, pricing, and ownership are confirmed separately before any work begins.",
          },
          {
            title: "External links",
            body:
              "Portfolio and resource links may lead to third-party websites. Lomon Ventures is not responsible for their content or availability.",
          },
        ],
      },
      cookies: {
        label: "Cookies",
        title: "Cookie Notice",
        intro:
          "The current site keeps tracking light. It stores your theme preference locally so the experience feels consistent.",
        sections: [
          {
            title: "Essential storage",
            body:
              "The theme switch uses local storage in your browser. This is not used to identify you across other websites.",
          },
          {
            title: "Analytics",
            body:
              "If analytics are added later, this notice should be updated with the tools used and the choices available to visitors.",
          },
          {
            title: "Contact",
            body:
              "Questions about cookies or privacy can be sent to lomonventures@gmail.com.",
          },
        ],
      },
    },
    footer: {
      tagline: "Software products for founders who know the market, not the code.",
      main: "Main",
      legal: "Legal",
      languages: "Languages",
      copyright: "All rights reserved.",
      strip: ["Workflow software", "First product build", "Founder-led", "Business tools", "SaaS MVP", "Europe"],
    },
  },
  fr: {
    meta: {
      title: "Lomon Ventures - Produits logiciels pour fondateurs terrain",
      description:
        "Des produits logiciels pour les fondateurs qui maîtrisent leur marché, pas forcément le code.",
    },
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      fit: "Fit",
      contact: "Contact",
      cta: "Planifier un appel",
      light: "Clair",
      dark: "Sombre",
      language: "Langue",
    },
    hero: {
      eyebrow: "Studio logiciel indépendant",
      title: "Transformez votre expertise métier en logiciel utilisable.",
      accent: "pas le code.",
      intro:
        "Vous connaissez vos clients, vos opérations, les cas particuliers et le process qui coince. Lomon Ventures transforme cette connaissance terrain en premier produit logiciel.",
      support:
        "Le but : clarifier le cas d'usage, construire la version utile, la mettre en ligne et apprendre avec de vrais utilisateurs. Sans perdre trois mois en cadrage.",
      cta: "Planifier un appel",
      whatsappCta: "WhatsApp",
      callSubject: "Planifier un appel avec Lomon Ventures",
      whatsappMessage:
        "Bonjour Loic, j'ai un process métier ou une idée produit à transformer en logiciel. Est-ce qu'on peut en discuter ?",
      badges: ["Logiciel métier", "Première version utile", "Travail founder-led"],
      logoIntro: "+ plusieurs produits déjà lancés",
      logos: ["ListingVid", "EST8", "OhMyLead", "La Côte Vintage", "Perfect Skin", "AI Answer"],
      proof: [
        { value: "6", label: "produits mis en ligne" },
        { value: "15+", label: "ans d'expérience web" },
        { value: "Direct", label: "avec le fondateur" },
      ],
    },
    stats: [
      { label: "Ans d'expérience web", value: 15, suffix: "+" },
      { label: "Produits lancés", value: 6, suffix: "" },
      { label: "Ans d'agence", value: 6, suffix: "" },
      { label: "Pays", value: 3, suffix: "" },
    ] satisfies Stat[],
    projects: {
      eyebrow: "Lancements récents",
      title: "Des produits réels, pas des maquettes.",
      body:
        "Quelques produits du portfolio Lomon dans l'immobilier, la génération de leads, l'automobile, l'e-commerce et l'IA. Des marchés précis, des usages concrets, des produits expédiés.",
      items: sharedProjects.map((project) => ({
        ...project,
        description:
          {
            "1": "Génération de vidéos IA pour annonces immobilières.",
            "2": "CRM moderne conçu pour les agents immobiliers.",
            "3": "Recherche de leads sans abonnement, en mode one-shot.",
            "4": "Cotation de voitures de collection pour passionnés et collectionneurs.",
            "5": "Conseils et produits cosmétiques pour le marché français.",
            "6": "Plugin WordPress pour optimiser les citations dans les réponses IA.",
          }[project.id] ?? "",
      })) satisfies Project[],
    },
    about: {
      eyebrow: "Profil",
      title: "Pour les fondateurs qui connaissent le terrain.",
      forTitle: "C'est le bon fit si",
      forItems: [
        "Vous connaissez déjà le client, le workflow ou le problème métier à résoudre.",
        "Vous avez une idée produit claire, ou un process manuel qui mérite de devenir logiciel.",
        "Vous voulez quelqu'un qui challenge le périmètre, construit vite et garde le projet en mouvement.",
      ],
      notTitle: "Ce n'est pas le bon fit si",
      notItems: [
        "Vous partez d'une idée très vague, sans utilisateur ni problème identifié.",
        "Vous cherchez du développement au rabais avec toutes les fonctionnalités dès la V1.",
        "Vous avez besoin d'une grosse équipe, d'un développeur à temps plein ou d'une roadmap de six mois.",
      ],
      note:
        "Lomon Ventures est dirigé par Loic Moncany, fondateur-développeur avec 15+ ans d'expérience web et 6 ans à la tête d'une agence digitale à Malte.",
    },
    founder: {
      eyebrow: "Fondateur",
      title: "Un interlocuteur qui pense produit et sait livrer.",
      body:
        "Lomon Ventures est porté par Loic Moncany, fondateur-développeur avec 15+ ans d'expérience web et 6 ans à la tête d'une agence digitale à Malte.",
      note:
        "Vous travaillez directement avec la personne qui cadre le produit, arbitre les priorités et écrit le code. Pas de couche commerciale, pas de passage de relais flou.",
      name: "Loic Moncany",
      role: "Fondateur-développeur, Lomon Ventures",
      cardLabel: "Travail direct avec le fondateur",
      imageAlt: "Loic Moncany, fondateur de Lomon Ventures",
      highlights: [
        { value: "15+", label: "ans à construire pour le web" },
        { value: "6", label: "ans à diriger une agence" },
        { value: "1:1", label: "stratégie, produit et code" },
      ],
    },
    approach: {
      eyebrow: "Process",
      title: "Du process métier au premier produit.",
      body:
        "Pas besoin d'un cahier des charges de 40 pages. Il faut comprendre le métier, couper ce qui ralentit, puis sortir une première version qui permet d'apprendre vite.",
      deliverable: "Livrable",
      steps: [
        {
          period: "Semaine 1",
          title: "Brief & cadrage",
          description:
            "On cartographie le workflow métier, l'utilisateur cible et le résultat concret que le produit doit produire.",
          marker: "Workflow cadré",
        },
        {
          period: "Semaine 2",
          title: "Prototype & validation",
          description:
            "On transforme l'idée en écrans, parcours et plan de build pour que chaque feature ait une vraie raison d'exister.",
          marker: "Scope validé",
        },
        {
          period: "Semaines 3-4",
          title: "Build & intégration",
          description:
            "Je construis la première version utilisable, connecte les outils essentiels et garde le scope orienté lancement.",
          marker: "Build en cours",
        },
        {
          period: "Lancement",
          title: "Livraison & priorités",
          description:
            "Vous repartez avec un produit en ligne, une passation claire et une roadmap basée sur les premiers usages.",
          marker: "Prêt à publier",
        },
      ],
    },
    contact: {
      eyebrow: "Point de départ",
      title: "Transformez votre idée métier en produit utilisable.",
      body:
        "Vous continuez à faire tourner votre activité. J'extrais la logique produit, je challenge le périmètre et je transforme le tout en plan d'exécution.",
      cards: [
        {
          eyebrow: "Cadrage",
          title: "Plan de première version",
          body:
            "Une session de travail payante pour transformer une idée, un workflow ou un process métier en plus petit produit réellement utile.",
          items: [
            "Workflow, utilisateur cible et cas d'usage prioritaire",
            "Périmètre clair de la première version",
            "Complexité, risques et budget pour la suite",
          ],
          cta: "Obtenir un plan clair",
          subject: "Plan de première version",
          featured: false,
        },
        {
          eyebrow: "Construction ciblée",
          title: "Construction du premier produit",
          body:
            "Une construction directe, autour d'un utilisateur, d'un workflow et d'un résultat utile. Juste assez de produit pour lancer, apprendre et décider la suite.",
          items: [
            "UX, produit et développement",
            "Déploiement et passation",
            "Roadmap basée sur les retours terrain",
          ],
          cta: "Racontez-moi votre projet",
          subject: "Construction du premier produit",
          featured: true,
        },
      ],
    },
    secondary: {
      privacy: {
        label: "Confidentialité",
        title: "Politique de confidentialité",
        intro:
          "Une politique simple pour un site simple. Si vous contactez Lomon Ventures, votre message sert à répondre et évaluer s'il y a un bon fit.",
        sections: [
          {
            title: "Informations collectées",
            body:
              "Le site ne demande pas de créer un compte. Si vous envoyez un email, votre nom, adresse email et message sont conservés pour poursuivre la conversation.",
          },
          {
            title: "Utilisation",
            body:
              "Vos informations servent uniquement à répondre, discuter d'un projet potentiel, préparer une proposition et garder les dossiers business normaux.",
          },
          {
            title: "Vos choix",
            body:
              "Vous pouvez demander la correction ou suppression de vos informations en écrivant à lomonventures@gmail.com.",
          },
        ],
      },
      terms: {
        label: "Conditions",
        title: "Conditions d'utilisation",
        intro:
          "Ce site présente l'offre Lomon Ventures. Tout travail payant est encadré par un accord ou une proposition séparée.",
        sections: [
          {
            title: "Contenu du site",
            body:
              "Le contenu est informatif et peut évoluer avec le studio, les offres et le portfolio.",
          },
          {
            title: "Travail projet",
            body:
              "Les délais, le scope, les livrables, les prix et la propriété sont confirmés séparément avant le début du travail.",
          },
          {
            title: "Liens externes",
            body:
              "Les liens portfolio ou ressources peuvent mener vers des sites tiers. Lomon Ventures n'est pas responsable de leur contenu ou disponibilité.",
          },
        ],
      },
      cookies: {
        label: "Cookies",
        title: "Notice cookies",
        intro:
          "Le site actuel reste léger en tracking. Il stocke localement votre préférence de thème pour garder une expérience cohérente.",
        sections: [
          {
            title: "Stockage essentiel",
            body:
              "Le switch de thème utilise le stockage local du navigateur. Il ne sert pas à vous identifier sur d'autres sites.",
          },
          {
            title: "Analytics",
            body:
              "Si des analytics sont ajoutés plus tard, cette notice devra préciser les outils utilisés et les choix disponibles.",
          },
          {
            title: "Contact",
            body:
              "Les questions privacy ou cookies peuvent être envoyées à lomonventures@gmail.com.",
          },
        ],
      },
    },
    footer: {
      tagline: "Des produits logiciels pour les fondateurs qui maîtrisent leur marché, pas forcément le code.",
      main: "Site",
      legal: "Légal",
      languages: "Langues",
      copyright: "Tous droits réservés.",
      strip: ["Logiciel métier", "Premier produit", "Founder-led", "Outils internes", "MVP SaaS", "Europe"],
    },
  },
  it: {
    meta: {
      title: "Lomon Ventures - Prodotti software per founder che conoscono il mercato",
      description:
        "Prodotti software per founder che conoscono il mercato, non necessariamente il codice.",
    },
    nav: {
      services: "Servizi",
      portfolio: "Portfolio",
      process: "Processo",
      fit: "Fit",
      contact: "Contatto",
      cta: "Prenota una call",
      light: "Chiaro",
      dark: "Scuro",
      language: "Lingua",
    },
    hero: {
      eyebrow: "Studio software guidato da un founder",
      title: "Trasforma il modo in cui lavora il tuo business in software utile.",
      accent: "non il codice.",
      intro:
        "Tu conosci clienti, operazioni, casi particolari e workflow che si rompono. Lomon Ventures trasforma quella conoscenza in un primo prodotto software.",
      support:
        "Obiettivo: chiarire il caso d'uso, costruire la versione utile, lanciarla e imparare da utenti reali senza mesi persi in burocrazia.",
      cta: "Prenota una call",
      whatsappCta: "WhatsApp",
      callSubject: "Prenotare una call con Lomon Ventures",
      whatsappMessage:
        "Ciao Loic, ho un workflow business o un'idea prodotto da trasformare in software. Possiamo parlarne?",
      badges: ["Software business", "Prima versione utile", "Founder-led"],
      logoIntro: "+ prodotti reali già lanciati",
      logos: ["ListingVid", "EST8", "OhMyLead", "La Côte Vintage", "Perfect Skin", "AI Answer"],
      proof: [
        { value: "6", label: "prodotti lanciati" },
        { value: "15+", label: "anni in tech" },
        { value: "Diretto", label: "lavoro founder-led" },
      ],
    },
    stats: [
      { label: "Anni in tech", value: 15, suffix: "+" },
      { label: "Prodotti lanciati", value: 6, suffix: "" },
      { label: "Esperienza agenzia", value: 6, suffix: "anni" },
      { label: "Paesi", value: 3, suffix: "" },
    ] satisfies Stat[],
    projects: {
      eyebrow: "Lanci recenti",
      title: "La prova: il lavoro arriva online.",
      body:
        "Alcuni prodotti del portfolio Lomon tra real estate, lead generation, automotive, ecommerce e AI. Prodotti piccoli, mercati reali, costruiti dalle stesse mani.",
      items: sharedProjects.map((project) => ({
        ...project,
        description:
          {
            "1": "Generazione video con AI per annunci immobiliari.",
            "2": "CRM moderno per agenti immobiliari.",
            "3": "Lead per il tuo business, senza abbonamento, in modalità one-shot.",
            "4": "Valutazioni di auto classiche per collezionisti e appassionati.",
            "5": "Cosmetici francesi, consigli skincare e prodotti.",
            "6": "Plugin WordPress per ottimizzare citazioni nelle risposte AI.",
          }[project.id] ?? "",
      })) satisfies Project[],
    },
    about: {
      eyebrow: "Fit",
      title: "Per founder con contesto business.",
      forTitle: "Fa per te se",
      forItems: [
        "Conosci cliente, workflow o problema di settore meglio di qualsiasi agenzia generica.",
        "Hai un'idea prodotto chiara o un processo manuale che dovrebbe diventare software.",
        "Vuoi qualcuno che sfidi lo scope, costruisca la prima versione e mantenga momentum.",
      ],
      notTitle: "Non fa per te se",
      notItems: [
        "Hai solo un'idea vaga senza evidenza del bisogno.",
        "Cerchi sviluppo low-cost con ogni feature già nella versione uno.",
        "Ti serve una grande agenzia, uno sviluppatore full-time o una roadmap di sei mesi.",
      ],
      note:
        "Lomon Ventures è guidata da Loic Moncany, founder-developer con 15+ anni di sviluppo web e 6 anni alla guida di un'agenzia digitale a Malta.",
    },
    founder: {
      eyebrow: "Founder",
      title: "Un interlocutore che pensa prodotto e sa spedire codice.",
      body:
        "Lomon Ventures è guidata da Loic Moncany, founder-developer con 15+ anni di sviluppo web e 6 anni alla guida di un'agenzia digitale a Malta.",
      note:
        "Lavori direttamente con la persona che definisce il prodotto, sceglie le priorità e scrive il codice. Niente layer commerciale, niente passaggi confusi.",
      name: "Loic Moncany",
      role: "Founder-developer, Lomon Ventures",
      cardLabel: "Lavoro diretto con il founder",
      imageAlt: "Loic Moncany, founder di Lomon Ventures",
      highlights: [
        { value: "15+", label: "anni a costruire per il web" },
        { value: "6", label: "anni alla guida di un'agenzia" },
        { value: "1:1", label: "strategia, prodotto e codice" },
      ],
    },
    approach: {
      eyebrow: "Processo",
      title: "Dal workflow alla prima versione.",
      body:
        "La maggior parte dei founder non ha bisogno di un documento scope da 40 pagine. Ha bisogno di qualcuno che capisca il business, tagli le feature sbagliate e costruisca la prima versione che dimostra se il prodotto deve esistere.",
      deliverable: "Deliverable",
      steps: [
        {
          period: "Settimana 1",
          title: "Brief & scope",
          description:
            "Mappiamo workflow business, utente target e risultato concreto che il prodotto deve generare.",
          marker: "Workflow mappato",
        },
        {
          period: "Settimana 2",
          title: "Prototype & validation",
          description:
            "Trasformiamo l'idea in schermate, flussi e piano di build, così ogni feature ha una ragione chiara.",
          marker: "Scope validato",
        },
        {
          period: "Settimane 3-4",
          title: "Build & integrazione",
          description:
            "Costruisco la prima versione utilizzabile, collego gli strumenti essenziali e mantengo il focus sul lancio.",
          marker: "Build in corso",
        },
        {
          period: "Lancio",
          title: "Delivery & priorità",
          description:
            "Ottieni un prodotto live, handover chiaro e roadmap dei prossimi passi basata sull'uso reale.",
          marker: "Pronto a pubblicare",
        },
      ],
    },
    contact: {
      eyebrow: "Inizia qui",
      title: "Trasforma il tuo workflow in un primo prodotto.",
      body:
        "Tu continui a gestire il business. Io estraggo la logica prodotto, sfido lo scope e la trasformo in qualcosa di costruibile.",
      cards: [
        {
          eyebrow: "Step uno",
          title: "Blueprint prima versione",
          body:
            "Una sessione di lavoro a pagamento per trasformare idea, workflow o processo business nel più piccolo prodotto software che valga la pena costruire.",
          items: [
            "Mappa workflow e utente target",
            "Confine feature della prima versione",
            "Complessità, rischi e preventivo per il passo successivo",
          ],
          cta: "Ottieni un piano di build",
          subject: "Blueprint prima versione",
          featured: false,
        },
        {
          eyebrow: "Build focalizzata",
          title: "Costruzione primo prodotto",
          body:
            "Un build founder-led per un utente, un workflow e un risultato utile. Abbastanza prodotto per lanciare, imparare e decidere cosa merita di più.",
          items: [
            "UX, prodotto e sviluppo",
            "Deploy e handover",
            "Roadmap dai feedback reali",
          ],
          cta: "Raccontami cosa vuoi costruire",
          subject: "Costruzione primo prodotto",
          featured: true,
        },
      ],
    },
    secondary: {
      privacy: {
        label: "Privacy",
        title: "Privacy Policy",
        intro:
          "Una policy semplice per un sito semplice. Se contatti Lomon Ventures, il tuo messaggio serve a rispondere e valutare se c'è fit.",
        sections: [
          {
            title: "Informazioni raccolte",
            body:
              "Il sito non richiede account. Se invii un'email, nome, indirizzo email e messaggio vengono conservati per continuare la conversazione.",
          },
          {
            title: "Come vengono usate",
            body:
              "Le informazioni servono solo a rispondere, discutere potenziale lavoro, preparare proposte e mantenere normali record business.",
          },
          {
            title: "Le tue scelte",
            body:
              "Puoi chiedere correzione o cancellazione dei dati di contatto scrivendo a lomonventures@gmail.com.",
          },
        ],
      },
      terms: {
        label: "Termini",
        title: "Termini di utilizzo",
        intro:
          "Questo sito spiega l'offerta Lomon Ventures. Ogni lavoro pagato è regolato da accordo o proposta separata.",
        sections: [
          {
            title: "Contenuto del sito",
            body:
              "Il contenuto è informativo e può cambiare con studio, offerte e portfolio.",
          },
          {
            title: "Lavoro di progetto",
            body:
              "Tempi, scope, deliverable, prezzi e proprietà vengono confermati separatamente prima dell'inizio.",
          },
          {
            title: "Link esterni",
            body:
              "Link portfolio e risorse possono portare a siti terzi. Lomon Ventures non è responsabile per contenuto o disponibilità.",
          },
        ],
      },
      cookies: {
        label: "Cookie",
        title: "Cookie Notice",
        intro:
          "Il sito attuale mantiene il tracking leggero. Salva localmente la preferenza tema per rendere coerente l'esperienza.",
        sections: [
          {
            title: "Storage essenziale",
            body:
              "Lo switch tema usa local storage nel browser. Non serve a identificarti su altri siti.",
          },
          {
            title: "Analytics",
            body:
              "Se in futuro vengono aggiunti analytics, questa notice dovrà indicare strumenti usati e scelte disponibili.",
          },
          {
            title: "Contatto",
            body:
              "Domande su cookie o privacy possono essere inviate a lomonventures@gmail.com.",
          },
        ],
      },
    },
    footer: {
      tagline: "Prodotti software per founder che conoscono il mercato, non il codice.",
      main: "Sito",
      legal: "Legal",
      languages: "Lingue",
      copyright: "Tutti i diritti riservati.",
      strip: ["Software business", "Primo prodotto", "Founder-led", "Tool interni", "MVP SaaS", "Europa"],
    },
  },
} as const;

export type SiteContent = (typeof content)[Locale];
export type SecondaryPageContent = SiteContent["secondary"][SecondaryPageKey];

export function getLocaleFromPath(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : "en";
}

export function getPageFromPath(pathname: string): "home" | SecondaryPageKey {
  const parts = pathname.split("/").filter(Boolean);
  const page = locales.includes(parts[0] as Locale) ? parts[1] : parts[0];

  if (page === "privacy" || page === "terms" || page === "cookies") {
    return page;
  }

  return "home";
}

export function getLocaleBase(locale: Locale) {
  return locale === "en" ? "" : `/${locale}`;
}

export function getLocalizedPath(locale: Locale, page: "home" | SecondaryPageKey = "home") {
  const base = getLocaleBase(locale);
  return page === "home" ? `${base || "/"}` : `${base}/${page}`;
}
