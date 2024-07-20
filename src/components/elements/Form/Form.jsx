import React from "react";
import classes from "./Form.module.scss";
import TextBorderBottom from "../TextBorderBottom/TextBorderBottom";

export default function Form() {
  return (
    <form className={classes.form} action="">
      <fieldset className={classes.form__wrapperInputs}>
        <input placeholder="ФИО" type="text" name="name" />
        <input placeholder="+7 (___) ___ __ - __" type="tel" name="tel" />
        <input placeholder="E-mail" type="email" name="email" />
        <input placeholder="Ваше предложение" type="text" name="offer" />
      </fieldset>

      <fieldset className={classes.form__bottom}>
        <button className={classes.form__bottom_submit} type="submit">
          <TextBorderBottom color="#8CDAE5">Отправить</TextBorderBottom>
        </button>

        <div className={classes.form__bottom_privacyPolicy}>
          <label className={classes.customCheckbox}>
            <input type="checkbox" name="checkbox" />
            <span className={classes.checkmark}>
              <img src="/src/assets/icons/Checkbox.svg" alt="" />
            </span>
          </label>
          <p>
            Отправляя свои личные данные, вы соглашаетесь с политикой
            конфиденциальности
          </p>
        </div>
      </fieldset>
    </form>
  );
}
