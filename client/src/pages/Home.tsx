import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import {
    Button,
    CodeBlock,
    InfoCard,
    Gradient,
    LessonCard,
    TimeLine,
    LearningLanguage,
    Instructor,
    Review,
} from '@/components/core/Home';
import { CodeBlockData, LessonCardData } from '@/data/Home';

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col">
            {/* Section 1 */}
            <section className="flex justify-center items-center bg-richblack-900">
                <section className="self-center relative [&>*]transition-all [&>*]:duration-300 py-16 mx-4 md:w-4/5 lg:w-3/5 flex flex-col items-start md:items-center justify-center space-y-9">
                    <Link
                        to="/signup"
                        className="bg-richblack-800 text-richblack-200 group w-fit rounded-full px-3 py-2 shadow-[0_3px_0_0_rgba(255,255,255,0.18)] hover:scale-95 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.18)]"
                    >
                        Become an Instructor
                        <FiArrowRight className="mb-0.5 ml-2 inline transition-all duration-500 group-hover:text-white"></FiArrowRight>
                    </Link>

                    <aside className="space-y-4 text-left md:text-center">
                        <h1 className="text-richblack-5 text-4xl font-semibold">
                            Empower Your Future with{' '}
                            <span className="txt-gradient-blue">Coding Skills</span>
                        </h1>

                        <h6 className="text-richblack-300">
                            With our online coding courses, you can learn at your own pace, from
                            anywhere in the world, and get access to a wealth of resources,
                            including hands-on projects, quizzes, and personalized feedback from
                            instructors.
                        </h6>
                    </aside>

                    <div className="self-center flex flex-row gap-4 ">
                        <Button
                            link="/"
                            bgColor="bg-yellow-50"
                            textColor="text-richblack-900"
                            shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                        >
                            Learn More
                        </Button>

                        <Button
                            link="/"
                            bgColor="bg-richblack-800"
                            textColor="text-richblack-5"
                            shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </section>
            </section>

            {/* Section 2 */}
            <div className="flex justify-center items-center bg-richblack-900">
                <section className="relative mx-4 py-10 flex flex-row justify-center items-center">
                    <video
                        autoPlay
                        loop
                        muted
                        controls
                        className="relative z-10 lg:w-[77%] aspect-video shadow-[8px_8px_0_0_rgba(255,255,255,0.9)] lg:shadow-[20px_20px_0_0_rgba(255,255,255,0.9)]"
                    >
                        <source src="/assets/Images/banner.mp4" type="video/mp4" />
                        The video tag is not supported by your browser.
                    </video>

                    <Gradient
                        className="shadow-[0_0_70px_40px] md:shadow-[0_0_100px_60px] lg:shadow-[0_0_500px_130px]"
                        gradientColor="blue-500"
                        bgColor="green-200"
                    />
                </section>
            </div>

            {/* Section 3 */}
            <div className="flex justify-center items-center bg-richblack-900">
                <section className="self-center sm:w-4/5 lg:w-10/12 grid max-md:grid-rows-2 lg:grid-cols-2 my-8 xl:my-12 gap-6 xl:gap-24">
                    <InfoCard
                        paragraph="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        button1="Try it Yourself"
                        button2="Learn More"
                    >
                        Unlock your <span className="txt-gradient-blue">coding potential</span> with
                        our online courses.
                    </InfoCard>

                    <figure className="mx-4 lg:m-8">
                        <CodeBlock
                            code={CodeBlockData[0]}
                            codeColor="text-yellow-50"
                            gradientColor="yellow-50"
                            bgColor="green-500"
                        />
                    </figure>
                </section>
            </div>

            {/* Section 4 */}
            <div className="flex justify-center items-center bg-richblack-900">
                <section className="self-center sm:w-4/5 lg:w-10/12 grid max-md:grid-rows-2 lg:grid-cols-2 my-8 xl:my-12 gap-6 xl:gap-24">
                    <figure className="mx-4 lg:m-8">
                        <CodeBlock
                            code={CodeBlockData[1]}
                            codeColor="text-gradient-blue-700"
                            gradientColor="blue-500"
                            bgColor="yellow"
                        />
                    </figure>

                    <InfoCard
                        paragraph="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        button1="Continue Lesson"
                        button2="Learn More"
                    >
                        Start <span className="txt-gradient-blue">coding in seconds</span>
                    </InfoCard>
                </section>
            </div>

            {/* Section 5 */}
            <div className="relative bg-richblack-900 flex flex-col justify-center items-center">
                <div className=" w-full flex">
                    <section className="self-center bg-richblack-900 mx-4 flex flex-col justify-center items-center w-full my-24 space-y-2">
                        <h1 className="text-richblack-5 text-4xl text-center font-semibold">
                            Unlock the <span className="txt-gradient-blue">Power of Code</span>
                        </h1>

                        <h6 className="text-richblack-300 text-center">
                            Learn to Build Anything You Can Imagine
                        </h6>
                    </section>
                </div>
                <section className="relative mb-10">
                    <div className="flex flex-col self-center gap-16">
                        <div className="flex flex-wrap justify-center flex-row gap-4 md:gap-9">
                            {LessonCardData.map((lesson, index) => (
                                <LessonCard key={index} {...lesson} />
                            ))}
                        </div>

                        <div className="self-center flex flex-row gap-4">
                            <Button
                                link="/"
                                bgColor="bg-yellow-50"
                                textColor="text-richblack-900"
                                shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                            >
                                Explore Full Catalogue
                                <FiArrowRight className="inline ml-2 mb-0.5"></FiArrowRight>
                            </Button>

                            <Button
                                link="/"
                                bgColor="bg-richblack-800"
                                textColor="text-richblack-5"
                                shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 6 */}
            <div className="flex flex-col justify-center items-center py-10 px-10 md:py-20 md:px-28">
                <section>
                    <div className="grid max-sm:grid-rows-2 sm:grid-cols-2 sm:gap-10 items-center">
                        <h1 className="text-richblack-900 text-2xl font-semibold">
                            Get the skills you need for a{' '}
                            <span className="txt-gradient-blue">job that is in demand.</span>
                        </h1>
                        <span className="">
                            <h6 className="mb-5">
                                The modern StudyNotion is the dictates its own terms. Today, to be a
                                competitive specialist requires more than professional skills.
                            </h6>

                            <Button
                                link="/"
                                bgColor="bg-yellow-50"
                                textColor="text-richblack-900"
                                shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                            >
                                Learn More
                                <FiArrowRight className="inline ml-2 mb-0.5"></FiArrowRight>
                            </Button>
                        </span>
                    </div>

                    <div className="mt-20">
                        <TimeLine />
                    </div>
                </section>
            </div>

            {/* Section 7 */}
            <div className="flex flex-col justify-center items-center">
                <LearningLanguage />
            </div>

            {/* Section 8 */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-richblack-900">
                <Instructor />
            </div>

            {/* Section 9 */}
            <div className="flex flex-col justify-center items-center bg-richblack-900">
                <Review />
            </div>
        </main>
    );
}
