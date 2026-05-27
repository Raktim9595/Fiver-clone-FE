import { FileStatus, type UploadUrlResponse } from '../types/file-upload.types';

export const mockGetUploadUrlResponse = (
    options?: Partial<UploadUrlResponse>,
): UploadUrlResponse => {
    return {
        uploadUrl: 'https://example.com/upload',
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
        status: FileStatus.UPLOADING,
        id: '12345',
        s3key: 'test.png',
        ...options,
    };
};
