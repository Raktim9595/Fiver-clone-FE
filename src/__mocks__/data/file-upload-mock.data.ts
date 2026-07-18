import {
    type FileSearchResponseData,
    FileStatus,
    type UploadUrlResponse,
} from '../../types/file-upload.types';
import { v4 as uuid } from 'uuid';

export const mockGetUploadUrlResponse = (
    options?: Partial<UploadUrlResponse>,
): UploadUrlResponse => {
    return {
        uploadUrl: 'https://example.com/upload',
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
        status: FileStatus.UPLOADING,
        id: uuid(),
        s3key: 'test.png',
        ...options,
    };
};

export const mockSearchFileResponse = (
    options?: Partial<FileSearchResponseData>,
): FileSearchResponseData => {
    return {
        id: uuid(),
        imageUrl: 'https://example.com/image.png',
        type: 'PROFILE_PICTURE',
        ...options,
    };
};
