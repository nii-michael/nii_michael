import React from "react";
import { useContext } from "react";
import ModeContext from "./contexts";
import { LightModeIcon, DarkModeIcon } from "./svgs";

const Header = () => {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <header className="header">
      <h5>&#60;MY PORTFOLIO&#47;&#62;</h5>
      <div className="header-right" onClick={() => setMode(!mode)}>
        {!mode && <LightModeIcon />}
        {mode && <DarkModeIcon />}
      </div>
    </header>
  );
};

export default Header;
