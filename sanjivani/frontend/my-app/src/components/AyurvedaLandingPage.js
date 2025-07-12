// src/components/AyurvedaLandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AyurvedaLandingPage.css';

const AyurvedaLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <h1>🌿 Sanjivani Ayurveda</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#plants">Herbal Plants</a>
          <a href="#contact">Contact</a>
          <button className="nav-dashboard-button" onClick={() => navigate('/dashboard')}>Dashboard</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>Revive Your Health with the Power of Ayurveda</h2>
        <p>Discover ancient healing practices with modern guidance from Sanjivani Ayurvedic Hospital.</p>
        <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h3>What is Ayurveda?</h3>
        <p>
          Ayurveda is a 5,000-year-old system of natural healing rooted in the Vedic culture of India.
          It emphasizes balance between body, mind, and spirit through diet, lifestyle, and herbal remedies.
        </p>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <h3>Our Key Services</h3>
        <div className="feature-grid">
          <div className="feature-card">Dosha Analysis</div>
          <div className="feature-card">Symptom Checker</div>
          <div className="feature-card">Doctor Consultation</div>
          <div className="feature-card">Herbal Plant Guide</div>
          <div className="feature-card">Personalized Diet Plan</div>
          <div className="feature-card">Prescription History</div>
        </div>
      </section>

      {/* Plants CTA */}
      <section id="plants" className="plants-cta">
        <h3>🌱 Dive Into Herbal Wisdom</h3>
        <p>Learn about 100+ powerful plants used in Ayurvedic healing.</p>
        <button onClick={() => navigate('/herbal-plants')}>View Plant Library</button>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>&copy; 2025 Sanjivani Ayurveda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AyurvedaLandingPage;
