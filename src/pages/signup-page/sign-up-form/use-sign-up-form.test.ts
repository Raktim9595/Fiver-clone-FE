import { beforeEach, describe, expect, test, vi } from 'vitest';
import { useSignupForm } from './use-sign-up-form';
import { mockNavigate, mockShowNotification, renderHookWithWrapper } from '../../../utils';
import { mockUserFormData } from '../../../__mocks__/user-mock-data';
import { act, waitFor } from '@testing-library/react';
import axios from 'axios';
import { PATH } from '../../../utils/routing/paths';

const mockedAxios = vi.mocked(axios);

describe('useSignupFormHook, Unit Test', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('useSignupFormHook when initialized', () => {
        test('Then it should return the correct hook structure', () => {
            const { result } = renderHookWithWrapper(() => useSignupForm());

            expect(result.current).toEqual({
                control: expect.any(Object),
                handleSubmit: expect.any(Function),
                errors: expect.any(Object),
                isSubmitting: expect.any(Boolean),
                onSubmit: expect.any(Function),
            });
        });

        test('Then it should contain all required return fields', () => {
            const { result } = renderHookWithWrapper(() => useSignupForm());

            expect(result.current).toHaveProperty('control');
            expect(result.current).toHaveProperty('handleSubmit');
            expect(result.current).toHaveProperty('errors');
            expect(result.current).toHaveProperty('isSubmitting');
            expect(result.current).toHaveProperty('onSubmit');
        });
    });

    describe('When called handleSubmit, And valid data is passed', () => {
        const data = mockUserFormData();
        describe('And server does not give any error', () => {
            test('Then it should create user and redirect to login', async () => {
                const { result } = renderHookWithWrapper(() => useSignupForm());

                mockedAxios.post.mockResolvedValue({
                    data: {
                        data,
                    },
                });

                act(() => {
                    result.current.onSubmit(data);
                });

                await waitFor(() => {
                    expect(axios.post).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/auth/signup',
                        data,
                    );
                });

                expect(mockNavigate).toHaveBeenCalledWith(PATH.LOGIN);
                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Successfully signed up',
                    'success',
                );
            });
        });

        describe('And server returns with some error', () => {
            describe('And server sends proper error response structure', () => {
                test('Then it should display proper error message', async () => {
                    const { result } = renderHookWithWrapper(() => useSignupForm());

                    mockedAxios.post.mockRejectedValue({
                        response: {
                            data: {
                                message: 'User already exists',
                            },
                        },
                    });

                    act(() => {
                        result.current.onSubmit(data);
                    });

                    await waitFor(() => {
                        expect(axios.post).toHaveBeenCalledWith(
                            'http://raktim-backend:8080/api/auth/signup',
                            data,
                        );
                    });

                    expect(mockShowNotification).toHaveBeenCalledWith(
                        'User already exists',
                        'error',
                    );
                    expect(mockNavigate).not.toHaveBeenCalled();
                });
            });

            describe('And server sends irregular error response structure', () => {
                test('Then it should display proper error message', async () => {
                    const { result } = renderHookWithWrapper(() => useSignupForm());

                    mockedAxios.post.mockRejectedValue(new Error('wrong'));

                    act(() => {
                        result.current.onSubmit(data);
                    });

                    await waitFor(() => {
                        expect(axios.post).toHaveBeenCalledWith(
                            'http://raktim-backend:8080/api/auth/signup',
                            data,
                        );
                    });

                    expect(mockShowNotification).toHaveBeenCalledWith(
                        'Something went wrong',
                        'error',
                    );
                    expect(mockNavigate).not.toHaveBeenCalled();
                });
            });
        });
    });
});
