import { FiUsers } from 'react-icons/fi';
import { ImTree } from 'react-icons/im';
import { LessonCard as LessonCardProps } from '@/vite-env';

export default function LessonCard({ title, description, level, lessonNumber }: LessonCardProps) {
    return (
        <div className="group flex grow w-[350px] flex-col justify-between bg-richblack-800 hover:bg-white cursor-default transition-all duration-500 hover:shadow-[8px_8px_0_0_#FFD60A] hover:lg:shadow-[20px_20px_0_0_#FFD60A]">
            <div className="mx-6 py-8 space-y-3">
                <h1 className="text-xl font-semibold text-white group-hover:text-richblack-800">
                    {title}
                </h1>
                <h4 className="text-base text-richblack-200">{description}</h4>
            </div>

            <div className="flex flex-row justify-between mx-6 py-4 items-center  border-t border-dotted border-richblack-600">
                <figure className="space-x-2">
                    <FiUsers className="mb-0.5 inline text-richblack-300 group-hover:text-blue-500" />
                    <span className="text-base font-semibold lg:font-normal xl:font-semibold text-richblack-300 group-hover:text-blue-500">
                        {level}
                    </span>
                </figure>
                <figure className="space-x-2">
                    <ImTree className="mb-1 inline text-richblack-300 group-hover:text-blue-500" />
                    <span className="text-base font-semibold lg:font-normal xl:font-semibold text-richblack-300 group-hover:text-blue-500">
                        {lessonNumber} Lessons
                    </span>
                </figure>
            </div>
        </div>
    );
}
