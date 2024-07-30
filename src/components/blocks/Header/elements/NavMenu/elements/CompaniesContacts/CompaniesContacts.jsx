import React from "react";
import classes from "./CompaniesContacts.module.scss";

export default function CompaniesContacts() {
  return (
    <div className={classes.contact}>
      <a href="tel:+78126358890" className={classes.contact__tel}>
        +7 (812) 635-88-90
      </a>
      <a className={classes.contact__email} href="mailto:info@protecodent.ru">
        info@protecodent.ru
      </a>
    </div>
  );
}
