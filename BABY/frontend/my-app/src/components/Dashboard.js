import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    { title: "Herbal Plants", path: "/herbal-plants" },
    { title: "Dosha Analysis", path: "/dosha-analysis" },
    { title: "Symptom Checker", path: "/symptom-checker" },
    { title: "Prescriptions", path: "/prescriptions" },
    { title: "Doctor Consultation", path: "/doctor-consultation" },
    
  ];

  return (
    <div className="dashboard-container">
      <h1>Ayurvedic Hospital Dashboard</h1>
      <div className="dashboard-grid">
        {features.map((feature, index) => (
          <div key={index} className="dashboard-card" onClick={() => navigate(feature.path)}>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
