import React from "react";
import CategoryCard from "./CategoryCard";
import SectionTitleCta from "../../common/SectionTitleCta";
import categoryImg1 from "@/assets/images/category-img1.png";
import sectionImage from "@/assets/images/dogs-outline.png";
import Image from "next/image";

import { CategoriesFoodIcon } from "@/assets/Svgicons";

function PopularCategories() {
  const categories = [
    {
      image: categoryImg1,
      name: "Pet Food",
      description: "Premium nutrition for every pet",
      icon: CategoriesFoodIcon ,
    },
    {
      image: categoryImg1,
      name: "Grooming",
      description: "Best care for your pets",
      icon: CategoriesFoodIcon,
    },
  ];

  return (
    <div className="popular-categories">
        <Image src={sectionImage} alt="Popular Categories" className="bg-art" />
      <div className="container">
        <SectionTitleCta
          title="Popular Categories"
          cta="View More"
          href="/products"
          className="section-inline-title"
          titleClassName="text-white"
          ctaClassName="button stroke-button"
        />
        <div className="cards-container">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              image={cat.image}
              name={cat.name}
              description={cat.description}
              icon={cat.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
