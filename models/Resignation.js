const mongoose = require("mongoose");

const ResignationSchema = new mongoose.Schema({
    employeeName: String,
    lastWorkingDay: String,
    reason: String,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Resignation", ResignationSchema);
