"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { StripStep1Icon } from "@/assets/Svgicons"; // example icon
import stripBg from "@/assets/images/Mask-image.png"; // example background image

interface StripStep {
  number: number;
  text: string;
  icon?: React.ReactNode;
}

interface StripProps {
  bgImage: string | StaticImageData;
  bgImage2: string | StaticImageData;
  title: string;
  steps: StripStep[];
}

const Strip: React.FC<StripProps> = ({ bgImage, bgImage2, title, steps }) => {
  return (
    <section className="strip">
      <div className="container">
        <div className="strip-content-container">
          <Image src={bgImage} alt="Description" objectFit="cover" />
          <div className="strip-info">
            <h2 className="strip-title">{title}</h2>
            <div className="inner-container">
              {steps.map((step, idx) => (
                <div key={idx} className="text-container">
                  <div className="icon">{step.icon}</div>
                  <div className="strip-step">
                    <div className="number">{step.number}.</div>
                    <div>{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Image src={bgImage} alt="Description" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default function StripSection() {
  const stripData = {
    bgImage: stripBg,
    bgImage2: stripBg,
    title: "Order Medicines In 2 Easy Steps",
    steps: [
      {
        number: 1,
        text: "Upload a valid veterinarian prescription",
        icon: StripStep1Icon,
      },
      {
        number: 2,
        text: "We will ship the medicines right to your doorstep",
        icon: StripStep1Icon,
      },
    ],
  };
  return <Strip {...stripData} />;
}
