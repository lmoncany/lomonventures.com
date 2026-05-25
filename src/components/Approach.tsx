import type { SiteContent } from "../i18n";
import Icon from "./Icon";

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
        <div className="grid gap-5 md:grid-cols-3">
          {copy.steps.map((step, index) => (
            <div key={step.title} className="panel rounded-[2rem] p-7 transition-colors hover:border-[var(--accent)]">
              <div className="cta-primary mb-5 grid h-12 w-12 place-items-center rounded-full text-lg font-black">
                {index + 1}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-main">{step.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{step.description}</p>
              <div className="panel-solid rounded-2xl p-4">
                <p className="mono mb-2 inline-flex items-center gap-2 text-[10px] uppercase text-accent-soft">
                  <Icon name="spark" className="h-3.5 w-3.5" />
                  {copy.deliverable}
                </p>
                <p className="text-xs leading-relaxed text-muted">{step.marker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
