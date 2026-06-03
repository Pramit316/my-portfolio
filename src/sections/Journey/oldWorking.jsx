import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion"; 

//Icons Import
import { FaSchool } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { SiGamebanana } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";
import { FaGuitar } from "react-icons/fa";
import { IoIosBasketball } from "react-icons/io";
import { IoMdFootball } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbMathIntegralX } from "react-icons/tb";
import { CiCalculator1 } from "react-icons/ci";
import { TbMathIntegrals } from "react-icons/tb";
import { FaVirusCovid } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { TbCircuitDiode } from "react-icons/tb";
import { TbCircuitSwitchOpen } from "react-icons/tb";
import { PiCircuitry } from "react-icons/pi";
import { TbCircuitGround } from "react-icons/tb";
import { TbCircuitCapacitorPolarized } from "react-icons/tb";
import { TbCircuitCell } from "react-icons/tb";
import { GiMicrochip } from "react-icons/gi";
import { FiYoutube } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";
import { SiKotlin } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

const VIEWBOX_WIDTH = 1321;
const VIEWBOX_HEIGHT = 4306;

function svgPos(x, y) {
  return {
    position: "absolute",
    left: `${(x / VIEWBOX_WIDTH) * 100}%`,
    top: `${(y / VIEWBOX_HEIGHT) * 100}%`,
    transform: "translate(-50%, -50%)", // center on that point
  };
}


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
            triggerStart: 0.00, 
            drawDuration: 0.3, 
            name: "Main Spine" // SVG Path 1
        },
        { 
            ref: pathRef2, 
            stroke: stroke2, 
            triggerStart: 0.26, // Starts near the end of the Main Spine draw
            drawDuration: 0.04, 
            name: "Bottom Swiggly Path" // SVG Path 2
        },
        { 
            ref: pathRef3, 
            stroke: stroke3, 
            triggerStart: 0.02,  
            drawDuration: 0.05,  
            name: "Upper Left Branch" // SVG Path 3
        },
        { 
            ref: pathRef4, 
            stroke: stroke4, 
            triggerStart: 0.12, 
            drawDuration: 0.03, 
            name: "Upper Right Branch" // SVG Path 4
        },
        { 
            ref: pathRef5, 
            stroke: stroke5, 
            triggerStart: 0.14, 
            drawDuration: 0.03, 
            name: "Middle Right Branch" // SVG Path 5
        },
        { 
            ref: pathRef6, 
            stroke: stroke6, 
            triggerStart: 0.06, 
            drawDuration: 0.10, 
            name: "Lower Left Branch" // SVG Path 6
        },
    ];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialization: Get Lengths and Hide Paths 
        pathSegments.forEach(({ ref, stroke, name }) => {
            const path = ref.current;
            if (path) {
                const length = path.getTotalLength();
                if (length === 0) {
                    console.error(`Path: ${name} (Ref ${ref.current.id || 'N/A'}) has length 0. Check D attribute.`);
                    return;
                }
                path.style.strokeDasharray = `${length} ${length}`;
                stroke.set(length); // Hide path initially
                path.dataset.length = length; // Store length for use in handleScroll
            }
        });

        // Scroll Handler 
        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Controller for overall speed and start point
            const SCROLL_MULTIPLIER = 3; // Total scroll distance needed for animation
            const START_OFFSET_FACTOR = 0.30; // Animation starts when container top is 30% of viewport height down
            
            const totalTravel = rect.height * SCROLL_MULTIPLIER; 
            const startOffset = viewportHeight * START_OFFSET_FACTOR;
            const distance = startOffset - rect.top;

            // Calculate the main linear scroll progress (0 to 1)
            let linearProgress = totalTravel <= 0 ? 0 : distance / totalTravel;
            linearProgress = clamp(linearProgress, 0, 1);
            
            // Animate All Paths 
            pathSegments.forEach(({ ref, stroke, triggerStart, drawDuration }) => {
                const path = ref.current;
                if (!path) return;

                const length = parseFloat(path.dataset.length);
                if (isNaN(length)) return;

                // Check if the main scroll has reached this path's trigger point
                if (linearProgress >= triggerStart) {
                    // Calculate local progress within this segment's drawing zone
                    const progressInZone = linearProgress - triggerStart;
                    let localProgress = progressInZone / drawDuration;
                    localProgress = clamp(localProgress, 0, 1);
                    
                    // Apply the progress to the path
                    const draw = length * localProgress;
                    const offset = length - draw; 
                    stroke.set(offset);
                } else {
                    // Keep the path hidden before its trigger point
                    stroke.set(length);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); 

        // Return a cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [stroke1, stroke2, stroke3, stroke4, stroke5, stroke6]); // Added stroke6 to dependencies

    return (
        <div
            id="journey"
            ref={containerRef}
            // Add significant min-height to ensure there's enough scrollable area
            className="relative w-full bg-black min-h-[5500px] pt-20 px-20 hidden lg:block"
            
        >
            <h1 className="text-white text-xl p-20">
                My Journey
            </h1>

            {/* School */}
            <div className = "absolute top-[12%] left-[34%] z-10 text-[5vw] -rotate-15 italianno-regular">School</div>

            {/* Pencil Icon */}
            <FaPencilAlt  className = "absolute mt-[600px] ml-[5%] text-[3vw] -rotate-10 z-10"> </FaPencilAlt>

            {/* Book Icon */}
            <FaBookOpen className = "absolute mt-[700px] ml-[40%] text-[3vw] -rotate-10 z-10"/>

            {/* Unity Icon */}
            <FaUnity className = "absolute mt-[1700px]  text-[4vw] -rotate-10 z-10"/>

            {/* Pixel Banana */}
            <SiGamebanana className = "absolute mt-[1700px] ml-[25%] text-[4vw] -rotate-10 z-10"/>

            {/* Guitar */}
            <FaGuitar className = "absolute mt-[1200px] ml-[85%] text-[5vw] -rotate-10 z-10"/>

            {/* Basketball */}
            <IoIosBasketball className = "absolute mt-[1000px] ml-[60%] text-[4vw] -rotate-10 z-10"/>

            {/* Football */}
            <IoMdFootball className = "absolute mt-[1500px] ml-[65%] text-[3vw] -rotate-10 z-10"/>

            {/* Conical Flask */}
            <MdOutlineScience className = "absolute mt-[1900px] ml-[80%] text-[4vw] -rotate-15 z-10"/>

            {/* Controller */}
            <IoGameControllerOutline className = "absolute mt-[2050px] ml-[20%] text-[4vw] -rotate-15 z-10"/>

            {/* Integration */}
            <TbMathIntegralX className = "absolute mt-[2550px] ml-[0%] text-[6vw] -rotate-15 z-10"/>

            {/* Calculator */}
            <CiCalculator1 className = "absolute mt-[2750px] ml-[30%] text-[6vw] -rotate-15 z-10"/>

            {/* Covid */}
            <FaVirusCovid className = "absolute mt-[2350px] ml-[30%] text-[6vw] -rotate-15 z-10"/>

            {/* Integral */}
            <TbMathIntegrals className = "absolute mt-[3400px] ml-[0%] text-[6vw] -rotate-15 z-10"/>

            {/* Computer */}
            <FaComputer className = "absolute mt-[3200px] ml-[50%] text-[5vw]  z-10"/>

            {/* GraduateCap */}
            <GiGraduateCap className = "absolute mt-[3500px] ml-[80%] text-[5vw]  z-10"/>

            {/* Diode */}
            <TbCircuitDiode className = "absolute mt-[3500px] ml-[35%] text-[2vw] -rotate-15 z-10"/>

            {/* Switch */}
            <TbCircuitSwitchOpen className = "absolute mt-[3600px] ml-[50%] text-[2vw]  z-10"/>
            
            {/* Ground */}
            <TbCircuitGround className = "absolute mt-[3720px] ml-[66%] text-[2vw]  z-10"/>

            {/* Capacitor */}
            <TbCircuitCapacitorPolarized className = "absolute mt-[3920px] ml-[72%] text-[2vw]  z-10"/>

            {/* Circuit Complex */}
            <PiCircuitry className = "absolute mt-[3800px] ml-[20%] rotate-15 text-[4vw]  z-10"/>

            {/* Voltage Source */}
            <TbCircuitCell className = "absolute mt-[4120px] ml-[62%] text-[2vw]  z-10"/>

            {/* MicroChip */}
            <GiMicrochip className = "absolute mt-[4200px] ml-[10%] text-[4vw]  z-10"/>

            {/* Youtube */}
            <FiYoutube className = "absolute mt-[4400px] ml-[80%] text-[4vw] rotate-15 z-10"/>

            {/* School Name */}
            <div className = "absolute mt-[910px] ml-[15%] z-10 text-[5vw] italianno-regular">
                School Name
            </div>

            {/* Unity Text */}
            <div className = "absolute mt-[1680px] ml-[5.5%] z-10 text-[5vw] italianno-regular">
                Unity
            </div>

            {/* Pixel Art Text */}
            <div className = "absolute mt-[1680px] ml-[30%] z-10 text-[5vw] italianno-regular">
                Pixel Art
            </div>

            {/* HighSchool Name */}
            <div className = "absolute mt-[2350px] ml-[65%] z-10 text-[5vw] italianno-regular">
                SS College
            </div>

            {/* High School */}
            <div className = "absolute mt-[2050px] ml-[57%] z-10 text-[5vw] rotate-15 italianno-regular">High School</div>

            {/* College */}
            <div className = "absolute mt-[3850px] ml-[45%] z-10 text-[6vw] -rotate-15 italianno-regular">College</div>

            {/* College Name */}
            <div className = "absolute mt-[4200px] ml-[37%] z-10 text-[6vw] -rotate-8 italianno-regular text-center">Some Engineering<br></br> College</div>

            {/* Kotlin Logo */}
            <SiKotlin className = "absolute mt-[2780px] ml-[72%] z-10 text-[4vw] italianno-regular text-center"/>

            {/* Kotlin */}
            <div className = "absolute mt-[2750px] ml-[78%] z-10 text-[6vw] italianno-regular text-center">
                Kotlin
            </div>

            {/* Flutter Icon */}
            <FaFlutter className = "absolute mt-[5030px] ml-[18%] z-10 text-[4vw] italianno-regular text-center"/>

            {/* Flutter */}
            <div className = "absolute mt-[5000px] ml-[25%] xl: z-10 text-[6vw] italianno-regular text-center">
                Flutter
            </div>

            {/* React Icon */}
            <FaReact className = "absolute mt-[5030px] ml-[65%] z-10 text-[4vw] italianno-regular text-center"/>

            {/* React */}
            <div className = "absolute mt-[5000px] ml-[70%] z-10 text-[6vw] italianno-regular text-center">
                React
            </div>

            {/* Combined SVG */}
            <svg
                // width="1321" 
                // height="4306" 
                viewBox="0 0 1321 4306" 
                fill="none" 
                preserveAspectRatio="none"
                className="relative w-full bg-black min-h-[5000px] px-24"
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
                
                {/* 2. Bottom Swiggly Path (Connects to the end of the spine) */}
                <motion.path
                    ref={pathRef2}
                    d="M384 4296C384 4296 350 4201.5 414.5 4168C479.001 4134.5 659.933 4125.71 760 4105C968 4114 1106 4131.5 1145 4168C1185.21 4205.63 1173 4296 1173 4296" 
                    stroke="#F2FFC9" 
                    strokeWidth={10} 
                    strokeLinecap="round"
                    fill="none"
                    strokeDashoffset={stroke2}
                />
                
                {/* 3. Upper Left Branch Path */}
                <motion.path
                    ref={pathRef3}
                    d="M760.201 316C706.968 375.138 666.783 402.968 592.701 432C509.283 464.691 351.201 418.5 305.201 485.5C241.32 578.543 267 630 264.828 734.5" 
                    stroke="#F2FFC9" 
                    strokeWidth={10} 
                    strokeLinecap="round"
                    fill="none"
                    strokeDashoffset={stroke3}
                />
                
                {/* 4. Upper Right Branch Path */}
                <motion.path
                    ref={pathRef4}
                    d="M760.5 1772C814.378 1816.22 850.03 1836.58 915.5 1860.5C994.118 1889.22 1075.69 1852.99 1117.5 1925.5C1134.79 1955.49 1134.5 1980.5 1134.5 1980.5" 
                    stroke="#F2FFC9" 
                    strokeWidth={10} 
                    strokeLinecap="round"
                    fill="none"
                    strokeDashoffset={stroke4}
                />
                
                {/* 5. Middle Right Branch Path */}
                <motion.path
                    ref={pathRef5}
                    d="M1135.13 2191C1135.13 2191 1131.2 2236.09 1143.03 2254.01C1175.24 2302.77 1281.7 2229.07 1303.56 2282.86C1312.43 2304.68 1311.47 2336 1311.47 2336" 
                    stroke="#F2FFC9" 
                    strokeWidth={10} 
                    strokeLinecap="round"
                    fill="none"
                    strokeDashoffset={stroke5}
                />
                
                {/* 6. Lower Left Branch Path */}
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
        </div>
    );
};

export default MyJourney;