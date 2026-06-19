import { type FormEvent } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { homepageCopy, type HomepageContent, type SiteLocale } from "../siteContent";

const contactEmail = "lomonventures@gmail.com";
const phoneDisplay = "+33 6 58 92 87 52";
const whatsappHref = `https://wa.me/33658928752?text=${encodeURIComponent("Hi, I have a product idea or business workflow I want to build.")}`;

const seenOn = [
  { name: "TVM Malta", src: "/logos/tvm.webp" },
  { name: "France.tv", src: "/logos/france-tv.svg" },
  { name: "M6", src: "/logos/m6.svg" },
  { name: "French Touch Malta", src: "/logos/french-touch-malta.png" },
  { name: "CoCoHub", src: "/logos/cocohub.svg" },
  { name: "Flowr Agency", src: "/logos/flowr-agency.png" },
];

const pressMentions = [
  ["Digital nomad economy", "https://www.youtube.com/watch?v=aUAI-MXfwLM"],
  ["Malta ecosystem", "https://www.youtube.com/watch?v=EgFaogkqjZE"],
  ["Remote work policy", "https://www.youtube.com/watch?v=PXLZGw0Z1-s"],
  ["TV / press interview", "https://www.youtube.com/watch?v=NpXw1Z_Ra_g"],
  ["Community building", "https://www.youtube.com/watch?v=YJ-v5beLHig"],
  ["Entrepreneurship in Malta", "https://www.youtube.com/watch?v=rF_vLRAPfss"],
];

const testimonials = [
  { quote: "Loic a cree mon CRM et mon site internet. Excellente collaboration. Les produits que Loic a développé pour nous fonctionne parfaitement.", name: "Thierry Martino", role: "Designer / Owner at SoulFetish · A-Meego client", youtubeId: null },
  { quote: "Loic is a secret weapon in web dev. It was complete in 2 days, polished with animations, and built with clean code.", name: "Teri Yu", role: "Product @ OpenAI · Founder, exited to Kajabi", youtubeId: null },
  { quote: "Très à l'écoute, produisant un travail de qualité, soigné et dans les délais impartis à chaque mission.", name: "Manuel Rohaut", role: "Client recommendation", youtubeId: null },
  { quote: "Luc Thilliez talks about his experience working with Flowr Agency.", name: "Luc Thilliez", role: "Client · Flowr Agency", youtubeId: "1DJwVajzCbo" },
  { quote: "Amin Lams shares his experience working with the agency.", name: "Amin Lams", role: "Client · Flowr Agency", youtubeId: "_x4FIFXLMwE" },
  { quote: "Digital nomads and entrepreneurship in Malta — interview with Daniel Goebel.", name: "Daniel Goebel", role: "Interview · AIBC World", youtubeId: "rF_vLRAPfss" },
];

const socialLinks = [
  ["YouTube", "https://www.youtube.com/@lmoncany", "yt"],
  ["LinkedIn", "https://www.linkedin.com/in/lmoncany/", "li"],
  ["X", "https://x.com/lmoncany", "x"],
  ["GitHub", "https://github.com/lmoncany", "gh"],
];

interface Props { locale: SiteLocale }

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="poc-kicker">{children}</p>;
}

function Cta({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <a href="#brief" className={`poc-cta ${compact ? "poc-cta--compact" : ""}`}>
      <span>{label}</span>
      <Icon name="arrowRight" className="h-5 w-5" />
    </a>
  );
}

function BriefForm({ c }: { c: HomepageContent }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const el = c.emailLabels;
    const body = [
      `${el.name}: ${form.get("name")}`,
      `${el.email}: ${form.get("email")}`,
      "",
      `${el.problem}\n${form.get("problem")}`,
      "",
      `${el.today}\n${form.get("today")}`,
      "",
      `${el.user}\n${form.get("user")}`,
      "",
      `${el.offer}: ${form.get("offer")}`,
      "",
      `${el.outcome}\n${form.get("outcome")}`,
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(c.emailSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="poc-brief-form" onSubmit={handleSubmit}>
      <div className="poc-form-row">
        <label>{c.formName}<input name="name" autoComplete="name" required /></label>
        <label>{c.formEmail}<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>{c.formProblem}<textarea name="problem" rows={4} required /></label>
      <div className="poc-form-row">
        <label>{c.formToday}<textarea name="today" rows={3} placeholder={c.formTodayPlaceholder} required /></label>
        <label>{c.formUser}<textarea name="user" rows={3} required /></label>
      </div>
      <label>{c.formOffer}
        <select name="offer" required defaultValue="">
          <option value="" disabled>{c.formOfferPlaceholder}</option>
          {c.formOfferOptions.map((opt) => <option key={opt}>{opt}</option>)}
        </select>
      </label>
      <label>{c.formOutcome}<textarea name="outcome" rows={3} required /></label>
      <button className="poc-cta" type="submit">
        <span>{c.formSubmit}</span>
        <Icon name="arrowRight" className="h-5 w-5" />
      </button>
      <p>{c.formNote}</p>
    </form>
  );
}

export default function PocHomepage({ locale }: Props) {
  const c = homepageCopy[locale];

  return (
    <main>
      <section className="poc-hero">
        <div className="poc-hero__grid" />
        <span className="poc-hero__bleed" aria-hidden="true">30</span>
        <div className="poc-shell poc-hero__inner">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="poc-offer-chip"><span className="poc-offer-chip__dot" />{c.chip}</div>
            <h1>
              {c.h1Lead.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
              ))}
              <br /><span>{c.h1Accent}</span>
            </h1>
            <p className="poc-hero__sub">{c.sub}<strong>{c.subHighlight}</strong>.</p>
            <div className="poc-hero__proof">
              {c.proof.map((item) => <span key={item}><Icon name="check" className="h-4 w-4" />{item}</span>)}
            </div>
            <div className="poc-hero__action">
              <Cta label={c.formSubmit} />
              <p>{c.actionNote}</p>
            </div>
            <div className="poc-hero__seen-marquee" aria-label={c.seenOnLabel}>
              <p>{c.seenOnLabel}</p>
              <div className="poc-marquee">
                <div className="poc-marquee__track">
                  {[...seenOn, ...seenOn, ...seenOn].map((item, i) => (
                    <span className="poc-marquee__item" key={`${item.name}-${i}`}>
                      <img src={item.src} alt={item.name} loading="lazy" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="poc-hero__trust">
              <p>{c.trustLabel}</p>
              <div className="poc-hero__logos">
                {c.trustLogos.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="poc-featured-video-section">
        <div className="poc-shell">
          <p className="poc-kicker">{c.videoKicker}</p>
          <div className="poc-featured-video__player">
            <div className="poc-featured-video__placeholder">
              <svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="40" r="40" fill="rgba(240,90,0,0.1)"/><circle cx="40" cy="40" r="30" fill="rgba(240,90,0,0.15)"/><path d="M33 27l22 13-22 13V27z" fill="#F05A00"/></svg>
              <p>{c.videoPlaceholder}</p>
              <span>{c.videoPlaceholderSub}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="poc-section poc-problem">
        <div className="poc-shell poc-split">
          <div>
            <SectionLabel>{c.s01kicker}</SectionLabel>
            <h2>{c.s01h2Lead} <span>{c.s01h2Accent}</span></h2>
          </div>
          <div className="poc-copy">
            {c.s01body.map((para, i) => <p key={i}>{para}</p>)}
            <p className="poc-copy__statement">{c.s01statement}</p>
          </div>
        </div>
      </section>

      <section className="poc-section poc-operating">
        <div className="poc-shell">
          <SectionLabel>{c.s02kicker}</SectionLabel>
          <div className="poc-heading-row">
            <h2>{c.s02h2Lead} <span>{c.s02h2Accent}</span></h2>
            <p>{c.s02sub}</p>
          </div>
          <div className="poc-operating__grid">
            {c.operatingPrinciples.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="poc-section poc-process">
        <div className="poc-shell">
          <SectionLabel>{c.s03kicker}</SectionLabel>
          <div className="poc-heading-row">
            <h2>{c.s03h2Lead} <span>{c.s03h2Accent}</span></h2>
            <p>{c.s03sub}</p>
          </div>
          <div className="poc-process__grid poc-process__grid--four">
            {c.process.map(([period, title, body, marker], index) => (
              <article className="poc-process__card" key={title}>
                <div className="poc-process__number">0{index + 1}</div>
                <p>{period}</p><h3>{title}</h3><span>{marker}</span>
                <div className="poc-process__line" /><p className="poc-process__body">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="poc-section poc-offers">
        <div className="poc-shell">
          <SectionLabel>{c.s04kicker}</SectionLabel>
          <div className="poc-heading-row">
            <h2>{c.s04h2Lead} <span>{c.s04h2Accent}</span></h2>
            <p>{c.s04sub}</p>
          </div>
          <div className="poc-offer-grid">
            {c.offers.map(([name, price, rhythm, body, points, note, featured]) => (
              <article id={name.toLowerCase()} className={`poc-offer-card ${featured ? "poc-offer-card--featured" : ""}`} key={name}>
                {featured ? <p className="poc-offer-card__tag">{c.offerFeaturedLabel}</p> : null}
                <h3>{name}</h3>
                <p className="poc-offer-card__price">{price}<span>{rhythm}</span></p>
                <p>{body}</p>
                <div>{points.map((point) => <span key={point}><Icon name="check" className="h-4 w-4" />{point}</span>)}</div>
                <small>{note}</small>
                <Cta label={c.formSubmit} compact />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="poc-section poc-compare">
        <div className="poc-shell">
          <SectionLabel>{c.s05kicker}</SectionLabel>
          <h2>{c.s05h2Lead} <span>{c.s05h2Accent}</span></h2>
          <div className="poc-comparison-table" role="table" aria-label="Offer comparison">
            <div role="row">{c.comparisonHeaders.map((h, i) => <strong key={i}>{h}</strong>)}</div>
            {c.comparison.map((row) => (
              <div role="row" key={row[0]}>
                {row.map((cell, index) => index === 0 ? <strong key={`${row[0]}-${index}`}>{cell}</strong> : <span key={`${row[0]}-${index}`}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="poc-section poc-case-section">
        <div className="poc-shell">
          <SectionLabel>{c.s06kicker}</SectionLabel>
          <article className="poc-case-study poc-case-study--primary">
            <div>
              <p className="poc-case-study__eyebrow">{c.case1eyebrow}</p>
              <h2>{c.case1h2Lead} <span>{c.case1h2Accent}</span></h2>
              <p>{c.case1body}</p>
              <a href="https://a-meego.com" target="_blank" rel="noreferrer">{c.case1cta} <Icon name="external" className="h-4 w-4" /></a>
            </div>
            <figure className="poc-case-study__shot"><img src="/images/a-meego-screenshot.png" alt="A-Meego website screenshot" /></figure>
          </article>
          <article className="poc-case-study poc-case-study--secondary">
            <div>
              <p className="poc-case-study__eyebrow">{c.case2eyebrow}</p>
              <h2>{c.case2h2Lead} <span>{c.case2h2Accent}</span></h2>
              <p>{c.case2body}</p>
              <a href="https://mixologiq.com" target="_blank" rel="noreferrer">{c.case2cta} <Icon name="external" className="h-4 w-4" /></a>
            </div>
            <figure className="poc-case-study__shot"><img src="/images/mixologiq-screenshot.png" alt="Mixologiq website screenshot" /></figure>
          </article>
        </div>
      </section>

      <section className="poc-section poc-fit">
        <div className="poc-shell">
          <SectionLabel>{c.s07kicker}</SectionLabel>
          <h2>{c.s07h2Lead} <span>{c.s07h2Accent}</span></h2>
          <div className="poc-fit__grid">
            <div className="poc-fit__yes">{c.fit.map((item) => <div key={item}><Icon name="check" className="h-5 w-5" /><p>{item}</p></div>)}</div>
            <div className="poc-fit__no"><p>{c.notFitLabel}</p>{c.notFit.map((item) => <div key={item}><span>×</span><p>{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="poc-section poc-testimonials">
        <div className="poc-shell">
          <SectionLabel>{c.s08kicker}</SectionLabel>
          <h2>{c.s08h2Lead} <span>{c.s08h2Accent}</span></h2>
          <div className="poc-testimonial-grid">
            {testimonials.map((t) => (
              <figure key={t.name} className={t.youtubeId ? "poc-testimonial-card--video" : ""}>
                {t.youtubeId ? (
                  <div className="poc-testimonial-video">
                    <iframe
                      title={t.name}
                      src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                <blockquote>"{t.quote}"</blockquote>
                <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="poc-section poc-video-proof">
        <div className="poc-shell">
          <SectionLabel>{c.s09kicker}</SectionLabel>
          <div className="poc-heading-row">
            <h2>{c.s09h2Lead} <span>{c.s09h2Accent}</span></h2>
            <p>{c.s09sub}</p>
          </div>
          <div className="poc-video-proof__featured">
            {c.featuredVideos.map((video) => (
              <article key={video.youtubeId}>
                <div className="poc-video-frame">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p>{video.meta}</p>
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
          <div className="poc-video-proof__more">
            {c.moreVideos.map(([title, meta, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={href}>
                <span>{meta}</span>
                <strong>{title}</strong>
                <Icon name="external" className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="poc-social-strip" aria-label="Social links">
            <p>{c.moreSignal}</p>
            {socialLinks.map(([label, href, id]) => (
              <a href={href} target="_blank" rel="noreferrer" key={href} className={`poc-social-${id}`}>{label}<Icon name="external" className="h-3 w-3" /></a>
            ))}
          </div>
        </div>
      </section>

      <section className="poc-section poc-press">
        <div className="poc-shell poc-split">
          <div>
            <SectionLabel>{c.s10kicker}</SectionLabel>
            <h2>{c.s10h2Lead} <span>{c.s10h2Accent}</span></h2>
            <p className="poc-press__lead">{c.s10press}</p>
          </div>
          <div className="poc-press__grid">
            {pressMentions.map(([title, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}><span>{title}</span><Icon name="external" className="h-4 w-4" /></a>)}
          </div>
        </div>
      </section>

      <section className="poc-section poc-faq">
        <div className="poc-shell poc-split">
          <div><SectionLabel>{c.s11kicker}</SectionLabel><h2>{c.s11h2Lead}<br /><span>{c.s11h2Accent}</span></h2></div>
          <div className="poc-faq__list">
            {c.faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="brief" className="poc-section poc-brief">
        <div className="poc-shell poc-brief__grid">
          <div>
            <SectionLabel>{c.briefKicker}</SectionLabel>
            <h2>{c.briefH2Lead} <span>{c.briefH2Accent}</span></h2>
            <p>{c.briefIntro}</p>
            <div className="poc-contact-strip">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              <a href={whatsappHref} target="_blank" rel="noreferrer">{c.whatsappLabel} {phoneDisplay}</a>
            </div>
          </div>
          <BriefForm c={c} />
        </div>
      </section>
    </main>
  );
}
