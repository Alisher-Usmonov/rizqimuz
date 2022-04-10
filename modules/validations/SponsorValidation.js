const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        website_url: Joi.string().required()
    }).validateAsync(data);
}