import React from "react";
import { Swiper } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import "swiper/swiper-bundle.css";

const Slider = ({ children, prevButtonSelector, nextButtonSelector, spaceBetween, slidesPerView, loop }) => {
  return (
    <Swiper
      className="custom-swiper-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween || 10}
      slidesPerView={slidesPerView || "auto"}
      navigation={{
        prevEl: prevButtonSelector,
        nextEl: nextButtonSelector,
      }}
      loop={loop || false}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
