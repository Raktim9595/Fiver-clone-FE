import { http, HttpResponse } from 'msw';
import { mockSearchFileResponse } from '../data/file-upload-mock.data';

export const filesSearchHandler = http.post('http://localhost:8080/api/files/search', () => {
    return HttpResponse.json({
        data: [mockSearchFileResponse(), mockSearchFileResponse()],
    });
});
