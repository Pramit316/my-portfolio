"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollDrawLine() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.5"],
    // start drawing when element starts entering viewport,
    // finish drawing when it fully leaves.
  });

  // Map scroll progress (0 → 1) directly to pathLength
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="my-40 flex justify-center">
      <svg
        width="400"
        height="200"
        viewBox="0 0 400 200"
        className="overflow-visible"
      >
        <motion.path
          d="M20 180 C150 20 250 20 380 180"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,    // <-- animation directly tied to scroll
          }}
        />
      </svg>
    </div>
  );
}
