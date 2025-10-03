"use client";

import React from "react";
import CampCard from "@/components/Home/camps/CampCard";
import campImage1 from "@/assets/images/camp1.png";
import SectionTitleCta from "@/components/common/SectionTitleCta";


const campsData = [
  {
    image: campImage1,
    title: "Free Vaccination Camp",
    date: "September 15, 2024",
    description: "Get your pets vaccinated by certified veterinarians",
    btnText: "Book Now",
    href: "/camps/vaccination",
  },
  {
    image: campImage1,
    title: "Pet Adoption Camp",
    date: "October 10, 2024",
    description: "Find your new furry friend and give them a loving home",
    btnText: "Book Now",
    href: "/camps/adoption",
  },
  // Add more camps as needed
];

const CampSection = () => {
  return (
    <section className="camp-section">
      <div className="container">
        <SectionTitleCta
          title="Book walkins for the camps"
          cta="View More"
          href="/services"
          className="title-cta"
          titleClassName="title"
          ctaClassName="cta"
        />
      <div className="camps-container">
        {campsData.map((camp, idx) => (
          <CampCard
            key={idx}
            image={camp.image}
            title={camp.title}
            date={camp.date}
            description={camp.description}
            btnText={camp.btnText}
            href={camp.href}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default CampSection;
