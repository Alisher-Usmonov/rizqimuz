const router = require('express').Router()

router.get('/', require('../controllers/admin/admin-get'));

module.exports = {
    route: '/admin',
    router
}