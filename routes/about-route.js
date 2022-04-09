const router = require('express').Router()

router.get('/', require('../controllers/about/about-get'))
router.post('/', require('../controllers/about/about-post'))

module.exports = {
    route: '/about',
    router
}