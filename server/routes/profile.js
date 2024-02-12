import express from 'express';
const router = express.Router();

import { verifyToken } from '../middlewares/auth.js';
import {
    getUserDetails,
    updateProfile,
    deleteProfile,
    getEnrolledCourses,
    updateDisplayPicture,
    helper,
} from '../controllers/profile.js';

// update profile
router.put('/update-profile', verifyToken, updateProfile);

// delete the profile
router.delete('/delete-profile', verifyToken, deleteProfile);

// get user details
router.get('/get-user-details', verifyToken, getUserDetails);

// Get Enrolled Courses
router.get('/get-enrolled-courses', verifyToken, getEnrolledCourses);

// update profile picture
router.put('/update-display-picture', verifyToken, updateDisplayPicture);

// just for now
router.post('/helper/:course', verifyToken, helper);

export default router;
