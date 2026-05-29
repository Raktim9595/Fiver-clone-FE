import z from 'zod';
import { UserRole } from './sign-up-form.types';
import { UserStatus } from '../../../types/user.types';
import dayjs, { Dayjs } from 'dayjs';

export const signupFormSchema = z.object({
    email: z.email('Invalid email').nonempty('Email is required'),
    address: z.string().nonempty('Address is required'),
    password: z.string().nonempty('Password is required'),
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    username: z.string().nonempty('Username is required'),
    dateOfBirth: z.string().nonempty('Date of birth is required'),
    phoneNumber: z.string().nonempty('Phone number is required'),
    timeZone: z.string().nonempty('Time zone is required'),
    language: z.string().nonempty('Language is required'),
    country: z.string().nonempty('Country is required'),
    role: z.enum(UserRole, {
        error: 'Invalid role',
    }),
    status: z.enum(UserStatus, {
        error: 'Invalid status',
    }),
});
