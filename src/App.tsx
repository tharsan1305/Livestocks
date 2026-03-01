import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import VetPortal from './pages/VetPortal';
import Blockchain from './pages/Blockchain';
import MilkSafety from './pages/MilkSafety';
import Consumer from './pages/Consumer';
import HowItWorks from './pages/HowItWorks';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vet" element={<VetPortal />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/milk-safety" element={<MilkSafety />} />
            <Route path="/consumer" element={<Consumer />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
          <p>© 2026 AgroShield 360. Hackathon Demo Project.</p>
        </footer>
      </div>
    </Router>
  );
}
