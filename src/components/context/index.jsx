"use client";

import { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

export function AppWrapper({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguage] = useState(navigator.language);

  return (
    <AppContext.Provider
      value={{ showMenu, setShowMenu, language, setLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
