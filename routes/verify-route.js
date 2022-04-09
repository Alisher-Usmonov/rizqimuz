const router = require("express").Router();

router.get("/", require("../controllers/verify/verify-get"));

module.exports = {
    route: "/verify",
    router
}