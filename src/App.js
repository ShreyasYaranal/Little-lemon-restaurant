import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import TableReservationForm from './TableReservationForm';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<TableReservationForm
      bookingFormData={{
        date: '',
        time: '16:00',
        occasion: '',
      }}
    />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
