import type { Project } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono mb-3 text-xs uppercase text-[#b86cff]">Recent launches</p>
            <h2 className="max-w-3xl text-4xl font-bold text-white md:text-6xl">Built. Shipped. Validated.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            A few products from the Lomon portfolio across automotive, real estate, content, AI, and pet care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
