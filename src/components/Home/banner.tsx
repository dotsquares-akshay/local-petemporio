"use client"; // 👈 needed in App Router

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "@/assets/images/bnr3.png";


const images = [banner1, banner1, banner1];

const ImageSwiper = () => {
  return (
    <div className="w-full ">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
        className=""
      >
        {images.map((src, index) => (
  <SwiperSlide key={index}>
    <Image
      src={src}
      alt={`Slide ${index + 1}`}
      width={800}
      height={400}
      className="w-full h-[551px] object-cover"
    />
  </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
