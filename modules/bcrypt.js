const bcrypt = require("bcrypt");

module.exports = {
    async genenerateHash(pass) {
        let salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(pass, salt);
    },
    async compareHash(pass, hash) {
        return bcrypt.compare(pass, hash);
    }
}