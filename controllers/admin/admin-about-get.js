const AboutModel = require("../../models/AboutModel");

module.exports = async (req, res) => {
    try {
        let abouts = await AboutModel.find();
        let [ about ] = abouts;
        
        res.render("admin-about", {
            about
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}