const router = require("express").Router();
const FileUpload = require("express-fileupload");

router.post("/", FileUpload(), require("../controllers/sponsors/sponsor-post"));
router.delete("/:id", FileUpload(), require("../controllers/sponsors/sponsor-delete"));

module.exports = {
    route: "/sponsor",
    router
}