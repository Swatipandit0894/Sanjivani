const express = require('express');
const db = require('../config/db');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Book an appointment
router.post('/book', verifyToken, (req, res) => {
    const { doctor_id, appointment_date } = req.body;
    const patient_id = req.user.id;

    const sql = "INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES (?, ?, ?)";
    db.query(sql, [patient_id, doctor_id, appointment_date], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Appointment booked successfully!" });
    });
});

// Get user appointments
router.get('/my-appointments', verifyToken, (req, res) => {
    const user_id = req.user.id;
    
    const sql = "SELECT * FROM appointments WHERE patient_id = ?";
    db.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
