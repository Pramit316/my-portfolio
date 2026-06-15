import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPencilAlt, FaBookOpen, FaUnity, FaGuitar } from "react-icons/fa";
import { FaComputer, FaVirusCovid } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";
import { SiGamebanana, SiKotlin, SiSpringboot, SiAngular } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { IoIosBasketball, IoMdFootball } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbMathIntegralX } from "react-icons/tb";
import { CiCalculator1 } from "react-icons/ci";
import { GiGraduateCap, GiMicrochip } from "react-icons/gi";
import { FiYoutube } from "react-icons/fi";
import { PiCircuitry } from "react-icons/pi";

const JOURNEY_STAGES = [
  {
    era: "Early Years",
    title: "School & Curiosity",
    description:
      "Where it all started — drawing, reading, sports, and games shaped how I learn and build today.",
    icon: FaPencilAlt,
    accent: "from-teal-400 to-cyan-500",
    chips: ["Creativity", "Sports", "Games"],
  },
  {
    era: "School",
    title: "GEMS",
    description:
      "Built foundations in academics while exploring basketball, football, and creative hobbies.",
    icon: FaBookOpen,
    accent: "from-cyan-400 to-blue-500",
    chips: ["GEMS", "Team Sports"],
  },
  {
    era: "Creative Phase",
    title: "Unity & Pixel Art",
    description:
      "Discovered game development through Unity and pixel art — my first taste of building digital worlds.",
    icon: FaUnity,
    accent: "from-blue-400 to-indigo-500",
    chips: ["Unity", "Pixel Art", "GameBanana"],
  },
  {
    era: "High School",
    title: "Uniglobe College",
    description:
      "Science, calculus, and gaming deepened my interest in logic, systems, and problem solving.",
    icon: MdOutlineScience,
    accent: "from-emerald-400 to-teal-500",
    chips: ["Science", "Calculus", "Gaming"],
  },
  {
    era: "Programming",
    title: "Kotlin",
    description:
      "First steps into software — Android development with Kotlin opened the door to mobile engineering.",
    icon: SiKotlin,
    accent: "from-indigo-400 to-blue-500",
    chips: ["Kotlin", "Android"],
  },
  {
    era: "College",
    title: "Kathmandu Engineering College",
    description:
      "Engineering studies — circuits, microchips, and computing turned curiosity into structured skill.",
    icon: GiGraduateCap,
    accent: "from-amber-400 to-orange-500",
    chips: ["Engineering", "Circuits", "Computing"],
  },
  {
    era: "Mobile",
    title: "Flutter",
    description:
      "Cross-platform mobile apps with Flutter — polished UIs, Firebase backends, and real-world deployments.",
    icon: FaFlutter,
    accent: "from-sky-400 to-cyan-500",
    chips: ["Flutter", "Firebase", "Mobile"],
  },
  {
    era: "Backend",
    title: "Java Spring Boot",
    description:
      "REST APIs, security, and scalable server-side architecture with Spring Boot and the Java ecosystem.",
    icon: SiSpringboot,
    accent: "from-green-400 to-emerald-500",
    chips: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    era: "Frontend",
    title: "Angular",
    description:
      "Structured, enterprise-grade web applications with TypeScript, components, and reactive patterns.",
    icon: SiAngular,
    accent: "from-red-400 to-rose-500",
    chips: ["Angular", "TypeScript", "SPA"],
  },
  {
    era: "Today",
    title: "Always Learning",
    description:
      "Still exploring — side projects, tutorials, and new stacks to ship better products.",
    icon: FiYoutube,
    accent: "from-teal-400 to-emerald-500",
    chips: ["Side Projects", "Tutorials", "Growth"],
  },
];

/**
 * Scattered background icons — % positions within the timeline track.
 * Phase 1 (top ~0–32%): school → Unity
 * Phase 2 (~34–52%): Uniglobe → Kotlin
 * Phase 3 (~54%+): college and beyond
 */
/** Opacity — high enough to actually see them */
const bright = (n) => Math.min(0.9, n);

const SCATTERED_LIFE_ICONS = [
  // Phase 1 — School era
  { id: "guitar-1", Icon: FaGuitar, color: "text-rose-700", size: "text-5xl md:text-6xl", rotate: "-rotate-12", top: "3%", left: "3%", delay: "0s", opacity: bright(0.62) },
  { id: "basketball-1", Icon: IoIosBasketball, color: "text-orange-700", size: "text-5xl md:text-6xl", rotate: "rotate-12", top: "6%", left: "83%", delay: "0.8s", opacity: bright(0.58) },
  { id: "football-1", Icon: IoMdFootball, color: "text-slate-700", size: "text-4xl md:text-5xl", rotate: "-rotate-6", top: "14%", left: "30%", delay: "1.2s", opacity: bright(0.52) },
  { id: "guitar-2", Icon: FaGuitar, color: "text-rose-700", size: "text-4xl md:text-5xl", rotate: "rotate-[20deg]", top: "20%", left: "80%", delay: "2s", opacity: bright(0.48) },
  { id: "calculator", Icon: CiCalculator1, color: "text-indigo-800", size: "text-5xl md:text-6xl", rotate: "-rotate-6", top: "20%", left: "3%", delay: "0.6s", opacity: bright(0.55) },
  { id: "banana", Icon: SiGamebanana, color: "text-amber-700", size: "text-4xl md:text-5xl", rotate: "-rotate-6", top: "26%", left: "60%", delay: "0.4s", opacity: bright(0.60) },
  { id: "basketball-2", Icon: IoIosBasketball, color: "text-orange-700", size: "text-4xl md:text-5xl", rotate: "rotate-12", top: "27%", left: "20%", delay: "2.4s", opacity: bright(0.45) },

  // Phase 2 — High school / maths / games
  { id: "controller", Icon: IoGameControllerOutline, color: "text-[#1a4faa]", size: "text-5xl md:text-6xl", rotate: "-rotate-12", top: "35%", left: "3%", delay: "1s", opacity: bright(0.60) },
  { id: "calculus", Icon: TbMathIntegralX, color: "text-[#1a4faa]", size: "text-6xl md:text-7xl", rotate: "rotate-6", top: "38%", left: "85%", delay: "1.8s", opacity: bright(0.58) },
  { id: "calculator-2", Icon: CiCalculator1, color: "text-indigo-800", size: "text-5xl md:text-6xl", rotate: "-rotate-6", top: "42%", left: "58%", delay: "0.6s", opacity: bright(0.55) },
  { id: "corona", Icon: FaVirusCovid, color: "text-red-800", size: "text-5xl md:text-6xl", rotate: "rotate-12", top: "50%", left: "88%", delay: "2.2s", opacity: bright(0.55) },

  // Phase 3 — College / engineering
  { id: "computer-1", Icon: FaComputer, color: "text-blue-800", size: "text-5xl md:text-6xl", rotate: "-rotate-6", top: "56%", left: "5%", delay: "1.4s", opacity: bright(0.58) },
  { id: "microchip-1", Icon: GiMicrochip, color: "text-indigo-800", size: "text-5xl md:text-6xl", rotate: "rotate-12", top: "60%", left: "83%", delay: "0.2s", opacity: bright(0.60) },
  { id: "circuitry-1", Icon: PiCircuitry, color: "text-blue-800", size: "text-5xl md:text-6xl", rotate: "rotate-[15deg]", top: "67%", left: "9%", delay: "2.6s", opacity: bright(0.52) },
  { id: "computer-2", Icon: FaComputer, color: "text-sky-800", size: "text-4xl md:text-5xl", rotate: "rotate-6", top: "72%", left: "82%", delay: "1.1s", opacity: bright(0.48) },
  { id: "microchip-2", Icon: GiMicrochip, color: "text-emerald-800", size: "text-4xl md:text-5xl", rotate: "-rotate-12", top: "78%", left: "4%", delay: "1.9s", opacity: bright(0.50) },
  { id: "circuitry-2", Icon: PiCircuitry, color: "text-teal-800", size: "text-5xl md:text-6xl", rotate: "rotate-6", top: "83%", left: "88%", delay: "0.9s", opacity: bright(0.55) },
  { id: "computer-3", Icon: FaComputer, color: "text-rose-800", size: "text-4xl md:text-5xl", rotate: "-rotate-[8deg]", top: "87%", left: "15%", delay: "2.8s", opacity: bright(0.48) },
];

const SCATTER_STARS = [
  { top: "7%", left: "42%", size: "w-1.5 h-1.5" },
  { top: "12%", left: "58%", size: "w-2 h-2" },
  { top: "19%", left: "48%", size: "w-1.5 h-1.5" },
  { top: "33%", left: "52%", size: "w-1.5 h-1.5" },
  { top: "41%", left: "44%", size: "w-2 h-2" },
  { top: "45%", left: "62%", size: "w-1.5 h-1.5" },
  { top: "55%", left: "50%", size: "w-1.5 h-1.5" },
  { top: "64%", left: "46%", size: "w-2 h-2" },
  { top: "71%", left: "56%", size: "w-1.5 h-1.5" },
  { top: "80%", left: "48%", size: "w-1.5 h-1.5" },
  { top: "84%", left: "54%", size: "w-2 h-2" },
  { top: "15%", left: "35%", size: "w-1.5 h-1.5" },
  { top: "25%", left: "65%", size: "w-1.5 h-1.5" },
  { top: "52%", left: "72%", size: "w-1.5 h-1.5" },
  { top: "62%", left: "28%", size: "w-1.5 h-1.5" },
];

// ── Retro XP Decorative micro-components ─────────────────────────────────────

const XpDialogBubble = ({ title, message, style, type = "error" }) => {
  const iconColor = type === "error" ? "#cc0000" : type === "info" ? "#0058e6" : "#c87800";
  const iconChar = type === "error" ? "✕" : type === "info" ? "ℹ" : "⚠";
  return (
    <div className="absolute z-10 select-none pointer-events-none" style={{ width: 200, ...style }}>
      <div style={{ border: "2px solid #0054e3", borderRadius: 4, boxShadow: "2px 2px 0 #000, inset 1px 1px 0 #fff", background: "#ece9d8", fontFamily: "Tahoma,sans-serif" }}>
        <div style={{ background: "linear-gradient(to right,#0058e6 0%,#3a93ff 30%,#0055d4 100%)", padding: "3px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "2px 2px 0 0" }}>
          <span style={{ color: "#fff", fontSize: 10, fontWeight: "bold" }}>{title}</span>
          <span style={{ width: 14, height: 14, background: "linear-gradient(135deg,#e75436,#891300)", border: "1px solid #701602", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 8, fontWeight: "bold" }}>✕</span>
        </div>
        <div style={{ padding: "8px 8px 4px", display: "flex", gap: 6, alignItems: "flex-start" }}>
          <span style={{ fontSize: 20, color: iconColor, lineHeight: 1 }}>{iconChar}</span>
          <p style={{ margin: 0, fontSize: 10, color: "#1a1a1a", lineHeight: 1.4 }}>{message}</p>
        </div>
        <div style={{ padding: "2px 8px 7px", display: "flex", justifyContent: "center" }}>
          <span style={{ background: "linear-gradient(to bottom,#fff,#ece9d8)", border: "1px solid #707070", borderRadius: 3, padding: "1px 16px", fontSize: 10, fontFamily: "Tahoma,sans-serif", cursor: "default", boxShadow: "inset -1px -1px 1px rgba(0,0,0,0.15)" }}>OK</span>
        </div>
      </div>
    </div>
  );
};

const XpProgressBubble = ({ label, value, style }) => (
  <div className="absolute z-10 select-none pointer-events-none" style={{ width: 185, fontFamily: "Tahoma,sans-serif", ...style }}>
    <div style={{ background: "#ece9d8", border: "2px solid #0054e3", borderRadius: 3, padding: "7px 9px", boxShadow: "2px 2px 0 #000, inset 1px 1px 0 #fff" }}>
      <div style={{ background: "linear-gradient(to right,#0058e6,#3a93ff,#0055d4)", padding: "2px 5px", marginBottom: 5, borderRadius: "1px 1px 0 0" }}>
        <span style={{ color: "#fff", fontSize: 9, fontWeight: "bold" }}>{label}</span>
      </div>
      <div style={{ background: "#fff", border: "1px inset #7f9db9", height: 14, borderRadius: 1, overflow: "hidden" }}>
        <div style={{ width: `${value}%`, height: "100%", background: "linear-gradient(to bottom,#7fb7f5 0%,#0053e1 50%,#0040b0 100%)" }} />
      </div>
      <div style={{ fontSize: 9, color: "#333", marginTop: 3 }}>Loading… {value}%</div>
    </div>
  </div>
);

const FloppyBubble = ({ style, color = "#0054e3" }) => (
  <div className="absolute z-10 select-none pointer-events-none opacity-70" style={style}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="2" y="2" width="40" height="40" rx="3" fill={color} stroke="#fff" strokeWidth="1.5" />
      <rect x="7" y="2" width="22" height="14" rx="1" fill="#cce4ff" stroke="#fff" strokeWidth="1" />
      <rect x="13" y="4" width="7" height="10" rx="0.5" fill="#fff" opacity="0.6" />
      <rect x="5" y="20" width="34" height="18" rx="1" fill="#e8f2ff" stroke="#fff" strokeWidth="0.5" />
      <rect x="9" y="23" width="24" height="3" rx="0.5" fill="#aac8e8" />
      <rect x="9" y="28" width="16" height="3" rx="0.5" fill="#aac8e8" />
    </svg>
  </div>
);

const XpTooltipBubble = ({ text, style }) => (
  <div className="absolute z-10 select-none pointer-events-none" style={{ background: "#ffffcc", border: "1px solid #000", padding: "2px 6px", fontSize: 10, fontFamily: "Tahoma,sans-serif", color: "#000", boxShadow: "1px 1px 0 #888", whiteSpace: "nowrap", ...style }}>
    {text}
  </div>
);

const PixelCursorBubble = ({ style }) => (
  <div className="absolute z-10 select-none pointer-events-none opacity-60" style={style}>
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
      <polygon points="2,2 2,20 6,15 10,24 12,23 8,14 15,14" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  </div>
);

const FolderBubble = ({ label, style }) => (
  <div className="absolute z-10 select-none pointer-events-none flex flex-col items-center gap-0.5 opacity-70" style={style}>
    <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
      <path d="M2 8 Q2 5 5 5 L18 5 L22 9 H43 Q46 9 46 12 V35 Q46 38 43 38 H5 Q2 38 2 35 Z" fill="#f0c040" stroke="#c8960a" strokeWidth="1.2" />
      <path d="M2 12 H46 V35 Q46 38 43 38 H5 Q2 38 2 35 Z" fill="#f5d060" stroke="#c8960a" strokeWidth="1" />
    </svg>
    <span style={{ fontSize: 9, fontFamily: "Tahoma,sans-serif", color: "#1a1a6a", textAlign: "center", maxWidth: 65, lineHeight: 1.2, fontWeight: "bold" }}>{label}</span>
  </div>
);

// ── Pure background icons (z-0) ─────────────────────────────────────────────
function ScatteredLifeIcons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Twinkle stars */}
      {SCATTER_STARS.map((star, i) => (
        <span
          key={`star-${i}`}
          className={`absolute rounded-full bg-cyan-300/70 ${star.size}`}
          style={{
            top: star.top,
            left: star.left,
            animation: `journey-twinkle ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
            ["--icon-opacity"]: 0.55,
          }}
        />
      ))}

      {/* Scattered era icons */}
      {SCATTERED_LIFE_ICONS.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: item.opacity, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="absolute"
          style={{ top: item.top, left: item.left }}
        >
          <div
            className="journey-scatter-icon"
            style={{ animationDelay: item.delay, "--icon-opacity": 0.9 }}
          >
            <item.Icon
              className={`${item.size} ${item.color} ${item.rotate} drop-shadow-[0_2px_8px_rgba(0,84,227,0.25)]`}
            />
          </div>
        </motion.div>
      ))}

      {/* ── Uniglobe / COVID background zone (~43-58% of timeline) ── */}
      {/* Soft red radial glow */}
      <div
        className="absolute"
        style={{
          top: "30%", left: "10%", width: "80%", height: "22%",
          background: "radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Faint QUARANTINE watermark text */}
      <div
        className="absolute select-none"
        style={{
          top: "39%", left: "50%",
          transform: "translate(-50%,-50%) rotate(-18deg)",
          fontSize: "clamp(28px, 6vw, 72px)",
          fontFamily: "Tahoma, sans-serif",
          fontWeight: 900,
          color: "rgba(185,28,28,0.10)",
          letterSpacing: "0.18em",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        QUARANTINE
      </div>
      {/* Hazard-stripe tape lines — two diagonal bands */}
      {["30%", "48%"].map((top, i) => (
        <div
          key={`tape-${i}`}
          className="absolute"
          style={{
            top, left: 0, width: "100%", height: "clamp(12px, 1.5vw, 22px)",
            backgroundImage:
              "repeating-linear-gradient(60deg, rgba(220,38,38,0.13) 0px, rgba(220,38,38,0.13) 14px, transparent 14px, transparent 28px)",
            transform: "rotate(-1deg)",
            pointerEvents: "none",
          }}
        />
      ))}

    </div>
  );
}

// ── XP Decorations overlay (z-[5]) — above background, below card text ───────
function XpDecorations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 0.38 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {/* ── SCHOOL era ── */}
      <XpDialogBubble
        title="System Alert"
        message="Homework not submitted. Please try again."
        type="error"
        style={{ top: "9%", left: "1%" }}
      />


      {/* ── UNITY / PIXEL ART era ── */}
      <XpProgressBubble label="Loading game assets..." value={82} style={{ top: "22%", right: "10%" }} />

      {/* ── UNIGLOBE / COVID era ── */}
      <XpDialogBubble
        title="⚠ Health Alert"
        message="COVID-19 virus detected on this computer. Stay home. Wash hands. Wear mask."
        type="warning"
        style={{ top: "39%", left: "1%" }}
      />
      {/* <XpProgressBubble label="Uploading notes..." value={73} style={{ top: "39%", right: "0%" }} /> */}


      {/* ── KEC / COLLEGE era ── */}
      <XpProgressBubble label="Building release..." value={91} style={{ top: "72%", left: "8%" }} />
      <XpDialogBubble
        title="Achievement Unlocked!"
        message="Welcome to Engineering College!"
        type="info"
        style={{ top: "62%", right: "20%" }}
      />

      {/* ── ALWAYS LEARNING era ── */}
      <XpDialogBubble
        title="System Info"
        message="Still learning. Updates pending. Growth: ∞"
        type="info"
        style={{ top: "90%", left: "1%" }}
      />
      <XpProgressBubble label="Loading future..." value={42} style={{ top: "87%", right: "0%" }} />
    </motion.div>
  );
}

function TimelineCard({ stage, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const Icon = stage.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative z-10 px-2 md:px-6"
    >
      <div
        className={`flex w-full items-center gap-6 md:gap-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
          } flex-col`}
      >
        <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 font-sans">
            {stage.era}
          </span>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-800 md:text-3xl font-sans">{stage.title}</h3>
          <p className="mt-3 text-slate-600 font-sans font-medium leading-relaxed max-w-md mx-auto md:mx-0 md:max-w-sm">
            {stage.description}
          </p>
        </div>

        <div className="relative z-10 flex shrink-0 flex-col items-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.accent} shadow-lg shadow-cyan-900/30 ring-2 ring-white/10`}
          >
            <Icon className="text-2xl text-white" />
          </div>
        </div>

        <div className="hidden flex-1 md:block" aria-hidden="true" />
      </div>
    </motion.div>
  );
}

const JourneyTimeline = () => {

  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden py-24 px-6 md:px-14 lg:px-20"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#002c91] font-extrabold font-sans">Timeline</p>
          <h2 className="mt-3 py-2 text-slate-955 text-4xl font-black md:text-5xl leading-tight font-sans">
            My Journey
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-900 font-sans font-medium">
            From school and games to engineering.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="relative">
            {/* Layer 0: faint background icons + COVID zone */}
            <ScatteredLifeIcons />

            {/* Layer 5: XP dialog / floppy decorations — above bg, both sides */}
            <XpDecorations />

            {/* Timeline spine */}
            <div
              className="absolute left-1/2 top-4 bottom-4 z-[1] hidden w-[2px] -translate-x-1/2 bg-[#7b9ebd]/70 md:block"
              aria-hidden="true"
            />

            {/* Layer 10: actual timeline cards */}
            <div className="relative z-10 space-y-16 md:space-y-24 pb-2">
              {JOURNEY_STAGES.map((stage, index) => (
                <TimelineCard key={stage.title} stage={stage} index={index} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneyTimeline;
