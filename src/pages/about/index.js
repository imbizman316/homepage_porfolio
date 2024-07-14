import React, { useEffect } from "react";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import "../../i18n";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

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
          <h1 className="font-bold">{t("about_title")}</h1>
          <p className="text-sm text-gray-600">{t("about_descr")}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
