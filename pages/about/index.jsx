import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import CountUp from "react-countup";
import { FaFigma } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiMiro,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "UI/UX Design",
        icons: [
          FaFigma,
          SiAdobexd,
          SiAdobephotoshop,
          SiAdobeillustrator,
          SiMiro,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      { title: "Best Design Award - User Experience", stage: "2023" },
      { title: "Excellence Award - System Optimization", stage: "2022" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UX/UI Designer - TCS", stage: "2022 - 2024" },
      { title: "System Engineer - TCS", stage: "2021 - 2022" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Mechanical Engineer - KCG College, Chennai", stage: "2020" },
      { title: "Certified UI/UX Designer - GUVI, Chennai", stage: "2022" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  // Memoized CountUp to prevent re-renders
  const CountUpComponent = useMemo(() => {
    return (
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
      >
        <div className="flex flex-1 xl:gap-x-6">
          {[
            { end: 3, label: "Years of experience" },
            { end: 20, label: "Satisfied clients", extra: "+" },
            { end: 10, label: "Finished projects", extra: "+" },
            { end: 2, label: "Winning awards" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`relative flex-1 ${
                i !== 3
                  ? "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                  : ""
              }`}
            >
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={stat.end} duration={5} />{" "}
                {stat.extra || ""}
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }, []);

  return (
    <div className="h-full bg-black pt-32 xl:pt-42 text-center xl:text-left">
      <Circles />

      {/* Avatar Image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] pointer-events-none"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            For the past 2 years, I've worked as a UI/UX Designer at TCS,
            creating intuitive and engaging digital experiences for businesses
            and consumers.
          </motion.p>

          {/* Memoized Counters */}
          {CountUpComponent}
        </div>

        {/* Info Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 md:gap-x-6 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                role="button"
                tabIndex="0"
                className={`cursor-pointer capitalize text-sm md:text-lg relative after:content-[''] 
            after:block after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 
            transition-all duration-300 ${
              index === itemI
                ? "text-accent after:w-full after:bg-accent"
                : "after:w-8"
            }`}
                onClick={() => setIndex(itemI)}
                onPointerDown={() => setIndex(itemI)} // Fix for laptops
                onKeyDown={(e) => e.key === "Enter" && setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
  {aboutData[index].info.map((item, itemI) => (
    <div
      key={itemI}
      className="flex flex-wrap md:flex-nowrap max-w-max gap-x-2 items-center text-center text-white/60"
    >
      <div className="font-light mb-2 md:mb-0">{item.title}</div>
      {item.stage && <div className="hidden md:flex">-</div>}
      {item.stage && <div>{item.stage}</div>}

      {/* ✅ Only render icons if `item.icons` exists */}
      {item.icons?.length > 0 && (
        <div className="flex gap-x-2 ml-2">
          {item.icons.map((Icon, iconI) => (
            <Icon key={iconI} className="text-2xl text-white" />
          ))}
        </div>
      )}
    </div>
  ))}
</div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
