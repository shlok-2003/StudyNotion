import express from 'express';
const router = express.Router();

import {
    sendOTP,
    login,
    signUp,
    changePassword,
} from '../controllers/auth/index.js';
import { verifyToken, updateRole } from '../middlewares/auth.js';
import {
    resetPassword,
    resetPasswordToken,
} from '../controllers/resetPassword.js';

// For login
router.post('/login', login);

// For signup
router.post('/signup', signUp);

// For sending OTP
router.post('/send-otp', sendOTP);

// For changing password
router.post('/change-password', verifyToken, changePassword);

// Reset Password
router.post('/reset-password-token', resetPasswordToken);

// Update Password
router.post('/reset-password', resetPassword);

// For updating role
router.post('/update-role', verifyToken, updateRole);

export default router;
