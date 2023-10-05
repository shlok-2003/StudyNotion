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
        image: {
            type: String,
            required: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile',
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

    if (!user._update.password) return;

    const saltRound = 10;
    let hashPassword;

    try {
        hashPassword = await bcrypt.hash(user._update.password, saltRound);
        this._update.password = hashPassword;
    } catch (err) {
        console.log(chalk.red(`Error in hashing password: ${err}`));
    }
});

UserSchema.static('matchPassword', async function (email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    if (await bcrypt.compare(password, user.password)) {
        const payload = {
            id: user._id,
            email: email,
            accountType: user.accountType,
        };

        return payload;
    } else {
        console.log(chalk.red('Password not matched'));
        throw new Error('Password not matched');
    }
});

const User = mongoose.model('User', UserSchema);
export default User;
