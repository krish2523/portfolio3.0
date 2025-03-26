import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const menuOption = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <nav className="fixed top-0 z-1 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-0 py-3 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-1xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Krish Kapoor
      </a>
      <ul className="hidden md:flex gap-6 ">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 "
        >
          Home
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Tech
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          Contact
        </a>
      </ul>
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-fuchsia-500 hover:opacity-100">
          <BsInstagram />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub />
        </li>
      </ul>

      {IsOpen ? (
        <BiX className="block md:hidden text:4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text:4xl" onClick={menuOpen} />
      )}

      {IsOpen && <div className="fixed right-0 top-8"></div>}
    </nav>
  );
};

export default Navbar;
