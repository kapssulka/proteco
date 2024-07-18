import React from "react";
import classes from "./Slide.module.scss";

export default function Slide() {
  return (
    <div className={classes.item}>
      <img src="/src/assets/image/slide_1.png" alt="" />
      <div className={classes.date}>18 октября 2020</div>
      <div className={classes.desription}>
        Познакомьтесь с информацией о гарантированном обеспечении нами базовых
        санитарно- гигиенических требований в нашей работе
      </div>
    </div>
  );
}
