import React, { useEffect } from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="about-content">
        <div className="card">
          <h2>Who We Are</h2>
          <p>
            Lonestar Dental Care is a private dental practice located in Kitengela, with a team of skilled and talented dentists committed to providing excellent dental care services to our patients in a comfortable, gentle environment.
          </p>
        </div>
        <div className="card">
          <h2>Our Team</h2>
          <p>
            Meet our dedicated team of dental professionals who are passionate about making your smile brighter and healthier. We believe in building good and long-lasting relationships with our patients, colleagues, and the community.
          </p>
        </div>
        <div className="card">
          <h2>Collaborations and Professional Bodies</h2>
          <p>
            We collaborate with other dental colleagues and serve in various dental professional bodies. We also work with medical colleagues, laboratories, and dental support staff to ensure the best outcomes for our patients.
          </p>
        </div>
        <div className="card">
          <h2>Vision</h2>
          <p>To be the CHOICE for a complete multi-specialties dental practice chosen for our heart/core values and expertise in the region.</p>
        </div>
        <div className="card">
          <h2>Mission</h2>
          <p>We sharpen smiles and build good and long-lasting relationships with our patients.</p>
          <p>We gently work with our patients towards their best dental experience; always focused on alleviating their anxieties and fears. We value and continually build on our patients' trust in our integrity, our expertise, and our genuine care for their well-being.</p>
          <p>To deliver excellent quality of clinical dental care to our patients with the most current know-how.</p>
          <p>We sharpen smiles and build good long-lasting relationships with other dental community.</p>
          <p>To collaborate with other dental colleagues and serve in our various dental professional bodies.</p>
          <p>We sharpen smiles and build good long-lasting relationships with medical colleagues, laboratories, and Dental support staff.</p>
          <p>To work with our partners in developing the best dental products and services to our patients.</p>
          <p>To invite our partners to grow with us by innovative and introducing new technologies for the betterment of our patients.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
