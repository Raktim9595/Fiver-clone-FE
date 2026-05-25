import { BASE_URL } from './axios';

const END_POINTS = {
    SIGN_UP: `${BASE_URL}/auth/signup`,
    SIGN_IN: `${BASE_URL}/auth/signin`,
    CURRENT_USER: `${BASE_URL}/user/me`,
    USERS: (id: string) => `${BASE_URL}/user/${id}`,
};

export default END_POINTS;
