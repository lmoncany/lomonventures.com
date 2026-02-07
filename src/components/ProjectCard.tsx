import { motion } from "framer-motion";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
          <span className="text-lg">{project.icon}</span>
        </div>
        <h3 className="font-semibold text-gray-900 text-base">
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Call to Action Button */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center font-medium py-3 px-4 rounded-lg transition-colors hover:opacity-90"
        style={{ backgroundColor: "#F97316", color: "white" }}
      >
        Visit Site
      </a>
    </motion.div>
  );
}
