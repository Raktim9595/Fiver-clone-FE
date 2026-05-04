import { Box, Stack, Typography } from '@mui/material';
import logo from '../../assets/fiver-logo.png';

export const SignUpDescription = () => {
    return (
        <>
            <Box
                sx={{
                    width: '20rem',
                    height: '10rem',
                }}
            >
                <img src={logo} alt="fiver-logo" width="100%" height="100%" />
            </Box>

            <Stack
                spacing={2}
                sx={{
                    paddingLeft: '4.5rem',
                }}
            >
                <Stack>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Create a new
                    </Typography>
                    <Typography
                        variant="h5"
                        color="success"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        account
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};
