import { Box } from '@mui/material';
import { Navbar } from '../components/navbar';
import { Outlet } from 'react-router';
import { type RootLayoutViewProps } from './root-layout.types';
import { LoadingView } from '../components/loading';

export const RootLayoutView = ({ isLoading, data }: RootLayoutViewProps) => {
    if (isLoading) return <LoadingView />;
    return (
        <>
            <Navbar user={data?.data} />
            <Box
                component="main"
                sx={{
                    backgroundColor: '#f2f5f3',
                }}
            >
                <Outlet context={{ user: data }} />
            </Box>
        </>
    );
};
