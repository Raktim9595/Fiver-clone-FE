import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_BACKEND_URI + '/api';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
