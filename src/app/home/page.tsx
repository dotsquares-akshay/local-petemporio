import Header from "@/components/Header";
import React from "react";
import Banner from "@/components/Home/banner"
import Features from "@/components/Home/features";
import Popularproducts from "@/components/Home/Popularproducts";

function page() {
  return (<><Header />
  <Banner />
  <Features />
  <Popularproducts />
  </>);
}

export default page;
