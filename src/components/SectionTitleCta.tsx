import Link from "next/link";
import React from "react";

interface SectionTitleCtaProps {
  title: string;
  cta?: string;
  href?: string;
  className?: string;        
  titleClassName?: string;  
  ctaClassName?: string;
}

const SectionTitleCta: React.FC<SectionTitleCtaProps> = ({
  title,
  cta,
  href,
  className = "",
  titleClassName = "",
  ctaClassName = "",
}) => {
  return (
    <div className={`${className}`}>
      <h3 className={`${titleClassName}`}>{title}</h3>
      {cta && href && (
        <Link className={`${ctaClassName}`} href={href}>
          {cta}
        </Link>
      )}
    </div>
  );
};

export default SectionTitleCta;
