import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full mt-[100px] box-border px-4 py-8 md:px-8 lg:px-20 mb-8 min-h-[700px] flex items-center overflow-hidden"
    >
      <div className="relative flex flex-col text-center max-w-7xl mx-auto md:flex-row items-center md:items-center justify-between gap-12 lg:gap-24 md:text-left w-full">
        {/* Left Column: Intro text and CMD window */}
        <div className="w-full lg:w-[65%] max-w-[720px] flex flex-col items-center md:items-start">
          <p className="text-xs uppercase tracking-[0.35em] text-[#002c91] font-extrabold font-sans">Welcome</p>
          <h1 className="mt-2 py-2 px-1 text-slate-950 text-5xl font-black md:text-6xl leading-tight font-sans text-center md:text-left w-full">
            Hey, I am Pramit!
          </h1>
          <h2 className="text-3xl mt-2 py-1 text-[#0054e3] font-bold leading-tight font-sans text-center md:text-left w-full">
            Software Engineer
          </h2>
          <p className="text-lg mt-4 text-slate-900 text-justify font-sans font-medium leading-relaxed">
            A passionate developer who genuinely loves technology, not just for what it can do, but for the freedom it gives to create, explore, and solve real problems. I enjoy turning ideas into fast, clean, and user-friendly applications while constantly learning new tools, experimenting with better approaches, and building solutions that feel meaningful.
          </p>

          {/* CMD / Neofetch Terminal Window */}
          <div
            className="mt-8 bg-black text-white border-[2px] border-t-white border-l-white border-b-gray-600 border-r-gray-600 rounded-t shadow-lg flex flex-col text-[11px] leading-relaxed w-full max-w-full overflow-hidden select-none"
            style={{ fontFamily: '"Lucida Console", "Courier New", Courier, Monaco, monospace' }}
          >
            {/* Title bar */}
            <div className="bg-[#0e2c6e] px-2 py-0.5 flex items-center justify-between text-white font-bold select-none text-[10px]">
              <span>C:\\WINDOWS\\system32\\cmd.exe</span>
              <div className="flex gap-1">
                <span className="w-3 h-3 border border-white flex items-center justify-center text-[8px] cursor-default font-normal leading-none">-</span>
                <span className="w-3 h-3 border border-white flex items-center justify-center text-[8px] cursor-default font-normal leading-none">□</span>
                <span className="w-3 h-3 border border-white flex items-center justify-center text-[8px] cursor-default font-normal leading-none">x</span>
              </div>
            </div>
            <div className="p-3 text-left">
              <p className="text-gray-400">Microsoft Windows XP [Version 5.1.2600]</p>
              <p className="text-gray-400">(C) Copyright 1985-2001 Microsoft Corp.</p>
              <p className="mt-2 text-white">C:\\Documents and Settings\\Pramit&gt; <span className="animate-pulse">neofetch</span></p>

              <div className="flex gap-4 mt-2">
                {/* Tiny ASCII art for OS */}
                <div className="text-cyan-400 font-bold leading-none select-none text-[10px] hidden sm:block">
                  <pre
                    className="leading-[10px]"
                    style={{ fontFamily: '"Lucida Console", "Courier New", Courier, Monaco, monospace' }}
                  >
                    {`   _     _
  (c)___(c)
   / o o \\
  (  ===  )
   \\     /
    \`---'`}
                  </pre>
                </div>
                {/* Stats */}
                <div className="text-[10px] leading-relaxed flex-1">
                  <p><span className="text-[#39ff14] font-bold">OS:</span> Pramit Professional OS</p>
                  <p><span className="text-[#39ff14] font-bold">Kernel:</span> Software Engineer v2.0</p>
                  <p><span className="text-[#39ff14] font-bold">Uptime:</span> 24 years of learning</p>
                  <p><span className="text-[#39ff14] font-bold">Shell:</span> React / Vite / Tailwind</p>
                  <p><span className="text-[#39ff14] font-bold">CPU:</span> AMD Ryzen Processor</p>
                  <p><span className="text-[#39ff14] font-bold">Memory:</span> 16.0 GB RAM / 100% Devotee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[30%] flex justify-center md:justify-end mt-8 md:mt-0 flex-shrink-0"
        >
          {/* Windows XP style image viewer window */}
          <div className="relative bg-[#ece9d8] border-[3px] border-[#0054e3] rounded-t-lg shadow-2xl flex flex-col font-sans select-none w-70 h-80 md:w-80 md:h-92 lg:w-92 lg:h-100 overflow-hidden">
            {/* XP Title bar */}
            <div className="xp-title-bar-gradient px-2 py-1 flex items-center justify-between text-white font-bold text-xs select-none">
              <div className="flex items-center gap-1.5 text-left">
                <span className="text-[10px] md:text-xs tracking-wide">Pramit.jpg - Windows Picture Viewer</span>
              </div>
              {/* Fake controls */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white select-none">_</div>
                <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#7ca1e9] to-[#3b67c3] border border-[#0d2c6e] flex items-center justify-center font-bold text-[9px] text-white select-none">□</div>
                <div className="w-[18px] h-[18px] rounded bg-gradient-to-b from-[#f37a5a] to-[#c7321a] border border-[#7d1708] flex items-center justify-center font-bold text-[9px] text-white select-none">X</div>
              </div>
            </div>

            {/* Menu Bar */}
            <div className="flex items-center gap-3 px-2 py-0.5 border-b border-white text-[10px] text-left text-gray-700 bg-[#ece9d8]">
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Help</span>
            </div>

            {/* Image content inside beveled panel */}
            <div className="flex-1 bg-white p-2 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full border border-[#7f9db9] rounded overflow-hidden">
                <div
                  className="w-full h-full bg-[url('/images/myPortfolio.jpg')] bg-cover bg-center"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
