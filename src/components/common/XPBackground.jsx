import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ── Fluffy cloud SVG shapes (blurred circles that blend into soft clouds) ── */
const CloudFluffy1 = ({ className, style }) => (
  <svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="currentColor">
    <defs>
      <filter id="cf1"><feGaussianBlur stdDeviation="7" /></filter>
    </defs>
    <g filter="url(#cf1)">
      <ellipse cx="220" cy="125" rx="190" ry="38" />
      <circle cx="70" cy="105" r="40" />
      <circle cx="140" cy="80" r="50" />
      <circle cx="220" cy="68" r="55" />
      <circle cx="300" cy="78" r="48" />
      <circle cx="370" cy="100" r="38" />
      <circle cx="180" cy="55" r="38" />
      <circle cx="260" cy="52" r="36" />
      <circle cx="110" cy="92" r="35" />
      <circle cx="340" cy="92" r="32" />
    </g>
  </svg>
);

const CloudFluffy2 = ({ className, style }) => (
  <svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="currentColor">
    <defs>
      <filter id="cf2"><feGaussianBlur stdDeviation="6" /></filter>
    </defs>
    <g filter="url(#cf2)">
      <ellipse cx="180" cy="105" rx="155" ry="32" />
      <circle cx="60" cy="88" r="34" />
      <circle cx="125" cy="68" r="42" />
      <circle cx="190" cy="58" r="48" />
      <circle cx="260" cy="68" r="40" />
      <circle cx="315" cy="85" r="32" />
      <circle cx="155" cy="48" r="32" />
      <circle cx="225" cy="45" r="30" />
      <circle cx="90" cy="78" r="30" />
    </g>
  </svg>
);

const CloudFluffy3 = ({ className, style }) => (
  <svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="currentColor">
    <defs>
      <filter id="cf3"><feGaussianBlur stdDeviation="5" /></filter>
    </defs>
    <g filter="url(#cf3)">
      <ellipse cx="140" cy="85" rx="120" ry="26" />
      <circle cx="55" cy="68" r="30" />
      <circle cx="110" cy="52" r="38" />
      <circle cx="170" cy="48" r="35" />
      <circle cx="230" cy="62" r="30" />
      <circle cx="140" cy="40" r="28" />
      <circle cx="85" cy="58" r="26" />
      <circle cx="200" cy="55" r="26" />
    </g>
  </svg>
);

/* ── useScrollY hook for parallax ─────────────────────────────────────── */
function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}

/* ── Main Background Component ────────────────────────────────────────── */
const XPBackground = () => {
  const scrollY = useScrollY();

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#c5dcf3] via-[#dde9f6] to-[#edf3f9]">

      {/* ═══ HERO ZONE: SOFT SUN GLOW ═══ */}
      <div
        className="absolute top-[-80px] right-[5%] w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)" }}
      />

      {/* ═══ DECORATIVE SUN — top-right of hero, below app bar ═══ */}
      <div className="absolute hidden lg:block" style={{ top: '85px', right: '8px', width: '230px', height: '230px', zIndex: 2 }}>
        {/* Warm glow radiating left toward the photo */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%', left: '50%',
            width: '700px', height: '700px',
            transform: 'translate(-80%, -50%)',
            background: 'radial-gradient(ellipse at 80% 50%, rgba(255,230,100,0.20) 0%, rgba(255,210,80,0.08) 35%, rgba(255,255,255,0) 70%)',
            borderRadius: '50%',
          }}
        />
        {/* The bobbing sun */}
        <motion.img
          src="/images/sun.png"
          alt="Sun"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ filter: 'drop-shadow(0 0 20px rgba(255,200,50,0.55))', zIndex: 1 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Cloud covering the sun */}
        <div className="absolute text-white/90 pointer-events-none select-none drop-shadow-xl" style={{ bottom: '-30px', left: '-60px', width: '280px', zIndex: 2 }}>
           <CloudFluffy2 className="w-full h-auto" />
        </div>
      </div>

      {/* Warm atmospheric glow behind picture viewer (right side) */}
      <div
        className="absolute top-[8%] right-[-2%] w-[700px] h-[700px] rounded-full blur-[180px] hidden lg:block"
        style={{ background: "radial-gradient(circle, rgba(255,236,179,0.18) 0%, rgba(255,200,120,0.06) 40%, rgba(255,255,255,0) 70%)" }}
      />

      {/* Soft horizon light band near lower hero */}
      <div
        className="absolute top-[18%] left-0 w-full h-[120px] blur-[60px]"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)" }}
      />

      {/* Faint retro scanline texture (hero area only) */}
      <div
        className="absolute top-0 left-0 w-full h-[25%] opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* ═══ STATIC PARALLAX CLOUDS (spread across hero) ═══ */}
      {/* Row 1 — top area */}
      <div
        className="absolute top-[2%] left-[3%] w-[450px] text-white/50 hidden sm:block"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      >
        <CloudFluffy1 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[4%] right-[5%] w-[380px] text-white/40 hidden sm:block"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <CloudFluffy2 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[1%] right-[22%] w-[290px] text-white/35 blur-[1px] hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <CloudFluffy3 className="w-full h-auto" />
      </div>

      {/* Row 2 — upper-mid area */}
      <div
        className="absolute top-[14%] left-[40%] w-[300px] text-white/55 hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <CloudFluffy3 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[18%] left-[8%] w-[260px] text-white/60 hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <CloudFluffy2 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[11%] right-[15%] w-[340px] text-white/45 blur-[2px] hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <CloudFluffy1 className="w-full h-auto" />
      </div>

      {/* Row 3 — mid area */}
      <div
        className="absolute top-[28%] right-[12%] w-[350px] text-white/45 hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.22}px)` }}
      >
        <CloudFluffy1 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[32%] left-[20%] w-[220px] text-white/55 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <CloudFluffy3 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[26%] right-[2%] w-[280px] text-white/40 blur-[1px] hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <CloudFluffy2 className="w-full h-auto" />
      </div>

      {/* Row 4 — lower-mid area */}
      <div
        className="absolute top-[42%] right-[30%] w-[280px] text-white/40 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.28}px)` }}
      >
        <CloudFluffy2 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[45%] left-[2%] w-[320px] text-white/35 hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <CloudFluffy1 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[38%] right-[10%] w-[300px] text-white/50 blur-[2px] hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.26}px)` }}
      >
        <CloudFluffy1 className="w-full h-auto" />
      </div>

      {/* Row 5 — bottom of hero */}
      <div
        className="absolute top-[55%] right-[5%] w-[250px] text-white/45 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <CloudFluffy3 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[52%] left-[45%] w-[200px] text-white/35 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <CloudFluffy2 className="w-full h-auto" />
      </div>

      <div
        className="absolute top-[49%] right-[25%] w-[270px] text-white/40 hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.32}px)` }}
      >
        <CloudFluffy2 className="w-full h-auto" />
      </div>


      {/* ═══ DRIFTING ANIMATED CLOUDS (spread across hero height) ═══ */}
      <div className="absolute top-0 left-0 w-full h-[1200px] overflow-hidden">
        {/* Animated cloud — upper area */}
        <motion.div
          animate={{ x: ["0%", "120%"] }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
          className="absolute top-[8%] left-[5%] w-[380px] text-white/30"
        >
          <CloudFluffy1 className="w-full h-auto" />
        </motion.div>

        {/* Animated cloud — mid area */}
        <motion.div
          animate={{ x: ["0%", "130%"] }}
          transition={{ duration: 400, repeat: Infinity, ease: "linear" }}
          className="absolute top-[25%] left-[10%] w-[420px] text-white/22 hidden sm:block"
        >
          <CloudFluffy2 className="w-full h-auto" />
        </motion.div>

        {/* Animated cloud — lower area */}
        <motion.div
          animate={{ x: ["0%", "140%"] }}
          transition={{ duration: 260, repeat: Infinity, ease: "linear" }}
          className="absolute top-[45%] left-[8%] w-[280px] text-white/28 hidden md:block"
        >
          <CloudFluffy3 className="w-full h-auto" />
        </motion.div>
      </div>


      {/* ═══ JOURNEY / PROJECTS ZONE: DISTANT ROLLING HILLS ═══ */}
      {/* Hill Layer 1 — furthest back, lightest, most blur, slowest parallax */}
      <div
        className="absolute w-full hidden md:block"
        style={{
          top: "50%",
          bottom: 0,
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      >
        <svg viewBox="0 0 1440 1000" xmlns="http://www.w3.org/2000/svg" className="w-[160vw] ml-[-30vw] h-full opacity-[0.06] blur-[2px]" preserveAspectRatio="none">
          <path fill="#4a7a3a" d="M0,140 C180,60 360,100 540,80 C720,60 900,120 1080,90 C1260,60 1380,100 1440,80 L1440,1000 L0,1000 Z" />
        </svg>
      </div>

      {/* Hill Layer 2 — mid-distance, medium opacity */}
      <div
        className="absolute w-full hidden md:block"
        style={{
          top: "54%",
          bottom: 0,
          transform: `translateY(${scrollY * 0.26}px)`,
        }}
      >
        <svg viewBox="0 0 1440 1000" xmlns="http://www.w3.org/2000/svg" className="w-[140vw] ml-[-10vw] h-full opacity-[0.08]" preserveAspectRatio="none">
          <path fill="#5a8a4a" d="M0,120 C240,160 480,60 720,100 C960,140 1200,70 1440,110 L1440,1000 L0,1000 Z" />
        </svg>
      </div>

      {/* Hill Layer 3 — closest, sharpest, most parallax */}
      <div
        className="absolute w-full hidden lg:block"
        style={{
          top: "58%",
          bottom: 0,
          transform: `translateY(${scrollY * 0.35}px)`,
        }}
      >
        <svg viewBox="0 0 1440 1000" xmlns="http://www.w3.org/2000/svg" className="w-[130vw] ml-[-15vw] h-full opacity-[0.10]" preserveAspectRatio="none">
          <path fill="#6a9a5a" d="M0,150 C360,80 720,140 1080,90 C1260,70 1380,120 1440,100 L1440,1000 L0,1000 Z" />
        </svg>
      </div>


      {/* ═══ CONTACT / FOOTER: GROUNDING GREEN HILLS (XP Bliss Wallpaper style) ═══ */}
      <div className="absolute bottom-0 w-full h-[1200px] overflow-hidden">
        {/* Back hill — main Bliss sweeping curve */}
        <div
          className="absolute bottom-0 w-[120vw] ml-[-10vw] h-full"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="blissMain" x1="15%" y1="0%" x2="85%" y2="100%">
                <stop offset="0%" stopColor="#a9f34b" />
                <stop offset="35%" stopColor="#6fd623" />
                <stop offset="70%" stopColor="#30920d" />
                <stop offset="100%" stopColor="#195504" />
              </linearGradient>
              <filter id="hillShadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="-1" dy="3" stdDeviation="4" floodColor="#091a01" floodOpacity="0.25" />
              </filter>
            </defs>
            <path
              fill="url(#blissMain)"
              d="M0,200 C180,130 320,60 480,70 C750,95 1100,160 1440,240 L1440,600 L0,600 Z"
              filter="url(#hillShadow)"
            />
          </svg>
        </div>

        {/* Foreground field (front layer) */}
        <div
          className="absolute bottom-0 w-[120vw] ml-[-10vw] h-full"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="blissFore" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4f9a23" />
                <stop offset="50%" stopColor="#2c670f" />
                <stop offset="100%" stopColor="#143c05" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blissFore)"
              d="M0,340 C350,310 700,355 1100,335 C1250,325 1380,338 1440,332 L1440,600 L0,600 Z"
            />
            {/* Tiny yellow wildflower specs */}
            <g fill="#f4d03f" opacity="0.75">
              <circle cx="150" cy="380" r="1.5" />
              <circle cx="280" cy="370" r="1.5" />
              <circle cx="340" cy="430" r="1" />
              <circle cx="480" cy="390" r="1.5" />
              <circle cx="620" cy="410" r="1.2" />
              <circle cx="750" cy="380" r="1.5" />
              <circle cx="950" cy="400" r="1.2" />
              <circle cx="1100" cy="390" r="1.5" />
              <circle cx="1230" cy="420" r="1.2" />
              <circle cx="1320" cy="380" r="1.5" />
              <circle cx="180" cy="460" r="1.5" />
              <circle cx="550" cy="440" r="1.5" />
              <circle cx="820" cy="450" r="1.5" />
              <circle cx="1020" cy="460" r="1.2" />
              <circle cx="1180" cy="450" r="1.5" />
            </g>
          </svg>
        </div>
      </div>


      {/* ═══ RETRO PIXEL TEXTURE OVERLAY ═══ */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='1' height='1' fill='%23000'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23000'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "4px 4px"
        }}
      />
    </div>
  );
};

export default XPBackground;
