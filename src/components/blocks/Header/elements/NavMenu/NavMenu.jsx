import React from "react";
import classes from "./NavMenu.module.scss";
import cn from "classnames";
import GlomacoIcon from "../../../../icons/GlomacoIcon";
import ProtecoIcon from "../../../../icons/ProtecoIcon";

export default function NavMenu({ fontSize = 14, color = "#000" }) {
  fontSize = `${fontSize}px`;

  return (
    <div className={classes.menu}>
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

      <div className={classes.companies}>
        <div className={classes.companies__title}>Компании группы</div>
        <GlomacoIcon width={116} height={51} color="#009FE3" />
        <ProtecoIcon width={116} height={23} color="#1C3383" />
      </div>

      <div className={classes.contact}>
        <a href="tel:+78126358890" className={classes.contact__tel}>
          +7 (812) 635-88-90
        </a>
        <a className={classes.contact__email} href="mailto:info@protecodent.ru">
          info@protecodent.ru
        </a>
      </div>
    </div>
  );
}
