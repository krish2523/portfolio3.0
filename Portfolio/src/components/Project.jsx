import image1 from "/src/public/1.png";
import image2 from "/src/public/2.png";
import image3 from "/src/public/3.png";

import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "MovieMingle",
    description:
      "A web app that completely functions like a Movie Renting app. Implemented a RazorPay gateway for buying or renting a movie and automated movie updates through The Movie DataBase(TMDB).",
    technologies: ["React.js", "Axios", " JavaScript", " Tailwind CSS", "TMDB"],
    link: "https://movie-mingle-chi.vercel.app/",
  },
  {
    image: image2,
    title: "Researcher.AI",
    description:
      "AI Research Assistant is a powerful and intelligent research tool that leverages OpenAI GPT models and CrewAI agents to perform deep, structured research on any topic. This assistant is designed to provide well-structured reports, integrating real-time news and academic sources as per user preferences.",
    technologies: ["LangChain", "StreamLit", "Agentic AI", "CrewAI"],
    link: "https://github.com/krish2523/Reasercher.ai",
  },
  {
    image: image3,
    title: "Legal-Transformer:An AI Assistant for Lawyers",
    description:
      "Legal AI Assistant is an all-in-one AI-powered platform that helps legal professionals with document analysis, risk detection, transcription, contract generation, and legal research. It features tools like a Document Analyzer, Audio Transcriber, Contract Generator, and RAG-based Legal Chatbot—built using Streamlit, LangChain, Whisper, FAISS, and CrewAI with models like GPT-4o-mini and LLaMA 3.",
    technologies: [
      "LangChain",
      "AgenticAI",
      " CrewAI",
      "Whisper Model",
      "LLaMA 3",
      "GPT-4o-mini",
      "FAISS",
    ],
    link: "https://drive.google.com/drive/folders/106MbDyroNrV-GmULqwhvn_a_Z0s52E9g?usp=sharing",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img
        src={project.image}
        alt=""
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] "
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <a href={project.link} className="font-light text-sky-500">
            Demo
          </a>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
const Project = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
