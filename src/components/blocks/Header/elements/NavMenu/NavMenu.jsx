import React, { useContext, useEffect } from "react";
import classes from "./NavMenu.module.scss";

import cn from "classnames";

import CompaniesContacts from "./elements/CompaniesContacts/CompaniesContacts";
import CompaniesLogo from "./elements/CompaniesLogo/CompaniesLogo";
import NavList from "./elements/NavList/NavList";
import { burgerContext } from "../../Header";

export default function NavMenu() {
  const { activeNav, setActiveNav } = useContext(burgerContext);

  useEffect(() => {
    const handleClick = () => setActiveNav(!activeNav);

    if (activeNav) document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [activeNav]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={cn(classes.menu, {
        [classes.active]: activeNav,
      })}
    >
      <NavList />

      <CompaniesLogo />

      <CompaniesContacts />
    </div>
  );
}
