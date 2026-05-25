import { Box, Stack } from '@mui/material';
import { Outlet, useOutletContext } from 'react-router';
import { Sidebar } from '../sidebar';
import { type GetCurrentUserApiResponse, User } from '../../types/user.types';

const ProtectedLayout = () => {
    const { user } = useOutletContext<{
        user: GetCurrentUserApiResponse;
    }>();

    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                borderTop: '1px solid #e0e0de',
            }}
        >
            <Box
                sx={{
                    width: '16%',
                    backgroundColor: '#ffffff',
                    borderRight: '1px solid #e0e0de',
                    paddingX: '0.5rem',
                }}
            >
                <Sidebar />
            </Box>

            <Box
                sx={{
                    width: '84%',
                    flexGrow: 1,
                }}
            >
                <Outlet context={{}} />
            </Box>
        </Stack>
    );
};

export default ProtectedLayout;
