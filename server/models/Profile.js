import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema(
    {
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Prefer not to say'],
        },
        dob: {
            type: String,
        },
        about: {
            type: String,
            trim: true,
        },
        contactNumber: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
