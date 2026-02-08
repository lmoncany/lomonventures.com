import { motion } from "framer-motion";

interface FooterProps {
  name: string;
  location: string;
  email: string;
}

export default function Footer({ name, location, email }: FooterProps) {
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase">
              {name}
            </span>
            <span className="text-xs text-black/30">
              &copy; 2026 &mdash; {location}
            </span>
          </div>
          <a
            href={`mailto:${email}`}
            className="text-xs text-black/40 hover:text-black transition-colors"
          >
            {email}
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
