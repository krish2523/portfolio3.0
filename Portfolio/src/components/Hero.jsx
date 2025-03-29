import image from "/public/image3.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className=" px-16 flex min-h-screen w-full items-center justify-center py-15 md:px-32"
    >
      <div className="flex flex-col items-center justofy-center gap-5 text-white">
        <div className="items-center justify-center ml-2">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={image}
              alt=""
              className="mid:w-[150px] h-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[200px] md:h[100px] ml-35"
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex max-w-[800px] flex-col items-center justify-center text-center"
          >
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent  text-1xl font-light md:text-3xl py-4">
              Krish Kapoor
            </h1>
            <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent  text-2xl font-light md:text-20px font-serif">
              Web Developer
            </h3>
            <p className="md:text-base text-pretty text-sm text-gray-400 md:text-[12px]">
              I am a highly motivated Front-End Developer with a passion for
              creating stunning websites.
              <br /> As a beginner, I am putting in all my efforts to improve my
              skills and take on new challenges.
              <br /> I am currently a 1st-year college student, proficient in
              languages such as HTML, CSS, JavaScript,
              <br /> and C, React.Js, Node.Js and MongoDB and am constantly
              pushing myself to learn more.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
