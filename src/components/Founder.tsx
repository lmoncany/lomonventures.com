import type { SiteContent } from "../i18n";
import Icon from "./Icon";

interface FounderProps {
  copy: SiteContent["founder"];
  image: string;
}

export default function Founder({ copy, image }: FounderProps) {
  return (
    <section id="founder" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="founder-panel grid overflow-hidden rounded-[2.25rem] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[460px] overflow-hidden">
            <img
              src={image}
              alt={copy.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-black/45 p-5 text-white backdrop-blur">
              <p className="mono mb-2 text-[10px] uppercase tracking-[0.08em] text-white/60">
                {copy.cardLabel}
              </p>
              <p className="text-2xl font-black">{copy.name}</p>
              <p className="text-sm text-white/70">{copy.role}</p>
            </div>
          </div>

          <div className="relative p-7 md:p-10 lg:p-12">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-[var(--accent-alt)] opacity-25 blur-3xl" />
            <p className="mono mb-3 text-xs uppercase text-accent">{copy.eyebrow}</p>
            <h2 className="mb-5 max-w-2xl text-4xl font-extrabold leading-tight text-main md:text-5xl">
              {copy.title}
            </h2>
            <p className="mb-5 text-base leading-relaxed text-muted md:text-lg">{copy.body}</p>
            <p className="mb-8 text-base leading-relaxed text-soft">{copy.note}</p>

            <div className="grid gap-3 sm:grid-cols-3">
              {copy.highlights.map((item) => (
                <div className="panel-solid rounded-3xl p-4" key={item.label}>
                  <Icon name="spark" className="mb-3 h-5 w-5 text-accent-soft" />
                  <p className="text-2xl font-black text-main">{item.value}</p>
                  <p className="text-xs leading-relaxed text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
