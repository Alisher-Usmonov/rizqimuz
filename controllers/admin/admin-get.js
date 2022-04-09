module.exports = async (req, res) => {
    try {
        res.render("admin")
    } catch (err) { 
        res.render("404");
    }
}