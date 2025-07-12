import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch suggestions when input changes
  useEffect(() => {
    if (input.length >= 2) {
      axios
        .get(`http://localhost:5000/api/diseases/suggestions?query=${input}`)
        .then((res) => setSuggestions(res.data))
        .catch((err) => console.error("Suggestions Error:", err));
    } else {
      setSuggestions([]);
    }
  }, [input]);

  // ✅ Fetch disease details
  const handleSearch = () => {
    if (!input.trim()) return;

    setLoading(true);
    setError("");
    axios
      .get(`http://localhost:5000/api/diseases/remedies?input=${input}`)
      .then((res) => {
        setResults(res.data);
        if (res.data.length === 0) {
          setError("No remedies found for the entered disease or symptoms.");
        }
      })
      .catch((err) => {
        console.error("Search Error:", err);
        setError("Something went wrong. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  // ✅ On suggestion click
  const handleSelectSuggestion = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
    handleSearch();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>🌿 Ayurvedic Remedy Finder</h2>
      <input
        type="text"
        placeholder="Type disease or symptoms..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
        }}
      />
      {suggestions.length > 0 && (
        <ul style={{
          listStyle: "none",
          padding: 0,
          marginTop: "10px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "5px",
          maxHeight: "150px",
          overflowY: "auto",
        }}>
          {suggestions.map((s, i) => (
            <li
              key={i}
              onClick={() => handleSelectSuggestion(s)}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.background = "#f0f0f0"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <div style={{ marginTop: "1.5rem" }}>
        {results.map((d, i) => (
          <div
            key={i}
            style={{
              background: "#f1fff5",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>🦠 {d.disease_name}</h3>
            <p><strong>Symptoms:</strong> {d.symptoms}</p>
            <p><strong>Home Remedy 1:</strong> {d.home_remedies_1}</p>
            <p><strong>Home Remedy 2:</strong> {d.home_remedies_2}</p>
            <p><strong>Benefits:</strong> {d.benefits}</p>
            <p><strong>Usage Instructions:</strong> {d.usage_instructions}</p>
            <p><strong>Dosage:</strong> {d.dosage}</p>
            <p><strong>Severity:</strong> {d.severity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
