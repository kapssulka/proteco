import classes from "./Language.module.scss";
import cn from "classnames";

export default function Language() {
  return (
    <div className={classes.language}>
      <a className={cn(classes.language__en, classes.active)}>RU</a>
      <a className={classes.language__en}>EN</a>
    </div>
  );
}
