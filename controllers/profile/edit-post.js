module.exports = {
    async EditFullName(req, res) {
        try {
            let { first_name, last_name } = req.body;
            let { id:user_id } = req.user;
    } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    }
}