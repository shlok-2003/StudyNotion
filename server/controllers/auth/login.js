import User from '../../models/User.js';
import { createToken } from '../../middlewares/auth.js';
import { AppError, AppSuccess } from '../../utils/appHandler.js';

const cookieOptions = {
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
    httpOnly: true,
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(
                new AppError(false, 400, 'Please enter all the fields'),
            );
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return next(new AppError(false, 401, 'User does not exists'));
        }

        let payload;
        if (await user.matchPassword(password)) {
            payload = await user.getPayload();

            console.log(payload);
        } else {
            return next(new AppError(false, 401, 'Passwords do not match'));
        }

        const token = createToken(payload);

        return res
            .cookie('token', token, cookieOptions)
            .status(200)
            .json(AppSuccess(true, 'User logged in successfully', { token }));
    } catch (err) {
        return next(
            new AppError(false, 500, 'Error in logging in', err.message),
        );
    }
};

export default login;
