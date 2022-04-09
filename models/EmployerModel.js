const { Schema, model } = require("mongoose");

const EmployerSchema = new Schema({
    id: {
        type: String,
        unique: true,
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/300x300"
    },
    is_verified: {
        type: Boolean,
        required: true,
        default: false
    },
    is_public: {
        type: Boolean,
        required: true,
        default: false
    },
    tg_username: {
        type: String,
    },
    phone_number: {
        type: String,
    },
    website: {
        type: String,
    },
    youtube: {
        type: String,
    },
    github: {
        type: String,
    },
})

const Employers = model("employers", EmployerSchema);
module.exports = Employers;