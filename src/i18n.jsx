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
        portfolio_project_1: "K-pop Group Page Mock-up",
        portfolio_project_1_desc:
          "It's a mock-up website of a k-pop girl group called TripleS.  It's almost identical to it except that I added a newletter subscription component where users can submit their emails.  Sent emails get saved in MongoDB database.",
        portfolio_project_2: "Blog Page",
        portfolio_project_2_desc:
          "It's a website I made for my friend who is a writer.  He can login using his google account, and write a blog.  Saved blogs are stored in MongoDB, and loads from it.",
        portfolio_project_3: "Memorize Japanese Kanjis App",
        portfolio_project_3_desc:
          "Currently work-in-progress, it's an app made with React Native where you can memorize Japanese Kanjis of different levels. Memorized kanjis are stored in the local memory via sqlite",
        portfolio_project_5: "PDF Converter/Merger/Splitter",
        portfolio_project_5_desc:
          "You can convert images or other types of files to PDF, merge multiple PDFs into one, and split a PDF file into multiple pages",
        portfolio_project_10: "Starbucks Homepage Clone",
        portfolio_project_10_desc: "It's a clone website.",
      },
    },
    kr: {
      translation: {
        home_intro:
          "훌륭한 플스텍 개발자를 꿈꾸며 꾸준히 노력하고 있습니다.잘 부탁드립니다.",
        about_title: "성실함, 정직함, 꾸준함, 창의력을 가진 노력파",
        about_descr:
          "게임업계 사업부에서 마케팅/커뮤니티메니저/해외사업 등을 담당했지만 개발의 꿈에 도전해 지금은 Fullstack 개발자로서의 길을 걸어가고 있습니다.",
        portfolio_title: "지금까지 작업한 프로젝트들입니다.",
        portfolio_project_1: "K-pop 걸그룹 (트리플S) 사이트",
        portfolio_project_1_desc:
          "트리플S 사이트를 본따서 만든 사이트입니다. 해당 사이트와 거의 동일하지만, 이메일을 입력해서 뉴스레터 구독을 할 수 있게 추가하였습니다.  받은 이메일은 MongoDB에 저장되게 하였습니다.",
        portfolio_project_2: "블로그 페이지",
        portfolio_project_2_desc:
          "작가인 지인을 위해 만든 사이트입니다.  구글 계정으로 로그인하면 글을 올릴 수 있게 했으며, 글들은 MongoDB에 저장된 후, 사이트 방문자들이 볼 수 있게 하였습니다.",
        portfolio_project_3: "한자 위우기 앱",
        portfolio_project_3_desc:
          "현재 개발중입니다. React Native 기반의 한자(일본어 한자) 외우는 것을 도와주는 앱입니다. 외운 한자는 sqlite를 통해서 로컬 디바이스 메모리에 저장됩니다.",
        portfolio_project_5: "PDF 변환하기/합치기/나누기 가능 사이트",
        portfolio_project_5_desc:
          "이미디 등의 파일을 PDF로 변환하거나, 여러 PDF파일을 하나로 합칠 수 있고, 하나의 PDF파일을 여러 페이지로 나눌 수 있게한 사이트입니다",
      },
    },
  },
});

export default i18n;
