const Joi = require("joi")

module.exports = async (data) => {
    return await Joi.object({
        github: Joi.string().required(),
        website: Joi.string().required(),
        youtube: Joi.string().required(),
    }).validateAsync(data);
}