import { motion } from "framer-motion";
import type { Project } from "../types";
import Icon from "./Icon";

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
      className="panel group overflow-hidden rounded-[2rem] transition-colors hover:border-[var(--accent)]"
    >
      <img src={project.image} alt={project.title} className="h-64 w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0" loading="lazy" />
      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold text-main">{project.title}</h3>
          <span className="mono inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase text-accent-soft" style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}>
            {project.category}
            <Icon name="external" className="h-3 w-3" />
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
    </motion.a>
  );
}
