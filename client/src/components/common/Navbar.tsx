import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/logo.png";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
    isActive
      ? "text-[#0F5132] dark:text-[#D4AF37]"
      : "text-slate-700 hover:text-[#0A2647] dark:text-slate-300 dark:hover:text-white"
  }`;

// Services data with categories
const servicesData = [
  { name: "Web Development", path: "/services#web-development" },
  { name: "Mobile App Development", path: "/services#mobile-app" },
  { name: "Cloud Driven Innovation", path: "/services#cloud-innovation" },
  { name: "Intelligent SaaS Solutions", path: "/services#saas" },
  { name: "UI/UX Design", path: "/services#ui-ux" },
  { name: "Graphic Design", path: "/services#graphic-design" },
  { name: "Digital Marketing", path: "/services#digital-marketing" },
  { name: "Software Testing", path: "/services#software-testing" },
  { name: "CRM Apps", path: "/services#crm" },
  { name: "ERP & HRM Solutions", path: "/services#erp-hrm" },
  { name: "Custom Apps", path: "/services#custom-apps" },
  { name: "Video Editing", path: "/services#video-editing" },
];

// Courses data with categories
const coursesData = {
  "Development & Programming": [
    "MERN Stack Development",
    "Web Development",
    "Python Programming",
    "Core Java",
    "Database Engineering",
  ],
  "Design & Creative": [
    "UI/UX Design",
    "Graphic Design",
    "Video Editing",
  ],
  "AI & Data": [
    "AI Engineering",
    "AI Integration Using Python",
    "ETL Testing",
    "Business Analyst",
  ],
  "Business & DevOps": [
    "Digital Marketing",
    "Tally / Tally Prime",
    "DevOps Engineering",
    "Software Testing",
  ],
  "Programs": [
    "Internship Program",
    "Final Year Projects",
  ],
};

// Flatten courses for mobile menu
const allCourses = Object.values(coursesData).flat();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);
  const closeDropdown = () => setOpenDropdown(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)]">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-4 shrink-0">
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 xl:gap-10 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className={`group flex items-center gap-1.5 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
                  openDropdown === "services"
                    ? "text-[#0F5132] dark:text-[#D4AF37]"
                    : "text-slate-700 hover:text-[#0A2647] dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                Services
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-64 origin-top rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 transition-all duration-300 dark:border-slate-700 dark:bg-slate-950 dark:shadow-slate-800/30 ${
                  openDropdown === "services"
                    ? "scale-100 opacity-100 visible"
                    : "scale-95 opacity-0 invisible"
                }`}
              >
                <div className="grid gap-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => { closeDropdown(); closeMenu(); }}
                      className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#0F5132]/5 hover:text-[#0F5132] dark:text-slate-300 dark:hover:bg-[#D4AF37]/10 dark:hover:text-[#D4AF37]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Dropdown with Categories */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "courses" ? null : "courses")}
                className={`group flex items-center gap-1.5 text-[15px] font-semibold tracking-wide transition-colors duration-300 ${
                  openDropdown === "courses"
                    ? "text-[#0F5132] dark:text-[#D4AF37]"
                    : "text-slate-700 hover:text-[#0A2647] dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                Courses
                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    openDropdown === "courses" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[480px] origin-top rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 transition-all duration-300 dark:border-slate-700 dark:bg-slate-950 dark:shadow-slate-800/30 ${
                  openDropdown === "courses"
                    ? "scale-100 opacity-100 visible"
                    : "scale-95 opacity-0 invisible"
                }`}
              >
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(coursesData).map(([category, courses]) => (
                    <div key={category} className="space-y-1.5">
                      <p className="px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                        {category}
                      </p>
                      {courses.map((course) => (
                        <Link
                          key={course}
                          to={`/courses#${course.toLowerCase().replace(/ /g, '-')}`}
                          onClick={() => { closeDropdown(); closeMenu(); }}
                          className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#0F5132]/5 hover:text-[#0F5132] dark:text-slate-300 dark:hover:bg-[#D4AF37]/10 dark:hover:text-[#D4AF37]"
                        >
                          {course}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#c89e2f] to-[#0F5132] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:scale-105"
            >
              Free Consultation
              <FaArrowRight size={12} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
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

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#c89e2f] to-[#0F5132] px-5 py-3 text-[15px] font-semibold text-white shadow-lg shadow-amber-500/20"
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