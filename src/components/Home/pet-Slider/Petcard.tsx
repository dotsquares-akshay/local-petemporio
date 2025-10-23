"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface PetCardProps {
  name: string;
  image: StaticImageData | string;
}

function PetCard({ name, image }: PetCardProps) {
  return (
    <div className="petcard">
      <div className="relative w-fit">
        <div className="Circle1">
          <Image
            src={image}
            alt={name}
            className="pet-image"
          />
        </div>
        <div className="gradinet-circle1"></div>
        <div className="gradinet-circle2"></div>
        <div className="gradinet-circle3"></div>
      </div>
      <h6 className="pet-name">{name}</h6>
    </div>
  );
}

export default PetCard;
