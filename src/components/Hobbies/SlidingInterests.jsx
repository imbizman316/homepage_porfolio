import React, { useEffect, useState } from "react";
import { data } from "../data";

function SlidingInterests() {
  const [slideSpeed, setSlideSpeed] = useState(0);
  const slideWidth = 300; // Each slide is 200px wide
  const totalSlides = data.slidingProjects.length * slideWidth; // Total width of the original slides

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideSpeed((prevSpeed) => {
        // If the slides have moved the width of the entire set of slides, reset position
        if (Math.abs(prevSpeed) >= totalSlides) {
          return 0;
        }
        return prevSpeed - 1; // Move left by 1px
      });
    }, 10); // Smooth continuous scrolling

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [totalSlides]);

  return (
    <div
      className="flex flex-row overflow-hidden border border-black w-full mt-10"
      onMouseEnter={() => clearInterval(slideSpeed)}
      onMouseLeave={() => setSlideSpeed(slideSpeed)}
    >
      <div
        className="flex flex-row duration-50 mb-10"
        style={{
          transform: `translateX(${slideSpeed}px)`, // Move horizontally by slideSpeed
          whiteSpace: "nowrap", // Prevent line breaks
        }}
      >
        {data.slidingProjects
          .concat(data.slidingProjects)
          .concat(data.slidingProjects)
          .map((interest, index) => (
            <div key={index}>
              <img
                className="min-w-[200px] sm:min-w-[200px] md:min-w-[200px] lg:min-w-[300px]  xl:min-w-[300px]"
                src={interest.image}
                alt={interest.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default SlidingInterests;
