import { describe, expect, test } from 'vitest';
import { mockUserFormData } from '../../__mocks__/user-mock-data';
import { signUp } from './auth.service';
import { mockedAxios } from '../../utils';
import axios from 'axios';

describe('AuthService, Unit Test', () => {
    describe('Given signUp, when called', () => {
        test('Then it should hit correct end-point, with correct data', async () => {
            const data = mockUserFormData();

            mockedAxios.post.mockResolvedValue({
                data: {
                    data,
                },
            });

            const res = await signUp(data);
            expect(axios.post).toHaveBeenCalledWith(
                'http://raktim-backend:8080/api/auth/signup',
                data,
            );
            expect(res).toEqual({
                data,
            });
        });
    });
});
