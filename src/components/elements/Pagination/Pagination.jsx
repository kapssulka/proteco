import PrevArrow from "../../icons/PrevArrow";
import classes from "./Pagination.module.scss";
import NextArrow from "../../icons/NextArrow";

import cn from "classnames";

export default function Pagination({
  pagesAll = 1,
  paginate,
  currentPage,
  setNextPage,
  setPrevPage,
}) {
  const pages = [];

  for (let i = 1; i <= pagesAll; i++) {
    pages.push(i);
  }
  return (
    <>
      {pagesAll > 1 && (
        <div className={classes.pagination}>
          <button
            onClick={() => setPrevPage()}
            className={classes.pagination__btn}
          >
            <PrevArrow color="#000" />
          </button>
          <ul className={classes.pagination__list}>
            {pages.map((page, index) => (
              <li
                onClick={() => {
                  paginate(page);
                }}
                className={cn(classes.pagination__list_item, {
                  [classes.pagination__list_item]: currentPage != page,
                  [classes.activeItem]: currentPage == page,
                })}
                key={index}
              >
                {page}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setNextPage()}
            className={classes.pagination__btn}
          >
            <NextArrow color="#000" />
          </button>
        </div>
      )}
    </>
  );
}
