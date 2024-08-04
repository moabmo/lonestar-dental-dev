import React, { useState } from 'react';
import '../styles/Booking.css';

const servicesList = [
  "Masking",
  "Management of Facial Trauma",
  "Braces Installation",
  "Implants",
  "Replacement (Crown & Bridge)",
  "Root Canal Treatment",
  "Cleaning (Scaling & Polishing)",
  "Tooth Extraction (Children & Adults)",
  "Full Mouth Examination",
  "Tooth Whitening",
  "Filling (Permanent & Temporary)",
  "Same Day Emergency",
  "Dental Cleaning",
  "Teeth Replacement",
  "Tooth Alignment",
  "Tooth Jewelry"
];

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setSelectedServices((prevServices) =>
      checked ? [...prevServices, value] : prevServices.filter((service) => service !== value)
    );
  };

  const validateFields = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone || phone.length < 9) newErrors.phone = 'Phone number must be at least 9 digits';
    if (!date) newErrors.date = 'Date is required';
    if (!time) newErrors.time = 'Time is required';
    if (selectedServices.length === 0) newErrors.selectedServices = 'Please select at least one service';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Validate date and time
    const bookingDate = new Date(date + 'T' + time);
    const now = new Date();

    if (bookingDate < now) {
      setErrors({ ...newErrors, date: 'Booking date and time must be in the future.' });
      return;
    }

    const day = bookingDate.getDay();
    const hours = bookingDate.getHours();

    if (day === 0 || day === 6) {
      setErrors({ ...newErrors, date: 'Booking is only allowed on weekdays.' });
      return;
    }

    if (hours < 8 || hours >= 17) {
      setErrors({ ...newErrors, time: 'Booking time must be between 8 AM and 5 PM.' });
      return;
    }

    setErrors({});

    if (name && email && phone && date && time && selectedServices.length > 0) {
      alert('Your appointment has been booked successfully!');
    } else {
      alert('Please fill all required fields and select at least one service.');
    }
  };

  const getMinDate = () => {
    const today = new Date();
    const hours = today.getHours();
    if (hours >= 16) {
      // If current time is past 4 PM, disable today
      today.setDate(today.getDate() + 1);
    }
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getAvailableTimes = () => {
    const times = [];
    const today = new Date();
    const currentDate = new Date(date + 'T00:00');
    let startHour = 8;

    if (currentDate.toDateString() === today.toDateString()) {
      startHour = today.getHours() + 1; // start from the next hour
    }

    for (let hour = startHour; hour < 17; hour++) {
      times.push(`${String(hour).padStart(2, '0')}:00`);
      times.push(`${String(hour).padStart(2, '0')}:30`);
    }

    return times;
  };

  return (
    <div className="booking">
    <br/><br/>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-background">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'error-input' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={errors.phone ? 'error-input' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={errors.date ? 'error-input' : ''}
              min={getMinDate()}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </label>
          <label>
            Time:
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={errors.time ? 'error-input' : ''}
            >
              <option value="" disabled>Select a time</option>
              {getAvailableTimes().map((timeOption) => (
                <option key={timeOption} value={timeOption}>{timeOption}</option>
              ))}
            </select>
            {errors.time && <span className="error-message">{errors.time}</span>}
          </label>
          <label>
            Services:
            <div className="custom-dropdown">
              <div className="dropdown-header" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {selectedServices.length > 0 ? selectedServices.join(', ') : 'Select Services'}
                <span className="dropdown-icon">&#9662;</span>
              </div>
              {dropdownOpen && (
                <div className="dropdown-list">
                  {servicesList.map((service, index) => (
                    <label key={index} className="dropdown-item">
                      <input
                        type="checkbox"
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={handleServiceChange}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              )}
            </div>
            {errors.selectedServices && <span className="error-message">{errors.selectedServices}</span>}
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          {errors.message && <span className="error-message">{errors.message}</span>}
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
