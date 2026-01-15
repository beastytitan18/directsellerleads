import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import WhyUs from './pages/WhyUs';
import Affiliate from './pages/Affiliate';
import AdService from './pages/AdService';
import Support from './pages/Support';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/ad-service" element={<AdService />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
