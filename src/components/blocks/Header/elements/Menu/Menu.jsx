import React, { useContext } from "react";
import classes from "./Menu.module.scss";
import cn from "classnames";
import { burgerContext } from "../../Header";

export default function Menu() {
  const { activeNav, setActiveNav } = useContext(burgerContext);
  const handleClick = (e) => {
    e.stopPropagation();
    setActiveNav(!activeNav);
  };
  return (
    <div onClick={handleClick} className={classes.menu}>
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
