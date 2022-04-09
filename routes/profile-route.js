const router = require('express').Router()
const FileUpload = require("express-fileupload");

router.get("/", require("../controllers/profile/profile-get"));
router.post("/edit-image", FileUpload(), require("../controllers/profile/profile-pic-post"));

module.exports = {
    route: '/profile',
    router
}