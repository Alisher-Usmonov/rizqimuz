const router = require('express').Router()

router.get('/', require('../controllers/auth/signup-get'))
router.post("/", require("../controllers/auth/signup-post"))

module.exports = {
    route: '/signup',
    router
}