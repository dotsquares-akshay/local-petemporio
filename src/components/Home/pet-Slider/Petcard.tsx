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
        <div className="h-[190px] w-[190px] bg-primary rounded-full z-[9] bg-[var(--colorPrimary)] relative">
          <Image
            src={image}
            alt={name}
            className="w-fit h-full max-h-[230px] m-auto scale-110"
          />
        </div>
        <div className="bg-[linear-gradient(180deg,rgba(234,91,91,0.6)_0%,rgba(255,227,200,0.6)_100%)] z-[999] h-[30px] w-[30px] rounded-full absolute left-[-20px] top-[53%]"></div>
        <div className="bg-[linear-gradient(180deg,rgba(234,91,91,0.6)_0%,rgba(255,227,200,0.6)_100%)] z-[999] h-[18px] w-[18px] rounded-full absolute left-[5px] top-[15%]"></div>
        <div className="bg-[linear-gradient(180deg,rgba(234,91,91,0.6)_0%,rgba(255,227,200,0.6)_100%)] z-[999] h-[14px] w-[14px] rounded-full absolute -right-[8%] top-[30%]"></div>
      </div>
      <div className="pet-name">{name}</div>
    </div>
  );
}

export default PetCard;
