import { type BaseApiResponse } from './response.types';
import { UserStatus } from './user.types';

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

export type SignupRequestBody = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
    address: string;
    phoneNumber: string;
    roleId?: string;
    status: UserStatus;
    timeZone?: string;
    language?: string;
    country?: string;
};

export type SigninResponse = {
    token: string;
};

export type SignupApiResponse = BaseApiResponse<SignupResponse>;

export type SigninApiResponse = BaseApiResponse<SigninResponse>;
