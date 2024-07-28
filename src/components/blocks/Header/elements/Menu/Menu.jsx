import React, { useContext } from "react";
import classes from "./Menu.module.scss";
import cn from "classnames";
import { burgerContext } from "../../Header";

export default function Menu() {
  const { activeNav, setActiveNav } = useContext(burgerContext);

  return (
    <div onClick={() => setActiveNav(!activeNav)} className={classes.menu}>
      <div
        className={cn(classes.menu__burger, {
          [classes.open]: activeNav,
        })}
      >
        <span></span>
      </div>
    </div>
  );
}
