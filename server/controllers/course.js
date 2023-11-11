import dotenv from 'dotenv';
import chalk from 'chalk';
import Course from '../models/Course.js';
import Category from '../models/Category.js';
import User from '../models/User.js';
import { uploader } from '../utils/uploader.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

dotenv.config();

export const createCourse = async (req, res, next) => {
    try {
        const { name, description, whatYouWillLearn, status, instructions, price, tag, category } =
            req.body;
        const thumbnail = req.files.file;

        // ! tag should be add or not
        if (!name || !description || !whatYouWillLearn || !price || !thumbnail || !category) {
            return next(new AppError(false, 400, 'All fields are required to create a course'));
        }

        const userId = req.user.id;
        const instructorDetail = await User.findById({
            _id: userId,
            accountType: 'Instructor',
        });

        if (!instructorDetail) {
            return next(new AppError(false, 404, 'Instructor not found'));
        }

        const categoryDetails = await Category.findOne({ name: category });
        if (!categoryDetails) {
            return next(new AppError(false, 404, 'Category not found'));
        }

        const thumbnailUpload = await uploader(thumbnail, process.env.FOLDER_NAME);
        console.log(chalk.green(thumbnailUpload));

        const allTags = tag.split(',').map((tag) => tag.trim()); //! Needs to be updated later

        const course = await Course.create({
            name,
            description,
            whatYouWillLearn,
            instructor: instructorDetail._id,
            price,
            category: categoryDetails._id,
            status,
            instructions,
            thumbnail: thumbnailUpload.secure_url,
            tag: allTags,
        });

        await User.findByIdAndUpdate(
            { _id: userId },
            { $push: { courses: course._id } },
            { new: true }
        );

        return res.status(201).json(AppSuccess(true, 'Course created successfully', { course }));
    } catch (err) {
        return next(new AppError(false, 500, 'Error in creating course', err.message));
    }
};

export const getAllCourse = async (req, res, next) => {
    try {
        const course = await Course.find(
            {},
            {
                name: true,
                description: true,
                price: true,
                thumbnail: true,
                instructor: true,
                content: true,
                category: true,
                ratingAndReviews: true,
                studentsEnrolled: true,
            }
        )
            .populate({
                path: 'instructor',
                select: 'firstName lastName',
            })
            .populate({
                path: 'category',
                select: 'name description',
            })
            .populate({
                path: 'content',
                select: 'sectionName',
                populate: {
                    path: 'subSection',
                    select: 'title video',
                },
            })
            .exec();

        return res.status(200).json(
            AppSuccess(true, 'Course fetched successfully', {
                course: course.length ? course : 'No course found',
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in getting all courses', err.message));
    }
};

export const getCourseDetails = async (req, res, next) => {
    try {
        const { courseId } = req.body;
        const course = await Course.findOne({ _id: courseId })
            .populate({
                path: 'instructor',
                select: 'firstName lastName',
                populate: {
                    path: 'additionalDetails',
                    select: 'contactNumber',
                },
            })
            .populate('ratingAndReviews')
            .populate({
                path: 'studentsEnrolled',
                select: 'name',
            })
            .populate('category')
            .populate({
                path: 'content',
                populate: {
                    path: 'subSection',
                },
            })
            .exec();

        if (!course) {
            return next(new AppError(false, 404, `Course not found by id: ${courseId}`));
        }

        return res.status(200).json(AppSuccess(true, 'Course fetched successfully', { course }));
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in getting course with the given id', err.message)
        );
    }
};
