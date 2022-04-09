const AboutsModel = require("../../models/AboutModel");

module.exports = async (req, res) => {
    try {
        let { text  } = req.body;
        if (!text) {
            throw new Error("matn kiritilmadi <\_[*-*]_/>");
        }
 
        let about = await AboutsModel.findOneAndUpdate({
        }, {
            text
        })

        res.status(200).json({
            ok: true,
            about
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}