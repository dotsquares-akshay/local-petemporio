import React from "react";
import Image from "next/image";
import { StaticImageData } from 'next/image'
import { productratingPaw} from '@/assets/Svgicons'

interface ProductCardProps {
  image: string | StaticImageData
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
    <div
      className={`${className}`}
    >
      {/* Product Image */}
      <div className="product-image-container">
        <Image
          src={image}
          alt={title}
          className="product-image"
        />
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
          <span className="new-price">₹{price}</span>
          {oldPrice && (
            <del className="old-price">₹{oldPrice}</del>
          )}
        </div>

         
      </div>
    </div>
  );
};

export default ProductCard;
