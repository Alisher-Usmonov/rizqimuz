const router = require("express").Router();
const FileUpload = require("express-fileupload");

router.post("/", FileUpload(), require("../controllers/founders/founder-post"));

module.exports = {
    route: "/founder",
    router
}