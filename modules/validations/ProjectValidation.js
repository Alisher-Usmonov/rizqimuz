const Joi = require("joi");

module.exports = async (data) => {
    return await Joi.object({
        project_name: Joi.string().required(),
        project_url: Joi.string().required(),
    }).validateAsync(data);
}