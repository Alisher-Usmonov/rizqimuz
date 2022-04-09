const Freelancers = require("../../models/FreelancerModel");
const Employers = require("../../models/EmployerModel");
const model = require("../../modules/model");

module.exports = async (req, res) => {
    try {
        console.log(req.query);
        let { email, role } = req.query;
        let Users = model(role, Freelancers, Employers);
        let user = await Users.findOne({
            email
        });
        let { is_verified } = user;

        if(!is_verified) {
            user = await Users.findOneAndUpdate({
                email
            }, {
                is_verified: true
            });
            res.render("verify", {
                already_verified: false
            })
        } else {
            res.render("verify", {
                already_verified: true
            })
        }

    } catch (err) {
        res.status(400).send(err.message);
    }
}