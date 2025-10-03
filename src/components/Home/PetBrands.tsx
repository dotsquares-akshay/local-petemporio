import React from "react";
import SectionTitleCta from "../common/SectionTitleCta";
import BrandLogo from "../Home/Brandlogos";
import brand1 from "@/assets/images/brand1.png";

const brands = [
  { href: "/brands/1", image: brand1, alt: "Brand 1", className: "logo" },
  { href: "/brands/2", image: brand1, alt: "Brand 2", className: "logo" },
  { href: "/brands/3", image: brand1, alt: "Brand 3", className: "logo" },
  { href: "/brands/4", image: brand1, alt: "Brand 4", className: "logo" },
  { href: "/brands/5", image: brand1, alt: "Brand 5", className: "logo" },
  { href: "/brands/6", image: brand1, alt: "Brand 6", className: "logo" },
  { href: "/brands/7", image: brand1, alt: "Brand 7", className: "logo" },
  { href: "/brands/8", image: brand1, alt: "Brand 8", className: "logo" },
  { href: "/brands/9", image: brand1, alt: "Brand 9", className: "logo" },
  { href: "/brands/10", image: brand1, alt: "Brand 10", className: "logo" },
  { href: "/brands/11", image: brand1, alt: "Brand 11", className: "logo" },
  { href: "/brands/12", image: brand1, alt: "Brand 12", className: "logo" },
];

function PetBrands() {
  return (
    <section className="Pet-brands">
      <div className="container">
        <div className="brand-inner-container">
          <SectionTitleCta
            title="Premium Pets Brands"
            subtitle="Shop now from 500+ brands!"
            cta="View All"
            href="/brands"
            className="title-cta-col"
            titleClassName="title"
            subtitleClassName="subtitle"
            ctaClassName="cta"
          />
          <div className="brands-logos-container">
            {brands.map((brand, index) => (
              <BrandLogo
                key={index}
                href={brand.href}
                image={brand.image}
                alt={brand.alt}
                className={brand.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetBrands;
