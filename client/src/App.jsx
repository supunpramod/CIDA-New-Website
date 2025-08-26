import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home page/Home';
import Footer from './Components/Footer';

// extra example pages
// import About from './Components/About';
// import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div>
        {/* Top header eka */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>

        {/* Footer eka */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
