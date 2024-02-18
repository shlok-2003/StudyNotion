import React from 'react';

import { Outlet } from 'react-router';
import { Header, Footer } from '@components/core/index';

export default function Main() {
    return (
        <main className="relative">
            <Header />
            <main className="[&>*]:font-sans">
                <Outlet />
            </main>
            <Footer />
        </main>
    );
}
