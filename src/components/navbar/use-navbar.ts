import { useNavigate } from 'react-router';
import { getAuthToken, removeAuthToken } from '../../utils/auth-storage';
import { type UseNavbar } from './navbar.types';
import { PATH } from '../../utils/routing/paths';

export const useNavbar: UseNavbar = () => {
    const navigate = useNavigate();
    const token = getAuthToken();

    const logOut = () => {
        removeAuthToken();
        navigate(PATH.LOGIN);
    };

    return {
        navigate,
        isLoggedin: !!token,
        logOut,
    };
};
