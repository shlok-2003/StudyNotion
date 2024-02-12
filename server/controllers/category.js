import Category from '../models/Category.js';
import Course from '../models/Course.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

export const createCategory = async (req, res, next) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return next(new AppError(false, 400, 'Name is required'));
        }

        const category = await Category.create({
            name,
            description,
        });

        return res
            .status(201)
            .json(
                AppSuccess(true, 'Category created successfully', { category }),
            );
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in creating category', err.message),
        );
    }
};

export const showAllCategory = async (req, res, next) => {
    try {
        const category = await Category.find({})
            .populate({
                path: 'courses',
                select: 'name',
            })
            .exec();

        return res
            .status(200)
            .json(AppSuccess(true, 'All categories fetched', { category }));
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in getting all category',
                err.message,
            ),
        );
    }
};

export const categoryPageDetails = async (req, res, next) => {
    try {
        const { categoryId } = req.body;

        if (!categoryId) {
            return next(new AppError(false, 400, 'categoryId is required'));
        }

        const selectedCategory = await Category.findById({ _id: categoryId })
            .populate('courses')
            .exec();

        const differentCategory = await Category.find({
            _id: { $ne: categoryId },
        })
            .populate('courses')
            .exec();

        // get all courses whose status is published and of any category and they should be sorted by number of students
        // enrolled in descending order and average rating in descending order. You have to find the average rating
        const sellingCourses = await Course.find({ status: 'Published' })
            .sort({ studentsEnrolled: -1 })
            .limit(10)
            .exec();

        return res.status(200).json(
            AppSuccess(true, 'Category page details', {
                selectedCategory,
                differentCategory,
                sellingCourses,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in getting category page details',
                err.message,
            ),
        );
    }
};
