import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useNotificationProvider from './use-notification-provider';

describe('useNotificationProvider, Unit Test', () => {
    describe('When called', () => {
        it('Then it should return initial notification state', () => {
            const { result } = renderHook(() => useNotificationProvider());

            expect(result.current.open).toBe(false);
            expect(result.current.message).toBe('');
            expect(result.current.severity).toBe('info');
        });

        describe('And showNotification is called without severity', () => {
            it('should show notification with default severity info', () => {
                const { result } = renderHook(() => useNotificationProvider());

                act(() => {
                    result.current.showNotification('Something happened');
                });

                expect(result.current.open).toBe(true);
                expect(result.current.message).toBe('Something happened');
                expect(result.current.severity).toBe('info');
            });
        });

        describe('And showNotification is called with severity', () => {
            it('should show notification with provided severity', () => {
                const { result } = renderHook(() => useNotificationProvider());

                act(() => {
                    result.current.showNotification('Something happened', 'error');
                });

                expect(result.current.open).toBe(true);
                expect(result.current.message).toBe('Something happened');
                expect(result.current.severity).toBe('error');
            });
        });

        describe('And close notification is called', () => {
            it('should close notification', () => {
                const { result } = renderHook(() => useNotificationProvider());

                act(() => {
                    result.current.showNotification('Success message', 'success');
                });

                expect(result.current.open).toBe(true);

                act(() => {
                    result.current.closeNotification();
                });

                expect(result.current.open).toBe(false);
                expect(result.current.message).toBe('');
                expect(result.current.severity).toBe('info');
            });
        });
    });
});
