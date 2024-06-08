import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../assets/project/Project01.png";
import img2 from "../assets/project/Project02.png";
import img3 from "../assets/project/Project03.png";
import img4 from "../assets/project/Project04.png";
import { ProjectList } from "../Constants";

const Project = () => {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          variants={cardVariants}
        >
          Projects
          <motion.hr
            className="my-3 sm:mx-auto border-gray-400 lg:my-2"
            variants={cardVariants}
          />
        </motion.h1>

        <motion.div
          className="cards-container mx-auto flex flex-wrap gap-x-2 gap-y-6 sm:gap-x-5 sm:gap-y-5 justify-center"
          variants={containerVariants}
        >
          {ProjectList.map((item, index) => (
            <motion.div
              key={index}
              className="Card w-auto h-auto p-3 bg-gradient-to-t from-secondary-dark to-slate-500 sm:w-80 md:w-[290px] rounded-xl duration-500 hover:shadow-md hover:shadow-slate-400/30"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="Card-img h-48">
                <img
                  className="w-full h-full rounded-lg"
                  src={index % 2 === 0 ? img1 : img2} // Use alternating images for demonstration
                  alt="Project thumbnail"
                />
              </div>
              <div className="py-3 rounded-bl-lg rounded-br-lg">
                <p className="text-xl font-medium uppercase">
                  {item.ProjectTitle}
                </p>
                <p className="text-white text-justify text-sm">
                  {item.ProjectDescrp}
                </p>
                <div className="w-full py-3 mx-auto flex flex-wrap justify-around">
                  <button className="text-base px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                    Live Demo
                  </button>
                  <button className="text-base px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                    Review Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;
