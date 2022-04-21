const ProposalValidation = require("../../modules/validations/ProposalValidation");
const Proposals = require("../../models/ProposalModel");
const AnnouncementModel = require("../../models/AnnouncementModel");

module.exports = async (req, res) => {
    try {
        let { slug } = req.params;
        console.log(req.body)
        let { github_link, name, phone_number, portfolio_link, cover_letter } = await ProposalValidation(req.body);

        let board = await AnnouncementModel.findOne({
            slug
        });

        let updatedProject = await AnnouncementModel.findOneAndUpdate({
            slug
        }, {
            proposals: board._doc.proposals+1
        });

        console.log(updatedProject);

        let proposal = await Proposals.create({
            anno_id: board.anno_id,
            name,
            github_link,
            phone_number,
            portfolio_link,
            cover_letter
        })

        res.render("project-info", {
            title: board.title,
            path: "/boards",
            project: board,
            proposal,
            ok: true,
            message: "Forma to'ldirildi",
            user: req.user ? req.user : null
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}