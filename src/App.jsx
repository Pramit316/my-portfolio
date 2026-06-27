import HeroSection from "./sections/Hero/HeroSection.jsx";
import AppBar from "./components/common/AppBar.jsx";
// import MyJourney from "./sections/Journey/MyJourney.jsx";
import JourneyTimeline from "./sections/Journey/JourneyTimeline.jsx";
// import MyProjects from "./sections/Projects/MyProjects.jsx";
import ContactMe from "./sections/Contact/ContactMe.jsx";
import SideMenu from "./components/common/SideMenu.jsx";
import UsePresenceData from "./sections/Projects/UsePresenceData.js";
import DesktopIcons from "./components/desktop/DesktopIcons.jsx";
import StickyNote from "./components/desktop/StickyNote.jsx";
import ClippyCompanion from "./components/desktop/ClippyCompanion.jsx";

function App() {
  
  return (
    <div className="relative flex flex-col w-full overflow-x-hidden bg-[#3b6ea5]">
      {/* Fixed background grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-retro-desktop-dither" />
      
      {/* Desktop Background elements for larger screens */}
      <div className="hidden md:block">
        <DesktopIcons />
      </div>
      <div className="hidden lg:block">
        <StickyNote />
      </div>

      <ClippyCompanion />

      <div className="relative z-10 flex flex-col w-full">
        <AppBar></AppBar>
        <HeroSection></HeroSection>
        <JourneyTimeline />
        <UsePresenceData />
        <ContactMe></ContactMe>
        
        {/* Retro XP Version Footer */}
        <footer className="relative z-10 py-6 text-center text-slate-200 text-xs font-mono select-none bg-[#0e2c6e] border-t border-[#002c91] mt-8">
          <p>Pramit XP Portfolio OS [Version 2.0.0.26] (Service Pack 2)</p>
          <p className="text-[10px] text-slate-400 mt-1">© 2026 Pramit. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
