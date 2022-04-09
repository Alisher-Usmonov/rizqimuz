const ContactValidation = require("../../modules/validations/ContactValidation")
const Contacts = require("../../models/ContactModel");

module.exports = async (req, res) => {
    try {
        let { name, comment, phone } = await ContactValidation(req.body);

        let contact = await Contacts.create({
            name,
            phone,
            comment
        });

        res.render("contact", {
            ok: true,
            message: "So'rovingiz qoldirildi",
            title: `Aloqa | Rizqim`,
            path: '/contact',
            user: req.user ? req.user : null
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}