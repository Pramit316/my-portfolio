import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { PROJECTS } from "./ProjectData";

function TechPill({ children }) {
  return (
    <span className="rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3 py-1 text-xs md:text-sm text-cyan-100/90 shadow-sm">
      {children}
    </span>
  );
}

export function ProjectCard({ project, flipped = false }) {
  return (
    <div
      className={`
        group relative mx-auto mt-16 w-full max-w-5xl 
        overflow-hidden rounded-3xl border border-cyan-500/20 
        bg-gradient-to-br from-[#0c1222]/95 via-[#090f1d]/90 to-[#040712]/80 
        p-6 md:p-8 shadow-xl shadow-cyan-950/40 
        backdrop-blur-xl transition 
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/25
      `}
    >
      {/* Glow accent on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-x-32 inset-y-0 bg-gradient-to-r from-cyan-400/15 via-blue-400/12 to-teal-500/15 blur-3xl" />
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
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-400/30 via-blue-400/15 to-teal-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="relative h-56 w-80 md:h-64 md:w-80 lg:h-72 lg:w-96 rounded-2xl object-cover object-center ring-1 ring-cyan-500/30 group-hover:ring-blue-400/50 transition-all duration-500"
                loading="lazy"
              />
            ) : (
              <div
                className={`relative flex h-56 w-80 md:h-64 md:w-80 lg:h-72 lg:w-96 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient ?? "from-cyan-800 to-blue-950"} ring-1 ring-cyan-500/30 group-hover:ring-blue-400/50 transition-all duration-500`}
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
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
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
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium !text-white shadow-md shadow-cyan-500/30 transition hover:from-cyan-400 hover:to-blue-500"
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
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/50 px-4 py-2 font-medium !text-slate-200 shadow-sm transition hover:border-cyan-400/60 hover:!text-cyan-200"
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
  const [isComputerOpen, setIsComputerOpen] = useState(false);
  const [selectedDesktopIcon, setSelectedDesktopIcon] = useState(null);
  const [selectedFolderIcon, setSelectedFolderIcon] = useState(null);

  /* Icons that appear INSIDE the My Computer window */
  const folderIcons = [
    {
      id: "my-stack",
      label: "My Stack",
      action: "open-stack",
      icon: (
        <svg width="44" height="38" viewBox="0 0 48 40" fill="none">
          <path d="M2 8 Q2 5 5 5 L18 5 L22 9 H43 Q46 9 46 12 V35 Q46 38 43 38 H5 Q2 38 2 35 Z" fill="#f0c040" stroke="#c8960a" strokeWidth="1.5" />
          <path d="M2 12 H46 V35 Q46 38 43 38 H5 Q2 38 2 35 Z" fill="#f5d060" stroke="#c8960a" strokeWidth="1" />
          <rect x="13" y="20" width="6" height="8" rx="0.5" fill="white" opacity="0.75" />
          <rect x="22" y="18" width="6" height="10" rx="0.5" fill="white" opacity="0.55" />
          <rect x="31" y="21" width="6" height="7" rx="0.5" fill="white" opacity="0.65" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pramit-bhattarai",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="6" width="36" height="36" rx="6" fill="#0077b5" stroke="#004b75" strokeWidth="2.5" />
          <path d="M7 7h34v10H7z" fill="white" opacity="0.1" />
          <rect x="13" y="18" width="6" height="18" fill="white" />
          <circle cx="16" cy="12" r="3.5" fill="white" />
          <path d="M22 18h6v3c1.5-2 3.5-3.5 6-3.5 5 0 7 3.5 7 8v10.5h-6V26.5c0-2.5-.5-4.5-3.5-4.5s-4 2-4 4.5V36h-6V18z" fill="white" />
        </svg>
      ),
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Pramit316",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" fill="#24292e" stroke="#1b1f23" strokeWidth="2.5" />
          <path d="M24 10c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.2 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.3-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.4 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.8 3.9-1.4 3.9-1.4.8 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.2.9 2.5v3.7c0 .4.3.8 1 .7C34 35.4 38 30.2 38 24c0-7.7-6.3-14-14-14z" fill="white" />
        </svg>
      ),
    },
    {
      id: "resume",
      label: "My Resume",
      url: "https://your-resume-url-here.com",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <path d="M10 6h20l8 8v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="white" stroke="#4a4940" strokeWidth="2.5" />
          <path d="M30 6v8h8" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
          <line x1="14" y1="18" x2="34" y2="18" stroke="#3b82f6" strokeWidth="2.5" />
          <line x1="14" y1="24" x2="34" y2="24" stroke="#555" strokeWidth="2" />
          <line x1="14" y1="30" x2="34" y2="30" stroke="#555" strokeWidth="2" />
          <line x1="14" y1="36" x2="26" y2="36" stroke="#555" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "youtube",
      label: "My YouTube",
      url: "https://www.youtube.com/@CodeWithBirkhe",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="10" width="40" height="28" rx="7" fill="#ff0000" stroke="#b30000" strokeWidth="2.5" />
          <path d="M5 11h38v8H5z" fill="white" opacity="0.15" />
          <path d="M20 18l11 6-11 6V18z" fill="white" />
        </svg>
      ),
    },
  ];

  const handleFolderIconDoubleClick = (icon) => {
    if (icon.action === "open-stack") {
      alert("Opening My Stack...");
    } else if (icon.url) {
      if (icon.url.includes("your-resume-url-here")) {
        alert("Opening Resume... (Note: Resume link not added yet.)");
      } else {
        window.open(icon.url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <section
      id="project"
      className="flex justify-center bg-gradient-to-b from-[#040712] via-[#090f24] to-[#040712] py-24"
    >
      <div className="w-full max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Work
          </p>
          <h2 className="mt-3 py-2 bg-gradient-to-r from-cyan-200 via-blue-200 to-teal-200 bg-clip-text text-4xl md:text-5xl font-semibold tracking-tight text-transparent leading-tight">
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

        {/* ─── Desktop area: My Computer icon ─────────────────────────── */}
        <div className="mt-16 flex flex-col items-start gap-6">
          {/* My Computer desktop icon */}
          <div
            onClick={() => setSelectedDesktopIcon("my-computer")}
            onDoubleClick={() => setIsComputerOpen(true)}
            className={`flex flex-col items-center gap-1 p-3 cursor-pointer rounded w-[80px] transition-all duration-100 select-none ${
              selectedDesktopIcon === "my-computer"
                ? "bg-cyan-500/15 outline outline-1 outline-dashed outline-cyan-400"
                : "hover:bg-cyan-500/10"
            }`}
            title="Double-click to open"
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="26" height="20" rx="3" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
              <rect x="9" y="11" width="20" height="14" fill="#0054e3" stroke="#222" strokeWidth="1" />
              <path d="M10 12L24 12L10 24Z" fill="white" opacity="0.15" />
              <path d="M16 28L14 34H24L22 28Z" fill="#bebaae" stroke="#4a4940" strokeWidth="2.5" />
              <rect x="34" y="12" width="8" height="22" rx="1" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
              <rect x="36" y="16" width="4" height="2" fill="#555" />
              <rect x="36" y="20" width="4" height="2" fill="#555" />
              <circle cx="38" cy="30" r="1.5" fill="#39ff14" />
            </svg>
            <span
              className={`text-[11px] text-center font-medium leading-tight px-1 rounded-sm ${
                selectedDesktopIcon === "my-computer"
                  ? "bg-cyan-600 text-white"
                  : "text-slate-200"
              }`}
              style={{ textShadow: selectedDesktopIcon === "my-computer" ? "none" : "1px 1px 3px rgba(0,0,0,0.9)" }}
            >
              My Computer
            </span>
          </div>

          {/* ─── Inline XP Explorer Window (inside the section) ──────── */}
          {isComputerOpen && (
            <div
              className="w-full max-w-xl bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden"
              style={{ minHeight: 280 }}
            >
              {/* Title Bar */}
              <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between text-white font-bold text-[11px] select-none">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="none">
                    <rect x="6" y="8" width="26" height="20" rx="3" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
                    <rect x="9" y="11" width="20" height="14" fill="#0054e3" stroke="#222" strokeWidth="1" />
                    <path d="M16 28L14 34H24L22 28Z" fill="#bebaae" stroke="#4a4940" strokeWidth="2.5" />
                    <rect x="34" y="12" width="8" height="22" rx="1" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
                    <rect x="36" y="16" width="4" height="2" fill="#555" />
                    <rect x="36" y="20" width="4" height="2" fill="#555" />
                    <circle cx="38" cy="30" r="1.5" fill="#39ff14" />
                  </svg>
                  <span>My Computer</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">_</div>
                  <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">□</div>
                  <button
                    onClick={() => { setIsComputerOpen(false); setSelectedFolderIcon(null); }}
                    className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white cursor-pointer hover:brightness-110"
                  >X</button>
                </div>
              </div>

              {/* Menu bar */}
              <div className="flex items-center gap-3 px-2 py-0.5 border-b border-white text-[10px] text-gray-700 bg-[#ece9d8]">
                <span className="cursor-default hover:underline">File</span>
                <span className="cursor-default hover:underline">Edit</span>
                <span className="cursor-default hover:underline">View</span>
                <span className="cursor-default hover:underline">Favorites</span>
                <span className="cursor-default hover:underline">Help</span>
              </div>

              {/* Address bar */}
              <div className="flex items-center gap-2 px-2 py-1 bg-[#ece9d8] border-b border-[#d2cfc2]">
                <span className="text-[10px] text-gray-600 font-sans">Address</span>
                <div className="flex-1 bg-white border border-[#7f9db9] px-2 py-0.5 text-[10px] text-gray-800 font-mono">My Computer</div>
              </div>

              {/* Icon grid */}
              <div className="flex-1 bg-white p-4">
                <div className="flex flex-wrap gap-6 p-2">
                  {folderIcons.map((icon) => {
                    const isSelected = selectedFolderIcon === icon.id;
                    return (
                      <div
                        key={icon.id}
                        onClick={() => setSelectedFolderIcon(icon.id)}
                        onDoubleClick={() => handleFolderIconDoubleClick(icon)}
                        className={`flex flex-col items-center gap-1 p-2 cursor-pointer rounded w-[72px] transition-all duration-100 ${
                          isSelected
                            ? "bg-[#0b61e2]/20 outline outline-1 outline-dashed outline-[#0b61e2]"
                            : "hover:bg-[#cce4ff]/60"
                        }`}
                        title="Double-click to open"
                      >
                        {icon.icon}
                        <span
                          className={`text-[11px] text-center leading-tight font-sans break-words w-full ${
                            isSelected ? "bg-[#0b61e2] text-white px-0.5 rounded-sm" : "text-slate-800"
                          }`}
                        >
                          {icon.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status bar */}
              <div className="bg-[#ece9d8] border-t border-[#d2cfc2] px-2 py-0.5 text-[10px] text-gray-500 font-sans">
                {folderIcons.length} object(s)
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
