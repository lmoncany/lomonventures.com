import { type FormEvent } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const ctaLabel = "Tell me what you want to build";

const process = [
  ["Week 1", "Scope", "Define the hypothesis, kill the wrong features, and agree what success looks like before touching code.", "One-page brief"],
  ["End of week 1", "Cut", "Everything that does not test the core idea gets removed. Expensive features wait for version two.", "First-version plan"],
  ["Weeks 2-3", "Build", "A working product, not a mockup. Something deployed, clickable, and ready to put in front of real users.", "Functional product"],
  ["Week 4", "Handover", "Full codebase, documentation, and a clear next-step plan based on what the product actually does.", "Codebase + roadmap"],
];

const offers = [
  ["Ship", "€99", "one-time", "The exact foundation used to build the Lomon portfolio, ready to clone and go.", ["Production-ready boilerplate", "Auth, database, and AI layer", "Vercel deployment ready", "Async Q&A within 24h", "Lifetime updates"], "For founders who can build and need the right foundation."],
  ["Launch", "€997", "one-time", "A landing page that converts, designed, built, and live in 7 days.", ["Copy, design, and development", "Built on your stack or mine", "Mobile, fast, deployed", "One revision round included"], "For founders who need leads before the product is ready."],
  ["Build", "€5,000", "30 days", "You bring the problem. The scope gets cut, built, shipped, and handed over.", ["Week 1: scope and cut", "Weeks 2-3: build", "Week 4: handover", "Full codebase documented", "No retainer or surprise invoice"], "For business owners who need the tool without babysitting a developer.", "featured"],
] as const;

const comparison = [
  ["Delivery", "Instant", "7 days", "30 days", "60-90 days", "3-6 months"],
  ["Cost", "€99", "€997", "€5,000", "€2k-€8k", "€15k+"],
  ["Code quality", "Yes", "Yes", "Yes", "Variable", "Usually"],
  ["You own the code", "Yes", "Yes", "Yes", "Depends", "Depends"],
  ["Direct senior access", "Yes", "Yes", "Yes", "Variable", "Rare"],
];

const fit = [
  "You know the customer, workflow, or problem better than any agency ever will",
  "You have a product idea or manual process that should become software",
  "You want someone who challenges the scope, not just executes it",
  "You need a working first version, not a 40-page roadmap",
];

const notFit = [
  "You only have a vague idea with no target user",
  "You want every feature in version one",
  "You are looking for the cheapest option in the market",
];

const testimonials = [
  ["Loic a cree mon CRM et mon site internet. Excellente collaboration. Les produits que Loic a développé pour nous fonctionne parfaitement.", "Thierry Martino", "Designer / Owner at SoulFetish · A-Meego client"],
  ["Loic is a secret weapon in web dev. It was complete in 2 days, polished with animations, and built with clean code.", "Teri Yu", "Product @ OpenAI · Founder, exited to Kajabi"],
  ["Très à l'écoute, produisant un travail de qualité, soigné et dans les délais impartis à chaque mission.", "Manuel Rohaut", "Client recommendation"],
];

const pressMentions = [
  ["Digital nomad economy", "https://www.youtube.com/watch?v=aUAI-MXfwLM"],
  ["Malta ecosystem", "https://www.youtube.com/watch?v=EgFaogkqjZE"],
  ["Remote work policy", "https://www.youtube.com/watch?v=PXLZGw0Z1-s"],
  ["TV / press interview", "https://www.youtube.com/watch?v=NpXw1Z_Ra_g"],
  ["Community building", "https://www.youtube.com/watch?v=YJ-v5beLHig"],
  ["Entrepreneurship in Malta", "https://www.youtube.com/watch?v=rF_vLRAPfss"],
];

const faqs = [
  ["Is this an MVP or a finished product?", "It is a working first version built around the workflow that matters. It is not a bloated final product with every future feature included."],
  ["What if I already started with AI or no-code?", "Bring the Claude conversation, prototype, spreadsheet, or no-code setup. The first job is to decide what is useful, what is fragile, and what needs rebuilding."],
  ["Who owns the code?", "You do. The product, codebase, documentation, and handover notes are yours."],
  ["Can this continue after 30 days?", "Yes, if it makes sense. Version two is scoped separately after the first version is live and the real priorities are visible."],
  ["Can users test it during the sprint?", "Yes. If you can introduce real users, their feedback can shape week four and the roadmap."],
];

function Cta({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#brief" className={`poc-cta ${compact ? "poc-cta--compact" : ""}`}>
      <span>{ctaLabel}</span>
      <Icon name="arrowRight" className="h-5 w-5" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="poc-kicker">{children}</p>;
}

function BriefForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      "",
      `What are you trying to build?\n${form.get("problem")}`,
      "",
      `What do you already have?\n${form.get("today")}`,
      "",
      `Who is it for?\n${form.get("user")}`,
      "",
      `Preferred offer: ${form.get("offer")}`,
      "",
      `What would make the next 30 days successful?\n${form.get("outcome")}`,
    ].join("\n");

    window.location.href = `mailto:hello@lomonventures.com?subject=${encodeURIComponent("Product build brief")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="poc-brief-form" onSubmit={handleSubmit}>
      <div className="poc-form-row">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>What are you trying to build?<textarea name="problem" rows={4} required /></label>
      <div className="poc-form-row">
        <label>What do you already have?<textarea name="today" rows={3} placeholder="Idea, spreadsheet, AI prototype, no-code tool, old CRM..." required /></label>
        <label>Who is it for?<textarea name="user" rows={3} required /></label>
      </div>
      <label>Which offer feels closest?
        <select name="offer" required defaultValue="">
          <option value="" disabled>Select an offer</option>
          <option>Ship · €99 boilerplate</option>
          <option>Launch · €997 landing page</option>
          <option>Build · €5,000 product sprint</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>What would make the next 30 days successful?<textarea name="outcome" rows={3} required /></label>
      <button className="poc-cta" type="submit">
        <span>Send the brief</span>
        <Icon name="arrowRight" className="h-5 w-5" />
      </button>
      <p>Submitting opens a pre-filled email. No commitment, no payment, no sales sequence.</p>
    </form>
  );
}

export default function PocHomepage() {
  return (
    <main>
      <section className="poc-hero">
        <div className="poc-hero__grid" />
        <div className="poc-orb poc-orb--one" />
        <div className="poc-orb poc-orb--two" />
        <div className="poc-shell poc-hero__inner">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="poc-offer-chip"><span className="poc-offer-chip__dot" />Founder-led software studio</div>
            <h1>You've been trying to build this for months.<br /><span>It's time to actually ship it.</span></h1>
            <p className="poc-hero__sub">Bring the idea, spreadsheet, half-built prototype, or Claude conversation that got you 60% there. The missing scope gets fixed, the product gets built, and a working version ships in 30 days for €5,000.</p>
            <div className="poc-hero__proof">
              {["6 products shipped", "15+ years building for the web", "Direct work, no account managers"].map((item) => <span key={item}><Icon name="check" className="h-4 w-4" />{item}</span>)}
            </div>
            <div className="poc-hero__action">
              <Cta />
              <p>Fill in a short brief. You'll receive an honest reply within 48 hours.</p>
            </div>
            <div className="poc-hero__trust">
              <p>Real products, real operators, real markets.</p>
              <div className="poc-hero__logos">
                {["Real estate", "Hospitality tech", "Automotive", "Lead generation", "AI workflows", "Internal tools"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="poc-section poc-problem">
        <div className="poc-shell poc-split">
          <div>
            <SectionLabel>01 / The real problem</SectionLabel>
            <h2>You're not stuck because <span>the idea is bad.</span></h2>
          </div>
          <div className="poc-copy">
            <p>You've tried ChatGPT. You've tried Claude. Maybe you got something running: a prototype that works on a good day, a no-code tool that got halfway, or a Notion setup held together with duct tape.</p>
            <p>But it is not something you would show a real customer. And every week it is not, the problem it was supposed to solve is still handled manually.</p>
            <p>The gap between “almost works” and “actually works” is not a technology problem. It is a scoping problem: knowing what to fix, what to cut, and what to build next, in the right order.</p>
            <p className="poc-copy__statement">That is what the next 30 days fixes.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="poc-section poc-process">
        <div className="poc-shell">
          <SectionLabel>02 / How it works</SectionLabel>
          <div className="poc-heading-row">
            <h2>From workflow to working product <span>in four steps.</span></h2>
            <p>The work starts with scope because bad scope is where most software projects become expensive.</p>
          </div>
          <div className="poc-process__grid poc-process__grid--four">
            {process.map(([period, title, body, marker], index) => (
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
          <SectionLabel>03 / Offers</SectionLabel>
          <div className="poc-heading-row">
            <h2>Two ways in. <span>One outcome.</span></h2>
            <p>Start yourself, launch the demand capture layer, or get the product built end to end.</p>
          </div>
          <div className="poc-offer-grid">
            {offers.map(([name, price, rhythm, body, points, note, featured]) => (
              <article id={name.toLowerCase()} className={`poc-offer-card ${featured ? "poc-offer-card--featured" : ""}`} key={name}>
                {featured ? <p className="poc-offer-card__tag">Most chosen</p> : null}
                <h3>{name}</h3>
                <p className="poc-offer-card__price">{price}<span>{rhythm}</span></p>
                <p>{body}</p>
                <div>{points.map((point) => <span key={point}><Icon name="check" className="h-4 w-4" />{point}</span>)}</div>
                <small>{note}</small>
                <Cta compact />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="poc-section poc-compare">
        <div className="poc-shell">
          <SectionLabel>04 / Honest comparison</SectionLabel>
          <h2>You have options. <span>Not all roads lead to a working product.</span></h2>
          <div className="poc-comparison-table" role="table" aria-label="Offer comparison">
            <div role="row"><strong></strong><strong>Ship</strong><strong>Launch</strong><strong>Build</strong><strong>Freelancer</strong><strong>Agency</strong></div>
            {comparison.map((row) => <div role="row" key={row[0]}>{row.map((cell, index) => index === 0 ? <strong key={cell}>{cell}</strong> : <span key={cell}>{cell}</span>)}</div>)}
          </div>
        </div>
      </section>

      <section id="portfolio" className="poc-section poc-case-section">
        <div className="poc-shell">
          <SectionLabel>05 / Portfolio proof</SectionLabel>
          <article className="poc-case-study poc-case-study--primary">
            <div>
              <p className="poc-case-study__eyebrow">A-Meego · Bangkok real estate</p>
              <h2>A CRM and website for a real estate agency <span>with a real workflow.</span></h2>
              <p>A-Meego needed more than a brochure site. The business runs on listings, rentals, sales, BTS station searches, and customer matching. The software had to support the way the agency actually works.</p>
              <a href="https://a-meego.com" target="_blank" rel="noreferrer">Explore a-meego.com <Icon name="external" className="h-4 w-4" /></a>
            </div>
            <figure className="poc-case-study__shot"><img src="/images/a-meego-screenshot.png" alt="A-Meego website screenshot" /></figure>
          </article>
          <article className="poc-case-study poc-case-study--secondary">
            <div>
              <p className="poc-case-study__eyebrow">Mixologiq · Hospitality operations</p>
              <h2>When the product is physical, <span>the software still runs the operation.</span></h2>
              <p>Mixologiq combines precision cocktail dispensing with integrated software and a smart back office. The value is not only the machine: it is consistency, menu control, and operational visibility at scale.</p>
              <a href="https://mixologiq.com" target="_blank" rel="noreferrer">Explore mixologiq.com <Icon name="external" className="h-4 w-4" /></a>
            </div>
            <figure className="poc-case-study__shot"><img src="/images/mixologiq-screenshot.png" alt="Mixologiq website screenshot" /></figure>
          </article>
        </div>
      </section>

      <section className="poc-section poc-fit">
        <div className="poc-shell">
          <SectionLabel>06 / Fit</SectionLabel>
          <h2>This is for you if <span>the problem is already real.</span></h2>
          <div className="poc-fit__grid">
            <div className="poc-fit__yes">{fit.map((item) => <div key={item}><Icon name="check" className="h-5 w-5" /><p>{item}</p></div>)}</div>
            <div className="poc-fit__no"><p>Not a fit if:</p>{notFit.map((item) => <div key={item}><span>×</span><p>{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="poc-section poc-testimonials">
        <div className="poc-shell">
          <SectionLabel>07 / What clients say</SectionLabel>
          <h2>Proof that the work <span>actually ships.</span></h2>
          <div className="poc-testimonial-grid">
            {testimonials.map(([quote, name, role]) => <figure key={name}><blockquote>“{quote}”</blockquote><figcaption><strong>{name}</strong><span>{role}</span></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="poc-section poc-press">
        <div className="poc-shell poc-split">
          <div>
            <SectionLabel>08 / Press and community</SectionLabel>
            <h2>Not just code. <span>Operating context.</span></h2>
            <p className="poc-press__lead">Before Lomon Ventures, the work included Flowr Agency, French Touch Malta, and community building in Malta's digital nomad ecosystem. That matters because business software is never only technical.</p>
          </div>
          <div className="poc-press__grid">
            {pressMentions.map(([title, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}><span>{title}</span><Icon name="external" className="h-4 w-4" /></a>)}
          </div>
        </div>
      </section>

      <section className="poc-section poc-faq">
        <div className="poc-shell poc-split">
          <div><SectionLabel>09 / Common questions</SectionLabel><h2>Clear scope.<br /><span>Clear expectations.</span></h2></div>
          <div className="poc-faq__list">
            {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="brief" className="poc-section poc-brief">
        <div className="poc-shell poc-brief__grid">
          <div>
            <SectionLabel>Start here</SectionLabel>
            <h2>You keep running the business. <span>The tool stops being the bottleneck.</span></h2>
            <p>Fill in a short brief about your idea, workflow, or half-built product. You will receive an honest assessment within 48 hours before any commitment.</p>
            <a href="mailto:hello@lomonventures.com">hello@lomonventures.com</a>
          </div>
          <BriefForm />
        </div>
      </section>
    </main>
  );
}
