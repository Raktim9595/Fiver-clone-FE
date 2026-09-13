import { type BaseApiResponse } from './response.types';
import z from 'zod';

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

export type Role = {
    id: string;
    name: string;
};

export type CountriesApiResponse = BaseApiResponse<Country[]>;
export type TimezonesApiResponse = BaseApiResponse<Timezone[]>;
export type LanguagesApiResponse = BaseApiResponse<Language[]>;
export type RolesApiResponse = BaseApiResponse<Role[]>;

export const countrySchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    phoneCode: z.string().optional(),
});

export const timezoneSchema = z.object({
    id: z.string().optional(),
    code: z.string(),
});

export const languageSchema = z.object({
    id: z.string().optional(),
    code: z.string().optional(),
    language: z.string(),
});

export const roleSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
});
