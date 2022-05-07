const jwt = require("../modules/jwt");

module.exports = async (req, res, next) => {
    let { token } = req?.cookies;
    if(!token) {
        next();
        return;
    }
    let data = jwt.verifyToken(token);
    req.user = data;
    next()
}