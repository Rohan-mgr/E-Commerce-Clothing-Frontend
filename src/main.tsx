import React, { lazy, Suspense } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import GlobalLoader from './components/common/GlobalLoader';

const Signup = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/women',
        element: <Home />,
    },
    {
        path: '/men',
        element: <Home />,
    },
    {
        path: '/shop',
        element: <Home />,
    },
    {
        path: '/blog',
        element: <Home />,
    },
    {
        path: '/contact',
        element: <Home />,
    },
    {
        path: '/login',
        element: (
            <Suspense fallback={<GlobalLoader />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: '/register',
        element: (
            <Suspense fallback={<GlobalLoader />}>
                <Signup />
            </Suspense>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
