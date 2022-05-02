const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        let { slug } = req.params;

        let deletedBoard = await AnnouncementModel.findOneAndDelete({
            slug
        });

        res.status(200).json({
            ok: true,
            message: "Board Deleted"
        });

    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}