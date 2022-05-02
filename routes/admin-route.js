const adminMiddleware = require('../middlewares/admin-middleware');

const router = require('express').Router()

// home
router.get('/', adminMiddleware, require('../controllers/admin/admin-get'));

// auth
router.get("/login", require("../controllers/admin/admin-login-get"))
router.post("/login", require("../controllers/admin/admin-login-post"));

// contacts
router.get("/contacts", adminMiddleware, require("../controllers/admin/admin-contact-get"))

// freelancers
router.get("/freelancers", adminMiddleware, require("../controllers/admin/admin-freelancer-get"))

// about
router.get("/about", adminMiddleware, require("../controllers/admin/admin-about-get"));

// founders
router.get("/founders", adminMiddleware, require("../controllers/admin/admin-founder-get"));

// admins
router.get("/admins", adminMiddleware, require("../controllers/admin/admins-get"));
router.post("/admins", adminMiddleware, require("../controllers/admin/admin-post"));
router.delete("/admins/:id", adminMiddleware, require("../controllers/admin/admin-delete"));

// sponsors
router.get("/sponsors", adminMiddleware, require("../controllers/admin/admin-sponsors-get"));

module.exports = {
    route: '/admin',
    router
}