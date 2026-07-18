import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { useTimezoneSelect } from './use-timezone-select';
import { mockedAxios } from '../../utils/test-setups';
import { mockTimezonesList } from '../../__mocks__/data/info-mock.data';
import { waitFor } from '@testing-library/react';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given useTimezone hook, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useTimezoneSelect());

            expect(result.current).toBeDefined();
            expect(result.current).toStrictEqual({
                timezones: [],
                isLoading: true,
            });
        });

        test('Then it should hit correct api and return proper data', async () => {
            const timezones = mockTimezonesList();
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    data: timezones,
                },
            });

            const { result } = renderHookWithWrapper(() => useTimezoneSelect());
            await waitFor(() => {
                expect(result.current).toStrictEqual({
                    isLoading: false,
                    timezones,
                });
            });

            expect(mockedAxios.get).toHaveBeenCalledExactlyOnceWith(
                'http://raktim-backend:8080/api/info/timezone',
            );
        });
    });
});
