import {
    type CompleteFileUploadApiResponse,
    type FileSearchApiResponse,
    type FilesSearchRequestBody,
    FileStatus,
    type FileUploadPostRequest,
    type GetUploadUrlAndUploadFileArgs,
    type GetUploadUrlApiResponse,
} from '../../types/file-upload.types';
import { END_POINTS } from '../../api';
import { privateRequest } from '../../api/axios';
import axios from 'axios';
import { type QueryFunctionContext } from '@tanstack/react-query';

export const getUploadUrl = async (body: FileUploadPostRequest) => {
    const res = await privateRequest.post<GetUploadUrlApiResponse>(END_POINTS.UPLOAD_URL, body);
    return res.data;
};

export const updateFileUploadStatus = async (fileId: string, status: FileStatus) => {
    if (FileStatus.UPLOADED === status) {
        const res = await privateRequest.patch<CompleteFileUploadApiResponse>(
            END_POINTS.FILE_UPLOAD_COMPLETE(fileId),
        );
        return res.data;
    } else if (FileStatus.FAILED === status) {
        const res = await privateRequest.patch<CompleteFileUploadApiResponse>(
            END_POINTS.FILE_UPLOAD_FAILED(fileId),
        );
        return res.data;
    } else {
        throw new Error('Invalid file status passed');
    }
};

export const getUploadUrlAndUploadFile = async ({ body, file }: GetUploadUrlAndUploadFileArgs) => {
    const { data } = await getUploadUrl(body);

    try {
        await axios.put(data.uploadUrl, file, {
            headers: {
                'Content-Type': body.contentType,
            },
        });

        await updateFileUploadStatus(data.id, FileStatus.UPLOADED);
    } catch (error) {
        await updateFileUploadStatus(data.id, FileStatus.FAILED);
        throw error;
    }
};

export const searchFile = async ({
    queryKey,
}: QueryFunctionContext<[string, FilesSearchRequestBody]>) => {
    const res = await privateRequest.post<FileSearchApiResponse>(
        END_POINTS.FILE_SEARCH,
        queryKey[1],
    );
    return res.data;
};

export const deleteFile = async (id: string) => {
    const res = await privateRequest.delete<string>(END_POINTS.DELETE_FILE(id));
    return res.data;
};
