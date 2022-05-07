const Employers = require("../../models/EmployerModel");
const Freelancers = require("../../models/FreelancerModel");
const modelId = require("../../modules/model-id");
const { generateToken } = require("../../modules/jwt");

module.exports = {
    async skillDelete(req, res) {
        try {
            let { id } = req.params;
            let { skill } = req.body;
            console.log(skill);
            
            const model = await modelId(Freelancers, Employers, id);

            let user = await model.findOne({ id });

            let skills = user.skills.filter(item => item !== skill);
            console.log(skills);

            let updateUser = await model.findOneAndUpdate({
                id
            }, {
                skills
            });

            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                skills
            });

            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User skills updated.",
                updateUser
            });
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    }
}