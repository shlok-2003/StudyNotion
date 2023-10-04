const mongoose = require('mongoose');
const chalk = require('chalk');
const mailSender = require('../utils/mailSender');

const OTPSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },
        otp: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            expires: 60 * 5, // expires in 5 minutes
        },
    },
    {
        timestamps: true,
    },
);

async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(
            email,
            'Verification code for the StudyNotion App',
        );
        console.log('mailResponse is: ', mailResponse);
    } catch (err) {
        console.log(chalk.blue('Error in sending verification email: '), err);
    }
}

OTPSchema.pre('save', async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
});

const OTP = mongoose.model('Tag', OTPSchema);
module.exports = OTP;
