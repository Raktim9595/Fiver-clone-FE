import { describe, expect, test } from 'vitest';
import { mockGetAuthToken } from '../test-setups';
import publicOnlyLoader from './public-only-loader';

describe('publicOnlyLoader, Unit Test', () => {
    test.only('When token exists, then it should redirect to profile page', () => {
        mockGetAuthToken.mockReturnValue('token');

        try {
            publicOnlyLoader();
        } catch (error) {
            expect(error).toBeInstanceOf(Response);

            const response = error as Response;

            expect(response.status).toBe(302);
            expect(response.headers.get('Location')).toBe('/profile');
        }
    });

    test('When token does not exist, Then it should return null', () => {
        mockGetAuthToken.mockReturnValue(null);

        const result = publicOnlyLoader();

        expect(result).toBeNull();
    });
});
