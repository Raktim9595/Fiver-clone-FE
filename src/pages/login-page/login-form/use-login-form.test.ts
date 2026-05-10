import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../../utils/test-wrapper';
import { useLoginForm } from './use-login-form';
import { mockLoginFormData } from '../../../__mocks__/user-mock-data';
import {
    mockedAxios,
    mockNavigate,
    mockSetAuthToken,
    mockShowNotification,
} from '../../../utils/test-setups';
import { act, waitFor } from '@testing-library/react';
import axios from 'axios';

const { mockReload } = vi.hoisted(() => ({
    mockReload: vi.fn(),
}));

Object.defineProperty(window, 'location', {
    value: {
        ...window.location,
        reload: mockReload,
    },
    writable: true,
});

describe('useLoginForm Hook, Unit Test', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('useLoginFormHook when initialized', () => {
        test('Then it should return the correct hook structure', () => {
            const { result } = renderHookWithWrapper(() => useLoginForm());

            expect(result.current).toEqual({
                control: expect.any(Object),
                handleSubmit: expect.any(Function),
                errors: expect.any(Object),
                isSubmitting: expect.any(Boolean),
                onSubmit: expect.any(Function),
            });
        });

        test('Then it should contain all required return fields', () => {
            const { result } = renderHookWithWrapper(() => useLoginForm());

            expect(result.current).toHaveProperty('control');
            expect(result.current).toHaveProperty('handleSubmit');
            expect(result.current).toHaveProperty('errors');
            expect(result.current).toHaveProperty('isSubmitting');
            expect(result.current).toHaveProperty('onSubmit');
        });
    });

    describe('When called handleSubmit, And valida data is passed', () => {
        const data = mockLoginFormData();
        describe('And server does not give any error', () => {
            test('Then it should create user and redirect to login', async () => {
                const { result } = renderHookWithWrapper(() => useLoginForm());
                const token = 'token';

                mockedAxios.post.mockResolvedValue({
                    data: {
                        data: {
                            token,
                        },
                    },
                });

                act(() => {
                    result.current.onSubmit(data);
                });

                await waitFor(() => {
                    expect(axios.post).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/auth/signin',
                        data,
                    );
                });

                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Successfully signed in',
                    'success',
                );
                expect(mockSetAuthToken).toHaveBeenCalledWith('token');
                expect(mockNavigate).toHaveBeenCalledWith('/profile');
                expect(location.reload).toHaveBeenCalledTimes(1);
            });
        });

        describe('And server returns with some error', () => {
            describe('And server sends proper error response structure', () => {
                test('Then it should display proper error message', async () => {
                    const { result } = renderHookWithWrapper(() => useLoginForm());

                    mockedAxios.post.mockRejectedValue({
                        response: {
                            data: {
                                message: 'Incorrect Password',
                            },
                        },
                    });

                    act(() => {
                        result.current.onSubmit(data);
                    });

                    await waitFor(() => {
                        expect(axios.post).toHaveBeenCalledWith(
                            'http://raktim-backend:8080/api/auth/signin',
                            data,
                        );
                    });

                    expect(mockShowNotification).toHaveBeenCalledWith(
                        'Incorrect Password',
                        'error',
                    );
                    expect(mockNavigate).not.toHaveBeenCalled();
                    expect(mockSetAuthToken).not.toHaveBeenCalled();
                    expect(location.reload).not.toHaveBeenCalled();
                });
            });

            describe('And server sends irregular error response structure', () => {
                test('Then it should display proper error message', async () => {
                    const { result } = renderHookWithWrapper(() => useLoginForm());

                    mockedAxios.post.mockRejectedValue(new Error('wrong'));

                    act(() => {
                        result.current.onSubmit(data);
                    });

                    await waitFor(() => {
                        expect(axios.post).toHaveBeenCalledWith(
                            'http://raktim-backend:8080/api/auth/signin',
                            data,
                        );
                    });

                    expect(mockShowNotification).toHaveBeenCalledWith(
                        'Something went wrong',
                        'error',
                    );
                    expect(mockNavigate).not.toHaveBeenCalled();
                    expect(mockSetAuthToken).not.toHaveBeenCalled();
                    expect(location.reload).not.toHaveBeenCalled();
                });
            });
        });
    });
});
