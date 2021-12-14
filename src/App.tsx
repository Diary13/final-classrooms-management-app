import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Accueil from './pages/client/home/HomeClient';

// const Home = () => {
//   return (<div><h1>Bienvenue dans notre site</h1></div>);
// }
function App() {
  return (
    <Router>
      <div className="App">
        {/* <img src={logo} alt="logo" /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/client/accueil" element={<Accueil />} />
          <Route path="/admin/accueil" element={<Accueil />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
