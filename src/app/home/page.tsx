import Header from "@/components/Header";
import React from "react";
import Banner from "@/components/Home/banner";
import Features from "@/components/Home/features";
import Popularproducts from "@/components/Home/Popularproducts";
import PetCard from "@/components/Home/Petcard";
import PopularCategories from "@/components/Home/PopularCategories";
import SeasonSavings from "@/components/Home/SeasonSavings";

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
    </>
  );
}

export default page;
