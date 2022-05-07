const SponsorModel = require("../../models/SponsorModel");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        let deleteSponsor = await SponsorModel.findOneAndDelete({
            id
        });

        res.status(200).json({
            ok: true,
            message: "Sponsor was succesfully deleted"
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}