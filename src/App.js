// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Booking from './pages/Booking';
import BookingsList from './pages/BookingsList';
import AdjustContent from './components/AdjustContent'; // Import the AdjustContent component

const App = () => {
  return (
    <Router>
      <Header />
      <AdjustContent /> {/* Include the AdjustContent component to adjust padding */}
      <div className="main-content"> {/* Wrap your routes inside the main-content div */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bookings" element={<BookingsList />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
