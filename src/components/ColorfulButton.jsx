import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";

function ColorfulButton() {
  const [sketchBook, openSketchBook] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search...");
  const [showLikes, setShowLikes] = useState(false);

  return (
    <div className="bg-slate-900 w-full h-full py-10 flex justify-center items-center flex-col gap-5">
      <div className="h-[30%] w-[40%] hover:h-[32%] hover:w-[42%] flex items-center justify-center bg-gradient-to-r hover:bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 p-1 duration-500">
        <div
          className="hover:text-white text-gray-300 text-sm hover:text-xl w-full h-full flex items-center justify-center duration-300 bg-black tracking-normal hover:tracking-widest sm:text-sm md:text-2xl lg:text-2xl
        "
          onClick={() => openSketchBook(!sketchBook)}
        >
          WORK-IN-PROGRESS
        </div>
      </div>

      <div
        className={`${
          sketchBook ? "h-full" : "h-0 overflow-hidden"
        } duration-300 flex flex-col gap-5 justify-center items-center`}
      >
        <div className="flex justify-start items-start w-[35%]">
          <input
            type="text"
            className="rounded-md w-20 focus:w-full duration-300 px-5 py-1"
            placeholder={placeholder}
            onFocus={() => setPlaceholder("")}
            onBlur={() => setPlaceholder("Search...")}
          />
        </div>
        <div
          className="p-7 bg-gray-800 rounded-lg flex flex-col gap-5"
          onMouseEnter={() => setShowLikes(true)}
          onMouseLeave={() => setShowLikes(false)}
        >
          <img
            src="https://media4.giphy.com/media/KA593kO0JvXMs/giphy.gif?cid=6c09b9522w0xq5zapw7ib9qp1zqx6lyqhiwkhild3rwtvkhn&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="80sPCInterface"
          />
          <div className="w-full flex justify-start gap-5 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FPcrcpOANYHAXfgakLIdCw-hqZl-wbpk1w&s"
              alt="usas"
              width={80}
              className="rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-white font-extrabold">USAS MSX GAME</h1>
              <h3 className="text-gray-400">Konami</h3>
            </div>
          </div>

          <div
            className={`flex flex-start ${
              showLikes ? "h-10" : "h-0"
            } duration-200 overflow-hidden gap-5`}
          >
            <div className="bg-black rounded-lg px-3 flex flex-row justify-center items-center gap-2">
              <FaRegHeart color="white" className="text-white" />
              <h1 className="text-white">8</h1>
            </div>
            <div className="bg-black rounded-lg px-3 flex flex-row justify-center items-center gap-2">
              <FaRegCommentDots color="white" className="text-white" />
              <h1 className="text-white">33</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center animate-pulse-slow">
          <div className="flex justify-center items-center gap-3">
            <FaCircle className="text-white text-3xl" />
            <FaCircle className="text-white text-3xl" />
            <FaCircle className="text-white text-3xl" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-slate-300 h-[20em] gap-6">
          <FaSquareFull className="text-5xl text-red-700 rounded-sm animate-spinAndRest" />
          <FaSquareFull className="text-5xl text-yellow-700 rounded-sm animate-spinAndRest" />
          <FaSquareFull className="text-5xl text-blue-700 rounded-sm animate-spinAndRest" />
        </div>
        <div className="w-full bg-slate-200 flex justify-center items-center h-[400px] flex-col gap-10">
          <div className="bg-slate-900 inline-block rounded-full p-[25px]">
            <div className="bg-blue-500 inline-block rounded-full p-[25px] items-center justify-center">
              <div className="bg-red-700 rounded-full inline-block p-[25px] justify-center items-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <h1 className="font-bold text-3xl after::animate-firstWord">
              I love
            </h1>

            <div className="bg-purple-800 px-2 py-2 rounded-md text-white font-bold text-3xl">
              <p>Scrimba</p>
              <div className="bg-purple-800 px-2 py-2 rounded-md text-white font-bold text-3xl">
                <p>Mikey</p>
                <div className="bg-purple-800 px-2 py-2 rounded-md text-white font-bold text-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorfulButton;
