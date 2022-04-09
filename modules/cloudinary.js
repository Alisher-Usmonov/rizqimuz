const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "vr25",
    api_key: "449883296511217",
    api_secret: "JDk3vGkVPS0oWb_40xjHa23Wcc0",
    secure: true
})
module.exports = async (path) => {
    try {
        let photo = await cloudinary.uploader.upload(path);
        await fs.unlink(path);
        return photo;
    } catch (err) {
    }
}