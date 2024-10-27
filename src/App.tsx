import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import ProductsPage from './Components/Products';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import HomePage from './Components/HomePage';
import EditProfile from './Components/EditProfile';
import { User } from './Interfaces/User';
import PaymentMethods from './Components/PaymentMethods';
import UserAccount from './Components/UserAccount';
import UserProfile from './Components/UserProfile';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import AdminDashboard from './Components/AdminDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ...


function App() {
  const defaultUser: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      country: 'USA',
    },
    paymentMethods: [
      {
        id: 1,
        type: 'Credit Card',
        details: '**** **** **** 1234',
      },
    ],
  };
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
