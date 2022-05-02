const AdminValidation = require("../../modules/validations/AdminValidation")
const AdminModel = require("../../models/AdminModel")
const { genenerateHash } = require("../../modules/bcrypt");
const { v4 } = require("uuid");

module.exports = async (req, res) => {
    try {
       let { username, password } = await AdminValidation(req.body);

       let pass = await genenerateHash(password);
       let admin = await AdminModel.create({
           id: v4(),
           username,
           password: pass
       });

       res.redirect("/admin/admins");

    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
        console.log(err);
    }
}