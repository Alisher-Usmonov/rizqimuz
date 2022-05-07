const router = require('express').Router()
const authMiddleware = require("../middlewares/auth-middleware");

router.use(authMiddleware);
router.get('/', require('../controllers/about/about-get'))
router.post('/', require('../controllers/about/about-post'))

module.exports = {
    route: '/about',
    router
}