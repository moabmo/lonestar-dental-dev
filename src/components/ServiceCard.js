import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={process.env.PUBLIC_URL + '/assets/images/sample.png'} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
