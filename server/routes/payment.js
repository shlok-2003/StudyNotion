import express from 'express';
const router = express.Router();

import { verifyToken, isStudent } from '../middlewares/auth.js';
import { capturePayment, verifySignature } from '../controllers/razorpay.js';

// To initiate a payment
router.post('/capture-payment', verifyToken, isStudent, capturePayment);

// to confirm a payment
router.post('/verify-signature', verifySignature);

export default router;
