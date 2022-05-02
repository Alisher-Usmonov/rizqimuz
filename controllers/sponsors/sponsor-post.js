const SponsorValidation = require("../../modules/validations/SponsorValidation");
const cloudinary = require("../../modules/cloudinary");
const SponsorModel = require("../../models/SponsorModel");
const path = require("path");

module.exports = async (req, res) => {
    try {
        console.log(req.body);
        let { image } = req.files;
        let { website_url } = await SponsorValidation(req.body);
        if(!image) {
            throw new Error("Homiy rasmi kiritilishi majburiy");
        }
        let mimeType = image.mimetype.split("/")[1];
        let imgPath = path.join(__dirname, "..", "..", "public", "img", "avatars", `${image.md5}.${mimeType}`);
        image.mv(imgPath, async (err) => {
            if(!err) {
                let uploaded_image = await cloudinary(imgPath);             
                let sponsor = await SponsorModel.create({
                    website_url,
                    image: uploaded_image.secure_url
                });

                res.status(200).json({
                    ok: true,
                    sponsor,
                })
            }
        })

    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}