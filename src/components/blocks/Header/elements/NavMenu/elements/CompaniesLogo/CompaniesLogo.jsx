import React from "react";
import classes from "./CompaniesLogo.module.scss";
import GlomacoIcon from "../../../../../../icons/GlomacoIcon";
import ProtecoIcon from "../../../../../../icons/ProtecoIcon";

export default function CompaniesLogo() {
  return (
    <div className={classes.companies}>
      <div className={classes.companies__title}>Компании группы</div>
      <GlomacoIcon width={116} height={51} color="#009FE3" />
      <ProtecoIcon width={116} height={23} color="#1C3383" />
    </div>
  );
}
