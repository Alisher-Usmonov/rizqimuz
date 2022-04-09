const { Schema, model } = require("mongoose");

const ProposalSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
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
        type: Number,
    },
    cover_letter: {
        type: String,
        required: true,
    }
})

const ProposalsModel = model("propposals", ProposalSchema);
module.exports = ProposalsModel;