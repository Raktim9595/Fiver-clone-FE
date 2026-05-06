export type Severity = 'success' | 'error' | 'warning' | 'info';

export type NotificationProviderType = {
    open: boolean;
    message: string;
    severity: Severity;
};

export type UseNotificationProvider = () => {
    open: boolean;
    message: string;
    severity: Severity;
    showNotification: (message: string, severity?: Severity) => void;
    closeNotification: () => void;
};

export type NotificationContextType = Pick<ReturnType<UseNotificationProvider>, 'showNotification'>;
