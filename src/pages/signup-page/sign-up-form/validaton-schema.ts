import z from 'zod';
import { UserStatus } from '../../../types/user.types';
import {
    countrySchema,
    languageSchema,
    roleSchema,
    timezoneSchema,
} from '../../../types/info.types';

export const signupFormSchema = z.object({
    email: z.email('Invalid email').nonempty('Email is required'),
    address: z.string().nonempty('Address is required'),
    password: z.string().nonempty('Password is required'),
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    username: z.string().nonempty('Username is required'),
    dateOfBirth: z.string().nonempty('Date of birth is required'),
    phoneNumber: z.string().nonempty('Phone number is required'),
    country: countrySchema.nullable().refine((value) => value !== null, {
        message: 'Country is required',
    }),
    timeZone: timezoneSchema.nullable().refine((value) => value !== null, {
        message: 'Timezone is required',
    }),
    language: languageSchema.nullable().refine((value) => value !== null, {
        message: 'Language is required',
    }),
    role: roleSchema.nullable().refine((value) => value !== null, {
        message: 'Role is required',
    }),
    status: z.enum(UserStatus, {
        error: 'Invalid status',
    }),
});
