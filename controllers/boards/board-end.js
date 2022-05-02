const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        const { id, status } = req.body;

        let updatedBoard = await AnnouncementModel.findOneAndUpdate({
            anno_id: id
        }, {
            is_completed: status == "false"
        })
        res.status(200).json({
            ok: true,
            message: `Board completed status updated`,
            updatedBoard
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}