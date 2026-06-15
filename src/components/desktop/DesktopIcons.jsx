import React, { useState, useEffect, useRef } from "react";
import { FaComputer, FaFlutter } from "react-icons/fa6";
import { SiSpringboot, SiAngular } from "react-icons/si";

/* ─── My Stack (System Properties) content ─────────────────────────── */
function MyStackWindow({ onClose }) {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="relative bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden text-[#333333] text-left"
        style={{ width: "min(520px, 94vw)" }}
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

/* ─── My Computer Explorer Window ────────────────────────────────────── */
function MyComputerWindow({ onClose, onOpenMyStack }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const icons = [
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
      id: "youtube",
      label: "YouTube",
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

  const handleDoubleClick = (icon) => {
    if (icon.action === "open-stack") {
      onOpenMyStack();
    } else if (icon.url) {
      if (icon.url.includes("your-resume-url-here")) {
        alert("Opening Resume... (Note: Resume link is not added yet.)");
      } else {
        window.open(icon.url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div
        className="relative bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden"
        style={{ width: "min(520px, 94vw)", minHeight: 320 }}
        onClick={(e) => e.stopPropagation()}
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
              onClick={onClose}
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
            {icons.map((icon) => {
              const isSelected = selectedIcon === icon.id;
              return (
                <div
                  key={icon.id}
                  onClick={() => setSelectedIcon(icon.id)}
                  onDoubleClick={() => handleDoubleClick(icon)}
                  className={`flex flex-col items-center gap-1 p-2 cursor-pointer rounded w-[72px] transition-all duration-100 ${
                    isSelected ? "bg-[#0b61e2]/20 outline outline-1 outline-dashed outline-[#0b61e2]" : "hover:bg-[#cce4ff]/60"
                  }`}
                  title={icon.action === "open-stack" ? "Double-click to open My Stack" : "Double-click to open"}
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
          {icons.length} object(s)
        </div>
      </div>
    </div>
  );
}

/* ─── Main Desktop Icons panel ───────────────────────────────────────── */
const DesktopIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isBinFull, setIsBinFull] = useState(true);
  const [showBinModal, setShowBinModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [showComputerWindow, setShowComputerWindow] = useState(false);
  const [showMyStack, setShowMyStack] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelectedIcon(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleIconClick = (id, action) => {
    setSelectedIcon(id);
    if (action === "open-computer") {
      setShowComputerWindow(true);
    } else if (action === "scroll") {
      const element = document.getElementById(id);
      if (element) {
        const offset = 96;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: id === "hero" ? 0 : offsetPosition, behavior: "smooth" });
      }
    } else if (action === "bin") {
      if (isBinFull) setShowBinModal(true);
      else alert("The Recycle Bin is already empty!");
    } else if (action === "url") {
      const iconItem = iconsList.find((i) => i.id === id);
      if (iconItem && iconItem.url) {
        if (iconItem.url.includes("your-resume-url-here")) {
          alert(`Opening ${iconItem.label}... (Note: Resume link is not added yet.)`);
        } else {
          window.open(iconItem.url, "_blank", "noopener,noreferrer");
        }
      }
    }
  };

  const handleEmptyBin = () => {
    setIsBinFull(false);
    setShowBinModal(false);
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");
    audio.play().catch(() => {});
  };

  const iconsList = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="36" height="36" rx="6" fill="#0077b5" stroke="#004b75" strokeWidth="2.5" />
          <path d="M7 7h34v10H7z" fill="white" opacity="0.1" />
          <rect x="13" y="18" width="6" height="18" fill="white" />
          <circle cx="16" cy="12" r="3.5" fill="white" />
          <path d="M22 18h6v3c1.5-2 3.5-3.5 6-3.5 5 0 7 3.5 7 8v10.5h-6V26.5c0-2.5-.5-4.5-3.5-4.5s-4 2-4 4.5V36h-6V18z" fill="white" />
        </svg>
      ),
      action: "url",
      url: "https://www.linkedin.com/in/pramit-bhattarai",
    },
    {
      id: "github",
      label: "GitHub",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" fill="#24292e" stroke="#1b1f23" strokeWidth="2.5" />
          <path d="M24 10c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.2 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.3-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.4 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.8 3.9-1.4 3.9-1.4.8 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.2.9 2.5v3.7c0 .4.3.8 1 .7C34 35.4 38 30.2 38 24c0-7.7-6.3-14-14-14z" fill="white" />
        </svg>
      ),
      action: "url",
      url: "https://github.com/Pramit316",
    },
    {
      id: "resume",
      label: "My Resume",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6h20l8 8v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="white" stroke="#4a4940" strokeWidth="2.5" />
          <path d="M30 6v8h8" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5" />
          <line x1="14" y1="18" x2="34" y2="18" stroke="#3b82f6" strokeWidth="2.5" />
          <line x1="14" y1="24" x2="34" y2="24" stroke="#555" strokeWidth="2" />
          <line x1="14" y1="30" x2="34" y2="30" stroke="#555" strokeWidth="2" />
          <line x1="14" y1="36" x2="26" y2="36" stroke="#555" strokeWidth="2" />
        </svg>
      ),
      action: "url",
      url: "https://your-resume-url-here.com",
    },
    {
      id: "youtube",
      label: "My YouTube",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="40" height="28" rx="7" fill="#ff0000" stroke="#b30000" strokeWidth="2.5" />
          <path d="M5 11h38v8H5z" fill="white" opacity="0.15" />
          <path d="M20 18l11 6-11 6V18z" fill="white" />
        </svg>
      ),
      action: "url",
      url: "https://www.youtube.com/@CodeWithBirkhe",
    },
  ];

  return (
    <>
      {/* My Computer Explorer Window */}
      {showComputerWindow && (
        <MyComputerWindow
          onClose={() => setShowComputerWindow(false)}
          onOpenMyStack={() => {
            setShowComputerWindow(false);
            setShowMyStack(true);
          }}
        />
      )}

      {/* My Stack (System Properties) Window */}
      {showMyStack && (
        <MyStackWindow onClose={() => setShowMyStack(false)} />
      )}

      {/* Always visible toggle button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[999] w-[24px] h-[48px] bg-[#7b9ebd] border-[3px] border-l-0 border-[#002c91] rounded-r-md flex items-center justify-center text-white cursor-pointer select-none hover:bg-[#688aab] active:brightness-95 text-[10px] font-bold"
        style={{ boxShadow: "3px 3px 6px rgba(0,0,0,0.2)" }}
        title={isOpen ? "Hide shortcuts" : "Show shortcuts"}
      >
        {isOpen ? "◀" : "▶"}
      </button>

      {/* Sliding icons panel */}
      <div
        ref={containerRef}
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-30 w-[96px] py-5 bg-[#7b9ebd] border-[3px] border-[#002c91] rounded-xl flex flex-col gap-5.5 items-center select-none font-sans transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-[150px]"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 10px 30px -5px rgba(0, 0, 0, 0.45), inset 1.5px 1.5px 0px #ffffff"
            : "none",
        }}
      >
        {iconsList.map((item) => {
          const isSelected = selectedIcon === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleIconClick(item.id, item.action)}
              className={`flex flex-col items-center justify-center p-1.5 cursor-pointer rounded border transition-all duration-100 ${
                isSelected
                  ? "bg-[#0b61e2]/25 border-dashed border-[#0b61e2] text-white"
                  : "border-transparent text-slate-100 hover:bg-white/10"
              }`}
              title="Click to open"
            >
              {item.icon}
              <span
                className={`text-[11px] mt-1 text-center font-medium leading-tight select-none px-1 rounded-sm ${
                  isSelected ? "bg-[#0b61e2] text-white" : "text-shadow-desktop text-white"
                }`}
                style={{
                  textShadow: isSelected ? "none" : "1px 1px 2px rgba(0,0,0,0.8)",
                  wordBreak: "break-word",
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}

        {/* Recycle Bin Modal */}
        {showBinModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
              className="xp-window-bevel bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none text-slate-900 overflow-hidden"
              style={{ width: "320px" }}
            >
              <div className="xp-title-bar-gradient px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none">
                <span>Confirm File Delete</span>
                <button
                  onClick={() => setShowBinModal(false)}
                  className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white hover:brightness-110 active:brightness-90 select-none p-0 cursor-pointer"
                >X</button>
              </div>
              <div className="p-4 flex gap-4 items-start bg-[#ece9d8]">
                <div className="w-10 h-10 rounded-full border border-amber-500 bg-amber-100 flex items-center justify-center text-amber-500 font-bold text-xl select-none flex-shrink-0">!</div>
                <div className="text-xs text-left leading-relaxed">Are you sure you want to empty the Recycle Bin and permanently delete all items in it?</div>
              </div>
              <div className="bg-[#ece9d8] p-3 flex justify-end gap-2 border-t border-white">
                <button onClick={handleEmptyBin} className="xp-btn px-4 py-1 text-xs min-w-[75px] font-semibold">Yes</button>
                <button onClick={() => setShowBinModal(false)} className="xp-btn px-4 py-1 text-xs min-w-[75px] font-semibold">No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DesktopIcons;
