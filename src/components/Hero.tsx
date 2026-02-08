import { motion } from "framer-motion";

export default function Hero() {
  const words = ["Digital", "Products", "for", "Niche", "Markets"];

  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pb-20 md:pb-28">
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-black/40 mb-8"
          >
            Venture Studio / Italy
          </motion.p>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight mb-10">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                className={`inline-block ${i >= 3 ? "text-black/30" : "text-black"}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-black/20 mb-8"
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-base md:text-lg text-black/50 max-w-md leading-relaxed"
          >
            We build, launch, and scale software products that serve
            underserved markets.
          </motion.p>

          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors flex items-center gap-3 group"
          >
            <span>View Portfolio</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:translate-y-1 transition-transform duration-300"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
