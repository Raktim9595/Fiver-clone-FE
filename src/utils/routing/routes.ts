import { createBrowserRouter } from 'react-router';
import { SignUpPage } from '../../pages/signup-page';
import App from '../../app';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '/signup',
        Component: SignUpPage,
    },
]);

export default router;
