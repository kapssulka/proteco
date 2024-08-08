import React from "react";
import classes from "./NewsItem.module.scss";

import ViewIcon from "/src/components/icons/ViewIcon";

export default function NewsItem({ postContent, postImage }) {
  return (
    <div className={classes.item}>
      <div className={classes.imgWrapper}>
        <img
          src={postImage ?? "/src/assets/image/slide_1.png"}
          alt="post"
          loading="lazy"
        />
      </div>
      <div className={classes.info}>
        <div className={classes.info__date}>18 октября 2020</div>
        <div className={classes.info__view}>
          <ViewIcon />
          <span>100</span>
        </div>
      </div>
      <div className={classes.desription}>{postContent}</div>
    </div>
  );
}
