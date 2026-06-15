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
    cta: "Tell us what you want to validate",
    whatsapp: "Start a WhatsApp conversation",
    theme: "Switch color theme",
    closing: "Useful software starts with a useful question.",
    closingCta: "See how we can work together",
    tagline: "Validate the idea before building the whole thing",
  },
  fr: {
    home: "Accueil",
    resources: "Ressources",
    offers: "Offres",
    newsletter: "AI Caramba",
    about: "À propos",
    cta: "Présentez-nous votre idée à valider",
    whatsapp: "Démarrer une conversation WhatsApp",
    theme: "Changer le thème",
    closing: "Un logiciel utile commence par une question utile.",
    closingCta: "Découvrir comment travailler ensemble",
    tagline: "Valider l'idée avant de tout construire",
  },
  it: {
    home: "Home",
    resources: "Risorse",
    offers: "Offerte",
    newsletter: "AI Caramba",
    about: "Chi sono",
    cta: "Raccontaci cosa vuoi validare",
    whatsapp: "Avvia una conversazione WhatsApp",
    theme: "Cambia tema",
    closing: "Il software utile nasce da una domanda utile.",
    closingCta: "Scopri come possiamo lavorare insieme",
    tagline: "Validare l'idea prima di costruire tutto",
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
    title: "Useful thinking before useful software.",
    intro:
      "Frameworks, examples, and direct advice for turning a business workflow or product idea into something worth testing.",
    primary: "Explore the 30-day offer",
    primaryHref: "/offers",
    note: "No gated PDF library. Start with the question you need answered.",
    sections: [
      ["Validate before building", "The principles behind a focused prototype: one hypothesis, real users, and an honest go/no-go decision."],
      ["AI Caramba", "Practical updates on AI, automation, and the tools that deserve a place in your operating system.", "/newsletter"],
      ["See what ships", "A portfolio of products across real estate, lead generation, automotive, ecommerce, and AI.", "/#portfolio"],
    ],
  },
  offers: {
    code: "BUILD",
    eyebrow: "Ways to work together",
    title: "One core offer. Two focused ways to fix what already exists.",
    intro:
      "Lomon Ventures helps founders validate a new product, repair an AI-built one, or challenge the positioning before spending more.",
    primary: "Tell me what you want to build",
    primaryHref: "mailto:hello@lomonventures.com?subject=Tell%20me%20what%20you%20want%20to%20build",
    note: "I reply within 48 hours with an honest first assessment.",
    sections: [
      ["POC in 30 days · €5,000", "A working prototype, real-user feedback, and an evidence-based go/no-go decision. The core Lomon Ventures offer.", "/"],
      ["VibeDoctor", "You built it with AI. It almost works. I diagnose the product, fix the critical issues, and help you finish it."],
      ["RoastMySaaS", "A direct product and landing-page audit designed to expose weak positioning and conversion problems before ad spend."],
    ],
  },
  about: {
    code: "ABOUT",
    eyebrow: "Loïc Moncany · Founder-developer",
    title: "Most developers are paid to say yes. My job is to know when the answer should be no.",
    intro:
      "I spent 15+ years building for the web and six years running a digital agency in Malta. Now I build products and selectively help founders turn sharp market knowledge into useful software.",
    primary: "Tell me about the problem",
    primaryHref: "mailto:hello@lomonventures.com?subject=Tell%20me%20about%20the%20problem",
    note: "Direct work only. No account managers or handoffs.",
    sections: [
      ["Products, not feature lists", "The hardest part is rarely the code. It is deciding what deserves to exist in the first version."],
      ["Some worked. Some did not.", "Six shipped products taught me more about scope, demand, and timing than another decade of client presentations."],
      ["Something in between", "Not a full agency. Not a freelance pair of hands. A product partner who can challenge the idea and ship the code."],
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
    resources: { ...englishPages.resources, eyebrow: "Ressources", title: "Réfléchir utile avant de construire utile.", intro: "Des méthodes, exemples et conseils directs pour transformer un processus métier ou une idée produit en test concret.", primary: "Découvrir l'offre 30 jours", note: "Pas de bibliothèque de PDF cachée. Commencez par la question à résoudre.", sections: [["Valider avant de construire", "Les principes d'un prototype ciblé : une hypothèse, de vrais utilisateurs et une décision go/no-go honnête."], ["AI Caramba", "Des mises à jour pratiques sur l'IA, l'automatisation et les outils qui méritent leur place dans vos opérations.", "/fr/newsletter"], ["Voir ce qui est livré", "Un portfolio de produits dans l'immobilier, la génération de leads, l'automobile, l'e-commerce et l'IA.", "/fr/#portfolio"]] },
    offers: { ...englishPages.offers, eyebrow: "Travailler ensemble", title: "Une offre principale. Deux façons ciblées de réparer l'existant.", intro: "Lomon Ventures aide les fondateurs à valider un nouveau produit, réparer un produit construit avec l'IA ou challenger son positionnement.", primary: "Parlez-moi de votre projet", note: "Je réponds sous 48 heures avec un premier avis honnête.", sections: [["POC en 30 jours · 5 000 €", "Un prototype fonctionnel, des retours utilisateurs réels et une décision go/no-go argumentée. L'offre principale de Lomon Ventures.", "/fr"], ["VibeDoctor", "Vous l'avez construit avec l'IA. Il fonctionne presque. Je diagnostique le produit, corrige les problèmes critiques et vous aide à le terminer."], ["RoastMySaaS", "Un audit direct du produit et de la landing page pour exposer les faiblesses de positionnement et de conversion avant de dépenser en acquisition."]] },
    about: { ...englishPages.about, eyebrow: "Loïc Moncany · Fondateur-développeur", title: "La plupart des développeurs sont payés pour dire oui. Mon travail est de savoir quand dire non.", intro: "Après 15+ ans dans le web et six ans à diriger une agence digitale à Malte, je construis mes produits et accompagne certains fondateurs à transformer leur expertise métier en logiciel utile.", primary: "Parlez-moi du problème", note: "Travail direct uniquement. Aucun intermédiaire.", sections: [["Des produits, pas des listes de fonctionnalités", "La partie la plus difficile est rarement le code. C'est décider ce qui mérite d'exister dans la première version."], ["Certains ont fonctionné. D'autres non.", "Six produits lancés m'ont davantage appris sur le périmètre, la demande et le timing qu'une décennie de présentations clients."], ["Quelque chose entre les deux", "Ni une grande agence, ni une simple paire de mains freelance. Un partenaire produit capable de challenger l'idée et de livrer le code."]] },
  },
  it: {
    newsletter: { ...englishPages.newsletter, eyebrow: "La newsletter", title: "L'AI corre veloce. Tieni solo ciò che serve.", intro: "AI Caramba è la mia newsletter LinkedIn pratica sugli strumenti, i cambiamenti e le decisioni prodotto che meritano davvero attenzione.", primary: "Leggi AI Caramba su LinkedIn", note: "Pubblicata su LinkedIn. Nessuna nuova inbox da gestire.", sections: [["Segnali, non rumore", "Analisi brevi su cosa è cambiato, perché conta e cosa chi gestisce un'azienda può tranquillamente ignorare."], ["Nata dalla pratica", "Lezioni tratte dal lancio di prodotti, dai workflow AI testati e dall'automazione che aiuta davvero."], ["Per chi opera", "Scritta per chi gestisce aziende e prodotti, non per chi colleziona strumenti AI."]] },
    resources: { ...englishPages.resources, eyebrow: "Risorse", title: "Pensiero utile prima di software utile.", intro: "Framework, esempi e consigli diretti per trasformare un processo aziendale o un'idea prodotto in qualcosa che vale la pena testare.", primary: "Scopri l'offerta 30 giorni", note: "Nessuna libreria di PDF nascosta. Parti dalla domanda a cui devi rispondere.", sections: [["Valida prima di costruire", "I principi di un prototipo mirato: un'ipotesi, utenti reali e una decisione go/no-go onesta."], ["AI Caramba", "Aggiornamenti pratici su AI, automazione e strumenti che meritano un posto nelle tue operazioni.", "/it/newsletter"], ["Guarda cosa viene consegnato", "Un portfolio di prodotti in immobiliare, lead generation, automotive, ecommerce e AI.", "/it/#portfolio"]] },
    offers: { ...englishPages.offers, eyebrow: "Come lavorare insieme", title: "Un'offerta principale. Due modi mirati per sistemare ciò che esiste.", intro: "Lomon Ventures aiuta i founder a validare un nuovo prodotto, riparare un prodotto costruito con l'AI o metterne alla prova il posizionamento.", primary: "Raccontami cosa vuoi costruire", note: "Rispondo entro 48 ore con una prima valutazione onesta.", sections: [["POC in 30 giorni · €5.000", "Un prototipo funzionante, feedback da utenti reali e una decisione go/no-go basata su prove. L'offerta principale di Lomon Ventures.", "/it"], ["VibeDoctor", "L'hai costruito con l'AI. Funziona quasi. Diagnostico il prodotto, risolvo i problemi critici e ti aiuto a finirlo."], ["RoastMySaaS", "Un audit diretto del prodotto e della landing page per trovare problemi di posizionamento e conversione prima di spendere in pubblicità."]] },
    about: { ...englishPages.about, eyebrow: "Loïc Moncany · Founder-developer", title: "La maggior parte degli sviluppatori viene pagata per dire sì. Il mio lavoro è sapere quando dire no.", intro: "Dopo 15+ anni nel web e sei anni alla guida di un'agenzia digitale a Malta, costruisco prodotti e aiuto selettivamente i founder a trasformare una forte conoscenza del mercato in software utile.", primary: "Raccontami il problema", note: "Lavoro diretto. Nessun account manager o passaggio di consegne.", sections: [["Prodotti, non liste di funzionalità", "La parte più difficile raramente è il codice. È decidere cosa merita di esistere nella prima versione."], ["Alcuni hanno funzionato. Altri no.", "Sei prodotti lanciati mi hanno insegnato più su scope, domanda e timing di un altro decennio di presentazioni ai clienti."], ["Qualcosa nel mezzo", "Non una grande agenzia. Non un semplice freelance. Un partner di prodotto capace di mettere in discussione l'idea e scrivere il codice."]] },
  },
};

export function localizedPath(locale: SiteLocale, path = "/") {
  const normalized = path === "/" ? "" : path;
  return locale === "en" ? normalized || "/" : `/${locale}${normalized}`;
}
