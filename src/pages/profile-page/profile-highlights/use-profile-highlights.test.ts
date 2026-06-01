import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../../utils/test-wrapper';
import { useProfileHighlights } from './use-profile-highlights';
import { act, waitFor } from '@testing-library/react';
import { mockedAxios, mockShowNotification } from '../../../utils/test-setups';
import { FileStatus, FileType, type FileUploadPostRequest } from '../../../types/file-upload.types';
import axios from 'axios';
import {
    mockGetUploadUrlResponse,
    mockSearchFileResponse,
} from '../../../__mocks__/file-upload-mock.data';

beforeEach(() => {
    vi.clearAllMocks();
    URL.createObjectURL = vi.fn(() => 'mocked-image-url');
});

const userId = 'test-user-id';

describe('useProfileHighlights Hook, Unit Test', () => {
    describe('When initialized', () => {
        test('Then it should return proper values', async () => {
            mockedAxios.post.mockResolvedValue({
                data: {
                    data: [mockSearchFileResponse()],
                },
            });
            const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

            await waitFor(() => {
                expect(mockedAxios.post).toHaveBeenCalledWith(
                    'http://raktim-backend:8080/api/files/search',
                    {
                        userId,
                        type: FileType.PROFILE_PICTURE,
                        status: FileStatus.UPLOADED,
                    },
                );

                expect(result.current.imageUrl).toBe(mockSearchFileResponse().imageUrl);
            });

            expect(result.current).toEqual({
                ref: expect.any(Object),
                profileImageUploadState: {
                    selectedImage: null,
                    fileUploadModal: false,
                    confirmationModal: false,
                    file: null,
                },
                changeProfileImageUploadState: expect.any(Function),
                handleFileChange: expect.any(Function),
                handleSavePhoto: expect.any(Function),
                handleCancelUpload: expect.any(Function),
                isUploading: false,
                imageUrl: expect.any(String),
            });
        });
    });

    describe('When called handleFileChange', () => {
        describe('And image file is selected', () => {
            test('Then it should set selectedImage and open confirmation modal', () => {
                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                const file = new File(['image-content'], 'profile.png', {
                    type: 'image/png',
                });

                const event = {
                    target: {
                        files: [file],
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;

                act(() => {
                    result.current.handleFileChange(event);
                });

                expect(URL.createObjectURL).toHaveBeenCalledWith(file);
                expect(result.current.profileImageUploadState.selectedImage).toBe(
                    'mocked-image-url',
                );
                expect(result.current.profileImageUploadState.fileUploadModal).toBe(false);
                expect(result.current.profileImageUploadState.confirmationModal).toBe(true);
            });
        });

        describe('And non-image file is selected', () => {
            test('Then it should show error notification', () => {
                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                const file = new File(['image-content'], 'profile.png', {
                    type: 'text/plain',
                });

                const event = {
                    target: {
                        files: [file],
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;

                act(() => {
                    result.current.handleFileChange(event);
                });

                expect(result.current.profileImageUploadState.selectedImage).toBe(null);
                expect(result.current.profileImageUploadState.fileUploadModal).toBe(false);
                expect(result.current.profileImageUploadState.confirmationModal).toBe(false);
                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Please select a valid image file.',
                    'error',
                );

                expect(URL.createObjectURL).not.toHaveBeenCalled();
            });
        });

        describe('And no file is selected', () => {
            test('Then it should do nothing', () => {
                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                const event = {
                    target: {
                        files: [],
                    },
                } as unknown as React.ChangeEvent<HTMLInputElement>;

                act(() => {
                    result.current.handleFileChange(event);
                });

                expect(result.current.profileImageUploadState.selectedImage).toBe(null);
                expect(result.current.profileImageUploadState.fileUploadModal).toBe(false);
                expect(result.current.profileImageUploadState.confirmationModal).toBe(false);
                expect(mockShowNotification).toHaveBeenCalledWith(
                    'No file selected for upload.',
                    'error',
                );
                expect(URL.createObjectURL).not.toHaveBeenCalled();
            });
        });
    });

    describe('When called handleSavePhoto', () => {
        const file = new File(['image-content'], 'profile.png', {
            type: 'image/png',
        });

        const getUploadUrlRequestBody: FileUploadPostRequest = {
            contentType: file.type,
            fileName: file.name,
            fileSize: file.size,
            userId,
            type: FileType.PROFILE_PICTURE,
        };

        const mockUploadUrlResponse = mockGetUploadUrlResponse();
        const mockedFileResponse = mockSearchFileResponse();

        describe('And there is no error', () => {
            test('Then it should hit proper end-points and upload image, and close the modal', async () => {
                mockedAxios.post
                    .mockResolvedValueOnce({
                        data: {
                            data: [mockedFileResponse],
                        },
                    })
                    .mockResolvedValueOnce({
                        data: { data: mockUploadUrlResponse },
                    });

                mockedAxios.put.mockResolvedValue({});
                mockedAxios.patch.mockResolvedValue({
                    data: {
                        data: {
                            id: 'mocked-id',
                            status: FileStatus.UPLOADED,
                        },
                    },
                });

                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                act(() => {
                    result.current.changeProfileImageUploadState({ confirmationModal: true });
                    result.current.handleFileChange({
                        target: {
                            files: [file],
                        },
                    } as any);
                });

                act(() => {
                    result.current.handleSavePhoto();
                });

                await waitFor(() => {
                    expect(axios.post).toHaveBeenNthCalledWith(
                        1,
                        'http://raktim-backend:8080/api/files/search',
                        {
                            userId,
                            type: FileType.PROFILE_PICTURE,
                            status: FileStatus.UPLOADED,
                        },
                    );

                    expect(axios.post).toHaveBeenNthCalledWith(
                        2,
                        'http://raktim-backend:8080/api/files/upload-url',
                        getUploadUrlRequestBody,
                    );
                });

                expect(axios.put).toHaveBeenCalledWith(mockUploadUrlResponse.uploadUrl, file, {
                    headers: {
                        'Content-Type': file.type,
                    },
                });

                expect(axios.patch).toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockUploadUrlResponse.id}/complete`,
                );

                expect(axios.patch).not.toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockUploadUrlResponse.id}/failed`,
                );

                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Profile picture updated successfully',
                    'success',
                );

                expect(result.current.profileImageUploadState).toEqual({
                    selectedImage: 'mocked-image-url',
                    fileUploadModal: false,
                    confirmationModal: false,
                    file,
                });
            });
        });

        describe('And there is an error uploading file to the provided upload-url', () => {
            test('Then it should show error notification', async () => {
                mockedAxios.post
                    .mockResolvedValueOnce({
                        data: {
                            data: [mockedFileResponse],
                        },
                    })
                    .mockResolvedValueOnce({
                        data: { data: mockUploadUrlResponse },
                    });

                mockedAxios.put.mockRejectedValue(new Error('Upload error'));
                mockedAxios.patch.mockResolvedValue({
                    data: {
                        data: {
                            id: 'mocked-id',
                            status: FileStatus.FAILED,
                        },
                    },
                });

                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                act(() => {
                    result.current.changeProfileImageUploadState({ confirmationModal: true });
                    result.current.handleFileChange({
                        target: {
                            files: [file],
                        },
                    } as any);
                });

                act(() => {
                    result.current.handleSavePhoto();
                });

                await waitFor(() => {
                    expect(axios.post).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/files/upload-url',
                        getUploadUrlRequestBody,
                    );
                });

                expect(axios.put).toHaveBeenCalledWith(mockUploadUrlResponse.uploadUrl, file, {
                    headers: {
                        'Content-Type': file.type,
                    },
                });

                expect(axios.patch).not.toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockUploadUrlResponse.id}/complete`,
                );

                expect(axios.patch).toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockUploadUrlResponse.id}/failed`,
                );

                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Failed to upload profile picture. Please try again.',
                    'error',
                );

                expect(result.current.profileImageUploadState).toEqual({
                    selectedImage: 'mocked-image-url',
                    fileUploadModal: false,
                    confirmationModal: true,
                    file,
                });
            });
        });

        describe('And there is an error in getUploadUrl API call', () => {
            test('Then it should not perform put request to uploadUrl', async () => {
                mockedAxios.post.mockRejectedValue(new Error('API error'));

                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                act(() => {
                    result.current.changeProfileImageUploadState({ confirmationModal: true });
                    result.current.handleFileChange({
                        target: {
                            files: [file],
                        },
                    } as any);
                });

                act(() => {
                    result.current.handleSavePhoto();
                });

                await waitFor(() => {
                    expect(axios.post).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/files/upload-url',
                        getUploadUrlRequestBody,
                    );
                });

                expect(axios.put).not.toHaveBeenCalled();
                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Failed to upload profile picture. Please try again.',
                    'error',
                );

                expect(result.current.profileImageUploadState).toEqual({
                    selectedImage: 'mocked-image-url',
                    fileUploadModal: false,
                    confirmationModal: true,
                    file,
                });
            });
        });

        describe('And there is an error in uploading file to the uploadUrl', () => {
            test('Then it should show error notification', async () => {
                mockedAxios.post
                    .mockResolvedValueOnce({
                        data: {
                            data: [mockedFileResponse],
                        },
                    })
                    .mockResolvedValueOnce({
                        data: { data: mockUploadUrlResponse },
                    });

                mockedAxios.put.mockRejectedValue(new Error('Upload error'));

                const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

                act(() => {
                    result.current.changeProfileImageUploadState({ confirmationModal: true });
                    result.current.handleFileChange({
                        target: {
                            files: [file],
                        },
                    } as any);
                });

                act(() => {
                    result.current.handleSavePhoto();
                });

                await waitFor(() => {
                    expect(axios.post).toHaveBeenCalledWith(
                        'http://raktim-backend:8080/api/files/upload-url',
                        getUploadUrlRequestBody,
                    );
                });

                expect(axios.put).toHaveBeenCalledWith(mockUploadUrlResponse.uploadUrl, file, {
                    headers: {
                        'Content-Type': file.type,
                    },
                });

                expect(mockShowNotification).toHaveBeenCalledWith(
                    'Failed to upload profile picture. Please try again.',
                    'error',
                );

                expect(result.current.profileImageUploadState).toEqual({
                    selectedImage: 'mocked-image-url',
                    fileUploadModal: false,
                    confirmationModal: true,
                    file,
                });
            });
        });
    });

    describe('When called changeProfileImageUploadState with new state', () => {
        test('Then it should update profileImageUploadState with new state', () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights(userId));

            act(() => {
                result.current.changeProfileImageUploadState({
                    fileUploadModal: true,
                    selectedImage: 'new-image-url',
                    confirmationModal: true,
                });
            });

            expect(result.current.profileImageUploadState).toStrictEqual({
                fileUploadModal: true,
                selectedImage: 'new-image-url',
                confirmationModal: true,
                file: null,
            });
        });
    });

    describe('When renderred, And userId is not passed', () => {
        test('Then it should not call searchFile API', async () => {
            const { result } = renderHookWithWrapper(() => useProfileHighlights(''));

            await waitFor(() => {
                expect(mockedAxios.post).not.toHaveBeenCalledWith(
                    'http://raktim-backend:8080/api/files/search',
                    expect.anything(),
                );
            });
        });
    });
});
