import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import chalk from 'chalk';
import User from '../models/User.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

dotenv.config();

export const createToken = (payload) => {
    const secret = process.env.JWT_SECRET;

    try {
        const token = jwt.sign(payload, secret, {
            expiresIn: '8h',
        });

        return token;
    } catch (err) {
        console.log(chalk.red('Error in creating jwt token'));
        throw new Error('Error in creating jwt token');
    }
};

export const verifyToken = async (req, res, next) => {
    try {
        const token =
            req.body.token ||
            req.cookies.token ||
            req.header('Authorization').replace('Bearer ', '');

        if (!token) {
            return next(new AppError(false, 401, 'Token is missing'));
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            console.log(
                chalk.yellow('payload of the user (from token) is: '),
                decode,
            );
            req.user = decode; //? or should it be req.user = token
        } catch (err) {
            return next(new AppError(false, 401, 'Token is invalid'));
        }

        next();
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in verifying jwt token',
                err.message,
            ),
        );
    }
};

export const updateRole = async (req, res, next) => {
    try {
        const id = req.user.id;
        const { role } = req.body;

        const user = await User.findByIdAndUpdate(
            { _id: id },
            { accountType: role },
            { new: true },
        );

        if (!user) {
            return next(new AppError(false, 404, 'User not found'));
        }

        const prevRole = req.user.role;
        const payload = await user.getPayload();
        const token = createToken(payload);
        console.log(
            chalk.green(`Role updated from ${prevRole} to ${user.accountType}`),
        );

        const TokenOptions = {
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
            httpOnly: true,
        };

        return res
            .status(200)
            .cookie('token', token, TokenOptions)
            .json(
                AppSuccess(true, 'Role updated successfully', {
                    role: role,
                    user: user,
                }),
            );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in updating role of the user',
                err.message,
            ),
        );
    }
};

export const isStudent = async (req, res, next) => {
    try {
        if (req.user.role !== 'Student') {
            return next(new AppError(false, 401, 'User is not a student'));
        }

        console.log(chalk.green(`Welcome to the student role`));
        next();
    } catch (err) {
        return next(
            new AppError(false, 401, 'User cannot be verified as a student'),
        );
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== 'Admin') {
            return next(new AppError(false, 401, 'User is not a Admin'));
        }

        console.log(chalk.green(`Welcome to the admin role`));
        next();
    } catch (err) {
        return next(
            new AppError(false, 401, 'User cannot be verified as a Admin'),
        );
    }
};

export const isInstructor = async (req, res, next) => {
    try {
        if (req.user.role !== 'Instructor') {
            return next(new AppError(false, 401, 'User is not a instructor'));
        }

        console.log(chalk.green(`Welcome to the instructor role`));
        next();
    } catch (err) {
        return next(
            new AppError(false, 401, 'User cannot be verified as a instructor'),
        );
    }
};
