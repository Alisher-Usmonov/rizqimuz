const router = require('express').Router()

router.get('/', require('../controllers/auth/signin-get'))
router.post('/', require('../controllers/auth/signin-post'))

module.exports = {
    route: '/signin',
    router
}