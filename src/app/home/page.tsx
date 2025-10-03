import Header from "@/components/common/Header";
import React from "react";
import Banner from "@/components/Home/banner/banner";
import Features from "@/components/Home/features";
import Popularproducts from "@/components/Home/Popularproducts";
import PetCard from "@/components/Home/Petcard";
import PopularCategories from "@/components/Home/PopularCategories";
import SeasonSavings from "@/components/Home/SeasonSavings";
import PromoSlider from "@/components/Home/PromoSlider";
import PetBrands from "@/components/Home/PetBrands";
import PetServices from "@/components/Home/PetServices";
import Camps from "@/components/Home/camps/camps";
import Strip from "@/components/Home/strip/Strip";

function page() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Popularproducts />
      <PetCard />
      <PopularCategories />
      <SeasonSavings />
      <PromoSlider />
      <PetBrands />
      <PetServices />
      <Camps />
      <Strip />
    </>
  );
}

export default page;
