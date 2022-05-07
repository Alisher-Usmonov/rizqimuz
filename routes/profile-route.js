const router = require('express').Router()
const FileUpload = require("express-fileupload");
const authMiddleware = require('../middlewares/auth-middleware')
const { namePatch, phonePatch, emailPatch, telegramPatch, aboutPatch, socialsPatch, skillsPatch } = require("../controllers/profile/profile-patch");
const { portfolioPost, experiencePost, educationPost, languagePost } = require('../controllers/profile/profile-post');
const { skillDelete } = require('../controllers/profile/profile-delete');

router.use(authMiddleware);

router.get("/", require("../controllers/profile/profile-get"));
router.post("/edit-image", FileUpload(), require("../controllers/profile/profile-pic-post"));
router.patch("/name/:id", namePatch);
router.patch("/phone/:id", phonePatch);
router.patch("/email/:id", emailPatch);
router.patch("/telegram/:id", telegramPatch);
router.patch("/about/:id", aboutPatch);
router.post("/portfolio/:id", FileUpload(), portfolioPost);
router.post("/experience/:id", experiencePost);
router.post("/education/:id", educationPost);
router.post("/language/:id", languagePost);
router.patch("/socials/:id", socialsPatch);
router.patch("/skills/:id", skillsPatch);
router.delete("/skills/:id", skillDelete);
module.exports = {
    route: '/profile',
    router
}