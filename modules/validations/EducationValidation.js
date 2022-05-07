const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        name: Joi.string().required(),
        direction: Joi.string().required(),
        start_year: Joi.number().required(),
        start_month: Joi.string().required(),
        end_year: Joi.number().required(),
        end_month: Joi.string().required(),
        about: Joi.string().required(),
    }).validateAsync(data);
}