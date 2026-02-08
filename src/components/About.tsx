import { motion } from "framer-motion";

interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-[4/5] overflow-hidden bg-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=1000&fit=crop&q=80"
              alt="Workspace"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-black/40 block mb-6"
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-8"
            >
              We identify gaps.{" "}
              <span className="text-black/30">Then we build.</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-px bg-black/30 mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-base text-black/50 leading-relaxed mb-6"
            >
              {about}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-base text-black/50 leading-relaxed"
            >
              Each product is designed to solve a real problem in an underserved market,
              from classic car valuations to AI-powered real estate tools.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
