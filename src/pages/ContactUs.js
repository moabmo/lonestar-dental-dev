import React from 'react';
import '../styles/ContactUs.css';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ContactUs = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScg1rO7rFBRqKIgzGuQ5ajUo4chJZXHJk2ol6xYeG3SvfYm4g/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',  // Required to handle CORS
      });

      // Display a success toast message
      toast.success('Message sent successfully!');

      // Clear the form fields
      form.reset();
    } catch (error) {
      // Display an error toast message
      toast.error('Error: ' + error.message);
    }
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form id="custom-contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="entry.2005620554" required />
        
        <label>Email</label>
        <input type="email" name="entry.1045781291" required />
        
        <label>Phone</label>
        <input type="text" name="entry.1166974658" />
        
        <label>Message</label>
        <textarea name="entry.839337160" required></textarea>
        
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Address: Kitengela, Kenya</p>
        <p>Phone: +254 792 056 862</p>
        <p>Email: info@lonestardentalcare.co.ke</p>
      </div>
      <ToastContainer /> 
    </div>
  );
};

export default ContactUs;
