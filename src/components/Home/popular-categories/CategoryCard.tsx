import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  image: string | StaticImageData;
  name: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  name,
  description,
  icon,
  href = "/products",
}) => {
  return (
    <Link className="category-card" href={href}>
      <div className="category-image-container">
        <Image
          src={image}
          alt={name}
          className="image"
        />
      </div>
      <div className="category-info">
        <div className="category-header">
          <div className="category-icon">{icon}</div>
          <h4 className="CategoryName">{name}</h4>
        </div>
        <p className="category-description">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;




// import React from "react";
// import Image from "next/image";
// import categoryImg1 from "@/assets/images/category-img1.png";
// import { CategoriesFoodIcon } from "@/assets/Svgicons";

// function CategoryCard() {
//   return (
//     <div className="category-card">
//       <div className="category-image-container">
//         <Image
//           src={categoryImg1}
//           alt="Category 1"
//           className="h-full w-full object-cover rounded-2xl"
//         />
//       </div>
//       <div className="category-info">
//        <div className="category-header">
//          <div className="category-icon">
//             {CategoriesFoodIcon}
//          </div>
//         <h4 className="CategoryName">Category Name</h4>
//        </div>
//         <p className="category-description">Premium nutrition for every pet</p>
//       </div>
//     </div>
//   );
// }

// export default CategoryCard;
