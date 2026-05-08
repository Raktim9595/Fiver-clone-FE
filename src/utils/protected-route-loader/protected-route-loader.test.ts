import { describe, expect, test, vi } from 'vitest';
import protectedRouteLoader from './protected-route-loader';
import { getAuthToken } from '../auth-storage';
import { mockGetAuthToken } from '../test-setups';

describe('protectedRouteLoader', () => {
    test('should return null when token exists', () => {
        mockGetAuthToken.mockReturnValue('token');

        const result = protectedRouteLoader();

        expect(result).toBeNull();
    });

    test('should redirect to login when token does not exist', () => {
        vi.mocked(getAuthToken).mockReturnValue(null);

        expect(() => protectedRouteLoader()).toThrow();
    });
});
