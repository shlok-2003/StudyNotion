import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FoundingStory from '/assets/Images/FoundingStory.png';
import BannerImage1 from '/assets/Images/aboutus1.webp';
import BannerImage2 from '/assets/Images/aboutus2.webp';
import BannerImage3 from '/assets/Images/aboutus3.webp';

import { Typography } from '@components/common/typography';
import { Glitter } from '@/components/ui/common/gradient-text';
import { Stat, LearningGrid, Quote } from '@components/core/about';
import { Box, Section } from '@components/common/containers';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        AOS.refresh();
    }, []);

    return (
        <Box className="bg-rich-black-900">
            <Section className="bg-rich-black-900 max-sm:px-4">
                <Box className="relative mx-auto flex w-11/12 flex-col justify-between gap-10 text-center text-white">
                    <header
                        data-aos="zoom-in"
                        className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]"
                    >
                        Driving Innovation in Online Education for a{' '}
                        <Glitter variant="mood">Brighter Future</Glitter>
                        <Typography
                            variant="p"
                            data-aos="zoom-in-down"
                            className="text-rich-black-300 mx-auto mt-3 text-center text-lg font-medium lg:w-[95%]"
                        >
                            Studynotion is at the forefront of driving
                            innovation in online education. We're passionate
                            about creating a brighter future by offering
                            cutting-edge courses, leveraging emerging
                            technologies, and nurturing a vibrant learning
                            community.
                        </Typography>
                    </header>
                    <Box className="grid gap-3 self-center max-md:grid-rows-3 md:grid-cols-3 lg:gap-10">
                        <img data-aos="flip-right" src={BannerImage1} alt="banner card 1" loading='lazy'/>
                        <img data-aos="flip-right" src={BannerImage2} alt="banner card 2" loading='lazy'/>
                        <img data-aos="flip-right" src={BannerImage3} alt="banner card 3" loading='lazy'/>
                    </Box>
                </Box>
            </Section>

            <Section className="border-rich-black-700 mt-10 border-b max-sm:px-4">
                <Box className=" text-rich-black-500 mx-auto flex w-11/12 flex-col justify-between gap-10">
                    <Quote />
                </Box>
            </Section>

            <Section>
                <Box className=" text-rich-black-500 mx-auto flex w-11/12 flex-col justify-between gap-10 max-sm:px-4">
                    <Box className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                        <Box className="my-24 flex flex-col gap-10 lg:w-[50%]">
                            <Glitter
                                variant="sunset"
                                direction="bottom-right"
                                className="text-4xl font-semibold text-transparent lg:w-[70%] "
                            >
                                Our Founding Story
                            </Glitter>
                            <Typography
                                variant="p"
                                className="text-rich-black-300 text-lg font-medium lg:w-[95%]"
                            >
                                Our e-learning platform was born out of a shared
                                vision and passion for transforming education.
                                It all began with a group of educators,
                                technologists, and lifelong learners who
                                recognized the need for accessible, flexible,
                                and high-quality learning opportunities in a
                                rapidly evolving digital world.
                            </Typography>
                            <Typography
                                variant="p"
                                className="text-rich-black-300 text-base font-medium lg:w-[95%]"
                            >
                                As experienced educators ourselves, we witnessed
                                firsthand the limitations and challenges of
                                traditional education systems. We believed that
                                education should not be confined to the walls of
                                a classroom or restricted by geographical
                                boundaries. We envisioned a platform that could
                                bridge these gaps and empower individuals from
                                all walks of life to unlock their full
                                potential.
                            </Typography>
                        </Box>

                        <Box>
                            <img
                                src={FoundingStory}
                                alt="studynotion-founding-story"
                                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                            />
                        </Box>
                    </Box>
                    <Box className="flex flex-col items-center justify-between lg:flex-row lg:gap-10">
                        <Box className="my-24 flex flex-col gap-10 lg:w-[40%]">
                            <Glitter
                                variant="groot"
                                direction="bottom-right"
                                className="text-4xl font-semibold lg:w-[70%]"
                            >
                                Our Vision
                            </Glitter>
                            <Typography
                                variant="p"
                                className="text-rich-black-300 text-lg font-medium lg:w-[95%]"
                            >
                                With this vision in mind, we set out on a
                                journey to create an e-learning platform that
                                would revolutionize the way people learn. Our
                                team of dedicated experts worked tirelessly to
                                develop a robust and intuitive platform that
                                combines cutting-edge technology with engaging
                                content, fostering a dynamic and interactive
                                learning experience.
                            </Typography>
                        </Box>
                        <Box className="my-24 flex flex-col gap-10 lg:w-[40%]">
                            <Glitter
                                variant="blue"
                                direction="bottom-right"
                                className="text-4xl font-semibold lg:w-[70%]"
                            >
                                Our Mission
                            </Glitter>
                            <Typography
                                variant="p"
                                className="text-rich-black-300 text-lg font-medium lg:w-[95%]"
                            >
                                Our mission goes beyond just delivering courses
                                online. We wanted to create a vibrant community
                                of learners, where individuals can connect,
                                collaborate, and learn from one another. We
                                believe that knowledge thrives in an environment
                                of sharing and dialogue, and we foster this
                                spirit of collaboration through forums, live
                                sessions, and networking opportunities.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Section>

            <Stat />
            <Section className="mx-auto mt-20 flex w-11/12 flex-col justify-between gap-10 text-white">
                <LearningGrid />
            </Section>
        </Box>
    );
};

export default About;
