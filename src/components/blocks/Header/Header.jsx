import React from "react";
import LogoIcon from "/src/components/icons/LogoIcon";
import HeaderRight from "./elements/HeaderRight/HeaderRight";
import cn from "classnames";
import classes from "./Header.module.scss";
import NavMenu from "./elements/NavMenu/NavMenu";

export default function Header() {
  return (
    <header className={classes.header}>
      <LogoIcon />
      <HeaderRight />
      <div className={classes.navMenu}>
        <NavMenu />
      </div>
    </header>
  );
}
