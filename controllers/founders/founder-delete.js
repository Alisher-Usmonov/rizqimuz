const FoundersModel = require("../../models/FoundersModel");

module.exports = async (req, res) => {
    try {
        let { id } = req.params;

        let deletedFounder = await FoundersModel.findOneAndDelete({
            id
        });
        
        res.status(200).json({
            ok: true,
            message: "Founder Succesfully deleted!"
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}