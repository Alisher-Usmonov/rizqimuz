const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        name: Joi.string().required(),
        phone: Joi.string().required().min(9),
        comment: Joi.string().required()
    }).validateAsync(data);
}