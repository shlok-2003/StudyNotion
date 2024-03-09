import chalk from 'chalk';
import User from '../../models/User.js';
import Profile from '../../models/Profile.js';
import OTP from '../../models/OTP.js';
import { AppError, AppSuccess } from '../../utils/appHandler.js';

const signUp = async (req, res, next) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp,
        } = req.body;

        let image = req.body.image;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !accountType ||
            // !contactNumber ||
            !otp
        ) {
            return next(
                new AppError(false, 400, 'Please enter all the fields'),
            );
        }

        if (password !== confirmPassword) {
            return next(new AppError(false, 403, 'Passwords do not match'));
        }

        //! Check if user is approved

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return next(new AppError(false, 401, 'User already exists'));
        }

        const recentOTP = await OTP.findOne({ email: email })
            .sort({ createdAt: -1 })
            .limit(1);

        if (!recentOTP || recentOTP.length == 0) {
            return next(new AppError(false, 401, 'OTP not found'));
        }

        console.log(chalk.yellow(`recentOTP is: ${recentOTP}`));

        if (recentOTP.otp !== otp) {
            return next(new AppError(false, 401, 'Incorrect OTP'));
        }

        const profile = await Profile.create({
            gender: 'Prefer not to say',
            dob: null,
            about: null,
            contactNumber: contactNumber,
        });

        if (!image) {
            image =
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}_${lastName}` ||
                `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}_${lastName}`;
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            accountType,
            image,
            additionalDetails: profile._id,
        });

        return res.status(200).json(
            AppSuccess(true, 'User created successfully', {
                user,
                profile,
            }),
        );
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in signing up', err.message),
        );
    }
};

export default signUp;
