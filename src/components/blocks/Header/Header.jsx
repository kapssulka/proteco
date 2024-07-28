import React, { createContext, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import LogoIcon from "/src/components/icons/LogoIcon";
import HeaderRight from "./elements/HeaderRight/HeaderRight";
import NavMenu from "./elements/NavMenu/NavMenu";
import cn from "classnames";

export const burgerContext = createContext(null);

export default function Header() {
  const [activeNav, setActiveNav] = useState(false);

  const value = { setActiveNav: setActiveNav, activeNav: activeNav };

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

  const className = cn(classes.navMenu, {
    [classes.activeMenu]: activeNav,
  });

  return (
    <burgerContext.Provider value={value}>
      <header className={classes.header}>
        <LogoIcon />
        <HeaderRight />

        <div className={className}>
          <NavMenu />
        </div>
      </header>
    </burgerContext.Provider>
  );
}
