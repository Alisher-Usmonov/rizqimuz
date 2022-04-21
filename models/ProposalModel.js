const { Schema, model } = require("mongoose");
const { v4 } = require("uuid");

const ProposalSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: v4()
    },
    anno_id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    github_link:{
        type: String,
    },
    phone_number: {
        type: String,
        required: true,
    },
    portfolio_link: {
        type: String,
    },
    cover_letter: {
        type: String,
        required: true,
    }
})

const ProposalsModel = model("proposals", ProposalSchema);
module.exports = ProposalsModel;