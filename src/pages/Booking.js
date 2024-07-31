import React, { useState } from 'react';
import '../styles/Booking.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date and time
    const bookingDate = new Date(date + 'T' + time);
    const now = new Date();

    if (bookingDate < now) {
      setError('Booking date and time must be in the future.');
      return;
    }

    const day = bookingDate.getDay();
    const hours = bookingDate.getHours();

    if (day === 0 || day === 6) {
      setError('Booking is only allowed on weekdays.');
      return;
    }

    if (hours < 8 || hours >= 17) {
      setError('Booking time must be between 8 AM and 5 PM.');
      return;
    }

    setError('');
    alert('Your appointment has been booked successfully!');
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required min={getMinDate()} />
        </label>
        <label>
          Time:
          <select value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="" disabled>Select a time</option>
            {getAvailableTimes().map((timeOption) => (
              <option key={timeOption} value={timeOption}>{timeOption}</option>
            ))}
          </select>
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Booking;
