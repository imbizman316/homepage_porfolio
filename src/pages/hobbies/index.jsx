import React, { useEffect, useRef, useState } from "react";
import NavSubBox from "../../components/navigation/NavSubBox";
import { data } from "../../components/data";
import About from "../about";
import FirstStickyBar from "../../components/Hobbies/FirstStickyBar";
import SlidingInterests from "../../components/Hobbies/SlidingInterests";
import PlusMinusOpenMenu from "../../components/Hobbies/PlusMinusOpenMenu";
import PressArrowToMove from "../../components/Hobbies/PressArrowToMove";

function Hobbies() {
  const [openSub, setOpenSub] = useState(false);
  const [getData, setGetData] = useState("");
  const [showSlide, setShowSlide] = useState(false);
  const screenRef = useRef(null);
  const skillsRef = useRef(null);
  const strengthsRef = useRef(null);

  const scrollToSection = (type) => {
    if (type === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      strengthsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (value) => {
    if (getData === value) {
      // Same button clicked, toggle the menu
      setOpenSub(!openSub);
      setShowSlide(!openSub); // Close slide if closed
    } else {
      if (openSub) {
        // If the menu is already open, trigger the slide animation
        setShowSlide(false); // Reset the slide
        setTimeout(() => {
          setGetData(value); // Update the data
          setShowSlide(true); // Trigger the slide again
        }, 500); // Small delay to reset the slide animation
      } else {
        // If the menu is closed, open it and trigger the slide
        setOpenSub(true);
        setGetData(value);
        setShowSlide(true);
      }
    }

    console.log(value);
  };

  const handleScreenClick = (e) => {
    console.log(e.target);
    if (screenRef.current === e.target) {
      setOpenSub(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleScreenClick);

    return () => window.removeEventListener("click", handleScreenClick);
  }, []);

  return (
    <>
      <div className="h-[80px] bg-gray-800 w-full z-[120] relative flex items-center justify-around flex-col">
        <div className="z-[120] flex h-[100px] bg-gray-800">
          {Object.entries(data.hobbies).map(([key, value], index) => {
            return (
              <button
                key={index}
                className="text-white px-4 py-2 hover:bg-slate-500 font-semibold rounded-lg duration-200"
                onClick={() => handleClick(value)}
              >
                {key}
              </button>
            );
          })}
        </div>

        {<NavSubBox open={openSub} getData={getData} showSlide={showSlide} />}
        <div
          className={`h-screen absolute w-full text-black text-4xl top-8 ${
            openSub ? "backdrop-blur-sm" : ""
          } z-20`}
          ref={screenRef}
          name="blurPart"
        ></div>
      </div>
      <FirstStickyBar scrollToSection={scrollToSection} />
      <About />
      <SlidingInterests />
      <PlusMinusOpenMenu ref={skillsRef} />
      <PressArrowToMove ref={strengthsRef} />
    </>
  );
}

export default Hobbies;
