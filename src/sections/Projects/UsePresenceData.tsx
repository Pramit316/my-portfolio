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
  FaPowerOff
} from "react-icons/fa";
import { 
  FcFolder, 
  FcOpenedFolder, 
  FcGlobe, 
  FcSettings, 
  FcDocument 
} from "react-icons/fc";

export default function UsePresenceData() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMonitorOn, setIsMonitorOn] = useState(true);
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [time, setTime] = useState("");

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
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Interactive Work</p>
        <h2 className="mt-3 py-2 text-4xl font-semibold bg-gradient-to-r from-cyan-200 via-blue-200 to-teal-200 bg-clip-text text-transparent leading-tight">
          Featured Projects
        </h2>
        <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
          Explore my applications through this retro 2000s desktop simulator. Use the monitor controls or folder buttons to browse.
        </p>
      </div>

      {/* Monitor Wrapper Container (Grouping Bezel and Stand) */}
      <div className="relative flex flex-col items-center w-full max-w-3xl">
        
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
                        <div className="w-36 md:w-44 bg-[#7b9ebd] border-r border-[#002d96] p-2 flex flex-col gap-3 overflow-y-auto select-none">
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

                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Taskbar */}
                <div className="xp-taskbar-gradient absolute bottom-0 inset-x-0 h-10 flex items-center justify-between px-2 text-white font-sans text-xs select-none z-20 shadow-[0_-2px_5px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-2 h-full">
                    {/* Start Button */}
                    <button 
                      onClick={() => setIsFolderOpen(true)}
                      className="xp-btn-start flex items-center gap-1.5 h-[34px] px-3 cursor-pointer select-none text-[13px] italic"
                    >
                      <FcFolder size={18} className="brightness-110" />
                      <span>start</span>
                    </button>
                    {/* Task Bar Tabs */}
                    {isFolderOpen && (
                      <div className="flex items-center h-[28px] bg-[#3a6ea5] border border-t-black/30 border-l-black/30 border-r-white/30 border-b-white/30 rounded px-3 py-1 font-semibold text-white/95 shadow-inner select-none cursor-default max-w-[100px] md:max-w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                        <FcOpenedFolder size={14} className="mr-1 flex-shrink-0" />
                        <span className="text-[10px] md:text-[11px] truncate">Project Explorer</span>
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
                className={`w-3 h-3 rounded-full border border-black/40 transition-all duration-300 ${
                  isMonitorOn 
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
    </section>
  );
}
