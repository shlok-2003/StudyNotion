import mongoose from 'mongoose';

const SectionSchema = new mongoose.Schema(
    {
        sectionName: {
            type: String,
        },
        subSection: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'SubSection',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Section = mongoose.model('Section', SectionSchema);
export default Section;
