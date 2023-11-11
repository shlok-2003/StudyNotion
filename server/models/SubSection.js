import mongoose from 'mongoose';

const SubSectionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        duration: {
            type: String,
        },
        description: {
            type: String,
        },
        video: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const SubSection = mongoose.model('SubSection', SubSectionSchema);
export default SubSection;
