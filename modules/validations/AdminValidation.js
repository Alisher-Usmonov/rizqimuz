const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }).validateAsync(data);
}