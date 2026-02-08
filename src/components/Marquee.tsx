import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "SaaS",
    "PropTech",
    "Automotive",
    "AI Products",
    "PetTech",
    "Niche Markets",
    "Digital Products",
    "Web Applications",
  ];

  const repeated = [...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black text-white py-5 overflow-hidden"
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-xs font-medium tracking-[0.25em] uppercase mx-10 shrink-0"
          >
            {item}
            <span className="ml-10 text-white/30">/</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
