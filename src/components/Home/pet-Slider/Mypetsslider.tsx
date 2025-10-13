"use client";
import React from "react";
import PetCard from "../pet-Slider/Petcard";
import SectionTitleCta from "../../common/SectionTitleCta";
import dogImg from "@/assets/images/dog.png";


function Mypetsslider() {
  const pets = [
    { name: "Dog", image: dogImg },
    { name: "Cat", image: dogImg },
    { name: "Bunny", image: dogImg },
  ];

  return (
    <section className="petcard-slider">
      <div className="container">
        <SectionTitleCta
          title="Shop by Pet Type"
          className="section-inline-title"
          titleClassName=""
        />

        <div className="petcard-container">
          {pets.map((pet, i) => (
            <PetCard key={i} name={pet.name} image={pet.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mypetsslider;
