const router = require('express').Router()
const authMiddleware = require("../middlewares/auth-middleware");

router.use(authMiddleware);
router.get('/', require('../controllers/contact/contact-get'))
router.post('/', require('../controllers/contact/contact-post'))

module.exports = {
    route: '/contact',
    router
}