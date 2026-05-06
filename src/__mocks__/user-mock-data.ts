import { type SignUpFormType, UserRole } from '../pages/signup-page/sign-up-form/sign-up-form.types';

export const mockUserFormData = (data?: Partial<SignUpFormType>): SignUpFormType => ({
    address: 'Melbourne, Australia',
    age: 25,
    email: 'random@gmail.com',
    firstName: 'random',
    lastName: 'user',
    password: 'random',
    phoneNumber: '0412345678',
    username: 'random',
    role: UserRole.BUYER,
    ...data,
});
