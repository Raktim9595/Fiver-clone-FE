import { type NavigateFunction } from 'react-router';

export type UseNavbar = () => {
    navigate: NavigateFunction;
    isLoggedin: boolean;
    logOut: () => void;
};

export type NavbarViewProps = ReturnType<UseNavbar>;
