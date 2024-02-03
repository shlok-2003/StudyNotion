import { twMerge } from 'tailwind-merge';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';

interface GradientProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof GradientVariants> {
    children?: React.ReactNode;
}

export default function Gradient({ className, gradientColor, bgColor, ...props }: GradientProps) {
    const tw = twMerge(clsx(GradientVariants({ gradientColor, bgColor }), className));

    return <span className={tw} {...props}></span>;
}

const GradientVariants = cva(
    'absolute opacity-90 rounded-full aspect-square h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    {
        variants: {
            gradientColor: {
                'blue-500': 'shadow-gradient-blue-500 sm:shadow-gradient-blue-500 md:shadow-gradient-blue-500 lg:shadow-gradient-blue-500 xl:shadow-gradient-blue-500',
                'green-500': 'shadow-gradient-green-500 sm:shadow-gradient-green-500 md:shadow-green-500 lg:shadow-caribbean-green-500 xl:shadow-caribbean-green-500',
                'green-200': 'shadow-gradient-caribbean-green-200 sm:shadow-gradient-caribbean-green-200 md:shadow-gradient-caribbean-green-200 lg:shadow-caribbean-green-200 xl:shadow-caribbean-green-200',
                'yellow-50': 'shadow-yellow-50 sm:shadow-yellow-50 md:shadow-yellow-50 lg:shadow-yellow-50 xl:shadow-yellow-50',
            },
            bgColor: {
                'green-500': 'bg-caribbean-green-500',
                'green-200': 'bg-caribbean-green-200',
                pink: 'bg-pink-500',
                yellow: 'bg-yellow-50',
            },
        },
        defaultVariants: {
            gradientColor: 'blue-500',
            bgColor: 'pink',
        },
    }
);
