const router = require('express').Router()
const authMiddleware = require("../middlewares/auth-middleware");

router.use(authMiddleware);
router.get('/', require('../controllers/freelancers/freelancers-get'))
router.patch("/", require("../controllers/freelancers/freelancer-top-patch"));

module.exports = {
    route: '/freelancers',
    router
}