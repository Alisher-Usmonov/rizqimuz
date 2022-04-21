const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        let { slug } = req.params;
        let project = await AnnouncementModel.findOne({
            slug
        });

        let updatedProject = await AnnouncementModel.findOneAndUpdate({
            slug
        }, {
            views: project._doc.views+1,
        });

        res.render('project-info', {
            title: project._doc.title,
            path: '/boards',
            project,
            user: req.user ? req.user : null
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: `${err}`
        })
    }
}