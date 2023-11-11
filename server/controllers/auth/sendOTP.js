import otpGenerator from 'otp-generator';
import chalk from 'chalk';
import User from '../../models/User.js';
import OTP from '../../models/OTP.js';
import { AppError, AppSuccess } from '../../utils/appHandler.js';

const sendOTP = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            return next(new AppError(false, 401, 'User already exists'));
        }

        const otp = otpGenerator.generate(6, {
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false,
        });

        console.log(chalk.yellow(`OTP is: ${otp}`));

        const otpBody = await OTP.create({ email: email, otp: otp });

        console.log(chalk.blue(`otpBody is: ${otpBody}`));

        return res.status(200).json(AppSuccess(true, 'OTP sent successfully', { otpBody }));
    } catch (err) {
        return next(new AppError(false, 500, 'Error in sending OTP', err.message));
    }
};

export default sendOTP;
