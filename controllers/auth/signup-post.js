const { genenerateHash } = require("../../modules/bcrypt");
const Employers = require("../../models/EmployerModel");
const Freelancers = require("../../models/FreelancerModel");
const { SignUpValidation } = require("../../modules/validations/AuthValidation");
const slugify = require("slugify").default;
const mailSend = require("../../modules/email");
const { generateToken } = require("../../modules/jwt");
const model = require("../../modules/model");
const { v4: uuidV4 } = require("uuid");

module.exports = async (req, res) => {
    try {
        let { first_name, last_name, password, email, role } = await SignUpValidation(req.body);
        let pass = await genenerateHash(password);
        let slug = slugify(`${first_name} ${last_name}`, {
            lower: true
        });
        const Users = model(role, Freelancers, Employers);
        let user = await Users.findOne({
            email
        });
        if(user) {
            throw new Error("Bu email allaqachon foydalanilgan.");
        } else {
            user = await Users.create({
                id: uuidV4(),
                first_name,
                last_name,
                email,
                password: pass,
                slug
            })
        }

        // Token
        let token = generateToken({
            ...user._doc,
            password: undefined
        })
        let verify_url = `http://localhost:5000/verify?email=${email}&role=${role}`;

        // Email
        await mailSend(verify_url, "Rizqim.uz hisobni tasdiqlash", "Bir nima" ,email);

        // Response
        res.cookie("token", token).redirect("/email-check");
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}