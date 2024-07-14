import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectItem({ item }) {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-10 w-full">
      <a href={item.demo} className="">
        <img
          className="h-[250px] w-[300px] object-cover border-2 cursor-pointer"
          src={item.image}
          alt={item.title}
        />
      </a>
      <div className="flex flex-col justify-center items-center gap-3 w-[300px]">
        <h1 className="font-bold">{item.title}</h1>
        <h1 className="text-sm">{item.desc}</h1>
        <div className="flex flew-row justify-evenly font-bold text-sm w-[300px]">
          {item.languages.map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </div>

        <div className="flex flex-row justify-between gap-10 w-[300px]">
          <a href={item.github} target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-sm">Code</h1>
              <FaGithub />
            </div>
          </a>
          <a href={item.demo} target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-1 items-center">
              <h1 className="text-sm">Live Demo</h1>
              <FaExternalLinkAlt />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
