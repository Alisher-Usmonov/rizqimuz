const router = require("express").Router();
const FileUpload = require("express-fileupload");

router.post("/", FileUpload(), require("../controllers/sponsors/sponsor-post"));

module.exports = {
    route: "/sponsor",
    router
}