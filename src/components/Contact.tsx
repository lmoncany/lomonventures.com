import type { SiteContent } from "../i18n";
import Icon from "./Icon";

interface ContactProps {
  email: string;
  copy: SiteContent["contact"];
}

export default function Contact({ email, copy }: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mono mb-3 text-xs uppercase text-accent">{copy.eyebrow}</p>
          <h2 className="mb-4 text-4xl font-bold text-main md:text-6xl">{copy.title}</h2>
          <p className="mx-auto max-w-2xl text-muted">
            {copy.body}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {copy.cards.map((card) => (
            <div
              className={`${card.featured ? "panel-accent" : "panel"} rounded-[2rem] p-7 md:p-8`}
              key={card.title}
            >
              <p className="mono mb-4 text-xs uppercase text-accent-soft">{card.eyebrow}</p>
              <h3 className="mb-3 text-2xl font-bold text-main">{card.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{card.body}</p>
              <ul className="mb-6 space-y-3 text-sm text-muted">
                {card.items.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(card.subject)}`}
                className={
                  card.featured
                    ? "cta-primary inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition-colors"
                    : "inline-flex items-center gap-2 rounded-full border border-[var(--subtle-strong)] px-5 py-3 font-bold text-main transition-colors hover:border-[var(--accent)]"
                }
              >
                {card.cta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
