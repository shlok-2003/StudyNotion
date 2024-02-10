import knowProgress from '/assets/Images/Know_your_progress.png';
import compare from '/assets/Images/Compare_with_others.png';
import planLesson from '/assets/Images/Plan_your_lessons.png';
import { Button } from '.';
import { FiArrowRight } from 'react-icons/fi';

export default function LearningLanguage() {
    return (
        <section className="px-10 py-10 lg:py-24 lg:px-28 space-y-14">
            <div className="flex flex-col justify-between items-center space-y-1">
                <h1 className="text-4xl font-bold text-center">
                    Your swiss knife for{' '}
                    <span className="txt-gradient-blue">learning any language</span>
                </h1>
                <h6 className="text-center text-richblack-900">
                    Using spin making learning multiple languages easy. with 20+ languages realistic
                    voice-over, progress tracking, custom schedule and more.
                </h6>
            </div>

            <section className="flex flex-wrap lg:-space-x-28 justify-center items-center [&>*]:aspect-square">
                <img src={knowProgress} />
                <img src={compare} />
                <img src={planLesson} />
            </section>

            <div className="flex justify-center">
                <Button
                    link="/"
                    bgColor="bg-yellow-50"
                    textColor="text-richblack-900"
                    shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                >
                    Learn More
                    <FiArrowRight className="inline ml-2 mb-0.5"></FiArrowRight>
                </Button>
            </div>
        </section>
    );
}
