import { beforeEach, describe, expect, test, vi } from 'vitest';
import { getCountries, getLanguages, getTimezones } from './info.service';
import { mockedAxios } from '../../utils/test-setups';
import {
    mockCountryData,
    mockLanguageData,
    mockTimezonedata,
} from '../../__mocks__/info-mock.data';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Info services, Unit Test', () => {
    describe('Given getCountries, When called', () => {
        test('Then it should hit the correct end point and return the correct data', async () => {
            const mockedCountry = mockCountryData();
            const mockedCountry1 = mockCountryData({ name: 'New Zealand', phoneCode: '+64' });
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    data: [mockedCountry, mockedCountry1],
                },
            });
            const res = await getCountries();
            expect(res.data).toStrictEqual([mockedCountry, mockedCountry1]);
            expect(mockedAxios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/country');
        });
    });

    describe('Given getTimezones, When called', () => {
        test('Then it should hit the correct end point and return the correct data', async () => {
            const mockedTimezone = mockTimezonedata({
                code: 'Australia/Melbourne',
            });
            const mockedTimezone1 = mockTimezonedata({
                code: 'Australia/Sydney',
            });
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    data: [mockedTimezone, mockedTimezone1],
                },
            });
            const res = await getTimezones();
            expect(res.data).toStrictEqual([mockedTimezone, mockedTimezone1]);
            expect(mockedAxios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/timezone');
        });
    });

    describe('Given getLanguages, When called', () => {
        test('Then it should hit the correct end point and return the correct data', async () => {
            const mockedLanguage = mockLanguageData({
                code: 'en',
                language: 'English',
            });
            const mockedLanguage1 = mockLanguageData({
                code: 'fr',
                language: 'French',
            });
            mockedAxios.get.mockResolvedValueOnce({
                data: {
                    data: [mockedLanguage, mockedLanguage1],
                },
            });
            const res = await getLanguages();
            expect(res.data).toStrictEqual([mockedLanguage, mockedLanguage1]);
            expect(mockedAxios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/language');
        });
    });
});
