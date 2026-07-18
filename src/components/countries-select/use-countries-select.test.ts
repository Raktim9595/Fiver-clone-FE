import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { useCountriesSelect } from './use-countries-select';
import { mockedAxios } from '../../utils/test-setups';
import { mockCountriesList } from '../../__mocks__/data/info-mock.data';
import { waitFor } from '@testing-library/react';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given useCountriesSelect Hook, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useCountriesSelect());

            expect(result.current).toStrictEqual({
                countries: [],
                isLoading: true,
            });
        });

        test('Then it should fetch the countries data', async () => {
            const mockData = mockCountriesList();
            mockedAxios.get.mockResolvedValue({
                data: {
                    data: mockData,
                },
            });
            const { result } = renderHookWithWrapper(() => useCountriesSelect());

            await waitFor(() => {
                expect(result.current).toStrictEqual({
                    isLoading: false,
                    countries: mockData,
                });
            });

            expect(mockedAxios.get).toHaveBeenCalledWith(
                'http://raktim-backend:8080/api/info/country',
            );

            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });
    });
});
