import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useTheme } from "../../hooks/useTheme";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
    isActive
      ? "text-[#0F5132] dark:text-[#D4AF37]"
      : "text-slate-700 hover:text-[#0A2647] dark:text-slate-300 dark:hover:text-white"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-4">
            <img
              src={logo}
              alt="Growth Aura Digital Agency"
              className="h-17 w-17 rounded-full object-cover ring-2 ring-[#D4AF37]/35 shadow-md sm:h-16 sm:w-16"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[28px] font-extrabold tracking-tight text-[#0A2647] dark:text-white sm:text-[31px]">
                Growth Aura
              </span>
              <span className="text-[11px] font-medium tracking-[0.34em] text-slate-500 dark:text-slate-400 sm:text-[12px]">
                Creating an Aura of Success
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/courses" className={navLinkClass}>
              Courses
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {/* <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button> */}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#c89e2f] to-[#0F5132] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:scale-105"
            >
              Free Consultation
              <FaArrowRight size={12} />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" onClick={closeMenu} className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/courses" onClick={closeMenu} className={navLinkClass}>
              Courses
            </NavLink>
            <NavLink to="/portfolio" onClick={closeMenu} className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
              Contact
            </NavLink>

            <button
              type="button"
              onClick={toggleTheme}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-[15px] font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <>
                  Light Mode <FaSun size={12} />
                </>
              ) : (
                <>
                  Dark Mode <FaMoon size={12} />
                </>
              )}
            </button>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#c89e2f] to-[#0F5132] px-5 py-3 text-[15px] font-semibold text-white shadow-lg shadow-amber-500/20"
            >
              Free Consultation
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;