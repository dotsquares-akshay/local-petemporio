"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  productratingPaw,
  RuppeeIcon,
  fadedRupeeIcon,
  ProductheartIcon, // your imported icon
} from "@/assets/Svgicons";

interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  className?: string;
}

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  rating,
  className,
}: ProductCardProps) {
  const [fav, setFav] = useState(false);

  return (
    <div className={className}>
      <div className="relative">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setFav((prev) => !prev)}
          className="absolute top-3 right-3 z-10"
        >
          <motion.div
            animate={{ scale: fav ? [1, 1.3, 1] : 1 }}
            transition={{ duration: 0.25 }}
          >
            <ProductheartIcon fill={fav ? "#EF4444" : "#1D2B36"} />
          </motion.div>
        </motion.button>

        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full object-cover rounded-xl"
          priority
        />
      </div>

      <div className="mt-3">
        {rating !== undefined && (
          <div className="flex items-center gap-1 text-sm">
            <span>{productratingPaw}</span>
            <span>{rating.toFixed(1)}</span>
          </div>
        )}
        <div className="font-medium text-gray-800">{title}</div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-semibold text-gray-900">
            <span>{RuppeeIcon}</span>
            <span>{price}</span>
          </span>
          {oldPrice && (
            <div className="relative inline-block text-gray-500">
              <span className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-400"></span>
              <div className="flex items-center gap-1 relative">
                <span>{fadedRupeeIcon}</span>
                <span>{oldPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="button stroke-button w-full font-semibold mt-3">
        Add to Cart
      </button>
    </div>
  );
}
