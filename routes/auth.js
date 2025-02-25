const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (username !== "admin" || password !== "admin") {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ role: "HR" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, role: "HR" });
});

module.exports = router;
