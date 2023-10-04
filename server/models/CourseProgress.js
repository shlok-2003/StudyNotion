const mongoose = require('mongoose');

const CourseProgressSchema = new mongoose.Schema(
    {
        courseID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
        },
        completedVideos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubSection',
            },
        ],
    },
    {
        timestamps: true,
    },
);

const CourseProgress = mongoose.model('CourseProgress', CourseProgressSchema);
module.exports = CourseProgress;
