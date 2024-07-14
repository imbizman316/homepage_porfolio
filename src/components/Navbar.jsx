import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex flex-row justify-between w-[100%] p-5 bg-white items-center h-20">
      <Link to="/" className="font-bold tracking-wider">
        Mike.dev
      </Link>
      <div className="hidden sm:hidden md:flex lg:flex flex-row gap-4 text-sm font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <RxHamburgerMenu
        className={`sm:block md:hidden lg:hidden text-black text-3xl cursor-pointer ${
          showMenu && "rotate-90"
        } duration-300 relative`}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div
          className={`sm:block md:hidden lg:hidden absolute top-20 bg-white w-full flex justify-center items-center flex-col ${
            showMenu ? "right-0" : "right-[-300px]"
          } duration-300 gap-4 text-sm font-semibold py-5 z-50 border-b-4`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
