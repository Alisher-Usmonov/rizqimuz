const router = require("express").Router();

router.get("/", require("../controllers/email-check/email-get"));

module.exports = {
    route: "/email-check",
    router
}