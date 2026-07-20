import { http, HttpResponse } from 'msw';
import { mockUserDataFromServer } from '../data/user-mock.data';

export const getLoggedinUserHandler = http.get('http://localhost:8080/api/user/me', () => {
    return HttpResponse.json({
        data: mockUserDataFromServer(),
    });
});
