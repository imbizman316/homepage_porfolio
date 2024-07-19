import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppContext } from "./context";
import LanguageBar from "./LanguageBar";

function Navbar() {
  const { showMenu, setShowMenu, language } = useAppContext();

  return (
    <div className="flex flex-row justify-between w-[100%] p-5 bg-white items-center h-20">
      <Link to="/" className="font-bold tracking-wider">
        Mike.dev
      </Link>
      <div className="hidden sm:hidden md:flex lg:flex flex-row gap-4 text-sm font-semibold">
        <Link
          className="hover:font-extrabold hover:text-blue-950 hover:underline"
          to="/"
        >
          Home
        </Link>
        <Link
          className="hover:font-extrabold hover:text-blue-950 hover:underline"
          to="/about"
        >
          About
        </Link>
        <Link
          className="hover:font-extrabold hover:text-blue-950 hover:underline"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="hover:font-extrabold hover:text-blue-950 hover:underline"
          to="/contact"
        >
          Contact
        </Link>
        <LanguageBar />
      </div>
      <RxHamburgerMenu
        className={`sm:block md:hidden lg:hidden text-black text-3xl cursor-pointer ${
          showMenu && "rotate-90"
        } duration-300 relative`}
        onClick={() => setShowMenu(!showMenu)}
      />
      {
        <div
          className={`overflow-hidden sm:hidden md:hidden lg:hidden absolute top-20 bg-white w-full flex justify-center items-center flex-col ${
            showMenu
              ? "right-0 overflow-hidden scale-x-100"
              : "right-[-600px] w-0 overflow-hidden scale-x-0"
          } h-[50%] duration-300 gap-7 text-base py-5 z-50 border-b-4"
          }`}
        >
          <nav
            className={`flex flex-col gap-7 justify-center items-center ${
              showMenu
                ? ""
                : "hidden w-0 h-0 overflow-hidden border-2 border-black scale-x-0"
            }`}
            onClick={() => setShowMenu(false)}
          >
            <Link
              className="hover:font-extrabold hover:text-blue-950 hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:font-extrabold hover:text-blue-950 hover:underline"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:font-extrabold hover:text-blue-950 hover:underline"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="hover:font-extrabold hover:text-blue-950 hover:underline"
              to="/contact"
            >
              Contact
            </Link>
            <LanguageBar />
          </nav>
        </div>
      }
    </div>
  );
}

export default Navbar;
