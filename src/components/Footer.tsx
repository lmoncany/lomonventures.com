import { getLocalizedPath, localeLabels, locales, type Locale, type SecondaryPageKey, type SiteContent } from "../i18n";
import BrandMark from "./BrandMark";
import Icon from "./Icon";

interface FooterProps {
  name: string;
  location: string;
  email: string;
  locale: Locale;
  page: "home" | SecondaryPageKey;
  copy: SiteContent;
}

export default function Footer({ name, location, email, locale, page, copy }: FooterProps) {
  const homePath = getLocalizedPath(locale);
  const sectionHref = (hash: string) => `${homePath === "/" ? "" : homePath}#${hash}`;

  return (
    <footer className="border-t border-[var(--subtle-strong)] py-10 md:py-14">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <a href={homePath} className="mb-4 inline-flex items-center gap-3 text-base font-bold text-main">
              <BrandMark />
              {name}
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">{copy.footer.tagline}</p>
            <a href={`mailto:${email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-soft">
              <Icon name="mail" className="h-4 w-4" />
              {email}
            </a>
          </div>

          <div>
            <h3 className="mono mb-4 text-xs uppercase text-accent-soft">{copy.footer.main}</h3>
            <div className="grid gap-3 text-sm text-muted">
              <a href={sectionHref("services")} className="hover:text-accent-soft">{copy.nav.services}</a>
              <a href={sectionHref("portfolio")} className="hover:text-accent-soft">{copy.nav.portfolio}</a>
              <a href={sectionHref("approach")} className="hover:text-accent-soft">{copy.nav.process}</a>
              <a href={sectionHref("contact")} className="hover:text-accent-soft">{copy.nav.contact}</a>
            </div>
          </div>

          <div>
            <h3 className="mono mb-4 text-xs uppercase text-accent-soft">{copy.footer.legal}</h3>
            <div className="grid gap-3 text-sm text-muted">
              <a href={getLocalizedPath(locale, "privacy")} className="hover:text-accent-soft">{copy.secondary.privacy.label}</a>
              <a href={getLocalizedPath(locale, "terms")} className="hover:text-accent-soft">{copy.secondary.terms.label}</a>
              <a href={getLocalizedPath(locale, "cookies")} className="hover:text-accent-soft">{copy.secondary.cookies.label}</a>
            </div>
          </div>

          <div>
            <h3 className="mono mb-4 text-xs uppercase text-accent-soft">{copy.footer.languages}</h3>
            <div className="flex flex-wrap gap-2 text-sm font-bold">
              {locales.map((targetLocale) => (
                <a
                  href={getLocalizedPath(targetLocale, page)}
                  key={targetLocale}
                  className={`rounded-full px-3 py-2 ${
                    targetLocale === locale ? "cta-primary" : "panel text-muted hover:text-accent-soft"
                  }`}
                >
                  {localeLabels[targetLocale]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[var(--subtle-strong)] pt-6 text-xs text-muted md:flex-row">
          <p>{name} · {location}</p>
          <p>© {new Date().getFullYear()} {copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
