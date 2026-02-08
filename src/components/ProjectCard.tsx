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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-80px" }}
      className="group block"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-black/5 mb-5 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-black/30 block mb-1.5">
            {project.category}
          </span>
          <h3 className="text-lg font-medium text-black mb-1 group-hover:underline underline-offset-4 decoration-black/20">
            {project.title}
          </h3>
          <p className="text-sm text-black/50 leading-relaxed">
            {project.description}
          </p>
        </div>
        <span className="shrink-0 mt-5 text-black/20 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 12L12 4M12 4H6M12 4V10" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
