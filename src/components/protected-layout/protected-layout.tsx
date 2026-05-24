import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router';
import { Sidebar } from '../sidebar';

const ProtectedLayout = () => (
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
            <Outlet />
        </Box>
    </Stack>
);

export default ProtectedLayout;
