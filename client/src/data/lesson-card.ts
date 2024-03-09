export interface LessonDataProps {
    title: string;
    description: string;
    level: string;
    lessonNumber: number;
}

const LessonData: LessonDataProps[] = [
    {
        title: 'Learn HTML',
        description:
            'This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.',
        level: 'Beginner',
        lessonNumber: 6,
    },
    {
        title: 'Learn CSS',
        description:
            'This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques',
        level: 'Beginner',
        lessonNumber: 7,
    },
    {
        title: 'Responsive Web Design',
        description:
            'This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes',
        level: 'Intermediate',
        lessonNumber: 5,
    },
];

export default LessonData;
