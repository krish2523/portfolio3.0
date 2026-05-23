import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import image1 from "../public/1.png";
import image2 from "../public/2.png";
import image3 from "../public/3.png";

const projectsData = [
  {
    image: image1,
    title: "Setu: Collaborative Environmental Action Platform",
    tagline: "AI-Powered Civic Reporting",
    description:
      "Setu is a full-stack environmental platform where citizens report local issues with photos. An AI-powered backend instantly verifies and categorizes reports, populating a live incident map with tailored dashboards for NGOs and government officials to coordinate a real-time, data-driven response.",
    technologies: ["React.js", "Python", "FastAPI", "Tailwind CSS", "Firebase", "Leaflet.js", "OpenAI", "LangGraph"],
    link: "https://setu-front.vercel.app/",
    gradient: "from-green-500/20 to-emerald-600/10",
    accent: "#22c55e",
    tag: "🌱 Civic Tech",
  },
  {
    image: image2,
    title: "Strmly: A Smooth Short Video Experience",
    tagline: "Modern Social Video Platform",
    description:
      "STRMLY is a short-video web application built with React.js that allows users to explore, watch, and interact with trending videos in a smooth, responsive interface. Showcases skills in frontend development, API integration, component-driven design, and state management.",
    technologies: ["React.js (Vite)", "Tailwind CSS", "React Icons", "HTML5 Video", "Intersection Observer API"],
    link: "https://strmly-web.vercel.app/",
    gradient: "from-pink-500/20 to-rose-600/10",
    accent: "#ec4899",
    tag: "📱 Social Media",
  },
  {
    image: image3,
    title: "Legal-Transformer: An AI Assistant for Lawyers",
    tagline: "GenAI for Legal Professionals",
    description:
      "Legal AI Assistant is an all-in-one AI-powered platform helping legal professionals with document analysis, risk detection, transcription, contract generation, and legal research. Features Document Analyzer, Audio Transcriber, Contract Generator, and RAG-based Legal Chatbot.",
    technologies: ["LangChain", "Agentic AI", "CrewAI", "Whisper", "LLaMA 3", "GPT-4o-mini", "FAISS", "Streamlit"],
    link: "https://drive.google.com/drive/folders/106MbDyroNrV-GmULqwhvn_a_Z0s52E9g?usp=sharing",
    gradient: "from-violet-500/20 to-purple-600/10",
    accent: "#8b5cf6",
    tag: "⚖️ Legal Tech",
  },
];


const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 10;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    setHovered(false);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto mb-32`}
    >
      {/* Image Container - Fixed size */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.3s ease" }}
        className="relative w-full lg:w-[600px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl group flex-shrink-0"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Badge */}
        <div className="absolute top-4 left-4 z-30 px-3 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/10 tracking-widest uppercase">
          {project.tag}
        </div>
      </div>

      {/* Info - Side aligned */}
      <div className="flex flex-col items-start lg:text-left text-center gap-5 flex-1">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: project.accent }}>
            {project.tagline}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h3>
        </div>

        <p className="text-white/50 text-base leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap lg:justify-start justify-center gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg text-[10px] font-semibold border border-white/5 bg-white/5 text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap lg:justify-start justify-center gap-4 mt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
            style={{
              background: `linear-gradient(135deg, ${project.accent}, ${project.accent}dd)`,
              boxShadow: `0 10px 20px -5px ${project.accent}30`,
            }}
          >
            <HiExternalLink className="text-lg" /> View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen flex flex-col justify-center py-32 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-500" />
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-center max-w-xl"
        >
          A selection of my recent works, ranging from full-stack applications to AI-powered solutions.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-24 md:gap-32">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
export default Project;