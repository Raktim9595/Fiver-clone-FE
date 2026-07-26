import z from 'zod';
import { countrySchema, languageSchema, timezoneSchema } from '../../../types/info.types';

export const profileDetailsValidationSchema = z.object({
    username: z.string().nonempty('Username is required'),
    email: z.email('Invalid email').nonempty('Email is required'),
    phoneNumber: z.string().nonempty('Phone number is required'),
    dateOfBirth: z.string().nonempty('Date of birth is required'),
    country: countrySchema.nullable().refine((value) => value !== null, {
        message: 'Country is required',
    }),
    timeZone: timezoneSchema.nullable().refine((value) => value !== null, {
        message: 'Timezone is required',
    }),
    language: languageSchema.nullable().refine((value) => value !== null, {
        message: 'Language is required',
    }),
    address: z.string().nonempty('Address is required'),
    bio: z.string().optional(),
});
