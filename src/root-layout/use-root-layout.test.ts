import { describe, test } from 'vitest';
import { mockedAxios, mockGetAuthToken } from '../utils/test-setups';
import { renderHookWithWrapper } from '../utils/test-wrapper';
import { useRootLayout } from './use-root-layout';
import { waitFor } from '@testing-library/react';
import { expect } from 'storybook/test';
import axios from 'axios';
import { mockUserDataFromServer } from '../__mocks__/user-mock-data';

describe('useRootLayout, Unit Test', () => {
    describe('When initialized', () => {
        describe('And authToken is not present', () => {
            test('Then it should return proper values', async () => {
                mockGetAuthToken.mockReturnValue(null);

                const { result } = renderHookWithWrapper(() => useRootLayout());

                await waitFor(() => {
                    expect(result.current.isLoading).toBe(false);
                    expect(result.current.data).toBeUndefined();
                });

                expect(axios.get).not.toHaveBeenCalled();
                expect(mockGetAuthToken).toHaveBeenCalledTimes(1);
            });
        });

        describe('And authToken is present', () => {
            test('Then it should return proper values', async () => {
                const mockedUser = mockUserDataFromServer();
                mockGetAuthToken.mockReturnValue('token');
                mockedAxios.get.mockResolvedValue({
                    data: {
                        data: mockedUser,
                    },
                });

                const { result } = renderHookWithWrapper(() => useRootLayout());

                await waitFor(() => {
                    expect(result.current.isLoading).toBe(false);
                    expect(result.current.data?.data).toEqual(mockedUser);
                });

                expect(axios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/user/me');
                expect(mockGetAuthToken).toHaveBeenCalledTimes(1);
            });
        });
    });
});
