const AboutsModel = require("../../models/AboutModel");
const FoundersModel = require("../../models/FoundersModel");

module.exports = async (req, res) => {
    try {

        let abouts = await AboutsModel.find();
        let { text } = abouts[0];
        let founders = await FoundersModel.find();
        console.log(founders);
        res.render('about', {
            title: 'Biz haqimizda | Rizqim',
            path: '/about',
            text,
            founders,
            user: req.user ? req.user : null
        })

    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}