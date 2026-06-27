import HeroSection from "./sections/Hero/HeroSection.jsx";
import AppBar from "./components/common/AppBar.jsx";
import JourneyTimeline from "./sections/Journey/JourneyTimeline.jsx";
import ContactMe from "./sections/Contact/ContactMe.jsx";
import SideMenu from "./components/common/SideMenu.jsx";
import UsePresenceData from "./sections/Projects/UsePresenceData.js";
import DesktopIcons from "./components/desktop/DesktopIcons.jsx";
import ClippyCompanion from "./components/desktop/ClippyCompanion.jsx";
import XPBackground from "./components/common/XPBackground.jsx";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutQuint
      direction: 'vertical', // vertical scrolling
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Main page content */}
      <div className="relative flex flex-col w-full overflow-x-hidden">
        <XPBackground />
        {/* Fixed background grid overlay */}
        <div className="pointer-events-none fixed inset-0 z-0 bg-retro-desktop-dither opacity-15" />

        {/* Desktop Background elements for larger screens */}
        <div className="hidden md:block">
          <DesktopIcons />
        </div>

        <ClippyCompanion />

        <div className="relative z-10 flex flex-col w-full">
          <AppBar />
          <HeroSection />
          <JourneyTimeline />
          <UsePresenceData />
          <ContactMe />

          {/* Retro XP Version Footer */}
          <footer className="relative z-10 py-6 text-center text-slate-200 text-xs font-mono select-none bg-[#0e2c6e] border-t border-[#002c91] mt-8">
            <p>Pramit XP Portfolio OS [Version 2.0.0.26] (Service Pack 2)</p>
            <p className="text-[10px] text-slate-400 mt-1">© 2026 Pramit. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
