import User from '../../models/User.js';
import resetPassword from '../../templates/mails/resetPassword.js';
import mailSender from '../../utils/mailSender.js';
import { AppError, AppSuccess } from '../../utils/appHandler.js';

const changePassword = async (req, res, next) => {
    try {
        const { email, oldPassword, newPassword, confirmNewPassword } = req.body;

        if (!email || !oldPassword || !newPassword || !confirmNewPassword) {
            return next(new AppError(false, 400, 'Please enter all the fields'));
        }

        const user = await User.findOne({ email });
        if (!user) {
            return next(new AppError(false, 401, 'User does not exists'));
        }

        if (newPassword !== confirmNewPassword) {
            return next(new AppError(false, 403, 'Passwords do not match'));
        }

        let payload = {};
        if (await user.matchPassword(oldPassword)) {
            payload = await user.getPayload();
        } else {
            return next(new AppError(false, 401, 'Passwords do not match'));
        }

        const userWithPasswordUpdated = await User.findOneAndUpdate(
            { email },
            { password: newPassword },
            { new: true }
        );

        await mailSender(email, 'Password Changed Successfully', resetPassword());

        return res.status(200).json(
            AppSuccess(true, 'Password changed successfully', {
                old_data: user.password,
                new_data: userWithPasswordUpdated,
            })
        );
    } catch (err) {
        return next(new AppError(false, 500, 'Error in changing password'));
    }
};

export default changePassword;
