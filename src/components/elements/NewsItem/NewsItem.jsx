import React from "react";
import classes from "./NewsItem.module.scss";

import ViewIcon from "/src/components/icons/ViewIcon";

export default function NewsItem({ postContent }) {
  return (
    <div className={classes.item}>
      <span className={classes.test}>{postContent}</span>
      <img src="/src/assets/image/slide_1.png" alt="" />
      <div className={classes.info}>
        <div className={classes.info__date}>18 октября 2020</div>
        <div className={classes.info__view}>
          <ViewIcon />
          <span>100</span>
        </div>
      </div>
      <div className={classes.desription}>
        Познакомьтесь с информацией о гарантированном обеспечении нами базовых
        санитарно- гигиенических требований в нашей работе
      </div>
    </div>
  );
}
