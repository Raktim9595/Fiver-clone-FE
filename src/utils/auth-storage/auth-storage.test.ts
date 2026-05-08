import { beforeEach, describe, expect, test } from 'vitest';
import { AUTH_TOKEN, getAuthToken, setAuthToken, removeAuthToken } from './auth-storage';

describe('auth storage utilities, Unit Test', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe('Given setAuthToken, when called', () => {
        test('Then it should store auth token', () => {
            setAuthToken('abc123');

            expect(localStorage.getItem(AUTH_TOKEN)).toBe('abc123');
        });
    });

    describe('Given getAuthToke, when called', () => {
        test('Then it should get auth token', () => {
            localStorage.setItem(AUTH_TOKEN, 'token123');

            expect(getAuthToken()).toBe('token123');
        });
    });

    describe('Given removeAuthToken, when called', () => {
        test('should remove auth token', () => {
            localStorage.setItem(AUTH_TOKEN, 'token123');

            removeAuthToken();

            expect(localStorage.getItem(AUTH_TOKEN)).toBeNull();
        });
    });
});
