import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { useProfilePage } from './use-profile-page';
import { mockedAxios, mockUseOutletContext } from '../../utils/test-setups';
import { mockUserDataFromServer } from '../../__mocks__/user-mock.data';
import { waitFor } from '@testing-library/react';
import axios from 'axios';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given useProfilePage hook, Unit Test', () => {
    const user = mockUserDataFromServer();
    describe('When renderred', () => {
        test('Then it should return the user data and loading state', async () => {
            mockUseOutletContext.mockReturnValue({
                user: {
                    data: user,
                },
            });

            mockedAxios.get.mockResolvedValue({
                data: {
                    data: user,
                },
            });

            const { result } = renderHookWithWrapper(() => useProfilePage());

            await waitFor(() => {
                expect(axios.get).toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/user/${user.id}`,
                );
            });

            expect(result.current).toEqual({
                user,
                isLoading: false,
            });
        });
    });
});
