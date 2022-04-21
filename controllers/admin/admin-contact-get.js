const Contacts = require("../../models/ContactModel")

module.exports = async (req, res) => {
    try {
        let contacts = await Contacts.find();
        console.log(contacts);
        res.render("admin-contact", {
            contacts
        })
    } catch(err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}