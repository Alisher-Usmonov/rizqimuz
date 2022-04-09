const { Schema, model } = require("mongoose");

const AnnouncementSchema = new Schema({
    anno_id: {
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    is_completed: {
        type: Boolean,
        required: true,
        default: false
    },
    slug: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true,
        default:0
    },
    proposals: {
        type: Number,
        required: true,
        default:0
    },
    is_public: {
        type: Boolean,
        required: true,
        default: false
    }
});

const AnnouncementModel = model("announcements", AnnouncementSchema);
module.exports = AnnouncementModel;