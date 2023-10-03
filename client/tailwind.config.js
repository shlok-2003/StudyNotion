import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            playfair: ['Edu SA Beginner', ...defaultTheme.fontFamily.sans],
            mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        },
        colors: {
            white: '#fff',
            black: '#000',
            transparent: '#ffffff00',
        },
        extend: {},
    },
    plugins: [],
};
