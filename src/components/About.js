import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "../assets/rushi.jpg";

const About = () => {
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

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="px-5 pb-4 lg:px-36 lg:py-10 text-white" ref={ref}>
      <motion.div
        className="bg-secondary-dark rounded-xl py-2 sm:py-4 bg-opacity-45"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl text-white font-medium text-center"
          variants={variants}
        >
          About Me
          <hr className="my-3 sm:mx-auto border-gray-400 lg:my-2" />
        </motion.h1>

        <motion.div className="block md:flex" variants={variants}>
          <motion.div
            className="px-0 w-56 h-auto md:w-[700px] md:px-6 mx-auto"
            variants={variants}
          >
            <motion.img
              className="bg-cover shadow-md shadow-slate-400/30 rounded-full"
              src={img}
              alt=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <p className="text-center mt-2 text-2xl sm:text-base lg:text-xl">
              Rushikesh Wani
            </p>
            <p className="lg:text-sm text-center">
              Pursing 3rd Year engineering at VIT, Pune
            </p>
          </motion.div>
          <motion.div
            className="text-sm md:text-base text-justify text-white p-2 sm:p-4 rounded-xl"
            variants={variants}
          >
            <p>
              Welcome to my portfolio! As a highly motivated and ambitious
              multidisciplinary engineering student, I am eager to expand my
              knowledge and leverage my skills in the field of web development.
              My strong desire and passion for gaining a better understanding of
              React.js drive my confidence in excelling in my work.
            </p>
            <p>
              A key strength of mine lies in swiftly adapting to newer
              technologies, ensuring I stay at the forefront of the rapidly
              evolving field of full stack web development. Every day, I eagerly
              pursue opportunities to learn, whether through projects or by
              exploring new concepts. Firmly believing in the power of
              collaboration and teamwork, I actively seek opportunities to
              engage with others and contribute to impactful initiatives.
            </p>
            <p>
              Currently, I am seeking internship opportunities where I can
              contribute to a team and help drive organizational success. With a
              strong proficiency in React.js, I have developed projects such as
              Food Villa and a YouTube clone, showcasing my skills and
              dedication. I am enthusiastic about applying my knowledge and
              expertise to real-world challenges, eager to make meaningful
              contributions to your team. Please feel free to explore the
              project section of my profile for a closer look at my work.
            </p>
            <p>
              Thank you for visiting my profile! I am keen to connect with
              fellow professionals, so please don't hesitate to reach out. Let's
              connect and explore potential opportunities to collaborate and
              learn together.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
