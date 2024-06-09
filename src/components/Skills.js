import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  C,
  CSS,
  GitHub,
  HTML,
  Java,
  JavaScript,
  MYSQL,
  MongoDB,
  Postman,
  R,
  ReactJs,
  ReduxJs,
  Tailwind,
  VSCode,
} from "../Constants";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="px-5 pb-5 lg:px-36 lg:py-10 lg:pt-4 text-white" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl text-white font-medium py-2 sm:py-4 text-center"
          variants={containerVariants}
        >
          Skills
          <hr className="my-3 sm:mx-auto border-gray-400 lg:my-2" />
        </motion.h1>

        <motion.div
          className="cards-container text-center mx-auto flex flex-wrap gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-5 justify-center"
          variants={containerVariants}
        >
          <motion.div
            className="w-80 h-36 sm:h-40 bg-secondary-dark text-white rounded-2xl text-center p-4 duration-500 hover:shadow-md hover:shadow-slate-400/30"
            variants={cardVariants}
          >
            <span className="">Programming Languages</span>
            <div className="flex justify-between gap-x-10 p-3">
              <C />
              <Java />
              <R />
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-36 sm:h-40 bg-secondary-dark text-white rounded-2xl text-center p-4 duration-500 hover:shadow-md hover:shadow-slate-400/30"
            variants={cardVariants}
          >
            <span className="">Web Technologies</span>
            <div className="flex justify-between gap-x-10 p-3">
              <JavaScript />
              <HTML />
              <CSS />
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-36 sm:h-40 bg-secondary-dark text-white rounded-2xl text-center p-4 duration-500 hover:shadow-md hover:shadow-slate-400/30"
            variants={cardVariants}
          >
            <span className="">Libraries and Frameworks</span>
            <div className="flex justify-between gap-x-10 p-3">
              <ReactJs />
              <ReduxJs />
              <Tailwind />
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-36 sm:h-40 bg-secondary-dark text-white rounded-2xl text-center p-4 duration-500 hover:shadow-md hover:shadow-slate-400/30"
            variants={cardVariants}
          >
            <span className="">Tools and Software</span>
            <div className="flex justify-between gap-x-10 p-3">
              <VSCode />
              <GitHub />
              <Postman />
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-36 sm:h-40 bg-secondary-dark text-white rounded-2xl text-center p-4 duration-500 hover:shadow-md hover:shadow-slate-400/30"
            variants={cardVariants}
          >
            <span className="">Databases</span>
            <div className="flex justify-evenly gap-x-10 p-3">
              <MongoDB />
              <MYSQL />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
