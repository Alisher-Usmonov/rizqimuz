const { Schema, model } = require("mongoose");
const { v4: uuidV4 } = require("uuid");

const AboutSchema = new Schema({
    id: {
        type: String,
        required: true,
        default: uuidV4()
    },
    text:{
        type: String,
        required: true
    },
});

const AboutsModel = model("about", AboutSchema);
module.exports = AboutsModel;