export type SiteLocale = "en" | "fr" | "it";
export type MarketingPageKey = "newsletter" | "resources" | "offers" | "about" | "vibedoctor" | "roastmysaas";

export const siteLocales: SiteLocale[] = ["en", "fr", "it"];

export const localeNames: Record<SiteLocale, string> = {
  en: "EN",
  fr: "FR",
  it: "IT",
};

export const localeFlags: Record<SiteLocale, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  it: "🇮🇹",
};

export const chromeCopy = {
  en: {
    home: "Home",
    resources: "Resources",
    offers: "Offers",
    newsletter: "AI Caramba",
    about: "About",
    how: "How it works",
    pricing: "Pricing",
    portfolio: "Portfolio",
    tribe: "Join the AI Tribe Incubator",
    cta: "Start a project",
    whatsapp: "Start a WhatsApp conversation",
    theme: "Switch color theme",
    closing: "Useful software starts with a useful question.",
    closingCta: "See how we can work together",
    tagline: "Software for founders who know the problem",
  },
  fr: {
    home: "Accueil",
    resources: "Ressources",
    offers: "Offres",
    newsletter: "AI Caramba",
    about: "À propos",
    how: "Méthode",
    pricing: "Tarifs",
    portfolio: "Portfolio",
    tribe: "Rejoindre l'AI Tribe Incubator",
    cta: "Démarrer un projet",
    whatsapp: "Démarrer une conversation WhatsApp",
    theme: "Changer le thème",
    closing: "Un logiciel utile commence par une question utile.",
    closingCta: "Découvrir comment travailler ensemble",
    tagline: "Logiciels pour les fondateurs qui connaissent le problème",
  },
  it: {
    home: "Home",
    resources: "Risorse",
    offers: "Offerte",
    newsletter: "AI Caramba",
    about: "Chi sono",
    how: "Metodo",
    pricing: "Prezzi",
    portfolio: "Portfolio",
    tribe: "Unisciti all'AI Tribe Incubator",
    cta: "Avvia un progetto",
    whatsapp: "Avvia una conversazione WhatsApp",
    theme: "Cambia tema",
    closing: "Il software utile nasce da una domanda utile.",
    closingCta: "Scopri come possiamo lavorare insieme",
    tagline: "Software per founder che conoscono il problema",
  },
};

const englishPages = {
  newsletter: {
    code: "READ",
    eyebrow: "The newsletter",
    title: "AI moves fast. Keep the useful parts.",
    intro:
      "AI Caramba is my practical LinkedIn newsletter about the tools, shifts, and product decisions that are actually worth your attention.",
    primary: "Read AI Caramba on LinkedIn",
    primaryHref: "https://www.linkedin.com/newsletters/ai-caramba-7254822066019848194/",
    note: "Published on LinkedIn. No new inbox to manage.",
    sections: [
      ["Signals, not noise", "Short takes on what changed, why it matters, and what business owners can safely ignore."],
      ["Built from practice", "Lessons from shipping products, testing AI workflows, and finding where automation genuinely helps."],
      ["For operators", "Written for people running companies and products, not for people collecting AI tools."],
    ],
  },
  resources: {
    code: "USE",
    eyebrow: "Resources",
    title: "Useful thinking before expensive software.",
    intro:
      "Frameworks, examples, and direct advice for turning a business workflow, spreadsheet, or half-built AI prototype into something worth shipping.",
    primary: "Explore the offers",
    primaryHref: "/offers",
    note: "No gated PDF library. Start with the bottleneck you need removed.",
    sections: [
      ["Scope before code", "How to cut a product down to the first useful version before the budget disappears."],
      ["AI Caramba", "Practical updates on AI, automation, and the tools that deserve a place in your operating system.", "/newsletter"],
      ["See what ships", "Real products across real estate, hospitality, lead generation, automotive, and AI.", "/#portfolio"],
    ],
  },
  offers: {
    code: "BUILD",
    eyebrow: "Ways to work together",
    title: "Start yourself, launch demand, or get the product built.",
    intro:
      "Lomon Ventures helps business owners turn workflows, ideas, and half-built prototypes into useful software without hiring an agency or babysitting a freelancer.",
    primary: "Tell me what you want to build",
    primaryHref: "mailto:lomonventures@gmail.com?subject=Tell%20me%20what%20you%20want%20to%20build",
    note: "Direct work. Clear scope. You own what ships.",
    sections: [
      ["MVP in 30 days", "A focused product sprint for business owners who need the first useful version scoped, built, deployed, and handed over.", "/#build"],
      ["Vibedoctor", "You built it with AI. It almost works. I diagnose the fragile parts, fix the critical issues, and help you finish your website or app.", "/vibedoctor"],
      ["RoastMySaas", "A blunt positioning and conversion audit for SaaS founders who need to know why the page is not converting.", "/roastmysaas"],
    ],
  },
  vibedoctor: {
    code: "FIX",
    eyebrow: "Vibedoctor",
    title: "Your AI-built website or app almost works. Let’s make it usable.",
    intro:
      "A focused technical rescue for founders who built with AI tools and ended up with something impressive, fragile, and not quite ready to show customers.",
    primary: "Send me the broken build",
    primaryHref: "https://wa.me/33658928752?text=Hi%2C%20I%20need%20help%20fixing%20an%20AI-built%20website%20or%20app.",
    note: "Send the URL, repo, screenshots, or a short Loom. I will tell you what is fragile before we commit to a fix.",
    sections: [
      ["Audit the mess", "I check the product like a senior developer would: broken flows, fragile code, missing states, confusing UX, deployment risks, and security basics."],
      ["Fix what blocks usage", "The goal is not to rewrite everything. The goal is to repair the parts preventing a real person from using it confidently."],
      ["Leave with control", "You get a clearer app, a short diagnosis, and a practical next-step list so you know what to maintain, rebuild, or ignore."],
    ],
  },
  roastmysaas: {
    code: "ROAST",
    eyebrow: "RoastMySaas",
    title: "A blunt audit for SaaS pages that are not converting.",
    intro:
      "I review your positioning, landing page, offer, onboarding path, and trust signals so you know what is confusing buyers before spending more on traffic.",
    primary: "Send me the SaaS",
    primaryHref: "https://wa.me/33658928752?text=Hi%2C%20I%20want%20a%20RoastMySaas%20audit.",
    note: "Send the URL and the main conversion goal. I will look for the fastest path to clarity.",
    sections: [
      ["Positioning roast", "What do people understand in the first ten seconds? I flag vague claims, missing buyer language, weak category framing, and unclear outcomes."],
      ["Conversion path", "I review the CTA, page structure, proof, pricing clarity, onboarding friction, and whether the page gives people enough reason to act."],
      ["Action list", "You get a prioritized list of changes: what to rewrite, remove, move, test, or prove before touching ads or adding features."],
    ],
  },
  about: {
    code: "ABOUT",
    eyebrow: "Loïc Moncany · Founder-developer",
    title: "Most developers are paid to take tickets. My job is to protect the product.",
    intro:
      "I spent 15+ years building for the web and six years running a digital agency in Malta. Now I build products and selectively help business owners turn sharp market knowledge into useful software.",
    primary: "Tell me about the problem",
    primaryHref: "mailto:lomonventures@gmail.com?subject=Tell%20me%20about%20the%20problem",
    note: "Direct work only. No account managers or handoffs.",
    sections: [
      ["Products, not feature lists", "The hard part is rarely writing more code. It is deciding what deserves to exist in the first version."],
      ["Operator context matters", "A real estate CRM, hospitality system, or AI workflow only works when the business context is part of the build."],
      ["A partner, not a vendor", "Not a full agency. Not a freelance pair of hands. A product partner who can challenge the scope and ship the code."],
    ],
  },
} satisfies Record<MarketingPageKey, MarketingPageContent>;

export interface MarketingPageContent {
  code: string;
  eyebrow: string;
  title: string;
  intro: string;
  primary: string;
  primaryHref: string;
  note: string;
  sections: [string, string, string?][];
}

export const marketingPages: Record<SiteLocale, Record<MarketingPageKey, MarketingPageContent>> = {
  en: englishPages,
  fr: {
    newsletter: { ...englishPages.newsletter, eyebrow: "La newsletter", title: "L'IA avance vite. Gardez seulement ce qui est utile.", intro: "AI Caramba est ma newsletter LinkedIn pratique sur les outils, évolutions et décisions produit qui méritent réellement votre attention.", primary: "Lire AI Caramba sur LinkedIn", note: "Publiée sur LinkedIn. Aucun nouvel abonnement à gérer.", sections: [["Des signaux, pas du bruit", "Des analyses courtes sur ce qui change, pourquoi c'est important et ce que les dirigeants peuvent ignorer."], ["Issue de la pratique", "Des leçons tirées de produits lancés, de workflows IA testés et d'automatisations réellement utiles."], ["Pour les opérateurs", "Écrite pour celles et ceux qui dirigent des entreprises et des produits, pas pour collectionner les outils IA."]] },
    resources: { ...englishPages.resources, eyebrow: "Ressources", title: "Réfléchir utile avant de construire cher.", intro: "Des méthodes, exemples et conseils directs pour transformer un processus métier, un tableur ou un prototype IA en logiciel utile.", primary: "Découvrir les offres", note: "Pas de bibliothèque de PDF cachée. Commencez par le blocage à supprimer.", sections: [["Cadrer avant de coder", "Comment réduire un produit à sa première version utile avant que le budget ne disparaisse."], ["AI Caramba", "Des mises à jour pratiques sur l'IA, l'automatisation et les outils qui méritent leur place dans vos opérations.", "/fr/newsletter"], ["Voir ce qui est livré", "Des produits réels dans l'immobilier, l'hospitality, la génération de leads, l'automobile et l'IA.", "/fr/#portfolio"]] },
    offers: { ...englishPages.offers, eyebrow: "Travailler ensemble", title: "Commencer seul, lancer la demande ou faire construire le produit.", intro: "Lomon Ventures aide les dirigeants à transformer workflows, idées et prototypes IA incomplets en logiciels utiles, sans agence lourde ni freelance à gérer.", primary: "Parlez-moi de votre projet", note: "Travail direct. Scope clair. Vous possédez ce qui est livré.", sections: [["MVP en 30 jours", "Un sprint produit cadré pour livrer, déployer et transmettre une première version utile.", "/fr#build"], ["Vibedoctor", "Vous l'avez construit avec l'IA. Il fonctionne presque. Je diagnostique les parties fragiles, corrige les problèmes critiques et vous aide à terminer votre site ou app.", "/fr/vibedoctor"], ["RoastMySaas", "Un audit direct de positionnement et de conversion pour comprendre pourquoi votre page ne transforme pas.", "/fr/roastmysaas"]] },
    vibedoctor: { ...englishPages.vibedoctor, eyebrow: "Vibedoctor", title: "Votre site ou app construit avec l'IA fonctionne presque. Rendons-le utilisable.", intro: "Une intervention ciblée pour les fondateurs qui ont construit avec des outils IA et se retrouvent avec quelque chose d'impressionnant, fragile, et pas encore montrable à des clients.", primary: "Envoyez-moi le build cassé", note: "Envoyez l'URL, le repo, des captures ou un court Loom. Je vous dirai ce qui est fragile avant de s'engager sur une correction.", sections: [["Auditer le chaos", "Je regarde le produit comme un développeur senior : parcours cassés, code fragile, états manquants, UX confuse, risques de déploiement et bases de sécurité."], ["Corriger ce qui bloque l'usage", "L'objectif n'est pas de tout réécrire. L'objectif est de réparer ce qui empêche une vraie personne d'utiliser le produit avec confiance."], ["Repartir avec le contrôle", "Vous repartez avec une app plus claire, un diagnostic court et une liste d'actions pour savoir quoi maintenir, reconstruire ou ignorer."]] },
    roastmysaas: { ...englishPages.roastmysaas, eyebrow: "RoastMySaas", title: "Un audit direct pour les pages SaaS qui ne convertissent pas.", intro: "Je passe en revue votre positionnement, landing page, offre, onboarding et signaux de confiance pour comprendre ce qui bloque les acheteurs avant de dépenser plus en acquisition.", primary: "Envoyez-moi le SaaS", note: "Envoyez l'URL et l'objectif principal de conversion. Je chercherai le chemin le plus rapide vers plus de clarté.", sections: [["Roast du positionnement", "Que comprend-on dans les dix premières secondes ? Je pointe les promesses vagues, le langage trop interne, le cadrage flou et les résultats absents."], ["Parcours de conversion", "Je regarde le CTA, la structure, les preuves, la clarté du pricing, les frictions d'onboarding et les raisons d'agir."], ["Liste d'actions", "Vous obtenez une liste priorisée : quoi réécrire, supprimer, déplacer, tester ou prouver avant de toucher aux ads ou aux features."]] },
    about: { ...englishPages.about, eyebrow: "Loïc Moncany · Fondateur-développeur", title: "La plupart des développeurs prennent des tickets. Mon travail est de protéger le produit.", intro: "Après 15+ ans dans le web et six ans à diriger une agence digitale à Malte, je construis mes produits et aide certains dirigeants à transformer leur expertise métier en logiciel utile.", primary: "Parlez-moi du problème", note: "Travail direct uniquement. Aucun intermédiaire.", sections: [["Des produits, pas des listes de fonctionnalités", "La partie difficile est rarement d'écrire plus de code. C'est décider ce qui mérite d'exister dans la première version."], ["Le contexte métier compte", "Un CRM immobilier, un système hospitality ou un workflow IA fonctionne seulement si le contexte métier fait partie du build."], ["Un partenaire, pas un prestataire", "Ni une grande agence, ni une simple paire de mains freelance. Un partenaire produit capable de challenger le scope et de livrer le code."]] },
  },
  it: {
    newsletter: { ...englishPages.newsletter, eyebrow: "La newsletter", title: "L'AI corre veloce. Tieni solo ciò che serve.", intro: "AI Caramba è la mia newsletter LinkedIn pratica sugli strumenti, i cambiamenti e le decisioni prodotto che meritano davvero attenzione.", primary: "Leggi AI Caramba su LinkedIn", note: "Pubblicata su LinkedIn. Nessuna nuova inbox da gestire.", sections: [["Segnali, non rumore", "Analisi brevi su cosa è cambiato, perché conta e cosa chi gestisce un'azienda può tranquillamente ignorare."], ["Nata dalla pratica", "Lezioni tratte dal lancio di prodotti, dai workflow AI testati e dall'automazione che aiuta davvero."], ["Per chi opera", "Scritta per chi gestisce aziende e prodotti, non per chi colleziona strumenti AI."]] },
    resources: { ...englishPages.resources, eyebrow: "Risorse", title: "Pensiero utile prima di software costoso.", intro: "Framework, esempi e consigli diretti per trasformare un processo aziendale, un foglio di calcolo o un prototipo AI in software utile.", primary: "Scopri le offerte", note: "Nessuna libreria di PDF nascosta. Parti dal collo di bottiglia da eliminare.", sections: [["Scope prima del codice", "Come ridurre un prodotto alla prima versione utile prima che il budget sparisca."], ["AI Caramba", "Aggiornamenti pratici su AI, automazione e strumenti che meritano un posto nelle tue operazioni.", "/it/newsletter"], ["Guarda cosa viene consegnato", "Prodotti reali in real estate, hospitality, lead generation, automotive e AI.", "/it/#portfolio"]] },
    offers: { ...englishPages.offers, eyebrow: "Come lavorare insieme", title: "Inizia da solo, lancia la domanda o fai costruire il prodotto.", intro: "Lomon Ventures aiuta business owner a trasformare workflow, idee e prototipi AI incompleti in software utile, senza agenzia pesante o freelance da gestire.", primary: "Raccontami cosa vuoi costruire", note: "Lavoro diretto. Scope chiaro. Il codice resta tuo.", sections: [["MVP in 30 giorni", "Uno sprint prodotto focalizzato per consegnare, deployare e passare una prima versione utile.", "/it#build"], ["Vibedoctor", "L'hai costruito con l'AI. Funziona quasi. Diagnostico le parti fragili, risolvo i problemi critici e ti aiuto a finire sito o app.", "/it/vibedoctor"], ["RoastMySaas", "Un audit diretto di posizionamento e conversione per capire perché la pagina non converte.", "/it/roastmysaas"]] },
    vibedoctor: { ...englishPages.vibedoctor, eyebrow: "Vibedoctor", title: "Il tuo sito o app costruito con l'AI funziona quasi. Rendiamolo usabile.", intro: "Un intervento tecnico mirato per founder che hanno costruito con strumenti AI e ora hanno qualcosa di impressionante, fragile e non ancora pronto per i clienti.", primary: "Mandami il build rotto", note: "Manda URL, repo, screenshot o un breve Loom. Ti dirò cosa è fragile prima di impegnarci sulla correzione.", sections: [["Audit del caos", "Controllo il prodotto come farebbe uno sviluppatore senior: flow rotti, codice fragile, stati mancanti, UX confusa, rischi di deploy e basi di sicurezza."], ["Fix di ciò che blocca l'uso", "L'obiettivo non è riscrivere tutto. È riparare le parti che impediscono a una persona reale di usare il prodotto con fiducia."], ["Riprendi controllo", "Ottieni un'app più chiara, una diagnosi breve e una lista pratica per sapere cosa mantenere, ricostruire o ignorare."]] },
    roastmysaas: { ...englishPages.roastmysaas, eyebrow: "RoastMySaas", title: "Un audit diretto per pagine SaaS che non convertono.", intro: "Rivedo posizionamento, landing page, offerta, onboarding e segnali di fiducia per capire cosa confonde i buyer prima di spendere ancora in traffico.", primary: "Mandami il SaaS", note: "Manda l'URL e l'obiettivo principale di conversione. Cercherò il percorso più veloce verso la chiarezza.", sections: [["Roast del posizionamento", "Cosa capiscono le persone nei primi dieci secondi? Segnalo claim vaghi, linguaggio interno, categoria poco chiara e risultati assenti."], ["Percorso di conversione", "Rivedo CTA, struttura pagina, prove, chiarezza del pricing, frizioni onboarding e motivi per agire."], ["Lista d'azione", "Ricevi una lista prioritaria: cosa riscrivere, rimuovere, spostare, testare o provare prima di toccare ads o feature."]] },
    about: { ...englishPages.about, eyebrow: "Loïc Moncany · Founder-developer", title: "La maggior parte degli sviluppatori prende ticket. Il mio lavoro è proteggere il prodotto.", intro: "Dopo 15+ anni nel web e sei anni alla guida di un'agenzia digitale a Malta, costruisco prodotti e aiuto business owner a trasformare una forte conoscenza del mercato in software utile.", primary: "Raccontami il problema", note: "Lavoro diretto. Nessun account manager o passaggio di consegne.", sections: [["Prodotti, non liste di funzionalità", "La parte difficile raramente è scrivere più codice. È decidere cosa merita di esistere nella prima versione."], ["Il contesto operativo conta", "Un CRM immobiliare, un sistema hospitality o un workflow AI funziona solo se il contesto business entra nel build."], ["Un partner, non un vendor", "Non una grande agenzia. Non un semplice freelance. Un partner di prodotto capace di sfidare lo scope e spedire il codice."]] },
  },
};

export function localizedPath(locale: SiteLocale, path = "/") {
  const normalized = path === "/" ? "" : path;
  return locale === "en" ? normalized || "/" : `/${locale}${normalized}`;
}

/* ──────────────────────────────────────────────────────────────────
   Homepage copy — all sections, all locales
────────────────────────────────────────────────────────────────── */

export interface HomepageContent {
  chip: string;
  h1Lead: string;
  h1Accent: string;
  sub: string;
  subHighlight: string;
  proof: string[];
  actionNote: string;
  seenOnLabel: string;
  trustLabel: string;
  trustLogos: string[];
  videoKicker: string;
  videoPlaceholder: string;
  videoPlaceholderSub: string;
  s01kicker: string; s01h2Lead: string; s01h2Accent: string;
  s01body: string[]; s01statement: string;
  s02kicker: string; s02h2Lead: string; s02h2Accent: string; s02sub: string;
  s03kicker: string; s03h2Lead: string; s03h2Accent: string; s03sub: string;
  s04kicker: string; s04h2Lead: string; s04h2Accent: string; s04sub: string;
  s05kicker: string; s05h2Lead: string; s05h2Accent: string;
  comparisonHeaders: string[];
  s06kicker: string;
  case1eyebrow: string; case1h2Lead: string; case1h2Accent: string; case1body: string; case1cta: string;
  case2eyebrow: string; case2h2Lead: string; case2h2Accent: string; case2body: string; case2cta: string;
  s07kicker: string; s07h2Lead: string; s07h2Accent: string; notFitLabel: string;
  s08kicker: string; s08h2Lead: string; s08h2Accent: string;
  s09kicker: string; s09h2Lead: string; s09h2Accent: string; s09sub: string; moreSignal: string;
  s10kicker: string; s10h2Lead: string; s10h2Accent: string; s10press: string;
  s11kicker: string; s11h2Lead: string; s11h2Accent: string;
  briefKicker: string; briefH2Lead: string; briefH2Accent: string; briefIntro: string;
  whatsappLabel: string;
  formName: string; formEmail: string; formProblem: string;
  formToday: string; formTodayPlaceholder: string; formUser: string;
  formOffer: string; formOfferPlaceholder: string; formOfferOptions: string[];
  formOutcome: string; formSubmit: string; formNote: string;
  emailSubject: string;
  emailLabels: { name: string; email: string; problem: string; today: string; user: string; offer: string; outcome: string };
  offerFeaturedLabel: string;
  process: [string, string, string, string][];
  operatingPrinciples: [string, string][];
  offers: [string, string, string, string, string[], string][];
  comparison: string[][];
  fit: string[];
  notFit: string[];
  faqs: [string, string][];
  featuredVideos: { title: string; meta: string; youtubeId: string }[];
  moreVideos: [string, string, string][];
}

export const homepageCopy: Record<SiteLocale, HomepageContent> = {
  en: {
    chip: "We build tools that fit your business — not the other way around.",
    h1Lead: "We build tools that fit\nyour business.",
    h1Accent: "Not the other way around.",
    sub: "Most software forces your team to change how they work. Lomon Ventures starts with how you already operate — and builds exactly that. ",
    subHighlight: "Nothing more. In 30 days",
    proof: ["Built around your workflow", "15+ years building for the web", "Direct work, no account managers"],
    actionNote: "Fill in a short brief. You'll receive an honest reply within 48 hours.",
    seenOnLabel: "As seen on",
    trustLabel: "“Loic is a secret weapon in web dev.” — Teri Yu, Product @ OpenAI · Ex Vibely",
    trustLogos: ["Real estate", "Hospitality tech", "Automotive", "Lead generation", "AI workflows", "Internal tools"],
    videoKicker: "Watch",
    videoPlaceholder: "Your featured video goes here",
    videoPlaceholderSub: "Replace with a YouTube embed, Loom, or Vimeo",
    s01kicker: "01 / The real problem",
    s01h2Lead: "You're not stuck because",
    s01h2Accent: "the idea is bad.",
    s01body: [
      "You've tried ChatGPT. You've tried Claude. Maybe you got something running: a prototype that works on a good day, a no-code tool that got halfway, or a Notion setup held together with duct tape.",
      "But it is not something you would show a real customer. And every week it is not, the problem it was supposed to solve is still handled manually.",
      "The gap between \"almost works\" and \"actually works\" is not a technology problem. It is a scoping problem: knowing what to fix, what to cut, and what to build next, in the right order.",
    ],
    s01statement: "That is what the next 30 days fixes.",
    s02kicker: "02 / Why this works",
    s02h2Lead: "Not a dev shop.",
    s02h2Accent: "A build system for business owners.",
    s02sub: "You know the market. The studio turns that knowledge into the first useful version of the product.",
    s03kicker: "03 / How it works",
    s03h2Lead: "From workflow to working product",
    s03h2Accent: "in four steps.",
    s03sub: "The work starts with scope because bad scope is where most software projects become expensive.",
    s04kicker: "04 / Offers",
    s04h2Lead: "Three ways in.",
    s04h2Accent: "One outcome.",
    s04sub: "Start yourself, launch the demand capture layer, or get the product built end to end.",
    s05kicker: "05 / Honest comparison",
    s05h2Lead: "You have options.",
    s05h2Accent: "Not all roads lead to a working product.",
    comparisonHeaders: ["", "Ship", "Launch", "Build", "Freelancer", "Agency"],
    s06kicker: "06 / Portfolio proof",
    case1eyebrow: "A-Meego · Bangkok real estate",
    case1h2Lead: "A CRM and website for a real estate agency",
    case1h2Accent: "with a real workflow.",
    case1body: "A-Meego needed more than a brochure site. The business runs on listings, rentals, sales, BTS station searches, and customer matching. The software had to support the way the agency actually works.",
    case1cta: "Explore a-meego.com",
    case2eyebrow: "Mixologiq · Hospitality operations",
    case2h2Lead: "When the product is physical,",
    case2h2Accent: "the software still runs the operation.",
    case2body: "Mixologiq combines precision cocktail dispensing with integrated software and a smart back office. The value is not only the machine: it is consistency, menu control, and operational visibility at scale.",
    case2cta: "Explore mixologiq.com",
    s07kicker: "07 / Fit",
    s07h2Lead: "This is for you if",
    s07h2Accent: "the problem is already real.",
    notFitLabel: "Not a fit if:",
    s08kicker: "08 / What people are saying",
    s08h2Lead: "Proof from people who",
    s08h2Accent: "actually shipped.",
    s09kicker: "09 / Video proof",
    s09h2Lead: "Testimonials and interviews",
    s09h2Accent: "you can actually watch.",
    s09sub: "Client videos, podcast interviews, and media appearances around agency work, digital nomads, and building in Malta.",
    moreSignal: "More signal:",
    s10kicker: "10 / Press and community",
    s10h2Lead: "Not just code.",
    s10h2Accent: "Operating context.",
    s10press: "Before Lomon Ventures, the work included Flowr Agency, French Touch Malta, and community building in Malta's digital nomad ecosystem. That matters because business software is never only technical.",
    s11kicker: "11 / Common questions",
    s11h2Lead: "Clear scope.",
    s11h2Accent: "Clear expectations.",
    briefKicker: "Start here",
    briefH2Lead: "You keep running the business.",
    briefH2Accent: "The tool stops being the bottleneck.",
    briefIntro: "Message me directly on WhatsApp with the idea, workflow, or half-built product. I will reply with a clear next step before any commitment.",
    whatsappLabel: "WhatsApp",
    formName: "Name",
    formEmail: "Email",
    formProblem: "What are you trying to build?",
    formToday: "What do you already have?",
    formTodayPlaceholder: "Idea, spreadsheet, AI prototype, no-code tool, old CRM...",
    formUser: "Who is it for?",
    formOffer: "Which offer feels closest?",
    formOfferPlaceholder: "Select an offer",
    formOfferOptions: ["MVP in 30 days", "RoastMySaas", "VibeDoctor", "Not sure yet"],
    formOutcome: "What would make the next 30 days successful?",
    formSubmit: "Say Hi",
    formNote: "Submitting opens a pre-filled email. No commitment, no payment, no sales sequence.",
    emailSubject: "Product build brief",
    emailLabels: { name: "Name", email: "Email", problem: "What are you trying to build?", today: "What do you already have?", user: "Who is it for?", offer: "Preferred offer", outcome: "What would make the next 30 days successful?" },
    offerFeaturedLabel: "Most chosen",
    process: [
      ["Week 1", "Scope", "Define the hypothesis, kill the wrong features, and agree what success looks like before touching code.", "One-page brief"],
      ["End of week 1", "Cut", "Everything that does not test the core idea gets removed. Expensive features wait for version two.", "First-version plan"],
      ["Weeks 2-3", "Build", "A working product, not a mockup. Something deployed, clickable, and ready to put in front of real users.", "Functional product"],
      ["Week 4", "Handover", "Full codebase, documentation, and a clear next-step plan based on what the product actually does.", "Codebase + roadmap"],
    ],
    operatingPrinciples: [
      ["You bring the domain knowledge", "The useful details usually live in your spreadsheet, CRM, sales calls, operations, and customer conversations."],
      ["Scope protects the budget", "The first version is not a smaller dream. It is the smallest useful version that can remove a real bottleneck."],
      ["Built like a product, not a task list", "Architecture, onboarding, copy, handover, and next-step decisions are part of the work, not extras."],
      ["You own what ships", "The codebase, documentation, and roadmap leave with you. No lock-in, no vague dependency."],
    ],
    offers: [
      ["mvp-in-30-days", "MVP in 30 days", "Build the first useful version", "A focused product sprint for business owners who need a real workflow turned into software without managing freelancers or bloated agency scope.", ["Scope around the real business workflow", "Working prototype or MVP", "Deployed, documented, and handed over", "Clear next-step plan after launch"], "For business owners who know the problem and need the first useful version shipped."],
      ["roastmysaas", "RoastMySaas", "Fix the message before the product", "A direct audit of your SaaS positioning, landing page, onboarding path, and trust signals so you know why people are not converting.", ["Positioning and headline teardown", "Landing page conversion review", "CTA, proof, pricing, and onboarding friction", "Prioritized action list"], "For SaaS founders who need clarity before spending more on traffic or features."],
      ["vibedoctor", "VibeDoctor", "Rescue your AI-built app", "You built it with AI. It almost works. I diagnose the fragile parts, fix the critical issues, and help you turn it into something usable.", ["Broken flows and UX diagnosis", "Critical bug and deployment fixes", "Security and maintainability basics", "Practical rebuild-or-repair plan"], "For founders with an AI-built site or app that is impressive but still too fragile to show customers."],
    ],
    comparison: [
      ["Delivery", "Instant", "7 days", "30 days", "60-90 days", "3-6 months"],
      ["Cost", "€99", "€997", "€5,000", "€2k-€8k", "€15k+"],
      ["Code quality", "Yes", "Yes", "Yes", "Variable", "Usually"],
      ["You own the code", "Yes", "Yes", "Yes", "Depends", "Depends"],
      ["Direct senior access", "Yes", "Yes", "Yes", "Variable", "Rare"],
    ],
    fit: [
      "You know the customer, workflow, or problem better than any agency ever will",
      "You have a product idea or manual process that should become software",
      "You want someone who challenges the scope, not just executes it",
      "You need a working first version, not a 40-page roadmap",
    ],
    notFit: [
      "You only have a vague idea with no target user",
      "You want every feature in version one",
      "You are looking for the cheapest option in the market",
    ],
    faqs: [
      ["Is this an MVP or a finished product?", "It is a working first version built around the workflow that matters. It is not a bloated final product with every future feature included."],
      ["What if I already started with AI or no-code?", "Bring the Claude conversation, prototype, spreadsheet, or no-code setup. The first job is to decide what is useful, what is fragile, and what needs rebuilding."],
      ["Who owns the code?", "You do. The product, codebase, documentation, and handover notes are yours."],
      ["Can this continue after 30 days?", "Yes, if it makes sense. Version two is scoped separately after the first version is live and the real priorities are visible."],
      ["Can users test it during the sprint?", "Yes. If you can introduce real users, their feedback can shape week four and the roadmap."],
    ],
    featuredVideos: [
      { title: "Luc Thilliez talks about working with Flowr Agency", meta: "Video testimonial · Flowr Agency", youtubeId: "1DJwVajzCbo" },
      { title: "Digital nomads with Daniel Goebel and Loïc Moncany", meta: "Interview · AIBC World", youtubeId: "rF_vLRAPfss" },
    ],
    moreVideos: [
      ["Amin Lams testimonial", "Flowr Agency", "https://www.youtube.com/watch?v=_x4FIFXLMwE"],
      ["TVM Malta interview", "Nomad visa in Malta", "https://www.youtube.com/watch?v=aUAI-MXfwLM"],
      ["Malte, le nouvel eldorado des nomades digitaux", "Travail / interview", "https://www.youtube.com/watch?v=EgFaogkqjZE"],
      ["The Swiss Army knife of Malta", "What A Job", "https://www.youtube.com/watch?v=PXLZGw0Z1-s"],
      ["From employee to agency owner in Malta", "Marc Boulet Business", "https://www.youtube.com/watch?v=YJ-v5beLHig"],
      ["A talk with a friend abroad", "Far From Home", "https://www.youtube.com/watch?v=NpXw1Z_Ra_g"],
    ],
  },

  fr: {
    chip: "On construit des outils adaptés à votre business — pas l'inverse.",
    h1Lead: "On construit des outils adaptés\nà votre business.",
    h1Accent: "Pas l'inverse.",
    sub: "La plupart des logiciels forcent votre équipe à changer sa façon de travailler. Lomon Ventures part de votre manière d'opérer — puis construit exactement ça. ",
    subHighlight: "Rien de plus. En 30 jours",
    proof: ["Construit autour de votre workflow", "15+ ans à construire pour le web", "Travail direct, sans intermédiaires"],
    actionNote: "Remplissez un brief rapide. Vous recevrez une réponse honnête sous 48 heures.",
    seenOnLabel: "Vu sur",
    trustLabel: "“Loic is a secret weapon in web dev.” — Teri Yu, Product @ OpenAI · Ex Vibely",
    trustLogos: ["Immobilier", "Tech hospitality", "Automobile", "Génération de leads", "Workflows IA", "Outils internes"],
    videoKicker: "Regarder",
    videoPlaceholder: "Votre vidéo vedette ici",
    videoPlaceholderSub: "Remplacer par un embed YouTube, Loom ou Vimeo",
    s01kicker: "01 / Le vrai problème",
    s01h2Lead: "Vous n'êtes pas bloqué parce que",
    s01h2Accent: "l'idée est mauvaise.",
    s01body: [
      "Vous avez essayé ChatGPT. Vous avez essayé Claude. Vous avez peut-être quelque chose qui tourne : un prototype qui fonctionne les bons jours, un outil no-code à mi-chemin, ou une configuration Notion maintenue avec du ruban adhésif.",
      "Mais ce n'est pas quelque chose que vous montreriez à un vrai client. Et chaque semaine que ça ne l'est pas, le problème qu'il était censé résoudre est encore géré manuellement.",
      "L'écart entre « ça fonctionne presque » et « ça fonctionne vraiment » n'est pas un problème technologique. C'est un problème de scope : savoir quoi corriger, quoi couper et quoi construire ensuite, dans le bon ordre.",
    ],
    s01statement: "C'est ce que les 30 prochains jours corrigent.",
    s02kicker: "02 / Pourquoi ça marche",
    s02h2Lead: "Pas une agence de dev.",
    s02h2Accent: "Un système de build pour dirigeants.",
    s02sub: "Vous connaissez le marché. Le studio transforme cette connaissance en la première version utile du produit.",
    s03kicker: "03 / Comment ça marche",
    s03h2Lead: "Du workflow au produit fonctionnel",
    s03h2Accent: "en quatre étapes.",
    s03sub: "Le travail commence par le scope car un mauvais scope est là où la plupart des projets logiciels deviennent coûteux.",
    s04kicker: "04 / Offres",
    s04h2Lead: "Trois façons d'entrer.",
    s04h2Accent: "Un seul résultat.",
    s04sub: "Démarrez seul, lancez la couche de capture de demande, ou faites construire le produit de A à Z.",
    s05kicker: "05 / Comparaison honnête",
    s05h2Lead: "Vous avez le choix.",
    s05h2Accent: "Toutes les routes ne mènent pas à un produit fonctionnel.",
    comparisonHeaders: ["", "Ship", "Launch", "Build", "Freelance", "Agence"],
    s06kicker: "06 / Portfolio",
    case1eyebrow: "A-Meego · Immobilier Bangkok",
    case1h2Lead: "Un CRM et un site pour une agence immobilière",
    case1h2Accent: "avec un vrai workflow.",
    case1body: "A-Meego avait besoin de plus qu'un site vitrine. L'activité repose sur les annonces, locations, ventes, recherches par station BTS et la mise en relation. Le logiciel devait soutenir la façon dont l'agence fonctionne réellement.",
    case1cta: "Explorer a-meego.com",
    case2eyebrow: "Mixologiq · Opérations hospitality",
    case2h2Lead: "Quand le produit est physique,",
    case2h2Accent: "le logiciel fait quand même tourner l'opération.",
    case2body: "Mixologiq associe distribution de cocktails de précision à un logiciel intégré et un back-office intelligent. La valeur n'est pas seulement la machine : c'est la cohérence, le contrôle des menus et la visibilité opérationnelle à grande échelle.",
    case2cta: "Explorer mixologiq.com",
    s07kicker: "07 / Pour qui",
    s07h2Lead: "C'est pour vous si",
    s07h2Accent: "le problème est déjà réel.",
    notFitLabel: "Pas adapté si :",
    s08kicker: "08 / Ce que disent les clients",
    s08h2Lead: "Preuve de personnes qui",
    s08h2Accent: "ont vraiment livré.",
    s09kicker: "09 / Preuves vidéo",
    s09h2Lead: "Témoignages et interviews",
    s09h2Accent: "que vous pouvez vraiment regarder.",
    s09sub: "Vidéos clients, interviews podcast et apparitions médias autour du travail en agence, des nomades digitaux et de la construction à Malte.",
    moreSignal: "Plus de signal :",
    s10kicker: "10 / Presse et communauté",
    s10h2Lead: "Pas seulement du code.",
    s10h2Accent: "Un contexte opérationnel.",
    s10press: "Avant Lomon Ventures, le travail comprenait Flowr Agency, French Touch Malta et le développement communautaire dans l'écosystème nomade digital de Malte. C'est important car les logiciels business ne sont jamais uniquement techniques.",
    s11kicker: "11 / Questions fréquentes",
    s11h2Lead: "Scope clair.",
    s11h2Accent: "Attentes claires.",
    briefKicker: "Commencez ici",
    briefH2Lead: "Vous continuez à gérer votre business.",
    briefH2Accent: "L'outil cesse d'être le goulot d'étranglement.",
    briefIntro: "Écrivez-moi directement sur WhatsApp avec votre idée, workflow ou produit à moitié construit. Je vous répondrai avec une prochaine étape claire, sans engagement.",
    whatsappLabel: "WhatsApp",
    formName: "Nom",
    formEmail: "Email",
    formProblem: "Qu'est-ce que vous essayez de construire ?",
    formToday: "Qu'avez-vous déjà ?",
    formTodayPlaceholder: "Idée, tableur, prototype IA, outil no-code, ancien CRM...",
    formUser: "Pour qui est-ce ?",
    formOffer: "Quelle offre vous semble la plus proche ?",
    formOfferPlaceholder: "Choisir une offre",
    formOfferOptions: ["MVP en 30 jours", "RoastMySaas", "VibeDoctor", "Pas encore décidé"],
    formOutcome: "Qu'est-ce qui rendrait les 30 prochains jours réussis ?",
    formSubmit: "Say Hi",
    formNote: "La soumission ouvre un email pré-rempli. Aucun engagement, aucun paiement, aucune séquence commerciale.",
    emailSubject: "Brief projet produit",
    emailLabels: { name: "Nom", email: "Email", problem: "Qu'est-ce que vous essayez de construire ?", today: "Qu'avez-vous déjà ?", user: "Pour qui est-ce ?", offer: "Offre préférée", outcome: "Qu'est-ce qui rendrait les 30 prochains jours réussis ?" },
    offerFeaturedLabel: "Le plus choisi",
    process: [
      ["Semaine 1", "Scope", "Définir l'hypothèse, supprimer les mauvaises fonctionnalités et s'accorder sur ce que signifie le succès avant de toucher au code.", "Brief en une page"],
      ["Fin semaine 1", "Couper", "Tout ce qui ne teste pas l'idée centrale est supprimé. Les fonctionnalités coûteuses attendent la version deux.", "Plan première version"],
      ["Semaines 2-3", "Construire", "Un produit fonctionnel, pas une maquette. Quelque chose de déployé, cliquable et prêt à être mis devant de vrais utilisateurs.", "Produit fonctionnel"],
      ["Semaine 4", "Transmission", "Codebase complet, documentation et un plan d'étape clair basé sur ce que le produit fait réellement.", "Codebase + roadmap"],
    ],
    operatingPrinciples: [
      ["Vous apportez la connaissance métier", "Les détails utiles vivent généralement dans votre tableur, CRM, appels commerciaux, opérations et conversations clients."],
      ["Le scope protège le budget", "La première version n'est pas un rêve réduit. C'est la plus petite version utile qui peut supprimer un vrai goulot d'étranglement."],
      ["Construit comme un produit, pas une liste de tâches", "L'architecture, l'onboarding, la copie, la transmission et les décisions d'étape suivante font partie du travail, pas des extras."],
      ["Vous possédez ce qui est livré", "Le codebase, la documentation et la roadmap partent avec vous. Pas de lock-in, pas de dépendance vague."],
    ],
    offers: [
      ["mvp-en-30-jours", "MVP en 30 jours", "Construire la première version utile", "Un sprint produit ciblé pour transformer un vrai workflow métier en logiciel, sans gérer freelance ni scope d'agence trop lourd.", ["Scope autour du workflow réel", "Prototype ou MVP fonctionnel", "Déployé, documenté et transmis", "Plan clair pour la suite"], "Pour les dirigeants qui connaissent le problème et veulent livrer une première version utile."],
      ["roastmysaas", "RoastMySaas", "Corriger le message avant le produit", "Un audit direct de votre positionnement SaaS, landing page, onboarding et signaux de confiance pour comprendre pourquoi les visiteurs ne convertissent pas.", ["Audit du positionnement et du titre", "Revue conversion de la landing page", "CTA, preuves, pricing et frictions onboarding", "Liste d'actions priorisée"], "Pour les fondateurs SaaS qui veulent clarifier avant de dépenser plus en trafic ou features."],
      ["vibedoctor", "VibeDoctor", "Sauver votre app construite avec l'IA", "Vous l'avez construite avec l'IA. Elle fonctionne presque. Je diagnostique les parties fragiles, corrige les blocages critiques et la rends utilisable.", ["Diagnostic des parcours cassés et de l'UX", "Corrections bugs critiques et déploiement", "Bases sécurité et maintenabilité", "Plan réparer-ou-reconstruire"], "Pour les fondateurs avec un site ou une app IA impressionnant mais encore trop fragile pour les clients."],
    ],
    comparison: [
      ["Livraison", "Immédiat", "7 jours", "30 jours", "60-90 jours", "3-6 mois"],
      ["Coût", "99 €", "997 €", "5 000 €", "2k-8k €", "15k €+"],
      ["Qualité du code", "Oui", "Oui", "Oui", "Variable", "Généralement"],
      ["Vous possédez le code", "Oui", "Oui", "Oui", "Selon", "Selon"],
      ["Accès direct senior", "Oui", "Oui", "Oui", "Variable", "Rare"],
    ],
    fit: [
      "Vous connaissez le client, le workflow ou le problème mieux que n'importe quelle agence",
      "Vous avez une idée de produit ou un processus manuel qui devrait devenir un logiciel",
      "Vous voulez quelqu'un qui challenge le scope, pas juste qui l'exécute",
      "Vous avez besoin d'une première version fonctionnelle, pas d'une roadmap de 40 pages",
    ],
    notFit: [
      "Vous n'avez qu'une vague idée sans utilisateur cible",
      "Vous voulez toutes les fonctionnalités en version une",
      "Vous cherchez l'option la moins chère du marché",
    ],
    faqs: [
      ["Est-ce un MVP ou un produit fini ?", "C'est une première version fonctionnelle construite autour du workflow qui compte. Ce n'est pas un produit final gonflé avec toutes les fonctionnalités futures incluses."],
      ["Et si j'ai déjà commencé avec l'IA ou le no-code ?", "Apportez la conversation Claude, le prototype, le tableur ou la configuration no-code. Le premier travail est de décider ce qui est utile, ce qui est fragile et ce qui doit être reconstruit."],
      ["Qui possède le code ?", "Vous. Le produit, le codebase, la documentation et les notes de transmission sont les vôtres."],
      ["Peut-on continuer après 30 jours ?", "Oui, si ça a du sens. La version deux est scopée séparément après que la première version est en ligne et que les vraies priorités sont visibles."],
      ["Les utilisateurs peuvent-ils tester pendant le sprint ?", "Oui. Si vous pouvez introduire de vrais utilisateurs, leur feedback peut façonner la semaine quatre et la roadmap."],
    ],
    featuredVideos: [
      { title: "Luc Thilliez parle de son expérience avec Flowr Agency", meta: "Témoignage vidéo · Flowr Agency", youtubeId: "1DJwVajzCbo" },
      { title: "Nomades digitaux avec Daniel Goebel et Loïc Moncany", meta: "Interview · AIBC World", youtubeId: "rF_vLRAPfss" },
    ],
    moreVideos: [
      ["Témoignage d'Amin Lams", "Flowr Agency", "https://www.youtube.com/watch?v=_x4FIFXLMwE"],
      ["Interview TVM Malta", "Visa nomade à Malte", "https://www.youtube.com/watch?v=aUAI-MXfwLM"],
      ["Malte, le nouvel eldorado des nomades digitaux", "Travail / interview", "https://www.youtube.com/watch?v=EgFaogkqjZE"],
      ["Le couteau suisse de Malte", "What A Job", "https://www.youtube.com/watch?v=PXLZGw0Z1-s"],
      ["De salarié à patron d'agence à Malte", "Marc Boulet Business", "https://www.youtube.com/watch?v=YJ-v5beLHig"],
      ["Une discussion avec un ami à l'étranger", "Far From Home", "https://www.youtube.com/watch?v=NpXw1Z_Ra_g"],
    ],
  },

  it: {
    chip: "Costruiamo strumenti adatti al tuo business — non il contrario.",
    h1Lead: "Costruiamo strumenti adatti\nal tuo business.",
    h1Accent: "Non il contrario.",
    sub: "La maggior parte dei software obbliga il team a cambiare modo di lavorare. Lomon Ventures parte da come operate già — e costruisce esattamente quello. ",
    subHighlight: "Niente di più. In 30 giorni",
    proof: ["Costruito attorno al tuo workflow", "15+ anni a costruire per il web", "Lavoro diretto, senza intermediari"],
    actionNote: "Compila un breve brief. Riceverai una risposta onesta entro 48 ore.",
    seenOnLabel: "Come visto su",
    trustLabel: "“Loic is a secret weapon in web dev.” — Teri Yu, Product @ OpenAI · Ex Vibely",
    trustLogos: ["Immobiliare", "Tech hospitality", "Automotive", "Lead generation", "Workflow IA", "Strumenti interni"],
    videoKicker: "Guarda",
    videoPlaceholder: "Il tuo video in evidenza va qui",
    videoPlaceholderSub: "Sostituisci con un embed YouTube, Loom o Vimeo",
    s01kicker: "01 / Il vero problema",
    s01h2Lead: "Non sei bloccato perché",
    s01h2Accent: "l'idea è sbagliata.",
    s01body: [
      "Hai provato ChatGPT. Hai provato Claude. Forse hai qualcosa che funziona: un prototipo che va i giorni buoni, uno strumento no-code a metà strada, o una configurazione Notion tenuta insieme con lo scotch.",
      "Ma non è qualcosa che mostreresti a un cliente reale. E ogni settimana che non lo è, il problema che avrebbe dovuto risolvere viene ancora gestito manualmente.",
      "Il divario tra \"funziona quasi\" e \"funziona davvero\" non è un problema tecnologico. È un problema di scope: sapere cosa correggere, cosa tagliare e cosa costruire dopo, nell'ordine giusto.",
    ],
    s01statement: "È quello che i prossimi 30 giorni risolvono.",
    s02kicker: "02 / Perché funziona",
    s02h2Lead: "Non un'agenzia di sviluppo.",
    s02h2Accent: "Un sistema di build per imprenditori.",
    s02sub: "Conosci il mercato. Lo studio trasforma quella conoscenza nella prima versione utile del prodotto.",
    s03kicker: "03 / Come funziona",
    s03h2Lead: "Dal workflow al prodotto funzionante",
    s03h2Accent: "in quattro passi.",
    s03sub: "Il lavoro inizia dallo scope perché un cattivo scope è dove la maggior parte dei progetti software diventano costosi.",
    s04kicker: "04 / Offerte",
    s04h2Lead: "Tre modi per iniziare.",
    s04h2Accent: "Un solo risultato.",
    s04sub: "Inizia da solo, lancia il layer di acquisizione domanda, o fai costruire il prodotto dall'inizio alla fine.",
    s05kicker: "05 / Confronto onesto",
    s05h2Lead: "Hai opzioni.",
    s05h2Accent: "Non tutte le strade portano a un prodotto funzionante.",
    comparisonHeaders: ["", "Ship", "Launch", "Build", "Freelance", "Agenzia"],
    s06kicker: "06 / Portfolio",
    case1eyebrow: "A-Meego · Immobiliare Bangkok",
    case1h2Lead: "Un CRM e un sito per un'agenzia immobiliare",
    case1h2Accent: "con un workflow reale.",
    case1body: "A-Meego aveva bisogno di più di un sito brochure. L'attività si basa su annunci, affitti, vendite, ricerche per stazione BTS e corrispondenza clienti. Il software doveva supportare il modo in cui l'agenzia funziona davvero.",
    case1cta: "Esplora a-meego.com",
    case2eyebrow: "Mixologiq · Operazioni hospitality",
    case2h2Lead: "Quando il prodotto è fisico,",
    case2h2Accent: "il software fa comunque girare l'operazione.",
    case2body: "Mixologiq combina la distribuzione di cocktail di precisione con software integrato e un back office intelligente. Il valore non è solo la macchina: è coerenza, controllo del menu e visibilità operativa su scala.",
    case2cta: "Esplora mixologiq.com",
    s07kicker: "07 / Per chi",
    s07h2Lead: "È per te se",
    s07h2Accent: "il problema è già reale.",
    notFitLabel: "Non adatto se:",
    s08kicker: "08 / Cosa dicono le persone",
    s08h2Lead: "Prove da persone che",
    s08h2Accent: "hanno davvero consegnato.",
    s09kicker: "09 / Prove video",
    s09h2Lead: "Testimonianze e interviste",
    s09h2Accent: "che puoi davvero guardare.",
    s09sub: "Video clienti, interviste podcast e apparizioni sui media sul lavoro in agenzia, i nomadi digitali e il costruire a Malta.",
    moreSignal: "Altri segnali:",
    s10kicker: "10 / Stampa e comunità",
    s10h2Lead: "Non solo codice.",
    s10h2Accent: "Contesto operativo.",
    s10press: "Prima di Lomon Ventures, il lavoro includeva Flowr Agency, French Touch Malta e la costruzione di community nell'ecosistema nomade digitale di Malta. Conta perché il software business non è mai solo tecnico.",
    s11kicker: "11 / Domande frequenti",
    s11h2Lead: "Scope chiaro.",
    s11h2Accent: "Aspettative chiare.",
    briefKicker: "Inizia qui",
    briefH2Lead: "Continui a gestire il business.",
    briefH2Accent: "Lo strumento smette di essere il collo di bottiglia.",
    briefIntro: "Scrivimi direttamente su WhatsApp con la tua idea, workflow o prodotto a metà costruzione. Ti risponderò con un prossimo passo chiaro, senza impegno.",
    whatsappLabel: "WhatsApp",
    formName: "Nome",
    formEmail: "Email",
    formProblem: "Cosa stai cercando di costruire?",
    formToday: "Cosa hai già?",
    formTodayPlaceholder: "Idea, foglio di calcolo, prototipo IA, strumento no-code, vecchio CRM...",
    formUser: "Per chi è?",
    formOffer: "Quale offerta ti sembra più vicina?",
    formOfferPlaceholder: "Seleziona un'offerta",
    formOfferOptions: ["MVP in 30 giorni", "RoastMySaas", "VibeDoctor", "Non ancora sicuro"],
    formOutcome: "Cosa renderebbe i prossimi 30 giorni un successo?",
    formSubmit: "Say Hi",
    formNote: "L'invio apre un'email pre-compilata. Nessun impegno, nessun pagamento, nessuna sequenza di vendita.",
    emailSubject: "Brief progetto prodotto",
    emailLabels: { name: "Nome", email: "Email", problem: "Cosa stai cercando di costruire?", today: "Cosa hai già?", user: "Per chi è?", offer: "Offerta preferita", outcome: "Cosa renderebbe i prossimi 30 giorni un successo?" },
    offerFeaturedLabel: "Il più scelto",
    process: [
      ["Settimana 1", "Scope", "Definire l'ipotesi, eliminare le funzionalità sbagliate e concordare cosa significa il successo prima di toccare il codice.", "Brief di una pagina"],
      ["Fine settimana 1", "Taglio", "Tutto ciò che non testa l'idea centrale viene rimosso. Le funzionalità costose aspettano la versione due.", "Piano prima versione"],
      ["Settimane 2-3", "Build", "Un prodotto funzionante, non un mockup. Qualcosa di deployato, cliccabile e pronto da mettere davanti a utenti reali.", "Prodotto funzionante"],
      ["Settimana 4", "Consegna", "Codebase completo, documentazione e un piano chiaro del passo successivo basato su cosa fa davvero il prodotto.", "Codebase + roadmap"],
    ],
    operatingPrinciples: [
      ["Porti la conoscenza del dominio", "I dettagli utili di solito vivono nel tuo foglio di calcolo, CRM, chiamate commerciali, operazioni e conversazioni con i clienti."],
      ["Lo scope protegge il budget", "La prima versione non è un sogno ridotto. È la versione utile più piccola che può rimuovere un vero collo di bottiglia."],
      ["Costruito come un prodotto, non una lista di task", "Architettura, onboarding, copy, consegna e decisioni sul passo successivo fanno parte del lavoro, non sono extra."],
      ["Possiedi ciò che viene consegnato", "Il codebase, la documentazione e la roadmap escono con te. Nessun lock-in, nessuna dipendenza vaga."],
    ],
    offers: [
      ["mvp-in-30-giorni", "MVP in 30 giorni", "Costruire la prima versione utile", "Uno sprint prodotto focalizzato per trasformare un vero workflow business in software, senza gestire freelance o scope d'agenzia troppo pesanti.", ["Scope attorno al workflow reale", "Prototype o MVP funzionante", "Deployato, documentato e consegnato", "Piano chiaro per il passo successivo"], "Per business owner che conoscono il problema e vogliono spedire la prima versione utile."],
      ["roastmysaas", "RoastMySaas", "Correggere il messaggio prima del prodotto", "Un audit diretto di posizionamento SaaS, landing page, onboarding e segnali di fiducia per capire perché le persone non convertono.", ["Audit posizionamento e headline", "Review conversione landing page", "CTA, prove, pricing e frizioni onboarding", "Lista azioni prioritaria"], "Per founder SaaS che vogliono chiarezza prima di spendere altro in traffico o feature."],
      ["vibedoctor", "VibeDoctor", "Salvare la tua app costruita con AI", "L'hai costruita con l'AI. Funziona quasi. Diagnostico le parti fragili, risolvo i blocchi critici e la rendo usabile.", ["Diagnosi flow rotti e UX", "Fix bug critici e deploy", "Basi sicurezza e manutenzione", "Piano ripara-o-ricostruisci"], "Per founder con un sito o app AI impressionante ma ancora troppo fragile per i clienti."],
    ],
    comparison: [
      ["Consegna", "Immediata", "7 giorni", "30 giorni", "60-90 giorni", "3-6 mesi"],
      ["Costo", "€99", "€997", "€5.000", "€2k-€8k", "€15k+"],
      ["Qualità del codice", "Sì", "Sì", "Sì", "Variabile", "Di solito"],
      ["Possiedi il codice", "Sì", "Sì", "Sì", "Dipende", "Dipende"],
      ["Accesso diretto senior", "Sì", "Sì", "Sì", "Variabile", "Raro"],
    ],
    fit: [
      "Conosci il cliente, il workflow o il problema meglio di qualsiasi agenzia",
      "Hai un'idea di prodotto o un processo manuale che dovrebbe diventare software",
      "Vuoi qualcuno che sfida lo scope, non solo che lo esegue",
      "Hai bisogno di una prima versione funzionante, non di una roadmap di 40 pagine",
    ],
    notFit: [
      "Hai solo un'idea vaga senza utente target",
      "Vuoi ogni funzionalità nella versione uno",
      "Stai cercando l'opzione più economica sul mercato",
    ],
    faqs: [
      ["È un MVP o un prodotto finito?", "È una prima versione funzionante costruita attorno al workflow che conta. Non è un prodotto finale gonfiato con tutte le funzionalità future incluse."],
      ["E se ho già iniziato con l'IA o il no-code?", "Porta la conversazione Claude, il prototipo, il foglio di calcolo o la configurazione no-code. Il primo lavoro è decidere cosa è utile, cosa è fragile e cosa deve essere ricostruito."],
      ["Chi possiede il codice?", "Tu. Il prodotto, il codebase, la documentazione e le note di consegna sono tuoi."],
      ["Si può continuare dopo 30 giorni?", "Sì, se ha senso. La versione due viene scopata separatamente dopo che la prima versione è online e le vere priorità sono visibili."],
      ["Gli utenti possono testare durante lo sprint?", "Sì. Se puoi introdurre utenti reali, il loro feedback può plasmare la settimana quattro e la roadmap."],
    ],
    featuredVideos: [
      { title: "Luc Thilliez parla della sua esperienza con Flowr Agency", meta: "Testimonianza video · Flowr Agency", youtubeId: "1DJwVajzCbo" },
      { title: "Nomadi digitali con Daniel Goebel e Loïc Moncany", meta: "Intervista · AIBC World", youtubeId: "rF_vLRAPfss" },
    ],
    moreVideos: [
      ["Testimonianza di Amin Lams", "Flowr Agency", "https://www.youtube.com/watch?v=_x4FIFXLMwE"],
      ["Intervista TVM Malta", "Visto nomade a Malta", "https://www.youtube.com/watch?v=aUAI-MXfwLM"],
      ["Malte, le nouvel eldorado des nomades digitaux", "Lavoro / intervista", "https://www.youtube.com/watch?v=EgFaogkqjZE"],
      ["Il coltellino svizzero di Malta", "What A Job", "https://www.youtube.com/watch?v=PXLZGw0Z1-s"],
      ["Da dipendente a proprietario di agenzia a Malta", "Marc Boulet Business", "https://www.youtube.com/watch?v=YJ-v5beLHig"],
      ["Una chiacchierata con un amico all'estero", "Far From Home", "https://www.youtube.com/watch?v=NpXw1Z_Ra_g"],
    ],
  },
};
