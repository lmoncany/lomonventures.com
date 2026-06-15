import { type FormEvent } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

const process = [
  {
    period: "Week 1",
    title: "Define the bet",
    body: "Reduce the idea to one testable hypothesis. Agree what success looks like, what must be built, and what can wait.",
    marker: "One clear hypothesis",
  },
  {
    period: "Weeks 2–3",
    title: "Build the test",
    body: "Create a functional prototype people can click, use, and react to. No slide deck. No pretend product.",
    marker: "Working prototype",
  },
  {
    period: "Week 4",
    title: "Collect evidence",
    body: "Put it in front of target users, document what happens, and make an evidence-based go/no-go decision.",
    marker: "Go / no-go",
  },
];

const deliverables = [
  ["Working prototype", "deployed, documented, and yours to keep"],
  ["User-test findings", "feedback, friction points, assumptions, and risks"],
  ["Go/no-go recommendation", "a direct decision supported by evidence"],
  ["Version-two build plan", "scope, timeline, and budget if the idea earns it"],
];

const validationQuestions = [
  ["Does it work?", "Can the core workflow solve the problem without the rest of the feature list?"],
  ["Does anyone want it?", "Will target users understand it, use it, and ask to keep using it?"],
  ["Is it worth building properly?", "Does the evidence justify the next investment of time and money?"],
];

const fit = [
  "You know the customer, workflow, or problem better than a generalist agency ever will",
  "You have a product idea or manual process that should become software",
  "You can introduce 3–5 target users during week four",
  "You want a useful first version, not a 40-page roadmap",
];

const notFit = [
  "You only have a vague idea with no target user",
  "You want every feature in version one",
  "You are looking for the cheapest development option",
];

const faqs = [
  ["Is this an MVP or a finished product?", "It is a focused, functional prototype built to test the riskiest part of the idea. It is real software, but deliberately not a feature-complete final product."],
  ["Who finds the test users?", "You provide access or introductions to 3–5 target users. Lomon Ventures structures the sessions, prepares the questions, and documents the findings."],
  ["What happens after 30 days?", "You receive a go/no-go recommendation. If the answer is go, the build plan explains the next scope, timeline, and realistic budget. There is no obligation to continue."],
  ["Do we own the prototype?", "Yes. The deployed prototype, source code, documentation, and findings are yours to keep."],
  ["What if the recommendation is no-go?", "That is a successful outcome when the evidence says the larger investment is not justified. You leave knowing why, before spending substantially more."],
  ["Can Lomon Ventures build version two?", "Potentially. A continuation is scoped separately after the validation sprint, once the evidence and priorities are clear."],
];

function Cta({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#brief" className={`poc-cta ${compact ? "poc-cta--compact" : ""}`}>
      <span>Tell us what you want to validate</span>
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
      `Problem or workflow:\n${form.get("problem")}`,
      "",
      `Target user:\n${form.get("user")}`,
      "",
      `How it works today:\n${form.get("today")}`,
      "",
      `Can reach 3-5 users: ${form.get("access")}`,
      "",
      `What would make the sprint worthwhile:\n${form.get("outcome")}`,
    ].join("\n");

    window.location.href = `mailto:hello@lomonventures.com?subject=${encodeURIComponent("Product validation brief")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="poc-brief-form" onSubmit={handleSubmit}>
      <div className="poc-form-row">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>What problem or workflow should become software?<textarea name="problem" rows={4} required /></label>
      <div className="poc-form-row">
        <label>Who experiences this problem?<textarea name="user" rows={3} required /></label>
        <label>How is it handled today?<textarea name="today" rows={3} required /></label>
      </div>
      <label>Can you introduce 3–5 target users during week four?
        <select name="access" required defaultValue="">
          <option value="" disabled>Select an answer</option>
          <option>Yes, directly</option>
          <option>Probably, with some outreach</option>
          <option>Not yet</option>
        </select>
      </label>
      <label>What would make this €5,000 sprint worthwhile?<textarea name="outcome" rows={3} required /></label>
      <button className="poc-cta" type="submit">
        <span>Send the brief</span>
        <Icon name="arrowRight" className="h-5 w-5" />
      </button>
      <p>Submitting opens a pre-filled email. No commitment, no payment, and no sales sequence.</p>
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
            <div className="poc-offer-chip"><span className="poc-offer-chip__dot" />€5,000 flat · 30 days · Prototype included</div>
            <h1>Validate your software idea<br /><span>before you build the whole thing.</span></h1>
            <p className="poc-hero__sub">In 30 days, you get a working prototype, feedback from real users, and an evidence-based go/no-go decision.</p>
            <div className="poc-hero__proof">
              {["One focused hypothesis", "A product users can test", "A decision backed by evidence"].map((item) => (
                <span key={item}><Icon name="check" className="h-4 w-4" />{item}</span>
              ))}
            </div>
            <div className="poc-hero__action">
              <Cta />
              <p>Complete a five-minute brief. Receive an honest first assessment within 48 hours.</p>
            </div>
            <div className="poc-hero__trust">
              <p>Built for operators who know the problem, but need proof before the full investment.</p>
              <div className="poc-hero__logos">
                {["Real estate", "Hospitality", "Automotive", "Lead generation", "AI workflows", "Internal tools"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="poc-section poc-case-section">
        <div className="poc-shell">
          <SectionLabel>Proof / A-Meego</SectionLabel>
          <article className="poc-case-study poc-case-study--primary">
            <div>
              <p className="poc-case-study__eyebrow">Bangkok real estate · Business workflow software</p>
              <h2>From Bangkok property expertise to <span>focused software.</span></h2>
              <p>A-Meego operates in a complex market: properties to rent and buy, new projects, BTS station searches, and matched recommendations. The useful software starts with that real operational knowledge, not with a generic feature list.</p>
              <a href="https://a-meego.com" target="_blank" rel="noreferrer">Explore a-meego.com <Icon name="external" className="h-4 w-4" /></a>
            </div>
            <div className="poc-case-study__artifact">
              <span>Business knowledge</span><strong>→</strong><span>Testable workflow</span><strong>→</strong><span>Useful software</span>
            </div>
          </article>
        </div>
      </section>

      <section className="poc-section poc-problem">
        <div className="poc-shell poc-split">
          <div>
            <SectionLabel>01 / The real problem</SectionLabel>
            <h2>You do not need more features.<br /><span>You need evidence.</span></h2>
          </div>
          <div className="poc-copy">
            <p>Ideas become expensive when assumptions quietly turn into requirements. No-code tools, AI builders, and freelancers can all produce screens. They do not automatically tell you whether the product deserves to exist.</p>
            <p>A focused validation sprint cuts the feature list, builds the riskiest workflow, and observes what target users actually do with it.</p>
            <p className="poc-copy__statement">The goal is not to launch more software. It is to make the next decision with evidence.</p>
          </div>
        </div>
        <div className="poc-shell poc-validation-grid">
          {validationQuestions.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section id="how-it-works" className="poc-section poc-process">
        <div className="poc-shell">
          <SectionLabel>02 / How it works</SectionLabel>
          <div className="poc-heading-row">
            <h2>One month. One hypothesis. <span>One answer.</span></h2>
            <p>A controlled process designed to answer whether the product is worth the next investment.</p>
          </div>
          <div className="poc-process__grid">
            {process.map((step, index) => (
              <article className="poc-process__card" key={step.title}>
                <div className="poc-process__number">0{index + 1}</div>
                <p>{step.period}</p><h3>{step.title}</h3><span>{step.marker}</span>
                <div className="poc-process__line" /><p className="poc-process__body">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="poc-deliverables">
            <div><p className="poc-kicker">What you receive</p><h3>Evidence, assets,<br />and a decision.</h3></div>
            <div>{deliverables.map(([title, body]) => <div className="poc-deliverable" key={title}><Icon name="check" className="h-5 w-5" /><p><strong>{title}</strong> — {body}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="poc-section poc-case-section">
        <div className="poc-shell">
          <SectionLabel>Proof / Mixologiq</SectionLabel>
          <article className="poc-case-study poc-case-study--secondary">
            <div>
              <p className="poc-case-study__eyebrow">Hospitality · Connected operations</p>
              <h2>When the product is physical, <span>the software still runs the operation.</span></h2>
              <p>Mixologiq combines precision cocktail dispensing with integrated software and a smart back office. The value is not only the machine: it is menu control, operational visibility, consistency, and a system designed to scale across venues.</p>
              <a href="https://mixologiq.com" target="_blank" rel="noreferrer">Explore mixologiq.com <Icon name="external" className="h-4 w-4" /></a>
            </div>
            <div className="poc-case-study__signals">
              {["Integrated software", "Smart back office", "Operational visibility", "Menu control"].map((item) => <span key={item}><Icon name="check" className="h-4 w-4" />{item}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section id="pricing" className="poc-section">
        <div className="poc-shell poc-pricing">
          <div>
            <SectionLabel>03 / Pricing</SectionLabel>
            <h2>Test the idea before it becomes a <span>€100,000 mistake.</span></h2>
            <p className="poc-pricing__lead">€5,000 flat. <span>30 days.</span></p>
          </div>
          <div className="poc-pricing__card">
            <p>No retainer. No hourly tracking. No surprise invoice.</p>
            <p>If the scope changes, the conversation happens before the work moves.</p>
            <p>A no-go recommendation is not a failed sprint. It is the result that protects the larger investment when the evidence does not support it.</p>
            <Cta />
          </div>
        </div>
      </section>

      <section className="poc-section poc-fit">
        <div className="poc-shell">
          <SectionLabel>04 / Fit</SectionLabel>
          <h2>This works when <span>the problem is already real.</span></h2>
          <div className="poc-fit__grid">
            <div className="poc-fit__yes">{fit.map((item) => <div key={item}><Icon name="check" className="h-5 w-5" /><p>{item}</p></div>)}</div>
            <div className="poc-fit__no"><p>Not a fit if:</p>{notFit.map((item) => <div key={item}><span>×</span><p>{item}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="poc-section poc-faq">
        <div className="poc-shell poc-split">
          <div><SectionLabel>05 / Common questions</SectionLabel><h2>Clear scope.<br /><span>Clear expectations.</span></h2></div>
          <div className="poc-faq__list">
            {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="brief" className="poc-section poc-brief">
        <div className="poc-shell poc-brief__grid">
          <div>
            <SectionLabel>Start here</SectionLabel>
            <h2>Tell us what you want <span>to validate.</span></h2>
            <p>Share the problem, the target user, and how the workflow works today. You will receive an honest first assessment within 48 hours, before any commitment.</p>
            <a href="mailto:hello@lomonventures.com">hello@lomonventures.com</a>
          </div>
          <BriefForm />
        </div>
      </section>
    </main>
  );
}
