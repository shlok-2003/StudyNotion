import dotenv from 'dotenv';
import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { uploader } from '../utils/uploader.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';
import Course from '../models/Course.js';

dotenv.config();

export const getUserDetails = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const userDetails = await User.findById({ _id: userId })
            .populate('additionalDetails')
            .exec();

        if (!userDetails) {
            return next(new AppError(false, 404, 'User not found'));
        }

        return res.status(200).json(
            AppSuccess(true, 'User details fetched successfully', {
                userDetails,
            }),
        );
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Error in creating sub-section',
            message: err.message,
        });
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        const { gender, dob, about, contactNumber } = req.body;
        const userId = req.user.id;

        if (!gender || !dob || !contactNumber) {
            return next(new AppError(false, 400, 'All fields are required'));
        }

        const userDetails = await User.findById({ _id: userId });
        const profileId = userDetails.additionalDetails;

        const profileDetail = await Profile.findByIdAndUpdate(
            { _id: profileId },
            { gender, dob, about, contactNumber },
            { new: true },
        );

        return res.status(200).json(
            AppSuccess(true, 'Profile updated successfully', {
                profileDetail,
            }),
        );
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in updating profile', err.message),
        );
    }
};

// TODO: Delete all the courses enrolled by the user
export const deleteProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);
        if (!user) {
            return next(new AppError(false, 404, 'User not found'));
        }

        //! Delete all the courses enrolled by the user ---> Done in User model with middlewares
        await user.deleteData();
        await User.findByIdAndDelete(user._id);

        return res
            .status(200)
            .json(AppSuccess(true, 'Profile and user deleted successfully'));
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in deleting profile and user',
                err.message,
            ),
        );
    }
};

export const getEnrolledCourses = async (req, res, next) => {
    try {
        const id = req.user.id;

        const user = await User.findById(
            { id },
            { firstName: true, courses: true },
        ).populate({
            path: 'courses',
        });
        if (!user) {
            return next(new AppError(false, 404, 'User not found'));
        }

        return res.status(200).json(
            AppSuccess(true, 'Courses enrolled fetched successfully', {
                courses: user.courses,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in fetching enrolled courses',
                err.message,
            ),
        );
    }
};

export const updateDisplayPicture = async (req, res, next) => {
    try {
        const file = req.files.file;
        if (!file) {
            return next(new AppError(false, 404, 'Provide a image'));
        }

        const uploadDetails = await uploader(file, process.env.FOLDER_NAME);

        const user = await User.findByIdAndUpdate(
            { id },
            { image: uploadDetails.secure_url },
            { new: true },
        );

        return res.status(200).json(
            AppSuccess(true, 'Courses enrolled fetched successfully', {
                courses: user.courses,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in updating display picture',
                err.message,
            ),
        );
    }
};

export const helper = async (req, res, next) => {
    try {
        const course = req.params.course;
        const userId = req.user.id;

        const userEnrollment = await User.findByIdAndUpdate(
            { _id: userId },
            { $push: { courses: course } },
            { new: true },
        );

        const courseEnrollment = await Course.findByIdAndUpdate(
            { _id: course },
            { $push: { studentsEnrolled: userId } },
        );

        return res.status(200).json(
            AppSuccess(true, 'Enrolled in course successfully', {
                userEnrollment,
                courseEnrollment,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in enrolling in course',
                err.message,
            ),
        );
    }
};
