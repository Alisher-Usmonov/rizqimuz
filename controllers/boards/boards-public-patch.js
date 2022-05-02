const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        let { slug } = req.params;
        
        let beforeBoard = await AnnouncementModel.findOne({
            slug
        });

        let board = await AnnouncementModel.findOneAndUpdate({
            slug
        }, {
            is_public: !beforeBoard._doc.is_public
        });

        res.status(200).json({
            ok: true,
            message: `Board Public type changed to ${!beforeBoard._doc.is_public}`
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}