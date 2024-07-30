import React from "react";
import classes from "./NavList.module.scss";
import CustomNavLink from "../CustomNavLink/CustomNavLink";

export default function NavList() {
  return (
    <ul className={classes.nav}>
      <li className={classes.nav__item}>
        <CustomNavLink to="/">Главная</CustomNavLink>
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
        <CustomNavLink to="/blog/news">Новости</CustomNavLink>
      </li>
      <li className={classes.nav__item}>
        <CustomNavLink to="/blog/video">Видео</CustomNavLink>
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
