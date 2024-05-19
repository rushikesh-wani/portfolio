import React from "react";
import img from "../assets/rushi.jpg";
const About = () => {
  return (
    <>
      <div className="bg-zinc-950 px-5 lg:px-36 lg:py-0 lg:pt-4 text-white">
        <h1 className="text-3xl text-gray-300 font-medium py-2 sm:py-4 text-center">
          About Me
          <hr className=""></hr>
        </h1>
        <div className="block sm:flex">
          {" "}
          <div className="bg-gray-500 p-2 w-3/4 mx-auto sm:mx-0">
            <img className="" src={img} alt="" />
          </div>
          <div>
            <p>
              Welcome to my portfolio! I'm a dedicated frontend developer with a
              passion for React. Currently in my second year of engineering
              studies, I'm constantly learning and growing in my craft. With a
              keen eye for detail and a knack for innovation, I specialize in
              creating dynamic and engaging user experiences. Explore my work
              and let's connect to bring your projects to life!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
