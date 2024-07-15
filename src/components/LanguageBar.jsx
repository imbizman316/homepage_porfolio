import React from "react";
import { useAppContext } from "./context";

const LanguageBar = () => {
  const { language, setLanguage, setShowMenu } = useAppContext();

  const handleChange = (e) => {
    setLanguage(e.target.value);
    setShowMenu(false);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">ENGLISH</option>
      <option value="kr">한국어</option>
    </select>
  );
};

export default LanguageBar;
