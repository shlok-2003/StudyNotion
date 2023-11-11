import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const mailSender = async (email, subject, text) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: `Shlok Prajapati ${process.env.MAIL_USER}`,
        to: `${email}`,
        subject: `${subject}`,
        html: `${text}`,
    });

    console.log(chalk.blue('Mail sent: '), info);
};

export default mailSender;
