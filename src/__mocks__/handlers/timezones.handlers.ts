import { http, HttpResponse } from 'msw';
import { mockTimezonesList } from '../data/info-mock.data';

export const getTimeZonesHandler = http.get('http://localhost:8080/api/info/timezone', () => {
    return HttpResponse.json({
        data: mockTimezonesList(),
    });
});
