import React from "react";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";

function About() {
  return (
    <div className="bg-white flex flex-col items-center pt-10 w-full">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-10">
        <div className="border-2 border-black flex justify-center pt-20 pr-14">
          <div>
            <img className="flex rotate-3" src={photo1} alt="china" />
            <img
              className="w-[150px] relative bottom-40 left-40"
              src={photo2}
              alt="cube"
            />
          </div>
        </div>
        <div className="w-[300px] flex flex-col gap-5">
          <h1 className="text-blue-900 font-bold">ABOUT ME</h1>
          <h1 className="font-bold">
            A dedicated Front-end Developer based in Seoul, South Korea
          </h1>
          <p className="text-sm text-gray-600">
            I was born in Seoul, South Korea but moved to Canada when I was 15
            years old. I returned to Korea in 2007, and got my foot in the game
            industry as as assistant manager in the overseas business team.
            After being in the industry more than 10 years, I finally deicded to
            change my position to coding, which I'd wanted to do for a long
            time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
