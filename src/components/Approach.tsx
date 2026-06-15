import type { SiteContent } from "../i18n";

interface ApproachProps {
  copy: SiteContent["approach"];
}

export default function Approach({ copy }: ApproachProps) {
  return (
    <section id="approach" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mono mb-3 text-xs uppercase text-accent">{copy.eyebrow}</p>
          <h2 className="mb-4 text-4xl font-bold text-main md:text-6xl">{copy.title}</h2>
          <p className="text-muted">{copy.body}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {copy.steps.map((step, index) => (
            <div key={step.title} className="process-card group">
              <p className="mb-4 text-center text-sm font-black text-[var(--accent-warm)]">{step.period}</p>
              <h3 className="mb-3 text-2xl font-bold text-main">{step.title}</h3>
              <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-muted">{step.description}</p>

              <div className={`process-visual process-visual--${(index % 4) + 1}`}>
                <span className="process-chip process-chip--dark">{step.marker}</span>
                <span className="process-chip process-chip--accent">{copy.deliverable}</span>
                <span className="process-cursor" />
                <span className="process-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
