import ReactVisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

import { Box } from '@components/common/containers';
import { Typography } from '@components/common/typography';

const Stats = [
    { count: 500, label: 'Active Students' },
    { count: 10, label: 'Mentors' },
    { count: 100, label: 'Courses' },
    { count: 50, label: 'Ratings' },
];

const Stat = () => {
    return (
        <Box className="bg-rich-black-700">
            {/* Stats */}
            <Box className="mx-auto flex w-11/12 flex-col justify-between gap-10 text-white">
                <Box className="grid grid-cols-2 text-center md:grid-cols-4">
                    {Stats.map((data, index) => (
                        <Box key={index} className="flex flex-col py-10">
                            <Typography
                                variant="h4"
                                className="text-rich-black-5 text-3xl font-bold"
                            >
                                <CountUp
                                    duration={5}
                                    end={data.count}
                                    start={0}
                                    suffix="+"
                                >
                                    {({ countUpRef, start }) => (
                                        <ReactVisibilitySensor
                                            partialVisibility
                                            onChange={start}
                                            delayedCall
                                        >
                                            <Box
                                                ref={
                                                    countUpRef as React.RefObject<HTMLDivElement>
                                                }
                                                className="text-3xl font-bold"
                                            />
                                        </ReactVisibilitySensor>
                                    )}
                                </CountUp>
                            </Typography>
                            <Typography
                                variant="h5"
                                className="text-rich-black-500 text-base font-semibold"
                            >
                                {data.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Stat;
