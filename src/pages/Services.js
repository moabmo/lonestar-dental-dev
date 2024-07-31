import React, { useState } from 'react';
import '../styles/Services.css';

const services = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Regular checkups, cleanings, fillings, extractions, and diagnostic procedures.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    description: 'Fillings, crowns, bridges, and implants to restore function and aesthetics.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and bonding to enhance the appearance of your smile.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Dental care for children, including preventive and restorative treatments.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Braces, aligners, and other treatments to correct misaligned teeth and jaws.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    description: 'Treatment of gum disease and other conditions affecting the gums and bone supporting the teeth.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    description: 'Root canal therapy and other treatments involving the pulp and roots of the teeth.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    description: 'Surgical procedures involving the teeth, gums, and jaws, including extractions and implants.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    description: 'Restoration and replacement of missing teeth with dentures, bridges, and implants.',
    image: '/assets/images/sample.png'
  },
  {
    id: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    description: 'Immediate treatment for dental emergencies such as severe pain, injury, or infection.',
    image: '/assets/images/sample.png'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-categories">
        {services.map((service) => (
          <div className="service-category" key={service.id} onClick={() => handleServiceClick(service)}>
            <img src={process.env.PUBLIC_URL + service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
