import React from "react";
import LogoIcon from "/src/components/icons/LogoIcon";
import HeaderRight from "./elements/HeaderRight/HeaderRight";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`container ${classes.header}`}>
      <LogoIcon />
      <HeaderRight />
    </header>
  );
}
