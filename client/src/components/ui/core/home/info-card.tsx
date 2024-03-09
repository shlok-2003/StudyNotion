import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from '@/icons';
import { cn } from '@/lib/utils';

import { Box } from '@components/common/containers';
import { Button } from '@components/common/button';
import { Typography } from '@components/common/typography';

export interface infoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    paragraph: string;
    buttonLeft: string;
    buttonRight: string;
    linkLeft?: string;
    linkRight?: string;
}

export const InfoCard = React.forwardRef<HTMLDivElement, infoCardProps>(
    (
        {
            paragraph,
            buttonLeft,
            buttonRight,
            linkLeft = '/',
            linkRight = '/',
            className,
            children,
            ...props
        },
        ref,
    ) => {
        return (
            <Box
                ref={ref}
                className={cn(
                    'mx-4 max-w-[400px] grow space-y-3 lg:m-8',
                    className,
                )}
                {...props}
            >
                <Typography
                    variant="h3"
                    className="text-rich-black-5 font-semibold max-sm:text-center sm:text-xl md:text-3xl lg:text-4xl"
                >
                    {children}
                </Typography>
                <Typography
                    variant="h6"
                    className="text-rich-black-300 text-base max-sm:text-center"
                >
                    {paragraph}
                </Typography>

                <Box className="flex flex-col gap-6 max-sm:mx-10 sm:flex-row">
                    <Button
                        size="lg"
                        className="text-rich-black-900 bg-rich-yellow-50 font-bold shadow-[2px_2px_0_0_rgba(255,255,255,0.51)]"
                    >
                        <Link to={linkLeft}>
                            {buttonLeft}
                            <FiArrowRight className="mb-0.5 ml-2 inline"></FiArrowRight>
                        </Link>
                    </Button>

                    <Button
                        size="lg"
                        className="text-rich-black-5 bg-rich-black-800 font-bold shadow-[2px_2px_0_0_rgba(255,255,255,0.18)]"
                    >
                        <Link to={linkRight}>{buttonRight}</Link>
                    </Button>
                </Box>
            </Box>
        );
    },
);

export default InfoCard;
