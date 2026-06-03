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
  // REFS for all six paths and the container
  const containerRef = useRef(null);
  const pathRef1 = useRef(null); // Main Spine (Path 1)
  const pathRef2 = useRef(null); // Bottom Swiggly Path (Path 2)
  const pathRef3 = useRef(null); // Upper Left Branch (Path 3)
  const pathRef4 = useRef(null); // Upper Right Branch (Path 4)
  const pathRef5 = useRef(null); // Middle Right Branch (Path 5)
  const pathRef6 = useRef(null); // Lower Left Branch (Path 6)

  // MOTION VALUES for all six paths
  const stroke1 = useMotionValue(0);
  const stroke2 = useMotionValue(0);
  const stroke3 = useMotionValue(0);
  const stroke4 = useMotionValue(0);
  const stroke5 = useMotionValue(0);
  const stroke6 = useMotionValue(0);

  // CONFIGURATION: Link refs, motion values, and animation trigger points
  const pathSegments = [
    {
      ref: pathRef1,
      stroke: stroke1,
      triggerStart: 0.0,
      drawDuration: 0.3,
      name: "Main Spine",
    },
    {
      ref: pathRef2,
      stroke: stroke2,
      triggerStart: 0.26,
      drawDuration: 0.04,
      name: "Bottom Swiggly Path",
    },
    {
      ref: pathRef3,
      stroke: stroke3,
      triggerStart: 0.02,
      drawDuration: 0.05,
      name: "Upper Left Branch",
    },
    {
      ref: pathRef4,
      stroke: stroke4,
      triggerStart: 0.12,
      drawDuration: 0.03,
      name: "Upper Right Branch",
    },
    {
      ref: pathRef5,
      stroke: stroke5,
      triggerStart: 0.14,
      drawDuration: 0.03,
      name: "Middle Right Branch",
    },
    {
      ref: pathRef6,
      stroke: stroke6,
      triggerStart: 0.06,
      drawDuration: 0.1,
      name: "Lower Left Branch",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Init: get lengths and hide paths
    pathSegments.forEach(({ ref, stroke, name }) => {
      const path = ref.current;
      if (path) {
        const length = path.getTotalLength();
        if (length === 0) {
          console.error(
            `Path: ${name} (Ref ${ref.current.id || "N/A"}) has length 0. Check d attribute.`
          );
          return;
        }
        path.style.strokeDasharray = `${length} ${length}`;
        stroke.set(length); // hide
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

      pathSegments.forEach(({ ref, stroke, triggerStart, drawDuration }) => {
        const path = ref.current;
        if (!path) return;

        const length = parseFloat(path.dataset.length);
        if (isNaN(length)) return;

        if (linearProgress >= triggerStart) {
          const progressInZone = linearProgress - triggerStart;
          let localProgress = progressInZone / drawDuration;
          localProgress = clamp(localProgress, 0, 1);

          const draw = length * localProgress;
          const offset = length - draw;
          stroke.set(offset);
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
  }, [stroke1, stroke2, stroke3, stroke4, stroke5, stroke6]);

  return (
    <div
      id="journey"
      ref={containerRef}
      className="w-full bg-black pt-20 hidden lg:block min-h-[5600px]"
    >
      <h1 className="text-white text-xl p-20">My Journey</h1>

      {/* 🔒 FIXED-SIZE CANVAS: SVG + ALL ICONS/TEXT LOCKED HERE */}
      <div
        className="relative mx-auto"
        style={{
          width: 1024,
          height: 5000, // a bit taller than the SVG so your Flutter/React stuff fits
        }}
      >
        {/* SVG fills the canvas */}
        <svg
          viewBox="0 0 1321 4306"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          {/* 1. Main Spine Path */}
          <motion.path
            ref={pathRef1}
            d="M760.2 9.5C760.2 9.5 760.2 2395 760.2 2509.5C760.2 2624 374.539 2767.42 326.5 2929C255.388 3168.2 1065.84 3137.85 1039.5 3386C1013.8 3628.14 444.421 3451.31 376 3685C307.58 3918.69 760.2 3915.5 760.2 4007.5C760.2 4099.5 760.2 4105.5 760.2 4105.5"
            stroke="#F2FFC9"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke1}
          />

          {/* 2. Bottom Swiggly Path */}
          <motion.path
            ref={pathRef2}
            d="M384 4296C384 4296 350 4201.5 414.5 4168C479.001 4134.5 659.933 4125.71 760 4105C968 4114 1106 4131.5 1145 4168C1185.21 4205.63 1173 4296 1173 4296"
            stroke="#F2FFC9"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke2}
          />

          {/* 3. Upper Left Branch */}
          <motion.path
            ref={pathRef3}
            d="M760.201 316C706.968 375.138 666.783 402.968 592.701 432C509.283 464.691 351.201 418.5 305.201 485.5C241.32 578.543 267 630 264.828 734.5"
            stroke="#F2FFC9"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke3}
          />

          {/* 4. Upper Right Branch */}
          <motion.path
            ref={pathRef4}
            d="M760.5 1772C814.378 1816.22 850.03 1836.58 915.5 1860.5C994.118 1889.22 1075.69 1852.99 1117.5 1925.5C1134.79 1955.49 1134.5 1980.5 1134.5 1980.5"
            stroke="#F2FFC9"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke4}
          />

          {/* 5. Middle Right Branch */}
          <motion.path
            ref={pathRef5}
            d="M1135.13 2191C1135.13 2191 1131.2 2236.09 1143.03 2254.01C1175.24 2302.77 1281.7 2229.07 1303.56 2282.86C1312.43 2304.68 1311.47 2336 1311.47 2336"
            stroke="#F2FFC9"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke5}
          />

          {/* 6. Lower Left Branch */}
          <motion.path
            ref={pathRef6}
            d="M270.686 963C270.686 963 270.686 1061 270.686 1075M270.686 1075C270.686 1089 234.857 1140.47 202.186 1174.5C167.755 1210.36 145.737 1224.48 100.686 1245.5C76.0094 1257.02 75.6858 1255.5 50.1858 1265.5C24.6858 1275.5 14.6059 1307.25 10.6858 1338C8.01887 1358.92 10.6858 1404.5 10.6858 1404.5M270.686 1075C270.686 1095 316.204 1140.15 353.186 1174.5C387.811 1206.67 407.888 1226.56 451.186 1245.5C483.186 1259.5 496.186 1272.5 496.186 1272.5C513.186 1290.5 513.186 1338 513.186 1338V1404.5"
            stroke="#F2FFC9"
            strokeWidth={10}
            strokeLinecap="round"
            fill="none"
            strokeDashoffset={stroke6}
          />
        </svg>

        {/* 🔼 EVERYTHING BELOW IS NOW LOCKED TO THIS CANVAS, NOT THE SCREEN */}

        {/* School */}
        <div
          className="absolute z-10 text-[5vw] -rotate-15 italianno-regular text-slate-100"
          style={{ top: 390, left: "34%" }}
        >
          School
        </div>

        {/* Pencil */}
        <FaPencilAlt
          className="absolute text-[3vw] -rotate-10 text-slate-100"
          style={{ top: 600, left: "5%" }}
        />

        {/* Book */}
        <FaBookOpen
          className="absolute text-[3vw] -rotate-10 text-slate-100"
          style={{ top: 700, left: "40%" }}
        />

        {/* Unity Icon */}
        <FaUnity
          className="absolute text-[4vw] -rotate-10 text-slate-100"
          style={{ top: 1700, left: "5%" }}
        />

        {/* Pixel Banana */}
        <SiGamebanana
          className="absolute text-[4vw] -rotate-10 text-slate-100"
          style={{ top: 1700, left: "25%" }}
        />

        {/* Guitar */}
        <FaGuitar
          className="absolute text-[5vw] -rotate-10 text-slate-100"
          style={{ top: 1200, left: "85%" }}
        />

        {/* Basketball */}
        <IoIosBasketball
          className="absolute text-[4vw] -rotate-10 text-slate-100"
          style={{ top: 1000, left: "60%" }}
        />

        {/* Football */}
        <IoMdFootball
          className="absolute text-[3vw] -rotate-10 text-slate-100"
          style={{ top: 1500, left: "65%" }}
        />

        {/* Science Flask */}
        <MdOutlineScience
          className="absolute text-[4vw] -rotate-15 text-slate-100"
          style={{ top: 1900, left: "80%" }}
        />

        {/* Controller */}
        <IoGameControllerOutline
          className="absolute text-[4vw] -rotate-15 text-slate-100"
          style={{ top: 2050, left: "20%" }}
        />

        {/* Integral X */}
        <TbMathIntegralX
          className="absolute text-[6vw] -rotate-15 text-slate-100"
          style={{ top: 2550, left: "0%" }}
        />

        {/* Calculator */}
        <CiCalculator1
          className="absolute text-[6vw] -rotate-15 text-slate-100"
          style={{ top: 2750, left: "30%" }}
        />

        {/* Covid */}
        <FaVirusCovid
          className="absolute text-[6vw] -rotate-15 text-slate-100"
          style={{ top: 2350, left: "30%" }}
        />

        {/* Integral */}
        <TbMathIntegrals
          className="absolute text-[6vw] -rotate-15 text-slate-100"
          style={{ top: 3400, left: "0%" }}
        />

        {/* Computer */}
        <FaComputer
          className="absolute text-[5vw] text-slate-100"
          style={{ top: 3200, left: "50%" }}
        />

        {/* Graduate Cap */}
        <GiGraduateCap
          className="absolute text-[5vw] text-slate-100"
          style={{ top: 3500, left: "80%" }}
        />

        {/* Diode */}
        <TbCircuitDiode
          className="absolute text-[2vw] -rotate-15 text-slate-100"
          style={{ top: 3500, left: "35%" }}
        />

        {/* Switch */}
        <TbCircuitSwitchOpen
          className="absolute text-[2vw] text-slate-100"
          style={{ top: 3600, left: "50%" }}
        />

        {/* Ground */}
        <TbCircuitGround
          className="absolute text-[2vw] text-slate-100"
          style={{ top: 3720, left: "66%" }}
        />

        {/* Capacitor */}
        <TbCircuitCapacitorPolarized
          className="absolute text-[2vw] text-slate-100"
          style={{ top: 3920, left: "72%" }}
        />

        {/* Circuit */}
        <PiCircuitry
          className="absolute text-[4vw] rotate-15 text-slate-100"
          style={{ top: 3800, left: "20%" }}
        />

        {/* Cell */}
        <TbCircuitCell
          className="absolute text-[2vw] text-slate-100"
          style={{ top: 4120, left: "62%" }}
        />

        {/* Microchip */}
        <GiMicrochip
          className="absolute text-[4vw] text-slate-100"
          style={{ top: 4200, left: "10%" }}
        />

        {/* YouTube */}
        <FiYoutube
          className="absolute text-[4vw] rotate-15 text-red-500"
          style={{ top: 4400, left: "80%" }}
        />

        {/* School Name */}
        <div
          className="absolute z-10 text-[5vw] italianno-regular text-slate-100"
          style={{ top: 910, left: "15%" }}
        >
          School Name
        </div>

        {/* Unity text */}
        <div
          className="absolute z-10 text-[5vw] italianno-regular text-slate-100"
          style={{ top: 1680, left: "5.5%" }}
        >
          Unity
        </div>

        {/* Pixel Art text */}
        <div
          className="absolute z-10 text-[5vw] italianno-regular text-slate-100"
          style={{ top: 1680, left: "30%" }}
        >
          Pixel Art
        </div>

        {/* High School Name */}
        <div
          className="absolute z-10 text-[5vw] italianno-regular text-slate-100"
          style={{ top: 2350, left: "65%" }}
        >
          SS College
        </div>

        {/* High School label */}
        <div
          className="absolute z-10 text-[5vw] italianno-regular text-slate-100 rotate-15"
          style={{ top: 2050, left: "57%" }}
        >
          High School
        </div>

        {/* College */}
        <div
          className="absolute z-10 text-[6vw] italianno-regular text-slate-100 -rotate-15"
          style={{ top: 3850, left: "45%" }}
        >
          College
        </div>

        {/* College Name */}
        <div
          className="absolute z-10 text-[6vw] italianno-regular text-slate-100 -rotate-8 text-center"
          style={{ top: 4200, left: "37%" }}
        >
          Some Engineering
          <br />
          College
        </div>

        {/* Kotlin logo */}
        <SiKotlin
          className="absolute text-[4vw] text-slate-100"
          style={{ top: 2780, left: "72%" }}
        />

        {/* Kotlin text */}
        <div
          className="absolute z-10 text-[6vw] italianno-regular text-slate-100"
          style={{ top: 2750, left: "78%" }}
        >
          Kotlin
        </div>

        {/* Flutter logo */}
        <FaFlutter
          className="absolute text-[4vw] text-sky-400"
          style={{ top: 5030, left: "18%" }}
        />

        {/* Flutter text */}
        <div
          className="absolute z-10 text-[6vw] italianno-regular text-slate-100"
          style={{ top: 5000, left: "25%" }}
        >
          Flutter
        </div>

        {/* React logo */}
        <FaReact
          className="absolute text-[4vw] text-cyan-400"
          style={{ top: 5030, left: "65%" }}
        />

        {/* React text */}
        <div
          className="absolute z-10 text-[6vw] italianno-regular text-slate-100"
          style={{ top: 5000, left: "70%" }}
        >
          React
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
