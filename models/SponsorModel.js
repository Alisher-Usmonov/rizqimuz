const { Schema, model } = require("mongoose");

const SponsorSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    }
});

const SponsorsModel = model("sponsors", SponsorSchema);
module.exports = SponsorsModel;