import { Outlet, Navigate } from 'react-router';
import { DashboardBar, Sidebar } from '@components/core/index';

import useRouteMatch from '@/hooks/useRouteMatch';

export default function Dashboard() {
    const path = useRouteMatch('/dashboard');

    if (path === true) {
        return <Navigate to="/dashboard/my-profile" />;
    }

    return (
        <main className="relative">
            <DashboardBar />
            <main className="flex flex-row [&>*]:font-sans">
                <Sidebar />
                <Outlet />
            </main>
        </main>
    );
}
