import { ACCOUNT_TYPE } from '@/lib/constants';
import { IconType } from 'react-icons/lib';
import {
    VscAccount,
    VscHistory,
    VscAdd,
    VscDashboard,
    VscMortarBoard,
    VscVm,
    VscBook,
    VscCallOutgoing,
} from '@/icons';
export interface DashboardLinkProps {
    name: string;
    path: string;
    icon?: IconType;
    type?: string;
    children?: DashboardLinkProps[];
}

const sidebarLinks: DashboardLinkProps[] = [
    {
        name: 'My Profile',
        path: '/dashboard/my-profile',
        icon: VscAccount,
    },
    {
        name: 'Instructor Board',
        path: '/dashboard/instructor',
        type: ACCOUNT_TYPE.INSTRUCTOR,
        icon: VscDashboard,
    },
    {
        name: 'My Courses',
        path: '/dashboard/my-courses',
        type: ACCOUNT_TYPE.INSTRUCTOR,
        icon: VscVm,
    },
    {
        name: 'Add Course',
        path: '/dashboard/add-course',
        type: ACCOUNT_TYPE.INSTRUCTOR,
        icon: VscAdd,
    },
    {
        name: 'Enrolled Courses',
        path: '/dashboard/enrolled-courses',
        type: ACCOUNT_TYPE.STUDENT,
        icon: VscMortarBoard,
    },
    {
        name: 'Purchase History',
        path: '/dashboard/purchase-history',
        type: ACCOUNT_TYPE.STUDENT,
        icon: VscHistory,
    },
];

const mobileSidebarLink: DashboardLinkProps[] = [
    ...sidebarLinks,
    {
        path: '/catalog',
        name: 'Catalog',
        icon: VscBook,
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
        path: '/contact',
        name: 'Contact Us',
        icon: VscCallOutgoing,
    },
];

export { mobileSidebarLink };
export default sidebarLinks;
