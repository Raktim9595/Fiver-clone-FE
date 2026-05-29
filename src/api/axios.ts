import axios from 'axios';
import { getAuthToken, removeAuthToken } from '../utils/auth-storage';

export const BASE_URL = import.meta.env.VITE_BACKEND_URI + '/api';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuthToken()}`,
    },
});

privateRequest.interceptors.response.use(
    (response) => response,
    (error) => {
        if (401 === error.response?.status) {
            removeAuthToken();
            location.reload();
        }
        return Promise.reject(error);
    },
);
