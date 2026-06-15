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

const whatsappHref = `https://wa.me/?text=${encodeURIComponent("Hi, I have a product idea or business workflow I would like to validate.")}`;

export function SiteHeader({ locale, theme, currentPath, onLocaleChange, onThemeToggle }: SiteChromeProps) {
  const copy = chromeCopy[locale];

  return (
    <header className="poc-nav">
      <div className="poc-shell poc-nav__inner">
        <a href={localizedPath(locale)} className="poc-brand" aria-label="Lomon Ventures home">
          <span className="poc-brand__mark"><BrandMark /></span>
          <span>Lomon Ventures</span>
        </a>
        <nav className="poc-nav__links" aria-label="Main navigation">
          <a href={localizedPath(locale, "/resources")}>{copy.resources}</a>
          <a href={localizedPath(locale, "/offers")}>{copy.offers}</a>
          <a href={localizedPath(locale, "/newsletter")}>{copy.newsletter}</a>
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
            <Icon name="whatsapp" className="h-5 w-5" />
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
        <p>© 2026</p>
      </div>
    </footer>
  );
}
