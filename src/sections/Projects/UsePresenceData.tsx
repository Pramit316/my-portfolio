import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "./ProjectData";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaMinus,
  FaExpandAlt,
  FaPowerOff,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { FaComputer, FaFlutter } from "react-icons/fa6";
import { SiSpringboot, SiAngular } from "react-icons/si";
import {
  FcFolder,
  FcOpenedFolder,
  FcGlobe,
  FcSettings,
  FcDocument
} from "react-icons/fc";

/* ─── My Stack (System Properties) content ─────────────────────────── */
function MyStackWindow({ onClose }) {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="absolute inset-0 z-[200] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="relative bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden text-[#333333] text-left"
        style={{ width: "min(480px, 94%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* XP Title Bar */}
        <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between text-white font-bold text-[11px] md:text-xs select-none">
          <div className="flex items-center gap-1.5">
            <FaComputer size={13} className="text-white" />
            <span>My Stack — System Properties</span>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">_</div>
            <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">□</div>
            <button
              onClick={onClose}
              className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white cursor-pointer hover:brightness-110"
            >X</button>
          </div>
        </div>

        {/* XP Tabs */}
        <div className="xp-tab-strip mt-2">
          {["general", "mobile", "backend", "frontend"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`xp-tab ${activeTab === tab ? "xp-tab-active" : ""}`}
              style={{ outline: "none" }}
            >
              {tab === "general" ? "General" : tab === "mobile" ? "Mobile Stack" : tab === "backend" ? "Backend Stack" : "Frontend Stack"}
            </button>
          ))}
        </div>

        {/* Dialog Body */}
        <div className="bg-[#ece9d8] border-t border-white p-4 flex flex-col gap-4 flex-1 shadow-[inset_1px_1px_0_#fff]">
          {activeTab === "general" && (
            <div className="flex flex-col sm:flex-row gap-6 p-2 min-h-[200px]">
              <div className="flex flex-col items-center justify-start gap-2 sm:w-1/3">
                <FaComputer className="text-[70px] text-[#2c5fbf] drop-shadow-md" />
                <span className="text-[10px] text-gray-500 font-mono text-center">System Device 01</span>
              </div>
              <div className="flex-1 flex flex-col gap-4 text-xs">
                <div>
                  <h4 className="font-bold text-[#000]">System:</h4>
                  <p className="pl-4 text-gray-700 font-sans">Pramit Professional</p>
                  <p className="pl-4 text-gray-700 font-sans">Version 2026</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#000]">Registered to:</h4>
                  <p className="pl-4 text-gray-700 font-sans">Pramit316 / Developer</p>
                  <p className="pl-4 text-gray-700 font-sans">Full-Stack Edition</p>
                </div>
                <div className="border-t border-[#d2cfc2] pt-3">
                  <h4 className="font-bold text-[#000]">Computer:</h4>
                  <p className="pl-4 text-gray-700 font-sans">AMD Ryzen Processor</p>
                  <p className="pl-4 text-gray-700 font-sans">16.0 GB RAM</p>
                  <p className="pl-4 text-gray-700 font-sans">System Speed: High</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="flex flex-col gap-3 min-h-[200px]">
              <fieldset className="xp-fieldset flex-1">
                <legend className="xp-legend">Mobile Engineering Specs</legend>
                <div className="flex items-start gap-4 p-1">
                  <FaFlutter className="text-5xl text-sky-500 shrink-0 drop-shadow-sm mt-1" />
                  <div className="text-xs flex flex-col gap-2">
                    <p className="font-bold text-slate-800 text-sm">Flutter &amp; Dart Ecosystem</p>
                    <p className="text-gray-700 font-sans">Expertise in building high-performance, beautiful cross-platform mobile apps for Android and iOS using Flutter.</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["Firebase", "State Management", "Native Bridging"].map((t) => (
                        <span key={t} className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          )}

          {activeTab === "backend" && (
            <div className="flex flex-col gap-3 min-h-[200px]">
              <fieldset className="xp-fieldset flex-1">
                <legend className="xp-legend">Server &amp; API Engineering Specs</legend>
                <div className="flex items-start gap-4 p-1">
                  <SiSpringboot className="text-5xl text-emerald-500 shrink-0 drop-shadow-sm mt-1" />
                  <div className="text-xs flex flex-col gap-2">
                    <p className="font-bold text-slate-800 text-sm">Java Spring Boot</p>
                    <p className="text-gray-700 font-sans">Designing secure, scalable microservices, RESTful APIs, security configurations, and database integrations.</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["Java 17/21", "PostgreSQL", "Spring Security"].map((t) => (
                        <span key={t} className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          )}

          {activeTab === "frontend" && (
            <div className="flex flex-col gap-3 min-h-[200px]">
              <fieldset className="xp-fieldset flex-1">
                <legend className="xp-legend">Web Application Specs</legend>
                <div className="flex items-start gap-4 p-1">
                  <SiAngular className="text-5xl text-rose-500 shrink-0 drop-shadow-sm mt-1" />
                  <div className="text-xs flex flex-col gap-2">
                    <p className="font-bold text-slate-800 text-sm">Angular &amp; Modern Web</p>
                    <p className="text-gray-700 font-sans">Developing responsive corporate web applications with component architectures, RxJS reactive patterns, and strict typing.</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["TypeScript", "RxJS", "Tailwind / CSS"].map((t) => (
                        <span key={t} className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          )}

          <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-[#d2cfc2]">
            <button type="button" className="xp-btn px-4 py-1.5 text-xs font-semibold select-none min-w-[75px]" style={{ padding: "4px 12px" }} onClick={() => alert("All systems operational!")}>OK</button>
            <button type="button" className="xp-btn px-4 py-1.5 text-xs font-semibold select-none min-w-[75px]" style={{ padding: "4px 12px" }} onClick={onClose}>Cancel</button>
            <button type="button" className="xp-btn px-4 py-1.5 text-xs text-gray-400 font-semibold select-none min-w-[75px]" style={{ padding: "4px 12px" }} disabled>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UsePresenceData() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMonitorOn, setIsMonitorOn] = useState(true);
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [isMyComputerOpen, setIsMyComputerOpen] = useState(false);
  const [showMyStack, setShowMyStack] = useState(false);
  const [myComputerSelectedIcon, setMyComputerSelectedIcon] = useState(null);
  const [time, setTime] = useState("");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const myComputerIcons = [
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
      action: "url",
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
      action: "url",
      url: "https://github.com/Pramit316",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" fill="#24292e" stroke="#1b1f23" strokeWidth="2.5" />
          <path d="M24 10c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.2 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.3-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.4 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.8 3.9-1.4 3.9-1.4.8 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.2.9 2.5v3.7c0 .4.3.8 1 .7C34 35.4 38 30.2 38 24c0-7.7-6.3-14-14-14z" fill="white" />
        </svg>
      ),
    },
    {
      id: "youtube",
      label: "My YouTube",
      action: "url",
      url: "https://www.youtube.com/@CodeWithBirkhe",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="10" width="40" height="28" rx="7" fill="#ff0000" stroke="#b30000" strokeWidth="2.5" />
          <path d="M5 11h38v8H5z" fill="white" opacity="0.15" />
          <path d="M20 18l11 6-11 6V18z" fill="white" />
        </svg>
      ),
    },
    {
      id: "resume",
      label: "My Resume",
      action: "url",
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
  ];

  const executeMyComputerIconAction = (icon) => {
    if (icon.action === "open-stack") {
      setShowMyStack(true);
    } else if (icon.url) {
      if (icon.url.includes("your-resume-url-here")) {
        alert("Opening Resume... (Note: Resume link is not added yet.)");
      } else {
        window.open(icon.url, "_blank", "noopener,noreferrer");
      }
    }
  };



  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Update time for Windows XP system tray clock
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minStr = minutes < 10 ? "0" + minutes : minutes;
      setTime(`${hours}:${minStr} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = PROJECTS[selectedIndex];

  function handlePrev() {
    setSelectedIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  }

  function handleNext() {
    setSelectedIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  }

  return (
    <section id="project" className="flex flex-col items-center justify-center py-20 px-4 w-full">
      {/* Section Header */}
      <div className="w-full max-w-6xl mx-auto mb-16 relative z-10">
        <div className="w-full px-4 py-8 md:py-10 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#002c91] font-extrabold font-sans">Interactive Work</p>
          <h2 className="mt-3 py-2 text-slate-950 text-4xl md:text-5xl font-black leading-tight font-sans">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-900 text-base md:text-lg max-w-2xl mx-auto font-sans font-medium">
            Explore my applications through this retro 2000s desktop simulator. Use the monitor controls or folder buttons to browse.
          </p>
        </div>
      </div>

      {/* Desktop CRT Monitor View (Hidden on mobile/tablet) */}
      <div className="hidden md:flex flex-col items-center w-full max-w-3xl">

        {/* Monitor Outer Casing / Bezel */}
        <div className="relative flex flex-col items-center w-full bg-[#e3ded2] border-4 border-[#b8b3a7] rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] p-4 md:p-8 select-none z-10">

          {/* Screen Frame (Inner Bezel) */}
          <div className="relative w-full aspect-[4/3] max-h-[600px] bg-[#1a1815] border-[12px] border-[#c7c1b3] rounded-2xl shadow-inner overflow-hidden flex flex-col">

            {/* CRT scanline overlays */}
            <div className="pointer-events-none absolute inset-0 z-50 bg-[#1a1a1a]/10 mix-blend-overlay" />

            {/* Main content display */}
            <div className={`w-full h-full relative transition-all duration-500 ${isMonitorOn ? "crt-screen" : "crt-screen-off"}`}>

              {isMonitorOn && (
                <div
                  className="w-full h-full flex flex-col bg-cover bg-center select-none"
                  style={{ backgroundImage: "url('/images/xp_bliss.png')" }}
                >

                  {/* Desktop icons */}
                  <div className="absolute top-4 left-4 flex flex-col gap-6">
                    {/* My Computer Shortcut */}
                    <div
                      onClick={() => { setIsMyComputerOpen(true); setIsFolderOpen(false); }}
                      className="flex flex-col items-center justify-center w-20 h-20 rounded hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-white/20 cursor-pointer text-center p-1 group"
                    >
                      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="drop-shadow-md group-hover:scale-105 transition-transform">
                        <rect x="6" y="8" width="26" height="20" rx="3" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
                        <rect x="9" y="11" width="20" height="14" fill="#0054e3" stroke="#222" strokeWidth="1" />
                        <path d="M10 12L24 12L10 24Z" fill="white" opacity="0.15" />
                        <path d="M16 28L14 34H24L22 28Z" fill="#bebaae" stroke="#4a4940" strokeWidth="2.5" />
                        <rect x="34" y="12" width="8" height="22" rx="1" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
                        <rect x="36" y="16" width="4" height="2" fill="#555" />
                        <rect x="36" y="20" width="4" height="2" fill="#555" />
                        <circle cx="38" cy="30" r="1.5" fill="#39ff14" />
                      </svg>
                      <span className="text-[11px] font-semibold text-white mt-1 text-shadow-sm font-sans drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] leading-tight">
                        My Computer
                      </span>
                    </div>
                    {/* My Projects Shortcut */}
                    <div
                      onClick={() => setIsFolderOpen(true)}
                      className="flex flex-col items-center justify-center w-20 h-20 rounded hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-white/20 cursor-pointer text-center p-1 group"
                    >
                      <FcOpenedFolder size={40} className="drop-shadow-md group-hover:scale-105 transition-transform" />
                      <span className="text-[11px] font-semibold text-white mt-1 text-shadow-sm font-sans drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] leading-tight">
                        My Projects
                      </span>
                    </div>

                    {/* Recycle Bin Shortcut */}
                    <div
                      onClick={() => alert("Recycle Bin is empty!")}
                      className="flex flex-col items-center justify-center w-20 h-20 rounded hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-white/20 cursor-pointer text-center p-1 group"
                    >
                      <img
                        src="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-4.png"
                        alt="Recycle Bin"
                        className="w-10 h-10 drop-shadow-md group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.currentTarget.src = "https://img.icons8.com/color/48/recycle-bin.png";
                        }}
                      />
                      <span className="text-[11px] font-semibold text-white mt-1 text-shadow-sm font-sans drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] leading-tight">
                        Recycle Bin
                      </span>
                    </div>

                    {/* Internet Explorer Shortcut */}
                    <a
                      href="https://github.com/Pramit316/my-portfolio"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center justify-center w-20 h-20 rounded hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-white/20 cursor-pointer text-center p-1 group no-underline"
                    >
                      <img
                        src="https://win98icons.alexmeub.com/icons/png/msie1-4.png"
                        alt="Internet Explorer"
                        className="w-10 h-10 drop-shadow-md group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.currentTarget.src = "https://img.icons8.com/color/48/internet-explorer.png";
                        }}
                      />
                      <span className="text-[11px] font-semibold text-white mt-1 text-shadow-sm font-sans drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] leading-tight">
                        Internet Explorer
                      </span>
                    </a>
                  </div>

                  {/* Windows XP Luna Explorer Folder */}
                  <AnimatePresence>
                    {isFolderOpen && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-4 md:inset-x-8 top-4 md:top-8 bottom-14 md:bottom-16 bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans text-xs text-[#333333] z-10"
                      >
                        {/* Title Bar */}
                        <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between rounded-t-md text-white font-bold select-none cursor-default">
                          <div className="flex items-center gap-1.5">
                            <FcFolder size={16} />
                            <span className="text-shadow-sm font-sans tracking-wide">Project Explorer</span>
                          </div>
                          {/* Windows controls */}
                          <div className="flex items-center gap-1 select-none">
                            {/* Minimize Button */}
                            {/* Minimize Button */}
                            <button
                              onClick={() => setIsFolderOpen(false)}
                              className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] hover:from-[#9cbaff] hover:to-[#5c87e3] active:from-[#2a51a8] active:to-[#4b77d8] border border-[#0d2c6e] cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                              style={{ padding: 0, borderRadius: "3px" }}
                              title="Minimize"
                            >
                              <FaMinus size={8} className="text-white" />
                            </button>

                            {/* Maximize Button */}
                            <button
                              className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] opacity-60"
                              style={{ padding: 0, borderRadius: "3px" }}
                              disabled
                            >
                              <div className="w-2.5 h-2.5 border-2 border-white/80" />
                            </button>

                            {/* Close Button */}
                            <button
                              onClick={() => setIsFolderOpen(false)}
                              className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#f37a5a] to-[#c7321a] hover:from-[#ff9f84] hover:to-[#e04a2c] active:from-[#a0220c] active:to-[#c7321a] border border-[#7d1708] cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                              style={{ padding: 0, borderRadius: "3px" }}
                              title="Close"
                            >
                              <FaTimes size={10} className="text-white font-bold" />
                            </button>
                          </div>
                        </div>

                        {/* Menu Bar */}
                        <div className="flex items-center gap-3 px-2 py-0.5 border-b border-white shadow-sm text-[11px] text-[#333] bg-[#ece9d8]">
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">File</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Edit</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">View</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Favorites</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Tools</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Help</span>
                        </div>

                        {/* Navigation Toolbar */}
                        <div className="flex items-center gap-1 p-1 border-b border-[#d2cfc2] shadow-sm select-none bg-[#ece9d8]">
                          <div className="flex items-center gap-1.5 px-1">
                            {/* Back Button */}
                            <button
                              onClick={handlePrev}
                              className="relative w-8 h-8 bg-gradient-to-br from-[#8de63b] via-[#4cb813] to-[#257c09] border border-[#285d0d] shadow-[0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 active:scale-95 transition-transform"
                              style={{ padding: 0, borderRadius: "50%" }}
                              title="Back"
                            >
                              {/* Gloss reflection highlight */}
                              <div className="absolute top-0.5 left-1 w-2.5 h-1.5 bg-white/45 rounded-full blur-[0.2px]" />
                              <FaArrowLeft size={12} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                            </button>

                            {/* Forward Button */}
                            <button
                              onClick={handleNext}
                              className="relative w-8 h-8 bg-gradient-to-br from-[#8de63b] via-[#4cb813] to-[#257c09] border border-[#285d0d] shadow-[0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 active:scale-95 transition-transform"
                              style={{ padding: 0, borderRadius: "50%" }}
                              title="Forward"
                            >
                              {/* Gloss reflection highlight */}
                              <div className="absolute top-0.5 left-1 w-2.5 h-1.5 bg-white/45 rounded-full blur-[0.2px]" />
                              <FaArrowRight size={12} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                            </button>
                          </div>
                          <div className="h-6 w-px bg-[#d2cfc2] mx-2" />
                          <span className="text-[11px] text-[#555] font-mono select-all bg-white border border-[#7f9db9] px-2 py-0.5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
                            C:\My Projects\Pramit\{currentProject.title}
                          </span>
                        </div>

                        {/* Explorer Content Container */}
                        <div className="flex flex-1 overflow-hidden">

                          {/* Left Info Pane */}
                          <div className="hidden sm:flex w-36 md:w-44 bg-[#7b9ebd] border-r border-[#002d96] p-2 flex flex-col gap-3 overflow-y-auto select-none">
                            {/* Pane Item 1: Links */}
                            <div className="bg-white rounded border border-[#002d96] shadow overflow-hidden">
                              <div className="bg-gradient-to-r from-[#215dc6] to-[#3d7bad] px-2 py-1 text-white font-bold flex items-center justify-between text-[10px] md:text-xs">
                                <span>Project Links</span>
                              </div>
                              <div className="p-2 flex flex-col gap-2">
                                {currentProject.demo && currentProject.demo !== "#" && (
                                  <a
                                    href={currentProject.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-[#002c91] font-semibold hover:underline no-underline text-[10px] md:text-xs"
                                  >
                                    <FcGlobe size={16} />
                                    <span>Live Demo</span>
                                  </a>
                                )}
                                {currentProject.github && currentProject.github !== "#" && (
                                  <a
                                    href={currentProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-[#002c91] font-semibold hover:underline no-underline text-[10px] md:text-xs"
                                  >
                                    <FaGithub size={16} className="text-[#333]" />
                                    <span>GitHub Repo</span>
                                  </a>
                                )}
                                {currentProject.title === "Quick Fare" && (
                                  <a
                                    href={currentProject.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1 text-[#b57a00] font-semibold hover:underline no-underline text-[10px] md:text-xs"
                                  >
                                    <FcDocument size={16} />
                                    <span>Project Report</span>
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Pane Item 2: Tech Stack */}
                            <div className="bg-white rounded border border-[#002d96] shadow overflow-hidden">
                              <div className="bg-gradient-to-r from-[#215dc6] to-[#3d7bad] px-2 py-1 text-white font-bold flex items-center justify-between text-[10px] md:text-xs">
                                <span>System Tech</span>
                              </div>
                              <div className="p-2 flex flex-col gap-1.5 text-[10px] md:text-[11px]">
                                {currentProject.tech.map((t) => (
                                  <div key={t} className="flex items-center gap-1.5 text-[#333] text-left">
                                    <FcSettings size={14} className="flex-shrink-0" />
                                    <span className="font-semibold truncate">{t}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Main Project Details Pane */}
                          <div className="flex-1 bg-white p-3 md:p-4 overflow-y-auto flex flex-col gap-4">

                            {/* Folder sliding frame */}
                            <motion.div
                              key={currentProject.title}
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="flex flex-col gap-4 h-full"
                            >
                              <h3 className="text-lg md:text-xl font-bold text-[#002c91] border-b-2 border-[#7f9db9] pb-1 font-sans text-left">
                                {currentProject.title}
                              </h3>

                              {/* Image Visualizer */}
                              <div className="flex-shrink-0 flex justify-center">
                                {currentProject.image ? (
                                  <div className="xp-panel-bevel p-1 bg-[#f0f0f0] rounded">
                                    <img
                                      src={currentProject.image}
                                      alt={currentProject.title}
                                      className="max-h-36 md:max-h-48 rounded object-cover max-w-full border border-black/10 shadow-sm"
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className={`w-full max-w-sm md:max-w-md h-28 md:h-36 rounded flex items-center justify-center bg-gradient-to-br ${currentProject.gradient ?? "from-[#0058e6] to-[#002c91]"} text-white font-bold text-base md:text-lg xp-panel-bevel`}
                                  >
                                    {currentProject.title}
                                  </div>
                                )}
                              </div>

                              {/* Description */}
                              <div className="text-[11px] md:text-[12px] leading-relaxed text-[#333333] text-justify font-sans bg-[#fbfbf8] border border-[#d2cfc2] rounded p-3 shadow-inner whitespace-pre-line">
                                {currentProject.description}
                              </div>

                              {/* Mobile-only Links and Tech Stack */}
                              <div className="sm:hidden flex flex-col gap-3 border-t border-[#d2cfc2] pt-3 text-left">
                                <div className="flex flex-wrap gap-3">
                                  {currentProject.demo && currentProject.demo !== "#" && (
                                    <a
                                      href={currentProject.demo}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center gap-1 text-[#002c91] font-semibold hover:underline no-underline text-xs"
                                    >
                                      <FcGlobe size={16} />
                                      <span>Live Demo</span>
                                    </a>
                                  )}
                                  {currentProject.github && currentProject.github !== "#" && (
                                    <a
                                      href={currentProject.github}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center gap-1 text-[#002c91] font-semibold hover:underline no-underline text-xs"
                                    >
                                      <FaGithub size={16} className="text-[#333]" />
                                      <span>GitHub</span>
                                    </a>
                                  )}
                                  {currentProject.title === "Quick Fare" && (
                                    <a
                                      href={currentProject.demo}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center gap-1 text-[#b57a00] font-semibold hover:underline no-underline text-xs"
                                    >
                                      <FcDocument size={16} />
                                      <span>Report</span>
                                    </a>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {currentProject.tech.map((t) => (
                                    <span key={t} className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>

                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* My Computer Window */}
                  <AnimatePresence>
                    {isMyComputerOpen && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-x-4 md:inset-x-8 top-4 md:top-8 bottom-14 md:bottom-16 bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans text-xs text-[#333333] z-10"
                      >
                        {/* Title Bar */}
                        <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between rounded-t-md text-white font-bold select-none cursor-default">
                          <div className="flex items-center gap-1.5 text-left">
                            <FaComputer size={14} className="text-white" />
                            <span className="text-shadow-sm font-sans tracking-wide">My Computer</span>
                          </div>
                          {/* Windows controls */}
                          <div className="flex items-center gap-1 select-none">
                            {/* Minimize Button */}
                            <button
                              onClick={() => setIsMyComputerOpen(false)}
                              className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] hover:from-[#9cbaff] hover:to-[#5c87e3] active:from-[#2a51a8] active:to-[#4b77d8] border border-[#0d2c6e] cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                              style={{ padding: 0, borderRadius: "3px" }}
                              title="Minimize"
                            >
                              <FaMinus size={8} className="text-white" />
                            </button>

                            {/* Maximize Button */}
                            <button
                              className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] opacity-60"
                              style={{ padding: 0, borderRadius: "3px" }}
                              disabled
                            >
                              <div className="w-2.5 h-2.5 border-2 border-white/80" />
                            </button>

                            {/* Close Button */}
                            <button
                              onClick={() => setIsMyComputerOpen(false)}
                              className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#f37a5a] to-[#c7321a] hover:from-[#ff9f84] hover:to-[#e04a2c] active:from-[#a0220c] active:to-[#c7321a] border border-[#7d1708] cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                              style={{ padding: 0, borderRadius: "3px" }}
                              title="Close"
                            >
                              <FaTimes size={10} className="text-white font-bold" />
                            </button>
                          </div>
                        </div>

                        {/* Menu Bar */}
                        <div className="flex items-center gap-3 px-2 py-0.5 border-b border-white shadow-sm text-[11px] text-[#333] bg-[#ece9d8]">
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">File</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Edit</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">View</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Favorites</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Tools</span>
                          <span className="hover:bg-[#316ac5] hover:text-white px-1.5 py-0.5 rounded cursor-default">Help</span>
                        </div>

                        {/* Address bar */}
                        <div className="flex items-center gap-2 px-2 py-1 bg-[#ece9d8] border-b border-[#d2cfc2]">
                          <span className="text-[10px] text-gray-600 font-sans">Address</span>
                          <div className="flex-1 bg-white border border-[#7f9db9] px-2 py-0.5 text-[10px] text-gray-800 font-mono text-left">My Computer</div>
                        </div>

                        {/* Icon grid */}
                        <div className="flex-1 bg-white p-4 overflow-y-auto">
                          <div className="flex flex-wrap gap-6 p-2 justify-start items-start">
                            {myComputerIcons.map((icon) => {
                              const isSelected = myComputerSelectedIcon === icon.id;
                              return (
                                <div
                                  key={icon.id}
                                  onClick={() => {
                                    setMyComputerSelectedIcon(icon.id);
                                    executeMyComputerIconAction(icon);
                                  }}
                                  className={`flex flex-col items-center gap-1 p-2 cursor-pointer rounded w-[72px] transition-all duration-100 ${isSelected ? "bg-[#0b61e2]/20 outline outline-1 outline-dashed outline-[#0b61e2]" : "hover:bg-[#cce4ff]/60"
                                    }`}
                                  title={icon.action === "open-stack" ? "Click to open My Stack" : "Click to open"}
                                >
                                  {icon.icon}
                                  <span
                                    className={`text-[11px] text-center leading-tight font-sans break-words w-full select-none ${isSelected ? "bg-[#0b61e2] text-white px-0.5 rounded-sm" : "text-slate-800"
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
                        <div className="bg-[#ece9d8] border-t border-[#d2cfc2] px-2 py-0.5 text-[10px] text-gray-500 font-sans text-left">
                          {myComputerIcons.length} object(s)
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* My Stack (System Properties) Window */}
                  {showMyStack && (
                    <MyStackWindow onClose={() => setShowMyStack(false)} />
                  )}

                  {/* Bottom Taskbar */}
                  <div className="xp-taskbar-gradient absolute bottom-0 inset-x-0 h-10 flex items-center justify-between px-2 text-white font-sans text-xs select-none z-20 shadow-[0_-2px_5px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-2 h-full">
                      {/* Start Button */}
                      <button
                        onClick={() => { setIsFolderOpen(true); setIsMyComputerOpen(false); }}
                        className="xp-btn-start flex items-center gap-1.5 h-[34px] px-3 cursor-pointer select-none text-[13px] italic"
                      >
                        <FcFolder size={18} className="brightness-110" />
                        <span>start</span>
                      </button>
                      {/* Task Bar Tabs */}
                      {isFolderOpen && (
                        <div
                          onClick={() => setIsFolderOpen(false)}
                          className="flex items-center h-[28px] bg-[#3a6ea5] border border-t-black/30 border-l-black/30 border-r-white/30 border-b-white/30 rounded px-3 py-1 font-semibold text-white/95 shadow-inner select-none cursor-pointer max-w-[100px] md:max-w-36 overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                          <FcOpenedFolder size={14} className="mr-1 flex-shrink-0" />
                          <span className="text-[10px] md:text-[11px] truncate">Project Explorer</span>
                        </div>
                      )}
                      {isMyComputerOpen && (
                        <div
                          onClick={() => setIsMyComputerOpen(false)}
                          className="flex items-center h-[28px] bg-[#3a6ea5] border border-t-black/30 border-l-black/30 border-r-white/30 border-b-white/30 rounded px-3 py-1 font-semibold text-white/95 shadow-inner select-none cursor-pointer max-w-[100px] md:max-w-36 overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                          <FaComputer size={14} className="mr-1 flex-shrink-0 text-white" />
                          <span className="text-[10px] md:text-[11px] truncate">My Computer</span>
                        </div>
                      )}
                    </div>
                    {/* Clock Tray */}
                    <div className="h-[28px] bg-[#092f8d] border-t border-t-[#001c62] border-l border-l-[#001c62] border-r border-r-white/40 border-b border-b-white/40 rounded px-2 md:px-3 flex items-center text-[#9ed3ff] font-sans font-medium text-[10px] md:text-[11px] shadow-inner">
                      <span>{time}</span>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

          {/* Bottom Bezel Controls */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4 px-4 py-2 bg-[#dcd7cb] border border-[#c5c0b1] rounded-lg gap-3">
            <span className="text-xs font-mono font-bold text-[#8c8677] uppercase tracking-widest">
              PRAMIT XP-CRT 2000
            </span>
            <div className="flex items-center gap-4">
              {/* Nav controls */}
              <div className="flex gap-2">
                <button
                  onClick={() => { if (isMonitorOn) handlePrev(); }}
                  className="w-8 h-8 bg-[#c7c1b3] border-2 border-t-[#fff] border-l-[#fff] border-r-[#8c8677] border-b-[#8c8677] active:border-t-[#8c8677] active:border-l-[#8c8677] active:border-r-[#fff] active:border-b-[#fff] flex items-center justify-center cursor-pointer shadow-sm text-xs font-bold text-[#5e584c]"
                  style={{ padding: 0, borderRadius: "50%" }}
                  title="Previous Project"
                >
                  &lt;
                </button>
                <button
                  onClick={() => { if (isMonitorOn) handleNext(); }}
                  className="w-8 h-8 bg-[#c7c1b3] border-2 border-t-[#fff] border-l-[#fff] border-r-[#8c8677] border-b-[#8c8677] active:border-t-[#8c8677] active:border-l-[#8c8677] active:border-r-[#fff] active:border-b-[#fff] flex items-center justify-center cursor-pointer shadow-sm text-xs font-bold text-[#5e584c]"
                  style={{ padding: 0, borderRadius: "50%" }}
                  title="Next Project"
                >
                  &gt;
                </button>
              </div>

              {/* LED indicator */}
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full border border-black/40 transition-all duration-300 ${isMonitorOn
                      ? "bg-[#39ff14] shadow-[0_0_8px_#39ff14]"
                      : "bg-[#555] shadow-none"
                    }`}
                />
                {/* Power Button */}
                <button
                  onClick={() => setIsMonitorOn(!isMonitorOn)}
                  className="w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-100 border-2"
                  style={{
                    padding: 0,
                    borderRadius: "50%",
                    backgroundColor: isMonitorOn ? "#eae6db" : "#bebaae",
                    borderTopColor: isMonitorOn ? "#fff" : "#7a7568",
                    borderLeftColor: isMonitorOn ? "#fff" : "#7a7568",
                    borderRightColor: isMonitorOn ? "#8c8677" : "#fff",
                    borderBottomColor: isMonitorOn ? "#8c8677" : "#fff",
                    boxShadow: isMonitorOn ? "inset 1px 1px 2px rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.2)" : "inset 1px 1px 2px rgba(0,0,0,0.3)"
                  }}
                  title="Power Button"
                >
                  <FaPowerOff size={14} className={isMonitorOn ? "text-red-600 animate-none" : "text-gray-500 animate-none"} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Monitor Stand (Placed below the actual monitor casing) */}
        <div className="w-28 h-8 bg-[#c7c1b3] border-x-4 border-[#a29c8e] -mt-1 shadow-md z-0" />
        <div className="w-72 h-4 bg-[#b8b3a7] border-4 border-t-[#c7c1b3] border-[#a29c8e] rounded-xl shadow-lg z-0" />

      </div>

      {/* Mobile Swipeable Retro XP Window View (Visible on mobile/tablet) */}
      <div className="block md:hidden w-full max-w-lg mx-auto mt-6">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="xp-window-bevel bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-xl flex flex-col font-sans text-xs text-[#333333] overflow-hidden"
        >
          {/* Title Bar */}
          <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between text-white font-bold select-none">
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-[14px]">💻</span>
              <span className="truncate max-w-[180px]">{currentProject.title} - Explorer</span>
            </div>
            <div className="flex items-center gap-1 select-none">
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">_</div>
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">□</div>
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white">X</div>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="flex items-center gap-3 px-2 py-0.5 border-b border-white text-[10px] text-[#333] bg-[#ece9d8] select-none">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Favorites</span>
          </div>

          {/* Navigation Address bar (Includes XP Back/Forward Buttons) */}
          <div className="flex items-center gap-1.5 p-1 border-b border-[#d2cfc2] bg-[#ece9d8] select-none">
            <div className="flex items-center gap-1 px-1">
              {/* Back Button */}
              <button
                onClick={handlePrev}
                className="relative w-7 h-7 bg-gradient-to-br from-[#8de63b] via-[#4cb813] to-[#257c09] border border-[#285d0d] shadow-[0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 active:scale-95 transition-transform"
                style={{ padding: 0, borderRadius: "50%" }}
                title="Previous"
              >
                <div className="absolute top-0.5 left-0.5 w-2 h-1 bg-white/45 rounded-full blur-[0.2px]" />
                <FaArrowLeft size={10} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
              </button>

              {/* Forward Button */}
              <button
                onClick={handleNext}
                className="relative w-7 h-7 bg-gradient-to-br from-[#8de63b] via-[#4cb813] to-[#257c09] border border-[#285d0d] shadow-[0_1px_2px_rgba(0,0,0,0.3)] flex items-center justify-center cursor-pointer hover:brightness-110 active:scale-95 transition-transform"
                style={{ padding: 0, borderRadius: "50%" }}
                title="Next"
              >
                <div className="absolute top-0.5 left-0.5 w-2 h-1 bg-white/45 rounded-full blur-[0.2px]" />
                <FaArrowRight size={10} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
              </button>
            </div>

            {/* Address Field */}
            <span className="text-[10px] text-[#555] font-mono select-all bg-white border border-[#7f9db9] px-2 py-0.5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left">
              C:\My Projects\{currentProject.title}
            </span>
          </div>

          {/* Content Body */}
          <div className="p-3 bg-white flex flex-col gap-3 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.title}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-col gap-3 flex-1"
              >
                {/* Image */}
                {currentProject.image ? (
                  <div className="xp-panel-bevel p-1 bg-[#f0f0f0] rounded flex justify-center h-40">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="max-h-full rounded object-contain max-w-full border border-black/10 shadow-sm"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-40 rounded flex items-center justify-center bg-gradient-to-br ${currentProject.gradient ?? "from-[#0058e6] to-[#002c91]"} text-white font-bold text-sm xp-panel-bevel`}>
                    {currentProject.title}
                  </div>
                )}

                {/* Description */}
                <div className="text-[11px] leading-relaxed text-[#333333] text-justify font-sans bg-[#fbfbf8] border border-[#d2cfc2] rounded p-2.5 shadow-inner min-h-[100px] overflow-y-auto">
                  {currentProject.description}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentProject.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[9px] text-[#002c91] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex items-center justify-between border-t border-[#d2cfc2] pt-2 mt-auto">
              <span className="text-[9px] text-gray-500 font-sans italic select-none">
                ← Swipe to browse →
              </span>
              <div className="flex gap-2">
                {currentProject.demo && currentProject.demo !== "#" && (
                  <a
                    href={currentProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="xp-btn-blue px-3.5 py-1.5 !text-[10px] font-bold !text-white shadow hover:brightness-110 active:brightness-95 transition no-underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Live Demo
                  </a>
                )}
                {currentProject.github && currentProject.github !== "#" && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="xp-btn px-3.5 py-1.5 !text-[10px] font-bold text-[#333] shadow hover:bg-gray-100 active:brightness-95 transition no-underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
