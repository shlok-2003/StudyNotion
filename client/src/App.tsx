import React, { lazy, Suspense } from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromChildren,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { Box } from '@components/common/containers';
import { ScrollToTop } from '@components/common/scroll-to-top';

import { Main, Dashboard } from '@/layouts';

const About = lazy(() => import('@/pages/about'));
const Home = lazy(() => import('@/pages/home'));
const Contact = lazy(() => import('@/pages/contact'));
const Login = lazy(() => import('@/pages/auth/login'));
const SignUp = lazy(() => import('@/pages/auth/signup'));
const Verify = lazy(() => import('@/pages/auth/verify'));
const NewPassword = lazy(() => import('@/pages/auth/new-password'));
const ResetPassword = lazy(() => import('@/pages/auth/reset-password'));

const MyProfile = lazy(() => import('@/pages/dashboard/my-profile'));

const NotFound = lazy(() => import('@/pages/not-found'));

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Suspense
            fallback={
                <Box className="bg-rich-black-900 flex min-h-screen items-center justify-center">
                    <ColorRing
                        colors={[
                            '#ffffff',
                            '#ffffff',
                            '#ffffff',
                            '#ffffff',
                            '#ffffff',
                        ]}
                    />
                </Box>
            }
        >
            {children}
        </Suspense>
    );
};

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route>
            <Route path="/" element={<Main />}>
                <Route
                    index
                    element={
                        <Loading>
                            <Home />
                        </Loading>
                    }
                />
                <Route
                    path="about"
                    element={
                        <Loading>
                            <About />
                        </Loading>
                    }
                />
                <Route
                    path="contact"
                    element={
                        <Loading>
                            <Contact />
                        </Loading>
                    }
                />
                <Route
                    path="login"
                    element={
                        <Loading>
                            <Login />
                        </Loading>
                    }
                />
                <Route
                    path="signup"
                    element={
                        <Loading>
                            <SignUp />
                        </Loading>
                    }
                />
                <Route
                    path="verify"
                    element={
                        <Loading>
                            <Verify />
                        </Loading>
                    }
                />
                <Route
                    path="forgot-password"
                    element={
                        <Loading>
                            <NewPassword />
                        </Loading>
                    }
                />
                <Route
                    path="reset-password"
                    element={
                        <Loading>
                            <ResetPassword />
                        </Loading>
                    }
                />
            </Route>

            <Route path="dashboard" element={<Dashboard />}>
                <Route
                    path="my-profile"
                    element={
                        <Loading>
                            <MyProfile />
                        </Loading>
                    }
                />
            </Route>

            <Route
                path="*"
                element={
                    <Loading>
                        <NotFound />
                    </Loading>
                }
            />
        </Route>,
    ),
);

export default function App() {
    return (
        <React.Fragment>
            <ScrollToTop />
            <RouterProvider router={router} />
            <Toaster position="bottom-right" />
        </React.Fragment>
    );
}
