import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import Login from './pages/login/login';
import { HomeClient } from './pages/client/home/HomeClient';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <img src={logo} alt="logo" /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/client/home" element={<HomeClient />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
