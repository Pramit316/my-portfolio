import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop (click outside to close) */}
      <button
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 !bg-black/50 !backdrop-blur-sm"
      />

      {/* Drawer Panel */}
      <aside
        id="mobile-menu"
        className="absolute right-0 top-0 h-full w-60 bg-[#0f0f1a] text-white shadow-lg border-l border-violet-500/20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="text-lg">Menu</div>
          {/* Close icon inside the menu */}
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <FontAwesomeIcon icon={faXmark} className="text-xl" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col">
          <a href="#hero" onClick={onClose} className="hover:bg-violet-500/15 px-4 py-3">Home</a>
          <a href="#journey" onClick={onClose} className="hover:bg-white/10 px-4 py-3">Journey</a>
          <a href="#project" onClick={onClose} className="hover:bg-white/10 px-4 py-3">Projects</a>
          <a href="#contact" onClick={onClose} className="hover:bg-white/10 px-4 py-3">Contact</a>
        </nav>
      </aside>
    </div>
  );
};

export default SideMenu;
