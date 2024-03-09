import { Link } from 'react-router-dom';

import { Typography } from '@components/common/typography';
import { Button } from '@components/common/button';
import { Glitter } from '@components/common/gradient-text';
import { Box, Section } from '@components/common/containers';

import { LearningGridData } from '@/data';

const LearningGrid = () => {
    return (
        <Section className="mx-auto mb-12 grid w-[350px] grid-cols-1 xl:w-fit xl:grid-cols-4">
            {LearningGridData.map((card, index) => {
                return (
                    <Box
                        key={index}
                        className={`${index === 0 && 'xl:col-span-2 xl:h-[294px]'}  ${
                            card.order % 2 === 1
                                ? 'bg-rich-black-700 h-[294px]'
                                : card.order % 2 === 0
                                  ? 'bg-rich-black-800 h-[294px]'
                                  : 'bg-transparent'
                        } ${card.order === 3 && 'xl:col-start-2'} ${card.highlight && 'max-sm:px-4'}`}
                    >
                        {card.order < 0 ? (
                            <Box className="flex flex-col gap-3 pb-10 xl:w-[90%] xl:pb-0">
                                <Box className="text-4xl font-semibold ">
                                    {card.title}{' '}
                                    <Glitter
                                        variant="green"
                                        direction="bottom-right"
                                    >
                                        {card.highlight}
                                    </Glitter>
                                </Box>
                                <Typography
                                    variant="p"
                                    className="text-rich-black-300 font-medium"
                                >
                                    {card.description}
                                </Typography>

                                <Box className="mt-2 w-fit">
                                    <Button>
                                        {card.link ? (
                                            <Link to={card.link}>
                                                {card.BtnText}
                                            </Link>
                                        ) : (
                                            card.BtnText
                                        )}
                                    </Button>
                                </Box>
                            </Box>
                        ) : (
                            <Box className="flex flex-col gap-8 p-8">
                                <Typography
                                    variant="h3"
                                    className="text-rich-black-5 text-lg"
                                >
                                    {card.title}
                                </Typography>

                                <Typography
                                    variant="p"
                                    className="text-rich-black-300 font-medium"
                                >
                                    {card.description}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                );
            })}
        </Section>
    );
};

export default LearningGrid;
