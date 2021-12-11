import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HomeClient } from './pages/login/client/home/home';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/client/home' element={<HomeClient />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
