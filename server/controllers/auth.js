import otpGenerator from 'otp-generator';
import chalk from 'chalk';
import User from '../models/User.js';
import OTP from '../models/OTP.js';
import { createToken } from '../services/auth.js';

export const sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(401).json({
                success: false,
                error: 'User already exists',
            });
        }

        let otp;
        let resultInDatabase;
        do {
            otp = otpGenerator.generate(6, {
                digits: true,
                lowerCaseAlphabets: false,
                upperCaseAlphabets: false,
                specialChars: false,
            });

            resultInDatabase = await OTP.findOne({ otp });
        } while (resultInDatabase);

        console.log(chalk.pink(`OTP is: ${otp}`));

        const otpBody = await OTP.create({ email: email, otp: otp });
        console.log(chalk.blue(`otpBody is: ${otpBody}`));

        return res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Error in sending OTP',
            message: err.message,
        });
    }
};

export const signUp = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            image,
            otp,
        } = req.body;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword ||
            !accountType ||
            !contactNumber ||
            !otp
        ) {
            return res.status(400).json({
                success: false,
                error: 'Please enter all the fields',
            });
        }

        if (password !== confirmPassword) {
            return res.status(403).json({
                success: false,
                error: 'Passwords do not match',
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                success: false,
                error: 'User already exists',
            });
        }

        const recentOTP = await OTP.findOne({ email })
            .sort({ createdAt: -1 })
            .limit(1);

        if (!recentOTP || recentOTP.length == 0) {
            return res.status(401).json({
                success: false,
                error: 'OTP not found',
            });
        }

        console.log(chalk.pink(`recentOTP is: ${recentOTP}`));

        if (recentOTP.otp !== otp) {
            return res.status(401).json({
                success: false,
                error: 'Incorrect OTP',
            });
        }

        const Profile = {
            gender: null,
            dob: null,
            about: null,
            contactNumber: contactNumber || null,
        };

        if (!image) {
            image =
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName} ${lastName}` ||
                `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;
        }

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            accountType,
            image,
            accountType,
            additionalDetails: Profile._id,
        });

        return res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: user,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Error in signing up',
            message: err.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Please enter all the fields',
            });
        }

        const payload = await User.matchPassword(email, password);

        if (!payload) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
        }

        const token = createToken(payload);

        const options = {
            expires: new Date(Date.now() * 2 * 24 * 60 * 60 * 1000), // 2 days
            httpOnly: true,
        };

        return res.cookie('token', token, options).status(200).json({
            success: true,
            token: token,
            message: 'User logged in successfully',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Error in logging in',
            message: err.message,
        });
    }
};

export const changePassword = async (req, res) => {
    try {
        const { 
            email,
            oldPassword, 
            newPassword, 
            confirmNewPassword 
        } = req.body;

        if (!email || !oldPassword || !newPassword || !confirmNewPassword) {
            return res.status(400).json({
                success: false,
                error: 'Please enter all the fields',
            });
        }

        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({
                success: false,
                error: 'User does not exists',
            });
        }

        if(newPassword !== confirmNewPassword) {
            return res.status(403).json({
                success: false,
                error: 'new Passwords do not match',
            });
        }

        const payload = await User.matchPassword(email, oldPassword);

        if (!payload) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials: oldPassword is incorrect',
            });
        }

        const userWithPasswordUpdated = await User.findOneAndUpdate({ email }, { password: newPassword }, { new: true });

        return res.status(200).json({
            success: true,
            message: 'Password changed successfully',
            data: userWithPasswordUpdated,
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Error in chaining password',
            message: err.message,
        });
    }
};
