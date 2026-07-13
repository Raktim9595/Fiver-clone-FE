import { Country, Language, Timezone } from '../types/info.types';
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
