import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CareerItem from "./Careers/CareerItem";
import { data } from "./data";
import "tailwindcss/tailwind.css";

function DraggablePointer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [mousePressed, setMousePressed] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [initialX, setInitialX] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: rect.width - 100,
        y: rect.height - 100,
      });
    }
  }, []);

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        setMousePosition({
          x: rect.width - 100,
          y: rect.height - 100,
        });
        setIsInside(false);
      } else {
        setMousePosition({
          x: event.clientX - rect.left - 50,
          y: event.clientY - rect.top - 50,
        });
        setIsInside(true);

        if (mousePressed && initialX !== null) {
          const dx = event.clientX - initialX;
          containerRef.current.scrollLeft = scrollLeft - dx;
        }
      }
    }
  };

  const handleMouseEnter = () => {
    if (containerRef.current) {
      setIsInside(true);
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: mousePosition.x,
        y: mousePosition.y,
      });
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setIsInside(false);
      setMousePosition({
        x: rect.width - 100,
        y: rect.height - 100,
      });
    }
  };

  const handleMouseDown = (event) => {
    setMousePressed(true);
    setInitialX(event.clientX);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setMousePressed(false);
    setInitialX(null);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mousePressed, initialX, scrollLeft]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] relative bg-gray-100 flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300 flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="absolute top-10 left-10">Career</h1>
      <motion.div
        className={`bg-yellow-600 h-[100px] w-[100px] absolute cursor-none rounded-full flex items-center justify-center duration-200 ${
          mousePressed && "h-[80px] w-[80px]"
        }`}
        animate={{
          top: mousePosition.y,
          left: mousePosition.x,
        }}
        transition={{
          duration: isInside ? 0 : 0.5,
          ease: "easeOut",
        }}
        style={{
          zIndex: 1000,
        }}
      >
        <h1 className="font-bold">{!mousePressed ? "DRAG" : ""}</h1>
      </motion.div>
      <div className="px-20 w-[2000px] flex flex-row justify-evenly gap-10">
        {data.previousCompanies.map((company, index) => (
          <CareerItem key={index} company={company} />
        ))}
      </div>
    </div>
  );
}

export default DraggablePointer;

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { data } from "./data";
// import CareerItem from "./Careers/CareerItem";

// function DraggablePointer() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isInside, setIsInside] = useState(false);
//   const [mousePressed, setMousePressed] = useState(false);

//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       // Initially position the div at the bottom-right corner
//       setMousePosition({
//         x: rect.width - 100, // 100px is the width of the div
//         y: rect.height - 100, // 100px is the height of the div
//       });
//     }
//   }, []);

//   const handleMouseMove = (event) => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();

//       if (
//         event.clientX < rect.left ||
//         event.clientX > rect.right ||
//         event.clientY < rect.top ||
//         event.clientY > rect.bottom
//       ) {
//         // Mouse is outside, move to the bottom-right corner
//         setMousePosition({
//           x: rect.width - 100,
//           y: rect.height - 100,
//         });
//         setIsInside(false);
//       } else {
//         // Mouse is inside, follow the mouse instantly
//         setMousePosition({
//           x: event.clientX - rect.left - 50,
//           y: event.clientY - rect.top - 50,
//         });
//         setIsInside(true);
//       }
//     }
//   };

//   const handleMouseEnter = () => {
//     if (containerRef.current) {
//       setIsInside(true);
//       const rect = containerRef.current.getBoundingClientRect();
//       setMousePosition({
//         x: mousePosition.x, // Ensure position is followed
//         y: mousePosition.y,
//       });
//     }
//   };

//   const handleMouseLeave = () => {
//     if (containerRef.current) {
//       const rect = containerRef.current.getBoundingClientRect();
//       setIsInside(false);
//       setMousePosition({
//         x: rect.width - 100, // Move to the bottom-right corner
//         y: rect.height - 100,
//       });
//     }
//   };

//   const handleMouseDown = () => {
//     setMousePressed(true);
//   };

//   const handleMouseUp = () => {
//     setMousePressed(false);
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     window.addEventListener("mousedown", handleMouseDown);

//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-[500px] relative bg-gray-100 flex items-center overflow-x-auto"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <motion.div
//         className={`bg-yellow-600 h-[100px] w-[100px] absolute cursor-none rounded-full flex items-center justify-center duration-200 ${
//           mousePressed && "h-[80px] w-[80px]"
//         }`}
//         animate={{
//           top: mousePosition.y,
//           left: mousePosition.x,
//         }}
//         transition={{
//           duration: isInside ? 0 : 0.5, // Smooth transition only when leaving
//           ease: "easeOut",
//         }}
//         style={{
//           zIndex: 1000,
//         }}
//       >
//         <h1 className="font-bold">{!mousePressed ? "DRAG" : ""}</h1>
//       </motion.div>
//       <div className="border-2 w-[2000px] flex flex-row justify-evenly gap-10">
//         {data.previousCompanies.map((company, index) => (
//           <CareerItem key={index} company={company} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DraggablePointer;
