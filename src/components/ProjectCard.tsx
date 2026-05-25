import { motion } from "framer-motion";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-colors hover:border-[#b86cff]"
    >
      <img src={project.image} alt={project.title} className="h-64 w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0" loading="lazy" />
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span className="mono rounded-full bg-[#b86cff]/15 px-3 py-1 text-[10px] uppercase text-[#d9b4ff]">{project.category}</span>
        </div>
        <p className="text-sm leading-relaxed text-white/50">{project.description}</p>
      </div>
    </motion.a>
  );
}
