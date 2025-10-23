"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SectionTitleCta from "../../common/SectionTitleCta";
import ServiceCard from "../../common/ServicesCard";
import serviceImg1 from "@/assets/images/Mask-image.png";
import { ServiceFeatureVideoIcon } from "@/assets/Svgicons";

const servicesData = [
  {
    image: serviceImg1,
    title: "Doctor Consultation",
    subtitle: "Chat or Video Call with Top Vets",
    cta: "Book Now - Starting ₹299",
    href: "/services/doctor-consultation",
    features: [
      { icon: ServiceFeatureVideoIcon, text: "24/7 Video Consultations" },
      { icon: ServiceFeatureVideoIcon, text: "Instant Chat Support" },
      { icon: ServiceFeatureVideoIcon, text: "Phone Consultation Available" },
    ],
  },
  {
    image: serviceImg1,
    title: "Pet Grooming",
    subtitle: "Professional Grooming Services",
    cta: "Book Now - Starting ₹399",
    href: "/services/pet-grooming",
    features: [
      { icon: ServiceFeatureVideoIcon, text: "Expert Groomers" },
      { icon: ServiceFeatureVideoIcon, text: "Schedule Online" },
      { icon: ServiceFeatureVideoIcon, text: "At Home Service" },
    ],
  },
  {
    image: serviceImg1,
    title: "Doctor Consultation",
    subtitle: "Chat or Video Call with Top Vets",
    cta: "Book Now - Starting ₹299",
    href: "/services/doctor-consultation",
    features: [
      { icon: ServiceFeatureVideoIcon, text: "24/7 Video Consultations" },
      { icon: ServiceFeatureVideoIcon, text: "Instant Chat Support" },
      { icon: ServiceFeatureVideoIcon, text: "Phone Consultation Available" },
    ],
  },
  {
    image: serviceImg1,
    title: "Pet Grooming",
    subtitle: "Professional Grooming Services",
    cta: "Book Now - Starting ₹399",
    href: "/services/pet-grooming",
    features: [
      { icon: ServiceFeatureVideoIcon, text: "Expert Groomers" },
      { icon: ServiceFeatureVideoIcon, text: "Schedule Online" },
      { icon: ServiceFeatureVideoIcon, text: "At Home Service" },
    ],
  },
];

function PetServices() {
  // Group services into chunks of 2 for each slide
  const chunkedServices = [];
  for (let i = 0; i < servicesData.length; i += 2) {
    chunkedServices.push(servicesData.slice(i, i + 2));
  }

  return (
    <section className="PetServices">
      <div className="container">
        <SectionTitleCta
          title="Professional Pet Services"
          cta="View All"
          href="/services"
          className="section-inline-title"
          titleClassName=""
          ctaClassName="button gradient-button"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1} // 1 slide at a time, each slide has 2 cards
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {chunkedServices.map((servicesChunk, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between flex-wrap">
                {servicesChunk.map((service, idx) => (
                  <div key={idx} className="flex-1 first:mr-2 last:ml-2">
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      subtitle={service.subtitle}
                      features={service.features}
                      cta={service.cta}
                      href={service.href}
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PetServices;
