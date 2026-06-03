import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";

const AppBar = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(()=> {
        const onKey = (e) => {
            if(e.key === 'Escape') setOpen(false);
        };

        window.addEventListener("keydown", onKey);
        return ()=> window.removeEventListener("keydown", onKey);
    }, []);
    
    useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-96px 0px -10% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

    return (
        <header className="fixed mt-4 w-full py-2 px-4 bg-[#090f24]/80 border border-cyan-500/15 md:backdrop-blur-md rounded-full z-100 shadow-lg shadow-cyan-950/30">
            <nav className = "flex justify-between items-center px-4 sm:px-6 lg:px-12 ">

                {/* Left: Logo / Portfolio */}
                <button className = "flex items-center !bg-transparent">
                    <div className="px-2 mr-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg text-3xl md:text-xl font-bold">P</div>
                    <div className = "text-2xl md:text-xl">Portfolio</div>
                </button>

                {/* Middle Nav Links */}
                <div className = "hidden md:flex flex-wrap justify-center text-sm items-center ">
                    {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 !rounded-xl !bg-transparent !text-white transition ${
                activeSection === item.id
                  ?
                    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:rounded-full after:bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#10b981,#06b6d4)] after:bg-[length:200%_100%] after:animate-[shimmer_2s_linear_infinite]"
                  : "hover:!text-cyan-300"
              }`}
            >
              {item.label}
            </a>
          ))}
                </div>

                {/* hamburger button */}
                <button className = "md:hidden !bg-transparent text-xl" onClick={()=> setOpen(!open)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Let's Talk Button */}
                <a href="#contact" className="hidden md:inline bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-5 py-2 !text-sm font-medium !text-white hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/20">Lets Talk</a>
            </nav>

            {open && (
                <SideMenu onClose={()=> setOpen(false)}></SideMenu>
            )}
        </header>
    );
}

export default AppBar;