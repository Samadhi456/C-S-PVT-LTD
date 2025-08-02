import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './User/Home';
import Inventory from './User/Inventory';
import Service from './User/Service';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
