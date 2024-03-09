import React from 'react';
import { cn } from '@/lib/utils';

import { Box } from '@components/common/containers';
import { Typography } from '@components/common/typography';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@components/common/accordion';

export interface QNAProps extends React.HTMLAttributes<HTMLDivElement> {
    data: Array<{ question: string; answer: string }>;
}

export const QNA = React.forwardRef<HTMLDivElement, QNAProps>(
    ({ data, className, children, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                className={cn(
                    'mx-4 max-w-[400px] grow space-y-3 lg:m-8',
                    className,
                )}
                {...props}
            >
                <Accordion type="single" collapsible>
                    {data.map((item, index) => (
                        <AccordionItem key={index}>
                            <AccordionTrigger>
                                <Typography
                                    variant="h5"
                                    className="text-rich-black-5"
                                >
                                    {item.question}
                                </Typography>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Typography
                                    variant="h6"
                                    className="text-rich-black-5"
                                >
                                    {item.answer}
                                </Typography>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {children}
            </Box>
        );
    },
);

export default QNA;
