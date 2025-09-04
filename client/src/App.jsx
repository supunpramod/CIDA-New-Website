import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home page/Home';
import Footer from './Components/Footer';
import Support from './Components/Support.jsx';


// extra example pages

import Researchpage from './Components/Researchpage';
import TrainingandCertification from './Components/Training.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Top header eka */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Researchpage />} />
          <Route path="/trainingandcertification" element={<TrainingandCertification />} />
          <Route path="/support" element={<Support />} />
          
        </Routes>

        {/* Footer eka */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
