import React from "react";
import SectionTitleCta from "../common/SectionTitleCta";
import ProductCard from "../common/ProductCard";
import prodImage1 from "@/assets/images/prod1.png";
import ProductSlider from "./ProductSlider";

function PopularProducts() {
  const homeProducts = [
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
      price: "999",
      oldPrice: "1299",
      rating: 5,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "1500",
      rating: 4,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "2000",
      oldPrice: "2500",
      rating: 4.6,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "750",
      rating: 3.5,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "1800",
      oldPrice: "2200",
      rating: 4.8,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "1300",
      rating: 4.1,
      className: "product-card",
    },
    {
      image: prodImage1,
      title: "Bowlers Nutrimax Chicken and Vegetables Adult Dog Dry Food",
      price: "1600",
      oldPrice: "2000",
      rating: 4.3,
      className: "product-card",
    },
  ];

  return (
    <section className="popular-products">
      <div className="container">
        <SectionTitleCta
          title="Popular Products"
          cta="View All"
          href="/products"
          className="title-cta"
          titleClassName="title"
          ctaClassName="cta"
        />
        <ProductSlider products={homeProducts} />
      </div>
    </section>
  );
}

export default PopularProducts;
