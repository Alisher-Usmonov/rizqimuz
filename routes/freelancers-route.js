const router = require('express').Router()

router.get('/', require('../controllers/freelancers/freelancers-get'))
router.patch("/", require("../controllers/freelancers/freelancer-top-patch"));

module.exports = {
    route: '/freelancers',
    router
}