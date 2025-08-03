import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './User/Home';
import Service from './User/Service'
import Solution from './User/Solution'
import Industries from './User/Industries'



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
          <Route path="/Solution" element={<Solution />} />
          <Route path="/industries" element={<Industries />} />
         
        </Routes>

        {/* Footer shown on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
