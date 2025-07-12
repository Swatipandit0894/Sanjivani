const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Access Denied! No token provided." });
    }

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid Token!" });
    }
};

const isDoctor = (req, res, next) => {
    if (req.user.role !== "doctor") {
        return res.status(403).json({ error: "Access Denied! Only doctors can perform this action." });
    }
    next();
};

module.exports = { verifyToken, isDoctor };
