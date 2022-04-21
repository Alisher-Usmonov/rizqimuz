const FreelancerModel = require("../../models/FreelancerModel");
const EmployerModel = require("../../models/EmployerModel");
const AnnouncementModel = require("../../models/AnnouncementModel");
const SponsorModel = require("../../models/SponsorModel");

module.exports = async (req, res) => {
    try {
        let freelancers = await FreelancerModel.find();
        let employers = await EmployerModel.find();
        let announcements = await AnnouncementModel.find();
        let end_boards = await AnnouncementModel.find({
            is_completed: true
        });
        let sponsors = await SponsorModel.find();
        let top_boards = await AnnouncementModel.find().limit(10).sort({ views: 'asc' });
        res.render('index', {
            title: `Rizqim.uz | O'zbekistondagi frilans platformasi`,
            path: '/',
            freelancers,
            employers,
            announcements,
            end_boards,
            sponsors,
            top_boards,
            user: req.user ? req.user : null,
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
};