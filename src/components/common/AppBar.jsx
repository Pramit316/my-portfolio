import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AppBar = () => {

    return (
        <header className = "mt-4  w-full p-4">
            <nav className = "flex justify-between items-center px-4 sm:px-6 lg:px-12 ">

                {/* Left: Logo / Portfolio */}
                <button className = "flex items-center !bg-transparent">
                    <div className = "px-2 mr-2 bg-linear-to-br from-sky-500 to-indigo-500 rounded-lg text-3xl md:text-xl">P</div>
                    <div className = "text-2xl md:text-xl">Portfolio</div>
                </button>

                {/* Middle Nav Links */}
                <div className = "hidden md:flex flex-wrap justify-center text-sm items-center ">
                    <a href = "#home" className = "px-4 py-2 !rounded-xl !bg-transparent !text-white">Home</a>
                    <a href = "#journey" className = "px-4 py-2 !rounded-xl !bg-transparent !text-white">Journey</a>
                    <a href = "#project" className = "px-4 py-2 !rounded-xl !bg-transparent !text-white">Project</a>
                    <a href = "#contact" className = "px-4 py-2 !rounded-xl !bg-transparent !text-white">Contact</a>
                </div>

                {/* hamburger button */}
                <button className = "md:hidden !bg-transparent text-xl">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Let's Talk Button */}
                <button className = "hidden md:inline bg-linear-to-br from-sky-500 to-indigo-500 rounded-md !text-sm !rounded-full">Lets Talk</button>
            </nav>
        </header>
    );
}

export default AppBar;