import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { useSidebar } from './use-sidebar';
import { mockNavigate, mockUseLocation } from '../../utils/test-setups';
import { act } from 'react';

describe('Given useSideBar hook, Unit Test', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            mockUseLocation.mockReturnValue({
                pathname: '/profile',
            });
            const { result } = renderHookWithWrapper(() => useSidebar());

            expect(result.current).toBeDefined();
            expect(result.current).toStrictEqual({
                currentPage: 'profile',
                navigate: mockNavigate,
            });
        });
    });

    describe('When called naviage', () => {
        test('Then it should redirect to navigate', () => {
            mockUseLocation.mockReturnValue({
                pathname: '/profile',
            });
            const { result } = renderHookWithWrapper(() => useSidebar());

            act(() => {
                result.current.navigate('/home');
            });

            expect(mockNavigate).toHaveBeenCalledWith('/home');
        });
    });
});
