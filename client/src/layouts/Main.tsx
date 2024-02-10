import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '@/components/common/';

export default function Main() {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
}
