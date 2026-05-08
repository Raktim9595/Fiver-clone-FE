import { createBrowserRouter } from 'react-router';
import { SignUpPage } from '../../pages/signup-page';
import App from '../../app';
import { LoginPage } from '../../pages/login-page';
import { ProfilePage } from '../../pages/profile';
import { protectedRouteLoader } from '../protected-route-loader';
import { ProtectedLayout } from '../../components/protected-layout';
import { publicOnlyLoader } from '../public-only-loader';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        loader: publicOnlyLoader,
        children: [
            {
                path: '/signup',
                Component: SignUpPage,
            },
            {
                path: '/login',
                Component: LoginPage,
            },
        ],
    },
    {
        loader: protectedRouteLoader,
        Component: ProtectedLayout,
        children: [
            {
                path: '/profile',
                Component: ProfilePage,
            },
        ],
    },
]);
