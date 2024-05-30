import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-between w-[100%] p-5 bg-white items-center h-20">
      <div className="font-bold tracking-wider">Mike.dev</div>
      <div className="flex flex-row gap-4 text-sm font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
