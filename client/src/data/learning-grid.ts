export interface LearningGridProps {
    order: number;
    title: string;
    highlight?: string;
    description: string;
    BtnText?: string;
    link?: string;
}

const LearningGridData : Array<LearningGridProps> = [
    {
        order: -1,
        title: 'World-Class Learning for',
        highlight: 'Anyone, Anywhere',
        description:
            'Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.',
        BtnText: 'Learn More',
        link: '/',
    },
    {
        order: 1,
        title: 'Curriculum Based on Industry Needs',
        description:
            'Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.',
    },
    {
        order: 2,
        title: 'Our Learning Methods',
        description:
            'Studynotion partners with more than 275+ leading universities and companies to bring',
    },
    {
        order: 3,
        title: 'Certification',
        description:
            'Studynotion partners with more than 275+ leading universities and companies to bring',
    },
    {
        order: 4,
        title: `Rating "Auto-grading"`,
        description:
            'Studynotion partners with more than 275+ leading universities and companies to bring',
    },
    {
        order: 5,
        title: 'Ready to Work',
        description:
            'Studynotion partners with more than 275+ leading universities and companies to bring',
    },
];

export default LearningGridData;