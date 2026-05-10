import { renderHook, act } from '@testing-library/react';
import { useCustomMenu } from './use-custom-menu';
import { describe, expect, test, vi } from 'vitest';

describe('useCustomMenu, Unit Test', () => {
    test('When initialized, Then it should initialise with open false and anchorEl null', () => {
        const { result } = renderHook(() => useCustomMenu());

        expect(result.current.open).toBe(false);
        expect(result.current.anchorEl).toBeNull();
    });

    describe('When called handleOpen', () => {
        test('Then it should set open true and anchorEl', () => {
            const { result } = renderHook(() => useCustomMenu());

            const button = document.createElement('button');

            act(() => {
                result.current.handleOpen({
                    currentTarget: button,
                } as any);
            });

            expect(result.current.open).toBe(true);
            expect(result.current.anchorEl).toBe(button);
        });
    });

    describe('When called haandleClose', () => {
        test('Then it should close menu and clear anchorEl', () => {
            const { result } = renderHook(() => useCustomMenu());

            const button = document.createElement('button');

            act(() => {
                result.current.handleOpen({
                    currentTarget: button,
                } as any);
            });

            act(() => {
                result.current.handleClose();
            });

            expect(result.current.open).toBe(false);
            expect(result.current.anchorEl).toBeNull();
        });
    });

    describe('When called handleActionClick', () => {
        test('Then it should call action onClick and close menu', () => {
            const { result } = renderHook(() => useCustomMenu());

            const button = document.createElement('button');
            const onClick = vi.fn();

            act(() => {
                result.current.handleOpen({
                    currentTarget: button,
                } as any);
            });

            act(() => {
                result.current.handleActionClick({
                    label: 'Edit',
                    onClick,
                });
            });

            expect(onClick).toHaveBeenCalledTimes(1);
            expect(result.current.open).toBe(false);
            expect(result.current.anchorEl).toBeNull();
        });
    });
});
