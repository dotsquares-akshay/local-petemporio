"use client";

import React from "react";
import PetCard from "../pet-Slider/Petcard";
import SectionTitleCta from "../../common/SectionTitleCta";
import dogImg from "@/assets/images/dog.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar"; // import scrollbar css
import { Navigation, Scrollbar } from "swiper/modules";

function Mypetsslider() {
  const pets = [
    { name: "Dog", image: dogImg },
    { name: "Cat", image: dogImg },
    { name: "Bunny", image: dogImg },
    { name: "Parrot", image: dogImg },
    { name: "Fish", image: dogImg },
    { name: "Hamster", image: dogImg },
    { name: "Dog", image: dogImg },
    { name: "Cat", image: dogImg },
    { name: "Bunny", image: dogImg },
    { name: "Parrot", image: dogImg },
    { name: "Fish", image: dogImg },
    { name: "Hamster", image: dogImg },
  ];

  return (
    <section className="petcard-slider py-8">
      <div className="container mx-auto">
        <SectionTitleCta
          title="Shop by Pet Type"
          className="section-inline-title"
          titleClassName=""
        />

        <Swiper
        
          spaceBetween={16}     // gap between cards
          navigation
          scrollbar={{ draggable: true }} // enable draggable scrollbar
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1.5 },   // small mobile
            480: { slidesPerView: 2.5 },   // larger mobile
            640: { slidesPerView: 3.5 },   // tablets
            768: { slidesPerView: 4.5 },   // small laptop
            1024: { slidesPerView: 5.5 },  // desktop (your target)
            1280: { slidesPerView: 5.5 },  // large screens
          }}
        >
          {pets.map((pet, i) => (
            <SwiperSlide key={i}>
              <PetCard name={pet.name} image={pet.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Mypetsslider;
