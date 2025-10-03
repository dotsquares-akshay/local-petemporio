import Link from "next/link";
import React from "react";

interface SectionTitleCtaProps {
  title: string;
  subtitle?: string;            // 👈 new
  cta?: string;
  href?: string;
  className?: string;        
  titleClassName?: string;  
  subtitleClassName?: string;   // 👈 new
  ctaClassName?: string;
}

const SectionTitleCta: React.FC<SectionTitleCtaProps> = ({
  title,
  subtitle,
  cta,
  href,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  ctaClassName = "",
}) => {
  return (
    <div className={`${className}`}>
      <h3 className={`${titleClassName}`}>{title}</h3>
      {subtitle && <p className={`${subtitleClassName}`}>{subtitle}</p>} {/* 👈 new */}
      {cta && href && (
        <Link className={`${ctaClassName}`} href={href}>
          {cta}
        </Link>
      )}
    </div>
  );
};

export default SectionTitleCta;
