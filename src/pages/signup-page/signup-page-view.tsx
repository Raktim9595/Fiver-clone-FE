import { Box, Stack } from '@mui/material';
import { SignUpForm } from './sign-up-form';
import { SignUpDescription } from './sign-up-description';

const SignUpPageView = () => {
    return (
        <Stack direction="row" spacing={2} component="section" className="page">
            <Stack
                sx={{
                    flex: 2,
                }}
            >
                <SignUpDescription />
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
                    <SignUpForm />
                </Box>
            </Box>
        </Stack>
    );
};

export default SignUpPageView;
