const AnnouncementModel = require("../../models/AnnouncementModel")

module.exports = async (req, res) => {
    try {
        let completed = await AnnouncementModel.find({
            is_completed: true
        });

        res.render('completed', {
            title: `Tugallangan loyihalar | Rizqim`,
            path: '/completed',
            completed,
            user: req.user ? req.user : null
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}