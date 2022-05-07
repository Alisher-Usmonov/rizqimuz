const { Schema, model } = require("mongoose");
const { v4: uuidV4 } = require("uuid");

const UserSchema = new Schema({
    id: {
        type: String,
        unique: true,
        default: uuidV4()
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
    slug: {
        type: String,
        required: true
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
    experience: [
        {
            from_year: {
                type: Number
            },
            start_month: {
                type: String
            },
            to_year: {
                type: Number
            },
            end_month: {
                type: String
            },
            company_name: {
                type: String
            },
            desc: {
                type: String
            },
            position: {
                type: String
            }

        }
    ],
    skills: [
        {
            type: String
        },
    ],
    about: {
        type: String,
    },
    portfolio: [
        {
            image: {
                type: String
            },
            title: {
                type: String
            },
            project_url: {
                type: String,
            }
        }
    ],
    education: [
        {
            name: {
                type: String
            },
            direction: {
                type: String
            },
            start_year: {
                type: Number
            },
            start_month: {
                type: String
            },
            end_year: {
                type: Number
            },
            end_month: {
                type: String
            },
            about: {
                type: String
            }
        }
    ],
    languages:  [
        {
            name: {
                type: String
            },
            level: {
                type: String
            },
        }
    ],
    website: {
        type: String,
    },
    youtube: {
        type: String,
    },
    github: {
        type: String,
    },
    is_top: {
        type: Boolean,
        default: false
    }
})

const Freelancers = model("freelancers", UserSchema);
module.exports = Freelancers;