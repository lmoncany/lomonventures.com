import { motion } from "framer-motion";
import { marketingPages, type MarketingPageKey, type SiteLocale } from "../siteContent";
import { chromeCopy, localizedPath } from "../siteContent";
import BrandMark from "./BrandMark";
import Icon from "./Icon";

interface MarketingPageProps {
  locale: SiteLocale;
  pageKey: MarketingPageKey;
}

export default function MarketingPage({ locale, pageKey }: MarketingPageProps) {
  const page = marketingPages[locale][pageKey];
  const chrome = chromeCopy[locale];
  const external = page.primaryHref.startsWith("http");

  return (
    <main className="marketing-page">
      <section className="marketing-hero">
        <div className="poc-hero__grid" />
        <div className="poc-orb poc-orb--one" />
        <div className="poc-shell marketing-hero__inner">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            <p className="poc-kicker">{page.eyebrow}</p>
            <p className="marketing-hero__code" aria-hidden="true">{page.code}</p>
            <h1>{page.title}</h1>
            <p className="marketing-hero__intro">{page.intro}</p>
            <a className="poc-cta" href={page.primaryHref} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <span>{page.primary}</span>
              <Icon name={external ? "external" : "arrowRight"} className="h-5 w-5" />
            </a>
            <p className="marketing-hero__note">{page.note}</p>
          </motion.div>
        </div>
      </section>
      <section className="marketing-sections">
        <div className="poc-shell marketing-sections__grid">
          {page.sections.map(([title, body, href], index) => (
            <article id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              {href && <a href={href}>Explore <Icon name="arrowRight" className="h-4 w-4" /></a>}
            </article>
          ))}
        </div>
      </section>
      <section className="marketing-close">
        <div className="poc-shell">
          <BrandMark className="h-12 w-12" />
          <h2>{chrome.closing}</h2>
          <a href={localizedPath(locale, "/offers")}>{chrome.closingCta} <Icon name="arrowRight" className="h-4 w-4" /></a>
        </div>
      </section>
    </main>
  );
}
