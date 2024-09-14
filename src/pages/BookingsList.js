import React, { useState, useEffect } from 'react';
import '../styles/BookingsList.css';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
    setCurrentPage(1); // Reset to the first page after filtering
  }, [searchTerm, bookings]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // Pagination logic
  const indexOfLastBooking = currentPage * rowsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - rowsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);
  const totalPages = Math.ceil(filteredBookings.length / rowsPerPage);

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

      {/* Table for larger screens */}
      <table>
        <thead>
          <tr>
            <th>S/No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Services</th>
            <th>Message</th>
            <th>Submission Date</th>
            <th>Submission Time</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{indexOfFirstBooking + index + 1}</td>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{(booking.services || []).join(', ')}</td>
              <td>{booking.message}</td>
              <td>{booking.submissionDate ? new Date(booking.submissionDate.toDate()).toLocaleDateString() : 'N/A'}</td>
              <td>{booking.submissionDate ? new Date(booking.submissionDate.toDate()).toLocaleTimeString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card layout for smaller screens */}
      {currentBookings.map((booking, index) => (
  <div key={booking.id} className="booking-card">
    <div data-label="Name:"><span>{booking.name}</span></div>
    <div data-label="Email:"><span>{booking.email}</span></div>
    <div data-label="Phone:"><span>{booking.phone}</span></div>
    <div data-label="Date:"><span>{booking.date}</span></div>
    <div data-label="Time:"><span>{booking.time}</span></div>
    <div data-label="Services:"><span>{(booking.services || []).join(', ')}</span></div>
    <div data-label="Message:"><span>{booking.message}</span></div>
    <div data-label="Submission Date:"><span>{booking.submissionDate ? new Date(booking.submissionDate.toDate()).toLocaleDateString() : 'N/A'}</span></div>
    <div data-label="Submission Time:"><span>{booking.submissionDate ? new Date(booking.submissionDate.toDate()).toLocaleTimeString() : 'N/A'}</span></div>
    <div className="serial-number">{indexOfFirstBooking + index + 1}</div> {/* Serial number */}
  </div>
))}


      <div className="pagination-controls">
        <div className="pagination-buttons">
          <button
            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={handleFirstPage}
            disabled={currentPage === 1}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
          <button
            className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
          >
            <FaAngleDoubleRight />
          </button>
          <select
            className="select-page"
            onChange={handleRowsPerPageChange}
            value={rowsPerPage}
          >
            {[5, 10, 15, 20].map(number => (
              <option key={number} value={number}>{number}</option>
            ))}
          </select>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookingsList;
