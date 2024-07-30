import React, { createContext, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import LogoIcon from "/src/components/icons/LogoIcon";
import HeaderRight from "./elements/HeaderRight/HeaderRight";
import NavMenu from "./elements/NavMenu/NavMenu";

export const burgerContext = createContext(null);

export default function Header({ backgroundColor = "transparent" }) {
  const [activeNav, setActiveNav] = useState(false);

  const value = { setActiveNav: setActiveNav, activeNav: activeNav };

  //  ОТСКОК ПРИ ОТКРЫТИИ МЕНЮ
  useEffect(() => {
    const body = document.querySelector("body");
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (activeNav) {
      body.classList.add("hidden");
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.classList.remove("hidden");
      body.style.paddingRight = "";
    }
  }, [activeNav]);

  return (
    <burgerContext.Provider value={value}>
      <header
        style={{ background: backgroundColor }}
        className={classes.header}
      >
        <LogoIcon />
        <HeaderRight />

        {/* absolute */}
        <NavMenu />
      </header>
    </burgerContext.Provider>
  );
}
