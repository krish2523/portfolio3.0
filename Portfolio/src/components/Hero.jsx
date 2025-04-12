import image from "/src/public/Image3.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className=" px-16 flex min-h-screen w-full items-center justify-center py-20 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <div className="items-center justify-center ml-2">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={image}
              alt=""
              className="w-[300px] h-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px] md:h-[300px] md:ml-35"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          >
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-5xl py-4">
              Krish Kapoor
            </h1>
            <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
              Web Developer
            </h3>
            <p className="md:text-base text-pretty text-sm text-gray-400">
              I am a highly motivated MERN Stack Developer with a strong focus
              on creating innovative and scalable web applications. I specialize
              in JavaScript, React.js, Node.js, MongoDB, and have expertise in
              GenAI and CrewAI, continuously pushing myself to stay ahead of the
              curve. As a 2nd-year college student, I'm proficient in Data
              Structures & Algorithms and Problem-Solving, and I'm always
              looking for new challenges to further enhance my skills in the
              ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
