import React, { useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const SearchAyurvedic = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [diseaseData, setDiseaseData] = useState([]);
  const [noData, setNoData] = useState(false);

  const fetchSuggestions = debounce(async (value) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/diseases/suggestions?query=${value}`);
      setSuggestions(res.data || []);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setNoData(false);
    setDiseaseData([]);

    if (value.length >= 2) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchDetails = async (input) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/diseases/remedies?input=${input}`);
      setDiseaseData(res.data || []);
      setSuggestions([]);
      setNoData((!res.data || res.data.length === 0));
    } catch (err) {
      console.error("Error fetching disease details:", err);
      setNoData(true);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>🌿 Ayurvedic Disease Search</h2>

      <input
        type="text"
        placeholder="Type disease or symptoms..."
        value={query}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') fetchDetails(query);
        }}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />

      {/* 🔍 Suggestions */}
      {suggestions.length > 0 && (
        <ul style={{
          listStyle: "none",
          padding: 0,
          marginTop: "10px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => {
                setQuery(s);
                fetchDetails(s);
              }}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: idx !== suggestions.length - 1 ? "1px solid #eee" : "none",
                backgroundColor: "#f9f9f9",
                transition: "background-color 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#e6f7ff"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#f9f9f9"}
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {/* ❌ No Data */}
      {noData && (
        <p style={{ marginTop: "20px", color: "red" }}>
          😕 No remedies found for "<strong>{query}</strong>"
        </p>
      )}

      {/* ✅ Disease Details */}
      {diseaseData && diseaseData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {diseaseData.map((item, idx) => (
            <div key={idx} style={{
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              background: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}>
              <h3>🦠 {item.disease_name}</h3>
              <p><strong>Symptoms:</strong> {item.symptoms}</p>
              <p><strong>Home Remedies 1:</strong> {item.home_remedies_1}</p>
              <p><strong>Home Remedies 2:</strong> {item.home_remedies_2}</p>
              <p><strong>Benefits:</strong> {item.benefits}</p>
              <p><strong>Usage Instructions:</strong> {item.usage_instructions}</p>
              <p><strong>Dosage:</strong> {item.dosage}</p>
              <p><strong>Severity:</strong> {item.severity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAyurvedic;
