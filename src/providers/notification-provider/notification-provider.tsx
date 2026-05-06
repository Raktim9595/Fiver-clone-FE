import { createContext, type ReactNode, useContext, useMemo } from 'react';
import { type NotificationContextType } from './notification-provider.types';
import useNotificationProvider from './use-notification-provider';
import { Alert, Snackbar } from '@mui/material';

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotification = () => {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error('useNotification must be used inside NotificationProvider');
    }

    return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const { open, message, closeNotification, severity, showNotification } =
        useNotificationProvider();

    const showNotificationMemo = useMemo(
        () => ({
            showNotification,
        }),
        [],
    );

    return (
        <NotificationContext.Provider value={showNotificationMemo}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={closeNotification}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert severity={severity} variant="filled" onClose={closeNotification}>
                    {message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};
