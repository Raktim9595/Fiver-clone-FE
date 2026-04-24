import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme.ts';
import { RouterProvider } from 'react-router';
import { router } from './utils/routing/routes.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <CssBaseline />
        </ThemeProvider>
    </StrictMode>,
);
