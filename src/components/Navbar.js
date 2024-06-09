import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown, FaTurnDown, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onClickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="fixed w-screen px-5 lg:px-36 py-4 flex justify-between items-center shadow-lg bg-opacity-95 border-b border-gray-500 bg-primary-dark z-50">
      {/* <img
        className="max-w-32 text-white"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
        alt=""
      /> */}

      <h1 className="text-gray-300 hover:text-white duration-500 text-xl font-medium hover:scale-110">
        Rushikesh Wani
      </h1>
      <button
        className="block md:hidden p-1 rounded-2xl text-gray-400 duration-500 hover:bg-slate-600 hover:text-black"
        onClick={onClickHandler}
      >
        <IoMenu className="text-2xl " />
      </button>
      <div className="hidden font-medium text-gray-300 md:flex gap-x-7 ">
        <a
          href=""
          className="duration-300 hover:text-amber-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Home
        </a>
        <a
          href=""
          className="duration-300 hover:text-amber-600 hover:underline underline-offset-4 hover:scale-110"
        >
          About Me
        </a>
        <a
          href=""
          className="duration-300 hover:text-amber-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Skills
        </a>
        <a
          href=""
          className="duration-300 hover:text-amber-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Projects
        </a>
        <a
          href=""
          className="duration-300 hover:text-amber-600 hover:underline underline-offset-4 hover:scale-110"
        >
          Contact Me
        </a>
      </div>
      <button className="hidden border px-3 py-1 rounded-lg bg-amber-600 text-white font-medium border-amber-500 md:block hover:bg-transparent hover:text-amber-500 duration-500">
        Download CV
      </button>

      {/* this div is for collapsing the humberger menu (remove hidden class to check) */}
      {isMenuOpen ? (
        <div className="fixed inset-2 rounded-xl h-fit px-3 py-2 z-10 bg-opacity-95 bg-gradient-to-r from-secondary-dark via-slate-800 to-slate-700 ">
          <div className="flex justify-between items-center ">
            {/* <img
              className="max-w-32"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
              alt=""
            /> */}
            <h1 className="text-white duration-500 text-xl font-medium">
              Rushikesh Wani
            </h1>
            <button
              className="block md:hidden p-1 rounded-2xl duration-300 hover:bg-zinc-700"
              onClick={onClickHandler}
            >
              <FaXmark className="text-white text-2xl" />
            </button>
          </div>
          <div id="items" className="py-7 px-2 text-base text-white">
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Home
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              About Me
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Skills
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Projects
            </p>
            <p className="p-4 py-2 rounded-xl duration-300 hover:text-gray-300 hover:bg-zinc-950">
              Contact Me
            </p>
            <button className="my-2 mx-4 border px-2 py-1 rounded-lg text-white bg-amber-600 border-amber-500 md:block duration-300 hover:bg-transparent hover:text-amber-500">
              Download CV
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden inset-2 rounded-xl h-fit px-3 py-2 z-10 bg-secondary-dark shadow-md shadow-slate-400/20">
          <div className="flex justify-between items-center">
            <h1 className="text-white duration-500 text-xl font-medium">
              Rushikesh Wani
            </h1>
            <button
              className=" text-white block md:hidden p-1 rounded-2xl hover:bg-zinc-700"
              onClick={onClickHandler}
            >
              <FaAngleDown className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
