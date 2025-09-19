import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home page/Home';
import Footer from './Components/Footer';
import Support from './Components/Support.jsx';
import Services from './Components/Services.jsx';




import Researchpage from './Components/Researchpage';
import TrainingandCertification from './Components/Training.jsx';
import RegularityInfo from './Components/RegularityInfo.jsx';
import  AboutUs from './Components/AboutUs.jsx';
import IndustryInfo from './Components/IndustryInfo.jsx';

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
          <Route path="/regularityinfo" element={<RegularityInfo />} />
          <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/services" element={< Services/>} />
           <Route path="/industryinfo" element={< IndustryInfo/>} />

          
        </Routes>

        {/* Footer eka */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
