
var nodemailer = require('nodemailer');

exports.sendMail = async (email, subject, message) => {
    let account = {
        user: 'testdelarea@gmail.com',
        pass: 'POTATOES'
    }
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });
  transporter.sendMail({
    from: '"AREA 👻" <area@notenousbienstp.com>', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: message // plain text body
  });
}