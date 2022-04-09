const nodemailer = require("nodemailer");

module.exports = async (verify_url, text, subject, to) => {
    try {
        let transport = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: "engineeraudev@gmail.com",
                pass: "vwsbkpsitcmftlkz"
            }
        })
        let mail = await transport.sendMail({
            to,
            from: '"Rizqim.uz - Frilans platforma" <rizqim@gmail.com>',
            subject,
            text,
            html: `<a href=${verify_url}>Hisobingizni tasdiqlang</a>`
        })
        console.log(mail)
    } catch (err) {
        console.log(err);
    }
}