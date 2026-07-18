import { http, HttpResponse } from 'msw';
import { mockCountriesList } from '../data/info-mock.data';

export const getCountriesHandler = http.get('http://localhost:8080/api/info/country', () => {
    return HttpResponse.json({
        data: mockCountriesList(),
    });
});
