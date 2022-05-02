const AdminModel = require("../../models/AdminModel");
const jwt = require("../../modules/jwt");
const AdminValidation = require("../../modules/validations/AdminValidation");
const { compareHash } = require("../../modules/bcrypt");

module.exports = async (req, res) => {
    try {
        const { username, password } = await AdminValidation(req.body);
        console.log(username, password);
        let admin = await AdminModel.findOne({
            username
        });

        if(!admin) {
            throw new Error("Admin topilmadi");
        }
        let pass = compareHash(password, admin._doc.password);

        if(!pass) {
            throw new Error("parol xato kiritildi");
        }

        console.log(admin);
        
        let adminToken = jwt.generateToken(admin._doc);
        res.cookie("admin", adminToken).redirect("/admin");
    } catch (err) {
        console.log(err);
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}