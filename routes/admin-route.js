const adminMiddleware = require('../middlewares/admin-middleware');

const router = require('express').Router()

router.use(adminMiddleware);
router.get('/', require('../controllers/admin/admin-get'));
router.get("/contacts", require("../controllers/admin/admin-contact-get"))
router.get("/freelancers", require("../controllers/admin/admin-freelancer-get"))

module.exports = {
    route: '/admin',
    router
}