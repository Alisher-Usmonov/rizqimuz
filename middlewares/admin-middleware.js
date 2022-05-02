const JWT = require("../modules/jwt");

module.exports = (req, res, next) => {
    let adminToken = req?.cookies?.admin;

    if(!adminToken) {
        res.redirect("/admin/login");
        return;
    }

    let admin = JWT.verifyToken(adminToken);

    req.admin = admin;
    
    next();
}