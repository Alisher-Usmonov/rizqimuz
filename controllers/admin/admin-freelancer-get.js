const Freelancers = require("../../models/FreelancerModel");

module.exports = async (req, res) => {
    try {
        let freelancers = await Freelancers.find();
        res.render("admin-freelancer", {
            freelancers
        })
    } catch(err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}