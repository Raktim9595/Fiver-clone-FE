import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { RouterProvider } from 'react-router';
import { router } from './utils/routing';
import './index.css';
import { NotificationProvider } from './providers/notificaton-provider';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NotificationProvider>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
                <CssBaseline />
            </ThemeProvider>
        </NotificationProvider>
    </StrictMode>,
);
