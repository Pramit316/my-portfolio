import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaPencilAlt, FaBookOpen, FaUnity, FaGuitar } from "react-icons/fa";
import { FaComputer, FaVirusCovid, FaFlutter } from "react-icons/fa6";
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
/** Softer opacity multiplier for a faded, subtle retro stamp look */
const SCATTER_BRIGHTNESS = 1.35;
const bright = (n) => Math.min(0.95, +(n * SCATTER_BRIGHTNESS).toFixed(2));

const SCATTERED_LIFE_ICONS = [
  // Phase 1
  { id: "guitar-1", Icon: FaGuitar, color: "text-rose-800", size: "text-3xl md:text-4xl", rotate: "-rotate-12", top: "4%", left: "6%", delay: "0s", opacity: bright(0.22) },
  { id: "basketball-1", Icon: IoIosBasketball, color: "text-orange-800", size: "text-2xl md:text-4xl", rotate: "rotate-12", top: "9%", left: "82%", delay: "0.8s", opacity: bright(0.2) },
  { id: "football-1", Icon: IoMdFootball, color: "text-slate-800", size: "text-3xl", rotate: "-rotate-6", top: "16%", left: "14%", delay: "1.2s", opacity: bright(0.18) },
  { id: "guitar-2", Icon: FaGuitar, color: "text-rose-800", size: "text-2xl", rotate: "rotate-[20deg]", top: "22%", left: "78%", delay: "2s", opacity: bright(0.15) },
  { id: "basketball-2", Icon: IoIosBasketball, color: "text-orange-800", size: "text-2xl", rotate: "rotate-6", top: "26%", left: "4%", delay: "1.6s", opacity: bright(0.16) },
  { id: "banana", Icon: SiGamebanana, color: "text-amber-800", size: "text-4xl md:text-5xl", rotate: "-rotate-6", top: "30%", left: "88%", delay: "0.4s", opacity: bright(0.24) },
  { id: "football-2", Icon: IoMdFootball, color: "text-slate-800", size: "text-2xl", rotate: "rotate-12", top: "28%", left: "22%", delay: "2.4s", opacity: bright(0.14) },

  // Phase 2
  { id: "controller", Icon: IoGameControllerOutline, color: "text-[#0a2f7c]", size: "text-3xl md:text-4xl", rotate: "-rotate-12", top: "36%", left: "5%", delay: "1s", opacity: bright(0.22) },
  { id: "calculus", Icon: TbMathIntegralX, color: "text-[#0a2f7c]", size: "text-4xl md:text-5xl", rotate: "rotate-6", top: "38%", left: "86%", delay: "1.8s", opacity: bright(0.2) },
  { id: "calculator", Icon: CiCalculator1, color: "text-indigo-900", size: "text-3xl md:text-5xl", rotate: "-rotate-6", top: "48%", left: "10%", delay: "0.6s", opacity: bright(0.2) },
  { id: "corona", Icon: FaVirusCovid, color: "text-red-900", size: "text-3xl md:text-4xl", rotate: "rotate-12", top: "50%", left: "90%", delay: "2.2s", opacity: bright(0.2) },

  // Phase 3
  { id: "computer-1", Icon: FaComputer, color: "text-blue-900", size: "text-3xl md:text-4xl", rotate: "-rotate-6", top: "56%", left: "8%", delay: "1.4s", opacity: bright(0.2) },
  { id: "microchip-1", Icon: GiMicrochip, color: "text-indigo-900", size: "text-3xl md:text-4xl", rotate: "rotate-12", top: "60%", left: "84%", delay: "0.2s", opacity: bright(0.22) },
  { id: "circuitry-1", Icon: PiCircuitry, color: "text-blue-900", size: "text-3xl", rotate: "rotate-[15deg]", top: "68%", left: "12%", delay: "2.6s", opacity: bright(0.18) },
  { id: "computer-2", Icon: FaComputer, color: "text-sky-950", size: "text-2xl", rotate: "rotate-6", top: "72%", left: "80%", delay: "1.1s", opacity: bright(0.15) },
  { id: "microchip-2", Icon: GiMicrochip, color: "text-emerald-900", size: "text-2xl md:text-3xl", rotate: "-rotate-12", top: "78%", left: "6%", delay: "1.9s", opacity: bright(0.16) },
  { id: "circuitry-2", Icon: PiCircuitry, color: "text-teal-900", size: "text-3xl", rotate: "rotate-6", top: "82%", left: "92%", delay: "0.9s", opacity: bright(0.17) },
  { id: "computer-3", Icon: FaComputer, color: "text-rose-900", size: "text-2xl", rotate: "-rotate-[8deg]", top: "86%", left: "18%", delay: "2.8s", opacity: bright(0.14) },
];

const SCATTER_STARS = [
  { top: "7%", left: "42%", size: "w-1 h-1" },
  { top: "12%", left: "58%", size: "w-1.5 h-1.5" },
  { top: "19%", left: "48%", size: "w-1 h-1" },
  { top: "33%", left: "52%", size: "w-1 h-1" },
  { top: "41%", left: "44%", size: "w-1.5 h-1.5" },
  { top: "45%", left: "62%", size: "w-1 h-1" },
  { top: "55%", left: "50%", size: "w-1 h-1" },
  { top: "64%", left: "46%", size: "w-1.5 h-1.5" },
  { top: "71%", left: "56%", size: "w-1 h-1" },
  { top: "80%", left: "48%", size: "w-1 h-1" },
  { top: "84%", left: "54%", size: "w-1.5 h-1.5" },
  { top: "15%", left: "35%", size: "w-1 h-1" },
  { top: "25%", left: "65%", size: "w-1 h-1" },
  { top: "52%", left: "72%", size: "w-1 h-1" },
  { top: "62%", left: "28%", size: "w-1 h-1" },
];

function ScatteredLifeIcons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {SCATTER_STARS.map((star, i) => (
        <span
          key={`star-${i}`}
          className={`absolute rounded-full bg-cyan-200/60 ${star.size}`}
          style={{
            top: star.top,
            left: star.left,
            animation: `journey-twinkle ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.35}s`,
            ["--icon-opacity"]: 0.46,
          }}
        />
      ))}

      {SCATTERED_LIFE_ICONS.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: item.opacity, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
          }}
        >
          <div
            className="journey-scatter-icon"
            style={{
              animationDelay: item.delay,
              "--icon-opacity": 0.8,
            }}
          >
            <item.Icon
              className={`${item.size} ${item.color} ${item.rotate} drop-shadow-[0_0_14px_rgba(6,182,212,0.35)]`}
            />
          </div>
        </motion.div>
      ))}
    </div>
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
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section
      id="journey"
      className="relative w-full overflow-hidden py-24 px-4 md:px-8"
    >
      <div className="relative mx-auto max-w-5xl">
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
            <ScatteredLifeIcons />

            <div
              className="absolute left-1/2 top-4 bottom-4 z-[1] hidden w-[2px] -translate-x-1/2 bg-[#7b9ebd]/70 md:block"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-16 md:space-y-24 pb-2">
              {JOURNEY_STAGES.map((stage, index) => (
                <TimelineCard key={stage.title} stage={stage} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Windows XP style System Properties window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-24 w-full max-w-xl mx-auto bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none overflow-hidden text-[#333333] text-left"
        >
          {/* XP Title Bar */}
          <div className="xp-title-bar-gradient px-2 py-1.5 flex items-center justify-between text-white font-bold text-[11px] md:text-xs select-none">
            <div className="flex items-center gap-1.5">
              <FaComputer size={14} className="text-white" />
              <span>System Properties</span>
            </div>
            {/* Fake Controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">_</div>
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white">□</div>
              <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white">X</div>
            </div>
          </div>

          {/* XP Tabs */}
          <div className="xp-tab-strip mt-2">
            <button
              type="button"
              onClick={() => setActiveTab("general")}
              className={`xp-tab ${activeTab === "general" ? "xp-tab-active" : ""}`}
              style={{ outline: "none" }}
            >
              General
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mobile")}
              className={`xp-tab ${activeTab === "mobile" ? "xp-tab-active" : ""}`}
              style={{ outline: "none" }}
            >
              Mobile Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("backend")}
              className={`xp-tab ${activeTab === "backend" ? "xp-tab-active" : ""}`}
              style={{ outline: "none" }}
            >
              Backend Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("frontend")}
              className={`xp-tab ${activeTab === "frontend" ? "xp-tab-active" : ""}`}
              style={{ outline: "none" }}
            >
              Frontend Stack
            </button>
          </div>

          {/* Dialog Body */}
          <div className="bg-[#ece9d8] border-t border-white p-4 flex flex-col gap-4 flex-1 shadow-[inset_1px_1px_0_#fff]">
            {activeTab === "general" && (
              <div className="flex flex-col sm:flex-row gap-6 p-2 min-h-[220px]">
                {/* Computer icon column */}
                <div className="flex flex-col items-center justify-start gap-2 sm:w-1/3">
                  <FaComputer className="text-[70px] text-[#2c5fbf] drop-shadow-md" />
                  <span className="text-[10px] text-gray-500 font-mono text-center">System Device 01</span>
                </div>

                {/* Specs column */}
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
              <div className="flex flex-col gap-3 min-h-[220px]">
                <fieldset className="xp-fieldset flex-1">
                  <legend className="xp-legend">Mobile Engineering Specs</legend>
                  <div className="flex items-start gap-4 p-1">
                    <FaFlutter className="text-5xl text-sky-500 shrink-0 drop-shadow-sm mt-1" />
                    <div className="text-xs flex flex-col gap-2">
                      <p className="font-bold text-slate-800 text-sm">Flutter & Dart Ecosystem</p>
                      <p className="text-gray-700 font-sans">
                        Expertise in building high-performance, beautiful cross-platform mobile apps for Android and iOS using Flutter.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">Firebase</span>
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">State Management</span>
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">Native Bridging</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            )}

            {activeTab === "backend" && (
              <div className="flex flex-col gap-3 min-h-[220px]">
                <fieldset className="xp-fieldset flex-1">
                  <legend className="xp-legend">Server & API Engineering Specs</legend>
                  <div className="flex items-start gap-4 p-1">
                    <SiSpringboot className="text-5xl text-emerald-500 shrink-0 drop-shadow-sm mt-1" />
                    <div className="text-xs flex flex-col gap-2">
                      <p className="font-bold text-slate-800 text-sm">Java Spring Boot</p>
                      <p className="text-gray-700 font-sans">
                        Designing secure, scalable microservices, RESTful APIs, security configurations, and database integrations.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">Java 17/21</span>
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">PostgreSQL</span>
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">Spring Security</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            )}

            {activeTab === "frontend" && (
              <div className="flex flex-col gap-3 min-h-[220px]">
                <fieldset className="xp-fieldset flex-1">
                  <legend className="xp-legend">Web Application Specs</legend>
                  <div className="flex items-start gap-4 p-1">
                    <SiAngular className="text-5xl text-rose-500 shrink-0 drop-shadow-sm mt-1" />
                    <div className="text-xs flex flex-col gap-2">
                      <p className="font-bold text-slate-800 text-sm">Angular & Modern Web</p>
                      <p className="text-gray-700 font-sans">
                        Developing responsive corporate web applications with component architectures, RxJS reactive patterns, and strict typing.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">TypeScript</span>
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">RxJS</span>
                        <span className="bg-white border border-[#7f9db9] px-2 py-0.5 rounded-sm font-mono text-[10px] text-[#002c91] font-semibold">Tailwind / CSS</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            )}

            {/* Bottom Window Control buttons (Classic XP style buttons) */}
            <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-[#d2cfc2]">
              <button
                type="button"
                className="xp-btn px-4 py-1.5 text-xs font-semibold select-none min-w-[75px]"
                style={{ padding: "4px 12px" }}
                onClick={() => alert("All systems operational!")}
              >
                OK
              </button>
              <button
                type="button"
                className="xp-btn px-4 py-1.5 text-xs font-semibold select-none min-w-[75px]"
                style={{ padding: "4px 12px" }}
                onClick={() => alert("Settings locked by administrator.")}
              >
                Cancel
              </button>
              <button
                type="button"
                className="xp-btn px-4 py-1.5 text-xs text-gray-400 font-semibold select-none min-w-[75px]"
                style={{ padding: "4px 12px" }}
                disabled
              >
                Apply
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
