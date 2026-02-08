import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Identify",
    description:
      "We research underserved markets and identify real problems that software can solve. No hypothetical users.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Lean, focused products built with modern tools. We ship fast and iterate based on real usage data.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Sustainable growth through product-led acquisition. Each product is designed to stand on its own.",
  },
];

export default function Approach() {
  return (
    <section className="py-28 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40 block mb-4">
            Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight max-w-xl">
            How we work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="border-t border-black/10 pt-8 pr-12 pb-12"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-black/25 block mb-8">
                {pillar.number}
              </span>
              <h3 className="text-2xl font-light tracking-tight mb-4">
                {pillar.title}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
