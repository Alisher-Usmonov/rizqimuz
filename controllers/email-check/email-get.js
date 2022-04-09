module.exports = async (req, res) => {
    try {
        res.render("email-verify");
    } catch (err) {
        res.status(400).send(err.message);
    }
}