module.exports = async (req, res) => {
    res.render('profile', {
        title: `${req.user ? req.user.first_name + " " + req.user.last_name : null} | Rizqim`,
        path: '/profile',
        user: req.user ? req.user : null
    })
}