import { beforeEach, describe, expect, test, vi } from 'vitest';
import { FileType, FileUploadPostRequest } from '../../types/file-upload.types';
import { getUploadUrl, getUploadUrlAndUploadFile } from './file-upload.service';
import { mockGetUploadUrlResponse } from '../../__mocks__/file-upload-mock.data';
import { mockedAxios } from '../../utils/test-setups';
import axios from 'axios';

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

describe('Given getUploadUrlAndUploadFile, When called', () => {
    describe('And the getUploadUrl returns the upload URL successfully', () => {
        test('Then it should upload the file to the returned URL', async () => {
            mockedAxios.post.mockResolvedValue({
                data: {
                    data: mockResponse,
                },
            });

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
