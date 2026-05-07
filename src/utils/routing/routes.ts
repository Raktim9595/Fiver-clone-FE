import { createBrowserRouter } from 'react-router';
import { SignUpPage } from '../../pages/signup-page';
import App from '../../app';
import { LoginPage } from '../../pages/login-page';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/signup',
        Component: SignUpPage,
    },
    {
        path: '/login',
        Component: LoginPage,
    },
]);
