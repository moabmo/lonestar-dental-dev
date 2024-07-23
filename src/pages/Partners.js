import React from 'react';
import '../styles/Partners.css';

const partners = [
  { name: 'Insurance Company A', image: '/assets/images/sample.png' },
  { name: 'Insurance Company B', image: '/assets/images/sample.png' },
  { name: 'Insurance Company C', image: '/assets/images/sample.png' }
];

const Partners = () => {
  return (
    <div className="partners">
      <h2>Our Partners</h2>
      <div className="partner-list">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={process.env.PUBLIC_URL + partner.image} alt={partner.name} />
            <h3>{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
