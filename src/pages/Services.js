import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

const services = [
  { title: 'Bonding', description: 'To repair small chips or cracks' },
  { title: 'Crowns & Bridgework', description: 'To replace large amounts of lost tooth structure and/or missing teeth' },
  { title: 'Dental Implants', description: 'For the longest-lasting tooth replacement available today' },
  { title: 'Fillings', description: 'To make your teeth strong and healthy again' },
  { title: 'Oral Cancer Screenings', description: 'To detect disease at a curable stage' },
  { title: 'Orthodontic Treatment', description: 'To move teeth into the right position' },
  { title: 'Periodontal (Gum) Disease Therapy', description: 'To prevent tooth loss' },
  { title: 'Porcelain Veneers', description: 'For repairing larger chips and cracks, and reshaping teeth' },
  { title: 'Professional Teeth Cleanings', description: 'To maintain good oral health' },
  { title: 'Removable Dentures', description: 'To help you smile again' },
  { title: 'Root Canal Treatment', description: 'To save an infected tooth' },
  { title: 'Sealants', description: 'To protect children\'s teeth from decay' },
  { title: 'Teeth Whitening', description: 'To brighten a faded or discolored smile' },
  { title: 'Tooth Extractions', description: 'When a tooth is hopelessly damaged or decayed' }
];

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
