const FreelancerModel = require("../../models/FreelancerModel");

module.exports = async (req, res) => {
    try {
        const { id, status } = req.body;
        let freelancer = await FreelancerModel.findOneAndUpdate({
            id
        }, {
            is_top: status == "false"
        })
        res.status(200).json({
            ok: true,
            message: `Freelancer top status updated`,
            freelancer
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}