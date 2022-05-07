const router = require('express').Router()
const authMiddleware = require("../middlewares/auth-middleware");

router.use(authMiddleware);
router.get('/', require('../controllers/completed/completed-get'));

module.exports = {
    route: '/completed',
    router
}