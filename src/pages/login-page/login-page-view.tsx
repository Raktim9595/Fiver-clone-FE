import { Box, Stack } from '@mui/material';
import { LoginForm } from './login-form';
import { LoginDescription } from './login-description';

export const LoginPageView = () => {
    return (
        <Stack direction="row" spacing={2} component="section" className="page">
            <Stack
                sx={{
                    flex: 2,
                }}
            >
                <LoginDescription />
            </Stack>
            <Box
                sx={{
                    flex: 3,
                }}
            >
                <Box
                    sx={{
                        width: '40rem',
                        backgroundColor: 'white',
                        marginTop: '6vh',
                        border: '1px solid lightgray',
                        borderRadius: '16px',
                        padding: '1.5rem 2.5rem',
                    }}
                >
                    <LoginForm />
                </Box>
            </Box>
        </Stack>
    );
};
