import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import Login from './pages/login/login';
import HomeClient from './pages/client/home/HomeClient';
import HomeAdmin from './pages/admin/home/HomeAdmin';
import { RequireAuth, RequireAuthAdmin } from './guards/AuthGuards';

function App() {
  return (
    <Router>
      {/* <div className='App'> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/client/home" element={
          <RequireAuth>
            <HomeClient />
          </RequireAuth>
        } />
        <Route path="/admin/home" element={
          <RequireAuthAdmin>
            <HomeAdmin />
          </RequireAuthAdmin>
        } />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      {/* </div> */}
    </Router >
  );
}

export default App;
