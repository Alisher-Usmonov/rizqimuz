const router = require('express').Router()

router.get('/', require('../controllers/boards/boards-get'));
router.post("/", require("../controllers/boards/boards-post"));
router.get('/:slug', require('../controllers/boards/project-info-get'));
router.post("/:slug", require("../controllers/boards/board-submit-post"));

module.exports = {
    route: '/boards',
    router
}