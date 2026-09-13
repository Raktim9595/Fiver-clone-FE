import { http, HttpResponse } from 'msw';
import { mockRoleList } from '../data/info-mock.data';

export const getUserRolesHandler = http.get('http://localhost:8080/api/roles', () => {
    return HttpResponse.json({
        data: mockRoleList(),
    });
});
