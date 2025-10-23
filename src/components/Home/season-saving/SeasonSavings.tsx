import React from "react";
import SectionTitleCta from "../../common/SectionTitleCta";
import ProductCard from "../../common/ProductCard";
import prodImage1 from "@/assets/images/prod1.png";

function SeasonSavings() {
  const EndofSavingProducts = [
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "500",
      oldPrice: "600",
      rating: 4.5,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "1200",
      oldPrice: "1500",
      rating: 3.8,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "899",
      rating: 4.2,
      className: "product-card",
    },
        {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "500",
      oldPrice: "600",
      rating: 4.5,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "1200",
      oldPrice: "1500",
      rating: 3.8,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "899",
      rating: 4.2,
      className: "product-card",
    },
  ];

  return (
    <div className="season-saving">
      <div className="container">
        <SectionTitleCta
          title="End-of-Season Savings"
          cta="View More"
          href="/products"
          className="section-inline-title "
          ctaClassName="button gradient-button"
        />

        <div className="cards-container">
          {EndofSavingProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeasonSavings;
