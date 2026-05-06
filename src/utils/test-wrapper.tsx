import { type ReactNode } from 'react';
import { NotificationProvider } from '../providers/notification-provider';
import { renderHook, type RenderHookOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createTestWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
            mutations: {
                retry: false,
            },
        },
    });

    return ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            <NotificationProvider>{children}</NotificationProvider>
        </QueryClientProvider>
    );
};

export const renderHookWithWrapper = <TResult, TProps>(
    hook: (props: TProps) => TResult,
    options?: Omit<RenderHookOptions<TProps>, 'wrapper'>,
) => {
    return renderHook(hook, {
        wrapper: createTestWrapper(),
        ...options,
    });
};
