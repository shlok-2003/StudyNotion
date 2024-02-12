import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import chalk from 'chalk';

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            enum: ['Admin', 'Instructor', 'Student'],
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        approved: {
            type: Boolean,
            default: true,
        },
        image: {
            type: String,
            required: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile',
        },
        token: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
        ],
        courseProgress: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'CourseProgress',
            },
        ],
    },
    {
        timestamps: true,
    },
);

UserSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return;
    console.log(user.password);

    const saltRound = 10;
    let hashPassword;
    try {
        hashPassword = await bcrypt.hash(user.password, saltRound);
        this.password = hashPassword;
    } catch (err) {
        //! return
        console.log(chalk.red(`Error in hashing password: ${err}`));
    }
    next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
    const user = this;

    if (!user._update.password) {
        return next();
    }

    const saltRound = 10;
    let hashPassword;

    try {
        hashPassword = await bcrypt.hash(user._update.password, saltRound);
        this._update.password = hashPassword;
    } catch (err) {
        console.log(chalk.red(`Error in hashing password: ${err}`));
    }

    next();
});

UserSchema.methods = {
    matchPassword: async function (plainTextPassword) {
        return await bcrypt.compare(plainTextPassword, this.password);
    },
    getPayload: async function () {
        const payload = {
            id: this._id,
            email: this.email,
            role: this.accountType,
        };

        console.log(chalk.yellow('Getting payload'), payload);
        return payload;
    },
    updateRole: async function (role) {
        this.accountType = role;
        return this.accountType;
    },
    deleteData: async function () {
        console.log(this._id);
        const courses = this.courses;
        console.log(chalk.yellow('Courses enrolled by user: '), courses);

        await Promise.all(
            courses.map(async (courseId) => {
                const course = await mongoose
                    .model('Course')
                    .findByIdAndUpdate(
                        { _id: courseId },
                        { $pull: { studentsEnrolled: this._id } },
                        { new: true },
                    );
            }),
        );
        console.log(courses);

        await mongoose
            .model('Profile')
            .findByIdAndDelete({ _id: this.additionalDetails });
        console.log(chalk.green('Deleted profile and courses'));
    },
};

const User = mongoose.model('User', UserSchema);
export default User;

//! Old code
// UserSchema.static('matchPassword', async function (email, password) {
//     const user = await this.findOne({ email });

//     if (!user) {
//         throw new Error('User not found');
//     }

//     if (await bcrypt.compare(password, user.password)) {
//         console.log(chalk.green('Password matched'));
//         return true;
//     } else {
//         console.log(chalk.red('Password not matched'));
//         return false;
//     }
// });

// UserSchema.static('getPayload', async function (email) {
//     const user = await this.findOne({ email });

//     const payload = {
//         id: user._id,
//         email: email,
//         role: user.accountType,
//     };

//     return payload;
// });

// //! need to update
// UserSchema.pre('findOneAndDelete', async function (next) {
//     const user = this;
//     console.log(user);

//     try {
//         const courses = await mongoose.model('Course').find({ studentEnrolled: user._id });

//         await Promise.all(courses.map(async (course) => {
//             if (course) {
//                 course.studentEnrolled = course.studentEnrolled?.filter(
//                     (id) => id.toString() !== user._id.toString()
//                 );
//                 await course.save();
//             }
//         }));

//         await mongoose.model('Profile').findByIdAndDelete({ _id: user.additionalDetails });
//         // console.log(chalk.green('Deleted profile and courses'));

//         next();
//     } catch (err) {
//         console.log(chalk.red(`Error removing user from courses: ${err}`));
//         next(err);
//     }
// });
