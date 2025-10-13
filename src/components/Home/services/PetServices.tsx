import React from 'react';
import SectionTitleCta from '../../common/SectionTitleCta';
import ServiceCard from '../../common/ServicesCard';
import serviceImg1 from '@/assets/images/Mask-image.png';
import { ServiceFeatureVideoIcon} from '@/assets/Svgicons';

const servicesData = [
  {
    image: serviceImg1,
    title: 'Doctor Consultation',
    subtitle: 'Chat or Video Call with Top Vets',
    cta: 'Book Now - Starting ₹299',
    href: '/services/doctor-consultation',
    features: [
      { icon: ServiceFeatureVideoIcon, text: '24/7 Video Consultations' },
      { icon: ServiceFeatureVideoIcon, text: 'Instant Chat Support' },
      { icon: ServiceFeatureVideoIcon, text: 'Phone Consultation Available' },
    ],
  },
  {
    image: serviceImg1,
    title: 'Pet Grooming',
    subtitle: 'Professional Grooming Services',
    cta: 'Book Now - Starting ₹399',
    href: '/services/pet-grooming',
    features: [
      { icon: ServiceFeatureVideoIcon, text: 'Expert Groomers' },
      { icon: ServiceFeatureVideoIcon, text: 'Schedule Online' },
      { icon: ServiceFeatureVideoIcon, text: 'At Home Service' },
    ],
  },
];


function PetServices() {
  return (
    <section className="PetServices">
      <div className="container">
        <SectionTitleCta
          title="Professional Pet Services"
          cta="View All"
          href="/services"
          className="section-inline-title"
          titleClassName=""
          ctaClassName="button gradient-button"
        />

        <div className="Services-container">
  {servicesData.map((service, idx) => (
    <ServiceCard
      key={idx}
      image={service.image}
      title={service.title}
      subtitle={service.subtitle}
      features={service.features}
      cta={service.cta}
      href={service.href}
    />
  ))}
</div>

      </div>
    </section>
  );
}

export default PetServices;
