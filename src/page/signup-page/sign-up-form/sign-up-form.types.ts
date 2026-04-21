export const UserRole = {
    ADMIN: 'ADMIN',
    BUYER: 'BUYER',
    SELLER: 'SELLER',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export type SignUpFormViewProps = {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    age: number;
    address: string;
    phoneNumber: string;
    role: UserRole;
};

export const signUpFormInitialValues: SignUpFormViewProps = {
    address: '',
    age: 0,
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phoneNumber: '',
    username: '',
    role: UserRole.BUYER,
};
