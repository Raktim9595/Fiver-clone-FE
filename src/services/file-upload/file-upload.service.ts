import {
    FileUploadPostRequest,
    GetUploadUrlAndUploadFileArgs,
    GetUploadUrlApiResponse,
} from '../../types/file-upload.types';
import { END_POINTS } from '../../api';
import { privateRequest } from '../../api/axios';
import axios from 'axios';

export const getUploadUrl = async (body: FileUploadPostRequest) => {
    const res = await privateRequest.post<GetUploadUrlApiResponse>(END_POINTS.UPLOAD_URL, body);
    return res.data;
};

export const getUploadUrlAndUploadFile = async ({ body, file }: GetUploadUrlAndUploadFileArgs) => {
    const { data } = await getUploadUrl(body);

    await axios.put(data.uploadUrl, file, {
        headers: {
            'Content-Type': body.contentType,
        },
    });
};
