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
    <div className="flex flex-col w-full overflow-x-hidden bg-gradient-to-b from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12]">
      <AppBar ></AppBar>
      <HeroSection></HeroSection>
      <JourneyTimeline />
      {/* <MyProjects></MyProjects> */}
      <UsePresenceData />
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
