const router = require('express').Router()

router.get('/', require('../controllers/boards/boards-get'));
router.post("/", require("../controllers/boards/boards-post"));
router.get('/:slug', require('../controllers/boards/project-info-get'));
router.post("/:slug", require("../controllers/boards/board-submit-post"));
router.delete("/:slug", require("../controllers/boards/boards-delete"));
router.patch("/public/:slug", require("../controllers/boards/boards-public-patch"));
router.patch("/is_completed/:id", require("../controllers/boards/board-end"));

module.exports = {
    route: '/boards',
    router
}