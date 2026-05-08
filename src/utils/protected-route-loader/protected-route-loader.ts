import { redirect } from 'react-router';
import { getAuthToken } from '../auth-storage';
import { PATH } from '../routing/paths';

const protectedRouteLoader = () => {
    const token = getAuthToken();

    if (!token) {
        throw redirect(PATH.LOGIN);
    }

    return null;
};

export default protectedRouteLoader;
