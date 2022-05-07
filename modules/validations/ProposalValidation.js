const Joi = require("joi")

module.exports = async (data) => {
    return await Joi.object({
        github_link: Joi.string(),
        name: Joi.string().required(),
        phone_number: Joi.string().required(),
        portfolio_link: Joi.string(),
        cover_letter: Joi.string().required()
    }).validateAsync(data);
}