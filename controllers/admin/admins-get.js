const AdminModel = require("../../models/AdminModel");

module.exports = async (req, res) => {
    try {
        let admins = await AdminModel.find();

        res.render("admin-admins", {
            admins
        });
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}