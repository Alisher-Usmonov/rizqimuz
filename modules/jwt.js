const JWT = require("jsonwebtoken");
const { SECRET_WORD } = require("../config");

module.exports = {
    generateToken(payload) {
        return JWT.sign(payload, SECRET_WORD);
    },
    verifyToken(token) {
        try {
            return JWT.verify(token, SECRET_WORD);
        } catch(err) {
            return false;
        }
    }
}