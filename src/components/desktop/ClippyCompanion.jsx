import React, { useState, useEffect, useRef } from "react";
import { motion, useDragControls } from "framer-motion";

const ClippyCompanion = () => {
  const [showBubble, setShowBubble] = useState(true);
  const [bubbleText, setBubbleText] = useState(
    "It looks like you're exploring Pramit's portfolio! Would you like some assistance?"
  );
  
  const constraintsRef = useRef(null);

  const handleAction = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      // Offset matches AppBar height
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetId === "hero" ? 0 : offsetPosition,
        behavior: "smooth"
      });
      
      setBubbleText(`Navigated to ${targetId === "hero" ? "Home" : targetId.charAt(0).toUpperCase() + targetId.slice(1)}! Need anything else?`);
    }
  };

  const handleSound = () => {
    // Play retro XP balloon/helper sound if possible
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
    audio.play().catch(() => {});
  };

  const toggleBubble = () => {
    handleSound();
    setShowBubble(!showBubble);
  };

  return (
    <div
      ref={constraintsRef}
      className="fixed inset-0 pointer-events-none z-40 select-none font-sans"
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0}
        initial={{ x: window.innerWidth - 220, y: window.innerHeight - 260 }}
        className="absolute pointer-events-auto flex flex-col items-center cursor-grab active:cursor-grabbing w-[180px]"
        style={{ touchAction: "none" }}
      >
        {/* Clippy Speech Bubble */}
        {showBubble && (
          <div
            className="relative bg-[#ffffe1] border border-black p-3 mb-2 rounded-lg text-xs text-slate-800 text-left shadow-md"
            style={{
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              wordBreak: "break-word",
            }}
          >
            {/* Bubble Tail */}
            <div className="absolute bottom-[-8px] right-[40px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black"></div>
            <div className="absolute bottom-[-6px] right-[41px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-[#ffffe1]"></div>

            <p className="font-semibold mb-2 leading-tight text-slate-900">{bubbleText}</p>
            
            <div className="flex flex-col gap-1 text-[11px] text-[#002c91] font-bold">
              <button
                onClick={() => handleAction("project")}
                className="hover:underline text-left cursor-pointer flex items-center gap-1"
              >
                📁 View Projects
              </button>
              <button
                onClick={() => handleAction("journey")}
                className="hover:underline text-left cursor-pointer flex items-center gap-1"
              >
                🚀 Check Journey
              </button>
              <button
                onClick={() => handleAction("contact")}
                className="hover:underline text-left cursor-pointer flex items-center gap-1"
              >
                ✉️ Send Message
              </button>
              <button
                onClick={() => setShowBubble(false)}
                className="text-gray-500 hover:text-red-600 text-left cursor-pointer mt-1 pt-1 border-t border-gray-200"
              >
                ❌ Don't show this again
              </button>
            </div>
          </div>
        )}

        {/* Clippy Body & Draggable Area */}
        <div className="flex flex-col items-center" onClick={toggleBubble}>
          {/* Animated SVG Paperclip */}
          <svg
            width="75"
            height="110"
            viewBox="0 0 100 130"
            className="drop-shadow-lg animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            {/* Paperclip Metal loops */}
            <path
              d="M30 90 V40 A 20 20 0 0 1 70 40 V100 A 25 25 0 0 1 20 100 V60 A 15 15 0 0 1 50 60 V95"
              fill="none"
              stroke="#8e9bb0"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 90 V40 A 20 20 0 0 1 70 40 V100 A 25 25 0 0 1 20 100 V60 A 15 15 0 0 1 50 60 V95"
              fill="none"
              stroke="#d2d9e5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Googly Eyes Background */}
            <circle cx="42" cy="55" r="11" fill="white" stroke="black" strokeWidth="1.5" />
            <circle cx="62" cy="53" r="11" fill="white" stroke="black" strokeWidth="1.5" />

            {/* Pupils (with subtle shift to looking left/at content) */}
            <circle cx="40" cy="56" r="4.5" fill="black" />
            <circle cx="60" cy="54" r="4.5" fill="black" />

            {/* Expressive Eyebrows */}
            <path
              d="M31 42 Q40 37 49 43"
              fill="none"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M55 41 Q63 36 71 40"
              fill="none"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Cute smile */}
            <path
              d="M44 74 Q52 82 60 72"
              fill="none"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[10px] text-white bg-black/40 px-1.5 py-0.5 rounded shadow mt-1">
            Clippy (Drag Me!)
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ClippyCompanion;
