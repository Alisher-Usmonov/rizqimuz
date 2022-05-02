const JWT = require("../modules/jwt");

module.exports = (req, res, next) => {
    let { token } = req.cookies;
    let data = JWT.verifyToken(token);
    if (!data) {
        req.user = null;
        next();
        return;
    }
    req.user = data;
    next()
}