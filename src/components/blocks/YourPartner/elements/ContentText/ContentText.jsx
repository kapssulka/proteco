import React from "react";
import classes from "./ContentText.module.scss";

export default function ContentText() {
  return (
    <div className={classes.content}>
      <h3 className={classes.content__title}>
        ГК ПРОТЕКО - Ваш <span id="blue">надежный партнер</span> на медицинском
        рынке России
      </h3>

      <ul className={classes.content__list}>
        <li className={classes.content__list_item}>
          Эффективная система регистрации продукции в РФ и странах СНГ и Балтии
        </li>
        <li className={classes.content__list_item}>
          Оптовая дистрибьюция по всей территории РФ и странам СНГ и Балтии
        </li>
        <li className={classes.content__list_item}>
          Уникальная система управления брендами и полевого продвижения
        </li>
        <li className={classes.content__list_item}>
          Контрактное производство на сертифицированной производственной
          площадке с внедренной Системой Менеджмента Качества
        </li>
        <li className={classes.content__list_item}>
          Наличие фармацевтической лицензии
        </li>
      </ul>
    </div>
  );
}
