const { default: slugify } = require("slugify");
const Employers = require("../../models/EmployerModel");
const Freelancers = require("../../models/FreelancerModel");
const { generateToken } = require("../../modules/jwt");
const modelId = require("../../modules/model-id");
const ProfileNameValidation = require("../../modules/validations/ProfileNameValidation");
const SocialValidation = require("../../modules/validations/SocialValidation");
const path = require("path");
const ProjectValidation = require("../../modules/validations/ProjectValidation");
const cloudinary = require("../../modules/cloudinary");

module.exports = {
    async namePatch(req, res) {
        try {
            const { id } = req.params;
            const { first_name, last_name } = await ProfileNameValidation(req.body);
            
            const slug = slugify(`${first_name} ${last_name}`, {
                lower: true
            });
    
            const UserModel = await modelId(Freelancers, Employers, id);
    
            let updateUser = await UserModel.findOneAndUpdate({
                id
            }, {
                first_name,
                last_name,
                slug
            });
    
            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                first_name,
                last_name,
                slug
            });

            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User First and last name was succesfully updated.",
                updateUser
            });
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async phonePatch(req, res) {
        try {
            const { id } = req.params;
            let { newValue } = req.body;

            const UserModel = await modelId(Freelancers, Employers, id);

            if(!newValue) {
                throw new Error("newValue is required");
            }

            let updateUser = await UserModel.findOneAndUpdate({
                id
            }, {
                phone_number: newValue
            })
            
            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                phone_number: newValue
            });
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User phone number updated"
            })
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })            
        }
    },
    async emailPatch(req, res) {
        try {
            const { id } = req.params;
            let { newValue } = req.body;

            const UserModel = await modelId(Freelancers, Employers, id);

            if(!newValue) {
                throw new Error("newValue is required");
            }

            let updateUser = await UserModel.findOneAndUpdate({
                id
            }, {
                email: newValue
            })

            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                email: newValue
            });
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User email updated"
            })
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })            
        }
    },
    async telegramPatch(req, res) {
        try {
            const { id } = req.params;
            let { newValue } = req.body;

            const UserModel = await modelId(Freelancers, Employers, id);

            if(!newValue) {
                throw new Error("newValue is required");
            }

            let updateUser = await UserModel.findOneAndUpdate({
                id
            }, {
                tg_username: newValue
            })
            
            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                tg_username: newValue
            });
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User telegram username updated"
            })
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })            
        }
    },
    async aboutPatch(req, res) {
        try {
            let { text } = req.body;
            const { id } = req.params;

            let model = await modelId(Freelancers, Employers, id);

            let updateUser = await model.findOneAndUpdate({
                id
            }, {
                about: text
            });

            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                about: text
            });
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User about updated"
            })
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async socialsPatch(req, res) {
        try {
            let { github, youtube, website } = await SocialValidation(req.body);
            const { id } = req.params;
            const model = await modelId(Freelancers, Employers, id);

            const updateUser = await model.findOneAndUpdate({
                id
            }, {
                youtube,
                github,
                website
            });

            let token = generateToken({
                ...updateUser._doc,
                youtube,
                github,
                website
            });
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User socials updated"
            })
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async skillsPatch(req, res) {
        try {
            let { skills } = req.body;
            const { id } = req.params;
            let model = await modelId(Freelancers, Employers, id);

            if(skills.length == 0) {
                throw new Error("Skill not added.");
            }
            
            let updateUser = await model.findOneAndUpdate({
                id
            }, {
                skills
            });

            let token = generateToken({
                ...updateUser._doc,
                password: undefined,
                skills
            });
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User skills updated"
            })
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
}