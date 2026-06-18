import { motion } from "framer-motion";
import type { SiteContent } from "../i18n";
import Icon from "./Icon";

interface HeroProps {
  copy: SiteContent["hero"];
  email: string;
}

export default function Hero({ copy, email }: HeroProps) {
  const hasAccent = copy.title.includes(copy.accent);
  const titleLead = hasAccent ? copy.title.replace(copy.accent, "").trim() : copy.title;
  const callHref = `mailto:${email}?subject=${encodeURIComponent(copy.callSubject)}`;
  const whatsappHref = `https://wa.me/33658928752?text=${encodeURIComponent(copy.whatsappMessage)}`;

  return (
    <section id="services" className="relative min-h-screen overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 hero-spotlight" />
      <div className="absolute inset-x-0 top-0 h-64 grid-stage opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 grid-stage opacity-35 [transform:perspective(520px)_rotateX(62deg)] [transform-origin:bottom] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center pb-12 pt-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mono mb-5 text-xs uppercase tracking-[0.1em] text-accent-soft"
        >
          {copy.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mx-auto mb-4 max-w-6xl text-4xl font-extrabold leading-[1.08] text-main md:text-6xl lg:text-7xl"
        >
          {titleLead} {hasAccent ? <span className="text-accent">{copy.accent}</span> : null}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-4xl text-base font-semibold leading-relaxed text-accent-soft md:text-lg"
        >
          {copy.intro}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.13 }}
          className="mx-auto mt-3 max-w-4xl text-base leading-relaxed text-soft md:text-lg"
        >
          {copy.support}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="hero-badge-row mt-6"
        >
          {copy.badges.map((badge) => (
            <span className="hero-badge" key={badge}>
              <Icon name="check" className="h-4 w-4" />
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-7 flex flex-col items-center justify-center gap-4 text-sm text-muted md:flex-row md:gap-10"
        >
          {copy.proof.map((item) => (
            <span className="inline-flex items-center gap-2" key={`${item.value}-${item.label}`}>
              <Icon name="check" className="h-4 w-4 text-accent-soft" />
              <span><strong className="text-main">{item.value}</strong> {item.label}</span>
            </span>
          ))}
        </motion.div>

        <div className="mt-8 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={callHref} className="cta-primary hero-cta group inline-flex w-full items-center justify-between rounded-full p-2 pl-6 text-base font-bold transition-colors sm:w-auto sm:min-w-64">
            <span className="inline-flex items-center gap-2">
              <Icon name="phone" className="h-5 w-5" />
              {copy.cta}
            </span>
            <span className="cta-dot grid h-11 w-11 place-items-center rounded-full transition-transform group-hover:translate-x-1">
              <Icon name="arrowRight" className="h-5 w-5" />
            </span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-whatsapp grid h-16 w-16 place-items-center rounded-full transition-transform hover:scale-105"
            aria-label={copy.whatsappCta}
          >
            <Icon name="whatsapp" className="h-7 w-7" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 w-full max-w-5xl"
        >
          <p className="mb-5 text-center text-sm font-bold text-accent-soft">{copy.logoIntro}</p>
          <div className="logo-carousel" aria-label={copy.logoIntro}>
            <div className="logo-carousel__track">
              {[...copy.logos, ...copy.logos].map((logo, index) => (
                <span className="logo-carousel__item" key={`${logo}-${index}`}>{logo}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
