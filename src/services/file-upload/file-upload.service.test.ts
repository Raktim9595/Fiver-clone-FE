import { beforeEach, describe, expect, test, vi } from 'vitest';
import {
    type FilesSearchRequestBody,
    FileStatus,
    FileType,
    type FileUploadPostRequest,
} from '../../types/file-upload.types';
import {
    deleteFile,
    getUploadUrl,
    getUploadUrlAndUploadFile,
    searchFile,
    updateFileUploadStatus,
} from './file-upload.service';
import {
    mockGetUploadUrlResponse,
    mockSearchFileResponse,
} from '../../__mocks__/file-upload-mock.data';
import { mockedAxios } from '../../utils/test-setups';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

beforeEach(() => {
    vi.clearAllMocks();
});

const body: FileUploadPostRequest = {
    contentType: 'image/png',
    fileName: 'test.png',
    fileSize: 1024,
    type: FileType.PROFILE_PICTURE,
    userId: 'user123',
};

const mockResponse = mockGetUploadUrlResponse();

describe('Given getUploadUrl, When called', () => {
    test('Then it should hit the correct end-point and return the expected data', async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                data: mockResponse,
            },
        });

        const res = await getUploadUrl(body);

        expect(res.data).toStrictEqual(mockResponse);
        expect(axios.post).toHaveBeenCalledWith(
            'http://raktim-backend:8080/api/files/upload-url',
            body,
        );
    });
});

describe('Given searchFile', () => {
    describe("When called with query key ['searchFile', { name: 'test' }]", () => {
        test('Then it should hit the correct end-point and return the expected data', async () => {
            const requestBody: FilesSearchRequestBody = {
                userId: uuid(),
                status: FileStatus.UPLOADED,
                type: FileType.PROFILE_PICTURE,
            };

            const mockSearchResponseFile = mockSearchFileResponse();

            mockedAxios.post.mockResolvedValue({
                data: {
                    data: [mockSearchResponseFile],
                },
            });

            const queryKey: [string, FilesSearchRequestBody] = ['searchFile', requestBody];

            const result = await searchFile({
                queryKey,
            } as any);

            expect(axios.post).toHaveBeenCalledWith(
                'http://raktim-backend:8080/api/files/search',
                requestBody,
            );

            expect(result.data).toEqual([mockSearchResponseFile]);
            expect(result.data).toHaveLength(1);
        });
    });
});

describe('Given updateFileUploadStatus, When called', () => {
    describe('And the status of UPLOADED is passed', () => {
        test('Then it should hit the correct end-point', async () => {
            const fileId = 'fileId';

            mockedAxios.patch.mockResolvedValue({
                data: {
                    data: {
                        id: 'fileId',
                        status: FileStatus.UPLOADED,
                    },
                },
            });

            const res = await updateFileUploadStatus(fileId, FileStatus.UPLOADED);
            expect(axios.patch).toHaveBeenCalledWith(
                `http://raktim-backend:8080/api/files/${fileId}/complete`,
            );

            expect(axios.patch).not.toHaveBeenCalledWith(
                `http://raktim-backend:8080/api/files/${fileId}/failed`,
            );

            expect(res).toEqual({
                data: {
                    id: 'fileId',
                    status: FileStatus.UPLOADED,
                },
            });
        });
    });

    describe('And the status of FAILED is passed', () => {
        test('Then it should hit the correct end-point', async () => {
            const fileId = 'fileId';

            mockedAxios.patch.mockResolvedValue({
                data: {
                    data: {
                        id: 'fileId',
                        status: FileStatus.FAILED,
                    },
                },
            });

            const res = await updateFileUploadStatus(fileId, FileStatus.FAILED);
            expect(axios.patch).toHaveBeenCalledWith(
                `http://raktim-backend:8080/api/files/${fileId}/failed`,
            );

            expect(axios.patch).not.toHaveBeenCalledWith(
                `http://raktim-backend:8080/api/files/${fileId}/complete`,
            );

            expect(res).toEqual({
                data: {
                    id: 'fileId',
                    status: FileStatus.FAILED,
                },
            });
        });
    });

    describe('And the random status is passed', () => {
        test('Then it should do nothing and should throw an error', async () => {
            const fileId = 'fileId';

            await expect(updateFileUploadStatus(fileId, 'random' as FileStatus)).rejects.toThrow(
                'Invalid file status passed',
            );

            expect(axios.patch).not.toHaveBeenCalled();
        });
    });
});

describe('Given getUploadUrlAndUploadFile, When called', () => {
    describe('And the getUploadUrl returns the upload URL successfully', () => {
        describe('And the put request to upload URL is a success', () => {
            test('Then it should upload the file to the returned URL', async () => {
                mockedAxios.post.mockResolvedValue({
                    data: {
                        data: mockResponse,
                    },
                });

                mockedAxios.put.mockResolvedValue({});

                const file = new File(['image-content'], 'profile.png', {
                    type: 'image/png',
                });

                await getUploadUrlAndUploadFile({
                    body,
                    file,
                });

                expect(axios.post).toHaveBeenCalledWith(
                    'http://raktim-backend:8080/api/files/upload-url',
                    body,
                );

                expect(axios.put).toHaveBeenCalledWith(mockResponse.uploadUrl, file, {
                    headers: {
                        'Content-Type': body.contentType,
                    },
                });

                expect(axios.patch).toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockResponse.id}/complete`,
                );

                expect(axios.patch).not.toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockResponse.id}/failed`,
                );
            });
        });

        describe('And the put request to upload URL is a failure', () => {
            test('Then it should throw an error and update the status to failed', async () => {
                mockedAxios.post.mockResolvedValue({
                    data: {
                        data: mockResponse,
                    },
                });

                mockedAxios.put.mockRejectedValue(new Error('Failed to upload file'));

                const file = new File(['image-content'], 'profile.png', {
                    type: 'image/png',
                });

                await expect(
                    getUploadUrlAndUploadFile({
                        body,
                        file,
                    }),
                ).rejects.toThrow(new Error('Failed to upload file'));

                expect(axios.post).toHaveBeenCalledWith(
                    'http://raktim-backend:8080/api/files/upload-url',
                    body,
                );

                expect(axios.put).toHaveBeenCalledWith(mockResponse.uploadUrl, file, {
                    headers: {
                        'Content-Type': body.contentType,
                    },
                });

                expect(axios.patch).toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockResponse.id}/failed`,
                );

                expect(axios.patch).not.toHaveBeenCalledWith(
                    `http://raktim-backend:8080/api/files/${mockResponse.id}/complete`,
                );
            });
        });
    });

    describe('And the getUploadUrl fails to return the upload URL', () => {
        test('Then it should throw an error and not attempt to upload the file', async () => {
            mockedAxios.post.mockRejectedValue(new Error('Failed to get upload URL'));

            const file = new File(['image-content'], 'profile.png', {
                type: 'image/png',
            });

            await expect(
                getUploadUrlAndUploadFile({
                    body,
                    file,
                }),
            ).rejects.toThrow('Failed to get upload URL');

            expect(axios.post).toHaveBeenCalledWith(
                'http://raktim-backend:8080/api/files/upload-url',
                body,
            );

            expect(axios.put).not.toHaveBeenCalled();
        });
    });
});

describe('Given deleteFile, When called with a fileId', () => {
    test('Then it should hit the correct end-point and delete the file', async () => {
        const fileId = uuid();

        mockedAxios.delete.mockResolvedValue({
            data: 'done',
        });

        const res = await deleteFile(fileId);

        expect(axios.delete).toHaveBeenCalledWith(`http://raktim-backend:8080/api/files/${fileId}`);
        expect(res).toBe('done');
    });
});
