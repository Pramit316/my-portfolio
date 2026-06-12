import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full mt-[100px] box-border px-4 py-4 md:px-8 lg:px-20 mb-4 min-h-[700px] flex items-center overflow-hidden"
    >


      <div className="relative flex flex-col text-center max-w-screen-4xl mx-auto md:flex-row items-center md:items-end justify-around gap-30 md:text-left ">
        <div className="md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#002c91] font-extrabold font-sans">Welcome</p>
          <h1 className="mt-2 py-2 px-1 text-slate-950 text-5xl font-black md:text-6xl leading-tight font-sans">
            Hey, I am Pramit!
          </h1>
          <h2 className="text-3xl mt-4 py-1 text-[#0054e3] font-bold leading-tight font-sans">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl mt-6 text-slate-900 text-justify font-sans font-medium leading-relaxed">
            A passionate developer who genuinely loves technology, not just for what it can do, but for the freedom it gives to create, explore, and solve real problems. I enjoy turning ideas into fast, clean, and user-friendly applications while constantly learning new tools, experimenting with better approaches, and building solutions that feel meaningful.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
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
