import { describe, expect, test } from 'vitest';
import { renderHookWithWrapper } from '../../../utils/test-wrapper';
import { useProfileDetails } from './use-profile-details';

describe('useProfileDetails, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useProfileDetails());

            expect(result.current).toBeDefined();
            expect(result.current).toEqual({
                control: expect.any(Object),
                handleSubmit: expect.any(Function),
                errors: expect.any(Object),
                isSubmitting: expect.any(Boolean),
                onSubmit: expect.any(Function),
            });
        });
    });
});
