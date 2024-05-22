import React from "react";
import img1 from "../assets/project/Project01.png";
import img2 from "../assets/project/Project02.png";
import img3 from "../assets/project/Project03.png";
import img4 from "../assets/project/Project04.png";
const Project = () => {
  return (
    <div className="bg-zinc-950 px-5 pb-5 lg:px-36 lg:py-10 lg:pt-4 text-white">
      <h1 className="text-3xl text-gray-300 font-medium py-2 sm:py-4 text-center">
        Projects
      </h1>
      <div className="cards-container mx-auto flex flex-wrap gap-x-2 gap-y-6 sm:gap-x-5 sm:gap-y-5 justify-center align-middle items-center">
        <div className="Card w-auto h-auto sm:w-80 md:w-[350px] rounded-xl duration-500 hover:shadow-md hover:shadow-slate-400/30">
          <div className="Card-img h-44">
            <img
              className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg"
              src={img1}
              alt="Project thumbnail"
            />
          </div>
          <div className="py-3 px-3 bg-slate-900 rounded-bl-lg rounded-br-lg">
            <div className="pb-1 flex text-xs sm:text-sm text-nowrap flex-wrap gap-x-2 gap-y-1">
              <p className="bg-slate-400 px-3 rounded-xl text-black">
                MERN Stack
              </p>
            </div>
            <p className="text-xl font-medium uppercase">
              MERN CRUD Application
            </p>
            <p className="text-gray-300 text-sm">
              Developed a full-stack CRUD application using the MERN stack for
              efficient data management and user interaction. Features include a
              user-friendly interface, robust backend, scalable database,
              responsive design, and deployment on Render.{" "}
            </p>
            <div className="w-full py-2 mx-auto flex flex-wrap justify-around">
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Live Demo
              </button>
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Review Code
              </button>
            </div>
          </div>
        </div>
        <div className="Card w-auto h-auto sm:w-80 md:w-[350px] rounded-xl duration-500 hover:shadow-md hover:shadow-slate-400/30">
          <div className="Card-img h-44">
            <img
              className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg"
              src={img2}
              alt="Project thumbnail"
            />
          </div>
          <div className="py-3 px-3 bg-slate-900 rounded-bl-lg rounded-br-lg">
            <div className="pb-1 flex text-xs sm:text-sm text-nowrap flex-wrap gap-x-2 gap-y-1">
              <p className="bg-slate-400 px-3 rounded-xl text-black">
                React JS
              </p>
            </div>
            <p className="text-xl font-medium uppercase">Food-Villa Food App</p>
            <p className="text-gray-300 text-sm">
              Utilized Swiggy’s API for real-time restaurant data and menus.
              Implemented Redux for efficient cart management, developed a
              Shimmer UI for seamless transitions, integrated react-router-dom
              for navigation, and enabled easy cart modifications.
            </p>
            <div className="w-full py-2 mx-auto flex flex-wrap justify-around">
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Live Demo
              </button>
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Review Code
              </button>
            </div>
          </div>
        </div>
        <div className="Card w-auto h-auto sm:w-80 md:w-[350px] rounded-xl duration-500 hover:shadow-md hover:shadow-slate-400/30">
          <div className="Card-img h-44">
            <img
              className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg"
              src={img3}
              alt="Project thumbnail"
            />
          </div>
          <div className="py-3 px-3 bg-slate-900 rounded-bl-lg rounded-br-lg">
            <div className="pb-1 flex text-xs sm:text-sm text-nowrap flex-wrap gap-x-2 gap-y-1">
              <p className="bg-slate-400 px-3 rounded-xl text-black">
                React JS
              </p>
            </div>
            <p className="text-xl font-medium uppercase">YouTube Clone</p>
            <p className="text-gray-300 text-sm">
              Integrated the YouTube Public Video API to fetch the top 50
              videos. Implemented a Watch Page with real-time metrics, a
              debounced Search Bar, caching for optimized searching, and a Live
              Chat component with API polling for realtime user interaction.
            </p>
            <div className="w-full py-2 mx-auto flex flex-wrap justify-around">
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Live Demo
              </button>
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Review Code
              </button>
            </div>
          </div>
        </div>
        <div className="Card w-auto h-auto sm:w-80 md:w-[350px] rounded-xl duration-500 hover:shadow-md hover:shadow-slate-400/30">
          <div className="Card-img h-44">
            <img
              className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg"
              src={img4}
              alt="Project thumbnail"
            />
          </div>
          <div className="py-3 px-3 bg-slate-900 rounded-bl-lg rounded-br-lg">
            <div className="pb-1 flex text-xs sm:text-sm text-nowrap flex-wrap gap-x-2 gap-y-1">
              <p className="bg-slate-400 px-3 rounded-xl text-black">
                MERN Stack
              </p>
              <p className="bg-slate-400 px-3 rounded-xl text-black">
                React JS
              </p>
            </div>
            <p className="text-xl font-medium uppercase">
              My Portfolio Website
            </p>
            <p className="text-gray-300 text-sm">
              Built a personal portfolio website using React and Tailwind CSS.
              Features include a clean and modern design, responsive layout,
              smooth navigation, and optimized performance for showcasing
              projects and skills effectively.
            </p>
            <div className="w-full py-2 mx-auto flex flex-wrap justify-around">
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Live Demo
              </button>
              <button className="text-lg px-4 py-1 border text-gray-300 border-gray-300 rounded-xl duration-500 hover:bg-gray-300 hover:text-black">
                Review Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
