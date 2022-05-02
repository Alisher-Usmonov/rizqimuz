const AdminModel = require("../../models/AdminModel");

module.exports = async (req, res) => {
    try {
        let { id } = req.params;

        let deletedAdmin = await AdminModel.findOneAndDelete({
            id
        });

        res.status(200).json({
            ok: true,
            message: "Admin deleted."
        });
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}