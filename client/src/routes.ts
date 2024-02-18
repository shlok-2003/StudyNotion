import { Main } from '@/layouts';
import { Home, NotFound, About, Contact } from '@/pages';

export interface RouteProps {
    path: string;
    index?: boolean | undefined;
    element: React.ReactNode;
    children?: Array<RouteProps>;
}

const routes: Array<RouteProps> = [
    {
        path: '/',
        element: typeof Main,
        children: [
            {
                path: '/',
                element: typeof Home,
            },
            {
                path: '*',
                element: typeof NotFound,
            },
            {
                path: '/about',
                element: typeof About,
            },
            {
                path: '/contact',
                element: typeof Contact,
            },
        ],
    },
];

export default routes;

