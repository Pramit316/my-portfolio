import React, { useState, useEffect, useRef } from "react";

const DesktopIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isBinFull, setIsBinFull] = useState(true);
  const [showBinModal, setShowBinModal] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const containerRef = useRef(null);

  // Click outside to deselect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelectedIcon(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleIconClick = (id) => {
    setSelectedIcon(id);
  };

  const handleIconDoubleClick = (id, action) => {
    setSelectedIcon(id);
    if (action === "scroll") {
      const element = document.getElementById(id);
      if (element) {
        // Offset matches AppBar height
        const offset = 96;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: id === "hero" ? 0 : offsetPosition,
          behavior: "smooth"
        });
      }
    } else if (action === "bin") {
      if (isBinFull) {
        setShowBinModal(true);
      } else {
        alert("The Recycle Bin is already empty!");
      }
    } else if (action === "url") {
      const iconItem = iconsList.find((i) => i.id === id);
      if (iconItem && iconItem.url) {
        if (
          iconItem.url.includes("your-resume-url-here") || 
          iconItem.url === "https://linkedin.com" || 
          iconItem.url === "https://youtube.com"
        ) {
          alert(`Opening ${iconItem.label}... (Note: Replace the placeholder link for ${iconItem.label} in DesktopIcons.jsx with your actual profile/file link!)`);
        } else {
          window.open(iconItem.url, "_blank");
        }
      }
    }
  };

  const handleEmptyBin = () => {
    setIsBinFull(false);
    setShowBinModal(false);
    // Play a retro click/action sound or alert
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");
    audio.play().catch(() => {});
  };

  const iconsList = [
    {
      id: "project", // Double-click scrolls to Projects CRT Monitor!
      label: "My Computer",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Monitor Bezel */}
          <rect x="6" y="8" width="26" height="20" rx="3" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5"/>
          {/* Inner Screen */}
          <rect x="9" y="11" width="20" height="14" fill="#0054e3" stroke="#222" strokeWidth="1"/>
          {/* Screen Shine */}
          <path d="M10 12L24 12L10 24Z" fill="white" opacity="0.15"/>
          {/* Monitor Stand */}
          <path d="M16 28L14 34H24L22 28Z" fill="#bebaae" stroke="#4a4940" strokeWidth="2.5"/>
          {/* PC Tower */}
          <rect x="34" y="12" width="8" height="22" rx="1" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5"/>
          {/* PC Tower details */}
          <rect x="36" y="16" width="4" height="2" fill="#555"/>
          <rect x="36" y="20" width="4" height="2" fill="#555"/>
          <circle cx="38" cy="30" r="1.5" fill="#39ff14"/>
        </svg>
      ),
      action: "scroll",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue retro blocky background */}
          <rect x="6" y="6" width="36" height="36" rx="6" fill="#0077b5" stroke="#004b75" strokeWidth="2.5"/>
          {/* Reflection */}
          <path d="M7 7h34v10H7z" fill="white" opacity="0.1" />
          {/* Letter 'i' */}
          <rect x="13" y="18" width="6" height="18" fill="white"/>
          <circle cx="16" cy="12" r="3.5" fill="white"/>
          {/* Letter 'n' */}
          <path d="M22 18h6v3c1.5-2 3.5-3.5 6-3.5 5 0 7 3.5 7 8v10.5h-6V26.5c0-2.5-.5-4.5-3.5-4.5s-4 2-4 4.5V36h-6V18z" fill="white"/>
        </svg>
      ),
      action: "url",
      url: "https://linkedin.com",
    },
    {
      id: "github",
      label: "GitHub",
      icon: (
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Round dark grey body */}
          <circle cx="24" cy="24" r="18" fill="#24292e" stroke="#1b1f23" strokeWidth="2.5"/>
          {/* Octocat head shape */}
          <path d="M24 10c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.4c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.6-2-1.6-2-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.2 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.3-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.4 1.1-.3 2.3-.5 3.5-.5s2.4.2 3.5.5c2.7-1.8 3.9-1.4 3.9-1.4.8 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4.9 1.2.9 2.5v3.7c0 .4.3.8 1 .7C34 35.4 38 30.2 38 24c0-7.7-6.3-14-14-14z" fill="white"/>
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
          {/* Main sheet */}
          <path d="M10 6h20l8 8v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="white" stroke="#4a4940" strokeWidth="2.5"/>
          {/* Folded corner */}
          <path d="M30 6v8h8" fill="#dfded4" stroke="#4a4940" strokeWidth="2.5"/>
          {/* Lines on page */}
          <line x1="14" y1="18" x2="34" y2="18" stroke="#3b82f6" strokeWidth="2.5"/>
          <line x1="14" y1="24" x2="34" y2="24" stroke="#555" strokeWidth="2"/>
          <line x1="14" y1="30" x2="34" y2="30" stroke="#555" strokeWidth="2"/>
          <line x1="14" y1="36" x2="26" y2="36" stroke="#555" strokeWidth="2"/>
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
          {/* Red background container */}
          <rect x="4" y="10" width="40" height="28" rx="7" fill="#ff0000" stroke="#b30000" strokeWidth="2.5"/>
          {/* Highlight gloss */}
          <path d="M5 11h38v8H5z" fill="white" opacity="0.15" />
          {/* Play triangle */}
          <path d="M20 18l11 6-11 6V18z" fill="white"/>
        </svg>
      ),
      action: "url",
      url: "https://youtube.com",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed left-6 top-1/2 z-30 w-[96px] py-5 bg-[#7b9ebd] border-[3px] border-[#002c91] rounded-xl flex flex-col gap-5.5 items-center select-none font-sans xp-desktop-island"
      style={{
        "--translate-x": isOpen ? "0px" : "-120px",
        boxShadow: isOpen 
          ? "0 10px 30px -5px rgba(0, 0, 0, 0.45), inset 1.5px 1.5px 0px #ffffff" 
          : "none",
      }}
    >
      {/* Toggle Tab Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-[16px] h-[36px] bg-[#7b9ebd] border-[3px] border-l-0 border-[#002c91] rounded-r-md flex items-center justify-center text-white cursor-pointer select-none hover:bg-[#688aab] active:brightness-95 text-[9px] font-bold"
        style={{
          boxShadow: "3px 3px 6px rgba(0,0,0,0.15)",
        }}
        title={isOpen ? "Hide shortcuts" : "Show shortcuts"}
      >
        {isOpen ? "◀" : "▶"}
      </button>

      {iconsList.map((item) => {
        const isSelected = selectedIcon === item.id;
        return (
          <div
            key={item.id}
            onClick={() => handleIconClick(item.id)}
            onDoubleClick={() => handleIconDoubleClick(item.id, item.action)}
            className={`flex flex-col items-center justify-center p-1.5 cursor-pointer rounded border transition-all duration-100 ${
              isSelected
                ? "bg-[#0b61e2]/25 border-dashed border-[#0b61e2] text-white"
                : "border-transparent text-slate-100 hover:bg-white/10"
            }`}
            title="Double-click to open"
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

      {/* Recycle Bin Icon */}
      <div
        onClick={() => handleIconClick("recycle-bin")}
        onDoubleClick={() => handleIconDoubleClick("recycle-bin", "bin")}
        className={`flex flex-col items-center justify-center p-1.5 cursor-pointer rounded border transition-all duration-100 ${
          selectedIcon === "recycle-bin"
            ? "bg-[#0b61e2]/25 border-dashed border-[#0b61e2] text-white"
            : "border-transparent text-slate-100 hover:bg-white/10"
        }`}
        title="Double-click to empty"
      >
        <div className="relative">
          <svg
            width="38"
            height="38"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12h28v28a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V12z"
              fill={isBinFull ? "#d2e4f0" : "#ececec"}
              stroke="#4a4940"
              strokeWidth="2.5"
            />
            <path d="M6 12h36" stroke="#4a4940" strokeWidth="3.5" strokeLinecap="round" />
            <path
              d="M18 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"
              stroke="#4a4940"
              strokeWidth="2.5"
            />
            {isBinFull && (
              <>
                <circle cx="20" cy="20" r="3" fill="#888" />
                <circle cx="28" cy="22" r="4" fill="#aaa" />
                <circle cx="23" cy="26" r="3.5" fill="#bbb" />
                <circle cx="16" cy="24" r="2.5" fill="#777" />
                <path d="M12 16l4 2-1 3-3-1v-4z" fill="#999" />
                <path d="M36 15l-3 4 2 2 2-3v-3z" fill="#999" />
              </>
            )}
            <path
              d="M20 34l4-4 4 4m-4-4v8"
              stroke="#4a90e2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span
          className={`text-[11px] mt-1 text-center font-medium leading-tight select-none px-1 rounded-sm ${
            selectedIcon === "recycle-bin"
              ? "bg-[#0b61e2] text-white"
              : "text-shadow-desktop text-white"
          }`}
          style={{
            textShadow: selectedIcon === "recycle-bin" ? "none" : "1px 1px 2px rgba(0,0,0,0.8)",
            wordBreak: "break-word",
          }}
        >
          Recycle Bin {isBinFull ? "(Full)" : "(Empty)"}
        </span>
      </div>

      {/* Retro XP Dialog Box Modal */}
      {showBinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="xp-window-bevel bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none text-slate-900 overflow-hidden"
            style={{ width: "320px" }}
          >
            {/* Title Bar */}
            <div className="xp-title-bar-gradient px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none">
              <span>Confirm File Delete</span>
              <button
                onClick={() => setShowBinModal(false)}
                className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white hover:brightness-110 active:brightness-90 select-none p-0 cursor-pointer"
              >
                X
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-4 flex gap-4 items-start bg-[#ece9d8]">
              <div className="w-10 h-10 rounded-full border border-amber-500 bg-amber-100 flex items-center justify-center text-amber-500 font-bold text-xl select-none flex-shrink-0">
                !
              </div>
              <div className="text-xs text-left leading-relaxed">
                Are you sure you want to empty the Recycle Bin and permanently delete all items in it?
              </div>
            </div>

            {/* Dialog Buttons */}
            <div className="bg-[#ece9d8] p-3 flex justify-end gap-2 border-t border-white">
              <button
                onClick={handleEmptyBin}
                className="xp-btn px-4 py-1 text-xs min-w-[75px] font-semibold"
              >
                Yes
              </button>
              <button
                onClick={() => setShowBinModal(false)}
                className="xp-btn px-4 py-1 text-xs min-w-[75px] font-semibold"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopIcons;
