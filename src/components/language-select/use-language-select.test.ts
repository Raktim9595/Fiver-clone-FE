import { beforeEach, describe, expect, test, vi } from 'vitest';
import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { waitFor } from '@testing-library/react';
import { useLanguageSelect } from './use-language-select';
import { mockLanguagesList } from '../../__mocks__/data/info-mock.data';
import { mockedAxios } from '../../utils/test-setups';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given useLanguageSelect hook, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useLanguageSelect());

            expect(result.current).toBeDefined();
            expect(result.current).toStrictEqual({
                languages: [],
                isLoading: true,
            });
        });

        test('Then it should hit correct api and return proper data', async () => {
            const languages = mockLanguagesList();
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    data: languages,
                },
            });

            const { result } = renderHookWithWrapper(() => useLanguageSelect());
            await waitFor(() => {
                expect(result.current).toStrictEqual({
                    isLoading: false,
                    languages: languages,
                });
            });

            expect(mockedAxios.get).toHaveBeenCalledExactlyOnceWith(
                'http://raktim-backend:8080/api/info/language',
            );
        });
    });
});
