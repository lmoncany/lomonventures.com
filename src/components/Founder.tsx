import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-28 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-4"
          >
            <div className="aspect-[3/4] overflow-hidden bg-black/5 max-w-sm mx-auto lg:mx-0">
              <img
                src="/images/founder.jpg"
                alt="Loïc Moncany, Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Quote */}
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-black/40 block mb-8"
            >
              A Word from the Founder
            </motion.span>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-tight text-black/80 mb-8">
                "I started Lomon Ventures with a simple belief: the best software 
                comes from deeply understanding a specific market. We don't chase 
                trends — we find industries that deserve better tools, then we build them."
              </p>
              <p className="text-base text-black/50 leading-relaxed max-w-2xl">
                After 15 years in tech and running a digital agency, I've seen what works 
                and what doesn't. Big platforms serve everyone poorly. Focused products 
                serve their users well. That's what we do.
              </p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4"
            >
              <div>
                <p className="font-medium text-black">Loïc Moncany</p>
                <p className="text-sm text-black/40">Founder & CEO</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-black/10 mx-4" />
              <a
                href="https://linkedin.com/in/loicmoncany"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Connect</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
