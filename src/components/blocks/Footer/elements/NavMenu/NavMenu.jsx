import React from "react";
import classes from "./NavMenu.module.scss";

export default function NavMenu() {
  return (
    <ul className={classes.nav}>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>Главная</a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>О компании</a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>Направления</a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>Бренды</a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>Новости</a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>Карьера</a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link}>Контакты</a>
      </li>
    </ul>
  );
}
