// BookingsList.js
import React, { useState, useEffect } from 'react';
import '../styles/BookingsList.css';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bookings'));
        const bookingsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBookings(bookingsList);
        setFilteredBookings(bookingsList);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  useEffect(() => {
    const filtered = bookings.filter(booking =>
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm)
    );
    setFilteredBookings(filtered);
  }, [searchTerm, bookings]);

  return (
    <div className="bookings-list">
      <h2>All Bookings</h2>
      <input
        type="text"
        placeholder="Search by name, email, or phone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Services</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{(booking.services || []).join(', ')}</td>
              <td>{booking.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default BookingsList;
