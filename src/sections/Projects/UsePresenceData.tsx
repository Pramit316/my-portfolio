"use client";

import React, { forwardRef, useState } from "react";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { PROJECTS } from "./ProjectData";
import { ProjectCard } from "./MyProjects"; // 🔹 named import

type Direction = 1 | -1;
type Project = (typeof PROJECTS)[number];

export default function UsePresenceData() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);

  function setSlide(newDirection: Direction) {
    const nextIndex = wrap(0, PROJECTS.length, selectedIndex + newDirection);
    setSelectedIndex(nextIndex);
    setDirection(newDirection);
  }

  const color = "#FFD700";

  return (
    <section id="project" className="flex justify-center min-h-[700px] bg-gradient-to-b from-[#090f24] via-[#040712] to-[#090f24] py-12">
      <div className="text-center mt-24 max-w-screen-2xl w-full px-4">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Work</p>
        <h2 className="mt-3 text-4xl font-semibold bg-gradient-to-r from-cyan-200 via-blue-200 to-teal-200 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
          A collection of projects that showcase my skills in full-stack
          development, mobile app creation, and modern web technologies.
        </p>

        <div style={container}>
          <div className="px-10">
            <motion.button
              initial={false}
              //animate={{ backgroundColor: color }}
              //aria-label="Previous"
              style={button}
              onClick={() => setSlide(-1)}
              //whileFocus={{ outline: `2px solid ${color}` }}
              whileTap={{ scale: 0.8 }}
            >
              <motion.div whileTap={{ scale: 0.8 }}>
                <MdKeyboardArrowLeft size={52} color="#e5e7eb" />
              </motion.div>
            </motion.button>
          </div>

          <div className="min-h-[600px]">
            <AnimatePresence
              custom={direction}
              initial={false}
              mode="wait"
            >
              <Slide
                key={PROJECTS[selectedIndex].title}
                project={PROJECTS[selectedIndex]}
              />
            </AnimatePresence>
          </div>
          <div className="px-10">
            <motion.button
              initial={false}
              //animate={{ backgroundColor: color }}
              //aria-label="Next"
              style={button}
              onClick={() => setSlide(1)}
              //whileFocus={{ outline: `2px solid ${color}` }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div whileTap={{ scale: 0.8 }}>
                <MdKeyboardArrowRight size={52} color="#e5e7eb" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              aria-label={`Go to ${p.title}`}
              onClick={() => {
                setDirection(i > selectedIndex ? 1 : -1);
                setSelectedIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex
                  ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400"
                  : "w-2 bg-cyan-500/40 hover:bg-cyan-400/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SlideProps {
  project: Project;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>(function Slide(
  { project },
  ref
) {
  const direction = usePresenceData() as Direction;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -80 }}
      transition={{
        type: "tween",        // ✅ no spring, no bounce
        duration: 0.6,        // ✅ smooth, not snappy
        ease: "easeInOut",    // ✅ clean ease-in / ease-out
      }}
      layout={false}          // ✅ turn off layout spring animation
      style={box}
    >
      <ProjectCard project={project} />
    </motion.div>
  );
});


/**
 * ==============   Icons   ================
 */
const iconsProps: React.SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/**
 * ==============   Styles   ================
 */
const container: React.CSSProperties = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  marginTop: 40,
};

const box: React.CSSProperties = {
  width: "100%",
};

const button: React.CSSProperties = {
  backgroundColor: "transparent",
  width: 10,
  height: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  cursor: "pointer",
  padding: "30",
};
