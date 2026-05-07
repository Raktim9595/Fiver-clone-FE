import { describe, expect, test } from 'vitest';
import { mockLoginFormData, mockUserFormData } from '../../__mocks__/user-mock-data';
import { signin, signUp } from './auth.service';
import axios from 'axios';
import { mockedAxios } from '../../utils/test-setups';

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

    describe('Given signIn, when called', () => {
        test('Then it should hit correct end-point, with correct data', async () => {
            const data = mockLoginFormData();

            mockedAxios.post.mockResolvedValue({
                data: {
                    data,
                },
            });

            const res = await signin(data);
            expect(axios.post).toHaveBeenCalledWith(
                'http://raktim-backend:8080/api/auth/signin',
                data,
            );
            expect(res).toEqual({
                data,
            });
        });
    });
});
