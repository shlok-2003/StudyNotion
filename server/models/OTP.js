import mongoose from 'mongoose';
import chalk from 'chalk';
import mailSender from '../utils/mailSender.js';

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

OTPSchema.pre('save', async function (next) {
    const doc = this;

    try {
        const mailResponse = await mailSender(
            doc.email,
            'Verification code for the StudyNotion App',
            doc.otp,
        );

        console.log(chalk.green(`mailResponse is: ${mailResponse}`));
    } catch (err) {
        //! return
        console.log(chalk.red(`Error in sending verification email: ${err}`));
    }

    next();
});

const OTP = mongoose.model('Tag', OTPSchema);
export default OTP;
