export const AUTH_TOKEN = 'AUTH_TOKEN';

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN);
export const setAuthToken = (token: string) => localStorage.setItem(AUTH_TOKEN, token);
export const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN);
