import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "./SideMenu";
import { motion } from "framer-motion";

const AppBar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
    <header className="fixed top-0 left-0 w-full py-1.5 px-4 xp-taskbar-gradient border-b-2 border-b-[#002c91] z-[100] shadow-md">
      <nav className="flex justify-between items-center px-2 sm:px-4 lg:px-6">

        {/* Left: Start Button Logo */}
        <button
          onClick={(e) => handleScroll(e, "hero")}
          className="flex items-center !bg-transparent p-0 border-none cursor-pointer"
        >
          <div className="xp-btn-start flex items-center gap-1.5 h-[32px] px-4 mr-2 cursor-pointer select-none text-[13px] italic font-bold">
            <span className="text-[13px] font-sans not-italic font-bold bg-white text-[#52ad3f] w-[18px] h-[18px] flex items-center justify-center rounded-sm shadow-inner">P</span>
            <span className="font-sans leading-none !text-white tracking-tight select-none">start</span>
          </div>
          {/* <div className="hidden sm:block text-sm font-bold text-white font-sans tracking-wide">Pramit Portfolio</div> */}
        </button>

        {/* Middle Nav Links (Styled as Taskbar buttons) */}
        <div className="hidden lg:flex flex-wrap justify-center text-xs items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`relative px-3.5 py-1 text-xs font-bold !text-white select-none transition-all no-underline flex items-center h-[28px] mx-1 rounded border shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] ${activeSection === item.id
                  ? "bg-[#103496] border-t-black/40 border-l-black/40 border-r-white/25 border-b-white/25 shadow-inner"
                  : "bg-[#3c80f4] border-t-white/30 border-l-white/30 border-r-black/40 border-b-black/40 hover:bg-[#528eff] hover:!text-white"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* hamburger button */}
        <button className="lg:hidden !bg-transparent text-xl p-0 border-none cursor-pointer text-white" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Let's Talk Button */}
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hidden lg:inline-flex xp-btn-blue px-4 py-1.5 !text-xs font-bold !text-white shadow-md hover:brightness-110 active:brightness-95 transition no-underline">Lets Talk</a>
      </nav>

      {open && (
        <SideMenu onClose={() => setOpen(false)} onScroll={handleScroll}></SideMenu>
      )}
    </header>
  );
}

export default AppBar;