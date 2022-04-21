const JWT = require("../modules/jwt");
const Admins = require("../models/AdminModel");

module.exports = async (req, res, next) => {
    let token = req?.cookies?.token;
    if(!token) {
        res.redirect("/signin");
    }
    let user = await JWT.verifyToken(token);
    let admin = await Admins.findOne({
        user_id: user.id
    });
    if(!admin) {
        res.redirect("/");
    }
    next();
}