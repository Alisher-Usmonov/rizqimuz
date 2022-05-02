const router = require("express").Router();
const FileUpload = require("express-fileupload");

router.post("/", FileUpload(), require("../controllers/founders/founder-post"));
router.delete("/:id", require("../controllers/founders/founder-delete"));

module.exports = {
    route: "/founder",
    router
}