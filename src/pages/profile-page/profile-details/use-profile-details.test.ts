import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../../utils/test-wrapper';
import { useProfileDetails } from './use-profile-details';
import { act, waitFor } from '@testing-library/react';
import { mockedAxios, mockShowNotification } from '../../../utils/test-setups';
import {
    mockProfileDetailsFormData,
    mockUserDataFromServer,
} from '../../../__mocks__/data/user-mock.data';

beforeEach(() => {
    vi.clearAllMocks();
});

const user = mockUserDataFromServer({
    id: 'userId',
});

describe('useProfileDetails, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useProfileDetails());

            expect(result.current).toBeDefined();
            expect(result.current).toEqual({
                control: expect.any(Object),
                errors: expect.any(Object),
                isSubmitting: false,
                onSubmit: expect.any(Function),
                isDirty: false,
                handleSubmit: expect.any(Function),
            });
        });

        describe('Then it should fetch the current user data', () => {
            test('And return proper values', async () => {
                const { result } = renderHookWithWrapper(() => useProfileDetails());

                mockedAxios.get.mockResolvedValueOnce({
                    data: {
                        data: user,
                    },
                });

                await waitFor(() => {
                    expect(result.current).toEqual({
                        control: expect.any(Object),
                        errors: expect.any(Object),
                        isSubmitting: false,
                        onSubmit: expect.any(Function),
                        isDirty: false,
                        handleSubmit: expect.any(Function),
                    });
                });

                expect(mockedAxios.get).toHaveBeenCalledExactlyOnceWith(
                    'http://raktim-backend:8080/api/user/me',
                );
            });
        });
    });

    describe('onSubmit, When called', () => {
        const mockFormData = mockProfileDetailsFormData({
            bio: 'I am a softeware developer',
        });
        const { id, ...mockRequestBody } = mockUserDataFromServer({
            ...user,
            ...mockFormData,
            country: mockFormData.country?.name,
            language: mockFormData.language?.language,
            timeZone: mockFormData.timeZone?.code,
        });

        describe('And update user is a success', () => {
            test('Then it should update user and refetch the user', async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {
                        data: user,
                    },
                });

                mockedAxios.put.mockResolvedValue({
                    data: {
                        data: user,
                    },
                });

                const { result } = renderHookWithWrapper(() => useProfileDetails());

                await waitFor(() => {
                    expect(mockedAxios.get).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/user/me',
                    );
                });

                await waitFor(() => {
                    expect(result.current.isDirty).toBe(false);
                });

                act(() => {
                    result.current.onSubmit(mockFormData);
                });

                await waitFor(() => {
                    expect(mockedAxios.put).toHaveBeenCalledExactlyOnceWith(
                        `http://raktim-backend:8080/api/user/${id}`,
                        mockRequestBody,
                    );
                });

                expect(mockShowNotification).toHaveBeenCalledExactlyOnceWith(
                    'User details updated successfully',
                    'success',
                );

                await waitFor(() => {
                    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
                    expect(mockedAxios.get).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/user/me',
                    );
                });
            });
        });

        describe('And update is a failure', () => {
            test('Then it should show error message', async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {
                        data: user,
                    },
                });

                mockedAxios.put.mockRejectedValue({
                    response: {
                        data: {
                            message: 'Error from the server',
                        },
                    },
                });

                const { result } = renderHookWithWrapper(() => useProfileDetails());

                await waitFor(() => {
                    expect(mockedAxios.get).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/user/me',
                    );
                });

                await waitFor(() => {
                    expect(result.current.isDirty).toBe(false);
                });

                act(() => {
                    result.current.onSubmit(mockFormData);
                });

                await waitFor(() => {
                    expect(mockedAxios.put).toHaveBeenCalledExactlyOnceWith(
                        `http://raktim-backend:8080/api/user/${id}`,
                        mockRequestBody,
                    );
                });

                expect(mockShowNotification).toHaveBeenCalledExactlyOnceWith(
                    'Error from the server',
                    'error',
                );
            });
        });
    });
});
