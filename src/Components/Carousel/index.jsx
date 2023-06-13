import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image1 from "./source/1.png";
import Image2 from "./source/2.png";
import Image3 from "./source/3.png";
import Image4 from "./source/4.png";
import Image5 from "./source/5.png";
import "./source/Carousel.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = [Image1, Image2, Image3, Image4, Image5];

const Carousel = () => {
  return (
    <Swiper
      className=" w-[85%] rounded-[20px] shadow-md "
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      zoom={false}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
