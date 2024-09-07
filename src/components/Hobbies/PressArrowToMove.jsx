import React, { useEffect, useRef, useState } from "react";
import { CiStar } from "react-icons/ci";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const reviewData = [
  {
    id: 1,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Chris Lee",
  },
  {
    id: 2,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Mike Lee",
  },
  {
    id: 3,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "James Lee",
  },
  {
    id: 4,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Robert Downey Jr.",
  },
  {
    id: 5,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Jin Sakamoto",
  },
  {
    id: 6,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Haruki Murakami",
  },
  {
    id: 7,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Jason Kid",
  },
  {
    id: 8,
    source: "GODADDY",
    score: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et quam, eaque, corporis dolores eum molestiae iusto voluptatum blanditiis id tempore ullam maxime nihil laborum totam fugiat praesentium libero nostrum?",
    name: "Yao Ming",
  },
];

const PressArrowToMove = React.forwardRef((_, ref) => {
  const [movement, setMovement] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardWidth = 309;
  const distance = cardWidth; //originally 400
  const containerRef = useRef();

  const totalWidth = reviewData.length * cardWidth;

  const handleArrowClick = (direction) => {
    const visibleWidth = containerRef.current?.offsetWidth || windowWidth;

    if (direction === "right") {
      const maxMovement = -(totalWidth - visibleWidth);

      setMovement((prev) => Math.max(prev - distance, maxMovement));
    } else {
      // movement < 0 && setMovement((prev) => prev + distance);
      setMovement((prev) => Math.min(prev + distance, 0));
    }
  };

  console.log(movement);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-10 pl-10 overflow-hidden" ref={ref}>
      <h1 className="text-4xl font-semibold pb-5 w-[500px]">
        Trusted by 20+ million customers around the world.
      </h1>
      <div className="flex flex-row gap-5 overflow-hidden" ref={containerRef}>
        {reviewData.map((review) => (
          <div
            key={review.id}
            className="min-w-[290px] min-h-[450px] flex flex-col justify-between p-5 bg-slate-200 rounded-md duration-300"
            style={{
              transform: `translateX(${movement}px)`,
            }}
          >
            <div>
              <h1 className="text-sm">{review.source}</h1>
              <div className="flex py-3">
                {Array.from({ length: review.score }).map((_, index) => (
                  <CiStar key={index} color="green" />
                ))}
              </div>
              <p className="font-thin">{review.review}</p>
            </div>
            <div className="text-sm font-semibold">{review.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-3 py-10 pr-10">
        <TfiArrowCircleLeft
          size={45}
          className="cursor-pointer"
          onClick={() => handleArrowClick("left")}
        />
        <TfiArrowCircleRight
          size={45}
          className="cursor-pointer"
          onClick={() => handleArrowClick("right")}
        />
      </div>
      {/* <div>Current slide: {movement}</div>
      <div>Slide size: 1292</div>
      <div>Current width: {windowWidth}</div> */}
    </div>
  );
});

export default PressArrowToMove;
