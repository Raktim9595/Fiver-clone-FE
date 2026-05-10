import { describe, expect, test } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { useNavbar } from './use-navbar';
import { mockGetAuthToken, mockNavigate, mockRemoveAuthToken } from '../../utils/test-setups';
import { act } from 'react';

describe('useNavbar, Unit Test', () => {
    describe('When initialized', () => {
        test('Then it should initialise with proper values', () => {
            const { result } = renderHookWithWrapper(() => useNavbar());

            expect(result.current.navigate).toBeDefined();
            expect(result.current.isLoggedin).toBe(false);
            expect(result.current.logOut).toBeDefined();
        });

        describe('And authToken is present', () => {
            test('Then it should set isLoggedin to true', () => {
                mockGetAuthToken.mockReturnValue('token');
                const { result } = renderHookWithWrapper(() => useNavbar());

                expect(result.current.isLoggedin).toBe(true);
            });
        });
    });

    describe('When called logOut', () => {
        test('Then it should call removeAuthToken and navigate to login page', () => {
            mockGetAuthToken.mockReturnValue('token');
            const { result } = renderHookWithWrapper(() => useNavbar());

            act(() => {
                result.current.logOut();
            });

            expect(mockRemoveAuthToken).toHaveBeenCalledTimes(1);
            expect(mockNavigate).toHaveBeenCalledWith('/login');
        });
    });
});
