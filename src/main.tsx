import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { RouterProvider } from 'react-router';
import { router } from './utils/routing';
import './index.css';
import { NotificationProvider } from './providers/notificaton-provider';

import { queryClient } from './utils';
import { QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NotificationProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
                    <CssBaseline />
                </ThemeProvider>
            </QueryClientProvider>
        </NotificationProvider>
    </StrictMode>,
);
