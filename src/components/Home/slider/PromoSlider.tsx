"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "@/assets/images/mid-banner.jpg";

export default function PromoSlider() {
  const slides = [slide1, slide1, slide1, slide1, slide1];


  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); 
  }, []);

  return (
    <div className="promo-slider py-4 relative">
      <div className="container">
        <div className="swiper-container">
            {swiperReady && (
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            className="rounded-lg overflow-hidden"
          >
            {slides.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full max-h-[318px]">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="object-cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        </div>

        
      </div>
    </div>
  );
}
