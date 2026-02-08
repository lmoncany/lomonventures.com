import { motion } from "framer-motion";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-black/40 block mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Selected Work
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block h-px bg-black/10 flex-1 ml-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
