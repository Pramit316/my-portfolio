import HeroSection from "./sections/Hero/HeroSection.jsx";
import AppBar from "./components/common/AppBar.jsx";
import MyJourney from "./sections/Journey/MyJourney.jsx";
import MyProjects from "./sections/Projects/MyProjects.jsx";
import ContactMe from "./sections/Contact/ContactMe.jsx";

function App() {
  
  return (
    <div className = "flex flex-col border-2 border-red-900 w-full overflow-x-hidden">
      <AppBar ></AppBar>
      <HeroSection></HeroSection>
      <MyJourney></MyJourney>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
