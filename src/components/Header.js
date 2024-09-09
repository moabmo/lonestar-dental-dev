import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; // Ensure your CSS file path is correct

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the window has been scrolled down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}>
      <div className="logo">
        <NavLink to="/">
          <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Lonestar Dental Care" />
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
