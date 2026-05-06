import { useState } from 'react';
import {
    type NotificationProviderType,
    type Severity,
    type UseNotificationProvider,
} from './notification-provider.types';

const useNotificationProvider: UseNotificationProvider = () => {
    const [notification, setNotification] = useState<NotificationProviderType>({
        open: false,
        message: '',
        severity: 'info',
    });

    const showNotification = (message: string, severity: Severity = 'info') => {
        setNotification({
            message,
            open: true,
            severity,
        });
    };

    const closeNotification = () => {
        setNotification({
            message: '',
            open: false,
            severity: 'info',
        });
    };

    return {
        showNotification,
        closeNotification,
        ...notification,
    };
};

export default useNotificationProvider;
