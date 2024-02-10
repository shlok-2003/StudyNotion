import Button from './Button.tsx';
import { FiArrowRight } from 'react-icons/fi';

interface InfoCardProps {
    children: React.ReactNode;
    paragraph: string;
    button1: string;
    button2: string;
}

export default function InfoCard({ children, paragraph, button1, button2 }: InfoCardProps) {
    return (
        <div className="space-y-3 grow max-w-[400px] mx-4 lg:m-8">
            <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-semibold text-richblack-5">
                {children}
            </h1>
            <h6 className="text-richblack-300 text-base">{paragraph}</h6>

            <div className="flex flex-row gap-6">
                <Button
                    link="/"
                    bgColor="bg-yellow-50"
                    textColor="text-richblack-900"
                    shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                >
                    {button1}
                    <FiArrowRight className="inline ml-2 mb-0.5"></FiArrowRight>
                </Button>

                <Button
                    link="/"
                    bgColor="bg-richblack-800"
                    textColor="text-richblack-5"
                    shadow="shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]"
                >
                    {button2}
                </Button>
            </div>
        </div>
    );
}
