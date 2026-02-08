import { motion, useScroll, useTransform } from "framer-motion";

interface NavigationProps {
  name: string;
  email: string;
}

export default function Navigation({ name, email }: NavigationProps) {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(255,255,255,${v})`),
        borderBottomColor: useTransform(borderOpacity, (v) => `rgba(0,0,0,${v})`),
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase"
        >
          {name}
        </motion.a>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#about" className="text-xs tracking-wider uppercase text-black/50 hover:text-black transition-colors">
            About
          </a>
          <a href="#portfolio" className="text-xs tracking-wider uppercase text-black/50 hover:text-black transition-colors">
            Portfolio
          </a>
          <a
            href={`mailto:${email}`}
            className="text-xs tracking-wider uppercase bg-black text-white px-5 py-2.5 hover:bg-black/80 transition-colors"
          >
            Contact
          </a>
        </motion.nav>
      </div>
    </motion.header>
  );
}
