const express = require("express");
const Resignation = require("../models/Resignation");
const router = express.Router();

router.post("/submit", async (req, res) => {
    const { employeeName, lastWorkingDay, reason } = req.body;
    const newRequest = new Resignation({ employeeName, lastWorkingDay, reason, status: "Pending" });

    try {
        await newRequest.save();
        res.json({ message: "Resignation submitted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/all", async (req, res) => {
    try {
        const requests = await Resignation.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
