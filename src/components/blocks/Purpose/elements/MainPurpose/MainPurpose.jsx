import React from "react";
import Signature from "/src/components/icons/Signature";
import classes from "./MainPurpose.module.scss";

export default function MainPurpose() {
  return (
    <div className={classes.main}>
      <div className={classes.main__textBlock}>
        <div className={classes.main__decription}>
          <p>
            “ГК ПРОТЕКО является надежным партнером на медицинском рынке России,
            стран СНГ и Балтии для производителей, дистрибьюторов и конечных
            потребителей продукции медицинского назначения, что подтверждается
            более чем 15-летней историей успеха Компании.
          </p>
          <br />
          <p>
            Продукцию Компании всегда отличает неизменно высокое качество,
            абсолютная безопасность и передовые технологии, дополненные глубоким
            пониманием потребностей наших Клиентов и продвинутой системой
            обучения.”
          </p>
        </div>
        <div className={classes.main__nameBlock}>
          <div>
            <div className={classes.main__nameBlock_name}>Алиев А.А.,</div>
            <div className={classes.main__nameBlock_rank}>
              Президент Proteco Group
            </div>
          </div>

          <Signature />
        </div>
      </div>
      <img
        className={classes.main__boss}
        src="/src/assets/image/Boss.png"
        alt=""
      />
    </div>
  );
}
