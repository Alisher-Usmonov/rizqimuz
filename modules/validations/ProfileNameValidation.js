const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        first_name: Joi.string().required().min(3).max(30),
        last_name: Joi.string().required().min(5).max(30),
    }).validateAsync(data);
}