import { BASE_URL } from './axios';

const END_POINTS = {
    SIGN_UP: `${BASE_URL}/auth/signup`,
    SIGN_IN: `${BASE_URL}/auth/signin`,
    CURRENT_USER: `${BASE_URL}/user/me`,
    USERS: (id: string) => `${BASE_URL}/user/${id}`,
    UPLOAD_URL: `${BASE_URL}/files/upload-url`,
    FILE_UPLOAD_COMPLETE: (fileId: string) => `${BASE_URL}/files/${fileId}/complete`,
    FILE_UPLOAD_FAILED: (fileId: string) => `${BASE_URL}/files/${fileId}/failed`,
};

export default END_POINTS;
