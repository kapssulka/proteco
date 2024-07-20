import React from "react";
import classes from "./NavMenu.module.scss";

export default function NavMenu() {
  return (
    <ul className={classes.nav}>
      <li className={classes.nav__item}>
        <a className={cn(classes.nav__link, classes.active)} href="">
          Главная
        </a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link} href="">
          О компании
        </a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link} href="">
          Направления
        </a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link} href="">
          Бренды
        </a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link} href="">
          Новости
        </a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link} href="">
          Карьера
        </a>
      </li>
      <li className={classes.nav__item}>
        <a className={classes.nav__link} href="">
          Контакты
        </a>
      </li>
    </ul>
  );
}
