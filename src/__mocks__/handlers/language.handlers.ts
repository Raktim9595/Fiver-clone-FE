import { http, HttpResponse } from 'msw';
import { mockLanguagesList } from '../data/info-mock.data';

export const getLanguagesHandler = http.get('http://localhost:8080/api/info/language', () => {
    return HttpResponse.json({
        data: mockLanguagesList(),
    });
});
