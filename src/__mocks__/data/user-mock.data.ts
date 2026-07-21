import { type LoginFormType } from '../../pages/login-page/login-form/login-form.types';
import { ProfileDetailsFormType } from '../../pages/profile-page/profile-details/profile-detils.types';
import {
    type SignUpFormType,
    UserRole,
} from '../../pages/signup-page/sign-up-form/sign-up-form.types';
import { UserStatus, type User } from '../../types/user.types';
import { mockCountryData, mockLanguageData, mockTimezonedata } from './info-mock.data';

export const mockUserFormData = (data?: Partial<SignUpFormType>): SignUpFormType => ({
    address: 'Melbourne, Australia',
    dateOfBirth: '2001-02-25',
    email: 'random@gmail.com',
    firstName: 'random',
    lastName: 'user',
    password: 'random',
    phoneNumber: '0412345678',
    username: 'random',
    role: UserRole.BUYER,
    status: UserStatus.ACTIVE,
    country: mockCountryData({ name: 'Australia' }),
    language: mockLanguageData({ code: 'En', language: 'English' }),
    timeZone: mockTimezonedata({ code: 'Australia/Melbourne' }),
    ...data,
});

export const mockLoginFormData = (data?: Partial<LoginFormType>): LoginFormType => ({
    password: 'johnDoe',
    username: 'johnDoe',
    ...data,
});

export const mockUserDataFromServer = (data?: Partial<User>): User => ({
    address: 'Melbourne, Australia',
    dateOfBirth: '2001-02-25',
    email: 'random@gmail.com',
    firstName: 'random',
    lastName: 'user',
    phoneNumber: '0412345678',
    username: 'random',
    role: UserRole.BUYER,
    createdAt: new Date().toString(),
    id: 'random',
    updatedAt: new Date().toString(),
    country: 'Australia',
    language: 'English',
    status: UserStatus.ACTIVE,
    timeZone: 'Australia/Melbourne',
    ...data,
});

export const mockProfileDetailsFormData = (
    data?: Partial<ProfileDetailsFormType>,
): ProfileDetailsFormType => ({
    address: 'Melbourne, Australia',
    dateOfBirth: '2001-02-25',
    email: 'random@gmail.com',
    phoneNumber: '0412345678',
    username: 'random',
    country: mockCountryData({ name: 'Australia' }),
    language: mockLanguageData({ code: 'En', language: 'English' }),
    timeZone: mockTimezonedata({ code: 'Australia/Melbourne' }),
    ...data,
});
