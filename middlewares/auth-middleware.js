const JWT = require("../modules/jwt");

module.exports = (req, res, next) => {
    let { token } = req?.cookies;
    if(!token) {
        res.redirect("/signin");
        return;
    }
    let data = JWT.verifyToken(token);
    req.user = data;
    next()
}