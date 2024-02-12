import Course from '../models/Course.js';
import Section from '../models/Section.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

export const createSection = async (req, res, next) => {
    try {
        const { sectionName, courseId } = req.body;

        if (!sectionName || !courseId) {
            return next(new AppError(false, 400, 'All fields are required'));
        }

        const section = await Section.create({ sectionName });
        const course = await Course.findByIdAndUpdate(
            { _id: courseId },
            { $push: { content: section._id } },
            { new: true },
        )
            .populate('content')
            .exec();

        if (!course) {
            return next(new AppError(false, 404, 'Course not found'));
        }

        return res.status(201).json(
            AppSuccess(true, 'Section created successfully', {
                course,
            }),
        );
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in creating section', err.message),
        );
    }
};

export const updateSection = async (req, res, next) => {
    try {
        const { sectionName, sectionId } = req.body;

        if (!sectionName || !sectionId) {
            return next(new AppError(false, 400, 'All fields are required'));
        }

        const section = await Section.findByIdAndUpdate(
            { _id: sectionId },
            { sectionName },
            { new: true },
        );

        return res.status(201).json(
            AppSuccess(true, 'Section created successfully', {
                section,
            }),
        );
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in creating section', err.message),
        );
    }
};

export const deleteSection = async (req, res, next) => {
    try {
        const { sectionId, courseId } = req.body;

        if (!sectionId) {
            return next(new AppError(false, 400, 'All fields are required'));
        }

        const section = await Section.findByIdAndDelete({ _id: sectionId });

        //! Do we need to remove the section id from the course schema
        let course;
        if (courseId !== undefined) {
            course = await Course.findByIdAndUpdate(
                { _id: courseId },
                { $pull: { content: sectionId } },
                { new: true },
            );
        }

        return res.status(201).json(
            AppSuccess(true, 'Section created successfully', {
                section,
                course: course ? course : 'No course found',
            }),
        );
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in creating section', err.message),
        );
    }
};
