import dotenv from 'dotenv';
import crypto from 'crypto';
import User from '../models/User.js';
import mailSender from '../utils/mailSender.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

dotenv.config();

export const resetPasswordToken = async (req, res, next) => {
    try {
        const { email } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return next(new AppError(false, 401, 'User does not exist'));
        }

        //! Generate token
        const token = crypto.randomBytes(20).toString('hex');

        await User.findOneAndUpdate(
            { email },
            { token: token, resetPasswordExpires: Date.now() + 5 * 60 * 1000 },
            { new: true }
        );

        //Generate Link for the frontend
        const link = `${process.env.FRONTEND_URL}/update-password/${token}`;

        await mailSender(email, 'Password Reset', `Password reset link: ${link}`);

        return res.status(200).json(
            AppSuccess(true, 'Password reset link sent successfully', {
                resetToken: token,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in sending reset password token', err.message));
    }
};

export const resetPassword = async (req, res, next) => {
    try {
        const { token, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return next(new AppError(false, 400, 'Password and Confirm Password Does not Match'));
        }

        const userDetail = await User.findOne({ token: token });
        if (!userDetail) {
            return next(new AppError(false, 401, 'Invalid token'));
        }

        if (userDetail.resetPasswordExpires < Date.now()) {
            return next(new AppError(false, 401, 'Token expired'));
        }

        const updatedUser = await User.findOneAndUpdate(
            { token: token },
            { password: password, token: null },
            { new: true }
        );

        return res.status(200).json(
            AppSuccess(true, 'Password reset successfully', {
                updatedUser,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in resetting password', err.message));
    }
};
