import type { SiteContent } from "../i18n";
import Icon from "./Icon";

interface AboutProps {
  copy: SiteContent["about"];
}

export default function About({ copy }: AboutProps) {
  return (
    <section id="fit" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mono mb-3 text-xs uppercase text-accent">{copy.eyebrow}</p>
          <h2 className="text-4xl font-bold text-main md:text-6xl">{copy.title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel-accent rounded-[2rem] p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-main">{copy.forTitle}</h3>
            <ul className="space-y-4 text-sm leading-relaxed text-muted">
              {copy.forItems.map((item) => (
                <li className="flex gap-3" key={item}>
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel rounded-[2rem] p-7 md:p-8">
            <h3 className="mb-5 text-2xl font-bold text-main">{copy.notTitle}</h3>
            <ul className="space-y-4 text-sm leading-relaxed text-soft">
              {copy.notItems.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="panel mt-8 rounded-[2rem] p-7 text-center text-sm leading-relaxed text-muted">
          {copy.note}
        </div>
      </div>
    </section>
  );
}
