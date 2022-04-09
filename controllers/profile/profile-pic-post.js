const path = require("path");
const cloudinary = require("../../modules/cloudinary");
const Freelancers = require("../../models/FreelancerModel");
const Employers = require("../../models/EmployerModel");
const JWT = require("../../modules/jwt");

module.exports = async (req, res) => {
    try {
        let { image } = req.files;
        let mimeType = image.mimetype.split("/")[1];
        let avaURL = path.join(__dirname, "..", "..", "public", "img", "avatars", `${image.md5}.${mimeType}`);
        image.mv(avaURL, async (err) => {
            if (!err) {
                let uploaded_image = await cloudinary(avaURL);
                console.log(uploaded_image);
                let user = await Freelancers.findOneAndUpdate({
                    user_id: req.user.id
                }, {
                    picture: uploaded_image.secure_url
                });
                
                if (!user) {
                    user = await Employers.findOneAndUpdate({
                        user_id: req.user.id
                    }, {
                        picture: uploaded_image.secure_url
                    });
                }

                let token = JWT.generateToken({
                    ...user._doc,
                    picture: uploaded_image.secure_url,
                    password: false
                })
                res.cookie("token", token).json({
                    ok: true,
                    message: "Image Succesfully edited"
                });
            }
        });

    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}