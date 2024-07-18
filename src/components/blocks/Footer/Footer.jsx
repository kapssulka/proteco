import React from "react";
import classes from "./Footer.module.scss";
import cn from "classnames";

import LogoIcon from "/src/components/icons/LogoIcon";
import NavMenu from "./elements/NavMenu/NavMenu";
import ImageBack from "../../elements/ImageBack/ImageBack";
import GroupCompanies from "./elements/GroupCompanies/GroupCompanies";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ImageBack maxHeight={317} src="/src/assets/image/FooterBack.png" />

      <div className={cn(classes.footer__top, "container")}>
        <LogoIcon width={293} height={41} />

        <NavMenu />

        <GroupCompanies />
      </div>
      <div className={cn(classes.footer__bottom, "container")}>
        <div>
          <a className={classes.footer__bottom_link} href="">
            Согласие на обработку персональных данных
          </a>
        </div>
        <div>
          <a className={classes.footer__bottom_link} href="">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
