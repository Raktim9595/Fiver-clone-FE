import { type NavigateFunction } from 'react-router';
import { type User } from '../../types/user.types';

export type UseNavbar = () => {
    navigate: NavigateFunction;
    isLoggedin: boolean;
    logOut: () => void;
};

export type NavbarProps = {
    user?: User;
};

export type NavbarViewProps = ReturnType<UseNavbar> & NavbarProps;
