import { describe, expect, test } from 'vitest';
import { getCurrentUser, getUserById } from './user.services';
import axios from 'axios';
import { mockUserDataFromServer } from '../../__mocks__/user-mock.data';
import { mockedAxios } from '../../utils/test-setups';

describe('UserService, Unit Test', () => {
    describe('Given getCurrentUser, when called', () => {
        test('Then it should hit correct end-point', async () => {
            const user = mockUserDataFromServer();

            mockedAxios.get.mockResolvedValue({
                data: {
                    data: user,
                },
            });

            const res = await getCurrentUser();
            expect(axios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/user/me');
            expect(res).toEqual({ data: user });
        });
    });

    describe('Given getUserById, when called', () => {
        test('Then it should hit correct end-point', async () => {
            const userId = '12345';
            const user = mockUserDataFromServer();

            mockedAxios.get.mockResolvedValue({
                data: {
                    data: user,
                },
            });

            const res = await getUserById(userId);
            expect(axios.get).toHaveBeenCalledWith(`http://raktim-backend:8080/api/user/${userId}`);
            expect(res).toEqual({ data: user });
        });
    });
});
