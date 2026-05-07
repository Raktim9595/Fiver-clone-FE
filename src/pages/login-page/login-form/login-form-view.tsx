import { Box, Button, Stack, Typography } from '@mui/material';
import { FormInput } from '../../../components/form-input';
import { LockOutlined, PersonAddAltOutlined } from '@mui/icons-material';
import { type LoginFormViewProps } from './login-form.types';

import fiverrLogoGreen from '../../../assets/fiver-green.png';
import { Link } from 'react-router';
import { PATH } from '../../../utils/routing/paths';

export const LoginFormView = ({
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
}: LoginFormViewProps) => {
    return (
        <Stack
            spacing={4}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                alignItems: 'center',
            }}
        >
            <Box
                component="div"
                sx={{
                    height: '5rem',
                    width: '15rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <img src={fiverrLogoGreen} alt="fiver-logo" width="100%" height="100%" />
            </Box>
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
                fullWidth
            >
                Log In
            </Button>

            <Stack component="div" direction="row" spacing={1}>
                <Typography>Don't have an account?</Typography>
                <Typography
                    component={Link}
                    to={PATH.SIGNUP}
                    sx={{
                        textDecoration: 'none',
                        color: 'green',
                        fontWeight: 500,
                    }}
                >
                    Sign up
                </Typography>
            </Stack>
        </Stack>
    );
};
