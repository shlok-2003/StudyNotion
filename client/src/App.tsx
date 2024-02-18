import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Main from '@/layouts/Main';
import { About, Home, Contact, NotFound } from '@/pages';
import React from 'react';

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
        </Route>,
    ),
);

export default function App() {
    return (
        <React.Fragment>
            <ToastContainer position="bottom-right" />
            <RouterProvider router={router} />
        </React.Fragment>
    );
}
