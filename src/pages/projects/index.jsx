import React, { useEffect } from "react";
import ProjectItem from "./components/ProjectItem";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../components/context";
import { motion } from "framer-motion";

function Projects() {
  const { t, i18n } = useTranslation();
  const { language } = useAppContext();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const portfolio = [
    {
      id: 0,
      title: t("portfolio_project_1"),
      desc: t("portfolio_project_1_desc"),
      image: "https://i.imgur.com/ECYvhiZ.png",
      languages: ["NextJS", "Tailwind", "MongoDB"],
      github: "https://github.com/imbizman316/gorgeous_nextjs",
      demo: "https://gorgeous-nextjs.vercel.app/",
    },
    // {
    //   id: 1,
    //   title: "FlixPatrol Clone",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam eligendi non culpa enim soluta rerum debitis nulla, praesentium laborum consequatur aliquam voluptate provident. Quo eius velit laboriosam facilis atque.",
    //   image:
    //     "https://miro.medium.com/v2/resize:fit:1400/1*fGz9RM5dBbdBYQCBMDPr2Q.jpeg",
    //   languages: ["React", "Tailwind"],
    //   github: "https://github.com/imbizman316/flixpatrol_clone",
    //   demo: "https://flixpatrol-clone.vercel.app/",
    // },
    // {
    //   id: 2,
    //   title: "Ticketing App",
    //   desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil repudiandae beatae tempore maxime a, reprehenderit, repellendus illo laborum eum cumque tenetur nostrum. Cumque debitis quidem est? Illo sit provident perferendis.",
    //   image: "https://i.imgur.com/7ZMmJd5.png",
    //   languages: ["Next.js", "Tailwind"],
    //   github: "https://github.com/imbizman316/ticket_app_nextjs",
    //   demo: "https://ticket-app-nextjs-seven.vercel.app/",
    // },
    {
      id: 3,
      title: t("portfolio_project_2"),
      desc: t("portfolio_project_2_desc"),
      image: "https://i.imgur.com/urhEZjW.png",
      languages: ["Next.js", "Tailwind", "MongoDB"],
      github: "https://github.com/imbizman316/jhkim",
      demo: "https://jhkim-pink.vercel.app/",
    },
    // {
    //   id: 2,
    //   title: "SEX GYM",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat numquam distinctio libero nemo ipsa exercitationem perspiciatis architecto rem, facere maiores deleniti repudiandae dicta odit? Blanditiis possimus natus eius expedita aspernatur?",
    //   image: "https://themewagon.com/wp-content/uploads/2020/10/gym-1.jpg",
    //   languages: ["React", "Tailwind"],
    //   github: "https://github.com/imbizman316/homepage",
    //   demo: "https://0402-shopping-cart.vercel.app/cart",
    // },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[300px] flex flex-col gap-5 mb-10">
        <h1 className="text-blue-900 font-bold">PORTFOLIO</h1>
        <h1 className="font-bold">{t("portfolio_title")}</h1>
      </div>
      <div className="flex flex-col gap-12">
        {portfolio.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <ProjectItem item={item} key={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
