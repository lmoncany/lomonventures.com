import { motion } from "framer-motion";
import type { JobOpening } from "../types";

interface CareersProps {
  jobs: JobOpening[];
  email: string;
}

export default function Careers({ jobs, email }: CareersProps) {
  return (
    <section id="careers" className="py-28 md:py-36 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/40 block mb-4">
            Careers
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Join the team
          </h2>
          <p className="text-base text-white/50 max-w-xl leading-relaxed">
            We're a small, focused team building products that matter. Remote-first, 
            async-friendly, and obsessed with shipping.
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.a
              key={job.id}
              href={`mailto:${email}?subject=Application: ${job.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="block border border-white/10 p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4 decoration-white/30">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="tracking-wider uppercase">{job.type}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="tracking-wider uppercase">{job.location}</span>
                  </div>
                </div>
                <span className="shrink-0 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 12L12 4M12 4H6M12 4V10" />
                  </svg>
                </span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                {job.description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm text-white/30 mt-12"
        >
          Don't see your role? We're always looking for exceptional people.{" "}
          <a
            href={`mailto:${email}?subject=General Application`}
            className="text-white/50 hover:text-white underline underline-offset-4 transition-colors"
          >
            Get in touch
          </a>
        </motion.p>
      </div>
    </section>
  );
}
