import React from "react";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="bg-white flex flex-col items-center pt-10 w-full">
      <div className="border-2 p-5">
        <h1 className="mb-5 font-semibold text-gray-500">
          Please feel free to contact me at any time!
        </h1>
        <div className="flex flex-row items-center gap-10">
          <MdOutlineEmail size={40} />
          <h1 className="font-bold">pride81_@hotmail.com</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
