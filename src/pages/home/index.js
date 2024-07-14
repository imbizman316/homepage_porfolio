import React from "react";
import myImage from "../../assets/images/User_Photo_leeh7_1.jpg";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import About from "../about";
import Contact from "../contact";
import Projects from "../projects";

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col gap-40 justify-start items-start border-2 border-black">
      <div className=" bg-white flex flex-col items-full pt-10 items-center justify-center w-[100%]">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-[400px] justify-between items-center">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl text-center">
              Front-End React Developer
            </h1>
            <h1 className="text-gray-700 px-5">
              Hi, I'm MIke Lee. A hard-working Front-end React Developer based
              in Seoul, South Korea.
            </h1>
          </div>
          <div>
            <img
              className="w-[200px] border-4 border-black rounded-md"
              src={myImage}
              alt="mikelee"
            />
          </div>
        </div>
        <div className="flex flex-row justify-start mt-10">
          <div className="flex justify-center items-center mr-10 font-semibold">
            Tech Stack |
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <FaReact size={40} className="text-blue-400" />
            <IoLogoJavascript size={40} className="text-yellow-500 bg-black" />
            <FaHtml5 size={40} className="text-red-600" />
            <RiTailwindCssFill size={40} className="text-sky-500" />
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
