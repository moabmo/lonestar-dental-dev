import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
      {(isLargeScreen || !isScrolled) && (
        <div className="info-line">
          <div className="info-text">
            <span className="info-item">
              <FaMapMarkerAlt /> Kitengela, Kenya
            </span>
            <span className="info-item">
              <FaPhone /> +254 792 056 862
            </span>
          </div>
        </div>
      )}
      <div className="logo">
        <NavLink to="/">
          <img src={process.env.PUBLIC_URL + '/assets/images/logo.jpg'} alt="Lonestar Dental Care" />
        </NavLink>
      </div>
      <nav className={isOpen ? 'nav-open' : ''}>
        <ul>
          <li><NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about-us" activeClassName="active" onClick={toggleMenu}>About Us</NavLink></li>
          <li><NavLink to="/services" activeClassName="active" onClick={toggleMenu}>Services</NavLink></li>
          <li><NavLink to="/booking" activeClassName="active" onClick={toggleMenu}>Book Appointment</NavLink></li>
          <li><NavLink to="/contact-us" activeClassName="active" onClick={toggleMenu}>Contact Us</NavLink></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
