// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AyurvedaLandingPage from "./components/AyurvedaLandingPage";
import Dashboard from "./components/Dashboard";
import HerbalPlants from "./components/HerbalPlants";
import DoshaAnalysis from "./components/DoshaAnalysis";
import SymptomChecker from "./components/SymptomChecker";
import Prescriptions from "./components/Prescriptions";
import DoctorConsultation from "./components/DoctorConsultation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AyurvedaLandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Correct path */}
        <Route path="/herbal-plants" element={<HerbalPlants />} />
        <Route path="/dosha-analysis" element={<DoshaAnalysis />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/doctor-consultation" element={<DoctorConsultation />} />
      </Routes>
    </Router>
  );
};

export default App;
