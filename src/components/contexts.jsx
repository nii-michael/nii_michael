import React, { createContext, useState, useEffect } from "react";

// initialize light/dark mode context
export const ModeContext = createContext();

// the provider for light/dark mode context
export const ModeContextProvider = ({ children }) => {
  // inintialize mode state - false => dark mode
  const [mode, setMode] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("michael-portfolio-mode"))) {
      const mode = JSON.parse(localStorage.getItem("michael-portfolio-mode"));
      setMode(mode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chinaza-portfolio-mode", JSON.stringify(mode));
  }, [mode]);
  const value = { mode, setMode };
  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
};

export default ModeContext;
