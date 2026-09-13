import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mockedAxios } from '../../utils/test-setups';
import { mockSellerApplicationData } from '../../__mocks__/data/become-a-seller-mock.data';
import { startSellerApplication } from './become-a-seller.service';
import axios from 'axios';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given become a seller services, Unit Test', () => {
    describe('Given method startSellerApplication, When called', () => {
        describe('And the request is a success', () => {
            test('Then it should hit proper end point and return proper data', async () => {
                const data = mockSellerApplicationData();
                const userId = data.user.id;
                mockedAxios.post.mockResolvedValue({
                    data: {
                        data,
                    },
                });

                const res = await startSellerApplication({
                    userId,
                });

                expect(axios.post).toHaveBeenCalledWith(
                    'http://raktim-backend:8080/api/seller-application',
                    {
                        userId,
                    },
                );

                expect(res.data).toStrictEqual(data);
            });
        });
    });
});
