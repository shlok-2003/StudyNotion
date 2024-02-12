import dotenv from 'dotenv';
import Section from '../models/Section.js';
import SubSection from '../models/SubSection.js';

import { AppError, AppSuccess } from '../utils/appHandler.js';
import { uploader } from '../utils/uploader.js';
dotenv.config();

export const createSubSection = async (req, res, next) => {
    try {
        const { sectionId, title, description } = req.body;
        const video = req.files.video;

        if (!sectionId || !title || !description || !video) {
            return next(new AppError(false, 400, 'All fields are required'));
        }

        const uploadDetails = await uploader(video, process.env.FOLDER_NAME);
        const subSection = await SubSection.create({
            title,
            description,
            video: uploadDetails.secure_url,
            duration: uploadDetails.duration,
        });

        const section = await Section.findByIdAndUpdate(
            { _id: sectionId },
            { $push: { subSection: subSection._id } },
            { new: true },
        )
            .populate('subSection')
            .exec();

        if (!section) {
            return next(new AppError(false, 404, 'Section not found'));
        }

        return res.status(201).json(
            AppSuccess(true, 'Sub-section created successfully', {
                section,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in creating sub-section',
                err.message,
            ),
        );
    }
};

//! Homework: Update Section
export const updateSubSection = async (req, res, next) => {
    try {
        const { subSectionId, title, description } = req.body;

        const subSection = await SubSection.findById({ _id: subSectionId });
        if (!subSection) {
            return next(new AppError(false, 404, 'SubSection not found'));
        }

        let options = {};

        if (title !== undefined) {
            options.title = title;
        }

        if (description !== undefined) {
            options.description = description;
        }

        if (req.files && req.files.video !== undefined) {
            const video = req.files.video;

            const uploadDetails = await uploader(
                video,
                process.env.FOLDER_NAME,
            );
            options.duration = uploadDetails.duration;
            options.video = uploadDetails.secure_url;
        }

        const updatedSubSection = await SubSection.findByIdAndUpdate(
            { _id: subSectionId },
            options,
            { new: true },
        );

        //! no need to update the section as it contains only the ID of the subSection, which is same after update

        return res.status(200).json(
            AppSuccess(true, 'Sub-section updated successfully', {
                subSection: updatedSubSection,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in updating sub-section',
                err.message,
            ),
        );
    }
};

//! Homework: Delete Section
export const deleteSubSection = async (req, res, next) => {
    try {
        const { sectionId, subSectionId } = req.body;

        const subSection = await SubSection.findByIdAndRemove({
            _id: subSectionId,
        });
        if (!subSection) {
            return next(new AppError(false, 404, 'SubSection not found'));
        }

        const section = await Section.findByIdAndUpdate(
            { _id: sectionId },
            { $pull: { subSection: subSectionId } },
            { new: true },
        );

        if (!section) {
            return next(new AppError(false, 404, 'Section not found'));
        }

        return res.json(
            AppSuccess(true, 'Sub-section deleted successfully', {
                section,
                deleted_subSection: subSection,
            }),
        );
    } catch (err) {
        return next(
            new AppError(
                false,
                500,
                'Error in deleting sub-section',
                err.message,
            ),
        );
    }
};
