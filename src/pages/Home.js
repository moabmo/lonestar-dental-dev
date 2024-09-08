import React from 'react';
import { Link } from 'react-router-dom';
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
      <section className="hero">
        <img src={process.env.PUBLIC_URL + '/assets/images/sample.png'} alt="Lonestar Dental Care" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Welcome to Lonestar Dental Care</h1>
          <p>Providing excellent dental care services in a comfortable and gentle environment.</p>
          <Link to="/booking" className="btn primary-btn">Book Now</Link>
        </div>
      </section>

      <section className="intro">
        <h2>Exceptional Dental Services</h2>
        <div className="intro-content">
          <div className="intro-text">
            <p>At Lonestar Dental Care, we are committed to providing exceptional dental services to our patients. Our team of skilled and experienced dentists is dedicated to ensuring your comfort and satisfaction.</p>
            <p>We offer a wide range of dental services, from general dentistry to cosmetic and restorative procedures. Our state-of-the-art facility is equipped with the latest technology to provide you with the best care possible.</p>
            <p>Your smile is our top priority, and we strive to build long-lasting relationships with our patients. Visit us today and experience the difference at Lonestar Dental Care.</p>
            <Link to="/services" className="btn secondary-btn">View Our Services</Link>
          </div>
          <img src={process.env.PUBLIC_URL + '/assets/images/sample.png'} alt="Dental Care" className="intro-image" />
        </div>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
          <Link to="/services#general-dentistry">
            <h3>General Dentistry</h3>
            <p>Regular checkups, cleanings, fillings, extractions, and diagnostic procedures.</p>
            </Link>
          </div>
          <div className="service-item">
            <Link to="/services#restorative-dentistry"><h3>Restorative Dentistry</h3>
            <p>Fillings, crowns, bridges, and implants to restore function and aesthetics.</p>
            </Link>
          </div>
          <div className="service-item">
            <Link to="/services#cosmetic-dentistry"><h3>Cosmetic Dentistry</h3>
            <p>Teeth whitening, veneers, and bonding to enhance the appearance of your smile.</p>
            </Link>
          </div>
        </div>
        <div className="view-more">
          <Link to="/services" className="btn secondary-btn">View More Services</Link>
        </div>
      </section>
      
      <section className="about-overview">
        <h2>About Us</h2>
        <div className="about-items">
          <div className="about-item">
            <h3>Who We Are</h3>
            <p>Lonestar Dental Care is a private dental practice located in Kitengela, with a team of skilled and talented dentists committed to providing excellent dental care services to our patients in a comfortable, gentle environment.</p>
          </div>
          <div className="about-item">
            <h3>Our Team</h3>
            <p>Meet our dedicated team of dental professionals who are passionate about making your smile brighter and healthier. We believe in building good and long-lasting relationships with our patients, colleagues, and the community.</p>
          </div>
        </div>
        <div className="view-more">
          <Link to="/about" className="btn secondary-btn">Learn More About Us</Link>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-items">
          <div className="testimonial-item">
            <p>"Lonestar Dental Care has transformed my smile! The staff is incredibly friendly and professional. I highly recommend their services."</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial-item">
            <p>"I have never felt more comfortable at a dentist's office. The team at Lonestar Dental Care is amazing."</p>
            <p>- Jane Smith</p>
          </div>
          <div className="testimonial-item">
            <p>"The best dental experience I've ever had. The dentists are skilled, and the environment is very welcoming."</p>
            <p>- Michael Johnson</p>
          </div>
        </div>
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
