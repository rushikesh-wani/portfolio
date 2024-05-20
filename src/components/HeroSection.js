import React from "react";
import img from "../assets/hero5.svg";
import Typewriter from "typewriter-effect";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="bg-zinc-950 px-5 pt-5 lg:px-36 lg:py-0 lg:pt-10 text-white">
      <div className="flex flex-wrap justify-center md:flex-nowrap md:items-center md:justify-between">
        <div className="text-2xl ">
          <p className="text-2xl lg:text-4xl">Hello,</p>
          <p className="text-3xl lg:text-6xl font-normal">
            I'm <span className="text-orange-600">Rushikesh Wani</span>
          </p>
          <p className=" lg:text-3xl">
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
          </p>
          <p className="text-base text-gray-300 my-2">
            Welcome to my portfolio! I'm a dedicated frontend developer with a
            passion for React. Currently in my second year of engineering
            studies, I'm constantly learning and growing in my craft. With a
            keen eye for detail and a knack for innovation, I specialize in
            creating dynamic and engaging user experiences. Explore my work and
            let's connect to bring your projects to life!
          </p>
          <button className="text-base border px-3 py-1  rounded-lg text-gray-400 font-medium border-gray-400 md:block hover:bg-gray-300 hover:text-black duration-500">
            Hire Me!
          </button>
          <div className="flex text-xl py-4 gap-x-2">
            <button className="bg-slate-400 text-black p-2 rounded-3xl shadow-md shadow-neutral-500/50 duration-500 hover:bg-sky-800 hover:text-white">
              <FaLinkedinIn />
            </button>
            <button className="bg-slate-400 text-black p-2 rounded-3xl shadow-md shadow-neutral-500/50 duration-500 hover:bg-blue-800 hover:text-white">
              <FaFacebookF />
            </button>
            <button className="bg-slate-400 duration-500 text-black p-2 shadow-md shadow-neutral-500/50 rounded-3xl hover:bg-gradient-to-br from-fuchsia-600 to-amber-500 hover:text-white">
              <FaInstagram />
            </button>
          </div>
        </div>
        {/* <img className="my-5 h-96 md:my-0 sm:h-96 md:h-80" src={img} alt="" /> */}
        <img className="h-96 md:my-0 sm:h-96" src={img} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
