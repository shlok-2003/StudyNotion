import mongoose from 'mongoose';
import crypto from 'crypto';
import instance from '../config/razorpay.js';
import Course from '../models/Course.js';
import User from '../models/User.js';
import mailSender from '../utils/mailSender.js';
import courseEnrollmentTemplate from '../templates/mails/courseEnrollmentEmail.js';
import { AppError, AppSuccess } from '../utils/appHandler.js';

// capture the payment and initiate the course enrollment
export const capturePayment = async (req, res, next) => {
    let course;
    const { courseId } = req.body;
    const userId = req.user.id;

    try {
        if (!courseId) {
            return next(new AppError(false, 400, 'Course ID is required'));
        }

        course = await Course.findById(courseId);
        if (!course) {
            return next(new AppError(false, 404, 'Course not found'));
        }

        const uid = new mongoose.Types.ObjectId(userId);
        const hasUserEnrolled = course.studentsEnrolled.includes(uid);

        if (hasUserEnrolled) {
            return next(new AppError(false, 400, 'You have already enrolled in this course'));
        }
    } catch (err) {
        return next(new AppError(false, 500, 'Error in capturing payment', err.message));
    }

    const OrderOptions = {
        amount: course.price,
        currency: 'INR',
        receipt: Math.random(Date.now()).toString(),
        notes: {
            courseId: courseId,
            userId: userId,
        },
    };

    try {
        const paymentResponse = await instance.orders.create(OrderOptions);
        console.log(paymentResponse);

        return res.status(200).json(
            AppSuccess(true, 'Payment initiated successfully', {
                courseName: course.name,
                thumbnail: course.thumbnail,
                razorpayOptions: options,
                paymentResponse: paymentResponse,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in capturing payment', err.message));
    }
};

// verify the payment and enroll the user in the course
export const verifySignature = async (req, res, next) => {
    const webhookSecret = '12345678';
    const signature = req.headers['x-razorpay-signature'];

    const shasum = crypto.createHmac('sha256', webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest('hex');

    if (signature === digest) {
        console.log('Payment is Authorised');

        const { courseId, userId } = req.body.payload.payment.entity.notes;

        try {
            const courseEnrolled = await Course.findByIdAndUpdate(
                { courseId },
                { $push: { studentsEnrolled: userId } },
                { new: true }
            );

            if (!courseEnrolled) {
                return next(new AppError(false, 500, 'Course not found'));
            }

            const enrolledStudent = await User.findByIdAndUpdate(
                { userId },
                { $push: { courses: courseId } },
                { new: true }
            );

            await mailSender(
                enrolledStudent.email,
                'Congratulations on enrolling in the course',
                courseEnrollmentTemplate(courseEnrolled.name, enrolledStudent.name)
            );

            return res.status(200).json(
                AppSuccess(true, 'Course and payment is done', {
                    course: courseEnrolled,
                    user: enrolledStudent,
                })
            );
        } catch (err) {
            return next(new AppError(false, 500, 'Error in capturing payment', err.message));
        }
    } else {
        return next(new AppError(false, 400, 'Payment is not authorised'));
    }
};
