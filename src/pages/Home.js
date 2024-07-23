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
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-categories">
          <div className="service-category">
            <h3>1. General Dentistry</h3>
            <p>Among the many services we offer are regular checkups, cleanings, fillings, extractions, and diagnostic procedures.</p>
          </div>
          <div className="service-category">
            <h3>2. Restorative Dentistry</h3>
            <p>To assist restore the function and aesthetics of your teeth, we provide a number of restorative procedures, including fillings, crowns, bridges, and implants.</p>
          </div>
          <div className="service-category">
            <h3>3. Cosmetic Dentistry</h3>
            <p>We offer a range of cosmetic procedures including dental braces, teeth whitening, veneers, and bonding to enhance the appearance of your smile.</p>
          </div>
        </div>
      </section>
      
      <section className="vision-mission">
        <h2>Vision</h2>
        <p>To be the CHOICE for a complete multi-specialties dental practice chosen for our heart/core values and expertise in the region.</p>
        
        <h2>Mission</h2>
        <p>We sharpen smiles and build good and long-lasting relationships with our patients.</p>
        <p>We gently work with our patients towards their best dental experience; always focused on alleviating their anxieties and fears. We value and continually build on our patients' trust in our integrity, our expertise, and our genuine care for their well-being.</p>
        <p>To deliver excellent quality of clinical dental care to our patients with the most current know-how.</p>
        <p>We sharpen smiles and build good long-lasting relationships with other dental community.</p>
        <p>To collaborate with other dental colleagues and serve in our various dental professional bodies.</p>
        <p>We sharpen smiles and build good long-lasting relationships with medical colleagues, laboratories and Dental support staff.</p>
        <p>To work with our partners in developing the best dental products and services to our patients.</p>
        <p>To invite our partners to grow with us by innovative and introducing new technologies for the betterment of our patients.</p>
      </section>
      
      <section className="core-values">
        <h2>Core Values</h2>
        <p>The dental patient is at the center of everything we do and believe in.</p>
        <p>We seek to upgrade our knowledge and skills for the benefit of providing excellent and most caring dental services possible for our patients.</p>
        <p>We work as a team and uphold our professional responsibilities and integrity with customized treatment plans and no overtreatment.</p>
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
      
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Kitengela Ola Petrol Station, 1st Floor</p>
        <p>Phone: 0792-056-862</p>
        <p>Instagram: <a href="https://www.instagram.com/_lonestardentalcare">@_lonestardentalcare</a></p>
      </section>
    </div>
  );
};

export default Home;
