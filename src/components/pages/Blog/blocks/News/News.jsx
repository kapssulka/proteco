import React, { useState } from "react";
import classes from "./News.module.scss";
import NewsItem from "../../../../elements/NewsItem/NewsItem";
import Pagination from "../../../../elements/Pagination/Pagination";

export default function News() {
  // кол-во постов
  const num = 40;
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  const [posts, setPosts] = useState(arr);
  const [postsOnPage, setPostsOnPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // всего страниц
  const pagesAll = arr.length / postsOnPage;

  // индексы первого и последнего поста
  const lastIndexPost = currentPage * postsOnPage;
  const firstIndexPost = lastIndexPost - postsOnPage;

  // диапазон постов
  const currentPosts = posts.slice(firstIndexPost, lastIndexPost);

  // функция переключения постов
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // функции переключения постов для кнопок
  const setNextPage = () => {
    if (currentPage < pagesAll) setCurrentPage((prev) => prev + 1);
  };
  const setPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className={classes.news}>
      <div className={classes.news__content}>
        {currentPosts.map((post, index) => (
          <NewsItem postContent={post} key={index} />
        ))}
      </div>

      <Pagination
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
        currentPage={currentPage}
        paginate={paginate}
        pagesAll={pagesAll}
      />
    </section>
  );
}
