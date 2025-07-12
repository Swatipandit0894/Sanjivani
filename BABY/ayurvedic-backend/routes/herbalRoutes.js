const express = require('express');
const db = require('../config/db');

const router = express.Router();

// ✅ Fetch all herbal plants (GET /api/herbal/plants)
router.get('/plants', async (req, res) => {
    try {
        const sql = "SELECT * FROM herbal_plants";
        db.query(sql, (err, result) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ error: "Database query failed" });
            }
            res.json(result);
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
