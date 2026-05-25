import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 hero-spotlight" />
      <div className="absolute inset-x-0 top-0 h-64 grid-stage opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 grid-stage opacity-35 [transform:perspective(520px)_rotateX(62deg)] [transform-origin:bottom] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mono mb-5 text-xs uppercase tracking-[0.1em] text-[#d9b4ff]"
        >
          Founder-led product studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mx-auto mb-5 max-w-6xl text-5xl font-extrabold leading-[1.05] text-white md:text-7xl lg:text-8xl"
        >
          Niche software <span className="text-[#b86cff]">MVPs</span> built in weeks.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-3xl text-base font-semibold leading-relaxed text-[#d9b4ff] md:text-lg"
        >
          For founders and operators who know a market, feel the pain, and need a focused product live fast.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.13 }}
          className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white/45"
        >
          I turn a specific workflow into a launch-ready MVP so you can validate with real users before burning months and money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 text-sm text-white/70 md:flex-row md:gap-10"
        >
          <span><strong className="text-white">5</strong> products shipped</span>
          <span><strong className="text-white">15+</strong> years in tech</span>
          <span><strong className="text-white">Founder-led</strong> builds</span>
        </motion.div>

        <div className="mt-9 w-full max-w-md">
          <a href="#contact" className="group flex items-center justify-between rounded-full bg-[#ead7ff] p-2 pl-7 text-base font-bold text-black shadow-[0_0_44px_rgba(184,108,255,0.35)] hover:bg-white transition-colors">
            Book a 20-min fit call
            <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-lg text-[#ead7ff] transition-transform group-hover:translate-x-1">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
