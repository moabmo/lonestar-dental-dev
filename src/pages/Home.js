import React from 'react';
import '../styles/Home.css';

const partners = [
  { name: 'Jubilee Insurance', image: '/assets/images/jubilee.jpg' },
  { name: 'AAR Insurance', image: '/assets/images/aar.png' },
  { name: 'Livia Insurance', image: '/assets/images/livia.jpg' },
  { name: 'CarePay Insurance', image: '/assets/images/carepay.png' },
  { name: 'Old Mutual Insurance', image: '/assets/images/oldmutual.jpg' },
  { name: 'Pacific Insurance', image: '/assets/images/pacific.png' }
];

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <img src={process.env.PUBLIC_URL + '/assets/images/logo.jpg'} alt="Lonestar Dental Care" className="home-logo" />
        <div className="banner-text">
          <h1>Welcome to Lonestar Dental Care</h1>
          <p>Providing excellent dental care services in a comfortable and gentle environment.</p>
        </div>
      </section>
      <section className="vision-mission">
        <h2>Our Vision</h2>
        <p>To be the CHOICE for a complete multi-specialties dental practice chosen for our heart/core values and expertise in the region.</p>
        <h2>Our Mission</h2>
        <p>We sharpen smiles and build good and long-lasting relationships with our patients.</p>
        <p>We gently work with our patients towards their best dental experience; always focused on alleviating their anxieties and fears. We value and continually build on our patients' trust in our integrity, our expertise, and our genuine care for their well-being.</p>
      </section>
      <section className="core-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>The dental patient is at the center of everything we do and believe in.</li>
          <li>We seek to upgrade our knowledge and skills for the benefit of providing excellent and most caring dental services possible for our patients.</li>
          <li>We work as a team and uphold our professional responsibilities and integrity with customized treatment plans and no overtreatment.</li>
        </ul>
      </section>
      <section className="services-overview">
        <h2>Our Services</h2>
        <p>We offer a wide range of dental services to meet your needs, including bonding, crowns & bridgework, dental implants, fillings, oral cancer screenings, orthodontic treatment, periodontal therapy, porcelain veneers, professional teeth cleanings, removable dentures, root canal treatment, sealants, teeth whitening, and tooth extractions.</p>
      </section>
      <section className="partners-overview">
        <h2>Our Partners</h2>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <img src={process.env.PUBLIC_URL + partner.image} alt={partner.name} className="partner-image" />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
