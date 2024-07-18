import React, { useRef, useState } from "react";
import classes from "./Slider.module.scss";

import PrevArrow from "/src/components/icons/PrevArrow";
import NextArrow from "/src/components/icons/NextArrow";

import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./elements/Slide/Slide";

import "swiper/scss";
import cn from "classnames";

export default function Slider() {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  };

  return (
    <div className={classes.container}>
      <Swiper
        className={classes.swiper}
        ref={swiperRef}
        spaceBetween={15}
        slidesPerView={3}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>

      <div
        style={{ display: isBeginning ? "none" : "flex" }}
        className={cn(classes.btn__prev, classes.btn, {
          [classes.disabled]: isBeginning,
        })}
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <PrevArrow />
      </div>
      <div
        style={{ display: isEnd ? "none" : "flex" }}
        className={cn(classes.btn__next, classes.btn, {
          [classes.disabled]: isEnd,
        })}
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <NextArrow />
      </div>
    </div>
  );
}
