const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("admins", AdminSchema);