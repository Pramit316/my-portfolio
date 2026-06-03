import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";
import { motion } from "framer-motion";

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
    const sections = Array.from(document.querySelectorAll("section[id]")).filter((el) =>
      ["hero", "journey", "project", "contact"].includes(el.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-120px 0px -45% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === "hero" ? 0 : offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
              onClick={(e) => handleScroll(e, item.id)}
              className="relative px-4 py-2 !rounded-xl !bg-transparent !text-white transition hover:!text-cyan-300"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
                </div>

                {/* hamburger button */}
                <button className = "md:hidden !bg-transparent text-xl" onClick={()=> setOpen(!open)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Let's Talk Button */}
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hidden md:inline bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full px-5 py-2 !text-sm font-medium !text-white hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/20">Lets Talk</a>
            </nav>

            {open && (
                <SideMenu onClose={()=> setOpen(false)} onScroll={handleScroll}></SideMenu>
            )}
        </header>
    );
}

export default AppBar;