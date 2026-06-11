import HeroSection from "./sections/Hero/HeroSection.jsx";
import AppBar from "./components/common/AppBar.jsx";
// import MyJourney from "./sections/Journey/MyJourney.jsx";
import JourneyTimeline from "./sections/Journey/JourneyTimeline.jsx";
// import MyProjects from "./sections/Projects/MyProjects.jsx";
import ContactMe from "./sections/Contact/ContactMe.jsx";
import SideMenu from "./components/common/SideMenu.jsx";
import UsePresenceData from "./sections/Projects/UsePresenceData.js";

function App() {
  
  return (
    <div className="relative flex flex-col w-full overflow-x-hidden bg-[#3b6ea5]">
      {/* Fixed background grid overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-retro-desktop-dither" />
      
      <div className="relative z-10 flex flex-col w-full">
        <AppBar></AppBar>
        <HeroSection></HeroSection>
        <JourneyTimeline />
        <UsePresenceData />
        <ContactMe></ContactMe>
      </div>
    </div>
  );
}

export default App;
