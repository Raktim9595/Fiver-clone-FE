import { END_POINTS } from '../../api';
import { privateRequest } from '../../api/axios';
import {
    StartSellerApplicationApiResponse,
    StartSellerApplicationRequestBody,
} from '../../types/seller-application.types';

export const startSellerApplication = async (data: StartSellerApplicationRequestBody) => {
    const res = await privateRequest.post<StartSellerApplicationApiResponse>(
        END_POINTS.SELLER_APPLICATION.START,
        data,
    );

    return res.data;
};
