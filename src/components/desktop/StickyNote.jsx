import React, { useState } from "react";

const StickyNote = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [tipIndex, setTipIndex] = useState(0);

  const tipsList = [
    "Tip: Double-click the desktop icons on the left side to use the computer!",
    "Tip: Click on the icons on the left side to view my socials!",
    "System Status: Pramit Portfolio OS is running. All developer modules are fully loaded.",
    "Fun Fact: This portfolio theme is inspired by the classic Windows XP Luna desktop!",
    "Tip: The taskbar at the bottom of sections contains real-time navigation shortcuts.",
  ];

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % tipsList.length);
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed right-6 top-24 z-30 xp-btn px-3 py-1 text-[11px] font-bold shadow-md animate-bounce select-none text-[#333333]"
        title="Show Sticky Note"
      >
        📝 Show Note
      </button>
    );
  }

  return (
    <div
      className="fixed right-6 top-24 z-30 w-[200px] bg-[#fffa9e] border border-[#d3cc7a] shadow-lg flex flex-col font-sans select-none text-slate-900 rounded-md overflow-hidden"
      style={{
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.25)",
        transform: "rotate(1deg)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      {/* Note Header / Drag Handle Style */}
      <div className="bg-[#fcf584] border-b border-[#e5dc6b] px-2 py-1 flex items-center justify-between text-[11px] font-bold text-yellow-800">
        <span className="flex items-center gap-1">📌 Desktop Note</span>
        <button
          onClick={() => setIsVisible(false)}
          className="xp-close-button"
          title="Close note"
        >
          X
        </button>
      </div>

      {/* Note Content */}
      <div className="p-3 text-xs text-yellow-950 text-left leading-relaxed flex-1 flex flex-col justify-between min-h-[110px]">
        <p className="font-medium italic select-none">"{tipsList[tipIndex]}"</p>

        <div className="mt-3 flex justify-between items-center text-[10px] text-yellow-800 border-t border-yellow-200/50 pt-2">
          <span>Tip {tipIndex + 1} of {tipsList.length}</span>
          <button
            onClick={handleNextTip}
            className="xp-btn-blue px-2 py-0.5 text-white hover:brightness-110 active:brightness-95 transition-all cursor-pointer font-bold text-[9px] shadow-sm flex items-center gap-0.5"
            style={{ borderRadius: "3px" }}
          >
            Next Tip →
          </button>
        </div>
      </div>

      {/* Sticky Note Pin Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full border border-red-800 opacity-90 shadow-md">
        <div className="w-1.5 h-1.5 bg-red-400 rounded-full ml-0.5 mt-0.5" />
      </div>
    </div>
  );
};

export default StickyNote;
