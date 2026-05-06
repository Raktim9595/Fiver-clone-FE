import { createBrowserRouter } from 'react-router';
import { SignUpPage } from '../../pages/signup-page';
import App from '../../app';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/signup',
        Component: SignUpPage,
    },
]);
