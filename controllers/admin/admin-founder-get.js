const FoundersModel = require("../../models/FoundersModel");

module.exports = async (req, res) => {
    try {
        let founders = await FoundersModel.find();

        res.render("admin-founders", {
            title: "Admin | Asoschilar",
            founders
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}