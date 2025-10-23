import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ServiceFeatureVideoIcon } from '@/assets/Svgicons';
import Link from 'next/link';

interface ServiceFeature {
  icon: React.ReactNode;
  text: string;
}

interface ServiceCardProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  features: ServiceFeature[];
  cta: string;
  href: string;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, subtitle, features,href, cta }) => {
  return (
    <div className="ServicesCard">
      <Image src={image} alt={title} />
      <div className="service-info">
        <div className="service-title">{title}</div>
        <div className="service-subtitle">{subtitle}</div>
        <div className="service-features">
          {features.map((feature, idx) => (
            <div key={idx} className="service-feature flex items-center gap-2">
              <div className="icon-bg">{feature.icon}</div>
              <div className="feature">{feature.text}</div>
            </div>
          ))}
        </div>
        <Link className="primary-button button mt-5" href={href}>
           {cta}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
