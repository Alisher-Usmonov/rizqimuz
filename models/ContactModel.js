const { Schema, model } = require("mongoose");
const { v4: uuidV4 } = require("uuid");

const ContactSchema = new Schema({
    id: {
        type: String,
        unique: true,
        default: uuidV4()
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
})

const Contacts = model("contacts", ContactSchema);
module.exports = Contacts;