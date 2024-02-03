import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    bgColor: string;
    textColor: string;
    shadow: string;
    link: string;
}

export default function Button({ children, bgColor, textColor, shadow, link }: ButtonProps) {
    return (
        <Link
            to={link}
            className={`${bgColor} ${textColor} text-center max-[350px]:text-xs text-sm sm:text-base lg:text-md rounded-lg px-4 py-3 md:px-6 md:py-3 font-bold hover:scale-95 hover:shadow-none transition-all duration-300 ${shadow}`}
            aria-label={children?.toString()}
        >
            {children}
        </Link>
    );
}
