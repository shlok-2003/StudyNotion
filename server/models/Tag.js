const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true,
        }
    },
    {
        timestamps: true,
    },
);

const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;
