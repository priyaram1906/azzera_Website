import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import  Services  from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import './i18n';

function App() {
  useEffect(() => {
    // Set initial direction based on stored language
    const storedLang = localStorage.getItem('language');
    document.dir = storedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;