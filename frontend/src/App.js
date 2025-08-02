import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './User/Home';
import Service from './User/Service';

import Soulution from './User/Solution';

// Import Header and Footer from Component folder
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header shown on all pages */}
        <Header />

        {/* Route-based content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        {/* Footer shown on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
