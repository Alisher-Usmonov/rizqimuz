const FreelancerModel = require("../../models/FreelancerModel");

module.exports = async (req, res) => {
    let { c_page, p_page } = req.query;
    let skip = (c_page - 1) * p_page;
    let freelancers = await FreelancerModel.find().sort({ is_top: 1 }).limit(16).skip(skip);
    res.render('freelancers', {
        title: `Frilanserlar | Rizqim`,
        path: '/freelancers',
        freelancers,
        user: req.user ? req.user : null
    })
}