import React from "react";
import classes from "./News.module.scss";
import TitleRight from "../../elements/TitleRight/TitleRight";
import Slider from "../../elements/Slider/Slider";

export default function News() {
  return (
    <section className={`${classes.news} container`}>
      <TitleRight className={classes.news__title}>
        <span>Новости</span> ГК ПРОТЕКО
      </TitleRight>

      <div className={classes.news__slider}>
        <Slider />
      </div>
    </section>
  );
}
