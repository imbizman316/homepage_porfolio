import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaMinusCircle } from "react-icons/fa";

const subMenus = [
  {
    id: 1,
    title: "Marketing",
    desc: "Click easily edit or add entire sections--like a photo gallery, menu, or price list--in seconds, from any device.",
    image: "https://wallpapercave.com/wp/wp12243007.jpg",
  },
  {
    id: 2,
    title: "User Analysis",
    desc: "Click easily edit or add entire sections--like a photo gallery, menu, or price list--in seconds, from any device.",
    image: "https://wallpapercave.com/wp/wp13466831.jpg",
  },
  {
    id: 3,
    title: "Community Manager",
    desc: "Click easily edit or add entire sections--like a photo gallery, menu, or price list--in seconds, from any device.",
    image: "https://wallpapercave.com/wp/wp2151146.jpg",
  },
  {
    id: 4,
    title: "Business",
    desc: "Click easily edit or add entire sections--like a photo gallery, menu, or price list--in seconds, from any device.",
    image: "https://wallpapercave.com/wp/wp4184936.jpg",
  },
];

function PlusMinusOpenMenu() {
  const [current, setCurrent] = useState(1);
  const [showPhoto, setShowPhoto] = useState(false);

  const handleClick = (id) => {
    setCurrent(id);
    setShowPhoto(false);
    setTimeout(() => setShowPhoto(true), 500);
  };

  return (
    <div className="p-12 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
      <div className="flex-[1]">
        <div className="text-5xl font-extrabold font-serif py-5">
          Useful skills at your fingertips, maximized for start-ups.
        </div>
        <div>
          {subMenus.map((menu, index) => (
            <div key={index}>
              <div className="flex flex-row items-center gap-3">
                {current === menu.id ? (
                  <FaMinusCircle size={20} />
                ) : (
                  <FiPlusCircle
                    size={21}
                    onClick={() => handleClick(menu.id)}
                  />
                )}

                <h1 className="font-semibold">{menu.title}</h1>
              </div>

              <p
                className={`pl-5 border-l-gray-300 border-l-2 ml-2 my-3 text-sm ${
                  current === menu.id ? "h-[50px] opacity-100" : "h-0 opacity-0"
                } overflow-hidden duration-500`}
                style={{}}
              >
                {menu.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-[3] block sm:block md:block lg:block xl:block">
        <img
          src={
            subMenus.filter(
              (menu) => parseInt(menu.id) === parseInt(current)
            )[0].image
          }
          alt="seoul"
          className={`min-w-[300px] pl-0 sm:pl-0 md:pl-0 lg:pl-10 xl:pl-10 duration-500 ${
            showPhoto ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default PlusMinusOpenMenu;
