import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({ onClose, onScroll }) => {
  const handleLinkClick = (e, targetId) => {
    if (onScroll) {
      onScroll(e, targetId);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] md:hidden">
      {/* Backdrop (click outside to close) */}
      <button
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 !bg-black/60"
      />

      {/* Drawer Panel styled like XP Start Menu */}
      <aside
        id="mobile-menu"
        className="absolute right-0 top-0 h-full w-64 bg-[#d6d3c4] shadow-2xl border-l-[3px] border-[#0054e3] flex flex-col text-[#333333] font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Start Menu User Header */}
        <div className="bg-gradient-to-r from-[#0058e6] via-[#3a93ff] to-[#0055d4] px-4 py-3 flex items-center justify-between text-white border-b border-[#0d2c6e] shadow-sm select-none">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border border-white/50 bg-[#ece9d8] text-[#0054e3] flex items-center justify-center font-bold text-sm shadow-inner">
              P
            </div>
            <span className="font-bold text-sm tracking-wide">Pramit XP</span>
          </div>
          {/* Close Button styled like XP Red X button */}
          <button
            onClick={onClose}
            className="w-[21px] h-[21px] flex items-center justify-center bg-gradient-to-b from-[#f37a5a] to-[#c7321a] hover:from-[#ff9f84] hover:to-[#e04a2c] active:from-[#a0220c] active:to-[#c7321a] border border-[#7d1708] cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
            style={{ padding: 0, borderRadius: "3px" }}
          >
            <span className="text-[10px] text-white font-bold leading-none">X</span>
          </button>
        </div>

        {/* Start Menu White Links Panel */}
        <div className="flex-1 bg-white m-1.5 border border-[#919085] rounded-sm p-1 flex flex-col gap-0.5 overflow-y-auto">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold text-[#333333] hover:text-white hover:bg-[#316ac5] rounded-sm transition-colors no-underline cursor-pointer"
          >
            <span className="text-[16px]">🏠</span>
            <span>Home</span>
          </a>
          <a
            href="#journey"
            onClick={(e) => handleLinkClick(e, "journey")}
            className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold text-[#333333] hover:text-white hover:bg-[#316ac5] rounded-sm transition-colors no-underline cursor-pointer"
          >
            <span className="text-[16px]">📁</span>
            <span>My Journey</span>
          </a>
          <a
            href="#project"
            onClick={(e) => handleLinkClick(e, "project")}
            className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold text-[#333333] hover:text-white hover:bg-[#316ac5] rounded-sm transition-colors no-underline cursor-pointer"
          >
            <span className="text-[16px]">💻</span>
            <span>Featured Projects</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold text-[#333333] hover:text-white hover:bg-[#316ac5] rounded-sm transition-colors no-underline cursor-pointer"
          >
            <span className="text-[16px]">✉️</span>
            <span>Contact Me</span>
          </a>
        </div>

        {/* Start Menu Log Off Footer */}
        <div className="xp-taskbar-gradient p-2 flex items-center justify-end select-none border-t border-[#0d2c6e] mt-auto">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-b from-[#f37a5a] to-[#c7321a] hover:from-[#ff9f84] hover:to-[#e04a2c] active:from-[#a0220c] active:to-[#c7321a] border border-[#7d1708] text-white font-bold text-[11px] rounded shadow-md cursor-pointer"
          >
            <span>Log Off</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SideMenu;
