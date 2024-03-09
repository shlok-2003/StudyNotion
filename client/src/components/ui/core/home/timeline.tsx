import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { cn } from '@/lib/utils';

import { Box } from '@components/common/containers';

import TimeLineImage from '/assets/Images/TimelineImage.png';
import Logo1 from '/assets/TimeLineLogo/Logo1.svg';
import Logo2 from '/assets/TimeLineLogo/Logo2.svg';
import Logo3 from '/assets/TimeLineLogo/Logo3.svg';
import Logo4 from '/assets/TimeLineLogo/Logo4.svg';
import Typography from '@components/common/typography';

const TimeLine = [
    {
        Logo: Logo1,
        Heading: 'Leadership',
        Description: 'Fully committed to the success company',
    },
    {
        Logo: Logo2,
        Heading: 'Responsibility',
        Description: 'Students will always be our top priority',
    },
    {
        Logo: Logo3,
        Heading: 'Flexibility',
        Description: 'The ability to switch is an important skills',
    },
    {
        Logo: Logo4,
        Heading: 'Solve the problem',
        Description: 'Code your way to a solution',
    },
];

export interface TimeLineProps extends React.HTMLAttributes<HTMLElement> {}

export const Timeline = React.forwardRef<HTMLElement, TimeLineProps>(
    ({ className, children, ...props }, ref) => {
        const Comp = 'figure';

        return (
            <Comp ref={ref} {...props} className={cn(className)}>
                <Box className="mb-20 flex flex-col items-center gap-20 lg:flex-row">
                    <Box className="flex flex-col gap-14 lg:w-[45%] lg:gap-3">
                        {TimeLine.map((ele, i) => {
                            return (
                                <Box className="flex flex-col lg:gap-3" key={i}>
                                    <Box className="flex gap-6" key={i}>
                                        <Box className="flex aspect-square h-[52px] items-center justify-center rounded-full bg-white shadow-[0_0_62px_0] shadow-[#00000012]">
                                            <img
                                                src={ele.Logo}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="h2"
                                                className="border-none text-[18px] font-semibold"
                                            >
                                                {ele.Heading}
                                            </Typography>
                                            <Typography
                                                variant="p"
                                                className="text-base"
                                            >
                                                {ele.Description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        className={`${
                                            TimeLine.length - 1 === i
                                                ? 'hidden'
                                                : 'lg:block'
                                        } border-rich-black-900 bg-rich-black-400/0 h-14 w-[26px] border-r border-dotted`}
                                    ></Box>
                                </Box>
                            );
                        })}
                    </Box>
                    <Box className="relative h-fit w-fit shadow-[0px_0px_30px_0px] shadow-blue-200">
                        <Box className="bg-caribbean-green-700 absolute flex flex-col gap-4 py-5 uppercase text-white lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] lg:flex-row lg:gap-0 lg:py-10 ">
                            <Box className="border-caribbean-green-300 flex items-center gap-5 px-7 lg:border-r lg:px-14">
                                <CountUp start={0} end={10} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <Box
                                                className="w-[75px] border-none p-0 text-3xl font-bold"
                                                ref={
                                                    countUpRef as React.RefObject<HTMLDivElement>
                                                }
                                            />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <Typography
                                    variant="h3"
                                    className="text-caribbean-green-300 w-[75px] text-sm"
                                >
                                    Years experiences
                                </Typography>
                            </Box>

                            <Box className="flex items-center gap-5 px-7 lg:px-14">
                                <CountUp start={0} end={250} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <Box
                                                className="w-[75px] border-none p-0 text-3xl font-bold"
                                                ref={
                                                    countUpRef as React.RefObject<HTMLDivElement>
                                                }
                                            />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <Typography
                                    variant="h3"
                                    className="text-car text-caribbean-green-300 w-[75px] text-sm"
                                >
                                    types of courses
                                </Typography>
                            </Box>
                        </Box>
                        <img
                            src={TimeLineImage}
                            alt="timeline image"
                            className="shadow-caribbean-green-700 h-[400px] object-cover shadow-[20px_20px_0px_0px] max-sm:object-right lg:h-fit"
                            loading="lazy"
                        />
                    </Box>
                </Box>
                {children}
            </Comp>
        );
    },
);
export default Timeline;
