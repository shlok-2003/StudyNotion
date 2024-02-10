import { TypeAnimation } from 'react-type-animation';
import Gradient from './Gradient.tsx';

interface CodeBlockProps {
    code: string[];
    codeColor?: string;
    gradientColor?: 'green-500' | 'green-200' | 'blue-500' | 'yellow-50' | null | undefined;
    bgColor?: 'green-500' | 'green-200' | 'pink' | 'yellow' | null | undefined;
}

export default function CodeBlock({ code, codeColor, gradientColor, bgColor }: CodeBlockProps) {
    const codeLine: string = code.join('\n');
    const delay: number = 1000;

    return (
        <section className="relative">
            <div className="relative z-10 flex flex-row w-full backdrop-blur-3xl select-none p-2 border border-[rgba(255,255,255,0.22)]">
                <div>
                    {code.map((_, index) => (
                        <p key={index} className="text-richblack-5 text-center pr-3">
                            {index + 1}
                        </p>
                    ))}
                </div>
                <div className="z-10">
                    <TypeAnimation
                        sequence={[codeLine, delay, ' ']}
                        wrapper="p"
                        cursor={true}
                        className={`font-mono font-extrabold text-base ${
                            codeColor || 'text-richblack-50'
                        }`}
                        repeat={Infinity}
                        speed={60}
                        deletionSpeed={80}
                        style={{
                            whiteSpace: 'break-spaces',
                            display: 'block',
                        }}
                    />
                </div>
            </div>
            <Gradient className="shadow-[0_0_130px_30px_]" gradientColor={gradientColor} bgColor={bgColor}/>
        </section>
    );
}
