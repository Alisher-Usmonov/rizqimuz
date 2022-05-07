const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        name: Joi.string().required(),
        level: Joi.string().required(),
    }).validateAsync(data);
}