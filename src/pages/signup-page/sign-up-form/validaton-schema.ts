import z from 'zod';
import { UserRole } from './sign-up-form.types';

export const signupFormSchema = z.object({
    email: z.email('Invalid email').nonempty('Email is required'),
    address: z.string().nonempty('Address is required'),
    password: z.string().nonempty('Password is required'),
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    username: z.string().nonempty('Username is required'),
    age: z.coerce.number<number>().min(12, 'Age must be greater than 12'),
    phoneNumber: z.string().nonempty('Phone number is required'),
    role: z.enum(UserRole, {
        error: 'Invalid role',
    }),
});
