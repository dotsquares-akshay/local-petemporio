import Link from "next/link";
import React from "react";

interface SectionTitleCtaProps {
  title: string;
  cta?: string;
  href?: string;
}

const SectionTitleCta: React.FC<SectionTitleCtaProps> = ({
  title,
  cta,
  href,
}) => {
  return (
    <div className="title-cta">
      <h3 className="title">{title}</h3>
      {cta && href && (
        <Link className="cta" href={href}>
          {cta}
        </Link>
      )}
    </div>
  );
};


export default SectionTitleCta;
