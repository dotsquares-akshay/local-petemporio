import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  productratingPaw,
  RuppeeIcon,
  fadedRupeeIcon,
  ProductheartIcon,
} from "@/assets/Svgicons";

interface ProductCardProps {
  image: string | StaticImageData;
  title: string;
  price: string;
  oldPrice?: string;
  rating?: number; // rating out of 5
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  rating,
  className,
}) => {
  return (
    <div className={`${className}`}>
      {/* Product Image */}
      <div className="product-image-container">
        <span className="product-heart">{ProductheartIcon}</span>
        <Image src={image} alt={title} className="product-image" />
      </div>

      {/* Product Info */}
      <div className="product-info">
        {rating !== undefined && (
          <div className="product-rating-container">
            <div className="product-rating">
              <span>{productratingPaw}</span>
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
        )}
        <div className="product-title">{title}</div>
        <div className="product-price">
          <span className="new-price">
            <span>{RuppeeIcon}</span>
            <span>{price}</span>
          </span>
          {oldPrice && (
            <div className="relative inline-block">
              {/* Line above */}
              <span className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-400"></span>

              {/* Old Price with Icon */}
              <div className="flex items-center gap-1 relative text-gray-500">
                <span>{fadedRupeeIcon}</span>
                <span>{oldPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="addtocartbtn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
