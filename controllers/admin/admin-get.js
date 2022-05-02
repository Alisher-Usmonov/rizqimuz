const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        let { admin } = req;
        if(!admin) {
            res.redirect("/admin/login");
        }
        let boards = await AnnouncementModel.find();
        res.render("admin", {
            boards
        });
    } catch (err) { 
        res.render("404");
    }
}