import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        whatYouWillLearn: {
            type: String,
        },
        content: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Section',
            },
        ],
        ratingAndReviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'RatingAndReview',
            },
        ],
        studentsEnrolled: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        tag: {
            type: [String],
            ref: 'Tag',
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true,
            ref: 'Category',
        },
        status: {
            type: String,
            enum: ['Draft', 'Published'],
        },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model('Course', CourseSchema);
export default Course;
