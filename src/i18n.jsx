import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",

  resources: {
    en: {
      translation: {
        home_intro:
          "Hi, I'm MIke Lee. A hard-working Front-end React/NextJS Developer based in Seoul, South Korea.",
        about_title:
          "A dedicated Front-end Developer based in Seoul, South Korea",
        about_descr:
          "I was born in Seoul, South Korea but moved to Canada when I was 15 years old. I returned to Korea in 2007, and got my foot in the game industry as as assistant manager in the overseas business team. After being in the industry more than 10 years, I finally deicded to change my position to coding, which I'd wanted to do for a long time.",
        portfolio_title: "Here are the projects I've built.",
      },
    },
    kr: {
      translation: {
        home_intro:
          "훌륭한 React/NextJS 개발자를 꿈꾸며 꾸준히 노력하고 있는 이호열입니다.",
        about_title: "성실함, 정직함, 꾸준함, 창의력을 가진 노력파",
        about_descr:
          "게임업계 사업부에서 마케팅/커뮤니티메니저/해외사업 등을 담당했지만 개발의 꿈에 도전해 지금은 Front-end 개발자로서의 길을 걸어가고 있습니다.",
        portfolio_title: "지금까지 작업한 프로젝트들입니다.",
      },
    },
  },
});

export default i18n;
