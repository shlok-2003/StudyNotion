import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import user from './routes/user.js';
import profile from './routes/profile.js';
import course from './routes/course.js';
import payment from './routes/payment.js';

//? Required
const app = express();
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,
// };
const fileOptions = {
    useTempFiles: true,
    tempFileDir: '/tmp/',
};

//? Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(fileUpload(fileOptions));

//!Testing
app.get('/', (req, res, next) => {
    res.send('Hello World');
});

const BASE_SERVER_URL = '/api';

//? Routes
app.use(`${BASE_SERVER_URL}/auth`, user);
app.use(`${BASE_SERVER_URL}/profile`, profile);
app.use(`${BASE_SERVER_URL}/course`, course);
app.use(`${BASE_SERVER_URL}/payment`, payment);

app.use(`${BASE_SERVER_URL}/*`, (req, res, next) => {
    res.status(404).send('OOPS !! page not found');
});

app.use((err, req, res, next) => {
    let { statusCode, success, message, error, stack } = err;

    if (stack) {
        console.log('Error is in line:', stack);
    }

    return res.status(statusCode).json({
        success: success || false,
        error: error,
        message: message,
    });
});

export default app;
