const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:4000/api';

export const review = {
    REVIEW_API: BASE_URL + '/course/get-rating',
};

export const contactUs = {
    CONTACT_US_API: BASE_URL + '/reach/contact',
};

export const config = {
    root: BASE_URL,
    auth: {
        root: '/auth',
        LOGIN: '/login',
        SIGNUP: '/signup',
        SEND_OTP: '/send-otp',
        UPDATE_ROLE: '/update-role',
        RESET_PASSWORD: '/reset-password',
        CHANGE_PASSWORD: '/change-password',
        RESET_PASSWORD_TOKEN: '/reset-password-token',
    },
    profile: {
        root: '/profile',
        ENROLL_COURSE: '/helper/:course',
        UPDATE_PROFILE: '/update-profile',
        DELETE_PROFILE: '/delete-profile',
        GET_USER_DETAILS: '/get-user-details',
        GET_ENROLLED_COURSES: '/get-enrolled-courses',
        UPLOAD_DISPLAY_PICTURE: '/update-display-picture',
    },
    payment: {
        root: '/payment',
        VERIFY_PAYMENT: '/verify-payment',
        CAPTURE_PAYMENT: '/capture-payment',
        SEND_PAYMENT_SUCCESS_EMAIL_API: '/sendPaymentSuccessEmail',
    },
    course: {
        root: '/course',
        GET_ONE: '/get-course',
        GET_ALL: '/get-all-course',
        CREATE_ONE: '/create-course',
        UPDATE_ONE: '/update-course', //! not added
        DELETE_ONE: '/delete-course', //! not added
    },
    section: {
        root: '/course',
        CREATE_SECTION: '/create-section',
        UPDATE_SECTION: '/update-section',
        DELETE_SECTION: '/delete-section',
    },
    subSection: {
        root: '/course',
        CREATE_SUB_SECTION: '/create-subsection',
        UPDATE_SUB_SECTION: '/update-subsection',
        DELETE_SUB_SECTION: '/delete-subsection',
    },
    category: {
        root: '/course',
        GET_ALL: '/get-all-category',
        CREATE_ONE: '/create-category',
        GET_PAGE_DETAILS: '/get-page-detail',
    },
    review: {
        root: '/course',
        LIST: '/get-rating',
        CREATE_ONE: '/create-rating',
        GET_AVG_RATING: '/get-average-rating',
    },
    contactUs: {
        root: '/reach',
        CREATE_ONE: '/contact',
    },
};

export default config;
