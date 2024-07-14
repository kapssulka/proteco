import React from "react";
import classes from "./HeaderRight.module.scss";
import Menu from "../Menu/Menu";
import cn from "classnames";

export default function HeaderRight() {
  return (
    <div className={classes.wrapper}>
      <a className={classes.btn}>Связаться с нами</a>

      <div className={classes.language}>
        <a className={cn(classes.language__en, classes.active)}>RU</a>
        <a className={classes.language__en}>EN</a>
      </div>

      <Menu />
    </div>
  );
}
