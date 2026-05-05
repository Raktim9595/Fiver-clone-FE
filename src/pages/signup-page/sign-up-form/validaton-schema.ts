import z from 'zod';
import { UserRole } from './sign-up-form.types';

export const signupFormSchema = z.object({
    email: z.email('Invalid email').nonempty('Email is required'),
    address: z.string().nonempty('Address is required'),
    password: z.string().nonempty('Password is required'),
    firstname: z.string().nonempty('First name is required'),
    lastname: z.string().nonempty('Last name is required'),
    username: z.string().nonempty('Username is required'),
    age: z.coerce.number<number>().min(1),
    phoneNumber: z.string().nonempty('Phone number is required'),
    role: z.enum(UserRole, {
        error: 'Invalid role',
    }),
});
