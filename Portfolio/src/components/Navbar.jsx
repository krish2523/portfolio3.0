import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <nav className="fixed top-0 z-1 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-4 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Krish Kapoor
      </a>
      <ul className="hidden md:flex gap-10 ">
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
        <a
          href="https://www.instagram.com/__truly_krish__/"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-fuchsia-500 hover:opacity-100"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/krish-kapoor-12aa1b28a/"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/krish2523/krish2523"
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"
        >
          <BsGithub />
        </a>
      </ul>

      {IsOpen ? (
        <BiX className="block md:hidden text:4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text:4xl" onClick={menuOpen} />
      )}

      {IsOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12${
            IsOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8 px-3 py-3">
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

          <ul className="flex flex-wrap gap-5 px-3">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
