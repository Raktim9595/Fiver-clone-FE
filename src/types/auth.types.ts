import { type BaseApiResponse } from './response.types';

export type SignupResponse = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    email: string;
    address: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    age: number;
    role: string;
};

export type SignupApiResponse = BaseApiResponse<SignupResponse>;
