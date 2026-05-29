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
    role: string;
    status: UserStatus;
    language: string;
    timeZone: string;
    country: string;
    bio?: string;
    dateOfBirth: string;
};

export type GetCurrentUserApiResponse = BaseApiResponse<User>;

export const UserStatus = {
    ACTIVE: 'ACTIVE',
    DISABLED: 'DISABLED',
    DELETED: 'DELETED',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
