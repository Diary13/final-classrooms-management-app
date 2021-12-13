import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Actualite from './pages/Actualite/actualite';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/login' element={<Login/>} />
      <Route path='/actualite' element={<Actualite/>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  );
}

export default App;
