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
    link: "https://book-my-show-pi1z.vercel.app/",
  },
  {
    image: image2,
    title: "Library Management System",
    description:
      "The backend of a Library Management System allows users to rent books after verifying their subscription status and checking for any outstanding fines. Utilize Postman or Thunderbolt for managing APIs alongside MongoDB to efficiently add or delete books from the system. This approach will streamline the process and enhance overall functionality.",
    technologies: ["Node.Js", "Express.Js", " MongoDb", " Postman API "],
    link: "https://github.com/krish2523/Library-Management-System",
  },
  {
    image: image3,
    title: "To-Do-List (with Calendar)",
    description:
      "This feature enables users to systematically add tasks by specifying both start and end dates and times, facilitating efficient task management. The integration of the Calendar API with our To-Do List will facilitate a more streamlined user experience, enabling individuals to efficiently search for specific dates associated with their saved tasks.",
    technologies: [
      "HTML",
      "CSS",
      " JavaScript",
      " Tailwind CSS",
      "Calendar API",
    ],
    link: "https://krish2523.github.io/CBTC1/",
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
            Website
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
