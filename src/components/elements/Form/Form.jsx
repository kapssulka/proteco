import React, { useContext } from "react";
import classes from "./Form.module.scss";
import TextBorderBottom from "../TextBorderBottom/TextBorderBottom";
import FormCheckbox from "../../icons/FormCheckbox";
import cn from "classnames";
import { modalContext } from "../../../App";

export default function Form({ color = "#fff", className }) {
  const { setActiveModal } = useContext(modalContext);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ color: color }}
      className={cn(classes.form, className)}
      action=""
    >
      <fieldset className={classes.form__wrapperInputs}>
        <input
          style={{ borderColor: color }}
          placeholder="ФИО"
          type="text"
          name="name"
        />
        <input
          style={{ borderColor: color }}
          placeholder="+7 (___) ___ __ - __"
          type="tel"
          name="tel"
        />
        <input
          style={{ borderColor: color }}
          placeholder="E-mail"
          type="email"
          name="email"
        />
        <input
          style={{ borderColor: color }}
          placeholder="Ваше предложение"
          type="text"
          name="offer"
        />
      </fieldset>

      <fieldset className={classes.form__bottom}>
        <button
          onClick={() => setActiveModal("tanks")}
          className={classes.form__bottom_submit}
          type="submit"
        >
          <TextBorderBottom color="#8CDAE5">Отправить</TextBorderBottom>
        </button>

        <div className={classes.form__bottom_privacyPolicy}>
          <label className={classes.customCheckbox}>
            <input type="checkbox" name="checkbox" />
            <span style={{ borderColor: color }} className={classes.checkmark}>
              <FormCheckbox color={color} />
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
