import { Button, Stack, Typography } from '@mui/material';
import { FormInput } from '../../../components/form-input';
import { LockOutlined, PersonAddAltOutlined } from '@mui/icons-material';
import { type LoginFormViewProps } from './login-form.types';

export const LoginFormView = ({
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
}: LoginFormViewProps) => {
    return (
        <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Typography variant="h5" align="center">
                    Log in to your account
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary">
                    Access your account to continue
                </Typography>
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
                name="password"
                control={control}
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                icon={<LockOutlined />}
                error={errors.password}
            />

            {/* Login button  */}
            <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
            >
                Log In
            </Button>
        </Stack>
    );
};
