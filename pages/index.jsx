import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative bg-black h-full">
      {/* Text Section */}
      <div className="w-full h-full bg-gradient-to-r bg-black">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 max-w-2xl mx-auto xl:mx-0 pr-16"
          >
            Creating Impactful <br />
            <span className="text-red-600">Digital Experiences</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 pr-16"
          >
            I craft impactful digital experiences by blending creativity,
            functionality, and user-centered design. My goal is to create
            seamless, intuitive interfaces that enhance usability and
            engagement.
          </motion.p>

          {/* Buttons */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[600px] h-full absolute right-0 bottom-0">
        {/* Background Image */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* Particles */}
        <ParticlesContainer />

        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[80%] h-[90%] max-w-[600px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[25%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
