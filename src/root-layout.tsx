import { Outlet } from 'react-router';
import { Navbar } from './components/navbar';
import { Box } from '@mui/material';

export const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Box component="main">
                <Outlet />
            </Box>
        </>
    );
};
