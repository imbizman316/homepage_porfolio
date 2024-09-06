import { px } from "framer-motion";
import React from "react";

function NavSubBox({ open, getData, showSlide }) {
  return (
    <div
      className={`h-[${
        open ? "250px" : "80px"
      }] bg-slate-100 w-full absolute duration-300 z-30 top-[80px] ${
        open ? "opacity-100" : "opacity-0"
      } pr-10 sm:pr-10 md:pr-20 lg:pr-30 xl:pr-30 py-5 border-y border-black`}
    >
      <div
        className={`${
          open && showSlide && "translate-x-5 opacity-100"
        } duration-500 flex flex-row justify-between w-full opacity-0`}
      >
        <div className="flex justify-start gap-10">
          {getData &&
            getData?.lists.map((item, index) => (
              <div className="w-[170px]" key={index}>
                <div>
                  <h1 className="text-gray-600 pb-3">{item.title}</h1>
                  <div className="flex flex-col gap-3 pl-2">
                    {item.characters.map((character, index) => (
                      <div
                        key={index}
                        className="text-gray-800 font-semibold hover:bg-gray-200"
                      >
                        <h1 className="hover:text-blue-600 w-[50px]">
                          {character.name}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col">
          <div
            className="h-[160px] w-[160px] bg-cover rounded-sm duration-150"
            style={{
              backgroundImage: `url(${getData.titleImage})`,
              backgroundPosition: "center",
            }}
            alt={getData.title}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundSize = "120%")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundSize = "100%")
            }
          />
          <h1 className="pt-3 font-bold text-lg hover:underline decoration-2">
            {getData.linkText}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NavSubBox;
