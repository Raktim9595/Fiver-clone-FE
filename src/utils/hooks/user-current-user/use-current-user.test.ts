import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../test-wrapper';
import useCurrentUser from './user-current-user';
import { mockedAxios, mockUseOutletContext } from '../../test-setups';
import axios from 'axios';
import { waitFor } from '@testing-library/react';
import { mockUserDataFromServer } from '../../../__mocks__/data/user-mock.data';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given useCurrentUser hook, Unit Test', () => {
    describe('When rendered', () => {
        describe('And initial user is not passed', () => {
            test('Then it should fetch the user from the server', async () => {
                mockUseOutletContext.mockReturnValue({
                    user: {
                        data: undefined,
                    },
                });

                const mockeduser = mockUserDataFromServer();
                mockedAxios.get.mockResolvedValue({
                    data: {
                        data: mockeduser,
                    },
                });

                const { result } = renderHookWithWrapper(() => useCurrentUser());

                await waitFor(() => {
                    expect(result.current.user).toStrictEqual(mockeduser);
                });

                expect(axios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/user/me');
            });
        });

        describe('And initial user is passed', () => {
            test('Then it should not fetch the user from the server', async () => {
                const mockedUser = mockUserDataFromServer();
                mockUseOutletContext.mockReturnValue({
                    user: {
                        data: mockedUser,
                    },
                });

                const { result } = renderHookWithWrapper(() => useCurrentUser());

                await waitFor(() => {
                    expect(result.current.user).toStrictEqual(mockedUser);
                });

                expect(axios.get).not.toHaveBeenCalled();
            });
        });
    });
});
