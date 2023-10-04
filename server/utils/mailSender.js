const nodemailer = require('nodemailer');
require('dotenv').config();

const mailSender = async (receiverEMail, subject, body) => {
    try {
        const transporter = nodemailer.createTransport(
            {
                host: process.env.MAIL_HOST,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            }
        )

        const info = await transporter.sendMail(
            {
                from: `Shlok Prajapati ${process.env.MAIL_USER}`,
                to: `${receiverEMail}`,
                subject: `${subject}`,
                html: `${body}`
            }
        )

        console.log('Message is: ', info);
        return info;
    }
    catch(err) {
        console.log('Error in sending mail: ', err);
        console.log('Error in sending mail: ', err);
    }
}

module.exports = mailSender;