import { motion } from "framer-motion";

interface ContactProps {
  email: string;
}

export default function Contact({ email }: ContactProps) {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-black/40 block mb-8"
        >
          Get in touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-12"
        >
          Have an idea?{" "}
          <span className="text-black/30">Let's talk.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${email}`}
            className="inline-block bg-black text-white text-sm font-medium tracking-[0.15em] uppercase px-10 py-4 hover:bg-black/80 transition-colors"
          >
            {email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
