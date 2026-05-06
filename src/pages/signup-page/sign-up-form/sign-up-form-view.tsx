import { Button, Stack, Typography } from '@mui/material';
import { type SignupFormViewProps, UserRole } from './sign-up-form.types';
import { capitalize, upperCase } from 'lodash';
import {
    AccountCircle,
    PersonAddAltOutlined,
    Email,
    LockOutlined,
    CalendarMonth,
    LocalPhone,
    LocationOn,
} from '@mui/icons-material';
import { CustomSelect } from '../../../components/select';
import { Controller } from 'react-hook-form';
import { FormInput } from '../../../components/form-input';

const SignUpFormView = ({
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
}: SignupFormViewProps) => {
    const options = Object.values(UserRole).map((role) => ({
        label: capitalize(role),
        value: upperCase(role),
    }));

    return (
        <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Typography variant="h5" align="center">
                    Create your account
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary">
                    Fill in the details below to get started
                </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
                <FormInput
                    name="firstName"
                    control={control}
                    label="First Name"
                    placeholder="First Name"
                    icon={<AccountCircle />}
                    error={errors.firstName}
                />

                <FormInput
                    name="lastName"
                    control={control}
                    label="Last Name"
                    placeholder="Last Name"
                    icon={<AccountCircle />}
                    error={errors.lastName}
                />
            </Stack>
            <FormInput
                name="username"
                control={control}
                label="User Name"
                placeholder="Enter Username"
                icon={<PersonAddAltOutlined />}
                error={errors.username}
            />
            <FormInput
                name="email"
                control={control}
                label="Email"
                placeholder="Email"
                type="email"
                icon={<Email />}
                error={errors.email}
            />
            <FormInput
                name="password"
                control={control}
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                icon={<LockOutlined />}
                error={errors.password}
            />
            <Stack direction="row" spacing={2}>
                <FormInput
                    name="age"
                    control={control}
                    label="Age"
                    placeholder="Enter Age"
                    icon={<CalendarMonth />}
                    error={errors.age}
                    type="number"
                />
                <FormInput
                    name="phoneNumber"
                    control={control}
                    label="Phome Number"
                    placeholder="Enter PhoneNumber"
                    icon={<LocalPhone />}
                    error={errors.phoneNumber}
                />
            </Stack>
            <FormInput
                name="address"
                control={control}
                label="Address"
                placeholder="Enter Address"
                icon={<LocationOn />}
                error={errors.address}
            />

            <Controller
                control={control}
                name="role"
                render={({ field }) => (
                    <CustomSelect
                        value={field.value}
                        label="Role"
                        onChange={field.onChange}
                        options={options}
                        icon={<PersonAddAltOutlined />}
                    />
                )}
            />

            {/* Sign up button  */}
            <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
            >
                Create Account
            </Button>
        </Stack>
    );
};

export default SignUpFormView;
