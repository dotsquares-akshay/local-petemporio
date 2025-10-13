"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import ctaImg1 from "@/assets/images/app-cta-image.png";
import ctaAppstore from "@/assets/images/appstoreCta.png";
import ctaPlaystore from "@/assets/images/playstoreCta.png";
import ctaBunny from "@/assets/images/bunny.png";
import { CtaPawIcon } from "@/assets/Svgicons";

interface CtaButton {
  href: string;
  image: string | StaticImageData;
  alt?: string;
}

interface AppCtaItem {
  id: number;
  bunnyImage?: string | StaticImageData;
  mainImage: string | StaticImageData;
  icon?: React.ReactNode;
  topText?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: CtaButton[];
}

const AppCta: React.FC = () => {
  const data: AppCtaItem[] = [
    {
      id: 1,
      bunnyImage: ctaBunny,
      mainImage: ctaImg1,
      icon: CtaPawIcon,
      topText: "Get It Now",
      title: "Your Mobile App Pet Emporio",
      subtitle: "Download. Explore. Enjoy",
      description:
        "At Pet Emporio, we are dedicated to making pet care easier and more accessible. From finding trusted doctors, groomers, and clinical labs to shopping for high-quality pet products, everything you need is in one place. Download our free app today on iOS and Android, and give your pets the care they deserve.",
      buttons: [
        {
          href: "https://play.google.com/store/apps/details?id=com.petemporio.app",
          image: ctaPlaystore,
          alt: "Download from Play Store",
        },
        {
          href: "https://apps.apple.com/in/app/pet-emporio/id1234567890",
          image: ctaAppstore,
          alt: "Download from App Store",
        },
      ],
    },
  ];

  return (
    <>
      {data.map((item) => (
        <section key={item.id} className="App-cta">
          {item.bunnyImage && (
            <Image src={item.bunnyImage} alt="Bunny" className="bg-art" />
          )}
          <div className="container">
            <div className="cta-container">
              <Image src={item.mainImage} alt="CTA" className="" />
              <div className="cta-information">
                {/* TOP SECTION */}
                <div className="top">
                  {item.icon && <div className="svg">{item.icon}</div>}
                  {item.topText && <div className="text">{item.topText}</div>}
                </div>

                {/* MID SECTION */}
                <div className="mid">
                  {item.title && <div className="title">{item.title}</div>}
                  {item.subtitle && (
                    <div className="sub-title">{item.subtitle}</div>
                  )}
                </div>

                {/* BOTTOM SECTION */}
                <div className="bottom">
                  {item.description && (
                    <div className="description">{item.description}</div>
                  )}
                </div>
                {item.buttons && item.buttons.length > 0 && (
                    <div className="cta-btns">
                      {item.buttons.map((btn, i) => (
                        <Link
                          key={i}
                          href={btn.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={btn.image}
                            alt={btn.alt || ""}
                            className=""
                          />
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AppCta;
