const { Schema, model } = require("mongoose");
const { v4 } = require("uuid");

const SponsorSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: v4(),
    },
    image:{
        type: String,
        required: true
    },
    website_url: {
        type: String,
        required: true,
    }
});

const SponsorsModel = model("sponsors", SponsorSchema);
module.exports = SponsorsModel;