import { useRef } from "react";
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
/** ~30% brighter than previous scatter defaults */
const SCATTER_BRIGHTNESS = 1.3;
const bright = (n) => Math.min(0.92, +(n * SCATTER_BRIGHTNESS).toFixed(2));

const SCATTERED_LIFE_ICONS = [
  // Phase 1
  { id: "guitar-1", Icon: FaGuitar, color: "text-rose-400/90", size: "text-3xl md:text-4xl", rotate: "-rotate-12", top: "4%", left: "6%", delay: "0s", opacity: bright(0.22) },
  { id: "basketball-1", Icon: IoIosBasketball, color: "text-orange-400/85", size: "text-2xl md:text-4xl", rotate: "rotate-12", top: "9%", left: "82%", delay: "0.8s", opacity: bright(0.2) },
  { id: "football-1", Icon: IoMdFootball, color: "text-slate-300/80", size: "text-3xl", rotate: "-rotate-6", top: "16%", left: "14%", delay: "1.2s", opacity: bright(0.18) },
  { id: "guitar-2", Icon: FaGuitar, color: "text-rose-400/75", size: "text-2xl", rotate: "rotate-[20deg]", top: "22%", left: "78%", delay: "2s", opacity: bright(0.15) },
  { id: "basketball-2", Icon: IoIosBasketball, color: "text-orange-400/75", size: "text-2xl", rotate: "rotate-6", top: "26%", left: "4%", delay: "1.6s", opacity: bright(0.16) },
  { id: "banana", Icon: SiGamebanana, color: "text-yellow-400/90", size: "text-4xl md:text-5xl", rotate: "-rotate-6", top: "30%", left: "88%", delay: "0.4s", opacity: bright(0.24) },
  { id: "football-2", Icon: IoMdFootball, color: "text-slate-300/75", size: "text-2xl", rotate: "rotate-12", top: "28%", left: "22%", delay: "2.4s", opacity: bright(0.14) },

  // Phase 2
  { id: "controller", Icon: IoGameControllerOutline, color: "text-cyan-400/85", size: "text-3xl md:text-4xl", rotate: "-rotate-12", top: "36%", left: "5%", delay: "1s", opacity: bright(0.22) },
  { id: "calculus", Icon: TbMathIntegralX, color: "text-cyan-400/85", size: "text-4xl md:text-5xl", rotate: "rotate-6", top: "38%", left: "86%", delay: "1.8s", opacity: bright(0.2) },
  { id: "calculator", Icon: CiCalculator1, color: "text-indigo-400/80", size: "text-3xl md:text-5xl", rotate: "-rotate-6", top: "48%", left: "10%", delay: "0.6s", opacity: bright(0.2) },
  { id: "corona", Icon: FaVirusCovid, color: "text-red-400/80", size: "text-3xl md:text-4xl", rotate: "rotate-12", top: "50%", left: "90%", delay: "2.2s", opacity: bright(0.2) },

  // Phase 3
  { id: "computer-1", Icon: FaComputer, color: "text-blue-300/80", size: "text-3xl md:text-4xl", rotate: "-rotate-6", top: "56%", left: "8%", delay: "1.4s", opacity: bright(0.2) },
  { id: "microchip-1", Icon: GiMicrochip, color: "text-indigo-400/80", size: "text-3xl md:text-4xl", rotate: "rotate-12", top: "60%", left: "84%", delay: "0.2s", opacity: bright(0.22) },
  { id: "circuitry-1", Icon: PiCircuitry, color: "text-blue-400/75", size: "text-3xl", rotate: "rotate-[15deg]", top: "68%", left: "12%", delay: "2.6s", opacity: bright(0.18) },
  { id: "computer-2", Icon: FaComputer, color: "text-sky-300/75", size: "text-2xl", rotate: "rotate-6", top: "72%", left: "80%", delay: "1.1s", opacity: bright(0.15) },
  { id: "microchip-2", Icon: GiMicrochip, color: "text-emerald-400/75", size: "text-2xl md:text-3xl", rotate: "-rotate-12", top: "78%", left: "6%", delay: "1.9s", opacity: bright(0.16) },
  { id: "circuitry-2", Icon: PiCircuitry, color: "text-teal-400/75", size: "text-3xl", rotate: "rotate-6", top: "82%", left: "92%", delay: "0.9s", opacity: bright(0.17) },
  { id: "computer-3", Icon: FaComputer, color: "text-rose-300/70", size: "text-2xl", rotate: "-rotate-[8deg]", top: "86%", left: "18%", delay: "2.8s", opacity: bright(0.14) },
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
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="journey-scatter-icon absolute opacity-[var(--icon-opacity)]"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            ["--icon-opacity"]: String(item.opacity),
          }}
        >
          <item.Icon
            className={`${item.size} ${item.color} ${item.rotate} drop-shadow-[0_0_14px_rgba(6,182,212,0.35)]`}
          />
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
        className={`flex w-full items-center gap-6 md:gap-10 ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } flex-col`}
      >
        <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            {stage.era}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-slate-50 md:text-3xl">{stage.title}</h3>
          <p className="mt-3 text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0 md:max-w-sm">
            {stage.description}
          </p>
          <div
            className={`mt-4 flex flex-wrap gap-2 justify-center ${
              isLeft ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {stage.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3 py-1 text-xs text-cyan-200/90"
              >
                {chip}
              </span>
            ))}
          </div>
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
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#040712] via-[#090f24] to-[#040712] py-24 px-4 md:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Timeline</p>
          <h2 className="mt-3 py-2 bg-gradient-to-r from-cyan-200 via-blue-200 to-teal-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl leading-tight">
            My Journey
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            From school and games to engineering college — then Flutter, Spring Boot, and Angular.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="relative">
            <ScatteredLifeIcons />

            <div
              className="absolute left-1/2 top-4 bottom-4 z-[1] hidden w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/50 via-blue-400/30 to-teal-500/50 md:block"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-16 md:space-y-24 pb-2">
              {JOURNEY_STAGES.map((stage, index) => (
                <TimelineCard key={stage.title} stage={stage} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mt-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/50 via-slate-900/50 to-blue-950/30 p-8 text-center backdrop-blur-sm"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-teal-300/80">Current Stack</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <FaFlutter className="text-5xl text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]" />
              <span className="text-lg font-medium text-sky-200">Flutter</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiSpringboot className="text-5xl text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
              <span className="text-lg font-medium text-emerald-200">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiAngular className="text-5xl text-rose-400 drop-shadow-[0_0_12px_rgba(251,113,133,0.5)]" />
              <span className="text-lg font-medium text-rose-200">Angular</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
