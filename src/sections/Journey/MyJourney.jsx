import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

// Icons
import { FaPencilAlt, FaBookOpen, FaUnity, FaGuitar } from "react-icons/fa";
import { SiGamebanana, SiKotlin } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { IoIosBasketball, IoMdFootball } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbMathIntegralX, TbMathIntegrals } from "react-icons/tb";
import { CiCalculator1 } from "react-icons/ci";
import { FaVirusCovid } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import {
  TbCircuitDiode,
  TbCircuitSwitchOpen,
  TbCircuitGround,
  TbCircuitCapacitorPolarized,
  TbCircuitCell,
} from "react-icons/tb";
import { PiCircuitry } from "react-icons/pi";
import { GiMicrochip, GiGraduateCap } from "react-icons/gi";
import { FiYoutube } from "react-icons/fi";
import { FaFlutter, FaReact } from "react-icons/fa6";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// ── Retro XP Decorative Components ──────────────────────────────────────────

/** Tiny Windows XP–style error / info dialog bubble */
const XpDialog = ({ title, message, style, type = "error" }) => {
  const iconColor = type === "error" ? "#e00" : type === "info" ? "#0078d4" : "#e8a000";
  const iconChar = type === "error" ? "✕" : type === "info" ? "ℹ" : "⚠";
  return (
    <div
      className="absolute z-20 select-none"
      style={{ width: 220, ...style }}
    >
      <div
        style={{
          border: "2px solid #0054e3",
          borderRadius: "4px 4px 4px 4px",
          boxShadow: "2px 2px 0 #000, inset 1px 1px 0 #fff",
          background: "#ece9d8",
          fontFamily: "Tahoma, sans-serif",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: "linear-gradient(to right, #0058e6 0%, #3a93ff 30%, #0055d4 100%)",
            padding: "3px 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "2px 2px 0 0",
          }}
        >
          <span style={{ color: "#fff", fontSize: 11, fontWeight: "bold", letterSpacing: 0.3 }}>
            {title}
          </span>
          <span
            style={{
              width: 16, height: 16, background: "linear-gradient(135deg,#e75436,#891300)",
              border: "1px solid #701602", borderRadius: 2, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 9, fontWeight: "bold", cursor: "default",
            }}
          >✕</span>
        </div>
        {/* Body */}
        <div style={{ padding: "10px 10px 8px", display: "flex", gap: 8, alignItems: "flex-start" }}>
          <span style={{ fontSize: 22, color: iconColor, lineHeight: 1 }}>{iconChar}</span>
          <p style={{ margin: 0, fontSize: 11, color: "#1a1a1a", lineHeight: 1.4 }}>{message}</p>
        </div>
        {/* OK Button */}
        <div style={{ padding: "4px 10px 8px", display: "flex", justifyContent: "center" }}>
          <button
            style={{
              background: "linear-gradient(to bottom,#fff 0%,#ece9d8 100%)",
              border: "1px solid #707070",
              borderRadius: 3, padding: "2px 20px",
              fontSize: 11, fontFamily: "Tahoma,sans-serif", cursor: "default",
              boxShadow: "inset -1px -1px 1px rgba(0,0,0,0.15)",
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

/** Retro XP-style progress bar */
const XpProgressBar = ({ label, value, style }) => (
  <div
    className="absolute z-20 select-none"
    style={{ width: 200, fontFamily: "Tahoma, sans-serif", ...style }}
  >
    <div
      style={{
        background: "#ece9d8", border: "2px solid #0054e3",
        borderRadius: 3, padding: "8px 10px",
        boxShadow: "2px 2px 0 #000, inset 1px 1px 0 #fff",
      }}
    >
      <div
        style={{
          background: "linear-gradient(to right,#0058e6,#3a93ff,#0055d4)",
          padding: "2px 6px", marginBottom: 6, borderRadius: "1px 1px 0 0",
        }}
      >
        <span style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>
          {label}
        </span>
      </div>
      <div
        style={{
          background: "#fff", border: "1px inset #7f9db9",
          height: 16, borderRadius: 1, overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`, height: "100%",
            background: "linear-gradient(to bottom, #7fb7f5 0%, #0053e1 50%, #0040b0 100%)",
            backgroundSize: "20px 100%",
          }}
        />
      </div>
      <div style={{ fontSize: 10, color: "#333", marginTop: 4 }}>
        Loading… {value}%
      </div>
    </div>
  </div>
);

/** Retro floppy disk SVG icon */
const FloppyDisk = ({ style, color = "#0054e3" }) => (
  <div className="absolute z-20 select-none opacity-70 hover:opacity-100 transition-opacity" style={style}>
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="42" height="42" rx="3" fill={color} stroke="#fff" strokeWidth="1.5"/>
      <rect x="8" y="2" width="24" height="16" rx="1" fill="#cce4ff" stroke="#fff" strokeWidth="1"/>
      <rect x="14" y="4" width="8" height="12" rx="0.5" fill="#fff" opacity="0.6"/>
      <rect x="6" y="22" width="34" height="18" rx="1" fill="#e8f2ff" stroke="#fff" strokeWidth="0.5"/>
      <rect x="10" y="25" width="26" height="3" rx="0.5" fill="#aac8e8"/>
      <rect x="10" y="30" width="18" height="3" rx="0.5" fill="#aac8e8"/>
    </svg>
  </div>
);

/** Retro pixel cursor decoration */
const PixelCursor = ({ style }) => (
  <div className="absolute z-20 select-none opacity-60" style={style}>
    <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
      <polygon points="2,2 2,22 7,17 11,26 13,25 9,16 16,16" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  </div>
);

/** XP Tooltip */
const XpTooltip = ({ text, style }) => (
  <div
    className="absolute z-20 select-none"
    style={{
      background: "#ffffcc",
      border: "1px solid #000",
      padding: "3px 7px",
      fontSize: 11,
      fontFamily: "Tahoma, sans-serif",
      color: "#000",
      boxShadow: "1px 1px 0 #888",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {text}
  </div>
);

/** Retro folder icon */
const FolderIcon = ({ label, style, color = "#f0c040" }) => (
  <div className="absolute z-20 select-none flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-default" style={style}>
    <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
      <path d="M2 10 Q2 6 6 6 L20 6 L24 10 H46 Q50 10 50 14 V38 Q50 42 46 42 H6 Q2 42 2 38 Z" fill={color} stroke="#c8960a" strokeWidth="1.2"/>
      <path d="M2 14 H50 V38 Q50 42 46 42 H6 Q2 42 2 38 Z" fill="#f5d060" stroke="#c8960a" strokeWidth="1"/>
    </svg>
    <span style={{ fontSize: 10, fontFamily: "Tahoma,sans-serif", color: "#fff", textShadow: "1px 1px 2px #000", textAlign: "center", maxWidth: 70, lineHeight: 1.2 }}>
      {label}
    </span>
  </div>
);

/** Scanline overlay strip for CRT feel */
const ScanlineStrip = ({ style }) => (
  <div
    className="absolute z-10 pointer-events-none"
    style={{
      width: 160,
      height: 80,
      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 2,
      opacity: 0.55,
      ...style,
    }}
  />
);

const MyJourney = () => {
  const containerRef = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef3 = useRef(null);
  const pathRef4 = useRef(null);
  const pathRef5 = useRef(null);
  const pathRef6 = useRef(null);
  const pathRef7 = useRef(null);
  const pathRef8 = useRef(null);
  const pathRef9 = useRef(null);

  const stroke1 = useMotionValue(0);
  const stroke2 = useMotionValue(0);
  const stroke3 = useMotionValue(0);
  const stroke4 = useMotionValue(0);
  const stroke5 = useMotionValue(0);
  const stroke6 = useMotionValue(0);
  const stroke7 = useMotionValue(0);
  const stroke8 = useMotionValue(0);
  const stroke9 = useMotionValue(0);

  const pathSegments = [
    {
      ref: pathRef1,
      stroke: stroke1,
      triggerStart: 0.0,
      drawDuration: 0.18,
      reverse: false,
      name: "Main Spine Top",
    },
    
    {
      ref: pathRef3,
      stroke: stroke3,
      triggerStart: 0.025,
      drawDuration: 0.05,
      reverse: false,
      name: "Upper Left Branch",
    },
    {
      ref: pathRef4,
      stroke: stroke4,
      triggerStart: 0.13,
      drawDuration: 0.03,
      reverse: false,
      name: "Upper Right Branch",
    },
    {
      ref: pathRef5,
      stroke: stroke5,
      triggerStart: 0.16,
      drawDuration: 0.02,
      reverse: false,
      name: "Middle Right Branch",
    },
    {
      ref: pathRef6,
      stroke: stroke6,
      triggerStart: 0.06,
      drawDuration: 0.03,
      reverse: true,
      name: "School Branch - Left Side",
    },
    {
      ref: pathRef7,
      stroke: stroke7,
      triggerStart: 0.18,
      drawDuration: 0.12,
      reverse: false,
      name: "Main Spine Bottom",
    },
    {
      ref: pathRef8,
      stroke: stroke8,
      triggerStart: 0.06,
      drawDuration: 0.03,
      reverse: false,
      name: "School Branch - Right Side",
    },
    {
      ref: pathRef2,
      stroke: stroke2,
      triggerStart: 0.3,
      drawDuration: 0.014,
      reverse: false,
      name: "Bottom Swiggly - Left Side",
    },
    {
      ref: pathRef9,
      stroke: stroke9,
      triggerStart: 0.3,
      drawDuration: 0.014,
      reverse: false,
      name: "Bottom Swiggly - Right Side",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize paths
    pathSegments.forEach(({ ref, stroke }) => {
      const path = ref.current;
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length} ${length}`;
        stroke.set(length);
        path.dataset.length = length;
      }
    });

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const SCROLL_MULTIPLIER = 3;
      const START_OFFSET_FACTOR = 0.3;

      const totalTravel = rect.height * SCROLL_MULTIPLIER;
      const startOffset = viewportHeight * START_OFFSET_FACTOR;
      const distance = startOffset - rect.top;

      let linearProgress = totalTravel <= 0 ? 0 : distance / totalTravel;
      linearProgress = clamp(linearProgress, 0, 1);

      pathSegments.forEach(({ ref, stroke, triggerStart, drawDuration, reverse }) => {
        const path = ref.current;
        if (!path) return;

        const length = parseFloat(path.dataset.length);
        if (isNaN(length)) return;

        if (linearProgress >= triggerStart) {
          const progressInZone = linearProgress - triggerStart;
          let localProgress = progressInZone / drawDuration;
          localProgress = clamp(localProgress, 0, 1);

          if (reverse) {
            const offset = length * (1 - localProgress);
            stroke.set(offset);
          } else {
            const draw = length * localProgress;
            const offset = length - draw;
            stroke.set(offset);
          }
        } else {
          stroke.set(length);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="journey"
      ref={containerRef}
      className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 hidden lg:block min-h-[4600px] relative"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 text-6xl font-bold p-20 text-center tracking-wider"
      >
        My Journey
      </motion.h1>

      <div
        className="relative mx-auto"
        style={{ width: "100%", maxWidth: 1024, height: 4100 }}
      >
        <svg
          viewBox="0 0 1234 4306"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(242,255,201,0.5)] z-0"
        >
          {/* 1. Main Spine – TOP */}
          <motion.path
            ref={pathRef1}
            d="M675.2 9.5C675.2 9.5 664.5 2333.5 664.5 2448"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke1}
          />

          {/* 2. Main Spine – BOTTOM */}
          <motion.path
            ref={pathRef7}
            d="M664.514 2448.5C664.514 2652.5 221.626 2625.8 150.514 2865C79.4012 3104.2 977.278 3132.35 950.936 3380.5C925.231 3622.64 355.856 3445.81 287.436 3679.5C219.015 3913.19 677.013 3919.5 677.013 4011.5V4102"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke7}
          />

          {/* 3. Bottom Swiggly Path - Left Side */}
          <motion.path
            ref={pathRef2}
            d="M673 4105C572.933 4125.71 392 4134.5 327.5 4168C263 4201.5 297 4296 297 4296"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke2}
          />

          {/* 4. Bottom Swiggly Path - Right Side */}
          <motion.path
            ref={pathRef9}
            d="M673 4105C881 4114 1019 4131.5 1058 4168C1098.21 4205.63 1086 4296 1086 4296"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke9}
          />

          {/* 5. Upper Left Branch */}
          <motion.path
            ref={pathRef3}
            d="M670.201 316C616.968 375.138 576.783 402.968 502.701 432C419.283 464.691 261.201 418.5 215.201 485.5C151.32 578.543 177.001 630 174.828 734.5"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke3}
          />

          {/* 6. Upper Right Branch */}
          <motion.path
            ref={pathRef4}
            d="M673.5 1772C727.378 1816.22 763.03 1836.58 828.5 1860.5C907.118 1889.22 988.695 1852.99 1030.5 1925.5C1047.79 1955.49 1047.5 1980.5 1047.5 1980.5"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke4}
          />

          {/* 7. Middle Right Branch */}
          <motion.path
            ref={pathRef5}
            d="M1048.13 2191C1048.13 2191 1044.2 2236.09 1056.03 2254.01C1088.24 2302.77 1194.7 2229.07 1216.56 2282.86C1225.43 2304.68 1224.47 2336 1224.47 2336"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke5}
          />

          {/* 8. School Branch - Left Side (REVERSED) */}
          <motion.path
            ref={pathRef6}
            d="M182 1045C158.417 1069.53 102.816 1107.19 71.958 1121.57C55.0559 1129.44 54.8342 1128.41 37.3679 1135.25C19.9017 1142.09 12.9975 1163.81 10.3124 1184.84C8.48565 1199.15 10.3124 1230.33 10.3124 1230.33M181.4 1041.61V965"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke6}
          />

          {/* 9. School Branch - Right Side */}
          <motion.path
            ref={pathRef8}
            d="M182 1045C205.717 1067 282.377 1108.61 312.033 1121.57C333.952 1131.14 342.856 1140.04 342.856 1140.04C354.5 1152.35 354.5 1184.84 354.5 1184.84V1230.33"
            stroke="url(#gradient1)"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke8}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#FACC15" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#F472B6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── SCHOOL ERA ─────────────────────────────────────────────── */}
        <div
          className="absolute z-10 text-[110px] -rotate-15 italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 p-8"
          style={{ top: 290, left: "26%" }}
        >
          School
        </div>

        <FaPencilAlt
          className="absolute -rotate-10 text-amber-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-amber-300 cursor-pointer drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]"
          style={{ top: 530, left: "1%", fontSize: 68 }}
        />

        {/* XP Tooltip near pencil */}
        <XpTooltip text="📝 Homework mode: ON" style={{ top: 610, left: "0%" }} />

        <FaBookOpen
          className="absolute -rotate-10 text-blue-400 transition-all duration-300 hover:scale-110 hover:-rotate-15 hover:text-blue-300 cursor-pointer drop-shadow-[0_0_10px_rgba(96,165,250,0.7)]"
          style={{ top: 670, left: "40%", fontSize: 82 }}
        />

        {/* Floppy disk near school */}
        <FloppyDisk style={{ top: 770, left: "8%" }} color="#3a7bd5" />

        {/* XP Error dialog – school era */}
        <XpDialog
          title="System Alert"
          message="Homework not submitted. Please try again."
          type="error"
          style={{ top: 820, left: "55%" }}
        />

        <SiGamebanana
          className="absolute -rotate-10 text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-yellow-300 cursor-pointer drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]"
          style={{ top: 1390, left: "28%", fontSize: 72 }}
        />

        <FaGuitar
          className="absolute -rotate-10 text-rose-400 transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:text-rose-300 cursor-pointer drop-shadow-[0_0_10px_rgba(251,113,133,0.7)]"
          style={{ top: 1130, left: "82%", fontSize: 84 }}
        />

        <IoIosBasketball
          className="absolute -rotate-10 text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-orange-400 cursor-pointer drop-shadow-[0_0_10px_rgba(249,115,22,0.7)]"
          style={{ top: 860, left: "68%", fontSize: 72 }}
        />

        <IoMdFootball
          className="absolute -rotate-10 text-slate-300 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-white cursor-pointer drop-shadow-[0_0_10px_rgba(203,213,225,0.7)]"
          style={{ top: 1410, left: "68%", fontSize: 60 }}
        />

        {/* Folder icon for school files */}
        <FolderIcon label="My Homework" style={{ top: 970, left: "3%" }} />

        {/* Pixel cursor near folder */}
        <PixelCursor style={{ top: 1000, left: "11%" }} />

        {/* ── GEMS ERA ──────────────────────────────────────────────── */}
        <div
          className="absolute z-10 text-[110px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 px-8"
          style={{ top: 890, left: "1%" }}
        >
          GEMS
        </div>

        {/* Scanline strip – CRT vibe near GEMS */}
        <ScanlineStrip style={{ top: 1060, left: "18%", opacity: 0.4 }} />

        <MdOutlineScience
          className="absolute -rotate-15 text-green-400 transition-all duration-300 hover:scale-110 hover:-rotate-5 hover:text-green-300 cursor-pointer drop-shadow-[0_0_10px_rgba(74,222,128,0.7)]"
          style={{ top: 1820, left: "78%", fontSize: 74 }}
        />

        <IoGameControllerOutline
          className="absolute -rotate-15 text-purple-400 transition-all duration-300 hover:scale-110 hover:-rotate-20 hover:text-purple-300 cursor-pointer drop-shadow-[0_0_10px_rgba(192,132,252,0.7)]"
          style={{ top: 1960, left: "18%", fontSize: 72 }}
        />

        {/* XP info dialog near game controller */}
        <XpDialog
          title="Game Tips"
          message="Press ↑↑↓↓←→←→BA to unlock secret mode!"
          type="info"
          style={{ top: 2060, left: "3%" }}
        />

        {/* ── UNITY / PIXEL ART ERA ──────────────────────────────────── */}
        <FaUnity
          className="absolute -rotate-10 text-slate-100 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-white cursor-pointer drop-shadow-[0_0_12px_rgba(241,245,249,0.8)]"
          style={{ top: 1395, left: "0%", fontSize: 72 }}
        />

        <div
          className="absolute z-10 text-[78px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 p-10"
          style={{ top: 1430, left: "-4%" }}
        >
          Unity
        </div>

        <div
          className="absolute z-10 text-[78px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 p-10"
          style={{ top: 1440, left: "20%" }}
        >
          PixelArt
        </div>

        {/* Floppy disk near Unity – "saving game" */}
        <FloppyDisk style={{ top: 1590, left: "52%" }} color="#a855f7" />

        {/* XP Progress bar – loading level */}
        <XpProgressBar label="Loading Level..." value={67} style={{ top: 1660, left: "55%" }} />

        {/* ── HIGH SCHOOL ERA ──────────────────────────────────────── */}
        <div
          className="absolute z-[1000000] text-[88px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 rotate-15 p-10"
          style={{ top: 1890, left: "60%" }}
        >
          High School
        </div>

        {/* Pixel cursor near High School label */}
        <PixelCursor style={{ top: 1978, left: "59%" }} />

        {/* ── UNIGLOBE / COVID ERA ──────────────────────────────────── */}
        <div
          className="absolute z-10 text-[88px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400"
          style={{ top: 2210, left: "76%" }}
        >
          Uniglobe College
        </div>

        <TbMathIntegralX
          className="absolute -rotate-15 text-cyan-400 transition-all duration-300 hover:scale-110 hover:-rotate-25 hover:text-cyan-300 cursor-pointer drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          style={{ top: 2460, left: "0%", fontSize: 96 }}
        />

        <CiCalculator1
          className="absolute -rotate-15 text-indigo-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-indigo-300 cursor-pointer drop-shadow-[0_0_12px_rgba(129,140,248,0.7)]"
          style={{ top: 2650, left: "28%", fontSize: 96 }}
        />

        <FaVirusCovid
          className="absolute -rotate-15 text-red-500 transition-all duration-300 hover:scale-110 hover:rotate-15 hover:text-red-400 cursor-pointer drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]"
          style={{ top: 2260, left: "28%", fontSize: 96 }}
        />

        {/* XP Warning dialog – covid era */}
        <XpDialog
          title="Warning"
          message="COVID-19 detected. Please stay home and wash your hands."
          type="warning"
          style={{ top: 2390, left: "35%" }}
        />

        {/* Scanline strip near math */}
        <ScanlineStrip style={{ top: 2720, left: "0%", opacity: 0.3, width: 120, height: 60 }} />

        <TbMathIntegrals
          className="absolute -rotate-15 text-teal-400 transition-all duration-300 hover:scale-110 hover:-rotate-5 hover:text-teal-300 cursor-pointer drop-shadow-[0_0_12px_rgba(45,212,191,0.7)]"
          style={{ top: 3310, left: "0%", fontSize: 96 }}
        />

        <FaComputer
          className="absolute text-blue-300 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-blue-200 cursor-pointer drop-shadow-[0_0_12px_rgba(147,197,253,0.7)]"
          style={{ top: 3110, left: "48%", fontSize: 88 }}
        />

        {/* XP tooltip near computer icon */}
        <XpTooltip text="My Computer" style={{ top: 3210, left: "51%" }} />

        <GiGraduateCap
          className="absolute text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-yellow-300 cursor-pointer drop-shadow-[0_0_12px_rgba(250,204,21,0.7)]"
          style={{ top: 3410, left: "78%", fontSize: 88 }}
        />

        {/* ── COLLEGE ERA ──────────────────────────────────────────── */}
        <div
          className="absolute z-10 text-[88px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 -rotate-15 p-2"
          style={{ top: 3760, left: "44%" }}
        >
          College
        </div>

        <TbCircuitDiode
          className="absolute -rotate-15 text-emerald-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-emerald-300 cursor-pointer drop-shadow-[0_0_10px_rgba(52,211,153,0.7)]"
          style={{ top: 3410, left: "30%", fontSize: 52 }}
        />

        <TbCircuitSwitchOpen
          className="absolute text-lime-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-lime-300 cursor-pointer drop-shadow-[0_0_10px_rgba(163,230,53,0.7)]"
          style={{ top: 3510, left: "48%", fontSize: 52 }}
        />

        <TbCircuitGround
          className="absolute text-amber-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-amber-300 cursor-pointer drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]"
          style={{ top: 3630, left: "70%", fontSize: 52 }}
        />

        <TbCircuitCapacitorPolarized
          className="absolute text-sky-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-sky-300 cursor-pointer drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]"
          style={{ top: 3830, left: "80%", fontSize: 52 }}
        />

        <PiCircuitry
          className="absolute rotate-15 text-violet-400 transition-all duration-300 hover:scale-110 hover:rotate-25 hover:text-violet-300 cursor-pointer drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]"
          style={{ top: 3720, left: "18%", fontSize: 72 }}
        />

        <TbCircuitCell
          className="absolute text-fuchsia-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-fuchsia-300 cursor-pointer drop-shadow-[0_0_10px_rgba(232,121,249,0.7)]"
          style={{ top: 4020, left: "60%", fontSize: 52 }}
        />

        <GiMicrochip
          className="absolute text-indigo-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-indigo-300 cursor-pointer drop-shadow-[0_0_12px_rgba(129,140,248,0.7)]"
          style={{ top: 4110, left: "8%", fontSize: 76 }}
        />

        {/* Folder icon for college */}
        <FolderIcon label="Projects" style={{ top: 3580, left: "2%" }} color="#3a7bd5" />

        {/* Floppy near microchip */}
        <FloppyDisk style={{ top: 4210, left: "30%" }} color="#6366f1" />

        {/* Scanline strip near circuit zone */}
        <ScanlineStrip style={{ top: 3470, left: "58%", opacity: 0.35, width: 140, height: 70 }} />

        {/* ── KEC ERA ──────────────────────────────────────────────── */}
        <div
          className="absolute z-10 text-[108px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 -rotate-8 text-center p-4"
          style={{ top: 4110, left: "34%" }}
        >
          Kathmandu Engineering
          <br />
          College
        </div>

        {/* XP info dialog – KEC */}
        <XpDialog
          title="Achievement Unlocked"
          message="Welcome to KEC! Your coding adventure begins now."
          type="info"
          style={{ top: 4270, left: "4%" }}
        />

        {/* Pixel cursor near KEC */}
        <PixelCursor style={{ top: 4310, left: "24%" }} />

        <SiKotlin
          className="absolute text-purple-500 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-purple-400 cursor-pointer drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
          style={{ top: 2690, left: "82%", fontSize: 74 }}
        />

        <div
          className="absolute z-10 text-[108px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          style={{ top: 2650, left: "88%" }}
        >
          Kotlin
        </div>

        <FiYoutube
          className="absolute rotate-15 text-red-500 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-red-400 cursor-pointer drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
          style={{ top: 4310, left: "82%", fontSize: 72 }}
        />

        {/* XP Tooltip near YouTube */}
        <XpTooltip text="📺 Watch tutorials!" style={{ top: 4400, left: "80%" }} />

        {/* ── FLUTTER & REACT ──────────────────────────────────────── */}
        <FaFlutter
          className="absolute text-sky-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-sky-300 cursor-pointer drop-shadow-[0_0_14px_rgba(56,189,248,0.9)]"
          style={{ top: 4830, left: "13%", fontSize: 92 }}
        />

        <div
          className="absolute z-10 text-[108px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 p-[10px]"
          style={{ top: 4788, left: "21%" }}
        >
          Flutter
        </div>

        <FaReact
          className="absolute text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-[360deg] hover:text-cyan-300 cursor-pointer drop-shadow-[0_0_14px_rgba(34,211,238,0.9)]"
          style={{ top: 4830, left: "71%", fontSize: 96 }}
        />

        <div
          className="absolute z-10 text-[108px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 p-[10px]"
          style={{ top: 4788, left: "80%" }}
        >
          React
        </div>

        {/* XP Progress bar at the bottom – "Loading future..." */}
        <XpProgressBar label="Loading future..." value={42} style={{ top: 4950, left: "42%" }} />

        {/* Final floppy disks at very bottom */}
        <FloppyDisk style={{ top: 4960, left: "12%" }} color="#0ea5e9" />
        <FloppyDisk style={{ top: 4960, left: "80%" }} color="#22d3ee" />

      </div>
    </div>
  );
};

export default MyJourney;