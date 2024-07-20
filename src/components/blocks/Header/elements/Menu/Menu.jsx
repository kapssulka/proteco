import React from "react";
import classes from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={classes.menu}>
      <div className={classes.menu__burger}>
        <span></span>
      </div>
    </div>
  );
}
