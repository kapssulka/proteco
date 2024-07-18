import React from "react";
import classes from "./GroupCompanies.module.scss";
import GlomacoIcon from "../../../../icons/GlomacoIcon";
import ProtecoIcon from "../../../../icons/ProtecoIcon";

export default function GroupCompanies() {
  return (
    <div className={classes.groupCompanies}>
      <div className={classes.groupCompanies__title}>Компании группы</div>
      <div className={classes.groupCompanies__logos}>
        <GlomacoIcon width={116} height={51} />
        <ProtecoIcon width={116} height={23} />
      </div>
      <div className={classes.groupCompanies__requirements}>
        <p>Соблюдение санитарно- гигиенических требований</p>
        <img src="/src/assets/image/qrcode.png" alt="" />
      </div>
    </div>
  );
}
