export type SiteLocale = "en" | "fr" | "it";
export type MarketingPageKey = "newsletter" | "resources" | "offers" | "about";

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
      ["Vibedoctor", "You built it with AI. It almost works. I diagnose the fragile parts, fix the critical issues, and help you finish your website or app."],
      ["RoastMySaas", "A blunt positioning and conversion audit for SaaS founders who need to know why the page is not converting."],
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
    offers: { ...englishPages.offers, eyebrow: "Travailler ensemble", title: "Commencer seul, lancer la demande ou faire construire le produit.", intro: "Lomon Ventures aide les dirigeants à transformer workflows, idées et prototypes IA incomplets en logiciels utiles, sans agence lourde ni freelance à gérer.", primary: "Parlez-moi de votre projet", note: "Travail direct. Scope clair. Vous possédez ce qui est livré.", sections: [["MVP en 30 jours", "Un sprint produit cadré pour livrer, déployer et transmettre une première version utile.", "/fr#build"], ["Vibedoctor", "Vous l'avez construit avec l'IA. Il fonctionne presque. Je diagnostique les parties fragiles, corrige les problèmes critiques et vous aide à terminer votre site ou app."], ["RoastMySaas", "Un audit direct de positionnement et de conversion pour comprendre pourquoi votre page ne transforme pas."]] },
    about: { ...englishPages.about, eyebrow: "Loïc Moncany · Fondateur-développeur", title: "La plupart des développeurs prennent des tickets. Mon travail est de protéger le produit.", intro: "Après 15+ ans dans le web et six ans à diriger une agence digitale à Malte, je construis mes produits et aide certains dirigeants à transformer leur expertise métier en logiciel utile.", primary: "Parlez-moi du problème", note: "Travail direct uniquement. Aucun intermédiaire.", sections: [["Des produits, pas des listes de fonctionnalités", "La partie difficile est rarement d'écrire plus de code. C'est décider ce qui mérite d'exister dans la première version."], ["Le contexte métier compte", "Un CRM immobilier, un système hospitality ou un workflow IA fonctionne seulement si le contexte métier fait partie du build."], ["Un partenaire, pas un prestataire", "Ni une grande agence, ni une simple paire de mains freelance. Un partenaire produit capable de challenger le scope et de livrer le code."]] },
  },
  it: {
    newsletter: { ...englishPages.newsletter, eyebrow: "La newsletter", title: "L'AI corre veloce. Tieni solo ciò che serve.", intro: "AI Caramba è la mia newsletter LinkedIn pratica sugli strumenti, i cambiamenti e le decisioni prodotto che meritano davvero attenzione.", primary: "Leggi AI Caramba su LinkedIn", note: "Pubblicata su LinkedIn. Nessuna nuova inbox da gestire.", sections: [["Segnali, non rumore", "Analisi brevi su cosa è cambiato, perché conta e cosa chi gestisce un'azienda può tranquillamente ignorare."], ["Nata dalla pratica", "Lezioni tratte dal lancio di prodotti, dai workflow AI testati e dall'automazione che aiuta davvero."], ["Per chi opera", "Scritta per chi gestisce aziende e prodotti, non per chi colleziona strumenti AI."]] },
    resources: { ...englishPages.resources, eyebrow: "Risorse", title: "Pensiero utile prima di software costoso.", intro: "Framework, esempi e consigli diretti per trasformare un processo aziendale, un foglio di calcolo o un prototipo AI in software utile.", primary: "Scopri le offerte", note: "Nessuna libreria di PDF nascosta. Parti dal collo di bottiglia da eliminare.", sections: [["Scope prima del codice", "Come ridurre un prodotto alla prima versione utile prima che il budget sparisca."], ["AI Caramba", "Aggiornamenti pratici su AI, automazione e strumenti che meritano un posto nelle tue operazioni.", "/it/newsletter"], ["Guarda cosa viene consegnato", "Prodotti reali in real estate, hospitality, lead generation, automotive e AI.", "/it/#portfolio"]] },
    offers: { ...englishPages.offers, eyebrow: "Come lavorare insieme", title: "Inizia da solo, lancia la domanda o fai costruire il prodotto.", intro: "Lomon Ventures aiuta business owner a trasformare workflow, idee e prototipi AI incompleti in software utile, senza agenzia pesante o freelance da gestire.", primary: "Raccontami cosa vuoi costruire", note: "Lavoro diretto. Scope chiaro. Il codice resta tuo.", sections: [["MVP in 30 giorni", "Uno sprint prodotto focalizzato per consegnare, deployare e passare una prima versione utile.", "/it#build"], ["Vibedoctor", "L'hai costruito con l'AI. Funziona quasi. Diagnostico le parti fragili, risolvo i problemi critici e ti aiuto a finire sito o app."], ["RoastMySaas", "Un audit diretto di posizionamento e conversione per capire perché la pagina non converte."]] },
    about: { ...englishPages.about, eyebrow: "Loïc Moncany · Founder-developer", title: "La maggior parte degli sviluppatori prende ticket. Il mio lavoro è proteggere il prodotto.", intro: "Dopo 15+ anni nel web e sei anni alla guida di un'agenzia digitale a Malta, costruisco prodotti e aiuto business owner a trasformare una forte conoscenza del mercato in software utile.", primary: "Raccontami il problema", note: "Lavoro diretto. Nessun account manager o passaggio di consegne.", sections: [["Prodotti, non liste di funzionalità", "La parte difficile raramente è scrivere più codice. È decidere cosa merita di esistere nella prima versione."], ["Il contesto operativo conta", "Un CRM immobiliare, un sistema hospitality o un workflow AI funziona solo se il contesto business entra nel build."], ["Un partner, non un vendor", "Non una grande agenzia. Non un semplice freelance. Un partner di prodotto capace di sfidare lo scope e spedire il codice."]] },
  },
};

export function localizedPath(locale: SiteLocale, path = "/") {
  const normalized = path === "/" ? "" : path;
  return locale === "en" ? normalized || "/" : `/${locale}${normalized}`;
}
