const SponsorsModel = require("../../models/SponsorModel")

module.exports = async (req, res) => {
    try {
        let sponsors = await SponsorsModel.find();

        res.render("admin-sponsors", {
            sponsors
        });
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}