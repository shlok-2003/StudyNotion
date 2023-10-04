const mongoose = require('mongoose');

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
        document: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

const SubSection = mongoose.model('SubSection', SubSectionSchema);
module.exports = SubSection;
