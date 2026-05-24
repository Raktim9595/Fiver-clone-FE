import { useNavigate, useLocation } from 'react-router';
import { type UseSideBar } from './sidebar.types';

export const useSidebar: UseSideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPage = location.pathname.split('/')[1].toLowerCase();

    return {
        currentPage,
        navigate,
    };
};
