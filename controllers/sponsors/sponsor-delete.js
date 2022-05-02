module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}