import { type Country, type Language, type Timezone } from '../../types/info.types';
import { v4 as uuid } from 'uuid';

export const mockCountryData = (data?: Partial<Country>): Country => ({
    id: uuid(),
    name: 'Australia',
    phoneCode: '+61',
    ...data,
});

export const mockLanguageData = (data?: Partial<Language>): Language => ({
    id: uuid(),
    language: 'English',
    code: 'en',
    ...data,
});

export const mockTimezonedata = (data?: Partial<Timezone>): Timezone => ({
    id: uuid(),
    code: 'Australia/Melbourne',
    ...data,
});

export const mockCountriesList = (): Country[] => [
    {
        id: uuid(),
        name: 'Australia',
        phoneCode: '+61',
    },
    {
        id: uuid(),
        name: 'United States',
        phoneCode: '+1',
    },
    {
        id: uuid(),
        name: 'Canada',
        phoneCode: '+1',
    },
    {
        id: uuid(),
        name: 'United Kingdom',
        phoneCode: '+44',
    },
    {
        id: uuid(),
        name: 'Germany',
        phoneCode: '+49',
    },
    {
        id: uuid(),
        name: 'France',
        phoneCode: '+33',
    },
];
export const mockLargeeCountriesList = (): Country[] => {
    return Array.from({ length: 10_000 }, (_, index) => ({
        id: `country-${index}`,
        name: `Country ${String(index).padStart(5, '0')}`,
        phoneCode: `+${index}`,
    }));
};
