import React from "react";
import classes from "./Glomaco.module.scss";
import GlomacoIcon from "../../../../icons/GlomacoIcon";

export default function Glomaco() {
  return (
    <div className={classes.wrapper}>
      <GlomacoIcon />

      <p className={classes.text}>
        - это собственное сертифицированное химическое производство с внедренной
        Системой Менеджмента Качества по стандартам ISO 9001-2015 и ISO
        13485-2011 осуществляет разработку, трансфер технологий, производство и
        контроль качества продукции как собственных брендов, так и в качестве
        контрактного производства
      </p>

      <a className={classes.about} href="#">
        подробнее о компании
      </a>
    </div>
  );
}
