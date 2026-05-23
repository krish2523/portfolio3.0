import { motion } from "motion/react";
import {
  BiLogoBootstrap,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCss3,
} from "react-icons/bi";
import { SiExpress, SiOpenai, SiLangchain, SiFastapi } from "react-icons/si";

const skills = [
  {
    Icon: BiLogoJavascript,
    name: "JavaScript",
    color: "#f7df1e",
    bg: "rgba(247,223,30,0.1)",
  },
  {
    Icon: BiLogoReact,
    name: "React.js",
    color: "#61dafb",
    bg: "rgba(97,218,251,0.1)",
  },
  {
    Icon: BiLogoNodejs,
    name: "Node.js",
    color: "#68a063",
    bg: "rgba(104,160,99,0.1)",
  },
  {
    Icon: BiLogoMongodb,
    name: "MongoDB",
    color: "#47a248",
    bg: "rgba(71,162,72,0.1)",
  },
  {
    Icon: BiLogoPython,
    name: "Python",
    color: "#ffd43b",
    bg: "rgba(255,212,59,0.1)",
  },
  {
    Icon: SiExpress,
    name: "Express",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.07)",
  },
  {
    Icon: SiFastapi,
    name: "FastAPI",
    color: "#009688",
    bg: "rgba(0,150,136,0.1)",
  },
  {
    Icon: SiOpenai,
    name: "OpenAI",
    color: "#74aa9c",
    bg: "rgba(116,170,156,0.1)",
  },
  {
    Icon: SiLangchain,
    name: "LangChain",
    color: "#1c7cac",
    bg: "rgba(28,124,172,0.1)",
  },
  {
    Icon: BiLogoTailwindCss,
    name: "Tailwind",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.1)",
  },
  {
    Icon: BiLogoBootstrap,
    name: "Bootstrap",
    color: "#7952b3",
    bg: "rgba(121,82,179,0.1)",
  },
  { Icon: BiLogoGit, name: "Git", color: "#f1502f", bg: "rgba(241,80,47,0.1)" },
  {
    Icon: BiLogoHtml5,
    name: "HTML5",
    color: "#e34f26",
    bg: "rgba(227,79,38,0.1)",
  },
  {
    Icon: BiLogoCss3,
    name: "CSS3",
    color: "#264de4",
    bg: "rgba(38,77,228,0.1)",
  },
  {
    Icon: BiLogoJava,
    name: "Java",
    color: "#f89820",
    bg: "rgba(248,152,32,0.1)",
  },
];

// Duplicate for seamless loop
const skillsLoop = [...skills, ...skills];

const SkillCard = ({ skill, index }) => (
  <motion.div
    key={index}
    whileHover={{ y: -8, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    data-cursor-hover
    className="flex flex-col items-center gap-3 px-6 py-8 rounded-2xl cursor-pointer flex-shrink-0 group w-32 md:w-36"
    style={{ background: skill.bg, border: `1px solid ${skill.color}22` }}
  >
    <skill.Icon
      className="text-5xl md:text-6xl transition-all duration-300 group-hover:drop-shadow-lg"
      style={{ color: skill.color }}
    />
    <span className="text-xs font-medium text-white/60 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
      {skill.name}
    </span>
  </motion.div>
);

const Tech = () => {
  return (
    <section
      id="tech"
      className="relative w-full min-h-screen flex flex-col justify-center py-32 overflow-hidden bg-black/50"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section label */}
      <div className="flex flex-col items-center gap-4 mb-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Skills & Tools
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white text-center"
        >
          Technologies I{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Master
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-center max-w-xl text-lg"
        >
          From front-end finesse to back-end power and AI intelligence — here's
          my tech arsenal.
        </motion.p>
      </div>

      <div className="w-full relative py-10 overflow-hidden">
        {/* Marquee Container */}
        <div className="flex overflow-hidden select-none mask-fade-edges mx-auto max-w-[100vw]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 items-center gap-8 pl-8"
          >
            {skillsLoop.map((skill, i) => (
              <SkillCard skill={skill} index={i} key={`loop1-${i}`} />
            ))}
            {skillsLoop.map((skill, i) => (
              <SkillCard skill={skill} index={i} key={`loop2-${i}`} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto w-full px-6 relative z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {[
            { number: "15+", label: "Technologies" },
            { number: "3+", label: "Projects Built" },
            { number: "2+", label: "Years Experience" },
            { number: "∞", label: "Curiosity" },
          ].map(({ number, label }, i) => (
            <div
              key={i}
              className="glass-card gradient-border px-8 py-6 rounded-3xl flex flex-col items-center gap-2 min-w-[150px] md:min-w-[180px] hover:bg-white/5 transition-all duration-300 text-center"
            >
              <span className="text-4xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                {number}
              </span>
              <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] leading-tight">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
