const Employers = require("../../models/EmployerModel");
const Freelancers = require("../../models/FreelancerModel");
const { SignInValidation } = require("../../modules/validations/AuthValidation");
const { generateToken } = require("../../modules/jwt");
const { compareHash } = require("../../modules/bcrypt");

module.exports = async (req, res) => {
    try {
        let { password, email } = await SignInValidation(req.body);
        let user = await Freelancers.findOne({
            email
        });
        if(!user) {
            user = await Employers.findOne({
                email
            });
            if(!user) {
                throw new Error("Siz ro'yhatdan o'tmagansiz!");
            }
        }
        let isPassTrue = await compareHash(password, user.password);
        if(!isPassTrue) {
            throw new Error("Parol xato kiritildi!");
        }
        // Token
        let token = generateToken({
            ...user._doc,
            password: undefined
        })
        res.cookie("token", token).redirect("/profile");
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}