import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { useBecomeASeller } from './use-become-a-seller';
import { mockedAxios, mockNavigate, mockUseOutletContext } from '../../utils/test-setups';
import { mockUserDataFromServer } from '../../__mocks__/data/user-mock.data';
import { act, waitFor } from '@testing-library/react';
import { mockSellerApplicationData } from '../../__mocks__/data/become-a-seller-mock.data';

const userId = 'random-user-id';
const mockUser = mockUserDataFromServer({
    id: userId,
});

beforeEach(() => {
    vi.clearAllMocks();
    mockUseOutletContext.mockReturnValue({
        user: {
            data: mockUser,
        },
    });
});

describe('Given useBecomeASeller hook, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            mockUseOutletContext.mockReturnValue({
                user: {
                    data: undefined,
                },
            });
            const { result } = renderHookWithWrapper(() => useBecomeASeller());

            expect(result.current).toEqual({
                handleStartOnboarding: expect.any(Function),
                handleSaveForLater: expect.any(Function),
            });
        });
    });

    describe('When called handleStartOnboarding', () => {
        describe('And it is a success', () => {
            test('Then it should start the new seller application and redirect to the proper flow', async () => {
                mockedAxios.post.mockResolvedValue({
                    data: {
                        data: mockSellerApplicationData(),
                    },
                });

                const { result } = renderHookWithWrapper(() => useBecomeASeller());

                act(() => {
                    result.current.handleStartOnboarding();
                });

                await waitFor(() => {
                    expect(mockNavigate).toHaveBeenCalledWith('/seller-application/onboarding');
                });
                expect(mockedAxios.post).toHaveBeenCalledWith(
                    'http://raktim-backend:8080/api/seller-application',
                    {
                        userId,
                    },
                );
            });
        });

        describe('And there is an error', () => {
            test('Then it should show error notification and it should stay on the same page', async () => {});
        });
    });
});
