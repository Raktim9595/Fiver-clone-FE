import { type BaseApiResponse } from './response.types';

export const FileType = {
    PROFILE_PICTURE: 'PROFILE_PICTURE',
} as const;

export type FileType = (typeof FileType)[keyof typeof FileType];

export type FileUploadPostRequest = {
    fileName: string;
    contentType: string;
    fileSize: number;
    userId: string;
    type: FileType;
};

export const fileUploadPostRequestInitialValue: FileUploadPostRequest = {
    fileName: '',
    contentType: '',
    fileSize: 0,
    userId: '',
    type: FileType.PROFILE_PICTURE,
};

export const FileStatus = {
    UPLOADING: 'UPLOADING',
    UPLOADED: 'UPLOADED',
    FAILED: 'FAILED',
    DELETED: 'DELETED',
} as const;

export type FileStatus = (typeof FileStatus)[keyof typeof FileStatus];

export type UploadUrlResponse = {
    id: string;
    uploadUrl: string;
    s3key: string;
    status: FileStatus;
    expiresAt: string;
};

export type GetUploadUrlApiResponse = BaseApiResponse<UploadUrlResponse>;

export type GetUploadUrlAndUploadFileArgs = {
    body: FileUploadPostRequest;
    file: File;
};

export type CompleteFileUploadResponseData = {
    id: string;
    status: FileStatus;
};

export type CompleteFileUploadApiResponse = BaseApiResponse<CompleteFileUploadResponseData>;

export type FilesSearchRequestBody = {
    userId: string;
    status: FileStatus;
    type: FileType;
};

export type FileSearchResponseData = {
    id: string;
    imageUrl: string;
    type: FileType;
};

export type FileSearchApiResponse = BaseApiResponse<FileSearchResponseData[]>;
