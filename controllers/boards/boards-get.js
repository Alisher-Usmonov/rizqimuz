const AnnouncementModel = require("../../models/AnnouncementModel")

module.exports = async (req, res) => {
    let boards = await AnnouncementModel.find({
        is_public: true
    });
    console.log(boards);
    res.render('boards', {
        title: `E'lonlar | Rizqim`,
        path: '/boards',
        boards,
        user: req.user ? req.user : null
    })
}