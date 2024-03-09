import { RouteObject } from 'react-router-dom';
import { Main, Dashboard } from '@/layouts';
import {
    Home,
    NotFound,
    About,
    Contact,
    Login,
    SignUp,
    Verify,
    NewPassword,
    ResetPassword,
} from '@/pages';

const routes: RouteObject[] = [
    {
        path: '/',
        element: typeof Main,
        children: [
            {
                path: '/',
                element: typeof Home,
                index: true,
            },
            {
                path: '/about',
                element: typeof About,
            },
            {
                path: '/contact',
                element: typeof Contact,
            },
            {
                path: '/login',
                element: typeof Login,
            },
            {
                path: '/signup',
                element: typeof SignUp,
            },
            {
                path: '/verify',
                element: typeof Verify,
            },
            {
                path: '/forgot-password',
                element: typeof NewPassword,
            },
            {
                path: '/reset-password',
                element: typeof ResetPassword,
            },
            {
                path: '*',
                element: typeof NotFound,
            },
        ],
    },
    {
        path: '/dashboard',
        element: typeof Dashboard,
    },
];

export default routes;

export interface linkProps {
    path: string;
    name: string;
    children?: Array<linkProps>;
}

//! Navbar Link
const navLink: Array<linkProps> = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/catalog',
        name: 'Catalog',
        children: [
            {
                path: '/blockchain',
                name: 'Blockchain',
            },
            {
                path: '/android',
                name: 'Android',
            },
            {
                path: '/web-development',
                name: 'Web Development',
            },
            {
                path: '/data-science',
                name: 'Data Science',
            },
            {
                path: '/ai',
                name: 'Artificial Intelligence',
            },
            {
                path: '/dsa',
                name: 'Data Structures and Algorithms',
            },
            {
                path: '/devops',
                name: 'DevOps',
            },
            {
                path: '/ml',
                name: 'Machine Learning',
            },
        ],
    },
    {
        path: '/about',
        name: 'About Us',
    },
    {
        path: '/contact',
        name: 'Contact Us',
    },
];

interface footerLinkProps {
    name: string;
    children: Array<linkProps>;
}

const footerLink: Array<footerLinkProps> = [
    {
        name: 'Subjects',
        children: [
            { name: 'Algorithms', path: '/al' },
            { name: 'Cloud Computing', path: '/cloud-computing' },
            { name: 'Code Foundations', path: '/code-foundations' },
            { name: 'Computer Science', path: '/computer-science' },
            { name: 'Cybersecurity', path: '/cybersecurity' },
            { name: 'Data Analytics', path: '/data-analytics' },
            { name: 'Data Science', path: '/data-science' },
            { name: 'Data Visualization', path: '/data-visualization' },
            { name: 'Developer Tools', path: '/developer-tools' },
            { name: 'DevOps', path: '/devops' },
            { name: 'Game Development', path: '/game-development' },
            { name: 'IT', path: '/it' },
            { name: 'Machine Learning', path: '/machine-learning' },
            { name: 'Math', path: '/math' },
            { name: 'Mobile Development', path: '/mobile-development' },
            { name: 'Web Design', path: '/web-design' },
            { name: 'Web Development', path: '/web-development' },
        ],
    },
    {
        name: 'Languages',
        children: [
            { name: 'Bash', path: '/bash' },
            { name: 'C++', path: '/c++' },
            { name: 'C#', path: '/csharp' },
            { name: 'Go', path: '/go' },
            { name: 'HTML & CSS', path: '/html-css' },
            { name: 'Java', path: '/java' },
            { name: 'JavaScript', path: '/javascript' },
            { name: 'Kotlin', path: '/kotlin' },
            { name: 'PHP', path: '/php' },
            { name: 'Python', path: '/python' },
            { name: 'R', path: '/r' },
            { name: 'Ruby', path: '/ruby' },
            { name: 'SQL', path: '/sql' },
            { name: 'Swift', path: '/swift' },
        ],
    },
    {
        name: 'Career building',
        children: [
            { name: 'Career paths', path: '/career-paths' },
            { name: 'Career services', path: '/career-services' },
            { name: 'Interview prep', path: '/interview-prep' },
            {
                name: 'Professional certification',
                path: '/professional-certification',
            },
            { name: 'Full Catalog', path: '/full-catalog' },
            { name: 'Beta Content', path: '/beta-content' },
        ],
    },
];

export { navLink, footerLink };
