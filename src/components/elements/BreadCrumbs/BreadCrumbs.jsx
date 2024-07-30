import { Link } from "react-router-dom";
import classes from "./BreadCrumbs.module.scss";

export default function BreadCrumbs() {
  return (
    <ul className={classes.breadCrumbs}>
      <li className={classes.breadCrumbs__item}>
        <Link className={classes.breadCrumbs__item_link} to="/home">
          Главная
        </Link>
      </li>
      <li className={classes.breadCrumbs__item}>Блог</li>
    </ul>
  );
}
