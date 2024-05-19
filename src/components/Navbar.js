import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onClickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="px-5 lg:px-36 py-4 flex justify-between items-center shadow-lg border-b border-gray-500 bg-zinc-950 z-50">
      {/* <img
        className="max-w-32 text-white"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
        alt=""
      /> */}
      <h1 className="text-gray-400 hover:text-white duration-500 text-xl font-medium">
        Rushikesh Wani
      </h1>
      <button
        className="block md:hidden p-1 rounded-2xl text-gray-400 duration-500 hover:bg-slate-600 hover:text-black"
        onClick={onClickHandler}
      >
        <IoMenu className="text-2xl " />
      </button>
      <div className="hidden font-medium text-gray-400 md:flex gap-x-7 ">
        <a href="" className="hover:text-white">
          Home
        </a>
        <a href="" className="hover:text-white">
          About Me
        </a>
        <a href="" className="hover:text-white">
          Projects
        </a>
        <a href="" className="hover:text-white">
          Contact Me
        </a>
      </div>
      <button className="hidden border px-3 py-1 rounded-lg text-gray-400 font-medium border-gray-400 md:block hover:bg-gray-300 hover:text-black duration-500">
        Download CV
      </button>

      {/* this div is for collapsing the humberger menu (remove hidden class to check) */}
      {isMenuOpen ? (
        <div className="fixed inset-0 px-5 py-2 bg-slate-200">
          <div className="flex justify-between items-center">
            <img
              className="max-w-32"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
              alt=""
            />
            <button
              className="block md:hidden p-1 rounded-2xl hover:bg-slate-300"
              onClick={onClickHandler}
            >
              <FaXmark className="text-2xl" />
            </button>
          </div>
          <div id="items" className="text-center py-7 text-lg text-gray-600">
            <p className="py-1 hover:text-black">Home</p>
            <p className="py-1 hover:text-black">About Me</p>
            <p className="py-1 hover:text-black">Projects</p>
            <p className="py-1 hover:text-black">Contact Me</p>
            <button className="border px-3 py-1 rounded-lg border-gray-700 md:block duration-300 hover:bg-green-600 hover:text-white hover:border-green-300">
              Download CV
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden fixed inset-1 px-4 py-1   bg-green-100">
          <div className="flex justify-between items-center">
            <img
              className="max-w-32"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png"
              alt=""
            />
            <button
              className="block md:hidden p-1 rounded-2xl hover:bg-slate-300"
              onClick={onClickHandler}
            >
              <FaXmark className="text-2xl" />
            </button>
          </div>
          <div id="items" className="py-10 text-lg text-gray-600">
            <p className="">Home</p>
            <p className="">About Me</p>
            <p className="">Projects</p>
            <p className="">Contact Me</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
