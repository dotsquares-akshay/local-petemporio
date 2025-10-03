
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  href: string;
  image: string | StaticImageData;
  alt?: string;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  href,
  image,
  alt = "brand logo",
  className = "",
}) => {
  return (
    <Link href={href} className="logo-bg">
      <Image src={image} alt={alt} className={className} />
    </Link>
  );
};

export default BrandLogo;
