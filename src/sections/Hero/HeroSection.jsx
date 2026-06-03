import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full mt-[100px] box-border px-4 py-4 md:px-8 lg:px-20 mb-4 min-h-[700px] flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative flex flex-col text-center max-w-screen-4xl mx-auto md:flex-row items-center md:items-end justify-around gap-30 md:text-left ">
        <div className="md:max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Welcome</p>
          <h1 className="mt-2 bg-gradient-to-r from-violet-200 via-white to-cyan-200 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Hey, I am Pramit!
          </h1>
          <h2 className="text-3xl mt-8 bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent font-semibold">
            Application / Web Developer
          </h2>
          <p className="text-xl md:text-2xl mt-8 text-slate-400 text-justify ">
            A passionate developer who loves turning ideas into fast, clean, and
            user-friendly applications. I build full-stack solutions, mobile
            apps, and everything in between.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-500/25 blur-2xl"></div>

          <div
            className="relative bg-[url('/images/myPortfolio.jpg')]
            w-70 h-70 md:w-80 md:h-80 lg:w-92 lg:h-92 
            bg-cover bg-center rounded-2xl 
            shadow-xl shadow-violet-500/40 ring-2 ring-violet-500/30"
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
