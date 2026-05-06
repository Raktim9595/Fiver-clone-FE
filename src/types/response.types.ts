import { type AxiosError } from 'axios';

export type BaseApiResponse<T> = {
    timestamp: string;
    status: number;
    message: string;
    path: string;
    data: T;
};

export type BaseErrorResponse = {
    errorCode: string;
    message: string;
    path: string;
    timestamp: string;
    status: number;
    validationErrors: string | string[];
};

export type ApiErrorResponse = AxiosError<BaseErrorResponse>;
