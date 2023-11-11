import RatingAndReviews from '../models/RatingAndReview.js';
import Course from '../models/Course.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

export const createRatingAndReview = async (req, res, next) => {
    try {
        const { courseId, rating, review } = req.body;
        const userId = req.user.id;

        if (!courseId || !rating || !review) {
            return next(new AppError(false, 400, 'All fields are required'));
        }

        const existingReview = await RatingAndReviews.findOne({
            user: userId,
            course: courseId,
        });

        //! Another way to do the same thing
        // const existingReview = await Course.findOne({
        //     _id: courseId,
        //     ratingAndReviews: { $elemMatch: { $eq: userId } },
        // });

        if (existingReview) {
            return next(new AppError(false, 400, 'You have already given a review'));
        }

        const newReview = await RatingAndReviews.create({
            user: userId,
            course: courseId,
            rating,
            review,
        });

        const updatedCourse = await Course.findOneAndUpdate(
            { _id: courseId },
            { $push: { ratingAndReviews: newReview } },
            { new: true }
        );

        if (!updatedCourse) {
            return next(new AppError(false, 400, 'Course not found'));
        }

        return res.status(200).json(
            AppSuccess(true, 'Rating and review created successfully', {
                review: newReview,
                course: updatedCourse,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in creating rating and review', err.message));
    }
};

export const getAverageRating = async (req, res, next) => {
    try {
        const { courseId } = req.body;

        const rating = await RatingAndReviews.aggregate([
            {
                $match: {
                    course: {
                        _id: courseId,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    avgRating: { $avg: '$rating' },
                },
            },
        ]);

        console.log(rating);

        if (!rating.length || !rating[0].avgRating) {
            return next(new AppError(false, 400, 'No rating found'));
        }

        return res.status(200).json(
            AppSuccess(true, 'Average rating fetched successfully', {
                averageRating: rating[0].avgRating,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in getting average rating', err.message));
    }
};

export const getAllRating = async (req, res, next) => {
    try {
        const rating = await RatingAndReviews.find({})
            .sort({ rating: 1 })
            .populate({
                path: 'user',
                select: 'firstName lastName email image',
            })
            .populate({
                path: 'course',
                select: 'name',
            })
            .exec();

        if (!rating.length) {
            return next(new AppError(false, 400, 'No rating found'));
        }

        return res.status(200).json(
            AppSuccess(true, 'All rating fetched successfully', {
                rating,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in getting all rating', err.message));
    }
};
