const Joi = require("joi");

module.exports = {
    async SignUpValidation(data) {
        return await Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6),
            role: Joi.string().required()
        }).validateAsync(data);
    },
    async SignInValidation(data) {
        return await Joi.object({
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6)
        }).validateAsync(data);
    },
};