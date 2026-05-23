import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import image from "../public/Image3.jpg";

const TYPING_TEXTS = [
  "MERN Stack Developer",
  "AI/GenAI Enthusiast",
  "Problem Solver",
  "Open Source Builder",
];

const Typewriter = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = TYPING_TEXTS[currentIndex];
    let timeout;

    if (!isDeleting && charIndex < target.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % TYPING_TEXTS.length);
    }

    setCurrentText(target.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
      {currentText}
      <span className="typewriter-cursor text-violet-400 ml-0.5">|</span>
    </span>
  );
};

const FloatingOrb = ({ style, color }) => (
  <div
    className="blob absolute rounded-full opacity-20 blur-3xl pointer-events-none"
    style={{ 
      background: color, 
      width: style.width + 'px', 
      height: style.height + 'px',
      ...style 
    }}
  />
);

const Hero = () => {
  const photoRef = useRef(null);

  const handle3DTilt = (e) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale(1.04)`;
  };
  const resetTilt = () => {
    if (photoRef.current) {
      photoRef.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 overflow-hidden"
    >
      {/* Ambient blobs */}
      <FloatingOrb
        color="#7c3aed"
        style={{
          width: 400,
          height: 400,
          top: "10%",
          left: "5%",
          animationDelay: "0s",
        }}
      />
      <FloatingOrb
        color="#2563eb"
        style={{
          width: 350,
          height: 350,
          bottom: "5%",
          right: "5%",
          animationDelay: "3s",
        }}
      />
      <FloatingOrb
        color="#a855f7"
        style={{
          width: 200,
          height: 200,
          top: "50%",
          right: "20%",
          animationDelay: "1.5s",
        }}
      />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-16 w-full max-w-6xl mx-auto pt-24">
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left flex-1">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            <span className="text-white">Hi, I'm</span>{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent glow-text">
              Krish
            </span>
            <br />
            <span className="text-white">Kapoor</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-light text-white/70"
          >
            <Typewriter />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-lg text-base text-white/50 leading-relaxed"
          >
            I'm a highly motivated MERN Stack Developer specializing in scalable
            web applications. Proficient in JavaScript, React.js, Node.js,
            MongoDB and passionate about GenAI & CrewAI. A 2nd-year student who
            loves solving hard problems and pushing the boundaries of tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-5 items-center justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full text-xs font-bold tracking-[0.1em] uppercase bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white shadow-2xl shadow-violet-900/40 hover:shadow-violet-700/50 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap active:scale-95"
            >
              View My Work
            </a>
            <a
              href="mailto:krishkapoor20112005@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full text-xs font-bold tracking-[0.1em] uppercase border border-purple-500/40 text-white/80 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center gap-6 pt-2"
          >
            <a
              href="https://github.com/krish2523/krish2523"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-white/40 hover:text-white transition-colors duration-300"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/krish-kapoor-12aa1b28a/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-white/40 hover:text-blue-400 transition-colors duration-300"
            >
              <BsLinkedin />
            </a>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex gap-6 text-sm text-white/40">
              <span>
                <span className="text-white font-semibold">3+</span> Projects
              </span>
              <span>
                <span className="text-white font-semibold">2+</span> Years
                Coding
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: 3D Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 relative"
        >
          {/* Decorative rings */}
          <div
            className="absolute inset-0 rounded-full border-2 border-purple-500/10 scale-110 animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-125" />

          {/* Glowing ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-violet-600/30 via-blue-600/20 to-purple-600/30 blur-xl animate-pulse" />

          <div
            ref={photoRef}
            onMouseMove={handle3DTilt}
            onMouseLeave={resetTilt}
            style={{
              transition: "transform 0.3s ease",
              transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer"
          >
            <img
              src={image}
              alt="Krish Kapoor"
              className="w-full h-full rounded-full object-cover shadow-2xl shadow-violet-900/60 border-2 border-purple-500/20"
            />
            {/* Shimmer overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600/80 to-blue-600/80 backdrop-blur border border-white/10 text-white text-xs font-semibold shadow-xl"
          >
            🚀 Full Stack Dev
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#tech"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <HiArrowDown className="animate-bounce text-lg" />
      </motion.a>
    </section>
  );
};

export default Hero;
