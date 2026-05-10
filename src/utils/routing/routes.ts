import { createBrowserRouter } from 'react-router';
import { SignUpPage } from '../../pages/signup-page';
import { LoginPage } from '../../pages/login-page';
import { ProfilePage } from '../../pages/profile-page';
import { protectedRouteLoader } from '../protected-route-loader';
import { ProtectedLayout } from '../../components/protected-layout';
import { publicOnlyLoader } from '../public-only-loader';
import HomePageView from '../../pages/home-page/home-page-view';
import { RootLayout } from '../../root-layout';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePageView,
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
        ],
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
]);
