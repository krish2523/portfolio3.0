import { motion } from "motion/react";
import { HiBriefcase, HiAcademicCap, HiLocationMarker } from "react-icons/hi";

const experiences = [
  {
    type: "work",
    icon: HiBriefcase,
    title: "Frontend Developer Intern",
    company: "Bluestock Fintech",
    location: "Remote",
    duration: "November 2025 – January 2025",
    description:
      "Developed and maintained RESTful APIs using Node.js and Express. Built responsive React.js UIs integrated with MongoDB. Collaborated with the design team to improve UX by 30%. Implemented JWT-based authentication and role-based access control.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs", "JWT"],
    color: "#7c3aed",
  },
  {
    type: "education",
    icon: HiAcademicCap,
    title: "B.Tech Applied Electronics and Instrumentation Engineering",
    company: "Heritage Institute of Technology",
    location: "India",
    duration: "2023 – Present",
    description:
      "3rd year B.Tech student in Applied Electronics & Instrumentation Engineering with strong foundations in Data Structures & Algorithms, Digital Electronics, Microprocessors, Control Systems, Operating Systems, DBMS, and Computer Networks. Skilled in full-stack web development using React.js, Node.js, Express.js, and MongoDB, with experience building scalable and responsive web applications.",
    tags: ["DSA", "Algorithms", "AI/ML"],
    color: "#a855f7",
  },
];
const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative w-full"
  >
    <div className="rounded-3xl p-6 md:p-8 border border-white/10 bg-[#12071f]/80 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:-translate-y-1 group shadow-[0_0_40px_rgba(124,58,237,0.08)]">
      <div className="flex items-start gap-8">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${exp.color}15`,
            border: `1px solid ${exp.color}30`,
          }}
        >
          <exp.icon className="text-2xl" style={{ color: exp.color }} />
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {exp.title}
            </h3>
            <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/40 whitespace-nowrap self-start">
              {exp.duration}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm mb-5">
            <span
              className="font-bold uppercase tracking-wider text-xs"
              style={{ color: exp.color }}
            >
              {exp.company}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span className="flex items-center gap-1.5 text-white/30 font-medium">
              <HiLocationMarker className="text-sm opacity-60" /> {exp.location}
            </span>
          </div>

          <p className="text-white/60 text-sm md:text-[15px] leading-7 mb-5 max-w-2xl">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-white/5 text-white/40 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-6 mb-16 mt-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Journey
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          My{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/40 text-center max-w-xl text-sm md:text-base mt-2 mb-16"
        >
          My professional journey and academic milestones.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="w-full flex justify-center px-6 ">
        <div className="w-full max-w-6xl flex flex-col gap-6">
          {" "}
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
