const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db"); // ✅ Database connection
const diseaseRoutes = require("./routes/diseases"); // ✅ Ayurvedic remedies routes

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("🌿 Welcome to the Ayurvedic Backend API!");
});

// ✅ Routes: Disease suggestions + remedies
app.use("/api/diseases", diseaseRoutes);

// ✅ Route: Get all MCQ questions
app.get("/api/questions", (req, res) => {
  const query = "SELECT id, question FROM dosha_mcq_questions";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching questions:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    res.json(results);
  });
});

// ✅ Route: Submit answers and calculate dosha result
app.post("/api/submit-answers", (req, res) => {
  const answers = req.body.answers; // Expects: [{ questionId, answer }]

  const doshaCount = { Vata: 0, Pitta: 0, Kapha: 0 };
  const yesAnswers = answers.filter(a => a.answer.toLowerCase() === "yes");

  if (yesAnswers.length === 0) {
    return res.json({ message: "No 'Yes' answers given", result: doshaCount });
  }

  const ids = yesAnswers.map(a => a.questionId);
  const query = `SELECT id, associated_dosha FROM dosha_mcq_questions WHERE id IN (${ids.join(",")})`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error processing answers:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    results.forEach(row => {
      if (doshaCount[row.associated_dosha] !== undefined) {
        doshaCount[row.associated_dosha] += 1;
      }
    });

    const dominantDosha = Object.entries(doshaCount)
      .reduce((a, b) => a[1] >= b[1] ? a : b)[0];

    res.json({
      result: doshaCount,
      dominantDosha
    });
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Ayurvedic server running at http://localhost:${PORT}`);
});
