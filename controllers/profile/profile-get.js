module.exports = async (req, res) => {
    res.render('profile', {
        title: `Profil | Rizqim`,
        path: '/profile',
        user: req.user ? req.user : null
    })
}