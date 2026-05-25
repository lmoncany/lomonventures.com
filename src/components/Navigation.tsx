import { getLocalizedPath, localeLabels, locales, type Locale, type SecondaryPageKey } from "../i18n";
import BrandMark from "./BrandMark";
import Icon from "./Icon";

interface NavigationProps {
  name: string;
  email: string;
  locale: Locale;
  page: "home" | SecondaryPageKey;
  copy: {
    services: string;
    portfolio: string;
    process: string;
    fit: string;
    contact: string;
    cta: string;
    light: string;
    dark: string;
    language: string;
  };
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navigation({ name, email, locale, page, copy, theme, onToggleTheme }: NavigationProps) {
  const homePath = getLocalizedPath(locale);
  const sectionHref = (hash: string) => `${homePath === "/" ? "" : homePath}#${hash}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="section-shell py-5 flex items-center justify-between">
        <a href={homePath} className="flex items-center gap-3 text-base font-bold text-main">
          <BrandMark />
          {name}
        </a>
        <nav className="nav-pill hidden md:flex items-center gap-8 rounded-full px-8 py-4 text-sm text-muted backdrop-blur">
          <a href={sectionHref("services")} className="hover:text-accent-soft">{copy.services}</a>
          <a href={sectionHref("portfolio")} className="hover:text-accent-soft">{copy.portfolio}</a>
          <a href={sectionHref("approach")} className="hover:text-accent-soft">{copy.process}</a>
          <a href={sectionHref("fit")} className="hover:text-accent-soft">{copy.fit}</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <div className="nav-pill flex items-center gap-1 rounded-full px-2 py-2 text-xs font-bold text-muted">
            <Icon name="globe" className="h-4 w-4" />
            {locales.map((targetLocale) => (
              <a
                href={getLocalizedPath(targetLocale, page)}
                key={targetLocale}
                className={`rounded-full px-2 py-1 transition-colors ${
                  targetLocale === locale ? "cta-primary" : "hover:text-accent-soft"
                }`}
                aria-label={`${copy.language}: ${localeLabels[targetLocale]}`}
              >
                {localeLabels[targetLocale]}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle grid h-11 w-11 place-items-center rounded-full"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} className="h-4 w-4" />
          </button>
          <a href={`mailto:${email}`} className="cta-primary inline-flex rounded-full px-6 py-3 text-sm font-bold transition-colors">
            {copy.cta}
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={getLocalizedPath(locale === "en" ? "fr" : locale === "fr" ? "it" : "en", page)}
            className="theme-toggle grid h-10 w-10 place-items-center rounded-full text-xs font-bold"
            aria-label={copy.language}
          >
            <Icon name="globe" className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle grid h-10 w-10 place-items-center rounded-full"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} className="h-4 w-4" />
          </button>
          <a className="grid h-10 w-10 place-items-center text-main" href="#contact" aria-label={copy.contact}>
            <Icon name="menu" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
