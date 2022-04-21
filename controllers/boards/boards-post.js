const AnnouncementModel = require("../../models/AnnouncementModel");
const BoardValidation = require("../../modules/validations/BoardValidation");
const slugify = require("slugify").default;

module.exports = async (req, res) => {
    try {
        let { title, description, budget, phone_number } = await BoardValidation(req.body);

        let slug = slugify(title, {
            remove: /[*+~.()'"!:@]/g,
            lower: true
        });

        let isAlreadyExist = await AnnouncementModel.findOne({
            slug
        });

        if(isAlreadyExist) {
            slug = `${slug}-${Math.floor(Math.random() * 50)}`
        }

        let board = await AnnouncementModel.create({
            title,
            description,
            phone_number,
            budget,
            slug
        });

        res.redirect("/admin");
    } catch(err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}