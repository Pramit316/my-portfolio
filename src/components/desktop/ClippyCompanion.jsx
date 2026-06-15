import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const ClippyCompanion = () => {
  const [showBubble, setShowBubble] = useState(true);
  const [menuMode, setMenuMode] = useState("main");
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [clippyDisabled, setClippyDisabled] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    "It looks like you're exploring Pramit's portfolio! Would you like some assistance?"
  );

  // Window dimensions for drag bounds
  const [windowSize, setWindowSize] = useState({
    w: typeof window !== "undefined" ? window.innerWidth : 1200,
    h: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const onResize = () =>
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Listen for re-enable event from taskbar tray
  useEffect(() => {
    const handler = () => setClippyDisabled(false);
    window.addEventListener("clippy-reenable", handler);
    return () => window.removeEventListener("clippy-reenable", handler);
  }, []);

  const clippyTips = [
    "You can drag me anywhere on the screen — even off the edges!",
    "Single-click the My Computer icon inside the monitor to view Pramit's tech specs & socials.",
    "Click the monitor's power button in the bottom bezel to turn it on or off.",
    "Click the start button in the monitor's taskbar to toggle the Project Explorer.",
    "Use the left/right arrows on the monitor casing to browse projects sequentially.",
    "The clock in the bottom right of the monitor display is synced to your computer time!",
    "Try dragging me to a corner if I'm blocking your view. I'll stay put!",
    "You can hide my speech bubble and bring it back by clicking on me.",
  ];

  const handleAction = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: targetId === "hero" ? 0 : offsetPosition,
        behavior: "smooth",
      });

      setStatusMessage(
        `Navigated to ${
          targetId === "hero"
            ? "Home"
            : targetId.charAt(0).toUpperCase() + targetId.slice(1)
        }! Need anything else?`
      );
      setMenuMode("main");
    }
  };

  const handleSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audio = new Audio(
        "https://www.soundjay.com/buttons/sounds/button-3.mp3"
      );
      audio.play().catch(() => {});
    } catch {
      // Silently ignore audio errors
    }
  }, [soundEnabled]);

  const toggleBubble = () => {
    handleSound();
    setShowBubble(!showBubble);
    if (!showBubble) setMenuMode("main");
  };

  // Allow dragging almost entirely off-screen (leave 20px visible)
  const clippy_w = 80;
  const clippy_h = 160;
  const edge = 20;
  const dragConstraints = {
    left: -(windowSize.w - edge),
    right: windowSize.w - edge,
    top: -(windowSize.h - edge),
    bottom: windowSize.h - edge,
  };

  if (clippyDisabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 select-none font-sans">
      <motion.div
        drag
        dragConstraints={dragConstraints}
        dragMomentum={false}
        dragElastic={0}
        initial={{ x: windowSize.w - 220, y: windowSize.h - 260 }}
        className="absolute pointer-events-auto flex flex-col items-center cursor-grab active:cursor-grabbing w-[80px]"
        style={{ touchAction: "none" }}
      >
        {/* XP Dialog Speech Bubble (positioned absolutely so height changes do not shift Clippy) */}
        {showBubble && (
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-auto"
            style={{ width: 240 }}
          >
            {/* XP Dialog Window */}
            <div
              className="bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden"
              style={{
                boxShadow:
                  "2px 2px 8px rgba(0, 0, 0, 0.35), inset 1px 1px 0 #fff",
              }}
            >
              {/* XP Title Bar */}
              <div className="xp-title-bar-gradient px-1.5 py-1 flex items-center justify-between text-white font-bold text-[10px] select-none">
                <div className="flex items-center gap-1">
                  <span className="text-[12px]">📎</span>
                  <span className="tracking-wide">Office Assistant</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBubble(false);
                  }}
                  className="w-[16px] h-[16px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[8px] text-white cursor-pointer hover:brightness-110 p-0"
                  style={{ borderRadius: "3px" }}
                  title="Close"
                >
                  X
                </button>
              </div>

              {/* Dialog Body */}
              <div className="p-3 flex flex-col gap-2 border-t border-white shadow-[inset_1px_1px_0_#fff] text-[#333333]">
                {/* ─── MAIN MENU ─── */}
                {menuMode === "main" && (
                  <>
                    <p className="font-semibold text-xs leading-tight text-[#1a1a1a]">
                      {statusMessage}
                    </p>
                    <div className="flex flex-col gap-1 text-[11px] mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setMenuMode("tips");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        <span>💡</span> 1. Tips
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setMenuMode("shortcuts");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        <span>🔗</span> 2. Shortcuts
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setMenuMode("dismiss");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        <span>❌</span> 3. Don&apos;t show this again
                      </button>
                    </div>
                  </>
                )}

                {/* ─── TIPS SUB-MENU ─── */}
                {menuMode === "tips" && (
                  <>
                    <div className="bg-white border border-[#7f9db9] rounded-sm p-2 shadow-inner">
                      <p className="font-bold text-[10px] text-[#002c91] mb-1">
                        💡 Tip {currentTipIndex + 1} of {clippyTips.length}:
                      </p>
                      <p className="text-[11px] text-[#333] leading-relaxed font-medium">
                        &ldquo;{clippyTips[currentTipIndex]}&rdquo;
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 text-[11px] mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setCurrentTipIndex(
                            (prev) => (prev + 1) % clippyTips.length
                          );
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        👉 Next Tip
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setCurrentTipIndex((prev) =>
                            prev === 0 ? clippyTips.length - 1 : prev - 1
                          );
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        👈 Previous Tip
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setCurrentTipIndex(
                            Math.floor(Math.random() * clippyTips.length)
                          );
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        🎲 Random Tip
                      </button>
                      <div className="border-t border-[#d2cfc2] mt-1 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSound();
                            setMenuMode("main");
                          }}
                          className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-gray-500 font-bold transition-colors w-full"
                        >
                          ◀ Back to Main Menu
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ─── SHORTCUTS SUB-MENU ─── */}
                {menuMode === "shortcuts" && (
                  <>
                    <p className="font-semibold text-xs leading-tight text-[#1a1a1a]">
                      Where would you like to navigate?
                    </p>
                    <div className="flex flex-col gap-0.5 text-[11px] mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          handleAction("hero");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        🏠 Go to Home
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          handleAction("project");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        📁 View Projects
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          handleAction("journey");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        🚀 Check Journey
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          handleAction("contact");
                        }}
                        className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        ✉️ Send Message
                      </button>
                      <div className="border-t border-[#d2cfc2] mt-1 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSound();
                            setMenuMode("main");
                          }}
                          className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-gray-500 font-bold transition-colors w-full"
                        >
                          ◀ Back to Main Menu
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ─── DON'T SHOW THIS AGAIN SUB-MENU ─── */}
                {menuMode === "dismiss" && (
                  <>
                    <p className="font-semibold text-xs leading-tight text-[#1a1a1a]">
                      How would you like to configure me?
                    </p>
                    <div className="flex flex-col gap-0.5 text-[11px] mt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setShowBubble(false);
                          setStatusMessage(
                            "Click me anytime to see this menu again!"
                          );
                        }}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        🔇 Hide speech bubble
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSound();
                          setClippyDisabled(true);
                          // Dispatch event so taskbar tray can show restore icon
                          window.dispatchEvent(
                            new CustomEvent("clippy-disabled")
                          );
                        }}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        🚫 Disable Clippy companion
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSoundEnabled(!soundEnabled);
                          // Play a confirmation sound if enabling
                          if (!soundEnabled) {
                            try {
                              const audio = new Audio(
                                "https://www.soundjay.com/buttons/sounds/button-3.mp3"
                              );
                              audio.play().catch(() => {});
                            } catch {
                              // ignore
                            }
                          }
                        }}
                        className="flex items-center gap-1.5 px-2 py-1.5 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-[#002c91] font-bold transition-colors"
                      >
                        {soundEnabled ? "🔊" : "🔇"} Sound Effects:{" "}
                        {soundEnabled ? "ON" : "OFF"}
                      </button>
                      <div className="border-t border-[#d2cfc2] mt-1 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSound();
                            setMenuMode("main");
                          }}
                          className="flex items-center gap-1.5 px-2 py-1 text-left cursor-pointer rounded-sm hover:bg-[#316ac5] hover:text-white text-gray-500 font-bold transition-colors w-full"
                        >
                          ◀ Back to Main Menu
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Bubble Tail (pointing down to Clippy) */}
            <div className="flex justify-center">
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "10px solid #0054e3",
                }}
              />
            </div>
            <div className="flex justify-center -mt-[2px]">
              <div
                className="w-0 h-0"
                style={{
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: "8px solid #ece9d8",
                }}
              />
            </div>
          </div>
        )}

        {/* Clippy Body & Draggable Area */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={toggleBubble}
        >
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
            <circle
              cx="42"
              cy="55"
              r="11"
              fill="white"
              stroke="black"
              strokeWidth="1.5"
            />
            <circle
              cx="62"
              cy="53"
              r="11"
              fill="white"
              stroke="black"
              strokeWidth="1.5"
            />

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
