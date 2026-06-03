import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { PROJECTS } from "./ProjectData";

function TechPill({ children }) {
  return (
    <span className="rounded-full border border-violet-500/30 bg-violet-950/50 px-3 py-1 text-xs md:text-sm text-violet-100/90 shadow-sm">
      {children}
    </span>
  );
}

export function ProjectCard({ project, flipped = false }) {
  return (
    <div
      className={`
        group relative mx-auto mt-16 w-full max-w-5xl 
        overflow-hidden rounded-3xl border border-violet-500/20 
        bg-gradient-to-br from-[#12121c]/95 via-[#0f0f18]/90 to-[#0a0a12]/80 
        p-6 md:p-8 shadow-xl shadow-violet-950/40 
        backdrop-blur-xl transition 
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/25
      `}
    >
      {/* Glow accent on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-x-32 inset-y-0 bg-gradient-to-r from-violet-400/15 via-cyan-400/12 to-fuchsia-500/15 blur-3xl" />
      </div>

      <div
        className={`
          relative flex flex-col items-center gap-8 
          text-center md:text-left
          xl:flex-row 
          ${flipped ? "xl:flex-row-reverse" : ""}
        `}
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-violet-400/30 via-cyan-400/15 to-fuchsia-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="relative h-56 w-80 md:h-64 md:w-80 lg:h-72 lg:w-96 rounded-2xl object-cover object-center ring-1 ring-violet-500/30 group-hover:ring-cyan-400/50 transition-all duration-500"
                loading="lazy"
              />
            ) : (
              <div
                className={`relative flex h-56 w-80 md:h-64 md:w-80 lg:h-72 lg:w-96 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient ?? "from-violet-800 to-indigo-950"} ring-1 ring-violet-500/30 group-hover:ring-cyan-400/50 transition-all duration-500`}
              >
                <span className="px-6 text-center text-2xl font-semibold text-white/90 md:text-3xl">
                  {project.title}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-2xl space-y-4 md:px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-950/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>Featured Project</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-slate-50 tracking-tight">
            {project.title}
          </h3>

          <p className="text-slate-300/90 text-md md:text-lg leading-relaxed text-justify">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
            {project.tech.map((t) => (
              <TechPill key={t}>{t}</TechPill>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3 text-base">
            {/* Primary: Live Demo */}
            {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-400 to-fuchsia-500 px-4 py-2 font-medium text-white shadow-md shadow-violet-500/40 transition hover:from-violet-300 hover:to-fuchsia-400"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt className="text-lg" />
              <span>Live Demo</span>
            </a>
            )}

            {/* Secondary: GitHub (if exists and not Quick Fare report-only) */}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-950/50 px-4 py-2 font-medium text-slate-200 shadow-sm transition hover:border-cyan-400/60 hover:text-cyan-200"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
            )}

            {/* Special: Report button for Quick Fare */}
            {project.title === "Quick Fare" && (
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-400/70 bg-amber-400/10 px-4 py-2 font-medium text-amber-200 shadow-sm transition hover:bg-amber-400/20"
                target="_blank"
                rel="noreferrer"
              >
                <BiSolidReport className="text-xl" />
                <span>Project Report</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const MyProjects = () => {
  return (
    <section
      id="project"
      className="flex justify-center bg-gradient-to-b from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12] py-24"
    >
      <div className="w-full max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Work
          </p>
          <h2 className="mt-3 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl md:text-5xl font-semibold tracking-tight text-transparent">
            Featured Projects
          </h2>
          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of things I have been building recently – from full-stack
            applications to mobile experiences and interactive web interfaces.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
