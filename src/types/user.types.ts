import { type BaseApiResponse } from './response.types';

export type User = {
    id: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    email: string;
    address: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    age: number;
    role: string;
};

export type GetCurrentUserApiResponse = BaseApiResponse<User>;
