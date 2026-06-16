import { useEffect, useState } from "react";
import MarketingPage from "./components/MarketingPage";
import PocHomepage from "./components/PocHomepage";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import type { MarketingPageKey, SiteLocale } from "./siteContent";

function getRoute() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const locale: SiteLocale = parts[0] === "fr" || parts[0] === "it" ? parts.shift() as SiteLocale : "en";
  const page = parts[0] as MarketingPageKey | undefined;
  return { locale, page: page && ["newsletter", "resources", "offers", "about"].includes(page) ? page : undefined };
}

function App() {
  const route = getRoute();
  const [theme, setTheme] = useState<"light" | "dark">(
    () => localStorage.getItem("lomon-theme") === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    document.documentElement.lang = route.locale;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("lomon-theme", theme);
    document.title = route.page
      ? `${route.page === "newsletter" ? "AI Caramba" : route.page[0].toUpperCase() + route.page.slice(1)} | Lomon Ventures`
      : "Ship your software product in 30 days | Lomon Ventures";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        route.page
          ? "Resources, offers, and practical product thinking from Lomon Ventures."
          : "Founder-led software studio for business owners with a workflow, idea, spreadsheet, or half-built prototype that needs to become a working product.",
      );
  }, [route.locale, route.page, theme]);

  function changeLocale(locale: SiteLocale) {
    const parts = window.location.pathname.split("/").filter(Boolean);
    if (parts[0] === "fr" || parts[0] === "it") parts.shift();
    window.location.href = locale === "en" ? `/${parts.join("/")}` : `/${locale}/${parts.join("/")}`;
  }

  return (
    <div className="poc-site">
      <SiteHeader
        locale={route.locale}
        theme={theme}
        currentPath={window.location.pathname}
        onLocaleChange={changeLocale}
        onThemeToggle={() => setTheme((current) => current === "light" ? "dark" : "light")}
      />
      {route.page ? <MarketingPage locale={route.locale} pageKey={route.page} /> : <PocHomepage />}
      <SiteFooter locale={route.locale} />
    </div>
  );
}

export default App;
