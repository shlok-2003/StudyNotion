import express from 'express';
const router = express.Router();

import { verifyToken, isInstructor, isAdmin, isStudent } from '../middlewares/auth.js';
import { createCourse, getAllCourse, getCourseDetails } from '../controllers/course.js';
import { createSection, deleteSection, updateSection } from '../controllers/section.js';
import { createSubSection, updateSubSection, deleteSubSection } from '../controllers/subSection.js';
import { categoryPageDetails, createCategory, showAllCategory } from '../controllers/category.js';
import {
    createRatingAndReview,
    getAllRating,
    getAverageRating,
} from '../controllers/ratingAndReview.js';

//! ------> For instructors

// get all courses detail
router.get('/get-all-course', getAllCourse);

// get a course detail
router.get('/get-course', getCourseDetails);

// create a course
router.post('/create-course', verifyToken, isInstructor, createCourse);

// create a section of a course
router.post('/add-section', verifyToken, isInstructor, createSection);

// update a section of course
router.put('/update-section', verifyToken, isInstructor, updateSection);

// delete a section of course
router.delete('/delete-section', verifyToken, isInstructor, deleteSection);

// create a sub-section from a section inside a course
router.post('/create-subsection', verifyToken, isInstructor, createSubSection);

// update a sub-section
router.put('/update-subsection', verifyToken, isInstructor, updateSubSection);

// delete a sub-section
router.delete('/delete-subsection', verifyToken, isInstructor, deleteSubSection);

//! ------> For admins

// create a category
router.post('/create-category', verifyToken, isAdmin, createCategory);

// get all category
router.get('/get-all-category', showAllCategory);

// get page details for category
router.post('/get-page-detail', categoryPageDetails);

//! ------> For students

// create a rating
router.post('/create-rating', verifyToken, isStudent, createRatingAndReview);

// get an average of all rating
router.get('/get-average-rating', getAverageRating); //! not working

// get all ratings
router.get('/get-rating', getAllRating);

export default router;
