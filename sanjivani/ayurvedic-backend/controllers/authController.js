const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = (req, res) => {
    const { name, email, password, role } = req.body;
    
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err.message });

        User.createUser(name, email, hashedPassword, role, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "User registered successfully!" });
        });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    User.getUserByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ error: "User not found!" });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (!isMatch) return res.status(400).json({ error: "Invalid credentials!" });

            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.json({ message: "Login successful!", token });
        });
    });
};

module.exports = { register, login };
