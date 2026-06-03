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
      className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 hidden lg:block min-h-[5600px] relative"
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
        style={{ width: "100%", maxWidth: 1024, height: 5000 }}

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

        {/* School */}
        <div
          className="absolute z-10 text-[100px] -rotate-15 italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 p-8"
          style={{ top: 320, left: "28%" }}
        >
          School
        </div>

        <FaPencilAlt
          className="absolute text-[40px] -rotate-10 text-amber-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-amber-300 cursor-pointer drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
          style={{ top: 550, left: "0%" }}
        />

        <FaBookOpen
          className="absolute text-[60px] -rotate-10 text-blue-400 transition-all duration-300 hover:scale-110 hover:-rotate-15 hover:text-blue-300 cursor-pointer drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]"
          style={{ top: 700, left: "40%" }}
        />

        <SiGamebanana
          className="absolute text-[50px] -rotate-10 text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-yellow-300 cursor-pointer drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
          style={{ top: 1480, left: "28%" }}
        />

        <FaGuitar
          className="absolute text-[60px] -rotate-10 text-rose-400 transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:text-rose-300 cursor-pointer drop-shadow-[0_0_8px_rgba(251,113,133,0.6)]"
          style={{ top: 1200, left: "100%" }}
        />

        <IoIosBasketball
          className="absolute text-[50px] -rotate-10 text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-orange-400 cursor-pointer drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
          style={{ top: 900, left: "70%" }}
        />

        <IoMdFootball
          className="absolute text-[40px] -rotate-10 text-slate-300 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-white cursor-pointer drop-shadow-[0_0_8px_rgba(203,213,225,0.6)]"
          style={{ top: 1500, left: "70%" }}
        />

        <MdOutlineScience
          className="absolute text-[50px] -rotate-15 text-green-400 transition-all duration-300 hover:scale-110 hover:-rotate-5 hover:text-green-300 cursor-pointer drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"
          style={{ top: 1900, left: "80%" }}
        />

        <IoGameControllerOutline
          className="absolute text-[50px] -rotate-15 text-purple-400 transition-all duration-300 hover:scale-110 hover:-rotate-20 hover:text-purple-300 cursor-pointer drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]"
          style={{ top: 2050, left: "20%" }}
        />

        <TbMathIntegralX
          className="absolute text-[70px] -rotate-15 text-cyan-400 transition-all duration-300 hover:scale-110 hover:-rotate-25 hover:text-cyan-300 cursor-pointer drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          style={{ top: 2550, left: "0%" }}
        />

        <CiCalculator1
          className="absolute text-[70px] -rotate-15 text-indigo-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-indigo-300 cursor-pointer drop-shadow-[0_0_10px_rgba(129,140,248,0.6)]"
          style={{ top: 2750, left: "30%" }}
        />

        <FaVirusCovid
          className="absolute text-[70px] -rotate-15 text-red-500 transition-all duration-300 hover:scale-110 hover:rotate-15 hover:text-red-400 cursor-pointer drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
          style={{ top: 2350, left: "30%" }}
        />

        <TbMathIntegrals
          className="absolute text-[70px] -rotate-15 text-teal-400 transition-all duration-300 hover:scale-110 hover:-rotate-5 hover:text-teal-300 cursor-pointer drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]"
          style={{ top: 3400, left: "0%" }}
        />

        <FaComputer
          className="absolute text-[60px] text-blue-300 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-blue-200 cursor-pointer drop-shadow-[0_0_10px_rgba(147,197,253,0.6)]"
          style={{ top: 3200, left: "50%" }}
        />

        <GiGraduateCap
          className="absolute text-[60px] text-yellow-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-yellow-300 cursor-pointer drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]"
          style={{ top: 3500, left: "80%" }}
        />

        <TbCircuitDiode
          className="absolute text-[30px] -rotate-15 text-emerald-400 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-emerald-300 cursor-pointer drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
          style={{ top: 3500, left: "33%" }}
        />

        <TbCircuitSwitchOpen
          className="absolute text-[30px] text-lime-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-lime-300 cursor-pointer drop-shadow-[0_0_8px_rgba(163,230,53,0.6)]"
          style={{ top: 3600, left: "50%" }}
        />

        <TbCircuitGround
          className="absolute text-[30px] text-amber-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-amber-300 cursor-pointer drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
          style={{ top: 3720, left: "72%" }}
        />

        <TbCircuitCapacitorPolarized
          className="absolute text-[30px] text-sky-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-sky-300 cursor-pointer drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
          style={{ top: 3920, left: "82%" }}
        />

        <PiCircuitry
          className="absolute text-[50px] rotate-15 text-violet-400 transition-all duration-300 hover:scale-110 hover:rotate-25 hover:text-violet-300 cursor-pointer drop-shadow-[0_0_10px_rgba(167,139,250,0.6)]"
          style={{ top: 3800, left: "20%" }}
        />

        <TbCircuitCell
          className="absolute text-[30px] text-fuchsia-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-fuchsia-300 cursor-pointer drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]"
          style={{ top: 4120, left: "62%" }}
        />

        <GiMicrochip
          className="absolute text-[50px] text-indigo-400 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-indigo-300 cursor-pointer drop-shadow-[0_0_10px_rgba(129,140,248,0.6)]"
          style={{ top: 4200, left: "10%" }}
        />

        <FiYoutube
          className="absolute text-[50px] rotate-15 text-red-500 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-red-400 cursor-pointer drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]"
          style={{ top: 4400, left: "100%" }}
        />

        <div
          className="absolute z-10 text-[100px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 px-8"
          style={{ top: 930, left: "2%" }}
        >
          GEMS
        </div>

        <FaUnity
          className="absolute text-[50px] -rotate-10 text-slate-100 transition-all duration-300 hover:scale-110 hover:rotate-0 hover:text-white cursor-pointer drop-shadow-[0_0_10px_rgba(241,245,249,0.6)]"
          style={{ top: 1480,  }}
        />

        <div
          className="absolute z-10 text-[70px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400  p-10"
          style={{ top: 1520, left: "-4%" }}
        >
          Unity
        </div>

        <div
          className="absolute z-10 text-[70px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400 p-10"
          style={{ top: 1530, left: "20%" }}
        >
          PixelArt
        </div>

        <div
          className="absolute z-10 text-[80px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400"
          style={{ top: 2300, left: "78%" }}
        >
          Uniglobe College
        </div>

        <div
          className="absolute z-1000000 text-[80px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 rotate-15 p-10"
          style={{ top: 1980, left: "60%" }}
        >
          High School
        </div>

        <div
          className="absolute z-10 text-[80px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 -rotate-15 p-2"
          style={{ top: 3850, left: "45%" }}
        >
          College
        </div>

        <div
          className="absolute z-10 text-[100px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 -rotate-8 text-center p-4"
          style={{ top: 4200, left: "37%" }}
        >
          Kathmandu Engineering
          <br />
          College
        </div>

        <SiKotlin
          className="absolute text-[50px] text-purple-500 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-purple-400 cursor-pointer drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
          style={{ top: 2780, left: "85%" }}
        />

        <div
          className="absolute z-10 text-[100px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          style={{ top: 2740, left: "90%" }}
        >
          Kotlin
        </div>

        <FaFlutter
          className="absolute text-[68px] text-sky-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-sky-300 cursor-pointer drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          style={{ top: 5034, left: "14%" }}
        />

        <div
          className="absolute z-10 text-[100px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 p-[10px]"
          style={{ top: 4990, left: "22%" }}
        >
          Flutter
        </div>

        <FaReact
          className="absolute text-[70px] text-cyan-400 transition-all duration-300 hover:scale-110 hover:rotate-[360deg] hover:text-cyan-300 cursor-pointer drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          style={{ top: 5034, left: "73%" }}
        />

        <div
          className="absolute z-10 text-[100px] italianno-regular text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 p-[10px]"
          style={{ top: 4990, left: "82%" }}
        >
          React
        </div>
      </div>
    </div>
  );
};

export default MyJourney;