import Header from "@/components/common/header/Header";
import React from "react";
import Banner from "@/components/Home/banner/banner";
import Features from "@/components/Home/features/features";
import Popularproducts from "@/components/Home/products/Popularproducts";
import Mypetsslider from "@/components/Home/pet-Slider/Mypetsslider";
import PopularCategories from "@/components/Home/popular-categories/PopularCategories";
import SeasonSavings from "@/components/Home/season-saving/SeasonSavings";
import PromoSlider from "@/components/Home/slider/PromoSlider";
import PetBrands from "@/components/Home/petbrands/PetBrands";
import PetServices from "@/components/Home/services/PetServices";
import Camps from "@/components/Home/camps/camps";
import Strip from "@/components/Home/strip/Strip";
import AppCta from "@/components/Home/App-cta/AppCta";
import Footer from "@/components/common/footer/Footer"

function page() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Popularproducts />
      <Mypetsslider />
      <PopularCategories />
      <SeasonSavings />
      <PromoSlider />
      <PetBrands />
      <PetServices />
      <Camps />
      <Strip />
      <AppCta />
      <Footer />
    </>
  );
}

export default page;
