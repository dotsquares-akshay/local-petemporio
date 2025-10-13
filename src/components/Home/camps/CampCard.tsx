"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CampCardProps {
  image: StaticImageData;
  title: string;
  date: string;
  description: string;
  btnText: string;
  href: string;
}

const CampCard: React.FC<CampCardProps> = ({ image, title, date, description, btnText, href }) => {
  return (
    <div className="camp-card">
      <div className="image-container">
        <Image src={image} alt={title} className="rounded-md" />
      </div>
      <div className="camp-details">
        <div className="camp-title font-semibold text-lg">{title}</div>
        <div className="camp-date">{date}</div>
        <div className="camp-description">{description}</div>
      </div>
      <Link href={href} className="button stroke-button w-full font-semibold">
        {btnText}
      </Link>
    </div>
  );
};

export default CampCard;
