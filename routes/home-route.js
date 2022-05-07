const router = require('express').Router()
const homeMiddleware = require('../middlewares/home-middleware');

router.use(homeMiddleware);
router.get('/', require('../controllers/home/home-get'))

module.exports = {
    route: '/',
    router
}