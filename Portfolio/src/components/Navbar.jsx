import { useState, useEffect } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Tech", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/__truly_krish__/",
    hoverColor: "hover:text-fuchsia-400",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/krish-kapoor-12aa1b28a/",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: BsGithub,
    href: "https://github.com/krish2523/krish2523",
    hoverColor: "hover:text-purple-400",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 flex w-full min-h-[72px] items-center justify-between px-6 md:px-20 py-5 text-white transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#home" className="relative group">
        <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          KK
        </span>
        <span className="ml-2 text-lg font-light text-white/70 group-hover:text-white transition-colors duration-300">
          Krish Kapoor
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`relative text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-purple-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <ul className="hidden md:flex gap-6 items-center">
        {SOCIAL_LINKS.map(({ icon: Icon, href, hoverColor }, i) => (
          <li key={i}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`text-xl text-white/40 transition-all duration-300 ${hoverColor} hover:scale-125 hover:text-opacity-100 flex items-center justify-center`}
            >
              <Icon />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="ml-4 inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-violet-900/20 hover:shadow-violet-700/40 whitespace-nowrap active:scale-95 text-white"
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden text-2xl text-white/80"
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-[64px] h-screen w-3/4 max-w-sm flex flex-col bg-black/90 backdrop-blur-2xl border-l border-purple-900/30 p-10 gap-8"
          >
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-purple-400"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex gap-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, hoverColor }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xl text-white/50 transition-all duration-300 ${hoverColor}`}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
