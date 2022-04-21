const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        let boards = await AnnouncementModel.find();
        res.render("admin", {
            boards
        });
    } catch (err) { 
        res.render("404");
    }
}