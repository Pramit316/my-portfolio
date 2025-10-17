import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const MyProjects = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center mt-24 max-w-screen-2xl w-full px-4">
        <h2 className="text-4xl font-semibold">Featured Projects</h2>
        <h2 className="mt-6 text-slate-400 text-lg">
          A collection of projects that showcase my skills in full-stack
          development, mobile app creation, and modern web technologies.
        </h2>

        {/* === Project 1 === */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mt-16">
          <div className="flex-shrink-0">
            <div
              className="bg-[url('/images/computer-program-coding-screen.jpg')] w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cover bg-center rounded-xl"
            ></div>
          </div>

          <div className="md:px-10 max-w-lg">
            <h2 className="text-xl font-semibold">E-commerce Platform</h2>
            <p className="text-lg text-slate-400 text-justify mt-3">
              A modern e-commerce platform built with React, Node.js, and Stripe
              integration. Features include real-time inventory, payment
              processing, and admin dashboard.
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">React</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Node.js</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Postgres SQL</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Stripe</button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start mt-6 text-lg gap-4">
              <button className="flex items-center !bg-white text-black !p-2 rounded-lg shadow-md">
                <FaExternalLinkAlt className="mr-2 text-2xl" /> Live Demo
              </button>
              <button className="flex items-center">
                <FaGithub className="mr-2 text-2xl" /> GitHub
              </button>
            </div>
          </div>
        </div>

        {/* === Project 2 === */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mt-16">
          <div className="order-2 md:order-1 md:px-10 max-w-lg">
            <h2 className="text-xl font-semibold">Travel Booking System</h2>
            <p className="text-lg text-slate-400 text-justify mt-3">
              A responsive travel booking web app using MERN stack. Includes
              dynamic search, seat selection, and payment gateway integration.
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">React</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">MongoDB</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Express</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Node.js</button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start mt-6 text-lg gap-4">
              <button className="flex items-center !bg-white text-black !p-2 rounded-lg shadow-md">
                <FaExternalLinkAlt className="mr-2 text-2xl" /> Live Demo
              </button>
              <button className="flex items-center">
                <FaGithub className="mr-2 text-2xl" /> GitHub
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex-shrink-0">
            <div
              className="bg-[url('/images/img.jpg')] w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>

        {/* === Project 3 === */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 mt-16">
          <div className="flex-shrink-0">
            <div
              className="bg-[url('/images/third.jpg')] w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-cover bg-center rounded-xl"
            ></div>
          </div>

          <div className="md:px-10 max-w-lg">
            <h2 className="text-xl font-semibold">Portfolio Website</h2>
            <p className="text-lg text-slate-400 text-justify mt-3">
              A personal portfolio website built with React and Tailwind CSS.
              Fully responsive design showcasing my journey and featured
              projects.
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">React</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Tailwind</button>
              <button className="!rounded-full !px-4 !py-2 border border-slate-400 text-sm">Vite</button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start mt-6 text-lg gap-4">
              <button className="flex items-center !bg-white text-black !p-2 rounded-lg shadow-md">
                <FaExternalLinkAlt className="mr-2 text-2xl" /> Live Demo
              </button>
              <button className="flex items-center">
                <FaGithub className="mr-2 text-2xl" /> GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
