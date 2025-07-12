const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ✅ GET autocomplete suggestions for diseases
router.get("/suggestions", (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required." });
  }

  const likeQuery = `%${query}%`;
  const sql = `
    SELECT DISTINCT disease_name 
    FROM Diseases 
    WHERE disease_name LIKE ? OR symptoms LIKE ?
    LIMIT 10
  `;

  db.query(sql, [likeQuery, likeQuery], (err, result) => {
    if (err) {
      console.error("Error fetching suggestions:", err);
      return res.status(500).json({ error: "Internal server error." });
    }

    res.json(result.map(row => row.disease_name));
  });
});

// ✅ GET formatted remedies for a specific disease or symptoms
router.get("/remedies", (req, res) => {
  const input = req.query.input;
  if (!input) {
    return res.status(400).json({ error: "Input parameter is required." });
  }

  const likeInput = `%${input}%`;
  const sql = `
    SELECT * FROM Diseases 
    WHERE disease_name LIKE ? OR symptoms LIKE ?
    ORDER BY 
      CASE 
        WHEN disease_name LIKE ? THEN 1
        WHEN symptoms LIKE ? THEN 2
        ELSE 3
      END
    LIMIT 1
  `;

  db.query(sql, [likeInput, likeInput, likeInput, likeInput], (err, result) => {
    if (err) {
      console.error("Error fetching remedies:", err);
      return res.status(500).json({ error: "Internal server error." });
    }

    if (result.length === 0) {
      return res.json([]); // Respond with empty array if no result
    }

    const row = result[0];
    const formattedResult = {
      disease_name: row.disease_name || "Not Available",
      symptoms: row.Symptoms || "Not Available",
      home_remedies_1: row["Home Remedy (with Explanation)"] || "Not Available",
      home_remedies_2: row["Herbal Medicine (with Explanation)"] || "Not Available",
      benefits: row["How It Works?"] || "Not Available",
      usage_instructions: row["How to Use It?"] || "Not Available",
      dosage: row["Dosage (How Much & How Often?)"] || "Not Available",
      severity: row.Severity || "Not Available",
      severityMessage: row.Severity === "Mild"
        ? "✅ These remedies are suitable for mild cases and usually don’t require a doctor’s prescription."
        : "⚠️ For moderate to severe symptoms, please consult an Ayurvedic doctor before trying remedies."
    };

    res.json([formattedResult]);
  });
});

module.exports = router;
