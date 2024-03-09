import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, ImTree } from '@/icons';

import {
    QNA,
    Review,
    Timeline,
    InfoCard,
    LearningLanguage,
} from '@components/core/home';

import { Button } from '@components/common/button';
import { Gradient } from '@components/common/gradient';
import { Glitter } from '@components/common/gradient-text';
import { Typography } from '@components/common/typography';
import { Box, Section } from '@components/common/containers';
import { CodePrimitive, CodeBlock } from '@components/common/code-block';
import {
    Card,
    CardTitle,
    CardContent,
    CardDescription,
} from '@components/common/card';

import Video from '/assets/Images/banner.hevc.mp4';
import Teacher from '/assets/Images/Instructor.png';
import { CodeData, LessonData, QnaData } from '@/data';

export default function Home() {
    const ref = useRef<HTMLElement>(null);
    const [isLarge, setIsLarge] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        setIsLarge(window.innerWidth > 768);
    }, []);

    return (
        <main className="relative flex min-h-screen flex-col">
            {/* Section 1 */}
            <Section className="bg-rich-black-900 flex items-center justify-center">
                <Box className="[&>*]transition-all relative mx-10 flex flex-col items-start justify-center space-y-9 self-center py-16 max-sm:px-4 md:w-4/5 md:items-center lg:w-3/5 [&>*]:duration-300">
                    <React.Fragment>
                        <Link
                            to="/signup"
                            className="bg-rich-black-800 text-rich-black-200 group mx-auto w-fit rounded-full px-3 py-2 shadow-[0_3px_0_0_rgba(255,255,255,0.18)] hover:scale-95 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.18)]"
                        >
                            Become an Instructor
                            <FiArrowRight className="mb-0.5 ml-2 inline transition-all duration-500 group-hover:text-white"></FiArrowRight>
                        </Link>
                    </React.Fragment>

                    <aside className="space-y-4 text-justify md:text-center">
                        <Typography
                            variant="h1"
                            className="text-rich-black-5 text-center"
                        >
                            Empower Your Future with{' '}
                            <Glitter variant="blue" direction="bottom-right">
                                Coding Skills
                            </Glitter>
                        </Typography>

                        <Typography
                            variant="h6"
                            className="text-rich-black-300"
                        >
                            With our online coding courses, you can learn at
                            your own pace, from anywhere in the world, and get
                            access to a wealth of resources, including hands-on
                            projects, quizzes, and personalized feedback from
                            instructors.
                        </Typography>
                    </aside>

                    <Box className="flex flex-col gap-4 self-center sm:flex-row ">
                        <Button
                            size="lg"
                            className="text-rich-black-900 bg-rich-yellow-50 shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                        >
                            <Link
                                to="/"
                                className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                            >
                                Get Started
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            className="text-rich-black-5 bg-rich-black-800 shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]"
                        >
                            <Link
                                to="/"
                                className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                            >
                                Book a Demo
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Section>

            {/* Section 2 */}
            <Section className="bg-rich-black-900 flex items-center justify-center">
                <Box className="relative mx-4 flex flex-row items-center justify-center py-10">
                    <video
                        autoPlay
                        loop
                        muted
                        controls
                        className="relative z-10 aspect-video shadow-[8px_8px_0_0_rgba(255,255,255,0.9)] lg:w-[77%] lg:shadow-[20px_20px_0_0_rgba(255,255,255,0.9)]"
                    >
                        <source src={Video} type="video/mp4" />
                        The video tag is not supported by your browser.
                    </video>

                    {/* It loads after the video, not looks good */}
                    <Gradient
                        ref={ref}
                        size="medium"
                        shadow={isLarge ? 'large' : 'medium'}
                        variant="primary"
                        background="default"
                    />
                </Box>
            </Section>

            {/* Section 3 */}
            <Section className="bg-rich-black-900 flex items-center justify-center">
                <Box className="my-8 grid gap-6 self-center max-md:grid-rows-2 sm:w-4/5 lg:w-10/12 lg:grid-cols-2 xl:my-12 xl:gap-24">
                    <InfoCard
                        paragraph="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        buttonLeft="Try it Yourself"
                        buttonRight="Learn More"
                        linkLeft="/"
                        linkRight="/"
                    >
                        Unlock your{' '}
                        <Glitter variant="blue" direction="bottom-right">
                            coding potential
                        </Glitter>{' '}
                        with our online courses.
                    </InfoCard>

                    <figure className="mx-4 lg:m-8">
                        <CodePrimitive>
                            <CodeBlock
                                className="text-lime-400"
                                code={CodeData[0]}
                            />
                            <Gradient
                                ref={ref}
                                variant="primary"
                                background="dark-pink"
                                size="medium"
                                shadow={isLarge ? 'medium' : 'default'}
                            />
                        </CodePrimitive>
                    </figure>
                </Box>
            </Section>

            {/* Section 4 */}
            <Section className="bg-rich-black-900 flex items-center justify-center">
                <Box className="my-8 grid items-center gap-6 self-center max-md:grid-rows-2 sm:w-4/5 lg:w-10/12 lg:grid-cols-2 xl:my-12 xl:gap-24">
                    <figure className="mx-4 lg:m-8">
                        <CodePrimitive>
                            <CodeBlock
                                className="text-blue-400"
                                code={CodeData[1]}
                            />
                            <Gradient
                                ref={ref}
                                variant="sunset"
                                background="dark-yellow"
                                size="medium"
                                shadow={isLarge ? 'medium' : 'default'}
                            />
                        </CodePrimitive>
                    </figure>

                    <InfoCard
                        paragraph="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        buttonLeft="Continue Lesson"
                        buttonRight="Learn More"
                        linkLeft="/"
                        linkRight="/"
                    >
                        <Box className="px-5 text-center text-3xl sm:px-10 lg:text-4xl">
                            Start{' '}
                            <Glitter variant="sunset" direction="bottom-right">
                                coding in seconds
                            </Glitter>
                        </Box>
                    </InfoCard>
                </Box>
            </Section>

            {/* Section 5 */}
            <Box className="bg-rich-black-900 relative flex flex-col items-center justify-center">
                <Box className=" flex w-full">
                    <Section className="bg-rich-black-900 mx-4 my-24 flex w-full flex-col items-center justify-center space-y-2 self-center">
                        <Typography
                            variant="h1"
                            className="text-rich-black-5 text-center text-4xl font-semibold"
                        >
                            Unlock the{' '}
                            <Glitter variant="blue" direction="bottom-right">
                                Power of Code
                            </Glitter>
                        </Typography>

                        <Typography
                            variant="h6"
                            className="text-rich-black-300 text-center"
                        >
                            Learn to Build Anything You Can Imagine
                        </Typography>
                    </Section>
                </Box>

                <Section className="relative mb-10">
                    <Box className="flex flex-col gap-16 self-center px-4">
                        <Box className="flex flex-row flex-wrap justify-center gap-4 md:gap-9">
                            {LessonData.map(
                                (
                                    { title, description, level, lessonNumber },
                                    index,
                                ) => (
                                    <Card
                                        key={index}
                                        className="bg-rich-black-800 group flex w-[350px] grow cursor-default flex-col justify-between transition-all duration-500 hover:bg-white hover:shadow-[8px_8px_0_0_#FFD60A] max-sm:w-[320px] hover:lg:shadow-[20px_20px_0_0_#FFD60A]"
                                    >
                                        <CardContent className="mx-6 space-y-3 py-8">
                                            <CardTitle className="group-hover:text-rich-black-800 text-xl text-white">
                                                {title}
                                            </CardTitle>
                                            <CardDescription className="text-rich-black-200 text-base">
                                                {description}
                                            </CardDescription>
                                        </CardContent>

                                        <Box className="border-rich-black-600 mx-6 flex flex-row items-center justify-between  border-t border-dotted py-4">
                                            <figure className="space-x-2">
                                                <FiUsers className="text-rich-black-300 mb-0.5 inline group-hover:text-blue-500" />
                                                <Typography
                                                    variant="span"
                                                    className="text-rich-black-300 text-base font-semibold group-hover:text-blue-500 lg:font-normal xl:font-semibold"
                                                >
                                                    {level}
                                                </Typography>
                                            </figure>
                                            <figure className="space-x-2">
                                                <ImTree className="text-rich-black-300 mb-1 inline group-hover:text-blue-500" />
                                                <Typography
                                                    variant="span"
                                                    className="text-rich-black-300 text-base font-semibold group-hover:text-blue-500 lg:font-normal xl:font-semibold"
                                                >
                                                    {lessonNumber} Lessons
                                                </Typography>
                                            </figure>
                                        </Box>
                                    </Card>
                                ),
                            )}
                        </Box>

                        <Box className="flex flex-col gap-4 self-center sm:flex-row ">
                            <Button
                                size="lg"
                                className="text-rich-black-900 bg-rich-yellow-50 shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                            >
                                <Link
                                    to="/"
                                    className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                                >
                                    Get Started
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                className="text-rich-black-5 bg-rich-black-800 shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]"
                            >
                                <Link
                                    to="/"
                                    className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                                >
                                    Book a Demo
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Section>

                {/* Section 6 */}
                <Section className="flex flex-col items-center justify-center bg-white px-10 py-10 md:px-28 md:py-20">
                    <Box>
                        <Box className="grid items-center max-sm:grid-rows-2 sm:grid-cols-2 sm:gap-10">
                            <Typography
                                variant="h1"
                                className="text-rich-black-900 text-2xl font-semibold lg:text-4xl"
                            >
                                Get the skills you need for a{' '}
                                <Glitter
                                    variant="blue"
                                    direction="bottom-right"
                                >
                                    job that is in demand.
                                </Glitter>
                            </Typography>
                            <Typography
                                variant="span"
                                className="text-rich-black-900 leading-6"
                            >
                                <Typography variant="h6" className="mb-5">
                                    The modern StudyNotion is the dictates its
                                    own terms. Today, to be a competitive
                                    specialist requires more than professional
                                    skills.
                                </Typography>

                                <Button
                                    size="lg"
                                    className="text-rich-black-900 bg-rich-yellow-50 shadow-[4px_4px_0_0_rgba(0,0,0,0.51)]"
                                >
                                    <Link
                                        to="/"
                                        className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                                    >
                                        Learn More
                                    </Link>
                                </Button>
                            </Typography>
                        </Box>

                        <Box className="mt-20">
                            <Timeline />
                        </Box>
                    </Box>
                </Section>

                {/* Section 7 */}
                <Section className="flex w-full flex-col justify-center bg-white">
                    <Box className="space-y-14 px-10 py-10 lg:px-28 lg:py-24">
                        <Box className="flex flex-col items-center justify-between space-y-1">
                            <Typography
                                variant="h1"
                                className="text-center text-4xl font-bold"
                            >
                                Your swiss knife for{' '}
                                <Glitter
                                    variant="green"
                                    direction="bottom-right"
                                >
                                    learning any language
                                </Glitter>
                            </Typography>
                            <Typography
                                variant="h6"
                                className="text-rich-black-900 text-center"
                            >
                                Using spin making learning multiple languages
                                easy. with 20+ languages realistic voice-over,
                                progress tracking, custom schedule and more.
                            </Typography>
                        </Box>

                        <Section className="flex flex-wrap items-center justify-center lg:-space-x-28 [&>*]:aspect-square">
                            <LearningLanguage />
                        </Section>

                        <Box className="flex justify-center">
                            <Button
                                size="lg"
                                className="text-rich-black-900 bg-rich-yellow-50 shadow-[4px_4px_0_0_rgba(0,0,0,0.51)]"
                            >
                                <Link
                                    to="/"
                                    className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                                >
                                    Learn More
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Section>

                {/* Section 8 */}
                <Section className="bg-rich-black-900 flex flex-col items-center justify-between md:flex-row">
                    <Box className="flex flex-col items-center justify-center gap-10 space-y-10 px-10 py-10 md:flex-row lg:px-28 lg:py-24">
                        <Box>
                            <img
                                src={Teacher}
                                className="shadow-[-18px_-18px_0_0_rgba(255,255,255,0.9)]"
                                alt="teacher"
                                loading='lazy'
                            />
                        </Box>
                        <Box className="flex flex-col items-start justify-center space-y-10">
                            <Box className="inline space-y-3 self-center">
                                <Typography
                                    variant="h2"
                                    className="border-none pb-0 text-2xl font-bold text-white lg:text-4xl"
                                >
                                    Become an{' '}
                                    <Glitter
                                        variant="blue"
                                        direction="bottom-right"
                                    >
                                        Instructor
                                    </Glitter>
                                </Typography>
                                <Typography
                                    variant="p"
                                    className="text-rich-black-300"
                                >
                                    Instructors from around the world teach
                                    millions of students on StudyNotion. We
                                    provide the tools and skills to teach what
                                    you love.
                                </Typography>
                            </Box>

                            <Button
                                size="lg"
                                className="text-rich-black-900 bg-rich-yellow-50 shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                            >
                                <Link
                                    to="/"
                                    className="lg:text-md rounded-lg px-4 py-3 text-center text-sm font-bold max-[350px]:text-xs sm:text-base md:px-6 md:py-3"
                                >
                                    Learn More
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Section>

                {/* Section 9 */}
                {/* <Section className="bg-rich-black-900 flex flex-col items-center justify-center">
                    <Section className="px-5 sm:px-10">
                        <Typography
                            variant="h3"
                            className="text-rich-black-5 text-center text-3xl font-semibold"
                        >
                            What our{'  '}
                            <Glitter variant="sunset" direction="bottom-right">
                                Students
                            </Glitter>{' '}
                            say
                        </Typography>
                    </Section>

                    <Section className="px-5 sm:px-10">
                        <QNA data={QnaData}/>
                    </Section>
                </Section> */}

                {/* Section 10 */}
                <Section className="bg-rich-black-900 my-14 flex flex-col space-y-14">
                    <Section className="px-5 sm:px-10">
                        <Typography
                            variant="h3"
                            className="text-rich-black-5 text-center text-3xl font-semibold"
                        >
                            Reviews from other learners
                        </Typography>
                    </Section>

                    <Section className="px-5 sm:px-10">
                        <Review />
                    </Section>
                </Section>
            </Box>
        </main>
    );
}
