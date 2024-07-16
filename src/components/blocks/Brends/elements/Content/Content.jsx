import React from "react";
import classes from "./Content.module.scss";
import TextBorderBottom from "../../../../elements/TextBorderBottom/TextBorderBottom";
import TokuyamaDentalIcon from "/src/components/icons/TokuyamaDentalIcon";

export default function Content() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <TokuyamaDentalIcon />

        <div className={classes.content__text}>
          <p>
            - это широко известный химический концерн с более чем вековой
            историей. Начиная с 1978 года компания производит и разрабатывает
            уникальные инновационные продукты, внося большой вклад в развитие
            стоматологической индустрии во всем мире.
          </p>
          <p>
            На российском рынке представлены композиты, адгезивы, заменители
            протезов. Ассортимент продукции постоянно расширяется.
          </p>
        </div>

        <TextBorderBottom color="#8CDAE5">Смотреть каталог</TextBorderBottom>
      </div>

      <img
        className={classes.content__img}
        src="/src/assets/image/TokuyamaLogo.png"
        alt=""
      />
    </div>
  );
}
