import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
    <br/><br/>
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Phone</label>
        <input type="text" name="phone" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Address: Kitengela, Kenya</p>
        <p>Phone: +254 792 056 862</p>
        <p>Email: info@lonestardentalcare.co.ke</p>
      </div>
    </div>
  );
};

export default ContactUs;
