const FoundersModel = require("../../models/FoundersModel");
const path = require("path");
const { v4 } = require("uuid");
const cloudinary = require("../../modules/cloudinary");

module.exports = async (req, res) => {
    try {
        let { image } = req.files;
        let { name } = req.body;

        if(!name || !image) {
            throw new Error("Asoschi nomi yoki rasm kiritilishi majburiy");
        }

        let mimeType = image.mimetype.split("/")[1];
        let imgPath = path.join(__dirname, "..", "..", "public", "img", "avatars", `${image.md5}.${mimeType}`);
        image.mv(imgPath, async (err) => {
            if(!err) {
                let uploaded_image = await cloudinary(imgPath);
                
                let founder = await FoundersModel.create({
                    id: v4(),
                    name,
                    image: uploaded_image.secure_url
                });

                res.status(200).json({
                    ok: true,
                    founder,
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