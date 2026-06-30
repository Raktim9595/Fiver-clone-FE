import z from 'zod';

export const profileDetailsValidationSchema = z.object({
    username: z.string().nonempty('Username is required'),
    email: z.email('Invalid email').nonempty('Email is required'),
    phoneNumber: z.string().nonempty('Phone number is required'),
    dateOfBirth: z.string().nonempty('Date of birth is required'),
    country: z.string().nonempty('Country is required'),
    language: z.string().nonempty('Language is required'),
    timeZone: z.string().nonempty('Time zone is required'),
    address: z.string().nonempty('Address is required'),
});
