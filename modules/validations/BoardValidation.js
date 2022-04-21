const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        title: Joi.string().required().min(10),
        description: Joi.string().required(),
        budget: Joi.number().required(),
        phone_number: Joi.string().required()
    }).validateAsync(data);
}