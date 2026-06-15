import { motion } from "framer-motion";
import { profile, projects } from "../data";
import BrandMark from "./BrandMark";
import Icon from "./Icon";

const briefHref = `mailto:${profile.email}?subject=${encodeURIComponent("Tell me what you want to build")}`;

const process = [
  {
    period: "Week 1",
    title: "Scope",
    body: "We kill every feature that doesn't test the core hypothesis. You leave with one page: what we're building, what success looks like, and what we're deliberately ignoring.",
    marker: "One hypothesis",
  },
  {
    period: "Weeks 2–3",
    title: "Build",
    body: "A functional prototype. Not a Figma mockup. Not a slide deck. Something you can click, share, and put in front of real users.",
    marker: "Working prototype",
  },
  {
    period: "Week 4",
    title: "Test & Decide",
    body: "Real feedback from real users. Structured. Documented. Then one deliverable: go/no-go with reasoning — and if go, a scoped build plan with real numbers.",
    marker: "Go / no-go",
  },
];

const deliverables = [
  ["Working prototype", "deployed, documented, yours to keep"],
  ["Go/no-go report", "user feedback, risks, honest recommendation"],
  ["Build plan", "scope, timeline, and budget for version two if it's worth building"],
];

const fit = [
  "You know the customer, the workflow, or the problem better than any agency ever will",
  "You have a product idea or a manual process that should become software",
  "You can put the prototype in front of 3–5 real users during week 4",
  "You want a working first version, not a 40-page roadmap",
];

const notFit = [
  "You only have a vague idea with no target user in mind",
  "You want every feature in version one",
  "You're looking for the cheapest option in the market",
];

const heroProof = [
  "Working prototype",
  "One point of contact",
  "Go / no-go in 30 days",
];

function Cta({ compact = false }: { compact?: boolean }) {
  return (
    <a href={briefHref} className={`poc-cta ${compact ? "poc-cta--compact" : ""}`}>
      <span>Tell me what you want to build</span>
      <Icon name="arrowRight" className="h-5 w-5" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="poc-kicker">{children}</p>;
}

export default function PocHomepage() {
  return (
    <>
      <main>
        <section className="poc-hero">
          <div className="poc-hero__grid" />
          <div className="poc-orb poc-orb--one" />
          <div className="poc-orb poc-orb--two" />
          <div className="poc-shell poc-hero__inner">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="poc-offer-chip">
                <span className="poc-offer-chip__dot" />
                One focused POC · €5,000 · 30 days
              </div>
              <h1>Your idea needs a real test.<br /><span>Not another AI subscription.</span></h1>
              <p className="poc-hero__sub">
                5 000€. 30 days. A working prototype in front of real users — or a clear reason not to build it.
              </p>
              <div className="poc-hero__proof">
                {heroProof.map((item) => (
                  <span key={item}>
                    <Icon name="check" className="h-4 w-4" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="poc-hero__action">
                <Cta />
                <p>You'll fill in a short brief. I'll reply within 48h.</p>
              </div>
              <div className="poc-hero__trust">
                <p><strong>6 products</strong> shipped by the same hands</p>
                <div className="poc-hero__logos">
                  {projects.map((project) => (
                    <a href={project.url} target="_blank" rel="noreferrer" key={project.id}>
                      {project.title}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="poc-section poc-problem">
          <div className="poc-shell poc-split">
            <div>
              <SectionLabel>01 / The real problem</SectionLabel>
              <h2>Most founders don't have a development problem.<br /><span>They have a validation problem.</span></h2>
            </div>
            <div className="poc-copy">
              <p>You've been sketching the idea for months. Maybe you've tried no-code tools, AI builders, or a freelancer who disappeared after the first invoice.</p>
              <p>You still don't have something real to put in front of users.</p>
              <p>The problem isn't the technology. It's that nobody around you has done this before — scoped a product honestly, cut the features that don't matter, and shipped something that actually tests whether the idea works.</p>
              <p className="poc-copy__statement">That's the only thing I do.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="poc-section poc-process">
          <div className="poc-shell">
            <SectionLabel>02 / How it works</SectionLabel>
            <div className="poc-heading-row">
              <h2>One month. One hypothesis. <span>One answer.</span></h2>
              <p>A controlled process designed to answer the only question that matters: should this product exist?</p>
            </div>
            <div className="poc-process__grid">
              {process.map((step, index) => (
                <article className="poc-process__card" key={step.title}>
                  <div className="poc-process__number">0{index + 1}</div>
                  <p>{step.period}</p>
                  <h3>{step.title}</h3>
                  <span>{step.marker}</span>
                  <div className="poc-process__line" />
                  <p className="poc-process__body">{step.body}</p>
                </article>
              ))}
            </div>
            <div className="poc-deliverables">
              <div>
                <p className="poc-kicker">What leaves the room</p>
                <h3>Three deliverables.<br />No theatre.</h3>
              </div>
              <div>
                {deliverables.map(([title, body]) => (
                  <div className="poc-deliverable" key={title}>
                    <Icon name="check" className="h-5 w-5" />
                    <p><strong>{title}</strong> — {body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="portfolio" className="poc-portfolio">
              <p>Selected products shipped by the same hands</p>
              <div className="poc-portfolio__rail">
                {projects.map((project) => (
                  <a href={project.url} target="_blank" rel="noreferrer" key={project.id}>
                    <span>{project.category}</span>
                    <strong>{project.title}</strong>
                    <Icon name="external" className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="poc-section">
          <div className="poc-shell poc-pricing">
            <div>
              <SectionLabel>03 / Pricing</SectionLabel>
              <h2>Straightforward pricing.</h2>
              <p className="poc-pricing__lead">€5 000 flat. <span>30 days.</span></p>
            </div>
            <div className="poc-pricing__card">
              <p>No retainer. No surprise invoices. No hourly tracking.</p>
              <p>If scope changes, we talk before anything moves.</p>
              <p>This is not the cheapest option in the market. It's the option where someone with 15 years of product and development experience tells you the truth about your idea before you spend ten times more finding out the hard way.</p>
              <Cta />
            </div>
          </div>
        </section>

        <section className="poc-section poc-fit">
          <div className="poc-shell">
            <SectionLabel>04 / Fit</SectionLabel>
            <h2>This is for you if...</h2>
            <div className="poc-fit__grid">
              <div className="poc-fit__yes">
                {fit.map((item) => <div key={item}><Icon name="check" className="h-5 w-5" /><p>{item}</p></div>)}
              </div>
              <div className="poc-fit__no">
                <p>Not for you if:</p>
                {notFit.map((item) => <div key={item}><span>×</span><p>{item}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="poc-section poc-founder">
          <div className="poc-shell poc-founder__grid">
            <div className="poc-founder__image">
              <img src="/images/founder.jpg" alt="Loïc Moncany, founder of Lomon Ventures" />
              <div><BrandMark className="h-8 w-8" /><span>Loïc Moncany<br /><small>Founder-developer</small></span></div>
            </div>
            <div>
              <SectionLabel>05 / Founder</SectionLabel>
              <h2>You work directly with me. <span>No account managers. No handoffs.</span></h2>
              <div className="poc-copy">
                <p>I'm Loïc Moncany. I spent 6 years running a digital agency in Malta building products that made other people rich. Then I stopped.</p>
                <p>I've shipped 6 products of my own across real estate, automotive, lead generation, and AI. Some worked. Some didn't. All of them taught me the same thing: the most valuable thing a developer can do is tell you what not to build.</p>
                <p className="poc-copy__statement">That's what this is.</p>
              </div>
              <div className="poc-founder__stats">
                <span><strong>15+</strong> years building for the web</span>
                <span><strong>6</strong> products shipped</span>
                <span><strong>Direct</strong> work, always</span>
              </div>
            </div>
          </div>
        </section>

        <section className="poc-testimonial">
          <div className="poc-shell">
            <SectionLabel>06 / Client perspective</SectionLabel>
            <blockquote>One real client quote belongs here — once it has been approved.</blockquote>
            <p>No fabricated praise. No anonymous “SaaS founder” testimonial.</p>
          </div>
        </section>

        <section id="contact" className="poc-final">
          <div className="poc-final__grid" />
          <div className="poc-shell poc-final__inner">
            <BrandMark className="h-16 w-16" />
            <h2>You keep running the business.<br /><span>I'll tell you if the product is worth building.</span></h2>
            <p>Fill in a short brief about your idea or workflow.<br />I'll reply within 48 hours with honest feedback — before any commitment.</p>
            <Cta />
            <a href={`mailto:${profile.email}`} className="poc-final__email">{profile.email}</a>
          </div>
        </section>
      </main>

    </>
  );
}
