const { Schema, model } = require("mongoose");
const { v4: uuidV4 } = require("uuid");

const FounderSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: uuidV4(),
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

const FoundersModel = model("fouders", FounderSchema);
module.exports = FoundersModel;