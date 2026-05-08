import { redirect } from 'react-router';
import { getAuthToken } from '../auth-storage';
import { PATH } from '../routing/paths';

const publicOnlyLoader = () => {
    const token = getAuthToken();

    if (token) {
        throw redirect(PATH.PROFILE);
    }

    return null;
};

export default publicOnlyLoader;
