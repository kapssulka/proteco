import React, { useEffect, useState } from "react";
import classes from "./News.module.scss";
import NewsItem from "../../../../elements/NewsItem/NewsItem";
import Pagination from "../../../../elements/Pagination/Pagination";
import axios from "axios";

export default function News() {
  const [posts, setPosts] = useState([]);
  const [imgPosts, setImgPosts] = useState([]);
  const [postsOnPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const unsplashAPI =
      "https://api.unsplash.com/photos/random?count=50&w=490&h=276";
    const unsplashAPIKey = "eJTKuWkUA7tSzRPv4qFtkdaUivkeTNXKyMV-gNjV1zg";

    const getDate = async () => {
      const resDateText = await axios(
        "https://fakerapi.it/api/v1/images?_quantity=50"
      );
      setPosts(resDateText.data.data);

      const resDateImg = await axios.get(unsplashAPI, {
        headers: {
          Authorization: `Client-ID ${unsplashAPIKey}`,
        },
      });

      setImgPosts(resDateImg.data);
    };

    getDate();
  }, []);

  // всего страниц
  const pagesAll = Math.ceil(posts.length / postsOnPage);

  // индексы первого и последнего поста
  const lastIndexPost = currentPage * postsOnPage;
  const firstIndexPost = lastIndexPost - postsOnPage;

  // диапазон постов
  const currentPosts = posts.slice(firstIndexPost, lastIndexPost);
  const currentImage = imgPosts.slice(firstIndexPost, lastIndexPost);

  // функция переключения постов
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // функции переключения постов для кнопок
  const setNextPage = () => {
    if (currentPage < pagesAll) setCurrentPage((prev) => prev + 1);
  };
  const setPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  // ! ЖАМА ИДИ НАХУЙ, Я ПЕРВЫЙ БЛЯТЬ
  return (
    <section className={classes.news}>
      <div className={classes.news__content}>
        {currentPosts.map((post, index) => (
          <NewsItem
            postContent={post.description}
            postImage={currentImage[index]?.urls.small}
            key={index}
          />
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
