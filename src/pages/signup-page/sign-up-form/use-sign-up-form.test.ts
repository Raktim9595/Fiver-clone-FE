import { describe, expect, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useSignupForm } from './use-sign-up-form';

describe('useSignupFormHook, Unit Test', () => {
    describe('useSignupFormHook when called', () => {
        it('Then it should return the correct hook structure', () => {
            const { result } = renderHook(() => useSignupForm());

            expect(result.current).toEqual({
                control: expect.any(Object),
                handleSubmit: expect.any(Function),
                errors: expect.any(Object),
                isSubmitting: expect.any(Boolean),
                onSubmit: expect.any(Function),
            });
        });

        it('Then it should contain all required return fields', () => {
            const { result } = renderHook(() => useSignupForm());

            expect(result.current).toHaveProperty('control');
            expect(result.current).toHaveProperty('handleSubmit');
            expect(result.current).toHaveProperty('errors');
            expect(result.current).toHaveProperty('isSubmitting');
            expect(result.current).toHaveProperty('onSubmit');
        });
    });
});
