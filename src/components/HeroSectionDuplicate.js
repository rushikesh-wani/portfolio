import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { DiscordSVG, FacebookSVG, GithubSVG, TwitterSVG } from "../Constants";

const HeroSectionDuplicate = () => {
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
    <div className="px-5 h-screen flex align-middle lg:px-36" ref={ref}>
      <motion.div
        className="text-center content-center"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <motion.div className="font-medium text-white text-center">
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl font-thin"
            variants={variants}
          >
            Hello,
          </motion.p>
          <motion.p
            className="text-3xl sm:text-6xl md:text-7xl font-normal"
            variants={variants}
          >
            I'm{" "}
            <span className="animate-text-gradient inline-flex bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text leading-tight text-transparent font-medium">
              Rushikesh Wani
            </span>
          </motion.p>
          <motion.p
            className="text-2xl sm:text-2xl md:text-3xl font-thin"
            variants={variants}
          >
            <Typewriter
              options={{
                strings: [
                  "I'm a Frontend Developer!",
                  "I'm a Web Developer!",
                  "I'm a React Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.p>

          <motion.p
            className="text-xs md:text-base font-normal mx-0 lg:mx-28 my-2 leading-snug text-gray-200 bg-secondary-dark bg-opacity-35 p-2 sm:p-4 rounded-xl"
            variants={variants}
          >
            I'm a dedicated frontend developer with a passion for React.
            Currently in my second year of engineering studies, I'm constantly
            learning and growing in my craft. With a keen eye for detail and a
            knack for innovation, I specialize in creating dynamic and engaging
            user experiences. Explore my work and let's connect to bring your
            projects to life!
          </motion.p>
          <motion.div
            className="flex justify-center gap-x-4 my-14"
            variants={variants}
          >
            <button className="text-base border px-3 py-1 rounded-lg text-white font-medium border-white md:block hover:bg-white hover:text-black duration-500">
              Get Connected
            </button>
            <button className="text-base border px-3 py-1 rounded-lg text-white font-medium border-white md:block hover:bg-white hover:text-black duration-500">
              Hire Me
            </button>
          </motion.div>

          <motion.div className="flex justify-center" variants={variants}>
            <FacebookSVG />
            <DiscordSVG />
            <TwitterSVG />
            <GithubSVG />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSectionDuplicate;
