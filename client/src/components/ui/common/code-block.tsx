import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { TypeAnimation } from 'react-type-animation';

import { Box } from '@/components/ui/common/containers';
import { Typography } from '@components/common/typography';

//! Affects are to be added

const codeBlockVariants = cva('text-lg', {
    variants: {
        variant: {
            base: 'scroll-m-20 font-mono font-extrabold text-base text-rich-black-50',
        },
        affects: {
            default: '',
        },
    },
    defaultVariants: {
        variant: 'base',
        affects: 'default',
    },
});

export interface CodeBlockProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof codeBlockVariants> {
    code: Array<string>;
}

const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
    ({ className, variant, affects, children, code, ...props }, ref) => {
        const codeLine: string = code.join('\n');
        const delay: number = 1000;

        return (
            <Box
                ref={ref}
                className={cn(
                    'relative z-10 flex w-full select-none flex-row border border-white border-opacity-20 p-2 backdrop-blur-3xl',
                )}
                {...props}
            >
                <Box>
                    {code.map((_, index) => (
                        <Typography
                            key={index}
                            variant="p"
                            className="pr-3 text-center text-base font-medium text-slate-600 max-sm:text-sm max-[400px]:text-xs"
                        >
                            {index + 1}
                        </Typography>
                    ))}
                </Box>
                <Box className="z-10">
                    <TypeAnimation
                        sequence={[codeLine, delay, ' ']}
                        wrapper="p"
                        cursor={true}
                        className={cn(
                            'max-sm:text-sm max-[400px]:text-xs',
                            codeBlockVariants({ variant, affects, className }),
                        )}
                        speed={60}
                        repeat={Infinity}
                        deletionSpeed={80}
                        style={{
                            whiteSpace: 'break-spaces',
                            display: 'block',
                        }}
                    />
                </Box>
                {children}
            </Box>
        );
    },
);

const CodePrimitive = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
    const Comp = 'section';

    return (
        <Comp className={cn('relative', { className })} {...props} ref={ref}>
            {children}
        </Comp>
    );
});

export { CodeBlock, CodePrimitive, codeBlockVariants };
