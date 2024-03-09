import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const gradientVariants = cva(
    'absolute opacity-90 rounded-full aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    {
        variants: {
            variant: {
                primary:
                    'shadow-blue-500 sm:shadow-blue-500 md:shadow-blue-500 lg:shadow-blue-500',
                secondary:
                    'shadow-yellow-500 sm:shadow-yellow-500 md:shadow-yellow-500 lg:shadow-yellow-500',
                sunset: 'shadow-orange-500 sm:shadow-orange-500 md:shadow-orange-500 lg:shadow-orange-500',
                caribbean:
                    'shadow-caribbean-green-500 sm:shadow-caribbean-green-500 md:shadow-caribbean-green-500 lg:shadow-caribbean-green-500',
            },
            background: {
                default: 'bg-transparent',
                white: 'bg-white',
                'light-green': 'bg-caribbean-green-200',
                'dark-green': 'bg-caribbean-green-500',
                'light-yellow': 'bg-yellow-200',
                'dark-yellow': 'bg-yellow-500',
                'light-pink': 'bg-rich-pink-200',
                'dark-pink': 'bg-rich-pink-500',
            },
            size: {
                small: 'h-1/4',
                medium: 'h-1/2',
                large: 'h-3/4',
            },
            shadow: {
                default: 'shadow-[0_0_70px_40px]',
                medium: 'shadow-[0_0_100px_60px]',
                large: 'shadow-[0_0_500px_130px]',
            },
        },
        defaultVariants: {
            variant: 'primary',
            background: 'default',
            size: 'medium',
            shadow: 'default',
        },
    },
);

export interface GradientProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof gradientVariants> {}

const Gradient = React.forwardRef<HTMLSpanElement, GradientProps>(
    (
        { className, variant, background, size, shadow, children, ...props },
        ref,
    ) => {
        const Comp = 'span';

        return (
            <Comp
                ref={ref}
                className={cn(
                    gradientVariants({
                        variant,
                        background,
                        size,
                        shadow,
                        className,
                    }),
                )}
                {...props}
            >
                {children}
            </Comp>
        );
    },
);

export { Gradient, gradientVariants };
