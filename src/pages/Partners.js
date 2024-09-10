import React from 'react';
import '../styles/Partners.css'; // Ensure your CSS matches the styles mentioned below.

const partners = [
  { name: 'Jubilee Insurance', image: '/assets/images/jubilee.jpg' },
  { name: 'AAR Insurance', image: '/assets/images/aar.png' },
  { name: 'Livia Insurance', image: '/assets/images/livia.jpg' },
  { name: 'CarePay Insurance', image: '/assets/images/carepay.png' },
  { name: 'Old Mutual Insurance', image: '/assets/images/oldmutual.jpg' },
  { name: 'Pacific Insurance', image: '/assets/images/pacific.png' }
];

const Partners = () => {
  return (
    <section className="partners-overview">
      <h2>Our Partners</h2>
      <div className="partner-scroll">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={process.env.PUBLIC_URL + partner.image} alt={partner.name} className="partner-image" />
            <span className="partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
