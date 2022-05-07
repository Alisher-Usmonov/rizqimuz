const Employers = require("../../models/EmployerModel");
const Freelancers = require("../../models/FreelancerModel");
const cloudinary = require("../../modules/cloudinary");
const { generateToken } = require("../../modules/jwt");
const modelId = require("../../modules/model-id");
const ProjectValidation = require("../../modules/validations/ProjectValidation");
const path = require("path");
const WorkValidation = require("../../modules/validations/WorkValidation");
const EducationValidation = require("../../modules/validations/EducationValidation");
const LangValidation = require("../../modules/validations/LangValidation");

module.exports = {
    async portfolioPost(req, res) {
        try {
            let { image } = req.files;
            const { id } = req.params;
            let { project_name, project_url } = await ProjectValidation(req.body);
            const mimeType = image.mimetype.split("/")[1];
            let imagePath = path.join(__dirname, "..", "..", "public", "img", "avatars", `${image.md5}.${mimeType}`);

            image.mv(imagePath, async (err) => {
                if(!err) {
                    const uploaded_image = await cloudinary(imagePath);
                    const model = await modelId(Freelancers, Employers, id);

                    let updateUser = await model.findOneAndUpdate({
                        id
                    }, {
                        $push: {
                            "portfolio": {
                                image: uploaded_image.secure_url,
                                title: project_name,
                                project_url
                            }
                        }
                    });
                    
                    let token = generateToken({
                        ...updateUser._doc,
                        portfolio: [
                            ...updateUser._doc.portfolio,
                            {
                                image: uploaded_image.secure_url,
                                title: project_name,
                                project_url
                            }
                        ]
                    });
                    
                    res.cookie("token", token).status(200).json({
                        ok: true,
                        message: "User portfolio updated"
                    })

                }
            })
            
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            });
        }
    },
    async experiencePost(req, res) {
        try {
            const { id } = req.params;
            const { name, position, start_year, start_month, end_year, end_month, about } = await WorkValidation(req.body);
            const model = await modelId(Freelancers, Employers, id);

            let updateUser = await model.findOneAndUpdate({
                id
            }, {
                $push: {
                    "experience": {
                        company_name: name,
                        desc: about,
                        from_year: start_year,
                        to_year: end_year,
                        start_month,
                        end_month,
                        position
                    }
                }
            });

            let token = generateToken({
                ...updateUser._doc,
                experience: [
                    ...updateUser._doc.experience,
                    {
                        company_name: name,
                        desc: about,
                        from_year: start_year,
                        to_year: end_year,
                        start_month,
                        end_month
                    }
                ]
            })
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User experience updated"    
            })
        } catch(err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async educationPost(req, res) {
        try {
            const { id } = req.params;
            const { name, direction, start_year, start_month, end_year, end_month, about } = await EducationValidation(req.body);
            const model = await modelId(Freelancers, Employers, id);

            let updateUser = await model.findOneAndUpdate({
                id
            }, {
                $push: {
                    "education": {
                        name,
                        about,
                        start_year,
                        end_year,
                        start_month,
                        end_month,
                        direction
                    }
                }
            });

            let token = generateToken({
                ...updateUser._doc,
                education: [
                    ...updateUser._doc.education,
                    {
                        name,
                        about,
                        start_year,
                        end_year,
                        start_month,
                        end_month,
                        direction
                    }
                ]
            })
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User education updated"    
            })
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async languagePost(req, res) {
        try {
            const { id } = req.params;
            const { name, level } = await LangValidation(req.body);
            const model = await modelId(Freelancers, Employers, id);

            let updateUser = await model.findOneAndUpdate({
                id
            }, {
                $push: {
                    "languages": {
                        name,
                        level
                    }
                }
            });

            let token = generateToken({
                ...updateUser._doc,
                languages: [
                    ...updateUser._doc.languages,
                    {
                        name,
                        level
                    }
                ]
            })
            
            res.cookie("token", token).status(200).json({
                ok: true,
                message: "User language updated"    
            })
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
}