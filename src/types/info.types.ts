import { BaseApiResponse } from './response.types';

export type Country = {
    id: string;
    name: string;
    phoneCode: string;
};

export type Timezone = {
    id: string;
    code: string;
};

export type Language = {
    id: string;
    code: string;
    language: string;
};

export type CountriesApiResponse = BaseApiResponse<Country[]>;
export type TimezonesApiResponse = BaseApiResponse<Timezone[]>;
export type LanguagesApiResponse = BaseApiResponse<Language[]>;
