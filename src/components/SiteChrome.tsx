import BrandMark from "./BrandMark";
import Icon from "./Icon";
import {
  chromeCopy,
  localeFlags,
  localeNames,
  localizedPath,
  siteLocales,
  type SiteLocale,
} from "../siteContent";

interface SiteChromeProps {
  locale: SiteLocale;
  theme: "light" | "dark";
  currentPath: string;
  onLocaleChange: (locale: SiteLocale) => void;
  onThemeToggle: () => void;
}

const whatsappHref = `https://wa.me/33658928752?text=${encodeURIComponent("Hi, I have a product idea or business workflow I want to build.")}`;
const offerNavItems: Record<SiteLocale, [string, string, string][]> = {
  en: [
    ["MVP in 30 days", "#mvp-in-30-days", "Scope, build, handover"],
    ["Vibedoctor", "#vibedoctor", "We fix your AI website/app"],
    ["RoastMySaas", "#roastmysaas", "Positioning and conversion audit"],
  ],
  fr: [
    ["MVP en 30 jours", "#mvp-en-30-jours", "Cadrage, build, transmission"],
    ["Vibedoctor", "#vibedoctor", "Votre site/app IA corrigé"],
    ["RoastMySaas", "#roastmysaas", "Audit positionnement et conversion"],
  ],
  it: [
    ["MVP in 30 giorni", "#mvp-in-30-giorni", "Scope, build, consegna"],
    ["Vibedoctor", "#vibedoctor", "Fix per siti/app AI"],
    ["RoastMySaas", "#roastmysaas", "Audit posizionamento e conversione"],
  ],
};
const footerSocialLinks = [
  ["YouTube", "https://www.youtube.com/@lmoncany"],
  ["LinkedIn", "https://www.linkedin.com/in/lmoncany/"],
  ["X", "https://x.com/lmoncany"],
  ["GitHub", "https://github.com/lmoncany"],
];

function withHash(path: string, hash: string) {
  return `${path}${hash}`;
}

export function SiteHeader({ locale, theme, currentPath, onLocaleChange, onThemeToggle }: SiteChromeProps) {
  const copy = chromeCopy[locale];
  const homePath = localizedPath(locale);
  const offersPath = localizedPath(locale, "/offers");

  return (
    <header className="poc-nav">
      <div className="poc-shell poc-nav__inner">
        <a href={localizedPath(locale)} className="poc-brand" aria-label="Lomon Ventures home">
          <span className="poc-brand__mark"><BrandMark /></span>
          <span>Lomon Ventures</span>
        </a>
        <nav className="poc-nav__links" aria-label="Main navigation">
          <a href={withHash(homePath, "#how-it-works")}>{copy.how}</a>
          <div className="poc-nav-menu">
            <a href={offersPath} className="poc-nav-menu__trigger">
              {copy.offers}
              <Icon name="arrowRight" className="h-3 w-3" />
            </a>
            <div className="poc-nav-menu__panel">
              {offerNavItems[locale].map(([label, hash, description]) => (
                <a href={withHash(offersPath, hash)} key={label}><span>{label}</span><small>{description}</small></a>
              ))}
            </div>
          </div>
          <a href={localizedPath(locale, "/resources")}>{copy.resources}</a>
          <a href={localizedPath(locale, "/newsletter")}>{copy.newsletter}</a>
          <a href="https://aitribe.io" target="_blank" rel="noreferrer" className="poc-nav__tribe">
            <span className="poc-nav__tribe-dot" />
            {copy.tribe}
          </a>
        </nav>
        <div className="poc-nav__actions">
          <label className="poc-language" aria-label="Language">
            <span>{localeFlags[locale]}</span>
            <select value={locale} onChange={(event) => onLocaleChange(event.target.value as SiteLocale)}>
              {siteLocales.map((item) => <option value={item} key={item}>{localeNames[item]}</option>)}
            </select>
          </label>
          <button className="poc-icon-action" type="button" onClick={onThemeToggle} aria-label={copy.theme}>
            <Icon name={theme === "light" ? "moon" : "sun"} className="h-4 w-4" />
          </button>
          <a className="poc-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label={copy.whatsapp}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.15c-.23.64-1.36 1.22-1.86 1.29-.48.07-1.1.1-1.77-.11-.41-.13-.93-.3-1.61-.59-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03 1-2.34.23-.24.52-.3.7-.3.17 0 .35.002.5.01.17.007.39-.065.61.47.23.55.77 1.88.84 2.02.07.14.12.3.02.48-.09.19-.14.3-.28.46-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.17.28.73 1.2 1.57 1.94 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.17-.19.7-.82.89-1.1.18-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.2.54.32.07.11.07.65-.16 1.29z"/>
            </svg>
          </a>
          <a href={`${localizedPath(locale)}#brief`} className="poc-cta poc-cta--compact">
            <span>{copy.cta}</span>
            <Icon name="arrowRight" className="h-5 w-5" />
          </a>
        </div>
      </div>
      <span className="sr-only">{currentPath}</span>
    </header>
  );
}

export function SiteFooter({ locale }: Pick<SiteChromeProps, "locale">) {
  const copy = chromeCopy[locale];
  return (
    <footer className="poc-footer">
      <div className="poc-shell poc-footer__inner">
        <p><strong>Lomon Ventures</strong> · {copy.tagline}</p>
        <nav>
          <a href={localizedPath(locale, "/resources")}>{copy.resources}</a>
          <a href={localizedPath(locale, "/offers")}>{copy.offers}</a>
          <a href={localizedPath(locale, "/newsletter")}>{copy.newsletter}</a>
          <a href={localizedPath(locale, "/about")}>{copy.about}</a>
        </nav>
        <div className="poc-footer__social" aria-label="Social links">
          {footerSocialLinks.map(([label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={href}>{label}</a>
          ))}
        </div>
        <p>© 2026</p>
      </div>
    </footer>
  );
}
