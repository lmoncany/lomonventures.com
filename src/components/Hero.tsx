import { motion } from "framer-motion";
import type { SiteContent } from "../i18n";
import Icon from "./Icon";

interface HeroProps {
  copy: SiteContent["hero"];
}

export default function Hero({ copy }: HeroProps) {
  const titleLead = copy.title.replace(copy.accent, "").trim();

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
          {titleLead} <span className="text-accent">{copy.accent}</span>
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

        <div className="mt-7 w-full max-w-md">
          <a href="#contact" className="cta-primary group flex items-center justify-between rounded-full p-2 pl-7 text-base font-bold transition-colors">
            {copy.cta}
            <span className="cta-dot grid h-12 w-12 place-items-center rounded-full transition-transform group-hover:translate-x-1">
              <Icon name="arrowRight" className="h-5 w-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
