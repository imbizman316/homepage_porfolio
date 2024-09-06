import React, { useEffect, useState } from "react";
import myImage from "../../assets/images/User_Photo_leeh7_1.jpg";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import About from "../about";
import Contact from "../contact";
import Projects from "../projects";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { RiNextjsFill } from "react-icons/ri";
import ColorfulButton from "../../components/ColorfulButton";
import { motion } from "framer-motion";
import DraggablePointer from "../../components/DraggablePointer";
import Hobbies from "../hobbies";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col gap-20 justify-center items-center">
      <div className="flex flex-col pt-10 items-center justify-center">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center">
          {/* w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px]  */}
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-bold text-2xl text-center">
              Front-End React / NextJS Developer
            </h1>
            <h1 className="text-gray-700 w-[300px] sm:w-[300px] md:w-[500px] lg:w-[600px]">
              {t("home_intro")}
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="mt-5 w-[220px] border-2 border-black rounded-md"
              src={myImage}
              alt="mikelee"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-10 gap-3">
          <div className="flex justify-center items-center font-semibold text-sm sm:text-sm md:text-base lg:text-base">
            Tech Stack:
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <FaReact size={30} className="text-blue-400" />
            <RiNextjsFill size={30} className="text-black" />
            <IoLogoJavascript size={30} className="text-yellow-500 bg-black" />
            <FaHtml5 size={30} className="text-red-600" />
            <RiTailwindCssFill size={30} className="text-sky-500" />
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <About />
      </motion.div>
      <Projects />
      <ColorfulButton />
      {/* <div>
        <h1 className="text-blue-900 font-bold">CAREER</h1>
        <p>Here are the companies and projects I've worked for</p>
      </div>
      <DraggablePointer /> */}
      <Hobbies />
      <Contact />
    </div>
  );
}

export default Home;
