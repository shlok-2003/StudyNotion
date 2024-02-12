import mongoose from 'mongoose';
import chalk from 'chalk';
import mailSender from '../utils/mailSender.js';

import emailTemplate from '../templates/mails/emailVerificationTemplate.js';

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
            expires: 60 * 5, // expires in 5 minutes
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

OTPSchema.pre('save', async function (next) {
    const { email, otp } = this;

    try {
        const mailResponse = await mailSender(
            email,
            'Verification code for the StudyNotion App',
            emailTemplate(otp),
        );

        console.log(
            chalk.green(
                `Email sent successfully\n mailResponse is: ${mailResponse}`,
            ),
        );
    } catch (err) {
        //! return
        console.log(chalk.red(`Error in sending verification email: ${err}`));
        throw err;
    }

    next();
});

const OTP = mongoose.model('Otp', OTPSchema);
export default OTP;
