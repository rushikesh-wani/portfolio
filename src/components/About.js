import React from "react";
import img from "../assets/rushi.jpg";
const About = () => {
  return (
    <>
      <div className="px-5 py-4 lg:px-36 lg:py-10 text-white">
        <h1 className="text-4xl sm:text-5xl text-white font-medium text-center">
          About Me
          <hr class="my-3 sm:mx-auto border-gray-400 lg:my-2" />
        </h1>

        <div className="block md:flex">
          <div className="px-0 w-56 h-56 md:w-[700px] md:px-6 mx-auto">
            <img
              className="bg-cover shadow-md shadow-slate-400/30 rounded-full"
              src={img}
              alt=""
            />
          </div>
          <div className="text-justify text-white bg-gradient-to-r from-secondary-dark via-slate-800 to-slate-600 my-4 md:my-0 p-2 sm:p-4 rounded-xl">
            <p>
              <span className="text-2xl">W</span>elcome to my portfolio! As a
              highly motivated and ambitious multidisciplinary engineering
              student, I am eager to expand my knowledge and leverage my skills
              in the field of web development. My strong desire and passion for
              gaining a better understanding of React.js drive my confidence in
              excelling in my work.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
