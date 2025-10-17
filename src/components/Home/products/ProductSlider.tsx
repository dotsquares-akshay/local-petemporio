"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { sliderleftArrow, sliderrightArrow } from "@/assets/Svgicons";
import ProductCard from "../../common/ProductCard";
import { StaticImageData } from "next/image";
interface Product {
  image: string | StaticImageData;
  title: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  className?: string;
}
interface ProductSliderProps {
  products: Product[];
}
const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        centeredSlides={products.length === 1}
        centeredSlidesBounds={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductSlider;
