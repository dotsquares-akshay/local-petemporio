"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "@/assets/images/mid-banner.jpg";
import { sliderleftArrow, sliderrightArrow } from "@/assets/Svgicons";

export default function PromoSlider() {
  const slides = [slide1, slide1, slide1, slide1, slide1];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // Trigger Swiper after first render
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
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
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

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-2 md:left-[-20px] z-50 bg-[#F6EBEB] w-10 h-10 flex items-center justify-center rounded-full -translate-y-1/2"
        >
          {sliderleftArrow}
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-2 md:right-[-20px] z-50 bg-[#F6EBEB] w-10 h-10 flex items-center justify-center rounded-full -translate-y-1/2"
        >
          {sliderrightArrow}
        </button>
        </div>

        
      </div>
    </div>
  );
}
