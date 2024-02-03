import { FiArrowRight } from 'react-icons/fi';
import { Button } from '.';
import Teacher from '/assets/Images/Instructor.png';

export default function Instructor() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-10 lg:py-24 lg:px-28 space-y-10">
            <div>
                <img src={Teacher} className="shadow-[-18px_-18px_0_0_rgba(255,255,255,0.9)]" />
            </div>
            <div className="flex flex-col justify-center items-start space-y-10">
                <span className="space-y-3 self-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                        Become an <span className="txt-gradient-blue">Instructor</span>
                    </h1>
                    <p className="text-richblack-300">
                        Instructors from around the world teach millions of students on StudyNotion.
                        We provide the tools and skills to teach what you love.
                    </p>
                </span>

                <Button
                    link="/"
                    bgColor="bg-yellow-50"
                    textColor="text-richblack-900"
                    shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                >
                    Start Teaching Today
                    <FiArrowRight className="mb-0.5 ml-2 inline transition-all duration-500 group-hover:text-white"></FiArrowRight>
                </Button>
            </div>
        </section>
    );
}
